import { Routes, Route } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Profile } from '../Pages/Profile'
import { NewMovie } from '../Pages/NewMovie'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/newmovie" element={<NewMovie />} />
    </Routes>
  )
}
