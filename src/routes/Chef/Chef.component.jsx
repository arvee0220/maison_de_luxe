import SubHeading from "../../components/Subheading/SubHeading.component";
import { images } from "../../constants";
import "./Chef.styles.scss";

const Chef = () => {
	return (
		<div className="app__bg app__wrapper section__padding">
			<div className="app__wrapper_img app__wrapper__img-reverse">
				<img src={images.chef} alt="" />
			</div>

			<div className="app__wrapper_info">
				<SubHeading title="Chef's word" />
				<h1 className="headtext__bodoni">What We Believe In</h1>

				<div className="app__chef-content">
					<div className="app__chef-content_quote">
						<img src={images.quote} alt="quote" />
						<p className="p__opensans">
							At Maison De Luxe, we believe in the art of culinary excellence, where
							every dish is crafted with the finest ingredients and meticulous
							attention to detail.
						</p>
					</div>
					<p className="p__opensans">
						Our commitment to tradition and innovation ensures that we honor the rich
						heritage of French cuisine while continually seeking to elevate the dining
						experience. We take pride in offering exceptional service, creating an
						atmosphere of elegance and warmth that makes every visit memorable. Our
						passion for quality, authenticity, and hospitality defines who we are and
						drives everything we do.
					</p>
				</div>

				<div className="app__chef-sign">
					<p>Jacques Dupont</p>
					<p className="p__opensans">Chef & Founder</p>
					<img src={images.sign} alt="Chef Sign" />
				</div>
			</div>
		</div>
	);
};

export default Chef;
