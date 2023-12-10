import { Container } from "./style";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Button_text } from "../../components/Button_text";
import { Screen_log } from "../../components/Screen_log";

export function Register() {

  return(

    <Container>

      <Screen_log title='Cadastro'>


        <Input placeholder='Nome de usuário' type='text' />

        <Input placeholder='Email' type='email' />

        <Input placeholder='Senha' type='password' />

        <Input placeholder='Confirmar senha' type='password' />

        <Button_text title='Já possui um cadastro?'/>

        <Button title='Cadastrar' /> 

      </Screen_log>
    </Container>
    
  );

}