import useAuth from "@/hooks/useAuth";
import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NeedAuth({ children }: { children: ReactNode }) {
  const { isLoggedOut: isNotLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isNotLoggedIn) {
      navigate("/auth");
      return;
    }
  }, [navigate, isNotLoggedIn]);

  return children;
}
