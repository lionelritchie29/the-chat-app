import "../index.css";
import ChatList from "../components/chats/ChatList/ChatList";
import ChatBox from "../components/chats/ChatBox/ChatBox";
import useFetchParticipants from "../hooks/data-fetching/useFetchChatList";

function Index() {
  const { data: participants } = useFetchParticipants();
  console.log({ participants });

  return (
    <main>
      <section className="flex divide-x h-screen">
        <ChatList widthClass="w-fit" />
        <ChatBox widthClass="flex-grow" />
      </section>
    </main>
  );
}

export default Index;
