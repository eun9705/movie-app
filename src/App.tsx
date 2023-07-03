import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style/css/App.css';
import Header from './Components/Header';
import ScrollTopButton from './Components/ScrollTopButton';
import MovieHome from './Pages/MovieHome';
import MovieSearch from './Pages/MovieSearch';
import MovieDetail from './Pages/MovieDetail';
import Footer from './Components/Footer';
import NotFound from './Pages/NotFound';


function App() {
    
    return (    
        <Router>
            <div className="App">
                <Header />
                <ScrollTopButton />
                <Routes>
                    <Route path='/' element={<MovieHome />}/>
                    <Route path='/search' element={<MovieSearch />}/>
                    <Route path='/detail/:movieId/:movieSeq' element={<MovieDetail />}/>
                    <Route path='/*' element={<NotFound />}/>
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
