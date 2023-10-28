import cn from "classnames";
import ChatCard from "./ChatCard";

interface IProps {
  widthClass: string;
}

export default function ChatList({ widthClass }: IProps) {
  return (
    <section className={cn(widthClass, "flex flex-col")}>
      <div className="p-6 border-b font-bold">All Chats</div>

      <ul className="flex-1 overflow-y-auto">
        {Array.from({ length: 20 }).map((_, index) => (
          <ChatCard key={index} />
        ))}
      </ul>
    </section>
  );
}
