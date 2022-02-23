import "./App.css";
import {
  Route,
  Routes,
} from "react-router-dom";
import ErrorPage from "./screens/ErrorPage/ErrorPage";
import LoginPage from "./screens/AuthPages/LoginPage";
import RegisterPage from "./screens/AuthPages/RegisterPage";
import Home from "./screens/HomePage/Home";
import Header from "./components/Header";
import MyProfile from "./screens/Profiles/LoggedUserProfile";
import Inbox from "./screens/InboxPage/Inbox";
import ExplorePage from "./screens/ExplorePage/ExplorePage";
import SettingsMenu from "./screens/SettingsPage/SettingsMenu";
import EditProfile from "./screens/SettingsPage/EditProfile";
import ChangePassword from "./screens/SettingsPage/ChangePassword";
import { AuthProvider } from "./database/AuthContext";
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './screens/AuthPages/ForgotPassword';
import UserProfile from "./screens/Profiles/UserProfile";

function App() {
  return (
    <AuthProvider>
      <div className="App">

        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route exact path="/" element={<PrivateRoute/>} >
            <Route path="/" element={<><Header /> <Home /></> } />
            <Route path="/inbox" element={<><Header /> <Inbox /></>} />
            <Route path="/explore" element={<><Header /> <ExplorePage /></>} />
            <Route path="/my-profile" element={<><Header /> <MyProfile /></>} />
            <Route exact path="/users/:pid" element={<><Header /> <UserProfile /></>} />
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
