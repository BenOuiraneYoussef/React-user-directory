import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([])
  const [editUser, setEditUser] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', phone: '' })
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get('http://localhost:5000/api/users')
      .then(res => setUsers(res.data))
  }, [])

  const fetchUsers = () => {
    axios.get('http://localhost:5000/api/users')
      .then(res => setUsers(res.data))
  }
  const validate = () => {
  if (!form.name.trim()) return 'Name is required'
  if (!form.email.trim()) return 'Email is required'
  if (!/^\S+@\S+\.\S+$/.test(form.email)) return 'Enter a valid email'
  if (!form.phone.trim()) return 'Phone is required'
  return null
}

  const handleSubmit = () => {
  const err = validate()
  if (err) return setError(err)
  setError(null)
  axios.post('http://localhost:5000/api/users', form)
    .then(() => {
      fetchUsers()
      setForm({ name: '', email: '', phone: '' })
    })
}
  const handleDelete = (id) => {
  axios.delete(`http://localhost:5000/api/users/${id}`)
    .then(() => fetchUsers())
}
const handleEdit = (id) => {
  const err = validate()
  if (err) return setError(err)
  setError(null)
  axios.put(`http://localhost:5000/api/users/${id}`, form)
    .then(() => {
      fetchUsers()
      setForm({ name: '', email: '', phone: '' })
      setEditUser(null)
    })
}
const filteredUsers = users.filter(user =>
  user.name.toLowerCase().includes(search.toLowerCase())
)

  return (
    <div>
      <h1>User Directory</h1>

      <div className="container">
        <div className="form-card">
          <input
  placeholder="Search by name..."
  value={search}
  onChange={e => setSearch(e.target.value)}
/>
  <h2>{editUser ? 'Edit User' : 'Add New User'}</h2>
  <input
    placeholder="Name"
    value={form.name}
    onChange={e => setForm({ ...form, name: e.target.value })}
  />
  <input
    placeholder="Email"
    value={form.email}
    onChange={e => setForm({ ...form, email: e.target.value })}
  />
  <input
    placeholder="Phone"
    value={form.phone}
    onChange={e => setForm({ ...form, phone: e.target.value })}
  />
  {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
  <button className="btn-primary" onClick={editUser ? () => handleEdit(editUser) : handleSubmit}>
    {editUser ? 'Update User' : 'Add User'}
  </button>
</div>

        {filteredUsers.map(user => (
          <div className="user-card" key={user._id}>
            <div className="user-info">
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <p>{user.phone}</p>
            </div>
            <div className="user-actions">
              {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
              <button className="btn-edit" onClick={() => {
                setEditUser(user._id)
                setForm({ name: user.name, email: user.email, phone: user.phone })
              }}>Edit</button>
              <button className="btn-delete" onClick={() => handleDelete(user._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App