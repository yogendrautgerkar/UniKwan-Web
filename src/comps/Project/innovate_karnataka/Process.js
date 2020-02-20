import React, { PureComponent } from 'react'
import Bubble from '../../common/Bubble'
import next from '../../../assets/images/project/innovate_karnataka/next.svg'
import prev from '../../../assets/images/project/innovate_karnataka/prev.svg'
import work from '../../../assets/images/project/innovate_karnataka/work.svg'
import sol1 from '../../../assets/images/project/innovate_karnataka/sol1.jpg'
import sol2 from '../../../assets/images/project/innovate_karnataka/sol2.jpg'
import bot_banner from '../../../assets/images/project/innovate_karnataka/bot_banner.jpg'



import Process2 from './Process2';
export default class Process extends PureComponent {
    render() {
        return (
            <section className="" id="process_sec"  style={{color:'#6b6b6b '}}>
                
                <div className=" row justify-content-center align-items-center process-space pt-5 pb-5 px-5" id="project_text_sec">
                    <div className="col-lg-7 col-md-7 col-sm-12 text-center ">
                        <h1 id="process_head">Problem Statement</h1>
                        <p>There are a number of government departments of Information Technology, Biotechnology, Startup etc. working towards innovation and growth. But they were all having an individual identity lacked energy and freshness in its attributes. It was also important to unify them under one umbrella so that it can be identified as one entity working in different directions to achieve economic
growth and social impact.</p>
                    </div>
                </div>

                <div className="row justify-content-center align-items-center process-space pt-5 pb-5 px-5" id="project_text_sec">
                    <div className="col-lg-7 col-md-7 col-sm-12 text-center ">
                        <h1 id="process_head">Process</h1>
                        <p>Identifying the purpose of the departments and defining the brand attributes carefully was extremely important as it had number of sub-departments. After exploring various mood boards, logo concepts and narratives we arrived at a logo which was well suited for a government department and at
the same time had a fresh and energetic look. </p>
                    </div>
                </div>






                <div class="jumbotron">
  <div class="container pb-5"> 
  <div className="row justify-content-center align-items-center process-space pb-5" id="project_text_sec">

      <div className="col-md-9 col-lg-9 pt-5 text-center" style={{color:"white"}}>
                        <h1  >Solution for the problem</h1>
                        <p className="">The brand Innovate Karnataka has a fresh, sincere yet modern feel to it. The brand identity was designed with consideration of having presence on all government events. All the stationary design has a clean and modern look which is well suited to use by Government officials. </p>
                   </div> 
      </div>
    <div class="row">
      <div class="col-md-6 pt-5 animated wow fadeInUp">
      <img src={sol1} style={{width:"100%",height:"357px",objectFit:"cover"}} alt=""/>
      </div>
      <div class="col-md-6 pt-5 animated wow fadeInUp">
      <img src={sol2} style={{width:"100%",height:"357px",objectFit:"cover"}} alt=""/>
      </div>
    </div>
  </div>
</div>


<div className=" row justify-content-center align-items-center process-space pt-5 pb-5" id="project_text_sec">
                    <div className="col-lg-7 col-md-7 col-sm-12 text-center ">
                        <h1 id="process_head">Result</h1>
                        <p>Innovate Karnataka was launched in a government held event and is being promoted as Innovation hub of the world by being displayed on the collaterals of all the government events of innovation, startups, summits etc.</p>
                    </div>
                </div>



                <div className=" row justify-content-center align-items-center animated wow fadeInUp" id="project_text_sec">
                <img src={bot_banner} style={{maxWidth:"100%",height:"auto",objectFit:"cover"}} alt=""/>
      </div>
                

                <div className="row justify-content-center align-items process-space pt-5 pb-5">
                    <div className="col-12 col-md-6 text-center pb-5">
                        <h4 style={{fontWeight:'700', color:'#000'}}>Read More</h4>                        
                        <p  style={{fontSize:14, color:'#6b6b6b'}} className="pb-3">Download a PDF version to get an in-depth insight of our work.</p>
                        <p id="mycustom_btn">Read Case Study</p>
                        
                    </div>
                    <div className=" row justify-content-center align-items-center nav_btns nav_btns-dark p-5 pb-5">
                            <div className="col-sm-4 text-center">
                                  <div className="row justify-content-start align-items-center nav_btn_item">
                                  <img src={prev} alt=""/>
                                <p>Previous Project</p>
                                  </div>
                            </div>
                            <div className="col-sm-4 text-center">
                                  <div className="row justify-content-start align-items-center nav_btn_item">
                                  <img src={work} alt=""/>
                                <p>Work</p>
                                  </div>
                            </div>
                            
                            <div className="col-sm-4 text-center">
                            <div className="row justify-content-end align-items-center nav_btn_item">
                            <p>Next Project</p>
                            <img src={next} alt=""/>
                            </div>
                                                     
                            </div>
                        </div>
                </div>
                
               
            </section>
            
        )
        
    }
}
