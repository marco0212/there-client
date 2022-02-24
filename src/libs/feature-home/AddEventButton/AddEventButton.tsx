import { bind } from "../../utils-structure";
import { AddEventModal } from "../AddEventModal";
import { PlusButton } from "../PlusButton";
import { useAddEventButton } from "./useAddEventButton";

export const AddEventButton = bind(
  useAddEventButton,
  ({ isOpenModal, openModal, closeModal }) => {
    return (
      <>
        <PlusButton color="#b3b3b3" onClick={openModal} />
        <AddEventModal opened={isOpenModal} onClose={closeModal} />
      </>
    );
  }
);
