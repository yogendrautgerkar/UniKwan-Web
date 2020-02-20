import React, {} from 'react'
import Nav from '../common/Nav/Nav';
import Hero from './Hero/Hero';
import Services from './Services/Services';
import Clients from './Clients/Clients';
import Articles from './articles/Articles';
import Stories from './stories/Stories';
import Featured from './featured/featured';
import Contact from '../common/contact/Contact';
 

function Home() {
    return (
      <div className="App animated fadeIn">
       
  
        <Nav />
        <Hero />
        <Services />
        <Clients />
        <Stories />
        <Featured/>
        <Articles />
        <Contact />
      
      </div>
    );
  }
  
  export default Home;