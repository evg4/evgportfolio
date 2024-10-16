import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import About from "../About/About";
import Courses from "../Courses/Courses";
import Projects from "../Projects/Projects";
import ProjectPage from "../ProjectPage/ProjectPage";
import JammmingLink from "../JammmingLink/JammmingLink";
import Blog from "../Blog/Blog";
import BlogPost from "../BlogPost/BlogPost";
import Contact from "../Contact/Contact";
import Story from "../Story/Story";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:title" element={<ProjectPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:title" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about/story" element={<Story/>}></Route>
      </Route>
      {/*<Route path="/projects/jammming" element={<JammmingLink />}></Route>*/}
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
