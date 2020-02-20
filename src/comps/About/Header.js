import React, { PureComponent } from 'react'
import brand from '../../assets/images/about/brand.svg'
import ui from '../../assets/images/about/ui.svg'
import res from '../../assets/images/about/res.svg'
import Bubble from '../common/Bubble';
import research from '../../assets/images/about/reaserch.jpg'

import {Tabs, Tab} from 'react-bootstrap-tabs';



export default class Header extends PureComponent {
    constructor(props){
        super(props);
        this.state={
            active:'all'
        }
    }
    render() {
        return (
            <section className="container-fluid pt-5 " id="header_sec">
                
                <div className="container pt-5" >
                    <div className="row justify-content-center align-items-center"  >
                        <div className="col-9 col-md-9 col-lg-6 header_text_sec text-center  ">
                            <h1 id="header_head"><span>Our</span> services</h1>
                                {/* <p>We at UniKwan anticipate and craft meaningful digital experiences for the future. Our services offer unique capabilities to strategize and design digital products to engage people with experiential content, information and services.</p> */}
                        
                        </div>
                        
                    </div>
                    <div className="row justify-content-center align-items-center"  >
    <div className="col-12 col-md-12 col-lg-12 header_text_sec text-center  ">      
<Tabs className="row justify-content-center align-items-start text-center menu_sec pt-5 pb-2 tabss" onSelect={(index, label) => console.log(label + ' selected')}>
    <Tab label="Research and BusinessInnovation" className="col-12 tabbb" style={{color:"#000"}}>
    <div className="row justify-content-between align-items-top py-5" id="process_text_sec">
                
                <div className="col-sm-12 col-md-5 text-left">
                    <h1 id="process_head"><span>Research and Business Innovation</span> Innovation</h1>
                    <p>In today’s fast-changing environments, we have been able to provide practical, relevant and highly actionable solutions that meet customer needs. We have pushed businesses all over the world forward by creating effective, sustainable and progressive business models. Through keen observation and analysis, we have been consulting industry leaders and business giants by providing powerful insights, timely concrete advice and helping them navigate through the complex business climate.</p>


                
                </div>
                <div className="col-sm-12 col-md-6 pl-5 wow animated fadeIn ">
                    <img src={research} alt="" style={{width:"100%",height:"357px",objectFit:"cover"}}/>
                </div>
              
            </div>
            </Tab>
    <Tab label="Customer Experience" className="col-12 tabbb">
        <div className="row justify-content-between align-items-top py-5" id="process_text_sec">
        <div className="col-sm-12 col-md-6 pl-5 wow animated fadeIn ">
        <img src={research} alt="" style={{width:"100%",height:"357px",objectFit:"cover"}}/>
                </div>
                <div className="col-sm-12 col-md-5 text-left">
                    <h1 id="process_head"><span>Research and Business Innovation</span> Innovation</h1>
                    <p>In today’s fast-changing environments, we have been able to provide practical, relevant and highly actionable solutions that meet customer needs. We have pushed businesses all over the world forward by creating effective, sustainable and progressive business models. Through keen observation and analysis, we have been consulting industry leaders and business giants by providing powerful insights, timely concrete advice and helping them navigate through the complex business climate.</p>
                
                </div>
            </div>
    </Tab>
    <Tab label="Brand Experience" className="col-12 tabbb">
    <div className="row justify-content-between align-items-top py-5" id="process_text_sec">
                
                <div className="col-sm-12 col-md-5 text-left">
                    <h1 id="process_head"><span>Research and Business Innovation</span> Innovation</h1>
                    <p>In today’s fast-changing environments, we have been able to provide practical, relevant and highly actionable solutions that meet customer needs. We have pushed businesses all over the world forward by creating effective, sustainable and progressive business models. Through keen observation and analysis, we have been consulting industry leaders and business giants by providing powerful insights, timely concrete advice and helping them navigate through the complex business climate.</p>

                </div>
                <div className="col-sm-12 col-md-6 pl-5 wow animated fadeIn ">
                <img src={research} alt="" style={{width:"100%",height:"357px",objectFit:"cover"}}/>
                </div>
              
            </div>
    </Tab>

</Tabs>
                        
                        
                        </div>
                        
                    </div>









{/* 


                    <div className="row justify-content-center align-items-center"  >
                        <div className="col-9 col-md-9 col-lg-11 header_text_sec text-center  ">      
                        <div className="row justify-content-center align-items-start text-center menu_sec pt-5 pb-2  ">
                            <div className="col-3" style={{width:'100%'}}>
                                <p className={this.state.active === 'all'? 'active': ""} onClick={()=>this.setState({active:'all'})}>Research and BusinessInnovation</p>
                            </div>
                            <div className="col-3" style={{width:'100%'}}>
                                 <p className={this.state.active === 'ui'? 'active': ""} onClick={()=>this.setState({active:'ui'})}>Customer Experience</p>
                            </div>
                            <div className="col-3" style={{width:'100%'}}>
                                 <p className={this.state.active === 'res'? 'active': ""} onClick={()=>this.setState({active:'res'})}>Brand Experience</p>                           
                            </div>
                        </div>
                        
                        
                        </div>
                        
                    </div> */}
                    {/* <div className="container pt-5">
                <div className="row justify-content-between align-items-top" id="process_text_sec">
                
                    <div className="col-sm-12 col-md-5  ">
                        <h1 id="process_head"><span>Research and Business Innovation</span> Innovation</h1>
                        <p>In today’s fast-changing environments, we have been able to provide practical, relevant and highly actionable solutions that meet customer needs. We have pushed businesses all over the world forward by creating effective, sustainable and progressive business models. Through keen observation and analysis, we have been consulting industry leaders and business giants by providing powerful insights, timely concrete advice and helping them navigate through the complex business climate.</p>


                    
                    </div>
                    <div className="col-sm-12 col-md-6 pl-5 d-sm-none d-md-flex d-none wow animated fadeIn ">
                        <div className="the_process_image"></div>
                    </div>
                  
                </div>
                <div className="place_bubble animated wow zoomInLeft   d-none d-md-flex" style={{zIndex:0}}>
                <Bubble /> 
                </div>
                </div> */}

                    
                    

                    {/* <div className="row justify-content-center align-items-center pt-5 pb-5 ">
                        <div className="col-4 col-md-3 wow animated fadeInUp " style={{animationDelay:'0.3s'}}>
                            <div className="header_items text-center" onClick={()=>this.props.scrollFn('process_sec1')}>
                                <img src={res} alt=""/>
                                <h6>Research & Innovation</h6>
                            </div>
                        </div>
                        <div className="col-4 col-md-3 wow animated fadeInUp " style={{animationDelay:'0.5s'}}>
                             <div className="header_items text-center" onClick={()=>this.props.scrollFn('process_sec2')}>
                                <img src={ui} alt=""/>
                                <h6>UI UX Designing</h6>
                            </div>
                        </div>
                        <div className="col-4 col-md-3 wow animated fadeInUp" style={{animationDelay:'0.8s'}}>
                             <div className="header_items text-center" onClick={()=>this.props.scrollFn('process_sec3')}>
                                <img src={brand} alt=""/>
                                <h6>Brand Experience </h6>
                            </div>
                        </div>

                    </div> */}
                </div>
            </section>
        )
    }
}
