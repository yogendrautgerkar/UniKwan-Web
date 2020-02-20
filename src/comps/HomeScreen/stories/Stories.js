import React, { PureComponent } from 'react'
import $ from 'jquery';
import './Stories.css';
import one from '../../../assets/images/stories/one.png'
import two from '../../../assets/images/stories/two.png'
import three from '../../../assets/images/stories/three.png'
import four from '../../../assets/images/stories/four.png'
class Stories extends PureComponent{

    componentDidMount(){
        const root = document.documentElement;
        const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
        const marqueeContent = document.querySelector("ul.marquee-content");
        
        root.style.setProperty("--marquee-elements", marqueeContent.children.length);
        
        for(let i=0; i<marqueeElementsDisplayed; i++) {
          marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
        }
    }

    render(){
        return(
            <div className="container-fluid mystory_wrapper d-none d-md-flex">

            <section className="container text_container_articles">
                <div className="row justify-content-center px-5">
                
                <div className="col-9 ">
                    <h1 style={{marginBottom:30}}>Our <span style={{color:'rgba(75, 129, 255, 1)'}}>Stories</span></h1>
                    Catch us candid on Instagram, Dribble, Behance or Facebook. Our fame of unique out-of-box ideas starts fromhere and reaches to millions.                </div>
                </div>
                <div className="row justify-content-center align-items-center stories wow animated fadeIn  pt-5">
                    <div class="marquee">
                        <ul class="marquee-content">
                                <li style={{cursor:'pointer'}} onClick={()=>console.log('clicked')}><img src={one} alt="" /></li>
                                <li style={{cursor:'pointer'}} onClick={()=>console.log('clicked')}><img src={two} alt="" /></li>
                                <li style={{cursor:'pointer'}} onClick={()=>console.log('clicked')}><img src={three} alt="" /></li>
                                <li style={{cursor:'pointer'}} onClick={()=>console.log('clicked')}><img src={four} alt="" /></li>
                        </ul>
                    </div>

                </div>
                
            </section>
            </div>
        )
    }

}

export default Stories;