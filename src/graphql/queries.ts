/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getProject = /* GraphQL */ `query GetProject($id: ID!) {
  getProject(id: $id) {
    id
    name
    date
    description
    features
    url
    images
    display
    logo
    internal
    createdAt
    updatedAt
    employer {
      id
      name
      startdate
      enddate
      url
      logo
      createdAt
      updatedAt
      projects {
        items {
          id
          name
          date
          description
          features
          url
          images
          display
          logo
          internal
          createdAt
          updatedAt
          employer {
            id
            name
            startdate
            enddate
            url
            logo
            createdAt
            updatedAt
            __typename
          }
          client {
            id
            name
            description
            logo
            url
            feedback
            display
            createdAt
            updatedAt
            __typename
          }
          tags {
            nextToken
            __typename
          }
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
    client {
      id
      name
      description
      logo
      url
      feedback
      display
      createdAt
      updatedAt
      projects {
        id
        name
        date
        description
        features
        url
        images
        display
        logo
        internal
        createdAt
        updatedAt
        employer {
          id
          name
          startdate
          enddate
          url
          logo
          createdAt
          updatedAt
          projects {
            nextToken
            __typename
          }
          __typename
        }
        client {
          id
          name
          description
          logo
          url
          feedback
          display
          createdAt
          updatedAt
          projects {
            id
            name
            date
            description
            features
            url
            images
            display
            logo
            internal
            createdAt
            updatedAt
            __typename
          }
          __typename
        }
        tags {
          items {
            id
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        __typename
      }
      __typename
    }
    tags {
      items {
        id
        createdAt
        updatedAt
        project {
          id
          name
          date
          description
          features
          url
          images
          display
          logo
          internal
          createdAt
          updatedAt
          employer {
            id
            name
            startdate
            enddate
            url
            logo
            createdAt
            updatedAt
            __typename
          }
          client {
            id
            name
            description
            logo
            url
            feedback
            display
            createdAt
            updatedAt
            __typename
          }
          tags {
            nextToken
            __typename
          }
          __typename
        }
        tag {
          id
          name
          category
          display
          logo
          createdAt
          updatedAt
          projects {
            nextToken
            __typename
          }
          __typename
        }
        __typename
      }
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProjectQueryVariables,
  APITypes.GetProjectQuery
>;
export const listProjects = /* GraphQL */ `query ListProjects(
  $filter: ModelProjectFilterInput
  $limit: Int
  $nextToken: String
) {
  listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      date
      description
      features
      url
      images
      display
      logo
      internal
      createdAt
      updatedAt
      employer {
        id
        name
        startdate
        enddate
        url
        logo
        createdAt
        updatedAt
        projects {
          items {
            id
            name
            date
            description
            features
            url
            images
            display
            logo
            internal
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        __typename
      }
      client {
        id
        name
        description
        logo
        url
        feedback
        display
        createdAt
        updatedAt
        projects {
          id
          name
          date
          description
          features
          url
          images
          display
          logo
          internal
          createdAt
          updatedAt
          employer {
            id
            name
            startdate
            enddate
            url
            logo
            createdAt
            updatedAt
            __typename
          }
          client {
            id
            name
            description
            logo
            url
            feedback
            display
            createdAt
            updatedAt
            __typename
          }
          tags {
            nextToken
            __typename
          }
          __typename
        }
        __typename
      }
      tags {
        items {
          id
          createdAt
          updatedAt
          project {
            id
            name
            date
            description
            features
            url
            images
            display
            logo
            internal
            createdAt
            updatedAt
            __typename
          }
          tag {
            id
            name
            category
            display
            logo
            createdAt
            updatedAt
            __typename
          }
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProjectsQueryVariables,
  APITypes.ListProjectsQuery
>;
export const getEmployer = /* GraphQL */ `query GetEmployer($id: ID!) {
  getEmployer(id: $id) {
    id
    name
    startdate
    enddate
    url
    logo
    createdAt
    updatedAt
    projects {
      items {
        id
        name
        date
        description
        features
        url
        images
        display
        logo
        internal
        createdAt
        updatedAt
        employer {
          id
          name
          startdate
          enddate
          url
          logo
          createdAt
          updatedAt
          projects {
            nextToken
            __typename
          }
          __typename
        }
        client {
          id
          name
          description
          logo
          url
          feedback
          display
          createdAt
          updatedAt
          projects {
            id
            name
            date
            description
            features
            url
            images
            display
            logo
            internal
            createdAt
            updatedAt
            __typename
          }
          __typename
        }
        tags {
          items {
            id
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        __typename
      }
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEmployerQueryVariables,
  APITypes.GetEmployerQuery
>;
export const listEmployers = /* GraphQL */ `query ListEmployers(
  $filter: ModelEmployerFilterInput
  $limit: Int
  $nextToken: String
) {
  listEmployers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      startdate
      enddate
      url
      logo
      createdAt
      updatedAt
      projects {
        items {
          id
          name
          date
          description
          features
          url
          images
          display
          logo
          internal
          createdAt
          updatedAt
          employer {
            id
            name
            startdate
            enddate
            url
            logo
            createdAt
            updatedAt
            __typename
          }
          client {
            id
            name
            description
            logo
            url
            feedback
            display
            createdAt
            updatedAt
            __typename
          }
          tags {
            nextToken
            __typename
          }
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEmployersQueryVariables,
  APITypes.ListEmployersQuery
>;
export const getClient = /* GraphQL */ `query GetClient($id: ID!) {
  getClient(id: $id) {
    id
    name
    description
    logo
    url
    feedback
    display
    createdAt
    updatedAt
    projects {
      id
      name
      date
      description
      features
      url
      images
      display
      logo
      internal
      createdAt
      updatedAt
      employer {
        id
        name
        startdate
        enddate
        url
        logo
        createdAt
        updatedAt
        projects {
          items {
            id
            name
            date
            description
            features
            url
            images
            display
            logo
            internal
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        __typename
      }
      client {
        id
        name
        description
        logo
        url
        feedback
        display
        createdAt
        updatedAt
        projects {
          id
          name
          date
          description
          features
          url
          images
          display
          logo
          internal
          createdAt
          updatedAt
          employer {
            id
            name
            startdate
            enddate
            url
            logo
            createdAt
            updatedAt
            __typename
          }
          client {
            id
            name
            description
            logo
            url
            feedback
            display
            createdAt
            updatedAt
            __typename
          }
          tags {
            nextToken
            __typename
          }
          __typename
        }
        __typename
      }
      tags {
        items {
          id
          createdAt
          updatedAt
          project {
            id
            name
            date
            description
            features
            url
            images
            display
            logo
            internal
            createdAt
            updatedAt
            __typename
          }
          tag {
            id
            name
            category
            display
            logo
            createdAt
            updatedAt
            __typename
          }
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<APITypes.GetClientQueryVariables, APITypes.GetClientQuery>;
export const listClients = /* GraphQL */ `query ListClients(
  $filter: ModelClientFilterInput
  $limit: Int
  $nextToken: String
) {
  listClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      logo
      url
      feedback
      display
      createdAt
      updatedAt
      projects {
        id
        name
        date
        description
        features
        url
        images
        display
        logo
        internal
        createdAt
        updatedAt
        employer {
          id
          name
          startdate
          enddate
          url
          logo
          createdAt
          updatedAt
          projects {
            nextToken
            __typename
          }
          __typename
        }
        client {
          id
          name
          description
          logo
          url
          feedback
          display
          createdAt
          updatedAt
          projects {
            id
            name
            date
            description
            features
            url
            images
            display
            logo
            internal
            createdAt
            updatedAt
            __typename
          }
          __typename
        }
        tags {
          items {
            id
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        __typename
      }
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListClientsQueryVariables,
  APITypes.ListClientsQuery
>;
export const getTag = /* GraphQL */ `query GetTag($id: ID!) {
  getTag(id: $id) {
    id
    name
    category
    display
    logo
    createdAt
    updatedAt
    projects {
      items {
        id
        createdAt
        updatedAt
        project {
          id
          name
          date
          description
          features
          url
          images
          display
          logo
          internal
          createdAt
          updatedAt
          employer {
            id
            name
            startdate
            enddate
            url
            logo
            createdAt
            updatedAt
            __typename
          }
          client {
            id
            name
            description
            logo
            url
            feedback
            display
            createdAt
            updatedAt
            __typename
          }
          tags {
            nextToken
            __typename
          }
          __typename
        }
        tag {
          id
          name
          category
          display
          logo
          createdAt
          updatedAt
          projects {
            nextToken
            __typename
          }
          __typename
        }
        __typename
      }
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTagQueryVariables, APITypes.GetTagQuery>;
export const listTags = /* GraphQL */ `query ListTags($filter: ModelTagFilterInput, $limit: Int, $nextToken: String) {
  listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      category
      display
      logo
      createdAt
      updatedAt
      projects {
        items {
          id
          createdAt
          updatedAt
          project {
            id
            name
            date
            description
            features
            url
            images
            display
            logo
            internal
            createdAt
            updatedAt
            __typename
          }
          tag {
            id
            name
            category
            display
            logo
            createdAt
            updatedAt
            __typename
          }
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTagsQueryVariables, APITypes.ListTagsQuery>;
export const getTaggedProject = /* GraphQL */ `query GetTaggedProject($id: ID!) {
  getTaggedProject(id: $id) {
    id
    createdAt
    updatedAt
    project {
      id
      name
      date
      description
      features
      url
      images
      display
      logo
      internal
      createdAt
      updatedAt
      employer {
        id
        name
        startdate
        enddate
        url
        logo
        createdAt
        updatedAt
        projects {
          items {
            id
            name
            date
            description
            features
            url
            images
            display
            logo
            internal
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        __typename
      }
      client {
        id
        name
        description
        logo
        url
        feedback
        display
        createdAt
        updatedAt
        projects {
          id
          name
          date
          description
          features
          url
          images
          display
          logo
          internal
          createdAt
          updatedAt
          employer {
            id
            name
            startdate
            enddate
            url
            logo
            createdAt
            updatedAt
            __typename
          }
          client {
            id
            name
            description
            logo
            url
            feedback
            display
            createdAt
            updatedAt
            __typename
          }
          tags {
            nextToken
            __typename
          }
          __typename
        }
        __typename
      }
      tags {
        items {
          id
          createdAt
          updatedAt
          project {
            id
            name
            date
            description
            features
            url
            images
            display
            logo
            internal
            createdAt
            updatedAt
            __typename
          }
          tag {
            id
            name
            category
            display
            logo
            createdAt
            updatedAt
            __typename
          }
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
    tag {
      id
      name
      category
      display
      logo
      createdAt
      updatedAt
      projects {
        items {
          id
          createdAt
          updatedAt
          project {
            id
            name
            date
            description
            features
            url
            images
            display
            logo
            internal
            createdAt
            updatedAt
            __typename
          }
          tag {
            id
            name
            category
            display
            logo
            createdAt
            updatedAt
            __typename
          }
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTaggedProjectQueryVariables,
  APITypes.GetTaggedProjectQuery
>;
export const listTaggedProjects = /* GraphQL */ `query ListTaggedProjects(
  $filter: ModelTaggedProjectFilterInput
  $limit: Int
  $nextToken: String
) {
  listTaggedProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      project {
        id
        name
        date
        description
        features
        url
        images
        display
        logo
        internal
        createdAt
        updatedAt
        employer {
          id
          name
          startdate
          enddate
          url
          logo
          createdAt
          updatedAt
          projects {
            nextToken
            __typename
          }
          __typename
        }
        client {
          id
          name
          description
          logo
          url
          feedback
          display
          createdAt
          updatedAt
          projects {
            id
            name
            date
            description
            features
            url
            images
            display
            logo
            internal
            createdAt
            updatedAt
            __typename
          }
          __typename
        }
        tags {
          items {
            id
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        __typename
      }
      tag {
        id
        name
        category
        display
        logo
        createdAt
        updatedAt
        projects {
          items {
            id
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        __typename
      }
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTaggedProjectsQueryVariables,
  APITypes.ListTaggedProjectsQuery
>;
