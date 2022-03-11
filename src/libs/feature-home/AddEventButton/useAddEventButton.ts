import { gql } from "@apollo/client";
import { useState } from "react";
import { useAddEventOnAddEventModalMutation } from "./__generated__/useAddEventButton";

const graphql = gql`
  mutation AddEventOnAddEventModal(
    $title: String!
    $reservedAt: Date!
    $description: String
  ) {
    addEvent(
      title: $title
      reservedAt: $reservedAt
      description: $description
    ) {
      there {
        id
        incomingEvents {
          id
          title
          description
          reservedAt
        }
      }
      daysWithEvent {
        id
        events {
          id
        }
      }
    }
  }
`;

export function useAddEventButton() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [titleValue, setTitleValue] = useState("");
  const [reservedAtValue, setReservedAtValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");

  const initializeInput = () => {
    setTitleValue("");
    setReservedAtValue("");
    setDescriptionValue("");
  };

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    initializeInput();
    setIsOpenModal(false);
  };

  const [addEventMutation, { loading }] = useAddEventOnAddEventModalMutation({
    onCompleted: closeModal,
  });

  const addEvent = () => {
    addEventMutation({
      variables: {
        title: titleValue,
        reservedAt: reservedAtValue,
        description: descriptionValue,
      },
    });
  };

  return {
    isOpenModal,
    openModal,
    closeModal,
    addEvent,
    titleValue,
    setTitleValue,
    reservedAtValue,
    setReservedAtValue,
    descriptionValue,
    setDescriptionValue,
    loading,
  };
}
