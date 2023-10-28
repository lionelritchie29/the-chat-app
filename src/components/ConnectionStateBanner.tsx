interface IProps {
  connected: boolean;
}

export default function ConnectionStateBanner({ connected }: IProps) {
  return <div>{connected ? "Connected" : "Disconnected"}</div>;
}
