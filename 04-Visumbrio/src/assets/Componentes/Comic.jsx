import React from 'react'
import { FooterComic } from './FooterComic'
import { NavBarComic } from './NavBarComic'
import { InfoComic } from './InfoComic'
import { ObjetivosComic } from './ObjetivosComic'
import { ContextoComic } from './ContextoComic'

export const Comic = () => {
  return (
    <>
    <NavBarComic/>
    <InfoComic/>
    <ObjetivosComic/>
    <ContextoComic/>
    <FooterComic/>
    
  </>
  
  )

}
