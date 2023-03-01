import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
//icons
import "primeicons/primeicons.css";
import { Signin } from "./screens/Singin/Signin";
import { Navbar } from "./component/Navbar/Navbar";
import { Footer } from "./component/Footer/Footer";
import { Profile } from "./screens/profile/Profile";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/nafes" exact element={<Signin />} />
          <Route path="/nafes/user"  element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
