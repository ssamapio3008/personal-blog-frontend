import { Container } from "./style";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Button_text } from "../../components/Button_text";
import { Screen_log } from "../../components/Screen_log";

export function Login() {

  return(

    <Container>

      <Screen_log title='Login'>


        <Input placeholder='Usuário' type='text' />
        <Input placeholder='Senha' type='password' />

        <Button_text title='Não possui cadastro?'/>

        <Button title='Logar' /> 

      </Screen_log>
    </Container>
    
  );

}