import { useNavigate } from "react-router-dom";

export function useTabNavigation() {
  const navigate = useNavigate();

  const moveToHome = () => {
    navigate("/");
  };

  const moveToPhotos = () => {
    navigate("/photos");
  };

  return {
    moveToHome,
    moveToPhotos,
  };
}
