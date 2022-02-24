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

  const [addEventMutation, { loading }] = useMutation<
    unknown,
    { title: string; reservedAt: string; description?: string }
  >(graphql, {
    onCompleted: () => {
      onClose?.();
    },
  });

  const addEvent = () => {
    addEventMutation({
      variables: {
        title: titleValue,
        reservedAt: reservedAtValue,
        description: descriptionValue,
      },
      optimisticResponse: {
        daysWithEvents: {
          __typename: "EventInDay",
          id: reservedAtValue,
          events: [1, 2, 4],
        },
      },
    });
  };
  return {
    opened,
    onClose,
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
