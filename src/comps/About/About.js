import React ,{PureComponent} from 'react'
import CountUp from 'react-countup';
import './Hero.css'  
import U from '../../assets/images/hero/uc.svg'
import ReactSVG from 'react-svg'
import Nav from '../common/Nav/Nav';
import Contact from '../common/contact/Contact';
import Process from './Process';
import Process2 from './Process2';
import Process3 from './Process3';
import Header from './Header'


class About extends PureComponent {
   
    scrollTo=(process_sec)=>{ 
        document.getElementById(process_sec).scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"}) 
    }
    render(){

        return(
            <div>
                <Nav />
            <section className="container" id="about">
           
                    <ReactSVG src ={U} afterInjection={(e,svg)=>{
                        if(e){
                            console.log(e)
                        }
                       
                        svg.setAttribute('style','position:absolute;top:-780px;left:-370px;width:60%;fill:#fff')
                        svg.setAttribute('class','animated wow fadeIn')
                        
                    
                    }} />
                    <div className="row justify-content-center align-items-center pt-5 pr-5 pl-5" >
                    
                      <div className="row justify-content-center">
                          <div className="col-sm-10 col-md-8 text-center ">
                          <h1 id="about_head" className="px-5 wow animated flipInX">We are <span>UniKwan</span></h1>
                          <p id="about_text"  >Founded in 2012, Unikwan started as a design agency providing digital solutions to various companies. Through years of experience and gauging the business climate collaborating with a wide range of companies, Unikwan has been able to solve core business problems cutting through complexity. We have been able to push the boundaries of the niche market by creating effective business models, providing services that transform consumer experience and create brands through advanced storytelling techniques. We have been the premier consultants to many industry leaders and business giants by providing powerful insights that have helped them navigate through the complex business climate.</p>
                          </div>
                      </div> 
                    </div>


                    <div className="row justify-content-between align-items-start text-center counter_sec ">
                            <div className="col-sm-4 wow animated fadeInUp" style={{animationDelay:'0.3s'}}>
                                <h2><CountUp start={0} end={200} duration={2} />+</h2>
                                <p>Projects Executed</p>
                            </div>
                            <div className="col-sm-4 wow animated fadeInUp" style={{animationDelay:'0.5s'}}>
                                 <h2><CountUp start={0} end={15} duration={3} />+</h2>
                                 <p>Clients acquired/funded</p>
                            </div>
                            <div className="col-sm-4 wow animated fadeInUp" style={{animationDelay:'0.8s'}}>
                            <h2><CountUp start={0} end={10}  duration={4}/>+</h2>
                                 <p>Projects filed for patents/IP</p>                           
                            </div>
                        </div>
                    
              
        </section>

         
        <Header scrollFn={(i)=>this.scrollTo(i)}/>
        <Process />
        {/* <Process2 /> */}
        {/* <Process3 /> */}
         
        <Contact />
                    </div>
    )
    
    
}
}
export default About