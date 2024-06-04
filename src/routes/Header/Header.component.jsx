import { images } from "../../constants";
import SubHeading from "../../components/Subheading/SubHeading.component";
import "./Header.styles.component.scss";

const Header = () => {
	return (
		<div className="app__header app__wrapper section__padding" id="home">
			<div className="app__wrapper_info">
				<SubHeading title="Chase the new flavour" />
				<h1 className="app__header-h1">The Key To Fine Dining</h1>
				<p className="p__opensans" style={{ margin: "2rem 0" }}>
					Rated as one of the best fine dine restaurant in the Philippines, Maison De Luxe
					currently has twenty-one locations worldwide. We pride ourselves in our renowned
					A5 Kobe steaks, fresh seafood and award-winning wine cellar.
				</p>
				<button type="button" className="custom__button">
					Explore Menu
				</button>
			</div>

			<div className="app__wrapper_img">
				<img src={images.steak} alt="header_img" />
			</div>
		</div>
	);
};

export default Header;
