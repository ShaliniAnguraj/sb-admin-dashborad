import { BrowserRouter, Route, Routes } from "react-router-dom";
import Account from "./Components/Account";
import Login from "./Components/Login";
import Password from "./Components/Password";
import Portal from "./Components/Portal";
import Userlist from "./Components/Userlist";
import "./App.css";
import "./Components/sb-admin-2.min.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portal />}></Route>
        <Route path="/userlist" element={<Userlist />}></Route>

        <Route path="/login" element={<Login />} />
        <Route path="/password" element={<Password />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
