import { gql, useMutation, useSubscription } from "@apollo/client";
import { useEffect, useRef, useState } from "react";
import { useCookies } from "react-cookie";

type Event = {
  id: string;
  title: string;
  description?: string;
  reservedAt: number;
};

type UseIncomingEventRowProps = {
  event: Event;
};

const mutationGraphql = gql`
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

const subscriptionGraphql = gql`
  subscription EventDescriptionUpdatedOnIncomingEventRow($id: ID!) {
    eventDescriptionUpdated(id: $id) {
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
  const [isUpdated, setIsUpdated] = useState(false);

  const [cookies, setCookie] = useCookies([event.id]);

  const debounceRef = useRef<{ timer: NodeJS.Timeout | null; data: string }>({
    timer: null,
    data: descriptionProp ?? "",
  });

  useSubscription(subscriptionGraphql, {
    variables: { id: event.id },
    onSubscriptionData({ subscriptionData }) {
      if (!isSelected) {
        setIsUpdated(true);
        setDescriptionValue(
          subscriptionData.data.eventDescriptionUpdated.description
        );
      }
    },
  });

  const [updateEventDescriptionMutation] = useMutation<
    MutationResult,
    { id: string; description: string }
  >(mutationGraphql, {
    onCompleted(data) {
      debounceRef.current.data = data.updateEventDescription.description;
      setCookie(
        data.updateEventDescription.id,
        data.updateEventDescription.description
      );
    },
  });

  const toggleOpenDialog = () => {
    if (!isSelected && isUpdated) {
      setIsUpdated(false);
      setCookie(event.id, descriptionProp ?? "");
    }

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

  useEffect(() => {
    const localDescription = cookies[event.id];

    if (localDescription !== (descriptionProp ?? "")) {
      setIsUpdated(true);
    }
  }, [cookies, event.id, descriptionProp, setCookie]);
  return {
    ...event,
    descriptionValue,
    saveDescription,
    isSelected,
    toggleOpenDialog,
    isUpdated,
  };
}
