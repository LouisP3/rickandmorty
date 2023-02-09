
import './App.css';
import Header from './componenets/Header/Header';
import Homepage from './pages/Homepage/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/Homepage/About/About';
import CharacterDetails from './pages/CharacterDetails/CharacterDetails';
import UserContextProvider from './Contexts/UserContext';
import ThemeContextProvider from './Contexts/ThemeContext';


function App() {
  return (
    <BrowserRouter>
    <ThemeContextProvider>
    <UserContextProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />}  />
        <Route path='/about' element={<About />}  />
        <Route path='/details/:id' element={<CharacterDetails />}  />
      </Routes>
      </UserContextProvider>
      </ThemeContextProvider>
      
    </BrowserRouter>
  );
}

export default App;
