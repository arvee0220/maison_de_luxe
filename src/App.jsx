import "./App.css";
import AboutUs from "./routes/About Us/AboutUs.component";
import Header from "./routes/Header/Header.component";
import Navigation from "./routes/Navigation/Navigation.component";
import Menu from "./routes/Menu/Menu.component";
import Chef from "./routes/Chef/Chef.component";
import Intro from "./routes/Intro/Intro.component";
import Laurels from "./routes/Laurels/Laurels.component";

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
		</>
	);
};

export default App;
