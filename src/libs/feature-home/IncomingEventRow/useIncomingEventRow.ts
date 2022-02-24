import { gql, useMutation } from "@apollo/client";
import { useEffect, useRef, useState } from "react";

type Event = {
  id: string;
  title: string;
  description?: string;
  reservedAt: number;
};

type UseIncomingEventRowProps = {
  event: Event;
};

const graphql = gql`
  mutation UpdateEventDescriptionOnIncomingEventRow(
    $id: ID!
    $description: String!
  ) {
    updateEventDescription(id: $id, description: $description) {
      id
      description
    }
  }
`;

type MutationResult = {
  updateEventDescription: { id: string; description: string };
};

export function useIncomingEventRow({
  event: { description: descriptionProp, ...event },
}: UseIncomingEventRowProps) {
  const [isSelected, setIsSelected] = useState(false);
  const [descriptionValue, setDescriptionValue] = useState(
    descriptionProp ?? ""
  );
  const debounceRef = useRef<{ timer: NodeJS.Timeout | null; data: string }>({
    timer: null,
    data: descriptionProp ?? "",
  });

  const [updateEventDescriptionMutation] = useMutation<
    MutationResult,
    { id: string; description: string }
  >(graphql, {
    onCompleted(data) {
      debounceRef.current.data = data.updateEventDescription.description;
    },
  });

  const toggleOpenDialog = () => {
    setIsSelected(!isSelected);
  };

  const saveDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const description = event.currentTarget.value;
    setDescriptionValue(description);
  };

  useEffect(() => {
    if (debounceRef.current.data === descriptionValue) {
      return;
    }

    if (debounceRef.current.timer) {
      clearTimeout(debounceRef.current.timer);
    }

    debounceRef.current.timer = setTimeout(() => {
      updateEventDescriptionMutation({
        variables: { id: event.id, description: descriptionValue },
      });
    }, 500);
  }, [event.id, descriptionValue, updateEventDescriptionMutation]);

  return {
    ...event,
    descriptionValue,
    saveDescription,
    isSelected,
    toggleOpenDialog,
  };
}
