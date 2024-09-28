import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import Partners from '../components/layout/Partners';
import Pricing from '../components/layout/Pricing';
import TestimonialsFooter from '../components/layout/TestimonialsFooter';
import CalendarFooter from '../components/layout/CalendarFooter';
import ContactFooter from '../components/layout/ContactFooter';
import CopyrightFooter from '../components/layout/CopyrightFooter';
import OurTeachers from '../components/layout/OurTeachers';
import CoursesSoon from '../components/layout/CoursesSoon';

export default function About() {
   // Scroll to the top when the component mounts
 useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <> 
   <div className="page body_style_fullscreen body_filled article_style_boxed top_panel_style_dark top_panel_opacity_solid top_panel_above menu_right sidebar_hide">
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
                <li className="menu-item  "><Link to="/">Home</Link>
                   
                </li>
                 
                <li className="menu-item  "><Link to="/Courses">Courses</Link>
                  
                </li>
                <li className="menu-item  "><Link to="/TeachersTeam">Teachers</Link>
                  
                </li>
                <li className="menu-item current-menu-item page_item current_page_item"><Link to="/About">About Us</Link></li>
                <li className="menu-item"><Link to="/Contact">Contact Us</Link></li>
              </ul>
            </nav>
            {/* /Navigation */}
          </div>
        </div>
        {/* /Main menu */}
      </header>
      {/* Page title */}
      <div className="page_top_wrap page_top_title page_top_breadcrumbs sc_pt_st1">
        <div className="content_wrap">
          <div className="breadcrumbs">
            <a className="breadcrumbs_item home" href="index-2.html">Home</a>
            <span className="breadcrumbs_delimiter" />
            <span className="breadcrumbs_item current">About Us</span>
          </div>
          <h1 className="page_title">About Us</h1>
        </div>
      </div>
      {/* /Page title */}
      {/* Content without sidebar */}
      <div className="page_content_wrap">
        <div className="content">
          <article className="post_item post_item_single page">
            <section className="post_content">
              {/* Info section */}
              <div className="sc_section accent_top bg_tint_light sc_bg1" data-animation="animated fadeInUp normal">
                <div className="sc_section_overlay">
                  <div className="sc_section_content">
                    <div className="sc_content content_wrap margin_top_2_5em_imp margin_bottom_2_5em_imp">
                      <h2 className="sc_title sc_title_regular sc_align_center margin_top_0 margin_bottom_085em text_center">Why choose online education?</h2>
                      <div className="columns_wrap sc_columns columns_nofluid sc_columns_count_2">
                        <div className="column-1_2 sc_column_item sc_column_item_1 sc_info_st1 odd first ">
                          <div className="sc_section font_1_25em lh_1_3em">
                            <span className="sc_icon icon-pen-2 alignleft link_color disp_block margin_right_05em margin_bottom_015em font_3_5em lh_1em" />
                            <p>Study, have fun, uncover a new passion or learn
                              <br /> skills that just may change your life.
                            </p>
                          </div>
                          <div className="sc_section font_1_25em lh_1_3em margin_top_05em_imp">
                            <span className="sc_icon icon-new-2 alignleft link_color disp_block margin_right_05em margin_bottom_015em font_3_5em lh_1em" />
                            <p>Become an online Education student, it’s easy…
                              <br /> Take online Education courses at your pace, at home or in a cafe.
                            </p>
                          </div>
                          <div className="sc_section font_1_25em lh_1_3em margin_top_05em_imp">
                            <span className="sc_icon icon-lightbulb-2 alignleft link_color disp_block margin_right_05em margin_bottom_015em font_3_5em lh_1em" />
                            <p>From our think tank to your screen—we help you
                              <br /> learn through cool tools, videos and game-like labs, like our 3D virtual molecule builder.
                            </p>
                          </div>
                        </div>
                        <div className="column-1_2 sc_column_item sc_column_item_2 sc_info_st1 even">
                          <div className="sc_video_player">
                            <div className="sc_video_frame width_596 height_335" data-width={596} data-height={335}>
                              <iframe className="video_frame" src="http://player.vimeo.com/video/9679622" width={596} height={335}>
                              </iframe>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Info section */}
               <OurTeachers/>
              <CoursesSoon/>
              <Partners/>
              <Pricing/>
              <TestimonialsFooter/>
            </section>
          </article>
        </div>
      </div>
      {/* /Content without sidebar */}
      <CalendarFooter/>
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
