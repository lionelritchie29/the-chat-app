import { useEffect, useState } from "react";
import { socket } from "./socket";
import ConnectionStateBanner from "./components/ConnectionStateBanner";
import "./index.css";
import ChatList from "./components/chats/ChatList/ChatList";
import ChatBox from "./components/chats/ChatBox/ChatBox";

function App() {
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    socket.on("connect", () => setConnected(true));
    socket.on("disconnect", () => setConnected(false));

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);

  return (
    <main className="min-h-screen">
      <ConnectionStateBanner connected={connected} />

      <section className="flex divide-x h-full">
        <ChatList widthClass="w-72" />
        <ChatBox widthClass="flex-grow" />
      </section>
    </main>
  );
}

export default App;
