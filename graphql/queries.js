import { gql } from '@apollo/client'

export const GET_VIEWER = gql`
  query {
    viewer {
      login
      url
    }
  }
`

export const GET_ISSUES = gql`
  query SearchIssues($query: String!, $after: String) {
    search(query: $query, type: ISSUE, first: 10, after: $after) {
      edges {
        node {
          ... on Issue {
            id
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
      issueCount
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`

export const GET_PULL_REQUESTS = gql`
  query MyGetPullRequests($user: String!, $after: String) {
    user(login: $user) {
      avatarUrl
      bio
      pullRequests(
        first: 10
        after: $after
        orderBy: { field: CREATED_AT, direction: DESC }
      ) {
        edges {
          node {
            id
            mergeable
            merged
            mergedAt
            state
            title
            url
            bodyText
            updatedAt
          }
        }
        totalCount
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`

export const GET_BOOKMARKS = gql`
  query MyGetBookmarks($ids: [ID!]!) {
    nodes(ids: $ids) {
      ... on Issue {
        id
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
`
