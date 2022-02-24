export const GRAPHQL_END_POINT =
  process.env.NODE_ENV === "production"
    ? "https://there-server.herokuapp.com/graphql"
    : "http://localhost:4000/graphql";

export const WS_END_POINT =
  process.env.NODE_ENV === "production"
    ? "ws://there-server.herokuapp.com/subscriptions"
    : "ws://localhost:4000/subscriptions";
