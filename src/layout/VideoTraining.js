import React from 'react'

export default function VideoTraining() {
  return (
    <> 
     {/* Video training section */}			
     <div className="sc_line sc_line_style_solid margin_top_0 margin_bottom_0" />
              <div className="sc_section" data-animation="animated fadeInUp normal">
                <div className="sc_content content_wrap margin_top_2_5em_imp margin_bottom_2_5em_imp ">
                  <div className="columns_wrap sc_columns columns_nofluid sc_columns_count_2">
                    <div className="column-1_2 sc_column_item sc_column_item_1 odd first res_width_100per_imp">
                      <h3 className="sc_title sc_title_iconed sc_align_left text_left">
                        <span className="sc_title_icon sc_title_icon_top sc_title_icon_medium icon-video-2" />
                        Our Video Training for Microsoft products and technologies
                      </h3>
                      <p>Mauris vitae quam ligula. In tincidunt sapien sed nibh scelerisque congue. Maecenas ut libero eu metus tincidunt lobortis. Duis accumsan at mauris vel lacinia.</p>
                      <a href="courses-streampage.html" className="sc_button sc_button_square sc_button_style_filled sc_button_bg_link sc_button_size_mini sc_button_iconed inherit margin_top_1em margin_bottom_4 margin_left_4">BROWSE COURSES</a>
                    </div>
                    <div className="column-1_2 sc_column_item sc_column_item_2 even res_width_100per_imp">
                      <div className="sc_video_player sc_video_bordered sc_video_st1">
                        <div className="sc_video_frame sc_video_play_button hover_icon hover_icon_play width_100per" data-width="100%" data-height={647} data-video="<iframe class=&quot;video_frame&quot; src=_http_/youtube.com/embed/636Dp8eHWnM5782.html?autoplay=1%22 width=&quot;100%&quot; height=&quot;647&quot; frameborder=&quot;0&quot; webkitAllowFullScreen=&quot;webkitAllowFullScreen&quot; mozallowfullscreen=&quot;mozallowfullscreen&quot; allowFullScreen=&quot;allowFullScreen&quot;></iframe>">
                          <img alt src="assets/images/douglas_adams_full-400x225.jpg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Video training section */}	
    </ >
  )
}
