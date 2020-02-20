import React, { PureComponent } from 'react';
import {Link, NavLink} from 'react-router-dom'
import './Nav.css';
import logo from '../../../assets/images/hero/logo.png'
import logo_D from '../../../assets/images/hero/logo-d.png'
import ContactModal from '../../common/ContactModal/ContactModal';
import $ from 'jquery'
import ReactSVG from 'react-svg'
import toggler_white from '../../../assets/images/nav/menu.svg'
class  Nav extends PureComponent  {

  componentDidMount(){
    var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("contact_btn_menu");
var btnn = document.getElementById("cnct_btnn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
modal.style.display = "block";
console.log('clicked')
}

btnn.onclick = function() {
  modal.style.display = "block";
console.log('clickedddd')
 
}
$('#cnct_btnn').click(function(){
  $('#myCustomMobileMenu').css("visibility","hidden");
  $('#myCustomMobileMenu').animate({height:'0'});

})

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

$(document).ready(function(){
  $('a.nav-link').click(function(){
      $('a.nav-link').removeClass("active");
      $(this).addClass("active");
  });


  $('button.my-custom-navbar-toggler').click(function(){
    $('#myCustomMobileMenu').animate({height:'100%'});
    $('#myCustomMobileMenu').css("visibility","visible");
  })


  $('#myCustomCloseBtn').click(function(){
    
    $('#myCustomMobileMenu').animate({height:'0'});
    $('#myCustomMobileMenu').css("visibility","hidden");
  
  })

  $('.customMenu li a.nav-link').click(function(){
    
    $('#myCustomMobileMenu').animate({height:'0'});
    $('#myCustomMobileMenu').css("visibility","hidden");

  })
});
 


  }
 


  render(){

    if(this.props.dark){
        return(
          <div>
            <ContactModal />

            <div   id="myCustomMobileMenu">
              <button id="myCustomCloseBtn">Close</button>
              <ul className="customMenu">
                <li><NavLink exact activeClassName="active" to="/about" className="nav-link">about</NavLink></li>
                <li><NavLink exact activeClassName="active" to="/works" className="nav-link">works</NavLink></li>
                <li><NavLink exact activeClassName="active" to="/workshops" className="nav-link">workshop</NavLink></li>
                <li id="cnct_btnn" >Contact</li>
              </ul>
            </div>


            <nav className="navbar navbar-expand-lg navbar-dark  bg-transparent pt-4">
                <div className="container p-0">
                  <Link className="navbar-brand" to="/"  >
                      <img src={logo_D} alt="" id="logo"/>

                  </Link>
                  <button className="my-custom-navbar-toggler" >
                  <ReactSVG src ={toggler_white} afterInjection={(e,svg)=>{
                        if(e){
                            console.log(e)
                        }
                        console.log(svg)
                        $('g#Group_281 path').attr("stroke","#4b81ff")
                         
                        
                    
                    }} />
                  </button>

                  <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item dark-nav-item"><NavLink exact activeClassName="active" to="/about" className="nav-link">ABOUT</NavLink></li>
                      <li className="nav-item dark-nav-item"><NavLink exact activeClassName="active" to="/works" className="nav-link">WORKS</NavLink></li>
                      <li className="nav-item dark-nav-item"><NavLink exact activeClassName="active" to="/workshops" className="nav-link">WORKSHOPS</NavLink></li>
                      
                      <li className="nav-item dark-nav-item" id="contact_btn_menu" style={{  border:'2px solid #4b81ff'}}>
                        <span   className="nav-link" id="cnt_btn" name="contact_btn">CONTACT</span></li>
                    
                    </ul>
                  </div>
                
                </div>
              </nav>
            </div>
        )
    }else return(
      //         <nav className="navbar navbar-light bg-transparent justify-content-between navbar-inverse pl-5 pr-5 pt-4">
      //   <a className="navbar-brand pl-5">
//     <img src={logo} alt="" id="logo"/>
//   </a>
//   <ul className="nav navbar-nav navbar-right">
//       <li><a to="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
//       <li><a to="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
//     </ul>

// </nav>
<div>

<ContactModal />

<div   id="myCustomMobileMenu">
              <button id="myCustomCloseBtn">Close</button>
               
              <ul className="customMenu">
                <li><NavLink exact activeClassName="active" to="/about" className="nav-link">about</NavLink></li>
                <li><NavLink exact activeClassName="active" to="/works" className="nav-link">works</NavLink></li>
                <li><NavLink exact activeClassName="active" to="/workshops" className="nav-link">workshop</NavLink></li>
                <li id="cnct_btnn" >Contact</li>
              </ul>
            </div>
<nav className="navbar navbar-expand-lg navbar-dark  bg-transparent pt-4">
    <div className="container p-0">
      <Link className="navbar-brand" to="/"  >
          <img src={logo} alt="" id="logo"/>

      </Link>
      <button className="my-custom-navbar-toggler " >
        {/* type="button" data-toggle="collapse"   aria-expanded="false" aria-label="Toggle navigation" */}
        <ReactSVG src ={toggler_white} afterInjection={(e,svg)=>{
                        if(e){
                            console.log(e)
                        }
                        console.log(svg)
               
                         
                        
                    
                    }} />
      </button>

      <div className="collapse navbar-collapse" id="ftco-nav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item"><NavLink exact activeClassName="active" to="/about" className="nav-link">ABOUT</NavLink></li>
          <li className="nav-item"><NavLink exact activeClassName="active" to="/works" className="nav-link">WORKS</NavLink></li>
          <li className="nav-item"><NavLink exact activeClassName="active" to="/workshops" className="nav-link">WORKSHOPS</NavLink></li>
          <li className="nav-item" id="contact_btn_menu"><span  className="nav-link" id="cnt_btn" name="contact_btn">CONTACT</span></li>
         
        </ul>
      </div>
    
    </div>
  </nav>
</div>
    )
  }

}


export default Nav;