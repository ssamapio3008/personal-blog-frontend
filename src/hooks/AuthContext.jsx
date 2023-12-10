import { useContext, createContext, useState } from "react";
import { api } from "../service/api";

import React from 'react'

const AuthContext = createContext()

const AuthProvider = ({children}) => {

  const [data, setData] = useState({})

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

export default AuthProvider