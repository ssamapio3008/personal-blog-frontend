import { Container } from "./style";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Button_text } from "../../components/Button_text";
import { Screen_log } from "../../components/Screen_log";
import { useEffect, useState, Suspense} from "react";
import { useAuth } from "../../hooks/AuthContext";
import { Link } from "react-router-dom";
export function Login() {
  const {login} = useAuth()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleSigIn = async () => {
    if(!username && !email || !password) return alert('preencha todos os campos')

    await login({username, email, password})
  }

  useEffect(()=> {
    console.log(username)
  }, [username])

  return(

    <Container>

      <Screen_log title='Login'>


        <Input 
        onChange = {e => setEmail(e.target.value)}
        placeholder='e-mail' 
        type='text' />
        
        <Input 
        onChange = {e => setUsername(e.target.value)}
        placeholder='ou nome de usuário' 
        type='text' />
        
        <Input 
        onChange={e => setPassword(e.target.value)}
        placeholder='Senha' 
        type='password' />
        <Link to = '/register'>
          <Button_text title='Não possui cadastro?'/>
        </Link>
        

        <Button 
        onClick = {handleSigIn}
        title='Entrar' /> 

      </Screen_log>
    </Container>
    
  );

}