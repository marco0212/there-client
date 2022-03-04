import styled from "styled-components";
import { Skeleton, Title } from "../../shared-ui";
import { bind } from "../../utils-structure";
import { AddEventButton } from "../AddEventButton";
import { IncomingEventRow } from "../IncomingEventRow";
import { useIncomingEvents } from "./useIncomingEvents";

export const IncomingEvents = bind(
  useIncomingEvents,
  ({ events, loading, error }) => {
    if (loading) {
      return (
        <div className="pb-40">
          <Skeleton className="mb-20" width={150} height={24} />
          {new Array(5).fill(null).map((_, index) => (
            <Skeleton
              key={index}
              className="mb-20"
              width="100%"
              height={68}
              radius={10}
            />
          ))}
        </div>
      );
    }

    if (error || !events) {
      return <p>Error</p>;
    }

    return (
      <>
        <Header className="mb-20">
          <Title level={3} color="black">
            다가오는 일정
          </Title>
        </Header>
        <Container className="pb-30">
          {events.map((event) => (
            <IncomingEventRow key={event.id} event={event} />
          ))}
          <ButtonRow>
            <AddEventButton />
          </ButtonRow>
        </Container>
      </>
    );
  }
);

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.ul``;

const ButtonRow = styled.li``;
