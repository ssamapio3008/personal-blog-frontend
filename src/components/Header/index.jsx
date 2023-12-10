import { Container, Perfil, Input } from "../Header/style";
import imgPerfil from '../../img/perfil.jpg';

import { FaPowerOff } from "react-icons/fa6";

export function Header() {

    return(

        <Container>
            <Perfil>

                <button>
                    <img src={imgPerfil} alt="Foto de Perfil" />
                </button>

                <span>Olá, Lucas!</span>

            </Perfil>

            <Input placeholder="Pesquisar usuário"  type="text"/>

            <FaPowerOff />    
            
        </Container>

    );

}