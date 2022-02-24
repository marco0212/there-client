import { useState } from "react";

export function useAddEventButton() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return {
    isOpenModal,
    openModal,
    closeModal,
  };
}
