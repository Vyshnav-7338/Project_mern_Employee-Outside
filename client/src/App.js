import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import RegistrationForm from "./Components/RegistrationForm/RegistrationForm";
import Complaints from "./Components/Complaints/Complaints";
import ContactUs from "./Components/Contact us/ContactUs";
import About from "./Components/About/About";
import Page404 from "./Components/404Page/Page404";
import UserDetails from "./Components/UserDetails/UserDetails";
import Admin from "./Admin/Admin";
import VerifyData from "./Admin/VerifyData";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/RegisterForm" element={<RegistrationForm />} />
        <Route path="/Complaints" element={<Complaints />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/About" element={<About />} />
        <Route path="/user" element={<UserDetails />} />
        <Route path="/verifyData" element={<VerifyData />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
