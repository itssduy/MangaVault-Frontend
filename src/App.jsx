import { Outlet } from 'react-router'

import Header from './components/shared/header'
import Footer from './components/shared/footer'

import './App.css'
import { useState } from 'react';
import { AuthContext } from './Contexts/AuthContext';



function App() {

  const [auth, SetAuth] = useState(false);

  return (
    <>


      <AuthContext value={auth}>
        <Header></Header>


        <Outlet></Outlet>
      </AuthContext>
      

      <Footer></Footer>

    </>
  )
}

export default App
