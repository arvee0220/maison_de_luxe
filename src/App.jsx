import "./App.css";
import AboutUs from "./routes/About Us/AboutUs.component";
import Header from "./routes/Header/Header.component";
import Navigation from "./routes/Navigation/Navigation.component";
import Menu from "./routes/Menu/Menu.component";
import Chef from "./routes/Chef/Chef.component";

const App = () => {
	return (
		<>
			<Navigation />
			<Header />
			<AboutUs />
			<Menu />
			<Chef/>
		</>
	);
};

export default App;
