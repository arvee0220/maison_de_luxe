import "./App.css";
import AboutUs from "./routes/About Us/AboutUs.component";
import Header from "./routes/Header/Header.component";
import Navigation from "./routes/Navigation/Navigation.component";

const App = () => {
	return (
		<>
			<Navigation />
			<Header />
			<AboutUs />
		</>
	);
};

export default App;
