import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

type UseAddEventModalProps = {
  onClose?(): void;
  opened: boolean;
};

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

export function useAddEventModal({ opened, onClose }: UseAddEventModalProps) {
  const [titleValue, setTitleValue] = useState("");
  const [reservedAtValue, setReservedAtValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");

  const closeModal = () => {
    setTitleValue("");
    setReservedAtValue("");
    setDescriptionValue("");
    onClose?.();
  };
  const [addEventMutation, { loading }] = useMutation<
    unknown,
    { title: string; reservedAt: string; description?: string }
  >(graphql, {
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
    opened,
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
