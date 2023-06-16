import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import "./Landing.scss";
import Slide1 from "../../assets/Banner/Slide1.jpg"
import Slide2 from "../../assets/Banner/Slide2.jpg"
import Slide3 from "../../assets/Banner/Slide3.jpg"
import Slide4 from "../../assets/Banner/Slide4.jpg"
import Slide5 from "../../assets/Banner/Slide5.jpg"
import Slide6 from "../../assets/Banner/Slide6.jpg"
import Slide7 from "../../assets/Banner/Slide7.jpg"
import Slide8 from "../../assets/Banner/Slide8.jpg"

import AboutImg from '../../assets/Images/about.jpg'
import LMU from '../../assets/Images/london-met-university-logo.png'
import ING from '../../assets/Images/ing_logo.svg'
import Degree1 from '../../assets/Images/bit.jpg'
import Degree2 from '../../assets/Images/bba.jpg'
import PopUp from "../PopUp/PopUp";
import BibekThapa from '../../assets/Images/bibekThapa.jpg'
import BipanaBhujel from '../../assets/Images/bipanaBhujel.jpg'
import NishanBudathoki from '../../assets/Images/nishanBudhathoki.jpg'
import Admission from '../../assets/Images/admission.jpg'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'
import { RiSendPlaneFill } from 'react-icons/ri'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
const Landing = () => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        if(slide==-200){
            setSlide(0)
        }
        else{
            setSlide(slide-100);
        }
    }

    const prevSlide = () => {
        if(slide == 0){
            setSlide(-200)
        }
        else{
            setSlide(slide+100);
        }
    }

    // useEffect(()=>{
    //     setInterval(() => {
    //         nextSlide()
    //     }, 5000);
    // })

    return (
        <>
            <NavBar/>
            <PopUp/>
            <main className="landing-page">
                <div className="banner">
                    <div className="background bg1"></div>
                    {/* <div className="background bg2"></div>
                    <div className="background bg3"></div>
                    <div className="background bg4"></div>
                    <div className="background bg5"></div>
                    <div className="background bg6"></div>
                    <div className="background bg7"></div>
                    <div className="background bg8"></div> */}

                </div>

                <div className="content">
                    <p>IT & BBA College In Itahari</p>
                    <h1><span>I</span>tahari <span>I</span>nternaional <span>C</span>ollege</h1>
                </div>
            </main>

            <section id="about" className="about-section">
                <div className="about-image">
                    <img src={AboutImg} alt="" />
                </div>
                <div className="about-content">
                    <h2>Itahari International College</h2>

                    <p>Since 2017, <span>Itahari International College</span> has embarked on a journey of providing higher education in Eastern region of Nepal. It is a joint partnership between Islington College (Kathmandu), Vishwa Adarsha College (Itahari), and Godawari College (Itahari). It is the first college to provide a direct UK university degree in Itahari. It has directly partnered with London Metropolitan University, and this partnership is committed on producing intellectuals who can compete globally. Thus, Itahari International College is able to offer BSc (Hons) Computing and BA (Hons) Business Administration degree based on a “support-delivery” model. Itahari International College is one of the flagship institutions of Innovate Nepal Group (ING).</p>
                </div>
            </section>

            <section className="partners-section" id="partners">
                <h2>Our Partners</h2>
                <div className="partners">
                    <div className="partner">
                        <img src={LMU} alt="" className="LMU"/>
                        <h4>London Metropolitan University</h4>
                    </div>
                    
                    <div className="partner">
                        <img src={ING} alt="" className="ING"/>
                    </div>
                </div>
            </section>


            <section className="degrees-section" id="programmes">
                <div className="degree bit">
                    <div className="degree-info">
                        <div className="content">
                            <h3>Bachelors Degree in <h3>Information Technology</h3></h3>
                            <p>1. BSc (Hons) Computing</p>
                        </div>
                    </div>
                    <div className="image">
                        <img src={Degree1} alt="" />
                    </div>
                </div>

                <div className="degree bba">
                    <div className="image">
                        <img src={Degree2} alt="" />
                    </div>
                    <div className="degree-info">
                        <div className="content">
                            <h3>Bachelors in <h3>Business Adniminstration</h3></h3>
                            <span>BA (Hons) Business Administration</span>
                            <p>1. BSc (Hons) Computing</p>
                            <p>1. BSc (Hons) Computing</p>
                            <p>1. BSc (Hons) Computing</p>
                            <p>1. BSc (Hons) Computing</p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="testimonials" id="">
                <h2>Testimonials</h2>
                <div className="slider">
                    <BsChevronLeft onClick={()=>prevSlide()}/>
                    <div className="slides">
                        <div className="slide" style={{'margin-left':`${slide}%`}}>
                            <img src={BibekThapa} alt="" />
                            <p>Itahari International College has boosted my confidence and inspired me to never stop learning. I have become an independent individual equipped with skills required to compete in the rapidly progressing IT sector.</p>
                            <h3>Nishan Budhathoki</h3>
                            <span>BSc (Hons) Computing</span>
                        </div>


                        <div className="slide">
                            <img src={BipanaBhujel} alt="" />
                            <p>Workshop, assessment, presentation and projects have developed me into a team player. Now, I understand the dynamics of working in a team which has truly enhanced my abilities and confidence to work in a team under any circumstances.</p>
                            <h3>Bipana Bhujel</h3>
                            <span>BSc (Hons) Business Administration</span>
                        </div>


                        <div className="slide">
                            <img src={NishanBudathoki} alt="" />
                            <p>The best word to describe my familiarity with college has to be smooth. The learnings are interesting and academically stimulating which with the support of an amazing staffs has prepared us to deal with any challenges with ease.</p>
                            <h3>Bibek Thapa</h3>
                            <span>BSc (Hons) Computing</span>
                        </div>
                    </div>
                    <BsChevronRight onClick={()=>nextSlide()}/>
                </div>
            </section>
            

            <section className="admission-section" id="admission">
                <div className="content">
                    <div className="intro">
                        <h2>Admission Procedure</h2>    
                        <p>Interested students who have completed or appeared their higher secondary final exams can directly apply to the college with their academic certificates, citizenship certificate or passport or birth certificate or citizenship of either of the parents. The students awaiting results can get provisional admissions. Once at the college, the admission team will assess the entry requirement mentioned below and assist in admission process. Applicants should possess the minimum qualifications mentioned here under.</p>
                    </div>   
                    <div className="requirement">
                        <h3>Entry Requirement</h3>    
                        <div className="academic">
                            <h4>Academic Level</h4>
                            <ul>
                                <li><p>NEB +2 overall aggregate of 2.2 CGPA (55%) or above with each subject (theory and practical) grade D or above, and SEE Mathematics score of C (50%) or above.</p></li>
                                <li><p>For A-Levels, a minimum of 3.5 credits and at least a grade of D and above.</p></li>
                            </ul>
                        </div>

                        <div className="english">
                            <h4>English Proficiency</h4>
                            <ul>
                                <li><p>English NEB XII Marks &gt; 60% or 2.4 GPA &lt;</p></li>
                                <p>Applicants not meeting the aforementioned criteria for English can demonstrate their English proficiency with the following internationally recognised English Tests:</p>
                            </ul>
                            <ul className="levels">
                                <h5>For Level 4 or Year 1 BIT</h5>
                                <li><p>Pass in General Paper or English Language or IELTS 6 or PTE 53.</p></li>

                                <h5>For Level 4 or Year 1 BBA</h5>
                                <li><p>Pass in General Paper or English Language or IELTS 6 or PTE 53.</p></li>
                            </ul>
                        </div>
                    </div>                 
                </div>

                <div className="image">
                    <img src={Admission} alt="" />
                </div>
            </section>


            <section className="events">
                <h2>Events</h2>
                <div className="event-images">
                    <div className="images">
                        <div className="image">
                            <img src={Slide1} alt="" />
                            <div className="img-info">
                                Sports Week
                            </div>
                        </div>

                        <div className="image">
                            <img src={Slide1} alt="" />
                            <div className="img-info">
                                Sports Week
                            </div>
                        </div>

                        <div className="image">
                            <img src={Slide1} alt="" />
                            <div className="img-info">
                                Sports Week
                            </div>
                        </div>

                        <div className="image">
                            <img src={Slide1} alt="" />
                            <div className="img-info">
                                Sports Week
                            </div>
                        </div>

                        <div className="image">
                            <img src={Slide1} alt="" />
                            <div className="img-info">
                                Sports Week
                            </div>
                        </div>

                        <div className="image">
                            <img src={Slide1} alt="" />
                            <div className="img-info">
                                Sports Week
                            </div>
                        </div>

                        <div className="image">
                            <img src={Slide1} alt="" />
                            <div className="img-info">
                                Sports Week
                            </div>
                        </div>

                        <div className="image">
                            <img src={Slide1} alt="" />
                            <div className="img-info">
                                Sports Week
                            </div>
                        </div>

                        <div className="image">
                            <img src={Slide1} alt="" />
                            <div className="img-info">
                                Sports Week
                            </div>
                        </div>

                        <div className="image">
                            <img src={Slide1} alt="" />
                            <div className="img-info">
                                Sports Week
                            </div>
                        </div>

                        <div className="image">
                            <img src={Slide1} alt="" />
                            <div className="img-info">
                                Sports Week
                            </div>
                        </div>

                        <div className="image">
                            <img src={Slide1} alt="" />
                            <div className="img-info">
                                Sports Week
                            </div>
                        </div>

                        <div className="image">
                            <img src={Slide1} alt="" />
                            <div className="img-info">
                                Sports Week
                            </div>
                        </div>

                        <div className="image">
                            <img src={Slide1} alt="" />
                            <div className="img-info">
                                Sports Week
                            </div>
                        </div>

                        <div className="image">
                            <img src={Slide1} alt="" />
                            <div className="img-info">
                                Sports Week
                            </div>
                        </div>

                        <div className="image">
                            <img src={Slide1} alt="" />
                            <div className="img-info">
                                Sports Week
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="register-section">
                <h2><span>Register Now</span> - Autumn Intake 2023</h2>
                <p>Please fill the form below in order for us to help you with the application process. Once you submit the form below, we will contact you shortly with further details.</p>
                <form action="">
                    <div className="inputs">
                        <input type="text" placeholder="First Name"/>
                        <input type="text" placeholder="Last Name"/>
                        <input type="text" placeholder="Phone Number"/>
                        <input type="text" placeholder="Email"/>
                    </div>
                    
                    <select name="" id="">
                        <option value=""><b>Select Programe</b></option>
                        <option value="">BSc (Hons) Computing</option>
                        <option value="">BSc (Hons) Business Administration</option>
                    </select>

                    <select name="" id="">
                        <option value=""><b>Select Referal</b></option>
                        <option value="">TV</option>
                        <option value="">Event</option>
                        <option value="">Bootcamp</option>
                        <option value="">Advertisement</option>
                        <option value="">Facebook</option>
                        <option value="">Instagram</option>
                        <option value="">Youtube</option>
                        <option value="">Family</option>
                        <option value="">Friends</option>
                    </select>

                    <input type="submit" value='Submit'/>
                </form>
            </section>


            <section className="contact">
                <h2>Contact Us</h2>

                <div className="map">
                    <div className="contact-info">
                        <p><MdLocationOn/>Sundar Haraicha - 4, Morang</p>
                        <p><BsFillTelephoneFill/>+97721431038, +97721431039, 9869258083</p>
                        <p><RiSendPlaneFill/>info@iic.edu.np</p>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2127.511073304417!2d87.30179519290544!3d26.655303632085797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6ea070e7b18b%3A0x2959e2a3e2bf54e0!2sItahari+Int&#39;l+College!5e0!3m2!1sen!2snp!4v1528259945147" frameborder="0" allowfullscreen></iframe>
                </div>

            </section>

            <footer>
                <p>©2023 Itahari International College. All Rights Reserved.</p>
                <FaFacebookF/>
            </footer>
        </>
    )
}

export default Landing

