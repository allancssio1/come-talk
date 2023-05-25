import { useEffect, useState } from "react";
import io from "socket.io-client";
import { v4 as id } from "uuid";

const myId = id();
const socket = io("http://localhost:3000");
socket.on("connect", () => console.log("io new Connection"));

export const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const handleNewMessage = (newMessage) => {
      console.log(
        "🚀 ~ file: Chat.jsx:15 ~ handleNewMessage ~ newMessage:",
        newMessage,
      );
      setMessages([...messages, newMessage]);
    };

    socket.on("receivedMessage", handleNewMessage);

    return () => socket.off("sendMessage", handleNewMessage);
  }, [messages]);

  const handleMessage = (event) => setMessage(event.target.value);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (message.trim()) {
      socket.emit("sendMessage", {
        id: myId,
        message,
      });
      setMessage("");
    }
  };

  return (
    <main className="container">
      <div className="container__users">
        <ul className="users">
          <li className="list__item">
            <span className="user">
              <button>Allan</button>
            </span>
          </li>
          <li className="list__item">
            <span className="user">
              <button>Roberto Cavalcante</button>
            </span>
          </li>
          <li className="list__item">
            <span className="user">
              <button>Fernando</button>
            </span>
          </li>
        </ul>
      </div>
      <div className="container__messages">
        <ul className="list">
          {messages.map((item) => {
            console.log("🚀 ~ file: Chat.jsx:64 ~ {messages.map ~ item:", item);
            return (
              <li
                className={`list__item list__item--${
                  item.id === myId ? "mine" : "other"
                }`}
                key={item.id}
              >
                <span
                  className={`message message--${
                    item.id === myId ? "mine" : "other"
                  }`}
                >
                  {item.message}
                </span>
              </li>
            );
          })}
        </ul>
        <form className="form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="form__field"
            placeholder="Enviar nova mensagem"
            onChange={handleMessage}
            value={message}
          />
        </form>
      </div>
    </main>
  );
};
