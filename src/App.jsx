import './App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home/Home';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Layout Component={Home} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
