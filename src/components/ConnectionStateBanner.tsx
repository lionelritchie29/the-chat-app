import cn from "classnames";

interface IProps {
  connected: boolean;
}

export default function ConnectionStateBanner({ connected }: IProps) {
  return (
    <div
      className={cn(
        "px-4 py-1 text-white text-sm",
        connected ? "bg-green-600" : "bg-red-600"
      )}
    >
      {connected ? "Connected" : "Disconnected"}
    </div>
  );
}
