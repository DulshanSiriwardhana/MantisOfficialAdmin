import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Articles from './pages/articles/articles';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Messages from './pages/messages/messages';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="routercontainer">
          <Routes>
            <Route path='/MantisOfficialAdmin' element={<Articles/>}/>
            <Route path='/MantisOfficialAdmin/messages' element={<Messages/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
