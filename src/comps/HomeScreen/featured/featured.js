import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom'
import {Helmet} from 'react-helmet';
import './featured.css';
import Slider from "react-slick";
import one from '../../../assets/images/featured/img1.jpg'
import two from '../../../assets/images/featured/img2.jpg'
import next from '../../../assets/images/slider/grey_arrow.svg';
import {limitTitle} from '../../common/common'
class featured extends PureComponent{

    constructor(props){
        super(props);
        this.state={
            images:[

              {
                link: one,
                title: 'Elevate 2019: Good design is good business',
                subtitle: 'YOUR STORY',
                hyLink: '#',
              },
              {
                link: two,
                title: 'Clutch awards 2019',
                subtitle: 'Clutch Awards 2019',
                hyLink: '#',
              },
              {
                link: one,
                title: 'Elevate 2019: Good design is good business',
                subtitle: 'YOUR STORY',
                hyLink: '#',
              }
             ]
        }
    }
    renderImages =()=>{
        return  this.state.images.map((i, index)=>{
            return(
              <Link to={i.hyLink} key={`${Math.random()}${i}`} className="article_link">

                <div className="article_container" key={index} data-index={index}>

                   {/* <div className="row justify-content-end align-items-end"
                   style={{backgroundImage:`linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(255, 255, 255, 0)),url(${i})`,  borderRadius:8}}
                   >
                   <div className="row justify-content-start align-items-end" style={{height:'60%', textAlign:'left', padding:'30px',}} >
                   
                   <h5 style={{width:'60%', fontWeight:'500'}}>Article simply dummy title</h5>
                   <p>simply dummy text of the printing</p>
                   </div>      
                  </div> */}

                   <div className="px-3"  >
                   <img
              src={i.link}
              data-index={index}
              alt=""
              srcset=""
              width="100%"
              style={{borderRadius:"8px"}}
            />  
                   </div> 
                   <div className="pt-3 text-left px-3" style={{color:"#000"}}>
                 <h6 style={{fontWeight:'500'}}>
                   {limitTitle(i.title, 35)}
                   </h6>
                            <p>{limitTitle(i.subtitle, 30)}</p>

                </div>                </div>

                  </Link>
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
          <div className="container-fluid my_article_wrapper">

            <section className="container ">
                 <Helmet>
                     <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                </Helmet>  
                <div className="row justify-content-center">
                  <h1> <span>Featured</span></h1>
                </div>
                <div className="row justify-content-center pt-3 pb-5">
                  <div className="col-8">
                  Here are some of our featured work propagating the design trends, theories, and best practices. These are some of the
top platforms that  have appreciated and recognised our work.</div>
                </div>
                
                  <div className="article_slider_container pt-5 animated wow fadeInUp px-5 px-sm-0" >
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

export default featured