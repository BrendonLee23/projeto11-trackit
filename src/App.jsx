import axios from "axios"
// import styled from "styled-components"
import TelaLogin from "./pages/TelaLogin/TelaLogin"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import TelaCadastro from "./pages/TelaCadastro/TelaCadastro"
import UserContext from "./contexts/UserContext"
import { useState } from "react"
import HabitPage from "./pages/HabitPage/HabitPage"
import DayPage from "./pages/DayPage/DayPage"
import HistoricPage from "./pages/HistoricPage/HistoricPage"

export default function App() {

  axios.defaults.headers.common['Authorization'] = '2pUWOijhJnpz3JVF19w1b9uP'
  const [user, setUser] = useState({})
  const [porcentagem, setPorcentagem] = useState(0)
  const [userImage, setUserImage] = useState({})
  console.log(user)

  return (
    <UserContext.Provider value={{porcentagem, setPorcentagem, user, setUser, userImage, setUserImage}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TelaLogin />}></Route>
          <Route path="/cadastro" element={<TelaCadastro />}></Route>
          <Route path="/habit" element={<HabitPage />}></Route>
          <Route path="/day" element={<DayPage />}></Route>
          <Route path="/historic" element={<HistoricPage />}></Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}



