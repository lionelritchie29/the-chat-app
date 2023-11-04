import { Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import LoadingOverlay from "./components/LoadingOverlay";

export default function Root() {
  const auth = useAuth();

  if (auth === undefined) {
    return <LoadingOverlay />;
  }

  return <Outlet />;
}
