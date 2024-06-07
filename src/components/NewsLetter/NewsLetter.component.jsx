import SubHeading from "../Subheading/SubHeading.component";
import "./NewsLetter.styles.scss";

const NewsLetter = () => {
	return (
		<div className="app__newsletter">
			<div className="app__newsletter-heading">
				<SubHeading title="Newsletter" />
				<h1 className="headtext__bodoni">Subscribe To Our Newsletter</h1>
				<p className="p__opensans">And Never Miss Latest Updates</p>
			</div>
			<div className="app__newsletter-input flex-center">
				<input type="email" placeholder="Enter your email address" />
				<button className="custom__button">Subscribe</button>
			</div>
		</div>
	);
};

export default NewsLetter;
