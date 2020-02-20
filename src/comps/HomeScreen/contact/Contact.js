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

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
 
}

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
          <div className="container-fluid text-center" style={{background:'#1b0334'}}>

            <section className="container my_contact_wrapper">
                <div className="row justify-content-center">
                    <h1 id="contact_head">Connect with us</h1>
                </div>
                <div className="row justify-content-center client_text">
                simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                </div>
                <div className="row justify-content-between align-items-start text_items">
                <div className="col-sm-12 col-md-4 text_box">
                        <div className="the_item item_1">
                        <p style={{width:'50%', fontSize:24}}>Lets Talk <br/> with us</p>
                            <p style={{width:'90%', fontWeight:'300', fontSize:14}}>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                            </p>
                            <p id="cnct_btn">Connect</p>
                        </div>
                    </div>
                
                 
                <div className="col-sm-12 col-md-4 text_box">
                        <div className="the_item item_2 ">
                            <p style={{width:'100%', fontSize:24}}>Friends follow <br/> each other everywhere</p>
                             
                            <div className="row justify-content-between align-items-center mb-4">
                              <div className="col-sm-3">
                                <div className="row justify-content-center">
                                    <img  id="icons" src={fb} alt="" />
                                </div>
                              </div>
                              <div className="col-sm-3">
                                <div className="row justify-content-center">
                                    <img  id="icons" src={tweet} alt="" />
                                </div>
                              </div>
                              <div className="col-sm-3">
                                <div className="row justify-content-center">
                                    <img  id="icons" src={insta} alt="" />
                                </div>
                              </div>
                              <div className="col-sm-3">
                                <div className="row justify-content-center">
                                    <img id="icons"  src={dribble} alt="" />
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                
                 
                <div className="col-sm-12 col-md-4 text_box">
                        <div className="the_item item_3">
                             <p style={{width:'50%', fontSize:24, fontWeight:'400'}}>Reach to our Bangalore Studio</p>
                             <p style={{width:'60%'}}   >
                             1115, 23rd Cross, 23rd Main, HSR Layout, Sector-2 Bangalore, India 560102
                             </p>
                             <p>080-25721018</p>
                             <p>info@unikwan.com</p>
                        </div>
                    </div>
                
                 
                     

                </div>

                <div className="row justify-content-around align-items-center mt-3" style={{fontSize:10, color:'#fff'}}> 
                  <div className="col-sm-4 text-left">
                  Copyright 2019 UniKwan Innovations Pvt. Ltd.
                  </div>
                  <div className="col-sm-8">
                    <div className="row justify-content-end align-items-center">
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