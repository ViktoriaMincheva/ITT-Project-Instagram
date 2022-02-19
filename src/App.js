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
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
