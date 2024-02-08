import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import { Routes, Route } from "react-router-dom";

function App() {
  console.log(window.location); // pathname

  // let Component;

  // eslint-disable-next-line default-case
  // switch (window.location.pathname) {
  //   case "/":
  //     Component = Home;
  //     break;
  //   case "/about":
  //     Component = About;
  //     break;
  //   case "/profile":
  //     Component = Profile;
  //     break;
  // }

  return (
    <>
      <NavBar></NavBar>
      <h1>Frontend Journey</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
