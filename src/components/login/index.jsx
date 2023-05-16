import { InputForm, InputLogin, Line, LoginContainer } from "./style"
import headerIMG from '../../assets/logo.png'

const Login = () => {
  return (
    <LoginContainer>
      <img src={headerIMG} alt="" />
      <InputForm placeholder="Usuário ou email" type="email" required />
      <InputForm placeholder="Senha" type="password" required />
      <Line />
      <InputLogin>LOGIN</InputLogin>
    </LoginContainer>

  )
}

export default Login
