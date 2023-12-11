
import {Container, Content} from './style'
import { Button } from '../../components/Button'
import { Post } from '../../components/Post'
import {useAuth} from '../../hooks/AuthContext'
import { useEffect, useState, useRef } from 'react'
import { api } from '../../service/api'
import {Header} from '../../components/Header'

export const Feed = ()=>{

  const [title, setTile] = useState('')
  const {user, logout} = useAuth()
  const [posts, setPosts] = useState({})

  useEffect(() => {

    async function fetchData(){
      const response = await api.get('/posts/inside', {post_id : 1})
      setPosts(response.data)
      console.log(response.data)
    }
    fetchData()
  }, [])

  return (
    <Container>

      <Header />

      <Content>
        <Post user='acato21' />
      </Content>

    </Container>
  )
}