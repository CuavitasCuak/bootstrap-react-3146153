
import { Logo } from './Logo'
import { NavBar } from './NavBar'
import { NuestroEquipo } from './NuestroEquipo'
import { QuienesSomos } from './QuienesSomos'
import { Trailer } from './Trailer'
import { Footer } from './Footer'



export const Home = () => {
  return (
    <>
    
        <NavBar/>
  
      <QuienesSomos/>
      <Logo/>
      <NuestroEquipo/>
      <Trailer/>
      <Footer/>
    </>
   
  )
}


