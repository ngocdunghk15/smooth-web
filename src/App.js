// import internal files
import './App.css';
import Homepage from './pages'
// import from outside lib
import { BrowserRouter as Router } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Homepage />
    </Router>
  );
}

export default App;
