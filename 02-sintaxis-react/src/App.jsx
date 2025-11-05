import React  from 'react';
import './App.css'
import { NavBar } from './NavBar';
import { ExtensionCard } from './Components/ExtensionCard';

export const App = ()=> {
  return(
    <>

       <NavBar/>

    <div className='containerCards'>

      
        <ExtensionCard 
          cardTittle="DevLens"
          cardImage="./public/devlens.svg" 
          cardDescription="Quickly inspect page layouts and visualize element boundaries." 
          />

        <ExtensionCard 
          cardTittle="StyleSpy"
          cardImage="./public/style-spy.svg" 
          cardDescription="Instantly analyze and copy CSS from any webpage element." 
          />
        
        <ExtensionCard 
          cardTittle="SpeedBoost"
          cardImage="./public/speed-boost.svg" 
          cardDescription="Optimizes browser resource usage to accelerate page loading." 
          />

        <ExtensionCard 
          cardTittle="JSONWizard"
          cardImage="./public/json-wizard.svg" 
          cardDescription="Formats, validates, and prettifies JSON responses in-browser." 
          />
        
        <ExtensionCard 
          cardTittle="TabMaster Pro"
          cardImage="./public/tab-master-pro.svg" 
          cardDescription="Organizes browser tabs into groups and sessions."
           />

        <ExtensionCard 
          cardTittle="ViewportBuddy"
          cardImage="./public/viewport-buddy.svg" 
          cardDescription="Simulates various screen resolutions directly within the browser." 
          />

        <ExtensionCard 
          cardTittle="Markup Notes"
          cardImage="./public/markup-notes.svg"  
          cardDescription="Enables annotation and notes directly onto webpages for collaborative debugging." 
          />

        <ExtensionCard 
          cardTittle="GridGuides"
          cardImage="./public/grid-guides.svg" 
          cardDescription="Overlay customizable grids and alignment guides on any webpage."
           />

        <ExtensionCard 
          cardTittle="Palette Picker"
          cardImage="./public/palette-picker.svg" 
          cardDescription="Instantly extracts color palettes from any webpage." 
          />
         
  
    </div>

    <h1>React+bootstrap</h1>
    
    </>
   
  )
}