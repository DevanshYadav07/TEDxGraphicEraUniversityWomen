import "./App.css";
import FrontPage from "./components/FrontPage";
import Team from "./components/Team";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<FrontPage />}></Route>
            <Route path="/Team" element={<Team />}></Route>
        </Routes>
    );
}

export default App;
