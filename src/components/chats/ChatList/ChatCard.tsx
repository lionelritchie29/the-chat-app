export default function ChatCard() {
  return (
    <button className="w-72 p-4 border-b flex items-center gap-4 hover:bg-gray-100">
      <div>
        <div className="h-12 w-12 rounded-full bg-blue-300"></div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between">
          <span className="truncate font-semibold">Participant Name</span>
          <span>13:10</span>
        </div>
        <p className="text-xs text-gray-600 text-left">Last msg snippet...</p>
      </div>
    </button>
  );
}
