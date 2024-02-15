import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Components/pages/product/home'
import Navbar from './Components/Nav/Navbar'
import { useAuth } from './Components/context/authProvider'
import DashboardSidebar from './Components/Nav/dashboard-sidebar'
import Dashboard from './Components/pages/dashboard/dashboard'

function App() {

  const {isInDashboard} = useAuth();

  return (
    <BrowserRouter>
      <div >
        <div className='nav-row'>
          {isInDashboard && <DashboardSidebar/>}
          {!isInDashboard && <Navbar/>}
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
