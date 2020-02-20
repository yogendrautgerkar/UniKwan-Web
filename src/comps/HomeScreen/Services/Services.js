import React, { PureComponent } from 'react';
 
import './Services.css';
import Slider1 from '../../common/slider_1/Slider_1'
import Slider2 from '../../common/slider_2/Slider_2'
import Slider3 from '../../common/slider_3/Slider_3'
import Bubble from '../../common/Bubble';
import Bubble1 from '../../common/Bubble1';
import Bubble2 from '../../common/Bubble2';

class Services extends PureComponent{

    
    render(){
        return(  
            <div style={{background:'#fff', position:'relative'}} className="container-fluid  " >


                    {/*section 1  */}
             <section className="main_ct  container py-5" id="service_1" style={{zIndex:2}}>   
             <div className="place_bubble animated wow zoomInRight d-none d-md-flex" style={{zIndex:-1,left:-290}}>
                <Bubble /> 
                </div>  
                        {/* <div className="light_back d-none d-md-flex" />              */}
                     <div className="row justify-content-between align-items-center the_item_container my-5 py-md-5"> 
                        <div className="col-md-6 col-12 order-md-1 order-sm-2 order-2 animated wow fadeIn   py-3 py-md-0" > 
                            <div className="row justify-content-center">
                                <div className="col-12 ">
                                   <div className="row ">
                                    <div className="img_container ">
                                            <Slider1 />
                                        </div>
                                   </div>
                                </div>
                            </div>
                              
                        </div>
                        <div className="col-md-5 col-12 service_text_content text-right order-md-2 order-sm-1 order-1  p-5 p-md-0  ">
                            <div className="row text_top ">
                            We enable through <br/>
                            <span id="hero_services_mid" >Business Innovation</span>
                            </div>
                            <div className="row pt-5 text_bottom" style={{float: 'right'}}>
                                Our strategic design thinking approach has been able to provide insights to leading enterprises on measurable improvements that have transformed their customer experiences and commercial upscaling. They don’t consider us just as business partners but more as allies who have each other’s back.
                            </div>
                        </div>
                        
                    </div>
             
            </section>
            
            {/* section 2 */}
             <section className="main_ct container py-5 " >  
                <div className="place_bubble animated wow zoomInLeft   d-none d-md-flex" style={{zIndex:0,right:-560}}>
                <Bubble1 /> 
                </div>              
                     <div className="row justify-content-between align-items-center the_item_container my-5 py-md-5"> 
                        
                        <div className="col-md-5 col-12 service_text_content   p-5 p-md-0">
                            <div className="row text_top text-left">
                            We enhance <br/>
                            <span id="hero_services_mid">customer experience</span>
                            </div>
                            <div className="row pt-5 text_bottom text-left" style={{float: 'left'}}>
                            To meet the ever-changing needs of customers our skilled team has developed an intrinsic process to provide quality customer experience that has built meaningful relationships with users for many years
                        </div>
                        </div>

                        <div className="col-md-6 col-12 animated wow fadeIn  py-3 py-md-0"> 
                            <div className="row justify-content-center">
                                <div className="col-12 ">
                                   <div className="row ">
                                   <div className="img_container ">
                                      
                                        <Slider2 />
                                    </div>
                                   </div>
                                </div>
                            </div>
                           
                            
                        </div>
                        
                    </div>
             
            </section>

                {/* section 3 */}
             <section className="main_ct  container py-5" > 
            
             {/* <div className="light_back2 d-none d-md-flex" /> */}
             <div className="place_bubble animated wow zoomInRight   d-none d-md-flex" style={{zIndex:0,left:-290}}>
                <Bubble2 /> 
                </div>                  
                     <div className="row justify-content-between align-items-center the_item_container my-5 py-md-5"> 
                        <div className=" col-md-6 col-12 order-md-1 order-sm-2 order-2 pb-5 pb-md-0"> 
                  
                            <div className="row justify-content-center py-3 py-md-0">
                                <div className="col-12 ">
                                   <div className="row  animated wow fadeIn   ">
                                    <div className="img_container ">
                                            <Slider3 />
                                        </div>
                                   </div>
                                </div>
                            </div>
                          
                            
                        </div>
                      
                        <div className="col-md-5 col-12 service_text_content text-right order-md-2 order-sm-1 order-1   p-5 p-md-0">
                            <div className="row text_top ">
                            We improve <br/>
                            <span id="hero_services_mid">Brand</span> Creators
                            </div>
                            <div className="row pt-5 text_bottom" style={{float: 'right'}}>
                            Our interdisciplinary teams collaborate with clients to build a broad network connected in the roots of customer’s culture, traditions, practices and centrifuged to their requirements. Our brands have remained authentic, evolving and true to its core.
                            </div>
                        </div>
                        
                    </div>
             
            </section>
            </div>
      
        )
    }
}

export default Services;