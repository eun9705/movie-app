import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react'
import './style/css/App.css';
import Header from './Components/Header';
import ScrollTopButton from './Components/ScrollTopButton';
import MovieMain from './Pages/MovieMain';
import MovieDetail from './Pages/MovieDetail';
import Footer from './Components/Footer';
import NotFound from './Pages/NotFound';


function App() {
    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //       window.removeEventListener('scroll', handleScroll); //clean up
    //     };
    //   }, []);
    
    //   const handleScroll = () => {
    //     console.log('scrolled');
    //   };
    return (    
        <Router basename={process.env.PUBLIC_URL}>
            <div className="App">
                <Header />
                <ScrollTopButton />
                <Routes>
                    <Route path='/' element={<MovieMain />}/>
                    <Route path='/:keyword/:context' element={<MovieMain />}/>
                    <Route path='/detail/:movieId/:movieSeq' element={<MovieDetail />}/>
                    <Route path='/*' element={<NotFound />}/>
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
