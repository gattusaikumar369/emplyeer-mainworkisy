import Searchcandi from './components/Searchcandi'
import LoginPage from './components/Login'
import PostJob from './components/Postjob'
import ResdoxReport from './components/ResdoxReport'
import Jobreport  from './components/JobReport'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

import './App.css';

function App() {
  return (
    <Router>
 
      <Routes>
         <Route  path="/" element={<Home/>}/>
         <Route exact path="/postjob" element={<PostJob/>}/>
         <Route exact path="/search-candidates" element={<Searchcandi/>}/>
         <Route exact path="/login" element={<LoginPage/>}/>
         <Route exact path="/resodx" element={<ResdoxReport/>}/>
         <Route exact path="/job-report" element={<Jobreport/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
