import useAuth from "@/hooks/useAuth";
import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NeedAuth({ children }: { children: ReactNode }) {
  const user = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/auth");
      return;
    }
  }, [navigate, user]);

  return children;
}
