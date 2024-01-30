// import logo from "./logo.svg";
// import "./App.css";
import "./css/style.scss";

import Goicon from "./compontents/global/Goicon";

import Header from "./compontents/global/Header";
import Landing from "./compontents/global/Landing";
import Features from "./compontents/global/Features";
import Acquaintance from "./compontents/global/Acquaintance";
import About from "./compontents/global/About";
import Downapp from "./compontents/global/Downapp";
import Blogs from "./compontents/global/Blogs";
import Contact from "./compontents/global/Contact";
import Footer from "./compontents/global/Footer";

function App() {
    return (
        <>
            <Goicon />
            <Header />
            <Landing />
            <Features />
            <Acquaintance />
            <About />
            <Downapp />
            <Blogs />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
