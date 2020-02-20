import React ,{PureComponent} from 'react'
import './Hero.css' 
import U from '../../../assets/images/hero/uc.svg'
 
import Nav from '../../common/Nav/Nav';
import Contact from '../../common/contact/Contact';
import Process from './Process';
import Process2 from './Process2';
import next from '../../../assets/images/project/lightmetrics/next.svg'
import prev from '../../../assets/images/project/lightmetrics/prev.svg'
import hero from '../../../assets/images/project/lightmetrics/hero.jpg'

class Project extends PureComponent {

  componentDidMount(){
      window.scrollTo(0,0)
  }

    render(){

        return(
            <div style={{background: "#001a31"}}>
                <Nav />
            <section className="container" id="project" >
            
                                   
                    <div className="row justify-content-center align-items-center pt-5" >
                    
                     <div className="col-12 col-md-6 px-5 px-sm-0">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <h1 id="project_head">Lightmetrics<br/>Website Design</h1>
                                <p id="project_text">Lightmetrics helps OEMs by providing video telematics and real-time coaching softwaresolutions to their customers. It provides of a cross-platform client-side software kit thatanalyzes video streams in real-time.</p>

                                <div className="project_details">
                                    <div>
                                        <p id="details_head">Clients</p>
                                        <p id="details_item">Light Metrics</p>
                                    </div>
                                    <div>
                                    <p id="details_head">Title</p>
                                        <p id="details_item">Website Design</p>
                                    </div>
                            </div>
                                </div>
                            </div> 
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="image_1_2 animated wow fadeInUp"> 
                            <img src={hero} style={{width:"100%",height:"357px",objectFit:"cover"}} alt=""/>
                            </div> 
                        </div> 
                     </div>
                   

                    <div className="row justify-content-between nav_btns pt-5 px-5 px-sm-0"  >
                            <div className="col-sm-3 col-6 text-left ">
                                  <div className="row justify-content-start align-items-center nav_btn_item">
                                  <img src={prev} alt=""/>
                                <p>Previous Project</p>
                                  </div>
                            </div>
                            
                            <div className="col-sm-3 col-6 text-right">
                            <div className="row justify-content-end align-items-center nav_btn_item">
                            <p>Next Project</p>
                            <img src={next} alt=""/>
                            </div>
                                                     
                            </div>
                        </div>
                    
              
        </section>
        <Process2 />
        <Process />
        
        <Contact />
                    </div>
    )
    
    
}
}
export default Project