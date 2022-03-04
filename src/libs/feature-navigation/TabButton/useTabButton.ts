import houseIcon from "../../shared-ui/Icon/house-solid.svg";
import calendarIcon from "../../shared-ui/Icon/calendar-days-solid.svg";
import imageIcon from "../../shared-ui/Icon/image-solid.svg";
import gearIcon from "../../shared-ui/Icon/gear-solid.svg";
import { useNavigate, useMatch } from "react-router-dom";

const buttonVariation = {
  home: { icon: houseIcon },
  calendar: { icon: calendarIcon },
  photo: { icon: imageIcon },
  setting: { icon: gearIcon },
};

type Keys = keyof typeof buttonVariation;

type UseTabButtonProps = {
  kind: Keys;
  path: string;
};

export function useTabButton({ kind, path: pathProp }: UseTabButtonProps) {
  const navigate = useNavigate();

  const { icon } = buttonVariation[kind];

  const pathname = useMatch(pathProp)?.pathname ?? "";

  const moveToPath = () => {
    navigate(pathProp);
  };

  return { icon, isMatchPath: pathname === pathProp, moveToPath };
}
