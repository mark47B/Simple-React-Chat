import "./App.css";
import { ChatEngine, getOrCreateChat } from "react-chat-engine";
import LoginForm from "./components/LoginForm";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");

  const createDirectChat = (creds) => {
    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [username] },
      () => setUsername("")
    );
  };

  const renderChatForm = (creds) => {
    return (
      <div style={{ marginBottom: "20px", marginTop: "10px", marginLeft: "10px", }}>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          style={{
            marginTop: "10px",
            marginLeft: "10px",
            padding: "5px 8px",
            backgroundColor: "#1890FF",
            borderRadius: "5px",
            cursor: "pointer",
            color: "white",
            borderWidth: "0px",
          }}
          onClick={() => createDirectChat(creds)}
        >
          Create
        </button>
      </div>
    );
  };

  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="37752325-3f2d-4e0e-8445-a0096ce27719"
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderNewChatForm={(creds) => renderChatForm(creds)}
      />
    </div>
  );
}

export default App;
