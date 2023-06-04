import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3000/chat");
socket.on("connection", () => {});

export const Chat = () => {
  const { id } = useParams();
  const [message, setMessage] = useState("");
  const [receivedId, setReceivedId] = useState("");
  const [messages, setMessages] = useState([]);
  const socket = io("http://localhost:3000");

  useEffect(() => {
    const handleNewMessage = (newMessage) => {
      setMessages([...messages, newMessage]);
    };

    socket.on(`receivedMessage`, handleNewMessage);

    return () => socket.off("sendMessage", handleNewMessage);
  }, [messages]);

  const handleMessage = (event) => setMessage(event.target.value);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (message.trim()) {
      socket.emit("sendMessage", {
        sendId: id,
        receivedId,
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
                  item.id === id ? "mine" : "other"
                }`}
                key={item.id}
              >
                <span
                  className={`message message--${
                    item.id === id ? "mine" : "other"
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
