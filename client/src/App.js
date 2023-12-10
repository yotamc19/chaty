import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { LandingPage } from "./pages/landingPage/LandingPage";
import { ChatPage } from "./pages/chatPage/ChatPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" component={<LandingPage />} />
        <Route path="/chat" component={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
