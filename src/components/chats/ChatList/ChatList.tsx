import cn from "classnames";

interface IProps {
  widthClass: string;
}

export default function ChatList({ widthClass }: IProps) {
  return <section className={cn(widthClass)}>Chat List</section>;
}
