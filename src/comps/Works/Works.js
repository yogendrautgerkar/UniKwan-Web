import React, { PureComponent } from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import Contact from "../common/contact/Contact";
import goTop from "../../assets/images/works/goup.svg";
import Nav from "../common/Nav/Nav";
import work1 from "../../assets/images/works/work1.jpg";
import work2 from "../../assets/images/works/work2.jpg";
import work3 from "../../assets/images/works/work3.jpg";
import work4 from "../../assets/images/works/work4.jpg";
import work5 from "../../assets/images/works/work5.jpg";
import work6 from "../../assets/images/works/work6.jpg";
import work7 from "../../assets/images/works/work7.jpg";
import $ from "jquery";

class Works extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      active: "all"
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);

    $(document).ready(function() {
      $(".filter-button").click(function() {
        var value = $(this).attr("data-filter");

        if (value === "all") {
          //$('.filter').removeClass('hidden');
          $(".filter").show("1000");
          $(this)
            .parent()
            .addClass("selected")
            .siblings()
            .removeClass("selected");
        } else {
          //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
          //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
          $(".filter")
            .not("." + value)
            .hide("3000");
          $(".filter")
            .filter("." + value)
            .show("3000");
          $(this)
            .parent()
            .addClass("selected")
            .siblings()
            .removeClass("selected");
        }
      });
    });
  }

  renderItems() {
    let items = [];
    for (let i = 0; i < 7; i++) {
      items.push(
        <div
          key={`${i}st`}
          className={`col-sm-12 col-md-${
            i === 0 || i === 6 ? "8" : "4"
          } projs pb-4 animated wow fadeInRight`}
          style={{ animationDelay: `${i * 0.12}s` }}
        >
          <Link to="/project">
            <div className="image_1_1"></div>

            <h6>Project1 name</h6>
            <p>company website</p>
          </Link>
        </div>
      );
    }
    return items;
  }

  render() {
    return (
      <div style={{ background: "#fafafa" }}>
        <Nav dark={true} />
        <section className="container " id="works">
          <div className="row justify-content-center align-items-center py-5">
            <div className="row justify-content-center py-5">
              <div className="col-10 col-md-8 text-center">
                <h1 id="works_head" className="wow animated flipInX">
                  Through the <span>lens</span>
                </h1>
                <p id="works_text">
                  Here is an in-depth look into our design strategies that have
                  successfully inculcated and have beenproducing multifold
                  benefits to numerous companies. These samples of our work
                  showcase ourmethodologies through which we have achieved
                  potential business goals and found major.revelations. We are
                  sure that our first impression of the state-of-the-art
                  projects will engrave a lasting impression on your minds.
                </p>
              </div>
            </div>
          </div>
          <div className="row col-md-6 justify-content-center text-center menu_sec pb-2  ">
            <div className="col-3 selected" style={{ width: "100%" }}>
              <p className="filter-button" data-filter="all">
                All Projects
              </p>
            </div>
            <div className="col-3" style={{ width: "100%" }}>
              <p className="filter-button" data-filter="uiux">
                UI UX
              </p>
            </div>
            <div className="col-3" style={{ width: "100%" }}>
              <p className="filter-button" data-filter="research">
                Research
              </p>
            </div>
            <div className="col-3" style={{ width: "100%" }}>
              <p className="filter-button" data-filter="branding">
                Branding
              </p>
            </div>
          </div>
          <br />

          <div class="row col-md-12 px-2 py-5">
            <div class="col-md-8 filter photo pb-5 wow fadeInUp animated">
              <Link to="/project/ktech">
                <img
                  class="port-image"
                  alt=""
                  src={work1}
                  style={{ width: "100%", height: "346px", objectFit: "cover" }}
                />
                <span className="top_text">K-Tech</span>
                <span className="bot_text">Company website</span>
              </Link>
            </div>

            <div class="col-md-4 filter research pb-5 wow fadeInUp animated">
              <Link to="/project/dialog">
                <img
                  class="port-image"
                  alt=""
                  src={work2}
                  style={{ width: "100%", height: "346px" }}
                />
                <span className="top_text">Dialogue TV</span>
                <span className="bot_text">TV</span>
              </Link>
            </div>
            <div class="col-md-4 filter uiux research pb-5 wow fadeInUp animated">
              <Link to="/project/aayaam">
              <img
                class="port-image"
                alt=""
                src={work3}
                style={{ width: "100%", height: "346px" }}
              />
                <span className="top_text">Atati Ayaam</span>
                <span className="bot_text">Mobile App Design</span>
              </Link>
            </div>
            <div class="col-md-4 filter photo pb-5 wow fadeInUp animated">
                <Link to="/project/lightmetrics">
              <img
                class="port-image"
                alt=""
                src={work4}
                style={{ width: "100%", height: "346px" }}
              />
                <span className="top_text">Light Metrics</span>
                <span className="bot_text">Company website </span>
                </Link>
            </div>
            <div class="col-md-4 filter branding pb-5 wow fadeInUp animated">
                <Link to="/project/atyati_branding">
              <img
                class="port-image"
                alt=""
                src={work5}
                style={{ width: "100%", height: "346px" }}
              />
                <span className="top_text">Atyati Branding</span>
                <span className="bot_text">Branding</span>
                </Link>
            </div>
            <div class="col-md-4 filter branding pb-5 wow fadeInUp animated">
                <Link to="/project/innovate_karnataka">
              <img
                class="port-image"
                alt=""
                src={work6}
                style={{ width: "100%", height: "346px" }}
              />
                <span className="top_text">Innovative Karnataka</span>
                <span className="bot_text">Branding</span>
              </Link>
            </div>
            <div class="col-md-8 filter uiux pb-5 wow fadeInUp animated">
                <Link to="/project/atyati_web">
              <img
                class="port-image"
                alt=""
                src={work7}
                style={{ width: "100%", height: "346px", objectFit: "cover" }}
              />
                <span className="top_text">Atyati Website</span>
                <span className="bot_text">Company website </span>
                </Link>
            </div>
          </div>

          {/* menus here */}
          {/* <div className="row justify-content-center align-items-start text-center menu_sec pt-5 pb-2  ">
                            <div className="col-3" style={{width:'100%'}}>
                                <p className={this.state.active === 'all'? 'active': ""} onClick={()=>this.setState({active:'all'})}>All Projects</p>
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
                        */}

          {/* row 1 here */}

          {/* go up button */}

          <div className="row justify-content-center align-items-start">
            <div className="col-1">
              <img
                src={goTop}
                alt=""
                width="40px"
                height="40px"
                onClick={() =>
                  document
                    .getElementById("works")
                    .scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                      inline: "nearest"
                    })
                }
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        </section>

        <Contact />
      </div>
    );
  }
}
export default Works;
