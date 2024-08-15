import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./pages/home/home"
import Login from "./pages/login/Login"
import Profile from "./pages/Profile/Profile"
import Register from "./pages/register/Register"

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>   
   </BrowserRouter>
   
  )
}

export default App
