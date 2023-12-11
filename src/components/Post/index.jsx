import { Container, Info, Interaction } from "./style";

import Perfil from '../../img/perfil.jpg'

import { FaRegCommentDots, FaCommentDots } from "react-icons/fa";
import { GoHeart, GoHeartFill } from "react-icons/go";
import {useAuth} from '../../hooks/AuthContext'
import reactimg  from '../../assets/react.svg'
import {api} from '../../service/api'
import { useState } from "react";

export function Post({ content, postIndex, likes}){
    const {user} = useAuth()

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : reactimg 
    const postURL = postIndex ? `${api.defaults.baseURL}/files/${postIndex}` : null
    const [avatar, setAvatar] = useState(avatarURL)
    const [postImage, setPostImage ] = useState(postURL)
    return(

        <Container>

            <Info> 
                <button>
                    <img src={avatar} alt="Foto de Perfil" />
                </button>

                <a href="#">{user.name}</a>
            </Info>
            {
                postImage && <img src={postImage} alt="Foto de Post" />

            }
            
            <Interaction>
                <div>
                    <GoHeart />
                    <FaRegCommentDots />
                </div>
               
                <p>{likes} likes</p>
            </Interaction>

            <p>
                {content}
            </p>

        </Container>

    );

}