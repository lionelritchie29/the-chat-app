import { useEffect, useState } from "react";
import { socket } from "./socket";
import ConnectionStateBanner from "./components/ConnectionStateBanner";

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
    </main>
  );
}

export default App;
