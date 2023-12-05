import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChatPage } from './pages/chatPage/ChatPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ChatPage />
      </header>
    </div>
  );
}

export default App;