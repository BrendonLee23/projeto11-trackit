import axios from "axios"
// import styled from "styled-components"
import TelaLogin from "./pages/TelaLogin/TelaLogin"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import TelaCadastro from "./pages/TelaCadastro/TelaCadastro"
// import TelaCadastro from "./pages/TelaCadastro/TelaCadastro"

export default function App() {

  axios.defaults.headers.common['Authorization'] = '2pUWOijhJnpz3JVF19w1b9uP'

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TelaLogin />}></Route>
          <Route path="/cadastro" element={<TelaCadastro />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}



