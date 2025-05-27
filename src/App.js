import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element = {<Home />} />
          <Route path = '/experience' element = {<Experience />} />
          <Route path = '/about' element = {<About />} />
          <Route path = '/contact' element = {<Contact />} />
          <Route path = '/projects' element = {<Projects />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
