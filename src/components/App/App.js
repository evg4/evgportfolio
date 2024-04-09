
import './App.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Root from '../Root/Root';
import About from '../About/About';
import Projects from '../Projects/Projects';

const router = createBrowserRouter(createRoutesFromElements(
  <> 
    <Route path="/" element={<Root/>}>
      
      <Route path='/projects' element={<Projects/>} />
    </Route>
  </>
))

function App() {
  return (
    <RouterProvider router={router} />
  );
}

/*function App() {
  return (
    <div className="App">
      <Nav/>
      <Projects/>
    </div>
  );
}*/

export default App;
