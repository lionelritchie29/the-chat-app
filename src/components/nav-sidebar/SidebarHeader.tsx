import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useAuth from "@/hooks/useAuth";

export default function SidebarHeader() {
  const user = useAuth();

  return (
    <div className="flex items-center space-x-3 p-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div className="font-semibold">{user?.displayName}</div>
    </div>
  );
}
