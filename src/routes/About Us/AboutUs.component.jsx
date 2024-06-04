import { images } from "../../constants";
import "./AboutUs.styles.scss";

const AboutUs = () => {
	return (
		<div className="app__aboutus app__bg flex__center section__padding" id="about">
			<div className="app__aboutus-overlay flex__center">
				<img src={images.MDL} alt="m letter" height={820} />
			</div>
			<div className="app__aboutus-content flex__center">
				<div className="app__aboutus-content_about">
					<h1 className="headtext__bodoni">About Us</h1>
					<img src={images.spoon} alt="about_spoon" className="spoon_img" />
					<p className="p__opensans">
						Welcome to Maison De Luxe, where culinary artistry meets an exceptional
						dining experience. Nestled in the heart of BGC, our restaurant offers a
						haven for food enthusiasts seeking exquisite flavors, impeccable service,
						and an ambiance of refined elegance..
					</p>
					<button type="button" className="custom__button">
						Know More
					</button>
				</div>

				<div className="app__aboutus-content_knife flex__center">
					<img src={images.knife} alt="about_knife" />
				</div>

				<div className="app__aboutus-content_history">
					<h1 className="headtext__bodoni">History</h1>
					<img src={images.spoon} alt="about_spoon" className="spoon_img" />
					<p className="p__opensans">
						The story of Maison De Luxe began in 2010, when Jacques Dupont, a passionate
						culinary visionary, embarked on a journey to create a dining destination
						unlike any other. Nestled in the charming town of BGC, our restaurant opened
						its doors with a mission to redefine the fine dining experience.
					</p>
					<button type="button" className="custom__button">
						Know More
					</button>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
