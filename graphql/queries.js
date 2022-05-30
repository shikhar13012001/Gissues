import { gql } from "@apollo/client";

export const GET_VIEWER = gql`
  query {
    viewer {
      login
      url
    }
  }
`;

