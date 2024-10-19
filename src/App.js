import './App.css';
import Header from './Components/Header';
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'

//pages
import Home from './Pages/Home/index'
import About from './Pages/About/index'


function App() {
  return (
    <div className="App">
      
      <Router>

        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
