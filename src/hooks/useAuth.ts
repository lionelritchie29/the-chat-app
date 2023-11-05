import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useSignal } from "@preact/signals-react";
import { useEffect } from "react";

const useAuth = () => {
  const currentUser = useSignal<User | null | undefined>(undefined);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      currentUser.value = user;
    });
  }, [currentUser]);

  return currentUser.value;
};

export default useAuth;
