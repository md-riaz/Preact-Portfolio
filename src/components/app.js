
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
import Testimonials from "./Testimonials";

const App = () => (
	<div id="app">
		<main class="text-gray-400 bg-gray-900 body-font">
			<Navbar />
			<About />
			<Projects />
			<Skills />
			<Testimonials />
			<Contact />
		</main>
	</div>
)

export default App;
