import "./App.css";
import AboutUs from "./routes/About Us/AboutUs.component";
import Header from "./routes/Header/Header.component";
import Navigation from "./routes/Navigation/Navigation.component";
import Menu from "./routes/Menu/Menu.component";

const App = () => {
	return (
		<>
			<Navigation />
			<Header />
			<AboutUs />
			<Menu />
		</>
	);
};

export default App;
