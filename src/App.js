import './style.css'
import Hero from './components/Hero';
import Skill from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
	return (
		<div>
			<Hero />
			<Skill />
			<Project />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
