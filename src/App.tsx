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
    <main>
      <ConnectionStateBanner connected={connected} />

      <section className="flex divide-x h-[calc(100vh-28px)]">
        <ChatList widthClass="w-fit" />
        <ChatBox widthClass="flex-grow" />
      </section>
    </main>
  );
}

export default App;
