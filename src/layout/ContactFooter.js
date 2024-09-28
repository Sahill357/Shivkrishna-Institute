import React from 'react'

export default function ContactFooter() {
  return (
    <> 
    {/* Contacts Footer */}
    <footer className="contacts_wrap bg_tint_dark contacts_style_dark">
        <div className="content_wrap">
          <div className="logo">
            <a href="index-2.html">
            <img src="assets/images/white-bg.png" className="logo_main" alt style={{ width: '250px', height: 'auto', }} />
            </a>
          </div>
          <div className="contacts_address">
            <address className="address_right">
              Phone: <a href="tel:+18001234567">1.800.123.4567</a><br />
              Fax: <a href="tel:+18001234566">1.800.123.4566</a>
            </address>
            <address className="address_left">
             Maharashtra, India<br />	
              N-6 Cidco Aurangabad
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
    </ >
  )
}
