import React from "react";
import './footer.scss';
import FooterLogo from '../../media/logo-white.png';
import ISO from '../../media/cbimage.png';

function FooterSec() {
  return (
    <div className="footer-container">

      <div className="footer-box">
        <div className="footer-about-box">
          <div className="footer-info-container">
            <div className="footer-info-box">
              <div className="footer-socialLink-box">
                <div className="footerLogo">
                  <img src={FooterLogo} alt="Footer-logo" />
                </div>
                <div className="footer-socialLink-container">
                  <span><i class="fa fa-facebook-official" aria-hidden="true"></i></span>
                  <span><i class="fa fa-twitter-square" aria-hidden="true"></i></span>
                  <span><i class="fa fa-instagram" aria-hidden="true"></i></span>
                  <span><i class="fa fa-youtube-play" aria-hidden="true"></i></span>
                </div>
              </div>
              <div className="footer-address-box">
                <p>1110 Tower B, Brigade Signature Towers, </p>
                <p>Sannatammanahalli, Bengaluru, Karnataka </p>
                <p>562129.</p>
                <p>contact@ineuron.ai</p>
              </div>
            </div>

            <div className="footer-aboutUs-conatiner">
              <div className="footerBoxes">
                <div className="footer-company sameClass">Company</div>
                <div className="footer-company-details sameClass2">
                  <span>About Us</span>
                  <span>Blog</span>
                  <span>Success Stories</span>
                </div>
              </div>

              <div className="footerBoxes">
                <div className="footer-QuickLinks sameClass">Quicks Links</div>
                <div className="footer-QuickLinks-details sameClass2">
                  <div>Internship</div>
                  <div>iNeuron Vision</div>
                </div>
              </div>

              <div className="footerBoxes">
                <div className="footer-support sameClass">Support</div>
                <div className="footer-support-details sameClass2">
                  <div>Contact Us</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-iso-container">
          <div className="ISO-Logo-box">
            <div className="iso-logo">
              <img src={ISO} alt="ISO-Logo" />
              <div>ISO 9001</div>
            </div>
          </div>

          <div className="terms-condition-container">
            <div>&#169; iNeuron, Inc. 2021</div>
            <div>Terms & Condition | Privacy Policy</div>
          </div>
        </div>
      </div>

    </div>
  )
}


export default FooterSec;