import { useState } from 'react'
import axios from 'axios'

function Login({ onLogin }) {
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState(null)
  const [isRegister, setIsRegister] = useState(false)

  const handleSubmit = async () => {
    try {
      if (isRegister) {
        await axios.post('http://localhost:5000/api/auth/register', form)
        setIsRegister(false)
        setError('Registered! Please login now.')
      } else {
        const res = await axios.post('http://localhost:5000/api/auth/login', form)
        localStorage.setItem('token', res.data.token)
        onLogin()
      }
    } catch (err) {
      setError(err.response.data.error)
    }
  }

  return (
    <div>
      <h1>User Directory</h1>
      <div className="container">
        <div className="form-card">
          <h2>{isRegister ? 'Register' : 'Login'}</h2>
          <input
            placeholder="Email"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
          />
          <input
            placeholder="Password"
            type="password"
            value={form.password}
            onChange={e => setForm({ ...form, password: e.target.value })}
          />
          {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
          <button className="btn-primary" onClick={handleSubmit}>
            {isRegister ? 'Register' : 'Login'}
          </button>
          <p
            style={{ marginTop: '14px', cursor: 'pointer', color: '#1a3c5e' }}
            onClick={() => { setIsRegister(!isRegister); setError(null) }}
          >
            {isRegister ? 'Already have an account? Login' : "Don't have an account? Register"}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login