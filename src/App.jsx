import { Routes, Route } from 'react-router-dom';
import Layout from './components/shared/Layout';
import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* Single Page App - Sections are handled via anchor links */}
      </Route>
    </Routes>
  );
}

export default App;
