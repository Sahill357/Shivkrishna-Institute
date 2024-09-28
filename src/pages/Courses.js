import React from 'react'
import { Link } from 'react-router-dom';

export default function Courses() {
  return (
    <> 
   <div className="page body_style_wide body_filled article_style_boxed layout_courses_3 template_portfolio top_panel_style_light top_panel_opacity_solid top_panel_above menu_right sidebar_hide">
  <a id="toc_top" className="sc_anchor" title="To Top" data-description="<i>Back to top</i> - <br>scroll to top of the page" data-icon="icon-angle-double-up" data-url data-separator="yes" />
  {/* Body */}
  <div className="body_wrap">
    <div className="page_wrap">
      <div className="top_panel_fixed_wrap" />
      <header className="top_panel_wrap bg_tint_light">
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
                <img src="assets/images/logo_light.png" className="logo_main" alt />
                <img src="assets/images/logo_light.png" className="logo_fixed" alt />
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
               
                
                <li className="menu-item menu-item-has-children current-menu-ancestor current-menu-parent"><Link to="/Courses">Courses</Link>
                  
                </li>
                <li className="menu-item menu-item-has-children"><Link to="/TeachersTeam">Teachers</Link>
                  
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
      {/* Page title */}
      <div className="page_top_wrap page_top_title page_top_breadcrumbs sc_pt_st1">
        <div className="content_wrap">
          <div className="breadcrumbs">
            <a className="breadcrumbs_item home" href="index-2.html">Home</a>
            <span className="breadcrumbs_delimiter" />
            <span className="breadcrumbs_item current">All courses</span> 
          </div>
          <h1 className="page_title">All courses</h1>
        </div>
      </div>
      {/* /Page title */}
      {/* Content with sidebar */}
      <div className="page_content_wrap">
        <div className="content_wrap">
          <div className="content">
            <div className="isotope_filters isotope-courses-streampage" />
            <div className="isotope_wrap" data-columns={3}>
              {/* Courses item */}
              <div className="isotope_item isotope_item_courses isotope_column_3 flt_55">
                <article className="post_item post_item_courses odd">
                  <div className="post_content isotope_item_content ih-item colored square effect_dir left_to_right">									
                    <div className="post_featured img">
                      <a href="paid-course.html">
                        <img alt="Principles of Written English, Part 2" src="assets/images/masonry_15-400x400.jpg" /></a>
                      <h4 className="post_title">
                        <a href="paid-course.html">Principles of Written English, Part 2</a>
                      </h4>
                      <div className="post_descr">
                        <div className="post_price">
                          <span className="post_price_value">$85</span>
                          <span className="post_price_period">monthly</span>
                        </div>
                        <div className="post_category">
                          <a href="tag-page.html">Language</a>
                        </div>
                        <div className="post_rating reviews_summary blog_reviews">
                          <div className="criteria_summary criteria_row">
                            <div className="reviews_stars reviews_style_stars" data-mark="60.5">
                              <div className="reviews_stars_wrap">
                                <div className="reviews_stars_bg"><span className="reviews_star" /><span className="reviews_star" /><span className="reviews_star" /><span className="reviews_star" /><span className="reviews_star" /></div>
                                <div className="reviews_stars_hover width_61per"><span className="reviews_star" /><span className="reviews_star" /><span className="reviews_star" /><span className="reviews_star" /><span className="reviews_star" /></div>
                              </div>
                              <div className="reviews_value">60.5</div>
                            </div>
                          </div>
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
                </article>
              </div>
              {/* /Courses item */}
              {/* Courses item */}
              <div className="isotope_item isotope_item_courses isotope_column_3 flt_43">
                <article className="post_item post_item_courses even">
                  <div className="post_content isotope_item_content ih-item colored square effect_dir left_to_right">
                    <div className="post_featured img">
                      <a href="#">
                        <img alt="Entrepreneurship 101: Who is your customer?" src="assets/images/masonry_06-400x400.jpg" />
                      </a>
                      <h4 className="post_title">
                        <a href="paid-course.html">Entrepreneurship 101:  Who is your customer?</a>
                      </h4>
                      <div className="post_descr">
                        <div className="post_price">
                          <span className="post_price_value">$195</span>
                          <span className="post_price_period">monthly</span>
                        </div>
                        <div className="post_category">
                          <a href="tag-page.html">Marketing</a>
                        </div>
                        <div className="post_rating reviews_summary blog_reviews">
                          <div className="criteria_summary criteria_row">
                            <div className="reviews_stars reviews_style_stars" data-mark="76.3">
                              <div className="reviews_stars_wrap">
                                <div className="reviews_stars_bg"><span className="reviews_star" /><span className="reviews_star" /><span className="reviews_star" /><span className="reviews_star" /><span className="reviews_star" /></div>
                                <div className="reviews_stars_hover width_76per"><span className="reviews_star" /><span className="reviews_star" /><span className="reviews_star" /><span className="reviews_star" /><span className="reviews_star" /></div>
                              </div>
                              <div className="reviews_value">76.3</div>
                            </div>
                          </div>
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
                </article>
              </div>
              {/* /Courses item */}
              {/* Courses item */}
              <div className="isotope_item isotope_item_courses isotope_column_3 flt_57">
                <article className="post_item post_item_courses odd">
                  <div className="post_content isotope_item_content ih-item colored square effect_dir left_to_right">
                    <div className="post_featured img">
                      <a href="free-course.html">
                        <img alt="Evaluating Social Programs" src="assets/images/masonry_04-400x400.jpg" />
                      </a>
                      <h4 className="post_title">
                        <a href="free-course.html">Evaluating Social Programs</a>
                      </h4>
                      <div className="post_descr">
                        <div className="post_price">
                          <span className="post_price_value">Free!</span>
                        </div>
                        <div className="post_category">
                          <a href="tag-page.html">Social</a>
                        </div>
                        <div className="post_rating reviews_summary blog_reviews">
                          <div className="criteria_summary criteria_row">
                            <div className="reviews_stars reviews_style_stars" data-mark="53.5">
                              <div className="reviews_stars_wrap">
                                <div className="reviews_stars_bg"><span className="reviews_star" /><span className="reviews_star" /><span className="reviews_star" /><span className="reviews_star" /><span className="reviews_star" /></div>
                                <div className="reviews_stars_hover width_54per"><span className="reviews_star" /><span className="reviews_star" /><span className="reviews_star" /><span className="reviews_star" /><span className="reviews_star" /></div>
                              </div>
                              <div className="reviews_value">53.5</div>
                            </div>
                          </div>
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
                </article>
              </div>
              {/* /Courses item */}
              {/* Courses item */}
              <div className="isotope_item isotope_item_courses isotope_column_3 flt_55">
                <article className="post_item post_item_courses even">
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
                          <a href="tag-page.html">Language</a>
                        </div>
                        <div className="post_rating reviews_summary blog_reviews">
                          <div className="criteria_summary criteria_row">
                            <div className="reviews_stars reviews_style_stars" data-mark="86.8">
                              <div className="reviews_stars_wrap">
                                <div className="reviews_stars_bg"><span className="reviews_star" /><span className="reviews_star" /><span className="reviews_star" /><span className="reviews_star" /><span className="reviews_star" /></div>
                                <div className="reviews_stars_hover width_87per"><span className="reviews_star" /><span className="reviews_star" /><span className="reviews_star" /><span className="reviews_star" /><span className="reviews_star" /></div>
                              </div>
                              <div className="reviews_value">86.8</div>
                            </div>
                          </div>
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
                </article>
              </div>
              {/* /Courses item */}
              {/* Courses item */}
              <div className="isotope_item isotope_item_courses isotope_column_3 flt_52">
                <article className="post_item post_item_courses odd">
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
                          <a href="tag-page.html">Medicine</a>
                        </div>
                        <div className="post_rating reviews_summary blog_reviews">
                          <div className="criteria_summary criteria_row">
                            <div className="reviews_stars reviews_style_stars" data-mark="74.8">
                              <div className="reviews_stars_wrap">
                                <div className="reviews_stars_bg"><span className="reviews_star" /><span className="reviews_star" /><span className="reviews_star" /><span className="reviews_star" /><span className="reviews_star" /></div>
                                <div className="reviews_stars_hover width_75per"><span className="reviews_star" /><span className="reviews_star" /><span className="reviews_star" /><span className="reviews_star" /><span className="reviews_star" /></div>
                              </div>
                              <div className="reviews_value">74.8</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="post_info_wrap info">
                      <div className="info-back">
                        <h4 className="post_title">
                          <a href="paid-course.html">Introduction to Biomedical Imaging</a>
                        </h4>
                        <div className="post_descr">
                          <p>
                            <a href="paid-course.html">Lorem ipsum dolor sit amet, consectetur adipisicing elit</a>
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
                </article>
              </div>
              {/* /Courses item */}
              {/* Courses item */}
              <div className="isotope_item isotope_item_courses isotope_column_3 flt_53">
                <article className="post_item post_item_courses even last">
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
                          <a href="tag-page.html">Computers</a>
                        </div>
                        <div className="post_rating reviews_summary blog_reviews">
                          <div className="criteria_summary criteria_row">
                            <div className="reviews_stars reviews_style_stars" data-mark={73}>
                              <div className="reviews_stars_wrap">
                                <div className="reviews_stars_bg"><span className="reviews_star" /><span className="reviews_star" /><span className="reviews_star" /><span className="reviews_star" /><span className="reviews_star" /></div>
                                <div className="reviews_stars_hover width_73per"><span className="reviews_star" /><span className="reviews_star" /><span className="reviews_star" /><span className="reviews_star" /><span className="reviews_star" /></div>
                              </div>
                              <div className="reviews_value">73</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="post_info_wrap info">
                      <div className="info-back">
                        <h4 className="post_title">
                          <a href="paid-course.html">Introduction to Computer  Science</a>
                        </h4>
                        <div className="post_descr">
                          <p>
                            <a href="paid-course.html">Sed interdum felis diam, vitae rutrum urna laoreet vehicula.</a>
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
                </article>
              </div>
              {/* /Courses item */}
            </div>
            <div id="viewmore" className="pagination_wrap pagination_viewmore">
              <a href="#" id="viewmore_link" className="theme_button viewmore_button">
                <span className="icon-spin3 animate-spin viewmore_loading" />
                <span className="viewmore_text_1">LOAD MORE</span>
                <span className="viewmore_text_2">Loading ...</span>
              </a>
              <span className="viewmore_loader" />
            </div>
          </div>
        </div>
      </div>
      {/* /Content */}
      {/* Partners footer */}
      <footer className="user_footer_wrap">
        <div className="sc_section margin_bottom_1_imp sc_footer_custom_bg1">
          <div className="sc_section_overlay">
            <div className="sc_section_content">
              <div className="sc_content content_wrap">
                <div className="sc_section aligncenter width_70per">
                  <h2 className="sc_title sc_title_regular margin_top_05em">Schools &amp; Partners</h2> 
                  We believe in offering the highest quality courses, created by schools and partners who share our commitment to excellence in teaching and learning, both online and in the classroom.
                </div>
                <div id="sc_section_2" className="sc_section margin_top_1_5em_imp margin_bottom_075em_imp height_75">
                  <div id="sc_section_2_scroll" className="sc_scroll sc_scroll_horizontal swiper-slider-container scroll-container height_75">
                    <div className="sc_scroll_wrapper swiper-wrapper">
                      <div className="sc_scroll_slide swiper-slide">
                        <figure className="sc_image alignleft sc_image_shape_square margin_right_0_imp">
                          <img src="assets/images/partners_01.jpg" alt />
                        </figure>
                        <figure className="sc_image alignleft sc_image_shape_square margin_right_0_imp margin_left_4em_imp">
                          <img src="assets/images/partners_02.jpg" alt />
                        </figure>
                        <figure className="sc_image alignleft sc_image_shape_square margin_right_0_imp margin_left_4em_imp">
                          <img src="assets/images/partners_03.jpg" alt />
                        </figure>
                        <figure className="sc_image alignleft sc_image_shape_square margin_right_0_imp margin_left_4em_imp">
                          <img src="assets/images/partners_04.jpg" alt />
                        </figure>
                        <figure className="sc_image alignleft sc_image_shape_square margin_right_0_imp margin_left_4em_imp">
                          <img src="assets/images/partners_05.jpg" alt />
                        </figure>
                        <figure className="sc_image alignleft sc_image_shape_square margin_right_0_imp margin_left_4em_imp">
                          <img src="assets/images/partners_06.jpg" alt />
                        </figure>
                      </div>
                    </div>
                    <div id="sc_section_2_scroll_bar" className="sc_scroll_bar sc_scroll_bar_horizontal sc_section_2_scroll_bar" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>	
      {/* /Partners footer */}
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
            {/* Recent posts widget */}
            <aside className="column-1_3 widget">
              <h5 className="widget_title">Recent Posts</h5>
              <article className="post_item first">
                <div className="post_thumb">
                  <img alt="Medical Chemistry: The Molecular Basis" src="assets/images/masonry_01-75x75.jpg" />
                </div>
                <div className="post_content">
                  <h6 className="post_title">
                    <a href="post-with-sidebar.html">Medical Chemistry: The Molecular Basis</a>
                  </h6>
                  <div className="post_info">
                    <span className="post_info_item post_info_posted">
                      <a href="#" className="post_info_date">January 14, 2019</a>
                    </span>
                    <span className="post_info_item post_info_posted_by">by 
                      <a href="#" className="post_info_author">John Doe</a>
                    </span>
                    <span className="post_info_item post_info_counters">
                      <a href="#" className="post_counters_item post_counters_views icon-eye"><span>157</span></a>
                    </span>
                  </div>
                </div>
              </article>
              <article className="post_item">
                <div className="post_thumb">
                  <img alt="Introduction to Computer  Science" src="assets/images/masonry_02-75x75.jpg" />
                </div>
                <div className="post_content">
                  <h6 className="post_title">
                    <a href="post-without-sidebar.html">Introduction to Computer  Science</a>
                  </h6>
                  <div className="post_info">
                    <span className="post_info_item post_info_posted">
                      <a href="#" className="post_info_date">January 14, 2019</a>
                    </span>
                    <span className="post_info_item post_info_posted_by">by 
                      <a href="#" className="post_info_author">John Doe</a>
                    </span>
                    <span className="post_info_item post_info_counters">
                      <a href="#" className="post_counters_item post_counters_views icon-eye"><span>103</span>
                      </a>
                    </span>
                  </div>
                </div>
              </article>
              <article className="post_item ">
                <div className="post_thumb">
                  <img alt="Introduction to Biomedical Imaging" src="assets/images/masonry_03-75x75.jpg" />
                </div>
                <div className="post_content">
                  <h6 className="post_title">
                    <a href="post-without-sidebar.html">Introduction to Biomedical Imaging</a>
                  </h6>
                  <div className="post_info">
                    <span className="post_info_item post_info_posted">
                      <a href="#" className="post_info_date">January 13, 2019</a>
                    </span>
                    <span className="post_info_item post_info_posted_by">by 
                      <a href="#" className="post_info_author">John Doe</a>
                    </span>
                    <span className="post_info_item post_info_counters">
                      <a href="#" className="post_counters_item post_counters_views icon-eye"><span>80</span></a>
                    </span>
                  </div>
                </div>
              </article>
              <article className="post_item">
                <div className="post_thumb">
                  <img alt="Evaluating Social Programs" src="assets/images/masonry_04-75x75.jpg" /></div>
                <div className="post_content">
                  <h6 className="post_title">
                    <a href="post-without-sidebar.html">Evaluating Social Programs</a>
                  </h6>
                  <div className="post_info">
                    <span className="post_info_item post_info_posted">
                      <a href="#" className="post_info_date">January 13, 2019</a>
                    </span>
                    <span className="post_info_item post_info_posted_by">by 
                      <a href="#" className="post_info_author">John Doe</a>
                    </span>
                    <span className="post_info_item post_info_counters">
                      <a href="#" className="post_counters_item post_counters_views icon-eye"><span>77</span></a>
                    </span>
                  </div>
                </div>
              </article>
            </aside>
            {/* /Recent posts widget */}
            {/* Recent comments widget */}
            <aside className="column-1_3 widget widget_recent_comments">
              <h5 className="widget_title">Latest comments</h5>
              <ul>
                <li>
                  <span>TRX_admin</span> on 
                  <a href="product-page.html">Star Print Backpack</a>
                </li>
                <li>
                  <span>TRX_admin</span> on 
                  <a href="product-page.html">Yellow Backpack</a>
                </li>
                <li>
                  <span>Sebastian Jones</span> on 
                  <a href="product-page.html">Principles of Written English, Part 2</a>
                </li>
                <li>
                  <span>TRX_admin</span> on 
                  <a href="product-page.html">Principles of Written English, Part 2</a>
                </li>
                <li>
                  <span>TRX_admin</span> on 
                  <a href="product-page.html">Video Training for Microsoft products and technologies</a>
                </li>
              </ul>
            </aside>
            {/* /Recent comments widget */}
          </div>
        </div>
      </footer>
      {/* /Widgets Footer */}			
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
