import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import ContactFooter from '../components/layout/ContactFooter';
import CopyrightFooter from '../components/layout/CopyrightFooter';

export default function Contact() {
   // Scroll to the top when the component mounts
 useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <> 
    
   <div className="page body_style_fullscreen body_filled article_style_stretch template_single-standard top_panel_style_dark top_panel_opacity_solid top_panel_above menu_right sidebar_hide">
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
                <li className="menu-item  "><a href="/">Home</a>
                  
                </li>
                
                <li className="menu-item  "><a href="/Courses">Courses</a>
                  
                </li>
                <li className="menu-item  "><a href="/TeachersTeam">Teachers</a>
                   
                </li>
                <li className="menu-item"><a href="/About">About Us</a></li>
                <li className="menu-item current-menu-item page_item current_page_item">
                <a href="/Contact">Contact Us</a>
                </li>
                   
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
            <span className="breadcrumbs_item current">Contact Us</span>
          </div>
          <h1 className="page_title">Contact Us</h1>
        </div>
      </div>
      {/* /Page title */}
      {/* Content without sidebar */}
      <div className="page_content_wrap">
        <div className="content">
          <article className="post_item post_item_single page">						
            <section className="post_content">
              {/* Features section */}
              <div className="sc_section">
                <div className="sc_content content_wrap margin_top_3em_imp margin_bottom_3em_imp">
                  <div className="columns_wrap sc_columns columns_fluid sc_columns_count_3">
                    <div className="column-1_3 sc_column_item sc_column_item_1 odd first text_center">
                      <span className="sc_icon icon-mail-2 link_color font_5em lh_1em" />
                      <div className="sc_section margin_top_1em_imp">
                        <p><a href="#">info@yoursite.com</a><br />
                          <a href="#">www.yoursite.com</a>
                        </p>
                      </div>
                    </div>
                    <div className="column-1_3 sc_column_item sc_column_item_2 even text_center">
                      <span className="sc_icon icon-telephone-2 link_color font_5em lh_1em" />
                      <div className="sc_section margin_top_1em_imp sc_features_st1">
                        <p><a href="tel:+18001234567">+1(800)123-4567</a>
                          <br /><a href="tel:+18001234566"> +1(800)123-4566</a>
                        </p>
                      </div>
                    </div>
                    <div className="column-1_3 sc_column_item sc_column_item_3 odd text_center">
                      <span className="sc_icon icon-map-2 link_color font_5em lh_1em" />
                      <div className="sc_section margin_top_1em_imp sc_features_st1">
                        <p>176 W street name,<br /> 
                          New York, NY 10014
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Features section */}
              {/* Contact form */}
             <div className="sc_section bg_tint_dark sc_contact_bg_img">
  <div className="sc_section_overlay sc_contact_bg_color" data-overlay="0.8" data-bg_color="#024b5e">
    <div className="sc_section_content">
      <div className="sc_content content_wrap margin_top_3em_imp margin_bottom_3_5em_imp">
        <div id="sc_contact_form" className="sc_contact_form sc_contact_form_standard aligncenter width_80per">
          <h2 className="sc_contact_form_title">Contact Us Today</h2>
          <p className="sc_contact_form_description">Your email address will not be published. Required fields are marked *</p>
          <form id="sc_contact_form_1" data-formtype="contact" method="post" action="#" className="inited">
            <div className="sc_contact_form_info">
              <div className="sc_contact_form_item sc_contact_form_field label_over">
                <label className="required" htmlFor="sc_contact_form_username">Name</label>
                <input id="sc_contact_form_username" type="text" name="username" placeholder="Name *" className />
              </div>
              <div className="sc_contact_form_item sc_contact_form_field label_over">
                <label className="required" htmlFor="sc_contact_form_email">E-mail</label>
                <input id="sc_contact_form_email" type="text" name="email" placeholder="E-mail *" className autoComplete="off" />
              </div>
              <div className="sc_contact_form_item sc_contact_form_field label_over">
                <label className="required" htmlFor="sc_contact_form_subj">Subject</label>
                <input id="sc_contact_form_subj" type="text" name="subject" placeholder="Subject" className />
              </div>
            </div>
            <div className="sc_contact_form_item sc_contact_form_message label_over">
              <label className="required" htmlFor="sc_contact_form_message">Message</label>
              <textarea id="sc_contact_form_message" name="message" placeholder="Message" className defaultValue={""} />
            </div>
            <div className="sc_contact_form_item sc_contact_form_button">
              <button>SEND MESSAGE</button>
            </div>
            <div className="result sc_infobox sc_infobox_style_success" style={{display: 'none'}}>Send message complete!</div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

              {/* /Contact form */}
            </section>
          </article>
        </div>
      </div>
      {/* /Content without sidebar */}
      {/* Google map */}
      <div className="sc_googlemap">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.4843630509713!2d-122.42343108422764!3d37.77868707975869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580999d2acfb3%3A0x687352ddeebecb93!2z0KHQsNC9LdCk0YDQsNC90YbQuNGB0LrQviwg0JrQsNC70LjRhNC-0YDQvdC40Y8gOTQxMDIsINCh0KjQkA!5e0!3m2!1sru!2sua!4v1557919959053!5m2!1sru!2sua" width={1920} height={450} frameBorder={0} style={{border: 0}} allowFullScreen />
      </div>
      {/* /Google map */}
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
