import { Container, Info, Interaction } from "./style";

import Perfil from '../../img/perfil.jpg'

import { FaRegCommentDots, FaCommentDots } from "react-icons/fa";
import { GoHeart, GoHeartFill } from "react-icons/go";
import {useAuth} from '../../hooks/AuthContext'
import defaultavatar  from '../../assets/defaultavatar.png'
import {api} from '../../service/api'
import { useState } from "react";

export function Post({ content, postIndex, likes, user_array}){
    
    const [name, user_avatar, username] = user_array
    const avatarURL = user_avatar ? `${api.defaults.baseURL}/files/${user_avatar}` : defaultavatar 
    const postURL = postIndex ? `${api.defaults.baseURL}/files/${postIndex}` : null
    const [avatar, setAvatar] = useState(avatarURL)
    const [postImage, setPostImage ] = useState(postURL)
    return(

        <Container>

            <Info> 
                <button>
                    <img src={avatar} alt="Foto de Perfil" />
                </button>

                <a href="#">{name}</a>
            </Info>
            {
                postImage && <img src={postImage} alt="Foto de Post" />

            }
            
            <p>
                {content}
            </p>

            <Interaction>
                <div>
                    <GoHeart />
                    <FaRegCommentDots />
                </div>
               
                <p>{likes.likes} likes</p>
            </Interaction>

            

        </Container>

    );

}