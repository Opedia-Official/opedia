import { useState } from 'react';
import Head from 'next/head'
import HeroSlide from '../components/HeroSlide';
import ExpTeam from '../components/ExpTeam';
import { Card } from 'react-bootstrap';
import { BiRightArrowAlt} from "react-icons/bi";
import { SiSimpleanalytics} from "react-icons/si";
import { FaCloud, FaDatabase, FaRegHeart, FaHeart,FaRegSmileBeam,FaFacebookF, 
  FaRegPaperPlane,
  FaRegLightbulb,
  FaPlaneDeparture,
  FaAngleDoubleRight,
  FaInstagram,FaTwitter,FaGithub, FaHeadphonesAlt} from "react-icons/fa";
import { MdOutlineDesignServices} from "react-icons/md";
import { FiShare2} from "react-icons/Fi";
import { GiHelicopter} from "react-icons/Gi";
import { BsChatSquare} from "react-icons/Bs";
import { GiSofa} from "react-icons/Gi";

import CountUp from 'react-countup';
import HomeStyle from "../styles/Home.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import Xyz from '../components/xyz';

import Progressbar from '../components/Progressbar';
import Testimonial from '../components/Testimonial';

export default function Home() {
  const [isReact, setIsReact] = useState(false);

  return (
     <>
       <HeroSlide/>

      <ExpTeam/>

 

      {/* VIEW SERVICE AREA */}
        <div className="view-service-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="view-service-section-wrapper">
                    <div className="section-title">
                                <h5>// About Company</h5>
                                <h3>Provide It & Technol 
                                Service For You</h3>
                            </div>
                            <p >Construction is a general term meaning the art and science to form
                      systems organizations, and comes from Latin Construction is</p>
                    <div className="section-title">
                       
                                <p>Construction is a general term meaning the art and science to form
                              systems organizations, and comes from Latin Construction is a 
                              organizations, and comes from Latin construction and Old</p>
                        </div>
                  <a href="#" className="btn-two mt-35">View Service</a>

                </div>
              </div>
              <div className="col-md-6 ">
                  <div className= {HomeStyle.viewServiceBg + " " +  "view-service-right-wrapper"}  >
                      <div className="row">
                        <div className="col-md-6 col-sm-6">
                        <Card >
                          <Card.Body>
                          <FaCloud/>
                            <Card.Title>Cloud Computing</Card.Title>
                            <Card.Text>
                                    Construction is a general term
                                  the art and science to form 
                                <div>
                                <a href="#"> Service Details <BiRightArrowAlt/></a>
                                </div>
                            </Card.Text>
                          
                          </Card.Body>
                        </Card>
                        </div>
                        <div className="col-md-6 col-sm-6 mt-5">
                        <Card >
                          <Card.Body>
                            <SiSimpleanalytics/>
                            <Card.Title>Analytic Solutions</Card.Title>
                            <Card.Text>
                            Construction is a general term
                          the art and science to form 
                                <div>
                                <a href="#"> Service Details <BiRightArrowAlt/></a>
                                </div>
                            </Card.Text>
                          
                          </Card.Body>
                        </Card>
                        </div>
                        <div className="col-md-6 col-sm-6 mt--35">
                        <Card >
                          <Card.Body>
                            <MdOutlineDesignServices/>
                            <Card.Title>product & Design</Card.Title>
                            <Card.Text>
                                    Construction is a general term
                                  the art and science to form 
                                <div>
                                <a href="#"> Service Details <BiRightArrowAlt/></a>
                                </div>
                            </Card.Text>
                          
                          </Card.Body>
                        </Card>
                        </div>
                        <div className="col-md-6 col-sm-6 mt-5">
                        <Card >
                          <Card.Body>
                            <FaDatabase/>
                            <Card.Title>Data Centers</Card.Title>
                            <Card.Text>
                                    Construction is a general term
                                  the art and science to form 
                                <div>
                                <a href="#"> Service Details <BiRightArrowAlt/></a>
                                </div>
                            </Card.Text>
                          
                          </Card.Body>
                        </Card>
                        </div>
                      </div>
                  </div>

              </div>
            </div>
          </div>
        </div>
   {/* VIEW SERVICE AREA */}


       {/* SHOWCASE GALLARY AREA */}

        <div className="showCase-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
              <div className="section-title">
                            <h5>// About Company</h5>
                            <h3>Our Recent Projects
                                    Showcase Gallery.</h3>
                           
                        </div>
              </div>
              <div className="col-md-6">
              <div className="section-title ">
                                <p>25+Contrary to popular belief, Lorem Ipsum is not simply random text
roots in a piece of classical Latin literature from 45 BC.Lorem ipsum
lipsum as it is sometimes known, is dummy text used in laying
out print, graphic or web designs. The passage is </p>
                        </div>
              </div>
            </div>
            <div className="row mt-50 justify-content-center">
              <div className="col-md-5 col-sm-8"> 
                  <div className="showCase-wrap mb-4 mb-md-0">
                      <div className="show-case-features  s-img-wrap">
                          <img src="./ShowCase-gallary/pic-1.png" alt="" />
                      </div>
                      <div className="show-case-info">
                          <div className="s-action">
                              {isReact ?  <span onClick={()=>setIsReact(!isReact)} ><FaHeart/></span> : <span onClick={()=>setIsReact(!isReact)}><FaRegHeart/></span>}
                              <span><FiShare2/></span>
                          </div>
                          <div className="show-case-text">
                              <h4><a href="#" > Data Research Analysis </a></h4>
                                <p>Cloud Computing</p>
                          </div>
                      </div>
                  </div>

              </div>
              <div className="col-md-7">
                <div className="row justify-content-center">
                  <div className="col-md-6 col-sm-6">
                    <div className="showCase-wrap mb-4 mb-md-0">
                        <div className="show-case-child s-img-wrap">
                            <img src="./ShowCase-gallary/pic-2.png" alt="" />
                        </div>
                        <div className="show-case-info">
                          <div className="s-action">
                          {isReact ?  <span onClick={()=>setIsReact(!isReact)} ><FaHeart/></span> : <span onClick={()=>setIsReact(!isReact)}><FaRegHeart/></span>}
                              <span><FiShare2/></span>
                          </div>
                          <div className="show-case-text">
                              <h4><a href="#" > Data Research Analysis </a></h4>
                                <p>Cloud Computing</p>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="showCase-wrap">
                        <div className="show-case-child s-img-wrap">
                            <img src="./ShowCase-gallary/pic-2.png" alt="" />
                        </div>
                        <div className="show-case-info">
                          <div className="s-action">
                          {isReact ?  <span onClick={()=>setIsReact(!isReact)} ><FaHeart/></span> : <span onClick={()=>setIsReact(!isReact)}><FaRegHeart/></span>}
                              <span><FiShare2/></span>
                          </div>
                          <div className="show-case-text">
                              <h4><a href="#" > Data Research Analysis </a></h4>
                                <p>Cloud Computing</p>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="showCase-wrap mt-4">
                        <div className="show-case-child s-img-wrap">
                            <img src="./ShowCase-gallary/pic-2.png" alt="" />
                        </div>
                        <div className="show-case-info">
                          <div className="s-action">
                          {isReact ?  <span onClick={()=>setIsReact(!isReact)} ><FaHeart/></span> : <span onClick={()=>setIsReact(!isReact)}><FaRegHeart/></span>}
                              <span><FiShare2/></span>
                          </div>
                          <div className="show-case-text">
                              <h4><a href="#" > Data Research Analysis </a></h4>
                                <p>Cloud Computing</p>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="showCase-wrap mt-4">
                        <div className="show-case-child s-img-wrap">
                            <img src="./ShowCase-gallary/pic-2.png" alt="" />
                        </div>
                        <div className="show-case-info">
                          <div className="s-action">
                          {isReact ?  <span onClick={()=>setIsReact(!isReact)} ><FaHeart/></span> : <span onClick={()=>setIsReact(!isReact)}><FaRegHeart/></span>}
                              <span><FiShare2/></span>
                          </div>
                          <div className="show-case-text">
                              <h4><a href="#" > Data Research Analysis </a></h4>
                                <p>Cloud Computing</p>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


       {/* SHOWCASE GALLARY  AREA */}
      <div className="project-counter-area">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
                <div className="counter-up-wrap">
                      <span><FaCloud/></span>
                      <h3> <CountUp end={569}/> </h3>
                      <p>Аpps Developed</p>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="counter-up-wrap sm-after-none">
                      <span><BsChatSquare/></span>
                      <h3> <CountUp end={268}/> </h3>
                      <p>Total Consultans</p>
                </div>
            </div>
            <div className="col-md-3 col-sm-6 mt-5 mt-md-0">
                <div className="counter-up-wrap ">
                      <span><FaRegSmileBeam/></span>
                      <h3> <CountUp end={340}/> </h3>
                      <p>Setisfied Clients</p>
                </div>
            </div>
            <div className="col-md-3 col-sm-6 mt-5 mt-md-0">
                <div className="counter-up-wrap c-last-child">
                      <span><GiSofa/></span>
                      <h3> <CountUp end={400}/> </h3>
                      <p> Office Employers</p>
                </div>
            </div>
          </div>
        </div>
      </div>

              {/* SHOWCASE GALLARY  AREA */}

              {/* UPDATE SECTON */}
              <div className="project-update-section text-center text-md-start bg-brand">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                          <div className="project-update-section-wrap">
                          <div className="section-title">
                            <h5>// About Company</h5>
                            <h3>Don,t miss our update</h3>
                        </div>
                          <p className='pr-140p'>25+Contrary to popular belief, Lorem Ipsum is not simply random
roots in a piece of classical Latin literature from 45 BC.Lorem </p>

                            <div className="subscribe-section">
                                <form action="#">
                                      <input type="text" placeholder=' Enter email address' />
                                      <button type='submit' className='btn-brand'> Subscribed</button>
                                </form>
                            </div>
                          </div>
                    </div>
                     <div className="col-md-6">
                      <Progressbar/>
                    </div>
                  </div>
                </div>
              </div>



              {/* UPDATE SECTON */}


              {/* EXPERTS WORKERS */}

                <div className="expert-workers-section-area text-center text-md-start">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6 offset-md-3">
                        <div className="section-title text-center mb-50">
                            <h5>// Expert Worker</h5>
                            <h3>Our Expert Worker.</h3>

                        </div>
                      </div>
                    </div>

                    <Swiper
                      spaceBetween={30}
                      slidesPerView={4}
                      autoplay= {true}
                      breakpoints={{
                        992: {
                            slidesPerView: 4,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        425:{
                          slidesPerView: 2,
                        },
                        0: {
                            slidesPerView: 1,
                        },
                    }}
                    >
                      <SwiperSlide> <div className="exp-workers-item-wrapper">
                              <div className="section-img">
                                  <img src="./expert-worker/pic-1.png" alt="" />
                              </div>
                              <ul className="exp-social">
                                <li><a href="#"><FaFacebookF/></a></li>
                                <li><a href="#"><FaInstagram/></a></li>
                                <li><a href="#"><FaTwitter/></a></li>
                                <li><a href="#"><FaGithub/></a></li>
                              </ul>

                              <div className="worker-info">
                                    <h5>Tahmina Rumi</h5>
                                    <p>Web Developer</p>
                              </div>
                          </div></SwiperSlide>
                      <SwiperSlide><div className="exp-workers-item-wrapper">
                              <div className="section-img">
                                  <img src="./expert-worker/pic-1.png" alt="" />
                              </div>
                              <ul className="exp-social">
                                <li><a href="#"><FaFacebookF/></a></li>
                                <li><a href="#"><FaInstagram/></a></li>
                                <li><a href="#"><FaTwitter/></a></li>
                                <li><a href="#"><FaGithub/></a></li>
                              </ul>

                              <div className="worker-info">
                                    <h5>Jorina Begum</h5>
                                    <p>Ux Designer</p>
                              </div>
                          </div></SwiperSlide>
                      <SwiperSlide>
                      <div className="exp-workers-item-wrapper">
                              <div className="section-img">
                                  <img src="./expert-worker/pic-1.png" alt="" />
                              </div>
                              <ul className="exp-social">
                                <li><a href="#"><FaFacebookF/></a></li>
                                <li><a href="#"><FaInstagram/></a></li>
                                <li><a href="#"><FaTwitter/></a></li>
                                <li><a href="#"><FaGithub/></a></li>
                              </ul>

                              <div className="worker-info">
                                    <h5>Hannan Bhuiyan</h5>
                                    <p>Graphic Designer</p>
                              </div>
                          </div>
                      </SwiperSlide>
                      <SwiperSlide>
                      <div className="exp-workers-item-wrapper">
                              <div className="section-img">
                                  <img src="./expert-worker/pic-1.png" alt="" />
                              </div>
                              <ul className="exp-social">
                                <li><a href="#"><FaFacebookF/></a></li>
                                <li><a href="#"><FaInstagram/></a></li>
                                <li><a href="#"><FaTwitter/></a></li>
                                <li><a href="#"><FaGithub/></a></li>
                              </ul>

                              <div className="worker-info">
                                    <h5>Delower Hasan</h5>
                                    <p>Assistant</p>
                              </div>
                          </div>
                      </SwiperSlide>
                      <SwiperSlide>
                      <div className="exp-workers-item-wrapper">
                              <div className="section-img">
                                  <img src="./expert-worker/pic-1.png" alt="" />
                              </div>
                              <ul className="exp-social">
                                <li><a href="#"><FaFacebookF/></a></li>
                                <li><a href="#"><FaInstagram/></a></li>
                                <li><a href="#"><FaTwitter/></a></li>
                                <li><a href="#"><FaGithub/></a></li>
                              </ul>

                              <div className="worker-info">
                                    <h5>Abdul Gaffer</h5>
                                    <p>Motion Designer</p>
                              </div>
                          </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              {/* EXPERTS WORKERS */}


              {/* SPECIALIST AREA */}

              <div className="specialist-team-area bg-brand text-center text-md-start">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                    <div className="section-title">
                            <h5>// About Company</h5>
                            <h3>We team of experience <br />
                                It Specialties.</h3>
                                <p>25+Contrary to popular belief, Lorem Ipsum is not simply random text  <br />
                                roots in a piece of classical Latin literature from 45 BC</p>
                        </div>

                        <ul className="specialist-items">
                          <li className="sp-item ">
                              <span><FaHeadphonesAlt/></span>
                                <div className="sp-item-info">
                                    <h4>Helpdesk Support</h4>
                                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy
text used in laying out print, graphic or web.</p>
                                </div>
                          </li>
                          <li className="sp-item">
                              <span><FaRegLightbulb/></span>
                              <div className="sp-item-info mb-5 mb-md-0">
                                    <h4>Creative Solutions</h4>
                                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy
text used in laying out print, graphic or web.</p>
                                </div>
                          </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <div className="sp-r-section-wrap">
                            <div className="sp-feature-img">
                                <img className='sp-feature' src="./specialist/pic-1.png" alt="" />
                                <img src="./specialist/pic-3.png" alt="" className="sp-child" />
                            </div>
                            <div className="sp-img-r-child">
                                <img src="./specialist/pic-2.png" alt="" />
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            {/* SPECIALIST AREA */}


            {/* OUR PRICING AREA */}
          <div className="our-pricing-area">
            <div className="container">
              <div className="row">
              <div className="col-md-6 offset-md-3">
                    <div className="section-title text-center mb-60">
                        <h5>// Expert Worker</h5>
                        <h3>Our Expert Worker.</h3>
                    </div>
                  </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-4 col-sm-6 ">
                  <div className="our-pricing-wrap text-center">
                  <Card>
                      <div className="pricing-level">
                        <p>Silver</p>
                      </div>
                    <Card.Body>

                        <span><FaRegPaperPlane/></span>
                      <Card.Title><h4>$49.00</h4> <span>/mon</span></Card.Title>
                      <Card.Text>
                            <ul className="pricing-items">
                              <li>Only 2 Operators</li>
                              <li>Abandoned Cart</li>
                              <li>Facebook & Instagram Ads</li>
                              <li>Order Notifications</li>
                              <li>Landing Pages</li>
                            </ul>
                            
                      </Card.Text>

                        <a href="#" className="btn-two mt-20">Start Today</a>
                    </Card.Body>
                  </Card>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 mt-5 mt-sm-0">
                  <div className="our-pricing-wrap text-center">
                  <Card>
                      <div className="pricing-level">
                        <p>Gold</p>
                      </div>
                    <Card.Body>

                        <span><GiHelicopter/></span>
                      <Card.Title><h4>$49.00</h4> <span>/mon</span></Card.Title>
                      <Card.Text>
                            <ul className="pricing-items">
                              <li>Only 2 Operators</li>
                              <li>Abandoned Cart</li>
                              <li>Facebook & Instagram Ads</li>
                              <li>Order Notifications</li>
                              <li>Landing Pages</li>
                            </ul>
                            
                      </Card.Text>

                        <a href="#" className="btn-two mt-20">Start Today</a>
                    </Card.Body>
                  </Card>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 mt-5 mt-md-0">
                  <div className="our-pricing-wrap text-center">
                  <Card>
                      <div className="pricing-level">
                        <p>Platinum</p>
                      </div>
                    <Card.Body>

                        <span><FaPlaneDeparture/></span>
                      <Card.Title><h4>$49.00</h4> <span>/mon</span></Card.Title>
                      <Card.Text>
                            <ul className="pricing-items">
                              <li>Only 2 Operators</li>
                              <li>Abandoned Cart</li>
                              <li>Facebook & Instagram Ads</li>
                              <li>Order Notifications</li>
                              <li>Landing Pages</li>
                            </ul>
                            
                      </Card.Text>

                        <a href="#" className="btn-two mt-20">Start Today</a>
                    </Card.Body>
                  </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>

            {/* OUR PRICING AREA */}


            {/* TESTIMONIAL AREA */}
        <div className="testimonial-area bg-brand ">
          <div className="container">
            <div className="row">
            <div className="col-md-6 offset-md-3">
                    <div className="section-title text-center mb-40">
                        <h5>// Client,s Testimonial</h5>
                        <h3>What Client,s Says?</h3>
                    </div>
                  </div>
                  <div className="col-md-12">
                            <Testimonial/>
                  </div>
            </div>
          </div>
        </div>

            {/* TESTIMONIAL AREA */}


            {/* BLOG SECTION START */}
        <div className="blog-area">
          <div className="container">
            <div className="row justify-content-center">
            <div className="col-md-12">
                    <div className="section-title text-center mb-40">
                        <h5>// News & Blogs</h5>
                        <h3>Leatest News & Blog</h3>
                    </div>
                  </div>
                <div className="col-md-8">
                    <div className="blog-features-wrap">
                          <div className="blog-f-image-info">
                              <img src="./blog/pic-1.png" alt="" />
                              <div className="blog-date">
                                  <h4>20</h4>
                                  <span>Oct</span>
                              </div>
                          </div>
                      <div className="blog-home-text-wrap mb-4 mb-md-0">
                      <div className="blog-home-text">
                          <h3><a href='#' > It is a long established fact that a reader will be Standard Part</a></h3>
                            <p>A wonderful serenity has taken possssion of my entire souing like these sweet morning
                              spring whch enjoy with my whole heart I am alone, and feel the charm of existenceths spot
                              whch was create For the bliss of souls like mineing am so happy my dear frend so absori
                              bed in the exquste sens of mere. A wonderful serenity has taken posseson of my entire
                              soung like these sweet mornngs spring whch enjoy …
                              </p>
                              
                        </div>
                        <div className="blog-h-author">
                              <div className="blog-a-img-name">
                                  <a href="#">
                                  <img src="./blog/pic-3.png" alt="" />
                                  <p>Mehedii Mohammad</p>
                                  </a>
                              </div>
                              <a href="#"> Read More <FaAngleDoubleRight/> </a>
                        </div>
                      </div>
                        
                    </div>
                </div>
                <div className="col-md-4 col-sm-8">
                    <div className="blog-right-wrap">
                         {/* SINGLE ITEM */}
                  <div className="blog-features-wrap mb-4">
                          <div className="blog-f-image-info">
                              <img src="./blog/pic-1.png" alt="" />
                              <div className="blog-date">
                                  <h4>20</h4>
                                  <span>Oct</span>
                              </div>
                          </div>
                      <div className="blog-home-text-wrap">
                      <div className="blog-home-text blg-text-right">
                          <h3><a href='#'> It is a long established fact that a reader will be Standard Part</a></h3>
                        </div>
                      </div>
                        
                    </div>
                  {/* SINGLE ITEM */}
                  <div className="blog-features-wrap">
                          <div className="blog-f-image-info">
                              <img src="./blog/pic-1.png" alt="" />
                              <div className="blog-date">
                                  <h4>20</h4>
                                  <span>Oct</span>
                              </div>
                          </div>
                      <div className="blog-home-text-wrap">
                      <div className="blog-home-text blg-text-right">
                      <h3><a href='#' > It is a long established fact that a reader will be Standard Part</a></h3>
                        </div>
     
                      </div>
                        
                    </div>
                    </div>
                </div>
            </div>
          </div>
        </div>

            {/* BLOG SECTION ENDS */}



      



        


     </>

    
  )
}
