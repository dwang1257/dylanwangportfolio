import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element = {<Home />} />
          <Route path = '/projects' element = {<Projects />} />
          <Route path = '/about' element = {<About />} />
          <Route path = '/contact' element = {<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
