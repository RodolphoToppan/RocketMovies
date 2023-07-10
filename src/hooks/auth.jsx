import { api } from '../services/api'

import { createContext, useContext, useEffect, useState } from 'react'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password })
      const { token, user } = response.data

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      localStorage.setItem('@rocketMovies:user', JSON.stringify(user))
      localStorage.setItem('@rocketMovies:token', token)

      setData({ user, token })
    } catch (error) {
      if (error.response.data.message) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível entrar')
      }
    }
  }

  async function signOut() {
    localStorage.removeItem('@rocketMovies:user')
    localStorage.removeItem('@rocketMovies:token')

    setData({})
  }

  async function updateProfile({ user }) {
    try {
      await api.put('/users', user)
      localStorage.setItem('@rocketMovies:user', JSON.stringify(user))

      setData({ user, token: data.token })
      alert('Perfil atualizado!')
    } catch (error) {
      if (error.response.data.message) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível entrar')
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem('@rocketMovies:user')
    const token = localStorage.getItem('@rocketMovies:token')

    if (user && token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({ user: JSON.parse(user), token })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, updateProfile, user: data.user }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
