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
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque saepe
						laudantium iste amet laborum! Odit doloribus distinctio nisi magnam quod
						nulla iste officia enim quidem provident animi aperiam sunt a reprehenderit
						itaque aut architecto eveniet explicabo veniam temporibus at, laboriosam
						placeat corrupti. Dolore veniam vero reprehenderit, quibusdam dicta iste
						totam.
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
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque saepe
						laudantium iste amet laborum! Odit doloribus distinctio nisi magnam quod
						nulla iste officia enim quidem provident animi aperiam sunt a reprehenderit
						itaque aut architecto eveniet explicabo veniam temporibus at, laboriosam
						placeat corrupti. Dolore veniam vero reprehenderit, quibusdam dicta iste
						totam.
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
