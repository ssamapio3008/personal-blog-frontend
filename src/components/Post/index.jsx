import { Container, Info, Interaction } from "./style";

import Perfil from '../../img/perfil.jpg'

import { FaRegCommentDots, FaCommentDots } from "react-icons/fa";
import { GoHeart, GoHeartFill } from "react-icons/go";
 
export function Post({user}){

    return(

        <Container>

            <Info> 
                <button>
                    <img src={Perfil} alt="Foto de Perfil" />
                </button>

                <a href="#">{user}</a>
            </Info>

            <img src={Perfil} alt="Foto de Post" />

            <Interaction>
                <GoHeart />
                <FaRegCommentDots />
            </Interaction>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi adipisci consequuntur nam laborum ipsum doloremque, delectus aliquid, soluta excepturi praesentium voluptatum natus aut expedita eveniet iusto ullam quibusdam laudantium corrupti!</p>

        </Container>

    );

}