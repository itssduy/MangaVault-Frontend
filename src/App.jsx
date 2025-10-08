import { Outlet } from 'react-router'

import Header from './components/shared/header'
import Footer from './components/shared/footer'

import './App.css'




function App() {

  return (
    <>
      <Header></Header>


      <Outlet></Outlet>


      <Footer></Footer>
    </>
  )
}

export default App
