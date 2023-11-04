import { GoogleLogin } from "@react-oauth/google";
import {
  GoogleAuthProvider,
  browserLocalPersistence,
  setPersistence,
  signInWithCredential,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Auth() {
  const navigate = useNavigate();

  const onAuthSuccess = async (authToken: string | undefined) => {
    const credential = GoogleAuthProvider.credential(authToken);

    try {
      await setPersistence(auth, browserLocalPersistence);
      await signInWithCredential(auth, credential);
      navigate("/");
    } catch {
      alert("Something went wrong when trying to sign in.");
    }
  };

  return (
    <section className="bg-blue-600 w-full min-h-screen flex items-center justify-center">
      <div className="border rounded-lg p-4 bg-white">
        <div>
          <h1 className="text-lg">
            Welcome to <b>The Chat App</b>
          </h1>
          <p className="text-gray-600">Please authenticate to continue</p>
        </div>

        <div className="mt-5">
          <GoogleLogin
            onSuccess={(response) => onAuthSuccess(response.credential)}
            onError={() => {
              alert("Login failed");
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Auth;
