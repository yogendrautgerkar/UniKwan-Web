import React ,{PureComponent} from 'react'
import './Hero.css'
import mouse from '../../../assets/images/hero/mouse.svg';
import Arrow from './Arrow'
import U from '../../../assets/images/hero/uc.svg';
import arrow from '../../../assets/images/hero/arrow.svg'

import ReactSVG from 'react-svg'

class Hero extends PureComponent {

    constructor(props){
        super(props);
        this.state={
            changeColor:true
        }
    }
    componentDidMount(){
        const colors = ["#9274FF","#05AFF2","#505CFF","#F943FF","#FF51E8"]
        let colorIndex = 0
        setInterval(()=>{
                if( document.getElementById("circle")){
            document.querySelector(".the_u .a").style.fill = colors[colorIndex];
            document.getElementById("circle").setAttribute("fill",`${colors[colorIndex]}`)
            document.querySelector("#contact_btn_menu").style.borderColor = colors[colorIndex];
            //document.querySelectorAll(".ddd").style.fill = colors[colorIndex];
            var x = document.querySelectorAll(".the_u .ddd");
            var i;
            for (i = 0; i < x.length; i++) {
            x[i].style.fill = colors[colorIndex];;
            }
            
            document.querySelector("#hero_mid").style.color = colors[colorIndex];
          
            colorIndex =(colorIndex + 1) % colors.length;
             
        }},3000)

       
    }

    componentWillUnmount(){
        this.setState({changeColor:false})
    }
    

    render(){

        return(
            <section className="container  ">
           
                <div className=" the_u ">
                    <ReactSVG src ={U} afterInjection={(e,svg)=>{
                        if(e){
                            console.log(e)
                        }
                        console.log(svg)
                        svg.setAttribute('style','position:absolute;top:-780px;left:-370px;width:60%; ')
                        svg.setAttribute('class','animated wow zoomIn ')
                        
                    
                    }} />
                    <div className="row justify-content-end align-items-center hero   px-3 px-md-0">

                        <div className="col-md-8 col-12 text_content order-md-1 order-sm-2 order-2 ">
                            <div className="row text_top item-1">
                              <div className="col-12">
                               We <br/>
                              <span id="hero_mid">Design</span><br/>
                               with purpose
                             <span id="small-text">We are an impact-driven consultancy agency that is determined to influence change in our society. Our passion drives us and our purpose keeps us alive.</span>
                            </div></div>

                            <div className="row text_top item-2">
                              <div className="col-12">
                              We Design<br/> to
                            <span id="hero_mid"> Craft</span> <br/>
                                bigger stories
                                <span id="small-text">We collaborate and help create stories that connect and resonate with a larger audience.</span>
                            </div></div>
                            <div className="row text_top item-3">
                              <div className="col-12">
                              We 
                            <span id="hero_mid"> Design</span> <br/>
                                to create a <br/> better world
                                <span id="small-text">We design to improve quality of life and create experiences for a better world.</span>
                            </div></div>


                            {/* <div className="row text_top item-2">
                              <div className="col-12">
                              We Design<br/> to
                            <span id="hero_mid"> Craft</span> <br/>
                                bigger stories
                              </div>
                            </div>
                            <div className="row pt-3 item-2">
                                <div className="col-12 col-sm-9 text_bottom">We collaborate and help create stories that connect and resonate with a larger audience.</div>
                            </div>
                            <div className="row text_top item-3">
                              <div className="col-12">
                              We 
                            <span id="hero_mid"> Design</span> <br/>
                                to create a <br/> better world
                              </div>
                            </div>

                            <div className="row pt-3 item-3">
                                <div className="col-12 col-sm-9 text_bottom">We design to improve quality of life and create experiences for a better world.</div>
                            </div> */}


                            {/* <div className="row pt-3 ">
                                <div className="col-12 col-sm-9 text_bottom">
                                We are an Impact-driven DESIGN & MOTION company creating delightful and meaningful digital user experiences that focuses on user centered design.
                                </div>
                            </div> */}
                        </div>

                        <div className=" col-6 col-sm-6 col-md-4  mt-5 mt-sm-5 mt-md-0 order-md-2 order-sm-1 order-1 wow animated fadeIn delay-1s"> 
                            <Arrow />
                        </div>
                    
                       
                            {/* scroll button */}
                       <div className="col-12 hero_scroll_btn order-3 m-0 p-0 ">
                           <div className="row justify-content-center">
                               <div className="col-6 col-sm-2">
                               <div className="mouse"  onClick={()=> document.getElementById('service_1').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})}>

<img src={mouse} alt="scroll_btn"  /> <br/>
         <span id="mouse_text">Scroll More</span>
    </div>
                               </div>
                           </div>
                       </div>
                        
                        
                    </div>
                     
                </div>
        </section>
    )
    
    
}
}
export default Hero