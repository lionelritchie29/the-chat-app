import "../index.css";
import ChatList from "../components/chats/ChatList/ChatList";
import ChatBox from "../components/chats/ChatBox/ChatBox";
import Header from "../components/Header";

function Index() {
  return (
    <main>
      <Header />
      <section className="flex divide-x h-[calc(100vh-48px)]">
        <ChatList widthClass="w-fit" />
        <ChatBox widthClass="flex-grow" />
      </section>
    </main>
  );
}

export default Index;
