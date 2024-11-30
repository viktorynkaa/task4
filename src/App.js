import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { InfoPage } from './components/InfoPage';
import { HomePage } from './components/HomePage';
import { CVETwentyDaysPage } from './components/CVETwentyDaysPage';
import { NewCVEPage } from './components/NewCVEPage';
import { KnownCVEPage } from './components/KnownCVEPage';
import { CVEByKeywordPage } from './components/CVEByKeyword';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/info' element={<InfoPage />}/>
          <Route path='/cve-twenty-days' element={<CVETwentyDaysPage />}/>
          <Route path='/new-cve' element={<NewCVEPage />}/>
          <Route path='/known-cve' element={<KnownCVEPage />}/>
          <Route path='/query-cve' element={<CVEByKeywordPage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
