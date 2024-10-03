import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import Partners from '../components/layout/Partners';
import CalendarFooter from '../components/layout/CalendarFooter';
import ContactFooter from '../components/layout/ContactFooter';
import CopyrightFooter from '../components/layout/CopyrightFooter';

export default function Courses() {
   // Scroll to the top when the component mounts
 useEffect(() => {
  window.scrollTo(0, 0);
}, []);
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
               
                
                <li className="menu-item   current-menu-ancestor current-menu-parent"><a href="/Courses">Courses</a>
                  
                </li>
                <li className="menu-item  "><a href="/TeachersTeam">Teachers</a>
                  
                </li>
                <li className="menu-item"><a href="/About">About Us</a></li>
                <li className="menu-item"><a href="/Contact">Contact Us</a></li>
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
           <a href="/" className="breadcrumbs_item home" >Home</a>
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
                      <a href="#">
                        <img alt="Principles of Written English, Part 2" src="assets/images/masonry_15-400x400.jpg" /></a>
                      <h4 className="post_title">
                        <a href="#">Principles of Written English, Part 2</a>
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
                          <a href="#">Principles of Written English, Part 2</a>
                        </h4>
                        <div className="post_descr">
                          <p>
                            <a href="#">Nam id leo massa. Cras at condimentum nisi, vulputate ultrices turpis.</a>
                          </p>
                          <div className="post_buttons">
                            <div className="post_button">
                              <a href="#" className="sc_button sc_button_square sc_button_style_filled sc_button_bg_link sc_button_size_small">LEARN MORE</a>
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
                        <a href="#">Entrepreneurship 101:  Who is your customer?</a>
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
                          <a href="#">Entrepreneurship 101:  Who is your customer?</a>
                        </h4>
                        <div className="post_descr">
                          <p>
                            <a href="#">Quisque a nulla eget ante vestibulum lacinia eu quis massa.</a>
                          </p>
                          <div className="post_buttons">
                            <div className="post_button">
                              <a href="#" className="sc_button sc_button_square sc_button_style_filled sc_button_bg_link sc_button_size_small">LEARN MORE</a>
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
                      <a href="#">
                        <img alt="Evaluating Social Programs" src="assets/images/masonry_04-400x400.jpg" />
                      </a>
                      <h4 className="post_title">
                        <a href="#">Evaluating Social Programs</a>
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
                          <a href="#">Evaluating Social  Programs</a>
                        </h4>
                        <div className="post_descr">
                          <p>
                            <a href="#">Nunc finibus vestibulum dui a fringilla. Maecenas maximus in massa sit amet maximus.</a>
                          </p>
                          <div className="post_buttons">
                            <div className="post_button">
                              <a href="#" className="sc_button sc_button_square sc_button_style_filled sc_button_bg_link sc_button_size_small">LEARN MORE</a>
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
                      <a href="#">
                        <img alt="Principles of Written English, Part 1" src="assets/images/masonry_05-400x400.jpg" />
                      </a>
                      <h4 className="post_title">
                        <a href="#">Principles of Written English, Part 1</a>
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
                          <a href="#">Principles of Written English, Part 1</a>
                        </h4>
                        <div className="post_descr">
                          <p>
                            <a href="#">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</a>
                          </p>
                          <div className="post_buttons">
                            <div className="post_button">
                              <a href="#" className="sc_button sc_button_square sc_button_style_filled sc_button_bg_link sc_button_size_small">LEARN MORE</a>
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
                      <a href="#">
                        <img alt="Introduction to Biomedical Imaging" src="assets/images/masonry_03-400x400.jpg" /></a>
                      <h4 className="post_title">
                        <a href="#">Introduction to Biomedical Imaging</a>
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
                          <a href="#">Introduction to Biomedical Imaging</a>
                        </h4>
                        <div className="post_descr">
                          <p>
                            <a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit</a>
                          </p>
                          <div className="post_buttons">
                            <div className="post_button">
                              <a href="#" className="sc_button sc_button_square sc_button_style_filled sc_button_bg_link sc_button_size_small">LEARN MORE</a>
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
                      <a href="#">
                        <img alt="Introduction to Computer  Science" src="assets/images/masonry_02-400x400.jpg" />
                      </a>
                      <h4 className="post_title">
                        <a href="#">Introduction to Computer  Science</a>
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
                          <a href="#">Introduction to Computer  Science</a>
                        </h4>
                        <div className="post_descr">
                          <p>
                            <a href="#">Sed interdum felis diam, vitae rutrum urna laoreet vehicula.</a>
                          </p>
                          <div className="post_buttons">
                            <div className="post_button">
                              <a href="#" className="sc_button sc_button_square sc_button_style_filled sc_button_bg_link sc_button_size_small">LEARN MORE</a>
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
      <Partners/>
       
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
