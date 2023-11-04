import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { signal } from "@preact/signals-react";
import { useEffect } from "react";

const currentUser = signal<User | null | undefined>(undefined);

const useAuth = () => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      currentUser.value = user;
    });
  }, []);

  return currentUser.value;
};

export default useAuth;
