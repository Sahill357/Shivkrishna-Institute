import React from 'react'
import { Link } from 'react-router-dom';

export default function Contact() {
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
              <a href="index-2.html">
                <img src="assets/images/logo_dark.png" className="logo_main" alt />
                <img src="assets/images/logo_dark.png" className="logo_fixed" alt />
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
                <li className="menu-item menu-item-has-children"><Link to="/">Home</Link>
                  
                </li>
                
                <li className="menu-item menu-item-has-children"><Link to="/Courses">Courses</Link>
                  
                </li>
                <li className="menu-item menu-item-has-children"><Link to="/TeachersTeam">Teachers</Link>
                   
                </li>
                <li className="menu-item"><Link to="/About">About Us</Link></li>
                <li className="menu-item current-menu-item page_item current_page_item">
                <Link to="/Contact">Contact Us</Link>
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
                        <form id="sc_contact_form_1" data-formtype="contact" method="post" action="#">
                          <div className="sc_contact_form_info">
                            <div className="sc_contact_form_item sc_contact_form_field label_over">
                              <label className="required" htmlFor="sc_contact_form_username">Name</label>
                              <input id="sc_contact_form_username" type="text" name="username" placeholder="Name *" />
                            </div>
                            <div className="sc_contact_form_item sc_contact_form_field label_over">
                              <label className="required" htmlFor="sc_contact_form_email">E-mail</label>
                              <input id="sc_contact_form_email" type="text" name="email" placeholder="E-mail *" />
                            </div>
                            <div className="sc_contact_form_item sc_contact_form_field label_over">
                              <label className="required" htmlFor="sc_contact_form_subj">Subject</label>
                              <input id="sc_contact_form_subj" type="text" name="subject" placeholder="Subject" />
                            </div>
                          </div>
                          <div className="sc_contact_form_item sc_contact_form_message label_over">
                            <label className="required" htmlFor="sc_contact_form_message">Message</label>
                            <textarea id="sc_contact_form_message" name="message" placeholder="Message" defaultValue={""} />
                          </div>
                          <div className="sc_contact_form_item sc_contact_form_button">
                            <button>SEND MESSAGE</button>
                          </div>
                          <div className="result sc_infobox" />
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
      {/* Contacts Footer  */}
      <footer className="contacts_wrap bg_tint_dark contacts_style_dark">
        <div className="content_wrap">
          <div className="logo">
            <a href="index-2.html">
              <img src="assets/images/logo_footer.png" alt />
            </a>
          </div>
          <div className="contacts_address">
            <address className="address_right">
              Phone: <a href="tel:+18001234567">1.800.123.4567</a><br />
              Fax: <a href="tel:+18001234566">1.800.123.4566</a>
            </address>
            <address className="address_left">
              San Francisco, CA 94102, US<br />	
              1234 Some St
            </address>
          </div>
          <div className="sc_socials sc_socials_size_big">
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
      </footer>
      {/* /Contacts Footer  */}
      {/* Copyright */}
      <div className="copyright_wrap">
        <div className="content_wrap">
          <p>© 2019 All Rights Reserved. <a href="#">Terms of use</a> and <a href="#">Privacy Policy</a></p>
        </div>
      </div>
      {/* /Copyright */}
    </div>
  </div>
  {/* /Body */}
  <a href="#" className="scroll_to_top icon-up-2" title="Scroll to top" />
</div>

    </ >
  )
}
