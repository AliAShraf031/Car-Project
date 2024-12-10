import FooterCss from "./Footer.module.css";
import footerLogo from "../../assets/assignment-images/images/footer/logo-footer.png";
import phoneIcon from "../../assets/assignment-images/images/footer/call.png";
import facebookIcon from "../../assets/assignment-images/images/footer/facebook.png";
import instagramIcon from "../../assets/assignment-images/images/footer/instagram.png";
import locationIcon from "../../assets/assignment-images/images/footer/location.png";
import mailIcon from "../../assets/assignment-images/images/footer/sms.png";
import youtubeIcon from "../../assets/assignment-images/images/footer/youtube.png";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className={FooterCss.row}>
          <div className={FooterCss.col}>
            <img className={FooterCss.footerLogo} src={footerLogo} alt="" />
            <div className={FooterCss.item}>
              <img src={locationIcon} alt="" />
              <div className={FooterCss.address}>
                <span>25566 Hc 1, Glenallen,</span>
                <br />
                <span>Alaska, 99588, USA</span>
              </div>
            </div>
            <div className={FooterCss.item}>
              <img src={phoneIcon} alt="" />
              <span>1-800-123-4567</span>
            </div>
            <div className={FooterCss.item}>
              <img src={mailIcon} alt="" />
              <span>rentcars@gmail.com</span>
            </div>
          </div>
          <div className={FooterCss.col}>
            <span>Our Projects</span>
            <ul>
              <li>Career</li>
              <li>Car</li>
              <li>Package</li>
              <li>Features</li>
              <li>Priceline</li>
            </ul>
          </div>
          <div className={FooterCss.col}>
            <span>Our Projects</span>
            <ul>
              <li>Career</li>
              <li>Car</li>
              <li>Package</li>
              <li>Features</li>
              <li>Priceline</li>
            </ul>
          </div>
          <div className={FooterCss.col}>
            <span>Our Projects</span>
            <ul>
              <li>Career</li>
              <li>Car</li>
              <li>Package</li>
              <li>Features</li>
              <li>Priceline</li>
            </ul>
          </div>
          <div className={FooterCss.col}>
            <span>Follow Us</span>
            <div className={FooterCss.icons}>
              <img src={facebookIcon} alt="" />
              <img src={instagramIcon} alt="" />
              <img src={youtubeIcon} alt="" />
            </div>
          </div>
        </div>
        <hr />
        <div className={FooterCss.copyright}>
          <p>Copyright 2023 ・ Rentcars, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
