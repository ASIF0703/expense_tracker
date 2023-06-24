import React from 'react'
import { Home } from './pages/Home'
import { Contact } from './pages/Contact'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './pages/Navbar'
import NotFound from './pages/NotFound'
import { AuthProvider } from './auth'
import { Login } from './pages/login'
import Logout from './pages/Logout'
import PrivateRoute from './pages/PrivateRoute'
import Signup from './pages/Signup'
import Authent from './pages/Authent'


const LazyAbout = React.lazy(()=> import("./pages/About"));


const App = () => {
   
  return (
    <AuthProvider>
          <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/About'element={ 
          <React.Suspense fallback="Loading....">
            <LazyAbout/>
          </React.Suspense>
         }/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/Authent' element={<Authent />}>
          <Route path='signup' element={<Signup />} />
          <Route path='login' element={<Login />} />    
        </Route>
        <Route path='*' element={<NotFound/>}/>



      </Routes>
    </div>
    </AuthProvider>

  )
}

export default App;
