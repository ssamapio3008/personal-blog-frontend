import { Container } from "./style";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Button_text } from "../../components/Button_text";
import { Screen_log } from "../../components/Screen_log";
import { useEffect, useState } from "react";

export function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

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

        <Button_text title='Não possui cadastro?'/>

        <Button title='Logar' /> 

      </Screen_log>
    </Container>
    
  );

}