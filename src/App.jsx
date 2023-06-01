import axios from "axios"
// import styled from "styled-components"
import TelaLogin from "./pages/TelaLogin/TelaLogin"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import TelaCadastro from "./pages/TelaCadastro/TelaCadastro"
import HabitPage from "./pages/HabitPage/HabitPage"
import DayPage from "./pages/DayPage/DayPage"
import UserContext from "./contexts/UserContext"
import { useState } from "react"

export default function App() {

  axios.defaults.headers.common['Authorization'] = '2pUWOijhJnpz3JVF19w1b9uP'
  const [user, setUser] = useState({})
  console.log(user)

  return (
    <UserContext.Provider value={{user, setUser}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TelaLogin />}></Route>
          <Route path="/cadastro" element={<TelaCadastro />}></Route>
          <Route path="/habit" element={<HabitPage />}></Route>
          <Route path="/day" element={<DayPage />}></Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}



