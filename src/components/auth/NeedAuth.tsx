import useAuth from "@/hooks/useAuth";
import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NeedAuth({ children }: { children: ReactNode }) {
  const { isLoggedOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedOut) {
      navigate("/auth");
      return;
    }
  }, [navigate, isLoggedOut]);

  return !isLoggedOut && children;
}
