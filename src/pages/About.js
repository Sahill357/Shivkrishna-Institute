import React from 'react'
import { Link } from 'react-router-dom';

export default function About() {
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
              {/* Team section */}
              <div className="sc_section" data-animation="animated fadeInUp normal">
                <div className="sc_content content_wrap margin_top_3em_imp margin_bottom_3em_imp">
                  <h2 className="sc_title sc_title_regular sc_align_center text_center margin_top_0 margin_bottom_085em">Our Teachers</h2>
                  <div className="sc_team sc_team_style_1">
                    <div className="sc_columns columns_wrap">
                      <div className="column-1_3">
                        <div className="sc_team_item sc_team_item_1 odd first">
                          <div className="sc_team_item_avatar">
                            <img alt src="assets/images/john_johnson_full-350x290.jpg" />
                          </div>
                          <div className="sc_team_item_info">
                            <h6 className="sc_team_item_title">
                              <a href="#">John Johnson</a>
                            </h6>
                            <div className="sc_team_item_position">Administrator</div>
                            <div className="sc_team_item_description">
                              <p>Donec ut tincidunt purus. Vestibulum ultrices est id arcu iaculis, quis blandit nunc accumsan.</p>
                            </div>
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
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="column-1_3">
                        <div className="sc_team_item sc_team_item_2 even">
                          <div className="sc_team_item_avatar">
                            <img alt src="assets/images/john_snow_full-350x290.jpg" />
                          </div>
                          <div className="sc_team_item_info">
                            <h6 className="sc_team_item_title">
                              <a href="#">John Snow</a>
                            </h6>
                            <div className="sc_team_item_position">Translator</div>
                            <div className="sc_team_item_description">
                              <p>Royal L. Garff Presidential Chair in Marketing, Marketing Department, Department of Marketing
                                <br /> Presidential Professor, Marketing Department, University of Utah</p>
                            </div>
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
                                <a href="https://dribbble.com/AncoraThemes" target="_blank" className="social_icons social_dribbble">
                                  <span className="sc_socials_hover social_dribbble" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="column-1_3">
                        <div className="sc_team_item sc_team_item_3 odd">
                          <div className="sc_team_item_avatar">
                            <img alt src="assets/images/pamela_fryman_full-350x290.jpg" />
                          </div>
                          <div className="sc_team_item_info">
                            <h6 className="sc_team_item_title">
                              <a href="#">Pamela Fryman</a>
                            </h6>
                            <div className="sc_team_item_position">Translator</div>
                            <div className="sc_team_item_description">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
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
                                <a href="https://dribbble.com/AncoraThemes" target="_blank" className="social_icons social_dribbble">
                                  <span className="sc_socials_hover" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Team section */}
              {/* Courses section */}
              <div className="sc_section accent_top bg_tint_light sc_bg1" data-animation="animated fadeInUp normal">
                <div className="sc_section_overlay">
                  <div className="sc_section_content">
                    <div className="sc_content content_wrap margin_top_2_5em_imp margin_bottom_2_5em_imp">
                      <h2 className="sc_title sc_title_regular sc_align_center margin_top_0 margin_bottom_085em text_center">Online Courses Starting Soon</h2>
                      <div className="sc_blogger layout_courses_3 template_portfolio sc_blogger_horizontal no_description">
                        <div className="isotope_wrap" data-columns={3}>
                          {/* Courses item */}
                          <div className="isotope_item isotope_item_courses isotope_column_3">
                            <div className="post_item post_item_courses odd">
                              <div className="post_content isotope_item_content ih-item colored square effect_dir left_to_right">
                                <div className="post_featured img">
                                  <a href="paid-course.html">
                                    <img alt="Principles of Written English, Part 2" src="assets/images/masonry_15-400x400.jpg" />
                                  </a>
                                  <h4 className="post_title">
                                    <a href="paid-course.html">Principles of Written English, Part 2</a>
                                  </h4>
                                  <div className="post_descr">
                                    <div className="post_price">
                                      <span className="post_price_value">$85</span>
                                      <span className="post_price_period">monthly</span>
                                    </div>
                                    <div className="post_category">
                                      <a href="product-category.html">Language</a>
                                    </div>
                                  </div>
                                </div>
                                <div className="post_info_wrap info">
                                  <div className="info-back">
                                    <h4 className="post_title">
                                      <a href="paid-course.html">Principles of Written English, Part 2</a>
                                    </h4>
                                    <div className="post_descr">
                                      <p>
                                        <a href="paid-course.html">Nam id leo massa. Cras at condimentum nisi, vulputate ultrices turpis.</a>
                                      </p>
                                      <div className="post_buttons">
                                        <div className="post_button">
                                          <a href="paid-course.html" className="sc_button sc_button_square sc_button_style_filled sc_button_bg_link sc_button_size_small">LEARN MORE</a>
                                        </div>
                                        <div className="post_button">
                                          <a href="product-page.html" className="sc_button sc_button_square sc_button_style_filled sc_button_bg_link sc_button_size_small">BUY NOW</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* /Courses item */}
                          {/* Courses item */}
                          <div className="isotope_item isotope_item_courses isotope_column_3">
                            <div className="post_item post_item_courses even">
                              <div className="post_content isotope_item_content ih-item colored square effect_dir left_to_right">
                                <div className="post_featured img">
                                  <a href="paid-course.html">
                                    <img alt="Entrepreneurship 101: Who is your customer?" src="assets/images/masonry_06-400x400.jpg" />
                                  </a>
                                  <h4 className="post_title">
                                    <a href="paid-course.html">Entrepreneurship 101: Who is your customer?</a>
                                  </h4>
                                  <div className="post_descr">
                                    <div className="post_price">
                                      <span className="post_price_value">$195</span><span className="post_price_period">monthly</span>
                                    </div>
                                    <div className="post_category">
                                      <a href="product-category.html">Marketing</a>
                                    </div>
                                  </div>
                                </div>
                                <div className="post_info_wrap info">
                                  <div className="info-back">
                                    <h4 className="post_title">
                                      <a href="paid-course.html">Entrepreneurship 101:  Who is your customer?</a>
                                    </h4>
                                    <div className="post_descr">
                                      <p>
                                        <a href="paid-course.html">Quisque a nulla eget ante vestibulum lacinia eu quis massa.</a>
                                      </p>
                                      <div className="post_buttons">
                                        <div className="post_button">
                                          <a href="paid-course.html" className="sc_button sc_button_square sc_button_style_filled sc_button_bg_link sc_button_size_small">LEARN MORE</a>
                                        </div>
                                        <div className="post_button">
                                          <a href="product-page.html" className="sc_button sc_button_square sc_button_style_filled sc_button_bg_link sc_button_size_small">BUY NOW</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* /Courses item */}
                          {/* Courses item */}
                          <div className="isotope_item isotope_item_courses isotope_column_3">
                            <div className="post_item post_item_courses odd">
                              <div className="post_content isotope_item_content ih-item colored square effect_dir left_to_right">
                                <div className="post_featured img">
                                  <a href="free-course.html">
                                    <img alt="Evaluating Social  Programs" src="assets/images/masonry_04-400x400.jpg" />
                                  </a>
                                  <h4 className="post_title">
                                    <a href="free-course.html">Evaluating Social Programs</a>
                                  </h4>
                                  <div className="post_descr">
                                    <div className="post_price">
                                      <span className="post_price_value">Free!</span>
                                    </div>
                                    <div className="post_category">
                                      <a href="product-category.html">Social</a>
                                    </div>
                                  </div>
                                </div>
                                <div className="post_info_wrap info">
                                  <div className="info-back">
                                    <h4 className="post_title">
                                      <a href="free-course.html">Evaluating Social  Programs</a>
                                    </h4>
                                    <div className="post_descr">
                                      <p>
                                        <a href="free-course.html">Nunc finibus vestibulum dui a fringilla. Maecenas maximus in massa sit amet maximus.</a>
                                      </p>
                                      <div className="post_buttons">
                                        <div className="post_button">
                                          <a href="free-course.html" className="sc_button sc_button_square sc_button_style_filled sc_button_bg_link sc_button_size_small">LEARN MORE</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* /Courses item */}
                          {/* Courses item */}
                          <div className="isotope_item isotope_item_courses isotope_column_3">
                            <div className="post_item post_item_courses even">
                              <div className="post_content isotope_item_content ih-item colored square effect_dir left_to_right">
                                <div className="post_featured img">
                                  <a href="paid-course.html">
                                    <img alt="Principles of Written English, Part 1" src="assets/images/masonry_05-400x400.jpg" />
                                  </a>
                                  <h4 className="post_title">
                                    <a href="paid-course.html">Principles of Written English, Part 1</a>
                                  </h4>
                                  <div className="post_descr">
                                    <div className="post_price">
                                      <span className="post_price_value">$85</span>
                                    </div>
                                    <div className="post_category">
                                      <a href="product-category.html">Language</a>
                                    </div>
                                  </div>
                                </div>
                                <div className="post_info_wrap info">
                                  <div className="info-back">
                                    <h4 className="post_title">
                                      <a href="paid-course.html">Principles of Written English, Part 1</a>
                                    </h4>
                                    <div className="post_descr">
                                      <p>
                                        <a href="paid-course.html">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</a>
                                      </p>
                                      <div className="post_buttons">
                                        <div className="post_button">
                                          <a href="paid-course.html" className="sc_button sc_button_square sc_button_style_filled sc_button_bg_link sc_button_size_small">LEARN MORE</a>
                                        </div>
                                        <div className="post_button">
                                          <a href="product-page.html" className="sc_button sc_button_square sc_button_style_filled sc_button_bg_link sc_button_size_small">BUY NOW</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* /Courses item */}
                          {/* Courses item */}
                          <div className="isotope_item isotope_item_courses isotope_column_3">
                            <div className="post_item post_item_courses odd">
                              <div className="post_content isotope_item_content ih-item colored square effect_dir left_to_right">
                                <div className="post_featured img">
                                  <a href="paid-course.html">
                                    <img alt="Introduction to Biomedical Imaging" src="assets/images/masonry_03-400x400.jpg" /></a>
                                  <h4 className="post_title">
                                    <a href="paid-course.html">Introduction to Biomedical Imaging</a>
                                  </h4>
                                  <div className="post_descr">
                                    <div className="post_price">
                                      <span className="post_price_value">$400</span>
                                    </div>
                                    <div className="post_category">
                                      <a href="product-category.html">Medicine</a>
                                    </div>
                                  </div>
                                </div>
                                <div className="post_info_wrap info">
                                  <div className="info-back">
                                    <h4 className="post_title">
                                      <a href="paid-course.html">Introduction to Biomedical Imaging</a>
                                    </h4>
                                    <div className="post_descr">
                                      <p><a href="paid-course.html">Lorem ipsum dolor sit amet, consectetur adipisicing elit</a></p>
                                      <div className="post_buttons">
                                        <div className="post_button">
                                          <a href="paid-course.html" className="sc_button sc_button_square sc_button_style_filled sc_button_bg_link sc_button_size_small">LEARN MORE</a>
                                        </div>
                                        <div className="post_button">
                                          <a href="product-page.html" className="sc_button sc_button_square sc_button_style_filled sc_button_bg_link sc_button_size_small">BUY NOW</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* /Courses item */}
                          {/* Courses item */}
                          <div className="isotope_item isotope_item_courses isotope_column_3">
                            <div className="post_item post_item_courses even last">
                              <div className="post_content isotope_item_content ih-item colored square effect_dir left_to_right">
                                <div className="post_featured img">
                                  <a href="paid-course.html">
                                    <img alt="Introduction to Computer  Science" src="assets/images/masonry_02-400x400.jpg" />
                                  </a>
                                  <h4 className="post_title">
                                    <a href="paid-course.html">Introduction to Computer  Science</a>
                                  </h4>
                                  <div className="post_descr">
                                    <div className="post_price">
                                      <span className="post_price_value">$120</span>
                                      <span className="post_price_period">monthly</span>
                                    </div>
                                    <div className="post_category">
                                      <a href="product-category.html">Computers</a>
                                    </div>
                                  </div>
                                </div>
                                <div className="post_info_wrap info">
                                  <div className="info-back">
                                    <h4 className="post_title">
                                      <a href="paid-course.html">Introduction to Computer  Science</a>
                                    </h4>
                                    <div className="post_descr">
                                      <p><a href="paid-course.html">Sed interdum felis diam, vitae rutrum urna laoreet vehicula.</a></p>
                                      <div className="post_buttons">
                                        <div className="post_button">
                                          <a href="paid-course.html" className="sc_button sc_button_square sc_button_style_filled sc_button_bg_link sc_button_size_small">LEARN MORE</a>
                                        </div>
                                        <div className="post_button">
                                          <a href="product-page.html" className="sc_button sc_button_square sc_button_style_filled sc_button_bg_link sc_button_size_small">BUY NOW</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* /Courses item */}
                        </div>
                      </div>
                      <a href="courses-streampage.html" className="sc_button sc_button_square sc_button_style_filled sc_button_bg_menu sc_button_size_small aligncenter sc_button_iconed icon-graduation margin_top_1em margin_bottom_4 widht_12em">VIEW ALL COURSES</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Courses section */}
              {/* Partners section */}
              <div className="sc_section" data-animation="animated fadeInUp normal">
                <div className="sc_content content_wrap margin_top_2_5em_imp margin_bottom_2_5em_imp">
                  <div className="sc_section aligncenter width_70per">
                    <h2 className="sc_title sc_title_regular margin_top_0">Learn From the Best</h2>
                    <p>Our online courses are built in partnership with technology leaders and are relevant to industry needs.
                      <br /> Upon completing a Online course, you’ll receive a verified completion certificate recognized by industry leaders.
                    </p>
                  </div>
                  <div id="sc_section_4" className="sc_section margin_top_1_5em_imp margin_bottom_0_imp height_75">
                    <div id="sc_section_4_scroll" className="sc_scroll sc_scroll_horizontal swiper-slider-container scroll-container height_75">
                      <div className="sc_scroll_wrapper swiper-wrapper">
                        <div className="sc_scroll_slide swiper-slide">
                          <figure className="sc_image  alignleft sc_image_shape_square margin_right_0_imp">
                            <img src="assets/images/partners_01_bw.jpg" alt />
                          </figure>
                          <figure className="sc_image  alignleft sc_image_shape_square margin_right_0_imp margin_left_4em_imp">
                            <img src="assets/images/partners_02_bw.jpg" alt />
                          </figure>
                          <figure className="sc_image  alignleft sc_image_shape_square margin_right_0_imp margin_left_4em_imp">
                            <img src="assets/images/partners_03_bw.jpg" alt />
                          </figure>
                          <figure className="sc_image  alignleft sc_image_shape_square margin_right_0_imp margin_left_4em_imp">
                            <img src="assets/images/partners_04_bw.jpg" alt />
                          </figure>
                          <figure className="sc_image  alignleft sc_image_shape_square margin_right_0_imp margin_left_4em_imp">
                            <img src="assets/images/partners_05_bw.jpg" alt />
                          </figure>
                          <figure className="sc_image  alignleft sc_image_shape_square margin_right_0_imp margin_left_4em_imp">
                            <img src="assets/images/partners_06_bw.jpg" alt />
                          </figure>
                        </div>
                      </div>
                      <div id="sc_section_4_scroll_bar" className="sc_scroll_bar sc_scroll_bar_horizontal sc_section_471175375_scroll_bar" />
                    </div>
                  </div>
                </div>
              </div>
              {/* /Partners section */}
              {/* Pricing section */}
              <div className="sc_section accent_top bg_tint_light sc_bg1" data-animation="animated fadeInUp normal">
                <div className="sc_section_overlay">
                  <div className="sc_section_content">
                    <div className="sc_content content_wrap margin_top_2_5em_imp margin_bottom_2_5em_imp">
                      <h2 className="sc_title sc_title_regular sc_align_center text_center margin_top_0 margin_bottom_085em">Plans &amp; Pricing</h2>
                      <div className="columns_wrap sc_columns columns_nofluid sc_columns_count_3">
                        <div className="column-1_3 sc_column_item sc_column_item_1 odd first text_center">
                          <div className="sc_price_block sc_price_block_style_1 width_100per sc_pricing_cust_st1">
                            <div className="sc_price_block_title">Trial</div>
                            <div className="sc_price_block_money">
                              <div className="sc_price_block_icon icon-clock-2" />
                            </div>
                            <div className="sc_price_block_description">
                              <span className="sc_highlight font_2_57em lh_1em"><b>Free!</b> 30 Days</span>
                            </div>
                            <div className="sc_price_block_link">
                              <a href="product-page.html" className="sc_button sc_button_square sc_button_style_filled sc_button_bg_link sc_button_size_small">I WANT THIS PLAN</a>
                            </div>
                          </div>
                        </div>
                        <div className="column-1_3 sc_column_item sc_column_item_2 even text_center">
                          <div className="sc_price_block sc_price_block_style_2">
                            <div className="sc_price_block_title">Monthly</div>
                            <div className="sc_price_block_money">
                              <div className="sc_price"><span className="sc_price_currency">$</span><span className="sc_price_money">89</span></div>
                            </div>
                            <div className="sc_price_block_description">
                              <p><b>Save $98</b> every year compared to the monthly
                                <br /> plan by paying yearly.</p>
                            </div>
                            <div className="sc_price_block_link">
                              <a href="product-page.html" className="sc_button sc_button_square sc_button_style_filled sc_button_bg_link sc_button_size_small">I WANT THIS PLAN</a>
                            </div>
                          </div>
                        </div>
                        <div className="column-1_3 sc_column_item sc_column_item_3 odd text_center">
                          <div className="sc_price_block sc_price_block_style_3">
                            <div className="sc_price_block_title">Yearly</div>
                            <div className="sc_price_block_money">
                              <div className="sc_price">
                                <span className="sc_price_currency">$</span>
                                <span className="sc_price_money">129</span>
                              </div>
                            </div>
                            <div className="sc_price_block_description">
                              <p><b>Save $120</b> every year compared to the monthly
                                <br /> plan by paying biannually.</p>
                            </div>
                            <div className="sc_price_block_link">
                              <a href="product-page.html" className="sc_button sc_button_square sc_button_style_filled sc_button_bg_link sc_button_size_small">I WANT THIS PLAN</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Pricing section */}
              {/* Testimonials section */}
              <div className="sc_section link_color_bgc bg_tint_dark">
                <div className="sc_content content_wrap margin_top_3em_imp margin_bottom_3em_imp">
                  <div className="sc_testimonials sc_slider_swiper swiper-slider-container sc_slider_nopagination sc_slider_controls sc_slider_height_fixed aligncenter height_12em width_100per" data-old-height="12em" data-interval={7000}>
                    <div className="slides swiper-wrapper">
                      <div className="swiper-slide height_12em width_100per" data-style="width:100%;height:12em;">
                        <div className="sc_testimonial_item">
                          <div className="sc_testimonial_avatar">
                            <img alt src="assets/images/masonry_07-70x70.jpg" /></div>
                          <div className="sc_testimonial_content">
                            <p>Best purchase i made in envato. Great Theme!</p>
                          </div>
                          <div className="sc_testimonial_author">
                            <a href="#">Sarah Jefferson</a>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide height_12em width_100per" data-style="width:100%;height:12em;">
                        <div className="sc_testimonial_item">
                          <div className="sc_testimonial_avatar">
                            <img alt src="assets/images/avatar-4-70x70.jpg" /></div>
                          <div className="sc_testimonial_content">
                            <p>Thank you for all your help and assistance over the years with our products.
                              <br /> I would have no hesitation in recommending you to my clients.</p>
                          </div>
                          <div className="sc_testimonial_author">
                            <a href="#">David Anderson</a>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide height_12em width_100per" data-style="width:100%;height:12em;">
                        <div className="sc_testimonial_item">
                          <div className="sc_testimonial_content">
                            <div className="sc_number aligncenter margin_bottom_1_5em">
                              <span className="sc_number_item">4</span>
                              <span className="sc_number_item">0</span>
                              <span className="sc_number_item">0</span>
                            </div> 
                            faculty and staff teaching courses and discussing topics online
                          </div>
                          <div className="sc_testimonial_author">online Education</div>
                        </div>
                      </div>
                    </div>
                    <div className="sc_slider_controls_wrap">
                      <a className="sc_slider_prev" href="#" />
                      <a className="sc_slider_next" href="#" />
                    </div>
                  </div>
                </div>
              </div>
              {/* /Testimonials section */}
            </section>
          </article>
        </div>
      </div>
      {/* /Content without sidebar */}
      {/* Widgets Footer */}
      <footer className="footer_wrap bg_tint_light footer_style_light widget_area">
        <div className="content_wrap">
          <div className="columns_wrap">
            {/* Calendar widget */}
            <aside className="column-1_3 widget widget_calendar">
              <h5 className="widget_title">Calendar</h5>
              <table>
                <thead>
                  <tr>
                    <th className="month_prev">
                      <a href="#" data-type="post,courses,tribe_events" data-year={2019} data-month={1} title="View posts for January 2019" />
                    </th>
                    <th className="month_cur" colSpan={5}>September <span>2019</span></th>
                    <th className="month_next"> 
                      <a href="#" data-month={10} data-year={2019} data-type="post,courses,tribe_events" title="View posts for October 2019" />
                    </th>
                  </tr>
                  <tr>
                    <th className="weekday" scope="col" title="Monday">Mon</th>
                    <th className="weekday" scope="col" title="Tuesday">Tue</th>
                    <th className="weekday" scope="col" title="Wednesday">Wed</th>
                    <th className="weekday" scope="col" title="Thursday">Thu</th>
                    <th className="weekday" scope="col" title="Friday">Fri</th>
                    <th className="weekday" scope="col" title="Saturday">Sat</th>
                    <th className="weekday" scope="col" title="Sunday">Sun</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={1} className="pad"><span className="day_wrap">&nbsp;</span></td>
                    <td className="day"><span className="day_wrap">1</span></td>
                    <td className="day"><span className="day_wrap">2</span></td>
                    <td className="day"><span className="day_wrap">3</span></td>
                    <td className="day"><span className="day_wrap">4</span></td>
                    <td className="day"><span className="day_wrap">5</span></td>
                    <td className="day"><span className="day_wrap">6</span></td>
                  </tr>
                  <tr>
                    <td className="day"><span className="day_wrap">7</span></td>
                    <td className="day"><span className="day_wrap">8</span></td>
                    <td className="day"><span className="day_wrap">9</span></td>
                    <td className="day"><a className="day_wrap" title="Post" href="#">10</a></td>
                    <td className="day"><span className="day_wrap">11</span></td>
                    <td className="day"><span className="day_wrap">12</span></td>
                    <td className="day"><span className="day_wrap">13</span></td>
                  </tr>
                  <tr>
                    <td className="day"><span className="day_wrap">14</span></td>
                    <td className="day"><span className="day_wrap">15</span></td>
                    <td className="day"><span className="day_wrap">16</span></td>
                    <td className="day"><span className="day_wrap">17</span></td>
                    <td className="day"><a className="day_wrap" title="Post" href="#">18</a></td>
                    <td className="day"><span className="day_wrap">19</span></td>
                    <td className="day"><span className="day_wrap">20</span></td>
                  </tr>
                  <tr>
                    <td className="today"><span className="day_wrap">21</span></td>
                    <td className="day"><span className="day_wrap">22</span></td>
                    <td className="day"><span className="day_wrap">23</span></td>
                    <td className="day"><span className="day_wrap">24</span></td>
                    <td className="day"><span className="day_wrap">25</span></td>
                    <td className="day"><span className="day_wrap">26</span></td>
                    <td className="day"><span className="day_wrap">27</span></td>
                  </tr>
                  <tr>
                    <td className="day"><span className="day_wrap">28</span></td>
                    <td className="day"><span className="day_wrap">29</span></td>
                    <td className="day"><span className="day_wrap">30</span></td>
                    <td className="pad" colSpan={4}><span className="day_wrap">&nbsp;</span></td>
                  </tr>
                </tbody>
              </table>
            </aside>
            {/* /Calendar widget */}
            {/* Popular courses widget */}
            <aside className="column-1_3 widget">
              <h5 className="widget_title">Popular Courses</h5>
              <article className="post_item with_thumb first">
                <div className="post_thumb">
                  <img alt="Principles of Written English, Part 1" src="assets/images/masonry_05-75x75.jpg" /></div>
                <div className="post_content">
                  <h6 className="post_title">
                    <a href="paid-course.html">Principles of Written English, Part 1</a>
                  </h6>
                  <div className="post_info"><span className="post_info_item post_info_posted">
                      <a href="paid-course.html" className="post_info_date">December 24, 2018</a></span>
                    <span className="post_info_item post_info_posted_by">by 
                      <a href="#" className="post_info_author">John Doe</a>
                    </span>
                    <span className="post_info_item post_info_counters">
                      <a href="paid-course.html" className="post_counters_item post_counters_rating icon-star-1">
                        <span className="post_counters_number">86.8</span>
                      </a>
                    </span>
                  </div>
                </div>
              </article>
              <article className="post_item with_thumb">
                <div className="post_thumb">
                  <img alt="Medical Chemistry: The  Molecular Basis…" src="assets/images/masonry_01-75x75.jpg" />
                </div>
                <div className="post_content">
                  <h6 className="post_title">
                    <a href="paid-course.html">Medical Chemistry: The  Molecular Basis...</a>
                  </h6>
                  <div className="post_info">
                    <span className="post_info_item post_info_posted">
                      <a href="paid-course.html" className="post_info_date">March 8, 2019</a>
                    </span>
                    <span className="post_info_item post_info_posted_by">by 
                      <a href="#" className="post_info_author">John Doe</a>
                    </span>
                    <span className="post_info_item post_info_counters">
                      <a href="paid-course.html" className="post_counters_item post_counters_rating icon-star-1">
                        <span className="post_counters_number">83.8</span>
                      </a>
                    </span>
                  </div>
                </div>
              </article>
              <article className="post_item with_thumb">
                <div className="post_thumb">
                  <img alt="Entrepreneurship 101:  Who is your customer?" src="assets/images/masonry_06-75x75.jpg" />
                </div>
                <div className="post_content">
                  <h6 className="post_title">
                    <a href="paid-course.html">Entrepreneurship 101:  Who is your customer?</a>
                  </h6>
                  <div className="post_info">
                    <span className="post_info_item post_info_posted">
                      <a href="paid-course.html" className="post_info_date">February 27, 2019</a>
                    </span>
                    <span className="post_info_item post_info_posted_by">by 
                      <a href="#" className="post_info_author">John Doe</a>
                    </span>
                    <span className="post_info_item post_info_counters">
                      <a href="paid-course.html" className="post_counters_item post_counters_rating icon-star-1">
                        <span className="post_counters_number">76.3</span>
                      </a>
                    </span>
                  </div>
                </div>
              </article>
              <article className="post_item with_thumb">
                <div className="post_thumb">
                  <img alt="Introduction to Biomedical Imaging" src="assets/images/masonry_03-75x75.jpg" />
                </div>
                <div className="post_content">
                  <h6 className="post_title">
                    <a href="paid-course.html">Introduction to Biomedical Imaging</a>
                  </h6>
                  <div className="post_info">
                    <span className="post_info_item post_info_posted">
                      <a href="paid-course.html" className="post_info_date">January 1, 2016</a>
                    </span>
                    <span className="post_info_item post_info_posted_by">by 
                      <a href="#" className="post_info_author">John Doe</a>
                    </span>
                    <span className="post_info_item post_info_counters">
                      <a href="paid-course.html" className="post_counters_item post_counters_rating icon-star-1">
                        <span className="post_counters_number">74.8</span>
                      </a>
                    </span>
                  </div>
                </div>
              </article>
            </aside>
            {/* /Popular courses widget */}
            {/* Recent courses widget */}
            <aside className="column-1_3 widget">
              <h5 className="widget_title">Recent Courses</h5>
              <article className="post_item with_thumb first">
                <div className="post_thumb">
                  <img alt="Principles of Written English, Part 2" src="assets/images/masonry_15-75x75.jpg" />
                </div>
                <div className="post_content">
                  <h6 className="post_title">
                    <a href="paid-course.html">Principles of Written English, Part 2</a>
                  </h6>
                  <div className="post_info">
                    <span className="post_info_item post_info_posted">
                      <a href="paid-course.html" className="post_info_date">February 10, 2019</a>
                    </span>
                    <span className="post_info_item post_info_posted_by">by 
                      <a href="#" className="post_info_author">John Doe</a>
                    </span>
                    <span className="post_info_item post_info_counters">
                      <a href="paid-course.html" className="post_counters_item post_counters_views icon-eye">
                        <span className="post_counters_number">749</span>
                      </a>
                    </span>
                  </div>
                </div>
              </article>
              <article className="post_item with_thumb">
                <div className="post_thumb">
                  <img alt="Entrepreneurship 101:  Who is your customer?" src="assets/images/masonry_06-75x75.jpg" />
                </div>
                <div className="post_content">
                  <h6 className="post_title">
                    <a href="paid-course.html">Entrepreneurship 101:  Who is your customer?</a>
                  </h6>
                  <div className="post_info">
                    <span className="post_info_item post_info_posted">
                      <a href="paid-course.html" className="post_info_date">February 27, 2019</a>
                    </span>
                    <span className="post_info_item post_info_posted_by">by 
                      <a href="#" className="post_info_author">John Doe</a>
                    </span>
                    <span className="post_info_item post_info_counters">
                      <a href="paid-course.html" className="post_counters_item post_counters_views icon-eye">
                        <span className="post_counters_number">729</span>
                      </a>
                    </span>
                  </div>
                </div>
              </article>
              <article className="post_item with_thumb">
                <div className="post_thumb">
                  <img alt="Evaluating Social  Programs" src="assets/images/masonry_04-75x75.jpg" />
                </div>
                <div className="post_content">
                  <h6 className="post_title">
                    <a href="free-course.html">Evaluating Social  Programs</a>
                  </h6>
                  <div className="post_info">
                    <span className="post_info_item post_info_posted">
                      <a href="free-course.html" className="post_info_date">January 1, 2019</a>
                    </span>
                    <span className="post_info_item post_info_posted_by">by 
                      <a href="#" className="post_info_author">John Doe</a>
                    </span>
                    <span className="post_info_item post_info_counters">
                      <a href="free-course.html" className="post_counters_item post_counters_views icon-eye">
                        <span className="post_counters_number">1154</span>
                      </a>
                    </span>
                  </div>
                </div>
              </article>
              <article className="post_item with_thumb">
                <div className="post_thumb">
                  <img alt="Principles of Written English, Part 1" src="assets/images/masonry_05-75x75.jpg" />
                </div>
                <div className="post_content">
                  <h6 className="post_title">
                    <a href="paid-course.html">Principles of Written English, Part 1</a>
                  </h6>
                  <div className="post_info">
                    <span className="post_info_item post_info_posted">
                      <a href="paid-course.html" className="post_info_date">December 24, 2018</a>
                    </span>
                    <span className="post_info_item post_info_posted_by">by 
                      <a href="#" className="post_info_author">John Doe</a>
                    </span>
                    <span className="post_info_item post_info_counters">
                      <a href="paid-course.html" className="post_counters_item post_counters_views icon-eye">
                        <span className="post_counters_number">253</span>
                      </a>
                    </span>
                  </div>
                </div>
              </article>
            </aside>
            {/* /Recent courses widget */}
          </div>
        </div>
      </footer>
      {/* /Widgets Footer */}
      {/* Contacts Footer */}
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
      {/* /Contacts Footer */}
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
  <div className="custom_html_section" />
</div>

    </ >
  )
}
