import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import SignUp from './pages/SignUp'

export default function App() {
  return (
      <BrowserRouter> 
      <Routes>
        <Route path  = "/" element={<Home />} />
        <Route path  = "/sign-up" element={<SignUp />} />
        <Route path  = "/sign-in" element={<SignIn />} />
        <Route path  = "/projects" element={<Projects />} />
        <Route path  = "/about" element={<About />} />
        <Route path  = "/dashboard" element={<Dashboard />} />

      </Routes>
      </BrowserRouter>
  )
}


