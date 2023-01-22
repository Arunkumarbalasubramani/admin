import "./App.scss";
import {
  Sidebar,
  MainFeed,
  SearchBar,
  Animations,
  Borders,
  Buttons,
  Cards,
  Colors,
  ForgotPassword,
  Login,
  Other,
  Register,
  Tables,
  PageNotavailable,
  BlankPage,
  Charts,
} from "./components/exports.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="menu">
          <Sidebar />
        </div>
        <div className="main">
          <SearchBar />
          <Routes>
            <Route path="/" element={<MainFeed />} />
            <Route path="/animations" element={<Animations />} />
            <Route path="/borders" element={<Borders />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/colors" element={<Colors />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/login" element={<Login />} />
            <Route path="/others" element={<Other />} />
            <Route path="/register" element={<Register />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="*" element={<PageNotavailable />} />
            <Route path="/newPage" element={<BlankPage />} />
            <Route path="/charts" element={<Charts />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
