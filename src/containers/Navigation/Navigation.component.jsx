import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navigation.styles.scss";

const navLinks = [
	{ href: "#home", text: "Home" },
	{ href: "#about", text: "About" },
	{ href: "#menu", text: "Menu" },
	{ href: "#awards", text: "Awards" },
	{ href: "#contact", text: "Contact" },
];

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<nav className="app__navbar">
			<div className="app__navbar-logo">
				<img src={images.maison} alt="app__logo" />
			</div>
			<ul className="app__navbar-links">
				{navLinks.map((link, index) => (
					<li className="p__opensans" key={index}>
						<a href={link.href}>{link.text}</a>
					</li>
				))}
			</ul>
			<div className="app__navbar-login">
				<a href="#login" className="p__opensans">
					Log In / Registration
				</a>
				<div />
				<a href="/" className="p__opensans">
					Book Table
				</a>
			</div>
			<div className="app__navbar-smallscreen">
				<GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
				{toggleMenu && (
					<div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
						<MdOutlineRestaurantMenu
							fontSize={27}
							className="overlay__close"
							onClick={() => setToggleMenu(false)}
						/>
						<ul className="app__navbar-smallscreen_links">
							{navLinks.map((link, index) => (
								<li key={index}>
									<a href={link.href} onClick={() => setToggleMenu(false)}>
										{link.text}
									</a>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
