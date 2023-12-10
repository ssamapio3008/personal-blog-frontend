import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {Feed} from '../pages/Feed'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/feed' element = {<Feed/>}/>
    </Routes>
  )
}

export {AppRoutes}