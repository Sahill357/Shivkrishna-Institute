import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import CalendarFooter from '../components/layout/CalendarFooter';
import ContactFooter from '../components/layout/ContactFooter';
import CopyrightFooter from '../components/layout/CopyrightFooter';
import OurTeachers from '../components/layout/OurTeachers';

export default function TeachersTeam() {
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
                <li className="menu-item   current-menu-ancestor current-menu-parent"><Link to="/TeachersTeam">Teachers</Link>
                   
                </li>
                 
                <li className="menu-item  "><Link to="/About">About Us</Link></li>
                <li className="menu-item  "><Link to="/Contact">Contact Us</Link></li>

                
              </ul>
            </nav>
            {/* /Navigation */}
          </div>
        </div>
        {/* /Main menu */}
      </header>
      {/* Page title */}
      <div className="page_top_wrap page_top_title page_top_breadcrumbs">
        <div className="content_wrap">
          <div className="breadcrumbs">
            <a className="breadcrumbs_item home" href="index-2.html">Home</a>
            <span className="breadcrumbs_delimiter" />
            <span className="breadcrumbs_item current">Team Members</span> 
          </div>
          <h1 className="page_title">Team Members</h1>
        </div>
      </div>
      {/* Page title */}
      {/* Content */}
      <div className="page_content_wrap">
        <div className="content">
          <article className="post_item post_item_single page type-page">
            <section className="post_content">
              <div className="sc_section accent_top" data-animation="animated fadeInUp normal sc_bg1">
                <div className="sc_section_overlay">
                  <div className="sc_section_content">
                    <div className="sc_content content_wrap margin_top_2_5em_imp margin_bottom_3em_imp">
                      <h2 className="sc_title sc_title_regular sc_align_center margin_top_0 margin_bottom_08em text_center">About Our Team Spirit</h2>
                      <div className="columns_wrap sc_columns columns_nofluid sc_columns_count_2">
                        <div className="column-1_2 sc_column_item sc_column_item_1 odd first res_width_100per_imp">
                          <blockquote cite="#" className="sc_quote width_80per">
                            <p>Formal education will make you a living. Self-education will make you a fortune.</p>
                            <p className="sc_quote_title">
                              <a href="personal-page.html">David Anderson</a>
                            </p>
                          </blockquote>
                          <div className="sc_socials sc_socials_size_small">
                            <div className="sc_socials_item">
                              <a href="https://business.facebook.com/ThemeRexStudio/" target="_blank" className="social_icons social_facebook">
                                <span className="sc_socials_hover social_facebook" />
                              </a>
                            </div>
                            <div className="sc_socials_item">
                              <a href="https://www.pinterest.com/themerex0063" target="_blank" className="social_icons social_pinterest">
                                <span className="sc_socials_hover social_pinterest" />
                              </a>
                            </div>
                            <div className="sc_socials_item">
                              <a href="https://twitter.com/ThemeREX_net" target="_blank" className="social_icons social_twitter">
                                <span className="sc_socials_hover social_twitter" />
                              </a>
                            </div>
                            <div className="sc_socials_item">
                              <a href="#" target="_blank" className="social_icons social_rss">
                                <span className="sc_socials_hover social_rss" />
                              </a>
                            </div>
                            <div className="sc_socials_item">
                              <a href="https://dribbble.com/AncoraThemes" target="_blank" className="social_icons social_dribbble">
                                <span className="sc_socials_hover social_dribbble" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="column-1_2 sc_column_item sc_column_item_2 even res_width_100per_imp">
                          <figure className="sc_image sc_image_shape_square">
                            <img src="assets/images/roy_daniels_full-750x422.jpg" alt />
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
               <OurTeachers/>
              <div className="sc_line sc_line_style_solid margin_top_0 margin_bottom_0" />
            </section>
          </article>
        </div>
      </div>
      {/* /Content */}
      <CalendarFooter/>
      <ContactFooter/>
      <CopyrightFooter/>
    </div>
  </div>
  {/* /Body */}
  <a href="#" className="scroll_to_top icon-up-2" title="Scroll to top" />
</div>

    </ >
  )
}
