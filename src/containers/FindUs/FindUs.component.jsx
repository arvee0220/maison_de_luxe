import SubHeading from "../../components/Subheading/SubHeading.component";
import { images } from "../../constants";

const FindUs = () => (
	<div className="app__bg app__wrapper section__padding" id="contact">
		<div className="app__wrapper_info">
			<SubHeading title="Contact" />
			<h1 className="headtext__bodoni" style={{ marginBottom: "3rem" }}>
				Find Us
			</h1>
			<div className="app__wrapper-content">
				<p className="p__opensans">
					LG/F One Bonifacio High Street, Bonifacio Global City, Taguig City
				</p>
				<p className="p__bodoni" style={{ color: "#DCCA87", margin: "2rem 0" }}>
					Opening Hours
				</p>
				<p className="p__opensans">Mon - Fri: 11:00 am - 08:00 pm</p>
				<p className="p__opensans">Sat - Sun: 03:00 pm - 12:00 am</p>
			</div>
			<button type="button" className="custom__button" style={{ marginTop: "2rem" }}>
				Visit Us
			</button>
		</div>

		<div className="app__wrapper_img">
			<img src={images.loc} alt="finus_img" />
		</div>
	</div>
);

export default FindUs;
