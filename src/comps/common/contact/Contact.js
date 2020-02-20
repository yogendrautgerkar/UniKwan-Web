import React, { PureComponent } from 'react'
 
import './Contact.css';
import fb from '../../../assets/images/contact/facebook.svg'
import tweet from '../../../assets/images/contact/twitter.svg'
import dribble from '../../../assets/images/contact/dribbble.svg'
import insta from '../../../assets/images/contact/instagram.svg'
 
import ContactModal from '../../common/ContactModal/ContactModal';

class Contact extends PureComponent{
    componentDidMount(){
      var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("cnct_btn");
var btn2 = document.getElementById("findus_btn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
 
}
// btn2.onclick = function() {
//   window.open('https://goo.gl/maps/D8Lh7RqS8Zpmszxf6', '_blank');
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
 
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

    }
    render(){
        return(
          <div className="container-fluid text-center " style={{background:'#1b0334', color:'#fff'}}>

            <section className="container my_contact_wrapper  " >
                <div className="row justify-content-center ">
                    <h1 id="contact_head">Come aboard</h1>
                </div>
                <div className="row justify-content-center py-4">
               <div className="col-md-6 col-12">
               Let’s build a constructive future together.               </div>
                </div>
                <div className="row justify-content-between align-items-start text_items">
                <div className="col-sm-12 col-md-4 text_box">
                        <div className="the_item item_1">
                        <p style={{width:'50%', fontSize:24}}>Get a human <br/>touch</p>
                            <p style={{width:'90%', fontWeight:'300', fontSize:14}}>Tell us what you need. We shall brainstorm together. We shall for sure find solutions to your problems. Then let’s talk business. 
                            </p>
                            <p id="cnct_btn">Connect</p>
                        </div>
                    </div>
                
                 
                <div className="col-sm-12 col-md-4 text_box">
                        <div className="the_item item_2 ">
                            <p style={{width:'100%', fontSize:24}}>Follow us on <br/>to a designled future.</p>
                             
                            <div className="row justify-content-around align-items-center mb-4">
                              <div className="col-sm-3 col-1">
                                <div className="row justify-content-center">
                                    <img  id="icons" src={fb} alt="" style={{cursor:"pointer"}} onClick={()=>window.open('https://www.facebook.com/UniKwan', '_blank') } />
                                </div>
                              </div>
                              <div className="col-sm-3 col-1">
                                <div className="row justify-content-center">
                                    <img  id="icons" src={tweet} alt="" style={{cursor:"pointer"}} onClick={()=>window.open('https://twitter.com/UniKwan', '_blank')}/>
                                </div>
                              </div>
                              <div className="col-sm-3 col-1">
                                <div className="row justify-content-center">
                                    <img  id="icons" src={insta} alt="" style={{cursor:"pointer"}} onClick={()=>window.open('https://www.instagram.com/_unikwan_/', '_blank')} />
                                </div>
                              </div>
                              <div className="col-sm-3 col-1">
                                <div className="row justify-content-center">
                                    <img id="icons"  src={dribble} alt="" style={{cursor:"pointer"}} onClick={()=>window.open('https://dribbble.com/unikwan_studios', '_blank')}/>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                
                 
                <div className="col-sm-12 col-md-4 text_box ">
                        <div className="the_item item_3 ">
                             <p style={{width:'100%', fontSize:24,}}>Have a cup of coffee<br/>with us at our<br/>Bangalore studio.</p>
                             <p style={{width:'90%',paddingTop:'0px'}}>
                             1115, 23rd Cross, 23rd Main, HSR Layout, Sector-2 Bangalore, India 560102
                             </p>
                             <p style={{paddingTop:'0px'}}>080-25721018<br/>info@unikwan.com</p>
                             <p id="findus_btn" onClick={()=>window.open('https://goo.gl/maps/D8Lh7RqS8Zpmszxf6', '_blank')} style={{paddingTop:'1px'}}>Find Us</p>
                        </div>
                    </div>
                
                

                </div>

                <div className="row justify-content-between align-items-center mt-3 mx-0 " style={{fontSize:10, color:'#fff'}}> 
                  <div className="col-4 text-left d-none d-md-flex">
                  Copyright 2019 UniKwan Innovations Pvt. Ltd.
                  </div>
                  <div className="col-12 col-md-8">
                    <div className="row justify-content-center align-items-center">
                      <div className="col-2">FAQs</div>
                      <div className="col-2">Privacy Policy </div>
                      <div className="col-2">Terms &Conditions </div>
                      <div className="col-2">Contact Us</div>
                    </div>
                  </div>
                </div>
                < ContactModal />
            </section>
          </div>
        )
    }

}




export default Contact;