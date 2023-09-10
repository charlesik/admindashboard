
import './App.css'
import AdminDashboard from './pages/AdminDashboard'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  

  return (
    <div>
      <Routes>
        <Route path='/' element={<AdminDashboard/>}/>
        <Route path='login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
