import { createContext, FC, useContext, useState } from "react";

type PostSceneContext = {
  photos: string[];
  setPhotos(photos: string[]): void;
} | null;

const Context = createContext<PostSceneContext>(null);

export function usePostSceneContext() {
  const context = useContext(Context);

  if (!context) {
    throw new Error("Not found context");
  }

  return context;
}

export const PostSceneProvider: FC = ({ children }) => {
  const [photos, setPhotos] = useState<string[]>([]);
  return (
    <Context.Provider value={{ photos, setPhotos }}>
      {children}
    </Context.Provider>
  );
};
