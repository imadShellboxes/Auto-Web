import { Route, Routes } from 'react-router-dom';
import './App.css';
import Welcome from './Components/welcome';

const App = () => {
  return (  
    <Routes>
      <Route path='/' element={<Welcome/>}/>
    </Routes>
  );
}
 
export default App;