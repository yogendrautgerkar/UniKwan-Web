import React, { PureComponent } from 'react'
import {Helmet} from 'react-helmet';
import './EventSlider.css';
import Slider from "react-slick";
import one from '../../../assets/images/slider/event1.jpg'
import two from '../../../assets/images/slider/event2.jpg'
import next from '../../../assets/images/slider/grey_arrow.svg';
import {limitTitle} from '../common'
class EventSlider extends PureComponent{

    constructor(props){
        super(props);
        this.state={
            images:[
                two , one, two, one
    
             ]
        }
    }
    renderImages =()=>{
        return  this.state.images.map((i, index)=>{
            return(
                <div className="eventSlider_container" key={index} data-index={index}>

                   {/* <div className="row justify-content-end align-items-end"
                   style={{backgroundImage:`linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(255, 255, 255, 0)),url(${i})`,  borderRadius:8}}
                   >
                       <div className="row justify-content-start align-items-end" style={{height:'60%', textAlign:'left', padding:'30px',}} >
                           
                            <h5 style={{width:'60%', fontWeight:'500'}}>Article simply dummy title</h5>
                            <p>simply dummy text of the printing</p>
                       </div>      
                   </div> */}

                   <div className="eventSlider"  style={{backgroundImage:`linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(255, 255, 255, 0)),url(${i})`,  borderRadius:8}}>

                        <p id="event_title">{limitTitle('The Psychology Principles  Every UI/UX Designer Needs to Know', 50)}</p>
                        <p id="event_by"> by UI/UX Designer</p>
                        <p id="event_venue">
                          <span id="date">24 aug,2019</span> | 
                          <span id="place"> Indiranagar, bengaluru</span>
                        </p>
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
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                  }
                }
              ]            
          };

        return(
          <div className="container-fluid my_eventSlider_wrapper">

            <section className="container ">
                 <Helmet>
                     <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                </Helmet>  
                 
                <div className="row justify-content-center">
                        <div className="col-sm-10 col-md-10 text-center px-5" style={{width:'100%'}}>
                        <h2 id="workshop_head2" className="wow aniamted fadeInDown">We are happy to talk more <span>ideas</span></h2>
                        <p id="workshop_text" className="wow aniamted fadeIn">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since acac</p>
                        </div>
                    </div> 
                
                  <div className="eventSlider_slider_container pt-5 animated wow fadeInUp px-5 px-sm-0" >
                    <span id="next_events_title">Next Events</span>
                     <Slider {...settings} style={{height:'100%'}} className="slider pt-3">
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

export default EventSlider