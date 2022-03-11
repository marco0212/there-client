import { createContext, FC, useContext, useEffect, useState } from "react";
import { initializeApp, FirebaseError } from "firebase/app";
import {
  AuthErrorCodes,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useApolloClient } from "@apollo/client";

const firebaseConfig = {
  apiKey: "AIzaSyDIjcVu9ZtEye4lEnDuCn4gQ8pGdhlodbE",
  authDomain: "there-ba25f.firebaseapp.com",
  databaseURL:
    "https://there-ba25f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "there-ba25f",
  storageBucket: "there-ba25f.appspot.com",
  messagingSenderId: "308849677392",
  appId: "1:308849677392:web:a644c8a4ffb90e13c5ad55",
  measurementId: "G-DE50Y98R19",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

type User = {
  id: string;
  displayName?: string | null;
  phoneNumber?: string | null;
  photo?: string | null;
};

type AccountContextValue = {
  loading: boolean;
  isLoggedIn: boolean;
  login(email: string, password: string): Promise<void>;
  logout(): void;
  user: User | null;
  isCheckedUser: boolean;
};

const Context = createContext<AccountContextValue | null>(null);

export const AccountProvider: FC = ({ children }) => {
  const [isCheckedUser, setIsCheckedUser] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const client = useApolloClient();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currnetUser) => {
      if (!currnetUser) {
        setUser(null);
        setIsCheckedUser(true);
        return;
      }

      setUser({
        id: currnetUser.uid,
        displayName: currnetUser.displayName,
        phoneNumber: currnetUser.phoneNumber,
        photo: currnetUser.photoURL,
      });
      setIsCheckedUser(true);
    });

    return () => {
      unsubscribe();
    };
  }, [setUser, setIsCheckedUser]);

  const login = async (email: string, password: string) => {
    setIsLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      const token = await user.getIdToken();

      localStorage.setItem("token", token);

      setUser({
        id: user.uid,
        displayName: user.displayName,
        phoneNumber: user.phoneNumber,
        photo: user.photoURL,
      });
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case AuthErrorCodes.USER_DELETED:
            throw new Error("존재하지 않는 유저입니다");
          case AuthErrorCodes.INVALID_PASSWORD:
            throw new Error("잘못된 비밀번호입니다\n비밀번호를 확인해주세요");
        }
        throw new Error("로그인에 실패하였습니다");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    await auth.signOut();
    client.resetStore();
  };

  const isLoggedIn = Boolean(user);

  return (
    <Context.Provider
      value={{
        loading: isLoading,
        isLoggedIn,
        login,
        user,
        isCheckedUser,
        logout,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export function useAccountContext() {
  const context = useContext(Context);

  if (!context) {
    throw new Error("Not found context");
  }

  return context;
}
