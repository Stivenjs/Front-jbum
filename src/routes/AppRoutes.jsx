import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Form } from "../Form";
import { App } from "../App";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
}
