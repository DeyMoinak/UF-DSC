import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//Components
import HomePage from './Components/HomePage';
import TechnologyPage from './Components/TechnologyPage';

function App() {
  return (
    <div class="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/projects" element={<TechnologyPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
