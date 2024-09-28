import React from 'react'
import { Link } from 'react-router-dom';

export default function TeachersTeam() {
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
                <li className="menu-item menu-item-has-children current-menu-ancestor current-menu-parent"><Link to="/TeachersTeam">Teachers</Link>
                   
                </li>
                 
                <li className="menu-item menu-item-has-children"><Link to="/About">About Us</Link></li>
                <li className="menu-item menu-item-has-children"><Link to="/Contact">Contact Us</Link></li>

                
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
              <div className="sc_section" data-animation="animated fadeInUp normal">
                <div className="sc_content content_wrap margin_top_3em_imp margin_bottom_3em_imp">
                  <h2 className="sc_title sc_title_regular sc_align_center margin_top_0 margin_bottom_085em text_center">Language Teachers</h2>
                  <div className="sc_team sc_team_style_1" data-animation="animated fadeInUp normal">
                    <div className="sc_columns columns_wrap">
                      <div className="column-1_3">
                        <div className="sc_team_item sc_team_item_1 odd first">
                          <div className="sc_team_item_avatar">
                            <img alt src="assets/images/john_johnson_full-350x290.jpg" /></div>
                          <div className="sc_team_item_info">
                            <h6 className="sc_team_item_title">
                              <a href="personal-page.html">John Johnson</a>
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
                            <img alt src="assets/images/john_snow_full-350x290.jpg" /></div>
                          <div className="sc_team_item_info">
                            <h6 className="sc_team_item_title">
                              <a href="personal-page.html">John Snow</a>
                            </h6>
                            <div className="sc_team_item_position">Translator</div>
                            <div className="sc_team_item_description">
                              <p>Royal L. Garff Presidential Chair in Marketing, Marketing Department, Department of Marketing
                                <br /> Presidential Professor, Marketing Department, University of Utah
                              </p>
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
                            <img alt src="assets/images/pamela_fryman_full-350x290.jpg" /></div>
                          <div className="sc_team_item_info">
                            <h6 className="sc_team_item_title">
                              <a href="personal-page.html">Pamela Fryman</a>
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
                                  <span className="sc_socials_hover social_dribbble" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sc_line sc_line_style_solid margin_top_1em" />
                  <h2 className="sc_title sc_title_regular sc_align_center margin_top_0 margin_bottom_085em text_center" data-animation="animated fadeInUp normal">Marketing</h2>
                  <div className="sc_team sc_team_style_2" data-animation="animated fadeInUp normal">
                    <div className="sc_columns columns_wrap">
                      <div className="column-1_3">
                        <div className="sc_team_item sc_team_item_1 odd first">
                          <div className="sc_team_item_avatar">
                            <img alt="jessie_russel_full.jpg" src="assets/images/jessie_russel_full-350x290.jpg" />
                            <div className="sc_team_item_hover">
                              <div className="sc_team_item_socials">
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
                          <div className="sc_team_item_info">
                            <h6 className="sc_team_item_title"><a href="personal-page.html">Jessie Russel</a></h6>
                            <div className="sc_team_item_position">Marketing Coordinator</div>
                          </div>
                        </div>
                      </div>
                      <div className="column-1_3">
                        <div className="sc_team_item sc_team_item_2 even">
                          <div className="sc_team_item_avatar">
                            <img alt src="assets/images/maurice_bates_full-350x290.jpg" />
                            <div className="sc_team_item_hover">
                              <div className="sc_team_item_socials">
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
                          <div className="sc_team_item_info">
                            <h6 className="sc_team_item_title"><a href="personal-page.html">Maurice Bates</a></h6>
                            <div className="sc_team_item_position">Marketing Coordinator</div>
                          </div>
                        </div>
                      </div>
                      <div className="column-1_3">
                        <div className="sc_team_item sc_team_item_3 odd">
                          <div className="sc_team_item_avatar">
                            <img alt src="assets/images/roy_daniels_full-350x290.jpg" />
                            <div className="sc_team_item_hover">
                              <div className="sc_team_item_socials">
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
                          <div className="sc_team_item_info">
                            <h6 className="sc_team_item_title">
                              <a href="personal-page.html">Roy Daniels</a>
                            </h6>
                            <div className="sc_team_item_position">Marketing Coordinator</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a href="courses-streampage.html" data-animation="animated fadeInUp normal" className="sc_button sc_button_square sc_button_style_filled sc_button_bg_menu sc_button_size_small aligncenter  sc_button_iconed icon-graduation margin_top_0 sc_button_courses_st1 margin_bottom_4 widht_12em">VIEW ALL COURSES</a>
                </div>
              </div>
              <div className="sc_line sc_line_style_solid margin_top_0 margin_bottom_0" />
            </section>
          </article>
        </div>
      </div>
      {/* /Content */}
      {/* Widgets Footer */}
      <footer className="footer_wrap bg_tint_light footer_style_white widget_area">
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
</div>

    </ >
  )
}
