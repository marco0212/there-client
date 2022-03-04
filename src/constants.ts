export const SERVER_HOST_URL =
  process.env.NODE_ENV === "production"
    ? "https://there-server.herokuapp.com"
    : "http://localhost:4000";

export const APOLLO_SERVER_END_POINT = `${SERVER_HOST_URL}/graphql`;

export const WS_SERVER_END_POINT =
  process.env.NODE_ENV === "production"
    ? "wss://there-server.herokuapp.com/subscriptions"
    : "ws://localhost:4000/subscriptions";

export const ROUTE_PATHS = {
  home: "/",
  posts: "/posts",
};
