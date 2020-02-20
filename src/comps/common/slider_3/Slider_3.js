import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import ReactSVG from 'react-svg'
import './Slider_3.css'
import Slider from "react-slick";
import next from '../../../assets/images/slider/the_next.svg'
import ik from '../../../assets/images/slider/ik_br.jpg'
import atyati from '../../../assets/images/slider/atyati_br.jpg'

class Slider3 extends PureComponent{
    


    constructor(props){
        super(props);
        this.state={
          images:[
            {
              link: ik,
              title: 'Innovate Karnataka',
              hyLink: '/project/innovate_karnataka',
            },{
              link: atyati,
              title: 'Atyati',
              hyLink: '/project/atyati_branding',
            }
         ],
        }
    }

    next = () => {
      this.slider.slickNext();
    }

    renderImages =()=>{
      return  this.state.images.map((i, index)=>{
          return(
            <Link to={i.hyLink} key={`${Math.random()}${i}`} className="slider_1_link"> 

              <div data-index={index}>
                  <img src={i.link} data-index={index}  alt="" srcset="" width="100%" height="100%"/>
                <span className={'slider_proj_title'}>{i.title}</span>
              </div>
            </Link>
      )})
  }

    
         render(){
            
            const settings1 = {
              autoplay:true,
              fade: true,
              infinite: true,
              // speed: 1000,
              dots:false,
              // autoplaySpeed:3000,
              slidesToShow: 1,
              slidesToScroll: 1,
              swipe:true,
              arrows:true,
              pauseOnHover:false,
              nextArrow: <SampleNextArrow clickFunc={ () => this.next() } />
                    
              };
              return (
               <div style={{height:'100%'}} id="home_auto_slider">
                     <Helmet>
                     <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                </Helmet>  
                {
                    this.state.images.length > 0 &&  <Slider ref={c => (this.slider = c)} {...settings1}  className="slider">
                     
                    {
                      this.renderImages()      
                    }
                 
              </Slider>
                }

                </div>  
              );
         }
}

 const SampleNextArrow=(props)=> {
  const { className, style, clickFunc } = props;
   return (
     <div
     id={'dddddd'}
       className={className}
       style={{ ...style, display: "block" }}
       onClick={clickFunc} 
     ><ReactSVG id="slider_btn" src ={next} afterInjection={(e,svg)=>{
      if(e){
          console.log(e)
      }
     
      svg.setAttribute('style','position:absolute;bottom:5px; line-height:1')
      svg.setAttribute('class','the_slider_btn_arrow ')
     
      
  
  }} />
         </div>
   );
 }

export default Slider3;