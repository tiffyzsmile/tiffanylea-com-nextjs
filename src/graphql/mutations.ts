/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createProject = /* GraphQL */ `mutation CreateProject(
  $input: CreateProjectInput!
  $condition: ModelProjectConditionInput
) {
  createProject(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateProjectMutationVariables,
  APITypes.CreateProjectMutation
>;
export const updateProject = /* GraphQL */ `mutation UpdateProject(
  $input: UpdateProjectInput!
  $condition: ModelProjectConditionInput
) {
  updateProject(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateProjectMutationVariables,
  APITypes.UpdateProjectMutation
>;
export const deleteProject = /* GraphQL */ `mutation DeleteProject(
  $input: DeleteProjectInput!
  $condition: ModelProjectConditionInput
) {
  deleteProject(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteProjectMutationVariables,
  APITypes.DeleteProjectMutation
>;
export const createEmployer = /* GraphQL */ `mutation CreateEmployer(
  $input: CreateEmployerInput!
  $condition: ModelEmployerConditionInput
) {
  createEmployer(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateEmployerMutationVariables,
  APITypes.CreateEmployerMutation
>;
export const updateEmployer = /* GraphQL */ `mutation UpdateEmployer(
  $input: UpdateEmployerInput!
  $condition: ModelEmployerConditionInput
) {
  updateEmployer(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateEmployerMutationVariables,
  APITypes.UpdateEmployerMutation
>;
export const deleteEmployer = /* GraphQL */ `mutation DeleteEmployer(
  $input: DeleteEmployerInput!
  $condition: ModelEmployerConditionInput
) {
  deleteEmployer(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteEmployerMutationVariables,
  APITypes.DeleteEmployerMutation
>;
export const createClient = /* GraphQL */ `mutation CreateClient(
  $input: CreateClientInput!
  $condition: ModelClientConditionInput
) {
  createClient(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateClientMutationVariables,
  APITypes.CreateClientMutation
>;
export const updateClient = /* GraphQL */ `mutation UpdateClient(
  $input: UpdateClientInput!
  $condition: ModelClientConditionInput
) {
  updateClient(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateClientMutationVariables,
  APITypes.UpdateClientMutation
>;
export const deleteClient = /* GraphQL */ `mutation DeleteClient(
  $input: DeleteClientInput!
  $condition: ModelClientConditionInput
) {
  deleteClient(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteClientMutationVariables,
  APITypes.DeleteClientMutation
>;
export const createTag = /* GraphQL */ `mutation CreateTag(
  $input: CreateTagInput!
  $condition: ModelTagConditionInput
) {
  createTag(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateTagMutationVariables,
  APITypes.CreateTagMutation
>;
export const updateTag = /* GraphQL */ `mutation UpdateTag(
  $input: UpdateTagInput!
  $condition: ModelTagConditionInput
) {
  updateTag(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateTagMutationVariables,
  APITypes.UpdateTagMutation
>;
export const deleteTag = /* GraphQL */ `mutation DeleteTag(
  $input: DeleteTagInput!
  $condition: ModelTagConditionInput
) {
  deleteTag(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteTagMutationVariables,
  APITypes.DeleteTagMutation
>;
export const createTaggedProject = /* GraphQL */ `mutation CreateTaggedProject(
  $input: CreateTaggedProjectInput!
  $condition: ModelTaggedProjectConditionInput
) {
  createTaggedProject(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateTaggedProjectMutationVariables,
  APITypes.CreateTaggedProjectMutation
>;
export const updateTaggedProject = /* GraphQL */ `mutation UpdateTaggedProject(
  $input: UpdateTaggedProjectInput!
  $condition: ModelTaggedProjectConditionInput
) {
  updateTaggedProject(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateTaggedProjectMutationVariables,
  APITypes.UpdateTaggedProjectMutation
>;
export const deleteTaggedProject = /* GraphQL */ `mutation DeleteTaggedProject(
  $input: DeleteTaggedProjectInput!
  $condition: ModelTaggedProjectConditionInput
) {
  deleteTaggedProject(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteTaggedProjectMutationVariables,
  APITypes.DeleteTaggedProjectMutation
>;
