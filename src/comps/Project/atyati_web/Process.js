import React, { PureComponent } from 'react'
import Bubble from '../../common/Bubble'
import next from '../../../assets/images/project/atyati_web/next.svg'
import prev from '../../../assets/images/project/atyati_web/prev.svg'
import work from '../../../assets/images/project/atyati_web/work.svg'
import sol1 from '../../../assets/images/project/atyati_web/sol1.jpg'
import sol2 from '../../../assets/images/project/atyati_web/sol2.jpg'
import bot_banner from '../../../assets/images/project/atyati_web/bot_banner.jpg'



import Process2 from './Process2';
export default class Process extends PureComponent {
    render() {
        return (
            <section className="" id="process_sec"  style={{color:'#6b6b6b '}}>
                
                <div className=" row justify-content-center align-items-center process-space pt-5 pb-5 px-5" id="project_text_sec">
                    <div className="col-lg-7 col-md-7 col-sm-12 text-center ">
                        <h1 id="process_head">Problem Statement</h1>
                        <p>Since atyati is a mature company and has been around from the time whendigital platforms were not very active. The old logo of atyati did not have much recognition despite its vast coverage of 31,000 villages with around. 30,000, 000 customers all over the country.Re-branding of atyati was essential for business success: to evolve the brandso as to make sure that it keeps abreast of the competition and meet theconsumers ever changing preferences.</p>
                    </div>
                </div>

                <div className="row justify-content-center align-items-center process-space pt-5 pb-5 px-5" id="project_text_sec">
                    <div className="col-lg-7 col-md-7 col-sm-12 text-center ">
                        <h1 id="process_head">Process</h1>
                        <p>We help workshops for all the stakeholders of the company - employees,  core management team, business partners and existing as well as potential customers. This helped us understand the requirements of the customers, business goals of atyati team and motivation of the employees working in
the company</p>
                    </div>
                </div>






                <div class="jumbotron">
  <div class="container pb-5"> 
  <div className="row justify-content-center align-items-center process-space pb-5" id="project_text_sec">

      <div className="col-md-9 col-lg-9 pt-5 text-center" style={{color:"white"}}>
                        <h1  >Solution for the problem</h1>
                        <p className="">After proposing a few concepts and narratives for the re-branding which could do justice to all the feedbacks gathered in the process,we created a new brand logo and brand identity while also re-defining the vision mission and values of the company.</p>
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
                        <p>The new brand logo was launched on the 10th annual day of the companywith a lot of energy and enthusiasm which complimented the reason behind the rebranding. The logo was happily welcomed by all the stakeholders of atyati.</p>
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
