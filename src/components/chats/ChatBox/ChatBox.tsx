import cn from "classnames";

interface IProps {
  widthClass: string;
}

export default function ChatBox({ widthClass }: IProps) {
  return <section className={cn(widthClass, "bg-gray-200")}>Chat Box</section>;
}
