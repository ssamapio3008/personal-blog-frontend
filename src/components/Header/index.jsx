import { Container, Perfil, Input } from "../Header/style";
import imgPerfil from '../../img/perfil.jpg';
import { FaPowerOff } from "react-icons/fa6";
import { useAuth } from "../../hooks/AuthContext";
export function Header() {
    const {logout , user} = useAuth()
    return(

        <Container>
            <Perfil>

                <button>
                    <img src={imgPerfil} alt="Foto de Perfil" />
                </button>

                <span>Olá, {user.name}</span>

            </Perfil>

            <Input placeholder="Pesquisar usuário"  type="text"/>

            <FaPowerOff
            onClick={logout}
            />    
            
        </Container>

    );

}