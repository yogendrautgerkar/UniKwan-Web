import React, { PureComponent } from 'react'
import {Helmet} from 'react-helmet';
import './Highlights.css';
import Slider from "react-slick";
import one from '../../../assets/images/highlights/clu.jpg'
import two from '../../../assets/images/highlights/pra.jpg'
 
import next from '../../../assets/images/slider/grey_arrow.svg'
import { limitTitle} from '../../common/common'
class Highlights extends PureComponent{

    constructor(props){
        super(props);
        this.state={
            images:[
               two, one, two, one
    
             ]
        }
    }
    renderImages =()=>{
        return  this.state.images.map((i, index)=>{
            return(
                <div className="highlight_container" key={index} data-index={index}>

                   

                   <div className="highlight"   >
                      <img src={i} alt=""/>
                      <h5 style={{  fontWeight:'500'}}>{limitTitle('Elevate 2019: Good design is good business')}</h5>
                      <p>Yourstory</p>
                   </div>

                </div>
        )})


    }

     

    render(){

         
        const settings = {
             
            infinite:true,
            speed: 1000,
            initialSlide:0,
            slidesToShow: 3,
            slidesToScroll: 1,
            swipe:true,
            arrows:true,
            pauseOnHover:false, 
            nextArrow: <SampleNextArrow />   ,
 
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                   
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]            
          };

        return(
          <div className="container-fluid my_highlight_wrapper">

            <section className="container ">
                 <Helmet>
                     <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                </Helmet>  
                <div className="row justify-content-center">
                  <h1>Our <span>Highlights</span></h1>
                </div>
                <div className="row justify-content-center pt-3 pb-5">
                  <div className="col-8">
                    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                  </div>
                </div>
                
                  <div className="highlight_slider_container pt-3 animated wow fadeInUp px-5 px-sm-0" >
                     <Slider {...settings} style={{height:'100%'}} className="slider">
                        {this.renderImages()}
                    </Slider>
                  </div>
                 
              
            </section>
          </div>
        )
    }
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    ><img id="slider_btn" src={next} alt="next_btn" width="40px"/>
        </div>
  );
}

export default Highlights