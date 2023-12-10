import { useContext, createContext, useState, useEffect } from "react";
import { api } from "../service/api";

export const AuthContext = createContext({})

const AuthProvider = ({children}) => {

  const [data, setData] = useState({user : "name"})

  const login = async({email, username,password}) => {
    try{

      const response = await api.post('/sessions/', {email, username, password})
      
      const {token, user} = response.data
      
      localStorage.setItem("@personal-blog-user", JSON.stringify(user))
      localStorage.setItem("@personal-blog-token", JSON.stringify(token))
      
      api.defaults.headers.authorization = `Bearer ${token}`//insert of the token inside of headers to take it in the backend
      setData(response.data)//user info
    } catch (error){
      if(error.message)alert(error.response.data.message)
      else alert('Não foi possível entrar...')
    }
      
  }

  const logout = async ()=>{
    localStorage.removeItem("@personal-blog-user")
    localStorage.removeItem("@personal-blog-token")
    setData({})//turning into an empty object
  }

  /*useEffect(()=> {
    const user = localStorage.getItem("@personal-blog-user")
    const token = localStorage.getItem("@personal-blog-token")

    if(user && token){
      setData({
        user : JSON.parse(user), 
        token})
    } else logout()
  }, [])*/

  return (
    <AuthContext.Provider value = {
      {
        logout,
        login,
        user : data.user//user object with all info
      }
    }>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext)
  return context
}

export {AuthProvider, useAuth}//assim terei acesso ao contexto que permeia as rotas e disponibiliza os dados