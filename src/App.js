// import internal files
import './App.css';
import Homepage from './pages'
import SigninPage from './pages/signin';

// import from outside lib
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} exact />
        <Route path="/signin" element={<SigninPage/>} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
