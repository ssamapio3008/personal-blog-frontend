import { Container, Perfil, Input } from "../Header/style";
import imgPerfil from '../../img/perfil.jpg';
import { FaPowerOff } from "react-icons/fa6";
import { useAuth } from "../../hooks/AuthContext";
import {api} from '../../service/api'
import defaultProfile from '../../assets/defaultavatar.png'
import {useState} from 'react'
export function Header() {
    const {logout , user} = useAuth()
     console.log(user)
     const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : defaultProfile 

    const [avatar, setavatar] = useState(avatarURL)
    return(

        <Container>
            <Perfil>

                <button>
                    <img src={avatar} alt="Foto de Perfil" />
                </button>

                <span>Olá, {user.name}</span>

            </Perfil>

            <Input placeholder="Pesquisar usuário"  type="text"/>

            <FaPowerOff
            
            cursor={`pointer`}
            onClick={logout}
            color="#dfdfdf"
            />    
            
        </Container>

    );

}