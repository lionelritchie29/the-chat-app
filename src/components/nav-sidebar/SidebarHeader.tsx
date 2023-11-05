import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useAuth from "@/hooks/useAuth";
import { cn } from "@/lib/utils";

interface IProps {
  className: string;
}

export default function SidebarHeader({ className }: IProps) {
  const user = useAuth();

  return (
    <div className={cn("flex items-center space-x-3 p-4", className)}>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div className="font-semibold">{user?.displayName}</div>
    </div>
  );
}
