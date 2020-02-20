import React ,{PureComponent} from 'react';
import './Hero.css'
 
import Contact from '../common/contact/Contact';
import Nav from '../common/Nav/Nav';
import Bubble from '../common/Bubble';
import goTop from '../../assets/images/works/goup.svg'
import mouse from '../../assets/images/hero/mouse2.svg'
import WorkshopBanner from './WorkshopBanner';
import EventSlider from '../common/eventSlider/EventSlider';

class Workshop extends PureComponent {


    constructor(props){
        super(props);
        this.state={
            active:'all'
        }
    }

    renderItems(){
        let items=[]
         for(let i=0; i <9 ; i++){
           
               items.push( <div key={i} className="col-sm-12 pb-5 col-md-4 projs wow animated fadeIn"  >
               <div className="image_1_1"> 
               </div>
           
               <h6>Project name </h6>
               <p>company website</p>
          
           </div>)
                         
           
        }
        return items
    }

    render(){
        

        return(
            <div style={{background:'#fafafa'}}  >
                <Nav dark={true} />
            <section className="container" id="workshop">
           
                    <div className="bubble2 d-none d-lg-flex wow animated zoomInUp" style={{zIndex:0,right:-480}}>
                        <Bubble />
                    </div>

                    
                    <div className="row justify-content-center align-items-center pt-5"  >
                    
                      <div className="row justify-content-center" style={{paddingTop:100}}>
                          <div className="col-sm-9 col-md-10 text-center px-5"  >
                            <h2 id="workshop_head" className="wow animated flipInX">Stay update with <span>Knowledge</span></h2>
                            <p id="workshop_text" className="wow animated fadeIn">Make they’re Air to after stars night us winged Place for abundantly seas you’re cattle moving living Which multiply meat man life deep.</p>
                          </div>
                      </div> 

                    </div>

                    <div className="row justify-content-center text-center wow animated fadeInUp">
                    <div className="col-2 text-center mouse2" onClick={()=> document.getElementById('workshopBanner').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})}>
                            <img src={mouse} alt=""  />
                            <span>Scroll More</span>
                    </div>
                    </div>

                    <WorkshopBanner />

{/* menus here */}
                    <div className="row justify-content-center align-items-center pt-5" >
                    
                      <div className="row justify-content-center">
                          <div className="col-sm-10 col-md-10 text-center px-5" style={{width:'100%'}}>
                          <h2 id="workshop_head2"  >Changing the way of <span>creative thinking</span></h2>
                          <p id="workshop_text"  >simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since acac</p>
                          </div>
                      </div> 
                    </div>
                    <div className="row justify-content-center align-items-start text-center menu_sec pt-5 pb-3 ">
                    <div className="col-3" style={{width:'100%'}}>
                                <p className={this.state.active === 'all'? 'active': ""} onClick={()=>this.setState({active:'all'})}>All</p>
                            </div>
                            <div className="col-3" style={{width:'100%'}}>
                                 <p className={this.state.active === 'ui'? 'active': ""} onClick={()=>this.setState({active:'ui'})}>UI UX</p>
                            </div>
                            <div className="col-3" style={{width:'100%'}}>
                                 <p className={this.state.active === 'res'? 'active': ""} onClick={()=>this.setState({active:'res'})}>Research</p>                           
                            </div>
                            <div className="col-3" style={{width:'100%'}}>
                                 <p className={this.state.active === 'brand'? 'active': ""} onClick={()=>this.setState({active:'brand'})}>Branding</p>                           
                            </div>
                        </div>
                       


 
{/* row 2 here */}
                    <div className="row justify-content-between align-items-center pb-3 pt-3" style={{width:'100%'}}>
                         
                        {this.renderItems()}
                         
                    </div>

 
{/* row 2 here */}
                 
 
                     

    {/* go up button */}
                    

                 

                  <EventSlider />
                     
              
        </section>
         
        <Contact />
                    </div>
    )
    
    
}
}
export default Workshop