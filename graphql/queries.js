import { gql } from "@apollo/client";

export const GET_VIEWER = gql`
  query {
    viewer {
      login
      url
    }
  }
`;

export const GET_ISSUES = gql`
  query SearchIssues($query: String!, $after: String) {
    search(query: $query, type: ISSUE, first: 10, after: $after) {
      edges {
        node {
          ... on Issue {
            repository {
              owner {
                login
                avatarUrl
              
              }
              updatedAt
              url
              updatedAt
              name
              description
              stargazers {
                totalCount
              }
            }
            url
            updatedAt
            title
            number
            labels(first: 100) {
              edges {
                node {
                  color
                  name
                }
              }
            }
          }
        }
      }

      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;
