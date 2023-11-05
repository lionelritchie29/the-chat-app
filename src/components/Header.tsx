import useAuth from "../hooks/useAuth";

export default function Header() {
  const { currentUser } = useAuth();

  return (
    <div className="p-4 h-12 border-b flex items-center justify-between">
      <div>
        Hi, <b>{currentUser?.displayName || "Unknown User"}</b>
      </div>

      <button className="text-blue-600 hover:text-blue-700 font-semibold">
        Sign out
      </button>
    </div>
  );
}
