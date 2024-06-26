import "./App.scss";
import AboutUs from "./containers/About Us/AboutUs.component";
import Header from "./containers/Header/Header.component";
import Navigation from "./containers/Navigation/Navigation.component";
import Menu from "./containers/Menu/Menu.component";
import Chef from "./containers/Chef/Chef.component";
import Intro from "./containers/Intro/Intro.component";
import Laurels from "./containers/Laurels/Laurels.component";
import Gallery from "./containers/Gallery/Gallery.component";
import FindUs from "./containers/FindUs/FindUs.component";
import Footer from "./containers/Footer/Footer.component";

const App = () => {
	return (
		<>
			<Navigation />
			<Header />
			<AboutUs />
			<Menu />
			<Chef />
			<Intro />
			<Laurels />
			<Gallery />
			<FindUs />
			<Footer />
		</>
	);
};

export default App;
