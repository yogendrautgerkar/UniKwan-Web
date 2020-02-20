import React, { PureComponent } from 'react'
import './Clients.css';
import one from '../../../assets/images/clients/101.svg'
import two from '../../../assets/images/clients/102.svg'
import three from '../../../assets/images/clients/103.svg'
import four from '../../../assets/images/clients/104.svg'
import five from '../../../assets/images/clients/105.svg'
import six from '../../../assets/images/clients/106.svg'
import seven from '../../../assets/images/clients/107.svg'
import eight from '../../../assets/images/clients/108.svg'
import nine from '../../../assets/images/clients/109.svg'
import ten from '../../../assets/images/clients/110.svg'
 

class Clients extends PureComponent{

    render(){
        return(
            <section className="container-fluid the_clients"  >
               

                <div className="row justify-content-center">
                    <h1>With <span style={{color:'rgba(75, 129, 255, 1)'}}> Us</span></h1>
                </div>
                <div className="row justify-content-center client_text">
                    <div className="col-md-6 col-9 py-3">
                    Our long-term relationship with our clients has turned productive that in turn has led to synergy and a goal-oriented approach. With a broad range of services, we have been able to maintain a trustworthy relationship from years together.
                    </div>
                </div>
                <div className="row justify-content-center align-items-center clients_list  pb-0 wow animated fadeInUp">
                    <div className="col-md-2">
                        <img src={one} alt="" srcset="" className="image"/>
                    </div>
                    <div className="col-md-2">
                    <img src={two} alt="" srcset="" className="image"/>
                    </div>
                    <div className="col-md-2">
                    <img src={three} alt="" srcset="" className="image"/>
                    </div>
                    <div className="col-md-2">
                    <img src={four} alt="" srcset="" className="image"/>
                    </div>
                    <div className="col-md-2">
                    <img src={five} alt="" srcset="" className="image"/>
                    </div>
                     
                </div>
                <div className="row justify-content-center align-items-center clients_list pt-0 wow animated fadeInUp">
                    <div className="col-md-2">
                        <img src={six} alt="" srcset="" className="image"/>
                    </div>
                    <div className="col-md-2">
                    <img src={seven} alt="" srcset="" className="image"/>
                    </div>
                    <div className="col-md-2">
                    <img src={eight} alt="" srcset="" className="image"/>
                    </div>
                    <div className="col-md-2">
                    <img src={nine} alt="" srcset="" className="image"/>
                    </div>
                    <div className="col-md-2">
                    <img src={ten} alt="" srcset="" className="image"/>
                    </div>
                     
                </div>
                
            </section>
        )
    }
}

export default Clients