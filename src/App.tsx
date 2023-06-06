import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import MovieMain from './Pages/MovieMain';
import MovieDetail from './Pages/MovieDetail';
import Footer from './Components/Footer';

import './style/css/App.css';


function App() {
    return (    
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path='/' element={<MovieMain />}/>
                    <Route path='/detail' element={<MovieDetail />}/>
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
