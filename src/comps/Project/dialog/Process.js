import React, { PureComponent } from 'react'
import Bubble from '../../common/Bubble'
import next from '../../../assets/images/project/dialog/next.svg'
import prev from '../../../assets/images/project/dialog/prev.svg'
import work from '../../../assets/images/project/dialog/work.svg'
import sol1 from '../../../assets/images/project/dialog/sol1.jpg'
import sol2 from '../../../assets/images/project/dialog/sol2.jpg'
import bot_banner from '../../../assets/images/project/dialog/bot_banner.jpg'



import Process2 from './Process2';
export default class Process extends PureComponent {
    render() {
        return (
            <section className="" id="process_sec"  style={{color:'#6b6b6b '}}>
                
                <div className=" row justify-content-center align-items-center process-space pt-5 pb-5 px-5" id="project_text_sec">
                    <div className="col-lg-7 col-md-7 col-sm-12 text-center ">
                        <h1 id="process_head">Problem Statement</h1>
                        <p>The availability of cheaper and more content focused digital substitutes are taking over thehome entertainment segment. Users have freedom of consuming content when they want,affecting the Cable TV business. Lot of people resorting to the “Cord Cutting” trend is thebiggest threat to the TV entertainment industry.Also designing for TV is different from designing for web and mobile devices. The TV UI isdesigned for a very laid back experience, involving a lot of challenges.</p>
                    </div>
                </div>

                <div className="row justify-content-center align-items-center process-space pt-5 pb-5 px-5" id="project_text_sec">
                    <div className="col-lg-7 col-md-7 col-sm-12 text-center ">
                        <h1 id="process_head">Process</h1>
                        <p>We started off by empathising the business problem, stakeholder expectations and the user requirements.Conducting a usability test on the existing set top box with some users to know the pain points and find where the users struggle while using a TV interface. We also tried to develop a good understanding of the TV interface. After having a good understanding of the various aspects, we came up with the information architecture.</p>
                    </div>
                </div>






                <div class="jumbotron">
  <div class="container pb-5"> 
  <div className="row justify-content-center align-items-center process-space pb-5" id="project_text_sec">

      <div className="col-md-9 col-lg-9 pt-5 text-center" style={{color:"white"}}>
                        <h1  >Solution for the problem</h1>
                        <p className="">Having worked on set-top-box interfaces earlier we had some direction the design constraints and also the technical limitations. We decided to come up with a hybrid-set-top-box based on Android OS , which would provide traditional TV channels by OTT and at the same time bring the world of android on TV set-top-box.Also from our findings from usability testing we were able to introduce a very intuitive-navigation system.</p>
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
                        <p>The user found the new navigation system very easy to use and didn’t require any learning curve. The business innovation solution i.e. to have a hybrid box based on Android OS made it easier for all the teams, design as well as development team to achieve a good final product with relative easy. Integration of various apps and services became very easy. The exercise helped to solve user and business problems.</p>
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
