import React ,{PureComponent} from 'react'
 
import './ContactModal.css'
export default class ContactModal extends PureComponent {

  constructor(props){
    super(props);
    this.state={
      active:'business',
      businessBuildOption:null,
      requirements:'',
      name:'',
      email:'',
      foundVia:'',
      careerSelected:'What are you looking for?',
      portfolio:'',
      workshopSelected:'What are you looking for?',
      workshop:''
    }
  }

  handleSubmit =(e)=>{
    e.preventDefault();
   
    const { active,
      name,
      email,
      foundVia,
      requirements,
      careerSelected,
      portfolio,
      workshopSelected,
      workshop} = this.state;

      var formReply ={
        name,
        email,
        foundVia,
      };

    if(active === "business"){
     formReply ={
       ...formReply,
        requirements,
      }
    }else if(active === "career"){
      formReply ={
         ...formReply,
         careerSelected,
         portfolio
       }
     }else{
      formReply ={
        ...formReply,
        workshopSelected,
        workshop
      }
     }

    alert(JSON.stringify(formReply));
    this.setState({
      businessBuildOption:null,
      requirements:'',
      name:'',
      email:'',
      foundVia:'',
      careerSelected:'What are you looking for?',
      portfolio:'',
      workshopSelected:'What are you looking for?',
      workshop:''
    })
  }
  handleBusinessBuildOptionChange=(event)=> {
    console.log(event.target.value);
    this.setState({
      ...this.state,
      businessBuildOption: event.target.value
    });
  };
  handleFindViaChange=(event)=> {
    console.log(event.target.value);
    this.setState({
      ...this.state,
      foundVia: event.target.value
    });
  };

  handleReqChange=(event)=> {
     console.log(event.target.value);
    this.setState({requirements: event.target.value});
  }
  handleUserWork=(event)=> {
     console.log(event.target.value);
    this.setState({portfolio: event.target.value});
  }
  handleNameChange=(event)=> {
     console.log(event.target.value);
    this.setState({name: event.target.value});
  }
  handleEmailChange=(event)=> {
     console.log(event.target.value);
    this.setState({email: event.target.value});
  }
  handleCareerSelectChange=(e)=>{
    this.setState({careerSelected:e.target.value});
}
  handleWorkshopSelectChange=(e)=>{
    this.setState({workshopSelected:e.target.value});
}

   
  cats_click = (cat) =>{
    this.setState({active:cat})
  }
  

  renderForm= ()=>{
    if(this.state.active === "business"){
      this.setState({active:"business"})
      return(
        <div className="pt-3 animated fadeIn">

              <p id="ques">What do you want to build ?</p>
            
              <div className="row justify-content-start align-items-center build_options  ">
                <div className="col-4">
          
                <div className="radioA">
                  <input type="radio" id="mobile_app" name="optradioA"   onChange={this.handleBusinessBuildOptionChange} value="mobile app" />
                  <label for="mobile_app"><div className="checker" />Mobile App</label>
                </div>

                  
                  </div>
                  <div className="col-4">
                      <div className="radioA">
                      <input type="radio" id="website" name="optradioA"   onChange={this.handleBusinessBuildOptionChange} value="website" />
                      <label for="website"><div className="checker" />Website</label>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="radioA">
                        <input type="radio" id="research" name="optradioA"   onChange={this.handleBusinessBuildOptionChange} value="research" />
                        <label for="research"><div className="checker" />Research</label>
                      </div>
                  </div>
                  <div className="col-4">
                    <div className="radioA">
                          <input type="radio" id="branding" name="optradioA"   onChange={this.handleBusinessBuildOptionChange} value="branding" />
                          <label for="branding"><div className="checker" />Branding</label>
                      </div>
                  </div>
                  <div className="col-4">
                    <div className="radioA">
                          <input type="radio" id="content" name="optradioA"   onChange={this.handleBusinessBuildOptionChange} value="content" />
                          <label for="content"><div className="checker" />Content</label>
                      </div>
                  </div>
              </div>
    
            <div className="form-group"> 
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Requirements" value={this.state.requirements} onChange={this.handleReqChange}  />
            </div>

            <div>

              <p id="ques">Let me know you</p>

              <div className="form-group"> 
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" value={this.state.name} onChange={this.handleNameChange} />
              </div>
              <div className="form-group"> 
                <input type="text" name="email" className="form-control" id="email" placeholder="Email Address" value={this.state.email} onChange={this.handleEmailChange} />
              </div>
            </div>
    

          </div>
      )

    }else if(this.state.active === "career"){
      this.setState({active:"career"})
      return(
        <div style={{paddingBottom:100}}  className="pt-3 animated fadeIn">
             

                <p id="ques">Let me know you</p>
                <div className="form-group">
                        
                            <select 
                                value={this.state.careerSelected} 
                                onChange={this.handleCareerSelectChange}>
                                    <option value=" What are you looking for?">What are you looking for?</option>
                                    <option value=" UI/UX Designer">UI/UX Designer</option>
                                    <option value=" Graphic Designer">Graphic Designer</option>
                                    <option value=" Web Developer">Web Developer</option>
                                    <option value=" Business">Business</option>
                                    <option value=" Content Writing">Content Writing</option>
                            </select>
                        </div>
                <div className="form-group"> 
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" value={this.state.name} onChange={this.handleNameChange} />
                </div>
                <div className="form-group"> 
                  <input type="text" name="email" className="form-control" id="email" placeholder="Email Address" value={this.state.email} onChange={this.handleEmailChange} />
                </div>      
    
                <div className="form-group"> 
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Portfolio Link" value={this.state.portfolio} onChange={this.handleUserWork}  />
                </div>
               
        

          </div>
      )


    }else{
      this.setState({active:"workshop"})
        return(
          
          <div style={{paddingBottom:100}} className="pt-3 animated fadeIn">
             

                <p id="ques">What do you prefer?</p>
                <div className="form-group">
                        
                            <select 
                                value={this.state.workshopSelected} 
                                onChange={this.handleWorkshopSelectChange}>
                                    <option value=" What are you looking for?">What are you looking for?</option>
                                    <option value=" UI/UX Designer">UI/UX Designer</option>
                                    <option value=" Graphic Designer">Graphic Designer</option>
                                    <option value=" Web Developer">Web Developer</option>
                                    <option value=" Business">Business</option>
                                    <option value=" Content Writing">Content Writing</option>
                            </select>
                        </div>
                <div className="form-group"> 
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" value={this.state.name} onChange={this.handleNameChange} />
                </div>
                <div className="form-group"> 
                  <input type="text" name="email" className="form-control" id="email" placeholder="Email Address" value={this.state.email} onChange={this.handleEmailChange} />
                </div>      
    
            
        

          </div>
        )
              
    }

  }


  render(){
    return (
        <div className="col-8 myModalContainer">
        <div id="myModal" className="modal">
  
     
        <div className="modal-content">
          <div className="">
            <span className="close">&times;</span> 
          </div>
  
          <div className="modal-body">
            
            <div className="row justify-content-center"> 
              <div className="col-12 pb-5 col-sm-8">
              <h2>Come aboard</h2>
              <p>Let’s build a constructive future together.</p>
  
              <div className="row justify-content-between align-items-center contact_cats" >
                <div className="col-4">
                  <div className={`cats ${this.state.active === 'business'? 'active': ""}`} onClick={()=>this.cats_click('business')}>
                  <span className="icon-web"></span>
                    <span>Business</span>
                  </div>
                </div>
                <div className="col-4">
                  <div className={`cats ${this.state.active === 'career'? 'active': ""}`} onClick={()=>this.cats_click('career')}>
                  <span className="icon-job"></span>
                    <span>New Career</span>
                  </div>
                </div>
                <div className="col-4">
                  <div className={`cats ${this.state.active === 'workshop'? 'active': ""}`} onClick={()=>this.cats_click('workshop')}>
                  <span className="icon-idea"></span>
                    <span>Workshop</span>
                  </div>
                </div>
              </div> 

        {/* The  form */}
        
          {this.renderForm()}
        
      {/* Footer */}
  
          <p id="ques">How did you find us?</p>
          <div className="form-group" >
      <div className="radio my_radio" style={{paddingTop:18}}>
                                      <input id="search" type="radio" name="optradio"   value="Search"  onChange={this.handleFindViaChange}/>
                                        <label for="search">Search</label>
                                      </div>
                                      <div className="radio my_radio">
                                      <input id="word_of_mouth" type="radio" name="optradio" value="Word of Mouth"  onChange={this.handleFindViaChange}/>
                                        <label for="word_of_mouth">Word of Mouth</label>
                                      </div>
                                      <div className="radio my_radio">
                                      <input id="social_media" type="radio" name="optradio" value="Social Media"  onChange={this.handleFindViaChange}/>
                                        <label for="social_media">Social Media</label>
                                      </div>
                                      <div className="radio my_radio">
                                      <input id="others" type="radio" name="optradio" value="Others"  onChange={this.handleFindViaChange}/>
                                        <label for="others">Others</label>
                                      </div>
                                      
                                    </div>
  
                                    <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={(e)=>this.handleSubmit(e)}>Submit</button>
        </div>
  
        </div>  
           
          
      </div>
      
    </div>
  
  </div>
      </div>
    )
  }
}



 