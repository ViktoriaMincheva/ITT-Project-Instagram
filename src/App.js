import "./App.css";
import {
  Route,
  Routes,
} from "react-router-dom";
import ErrorPage from "./screens/ErrorPage";
import RegisterPage from "./screens/RegisterPage";
import MyProfile from "./screens/MyProfile";
import Home from "./screens/Home";
import Header from "./components/Header";
import Inbox from "./screens/Inbox";
import ExplorePage from "./screens/ExplorePage";
import LoginPage from "./screens/LoginPage";
import SettingsMenu from "./components/SettingsMenu";
import EditProfile from "./components/EditProfile";
import ChangePassword from "./components/ChangePassword";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword';
import UserProfile from "./screens/UserProfile";

function App() {
  return (
    <AuthProvider>
      <div className="App">

        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/" element={<PrivateRoute/>} >
            <Route path="/" element={<><Header /> <Home /></> } />
            <Route path="/inbox" element={<><Header /> <Inbox /></>} />
            <Route path="/explore" element={<><Header /> <ExplorePage /></>} />
            <Route path="/my-profile" element={<><Header /> <MyProfile /></>} />
            <Route path="/users/:pid" element={<><Header /> <UserProfile /></>} />
            <Route path="/edit" element={<><Header /> <div className="settings"> <SettingsMenu /> <EditProfile /> </div></>} />
            <Route path="/changepass" element={<><Header /> <div className="settings"> <SettingsMenu /> <ChangePassword /> </div></>} />
            <Route path="*" element={<><Header /> <ErrorPage /></>} />
          </Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
