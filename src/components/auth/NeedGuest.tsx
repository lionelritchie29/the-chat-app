import useAuth from "@/hooks/useAuth";
import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NeedGuest({ children }: { children: ReactNode }) {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
      return;
    }
  }, [navigate, isLoggedIn]);

  return !isLoggedIn && children;
}
