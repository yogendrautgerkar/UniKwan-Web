import React, { PureComponent } from 'react'
import Bubble from '../../common/Bubble'
import next from '../../../assets/images/project/lightmetrics/next.svg'
import prev from '../../../assets/images/project/lightmetrics/prev.svg'
import work from '../../../assets/images/project/lightmetrics/work.svg'
import sol1 from '../../../assets/images/project/lightmetrics/sol1.jpg'
import sol2 from '../../../assets/images/project/lightmetrics/sol2.jpg'
import bot_banner from '../../../assets/images/project/lightmetrics/bot_banner.jpg'



import Process2 from './Process2';
export default class Process extends PureComponent {
    render() {
        return (
            <section className="" id="process_sec"  style={{color:'#6b6b6b '}}>
                
                <div className=" row justify-content-center align-items-center process-space pt-5 pb-5 px-5" id="project_text_sec">
                    <div className="col-lg-7 col-md-7 col-sm-12 text-center ">
                        <h1 id="process_head">Problem Statement</h1>
                        <p>The overall LightMetrics site lacked a good structure and had no user orientation. The bounce rate was high as it was a single page website and lacked clear call to actions which made it difficult to have more conversions. Lightmetrics works on emerging technologies like Machine Learning and ArtificialIntelligence, heavy technical jargons made it difficult to understand the LightMetrics role.The narration was not focused on LMs mission, which gave a feeling that LightMetrics was just another solution provider start-up.</p>
                    </div>
                </div>

                <div className="row justify-content-center align-items-center process-space pt-5 pb-5 px-5" id="project_text_sec">
                    <div className="col-lg-7 col-md-7 col-sm-12 text-center ">
                        <h1 id="process_head">Process</h1>
                        <p>We gathered user and business requirements and helped the client to formulate and articulate the requirement and structure their vision and mission, in order to align with user requirements.  We followed a lean UX process by conducting one-on-one interviews with customers and gathered valuable qualitative insights. As a part of the process we designed the layouts and gave an intuitive navigation and a fresh look and feel. Our design process also factored data analysis in the given business context.</p>
                    </div>
                </div>






                <div class="jumbotron">
  <div class="container pb-5"> 
  <div className="row justify-content-center align-items-center process-space pb-5" id="project_text_sec">

      <div className="col-md-9 col-lg-9 pt-5 text-center" style={{color:"white"}}>
                        <h1  >Solution for the problem</h1>
                        <p className="">The stakeholder and user interviews gave us a good understanding of what they are expecting from the website which helped us understand the user personas, tasks and use cases. This helped us in deciding the features and functionalities to the website. After  brainstorming activities and empathy mapping, we were able to come up with a structure for the website, which was in line with the business and user requirements.</p>
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
                        <p>Introducing the design process to our client immediately got them to think about existing business and identified the gaps within them. User centred process helped them align their vision and mission with the user requirement. Entire exercise helped in forming a business blueprint and strong digital presence to grow their business.</p>
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
