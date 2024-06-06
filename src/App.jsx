import "./App.css";
import AboutUs from "./containers/About Us/AboutUs.component";
import Header from "./containers/Header/Header.component";
import Navigation from "./containers/Navigation/Navigation.component";
import Menu from "./containers/Menu/Menu.component";
import Chef from "./containers/Chef/Chef.component";
import Intro from "./containers/Intro/Intro.component";
import Laurels from "./containers/Laurels/Laurels.component";
import Gallery from "./containers/Gallery/Gallery.component";

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
		</>
	);
};

export default App;
