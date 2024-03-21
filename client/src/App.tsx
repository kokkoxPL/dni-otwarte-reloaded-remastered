import { BrowserRouter, Routes, Route } from 'react-router-dom';

//COMPONENTS
import Navbar from './components/Navbar';
import Index from './components/Index';
import Quiz from './components/Quiz';
import Footer from './components/Footer';
import Config from './components/Config';
import Admin from './components/Admin';
import ResultsTable from './components/ResultsTable';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/results" element={<ResultsTable overflow="hide" />} />
				<Route
					path="*"
					element={
						<>
							<Navbar />
							<Routes>
								<Route path="/" element={<Index />} />
								<Route path="/quiz" element={<Quiz />} />
								<Route path="/config" element={<Config />} />
								<Route path="/edgar" element={<Admin />} />
							</Routes>
							<Footer />
						</>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
