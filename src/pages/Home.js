import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CopyrightFooter from '../layout/CopyrightFooter';
import ContactFooter from '../layout/ContactFooter';
import TestimonialsFooter from '../layout/TestimonialsFooter';
import CalendarFooter from '../layout/CalendarFooter';
import Pricing from '../layout/Pricing';
import VideoTraining from '../layout/VideoTraining';
import Partners from '../layout/Partners';
import CoursesSoon from '../layout/CoursesSoon';


export default function Home() {
   // Scroll to the top when the component mounts
 useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <> 
   <div className="home page body_style_fullscreen body_filled article_style_stretch layout_single-standard top_panel_style_dark top_panel_opacity_transparent top_panel_show top_panel_over menu_right user_menu_show sidebar_hide">
  <a id="toc_top" className="sc_anchor" title="To Top" data-description="<i>Back to top</i> - <br>scroll to top of the page" data-icon="icon-angle-double-up" data-url data-separator="yes" />
  {/* Body */}
  <div className="body_wrap">
    <div className="page_wrap">
      <div className="top_panel_fixed_wrap" />
      <header className="top_panel_wrap bg_tint_dark">
        {/* User menu */}
        <div className="menu_user_wrap">
          <div className="content_wrap clearfix">
         
            <div className="menu_user_area menu_user_left menu_user_contact_area">Contact us on <a href="tel:+08001234567">0 800 123-4567</a> or <a href="#">support@themerex.net</a></div>
          </div>
        </div>
        {/* /User menu */}
        {/* Main menu */}
        <div className="menu_main_wrap logo_left">					
          <div className="content_wrap clearfix">
            {/* Logo */}
            <div className="logo">
              <a href="/">
                <img src="assets/images/white-bg.png" className="logo_main" alt style={{ width: '250px', height: 'auto', }} />
               <img src="assets/images/white-bg.png" className="logo_fixed" alt style={{ width: '230px', height: 'auto' }} />

              </a>
            </div>
            {/* Logo */}
            {/* Search */}
            <div className="search_wrap search_style_regular search_ajax" title="Open/close search form">
              <a href="#" className="search_icon icon-search-2" />
              <div className="search_form_wrap">
                <form method="get" className="search_form" action="#">
                  <button type="submit" className="search_submit icon-zoom-1" title="Start search" />
                  <input type="text" className="search_field" placeholder defaultValue name="s" title />
                </form>
              </div>
              <div className="search_results widget_area bg_tint_light">
                <a className="search_results_close icon-delete-2" />
                <div className="search_results_content">
                </div>
              </div>
            </div>
            {/* /Search */}
            {/* Navigation */}
            <a href="#" className="menu_main_responsive_button icon-menu-1" />
            <nav className="menu_main_nav_area">
              <ul id="menu_main" className="menu_main_nav">
                <li className="menu-item   current-menu-ancestor current-menu-parent"><Link to="/">Home</Link>
                  
                </li>
              
                <li className="menu-item  "><Link to="/Courses">Courses</Link>
                 
                </li>
                <li className="menu-item  "><Link to="/TeachersTeam">Teachers</Link>
                   
                </li>
                   
                <li className="menu-item"><Link to="/About">About Us</Link></li>
                <li className="menu-item"><Link to="/Contact">Contact Us</Link></li>
                
              </ul>
            </nav>
            {/* /Navigation */}
          </div>
        </div>
        {/* /Main menu */}
      </header>
      {/* Revolution slider */}
      <section className="slider_wrap slider_fullwide slider_engine_revo slider_alias_education_home_slider">
        <div id="rev_slider_1_1_wrapper" className="rev_slider_wrapper fullwidthbanner-container">                    
          <div id="rev_slider_1_1" className="rev_slider fullwidthabanner disp_none height_630 max-height_630">
            <ul>
              {/* Slide 1 */}
              <li data-transition="random" data-slotamount={7} data-masterspeed={300} data-saveperformance="off">
                <img src="assets/images/green.jpg" alt="green" data-bgposition="center top" data-bgfit="normal" data-bgrepeat="repeat" />
                <div className="tp-caption customin stl cust-z-index-5 rs-cust-style8" data-x={20} data-y={230} data-customin="x:0;y:0;z:0;rotationX:90;rotationY:0;rotationZ:0;scaleX:1;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:20;transformOrigin:50% 100%;" data-speed={1300} data-start={500} data-easing="Power3.easeInOut" data-elementdelay="0.1" data-endelementdelay="0.1" data-end={8250} data-endspeed={300}>
                  <img src="assets/images/slide-1-1.png" alt />
                </div>
                <div className="tp-caption title sfr stl tp-resizeme cust-z-index-6 rs-cust-style1" data-x={570} data-y={190} data-speed={500} data-start={1350} data-easing="Power3.easeInOut" data-splitin="none" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1" data-end={8400} data-endspeed={300}>Learn with the finest courses at our renowned coaching center.
                </div>
                <div className="tp-caption slide_text sfr stl tp-resizeme cust-z-index-7 rs-cust-style2" data-x={570} data-y={380} data-speed={500} data-start={1750} data-easing="Power3.easeInOut" data-splitin="none" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1" data-end={8500} data-endspeed={300}>
                  <span className="font-w_400">Our courses are built in partnership with technology leaders and are relevant to industry needs.</span>
                </div>
                <div className="tp-caption slide_button customin stl tp-resizeme cust-z-index-8 rs-cust-style3" data-x={570} data-y={460} data-customin="x:0;y:0;z:0;rotationX:90;rotationY:0;rotationZ:0;scaleX:1;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:-20;transformOrigin:50% 0%;" data-speed={500} data-start={2200} data-easing="Power3.easeInOut" data-splitin="none" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1" data-end={8600} data-endspeed={300}>
                  <a href="#" className="slide_button_white">Start Learning Now</a>
                </div>
              </li>
              {/* Slide 2 */}
              <li data-transition="random" data-slotamount={7} data-masterspeed={300} data-saveperformance="off">
                <img src="assets/images/blue.jpg" alt="blue" data-bgposition="center top" data-bgfit="normal" data-bgrepeat="repeat" />
                <div className="tp-caption customin stl cust-z-index-5 rs-cust-style8" data-x={40} data-y={200} data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:360;scaleX:0.1;scaleY:0.1;skewX:0;skewY:0;opacity:0;transformPerspective:0;transformOrigin:50% 50%;" data-speed={1300} data-start={500} data-easing="Power3.easeInOut" data-elementdelay="0.1" data-endelementdelay="0.1" data-end={8250} data-endspeed={300}>
                  <img src="assets/images/slide-2-1.png" alt />
                </div>
                <div className="tp-caption title sfb stb tp-resizeme cust-z-index-6 rs-cust-style1" data-x={570} data-y={200} data-speed={500} data-start={1350} data-easing="Power3.easeInOut" data-splitin="none" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1" data-end={8400} data-endspeed={300}>Education Center
                  <br /> and distance education
                </div>
                <div className="tp-caption slide_text sfb stb tp-resizeme cust-z-index-7 rs-cust-style2" data-x={570} data-y={355} data-speed={500} data-start={1750} data-easing="Power3.easeInOut" data-splitin="none" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1" data-end={8500} data-endspeed={300}>
                  <span className="font-w_400">Online Education leads the world in distance education with high quality online degrees and online courses.</span>
                </div>
                <div className="tp-caption slide_button customin stb tp-resizeme cust-z-index-8 rs-cust-style3" data-x={570} data-y={460} data-customin="x:0;y:0;z:0;rotationX:90;rotationY:0;rotationZ:0;scaleX:1;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:20;transformOrigin:50% 100%;" data-speed={500} data-start={2200} data-easing="Power3.easeInOut" data-splitin="none" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1" data-end={8600} data-endspeed={300}>
                  <a href="#" className="slide_button_white">Start Learning Now</a>
                </div>
              </li>
              {/* Slide 3 */}
              <li data-transition="random" data-slotamount={7} data-masterspeed={300} data-saveperformance="off">
                <img src="assets/images/yellow.jpg" alt="yellow" data-bgposition="center top" data-bgfit="normal" data-bgrepeat="repeat" />
                <div className="tp-caption roundedimage sfl stl cust-z-index-5 rs-cust-style8" data-x={50} data-y={200} data-speed={1300} data-start={500} data-easing="Power3.easeInOut" data-elementdelay="0.1" data-endelementdelay="0.1" data-end={8250} data-endspeed={300}>
                  <img src="assets/images/slide-3-1.jpg" alt />
                </div>
                <div className="tp-caption title customin stb tp-resizeme cust-z-index-6 rs-cust-style1" data-x={570} data-y={200} data-customin="x:0;y:0;z:0;rotationX:90;rotationY:0;rotationZ:0;scaleX:1;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:20;transformOrigin:50% 100%;" data-speed={500} data-start={1350} data-easing="Power3.easeInOut" data-splitin="none" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1" data-end={8400} data-endspeed={300}>Receive personalized
                  <br /> coaching
                </div>
                <div className="tp-caption slide_text customin stb tp-resizeme cust-z-index-7 rs-cust-style2" data-x={570} data-y={355} data-customin="x:0;y:0;z:0;rotationX:90;rotationY:0;rotationZ:0;scaleX:1;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:20;transformOrigin:50% 100%;" data-speed={500} data-start={1750} data-easing="Power3.easeInOut" data-splitin="none" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1" data-end={8500} data-endspeed={300}>
                  <span className="font-w_400">Learning is a collaborative process, and we're here to provide you with guidance every step of the way.</span>
                </div>
                <div className="tp-caption slide_button customin stb tp-resizeme cust-z-index-8 rs-cust-style3" data-x={570} data-y={460} data-customin="x:0;y:0;z:0;rotationX:90;rotationY:0;rotationZ:0;scaleX:1;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:20;transformOrigin:50% 100%;" data-speed={500} data-start={2200} data-easing="Power3.easeInOut" data-splitin="none" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1" data-end={8600} data-endspeed={300}>
                  <a href="#" className="slide_button_white">Start Learning Now</a>
                </div>
              </li>
            </ul>
            <div className="tp-bannertimer" />
          </div>
        </div>
      </section>
      {/* Revolution slider */}
      {/* Content */}
      <div className="page_content_wrap">
        <div className="content">
          <article className="post_item post_item_single page">
            <section className="post_content">
              {/* Features section */}
              <div className="sc_section" data-animation="animated zoomIn normal">
                <div className="sc_content content_wrap margin_top_3em_imp margin_bottom_3em_imp sc_features_st1">
                  <div className="columns_wrap sc_columns columns_fluid sc_columns_count_3">
                    <div className="column-1_3 sc_column_item sc_column_item_1 odd first text_center">
                      <a href="#" className="sc_icon icon-woman-2 sc_icon_bg_menu menu_dark_color font_5em lh_1em" />
                      <div className="sc_section font-w_400 margin_top_1em_imp">
                        <p>
                          <a className="menu_color" href="#">Take computer science courses<br />
                            with personalized support</a>
                        </p>
                      </div>
                    </div>
                    <div className="column-1_3 sc_column_item sc_column_item_2 even text_center">
                      <a href="#" className="sc_icon icon-rocket-2 sc_icon_bg_menu menu_dark_color font_5em lh_1em" />
                      <div className="sc_section font-w_400 margin_top_1em_imp">
                        <p>
                          <a className="menu_color" href="#">Build cool projects<br />
                            to showcase your skills</a>
                        </p>
                      </div>
                    </div>
                    <div className="column-1_3 sc_column_item sc_column_item_3 odd text_center">
                      <a href="#" className="sc_icon icon-world-2 sc_icon_bg_menu menu_dark_color font_5em lh_1em" />
                      <div className="sc_section font-w_400 margin_top_1em_imp">
                        <p>
                          <a className="menu_color" href="#">Earn certificates<br />
                            recognized by Industry</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Features section */}			
              <CoursesSoon/>
             <Partners/>
             <VideoTraining/>					
            <Pricing/>
            </section>
          </article>
        </div>
      </div>
      {/* /Content without sidebar */}
      <CalendarFooter/> 
      <TestimonialsFooter/>
      <ContactFooter/> 
      <CopyrightFooter/>
    </div>
  </div>
  {/* /Body */}
  <a href="#" className="scroll_to_top icon-up-2" title="Scroll to top" />
  <div className="custom_html_section" />
</div>


   

 
    </ >
  )
}
