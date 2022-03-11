import { gql } from "@apollo/client";
import { useEffect, useRef, useState } from "react";
import { useCookies } from "react-cookie";
import {
  IncomingEventRowFragment,
  useEventDescriptionUpdatedOnIncomingEventRowSubscription,
  useUpdateEventDescriptionOnIncomingEventRowMutation,
} from "./__generated__/useIncomingEventRow";

type UseIncomingEventRowProps = {
  event: IncomingEventRowFragment;
};

gql`
  fragment IncomingEventRow on Event {
    id
    title
    description
    reservedAt
  }

  mutation UpdateEventDescriptionOnIncomingEventRow(
    $id: ID!
    $description: String!
  ) {
    updateEventDescription(id: $id, description: $description) {
      id
      description
    }
  }

  subscription EventDescriptionUpdatedOnIncomingEventRow($id: ID!) {
    eventDescriptionUpdated(id: $id) {
      id
      description
    }
  }
`;

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

  const [remoteDescription, setRemoteDescription] = useState<string | null>(
    null
  );

  useEventDescriptionUpdatedOnIncomingEventRowSubscription({
    variables: { id: event.id },
    onSubscriptionData({ subscriptionData }) {
      if (!subscriptionData.data?.eventDescriptionUpdated.description) {
        return;
      }

      setRemoteDescription(
        subscriptionData.data.eventDescriptionUpdated.description
      );
    },
  });

  const [updateEventDescriptionMutation] =
    useUpdateEventDescriptionOnIncomingEventRowMutation({
      onCompleted(data) {
        if (!data.updateEventDescription.description) {
          return;
        }

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

  useEffect(() => {
    if (!isSelected && remoteDescription) {
      setDescriptionValue(remoteDescription);
    }
  }, [isSelected, remoteDescription]);

  return {
    ...event,
    descriptionValue,
    saveDescription,
    isSelected,
    toggleOpenDialog,
    isUpdated,
  };
}
