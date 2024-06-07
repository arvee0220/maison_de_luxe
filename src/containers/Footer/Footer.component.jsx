import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import FooterOverlay from "../../components/FooterOverlay/FooterOverlay.component";
import NewsLetter from "../../components/NewsLetter/NewsLetter.component";
import { images } from "../../constants";
import "./Footer.styles.scss";

const Footer = () => {
	return (
		<div className="app__footer section__padding">
			<FooterOverlay />
			<NewsLetter />

			<div className="app__footer-links">
				<div className="app__footer-links_contact">
					<h1 className="app__footer-headtext">Contact Us</h1>
					<p className="p__opensans">
						LG/F One Bonifacio High Street, Bonifacio Global City, Taguig City
					</p>
					<p className="p__opensans">+63285468135</p>
					<p className="p__opensans">+639157486549</p>
				</div>
				<div className="app__footer-links_logo">
					<img src={images.maison} alt="footer_logo" />
					<p className="p__opensans">
						&quot;Cooking is an art, but all art requires knowing something about the
						techniques and materials.&quot;
					</p>
					<img
						src={images.spoon}
						alt="spoon"
						className="spoon__img"
						style={{ marginTop: 15 }}
					/>
					<div className="app__footer-links_icons">
						<FiFacebook />
						<FiTwitter />
						<FiInstagram />
					</div>
				</div>
				<div className="app__footer-links_work">
                <h1 className="app__footer-headtext">Working Hours</h1>
				<p className="p__opensans">Monday-Friday:</p>
				<p className="p__opensans">08:00 am - 12:00 am</p>
				<p className="p__opensans">Saturday-Sunday:</p>
				<p className="p__opensans">07:00 am - 11:00 pm</p>
                </div>
			</div>

			<div className="footer__copyright">
				<p className="p__opensans">2024 Maison De Luxe. All Rights Reserved.</p>
			</div>
		</div>
	);
};

export default Footer;
