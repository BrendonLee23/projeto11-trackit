import axios from "axios"
// import styled from "styled-components"
import TelaLogin from "./pages/TelaLogin/TelaLogin"

export default function App() {

  axios.defaults.headers.common['Authorization'] = '2pUWOijhJnpz3JVF19w1b9uP'

  return (
    <div>
      <TelaLogin/>
      {/* <TelaCadastro></TelaCadastro> */}
    </div>
  )
}



