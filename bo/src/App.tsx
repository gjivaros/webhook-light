
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import LandingPage from "./pages/LandingPage"

function App() {

  return <Routes>
    <Route path="" element={<LandingPage/>} />
    <Route path="/app" element={<Dashboard/>} />
  </Routes>
}

export default App
