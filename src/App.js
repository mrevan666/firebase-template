import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import MainLayout from "./components/MainLayout";
import AuthLayout from "./components/AuthLayout";
import Update from "./pages/Update";


function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home/>}/>
            <Route path="/update" element={<Update />}/>
          </Route>
          
          <Route path="/" element={<AuthLayout />}>
            <Route path="/sign-up" element={<SignUp/>}/>
            <Route path="/sign-in" element={<SignIn/>}/>
            <Route path="/forgot-password" element={<ForgotPassword/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
