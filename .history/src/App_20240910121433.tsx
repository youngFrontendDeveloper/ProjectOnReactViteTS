import {Routes, Route} from 'react-router-dom';


import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

export default function App() {  

  return (
    <>
     <Header />
     <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/favourites" element={<FavouritesPage />} />


            </Routes>
     <Footer />
    </>
  )
}


