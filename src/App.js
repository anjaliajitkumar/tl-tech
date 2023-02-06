import './App.css';
import { Route, Routes} from "react-router-dom"
import Form from './components/Form'
import Forms from './components/Forms';
import Map from './components/Map';
import Work from './components/Work'
import Details from './components/Details';
import Joblist from './components/Joblist';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form/>} />
        <Route path="/forms" element={<Forms/>} />
        <Route path="/map" element={<Map/>} />
        <Route path="/joblist" element={<Joblist/>} />
        <Route path="/details" element={<Details/>} />
        <Route path="/work" element={<Work/>} />
      </Routes>
    </div>
  );
}

export default App;
