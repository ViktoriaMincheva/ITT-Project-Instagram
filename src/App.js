import './App.css';
import { BrowserRouter, HashRouter, Link, Route, Routes } from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import Login from './components/Login';
import Register from './components/Register';
import MyProfile from './components/MyProfile';
import Home from './components/Home';
import Header from './components/Header';
import Inbox from './components/Inbox';
import Explore from './components/Explore';



function App() {
  return (
    <>
    <Header />
    
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/" element={<Home />}/>
        <Route path="/inbox" element={<Inbox/>}/>
        {/* <Route path="/create-post" element={<CreatePost/>}/> */}
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="*" element={<ErrorPage/>} /> 
      </Routes>
      </>
  )
}

export default App;
