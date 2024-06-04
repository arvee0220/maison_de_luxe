import { images } from "../../constants";
import "./AboutUs.styles.scss";

const AboutUs = () => {
	return (
		<div className="app__aboutus app__bg flex__center section__padding" id="about">
			<div className="app__aboutus-overlay flex__center">
				<img src={images.MDL} alt="mdl letter" height={820}/>
			</div>
			<div className="app__aboutus-content flex__center">
				<div className="app__aboutus-content_about">
					<h1 className="headtext__bodoni"></h1>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;