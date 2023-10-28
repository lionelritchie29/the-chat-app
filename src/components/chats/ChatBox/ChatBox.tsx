import cn from "classnames";

interface IProps {
  widthClass: string;
}

export default function ChatBox({ widthClass }: IProps) {
  return (
    <section className={cn(widthClass, "flex flex-col")}>
      <div className="p-4 border-b flex gap-2 items-center">
        <div className="h-9 w-9 rounded-full bg-blue-300"></div>
        <div className="font-semibold">Participant name</div>
      </div>

      <div className="flex-1"></div>

      <div className="border-t">
        <textarea
          rows={4}
          className="resize-none p-4 w-full outline-none"
          placeholder="Type a message..."
        />
        <div className="text-right border-t p-1">
          <button className="text-blue-600 hover:text-blue-700 p-2 font-semibold">
            Send
          </button>
        </div>
      </div>
    </section>
  );
}
