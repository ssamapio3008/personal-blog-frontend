import {Container, Content } from './style';
import { Post } from '../../components/Post';
import { Header } from '../../components/Header';

export const Feed = ()=>{
  return (
    <Container>

      <Header />

      <Content>
        <Post user='acato21' />
      </Content>

    </Container>
  )
}