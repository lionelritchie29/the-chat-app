import { Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import LoadingOverlay from "./components/LoadingOverlay";
import AppSidebar from "./components/nav-sidebar/AppSidebar";

export default function Root() {
  const auth = useAuth();

  if (auth === undefined) {
    return <LoadingOverlay />;
  }

  return (
    <AppSidebar>
      <Outlet />
    </AppSidebar>
  );
}
