import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Form } from "../Form";
import { Login } from "../Login";
import { Register } from "../Register";
import { App } from "../App";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/form" element={<Form />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
