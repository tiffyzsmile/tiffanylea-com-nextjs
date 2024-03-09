/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateProject = /* GraphQL */ `subscription OnCreateProject {
  onCreateProject {
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
      ignoreme
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
}
` as GeneratedSubscription<
  APITypes.OnCreateProjectSubscriptionVariables,
  APITypes.OnCreateProjectSubscription
>;
export const onUpdateProject = /* GraphQL */ `subscription OnUpdateProject {
  onUpdateProject {
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
      ignoreme
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
}
` as GeneratedSubscription<
  APITypes.OnUpdateProjectSubscriptionVariables,
  APITypes.OnUpdateProjectSubscription
>;
export const onDeleteProject = /* GraphQL */ `subscription OnDeleteProject {
  onDeleteProject {
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
      ignoreme
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
}
` as GeneratedSubscription<
  APITypes.OnDeleteProjectSubscriptionVariables,
  APITypes.OnDeleteProjectSubscription
>;
export const onCreateEmployer = /* GraphQL */ `subscription OnCreateEmployer {
  onCreateEmployer {
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
}
` as GeneratedSubscription<
  APITypes.OnCreateEmployerSubscriptionVariables,
  APITypes.OnCreateEmployerSubscription
>;
export const onUpdateEmployer = /* GraphQL */ `subscription OnUpdateEmployer {
  onUpdateEmployer {
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
}
` as GeneratedSubscription<
  APITypes.OnUpdateEmployerSubscriptionVariables,
  APITypes.OnUpdateEmployerSubscription
>;
export const onDeleteEmployer = /* GraphQL */ `subscription OnDeleteEmployer {
  onDeleteEmployer {
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
}
` as GeneratedSubscription<
  APITypes.OnDeleteEmployerSubscriptionVariables,
  APITypes.OnDeleteEmployerSubscription
>;
export const onCreateClient = /* GraphQL */ `subscription OnCreateClient {
  onCreateClient {
    id
    name
    description
    logo
    url
    feedback
    display
    ignoreme
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
}
` as GeneratedSubscription<
  APITypes.OnCreateClientSubscriptionVariables,
  APITypes.OnCreateClientSubscription
>;
export const onUpdateClient = /* GraphQL */ `subscription OnUpdateClient {
  onUpdateClient {
    id
    name
    description
    logo
    url
    feedback
    display
    ignoreme
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
}
` as GeneratedSubscription<
  APITypes.OnUpdateClientSubscriptionVariables,
  APITypes.OnUpdateClientSubscription
>;
export const onDeleteClient = /* GraphQL */ `subscription OnDeleteClient {
  onDeleteClient {
    id
    name
    description
    logo
    url
    feedback
    display
    ignoreme
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
}
` as GeneratedSubscription<
  APITypes.OnDeleteClientSubscriptionVariables,
  APITypes.OnDeleteClientSubscription
>;
export const onCreateTag = /* GraphQL */ `subscription OnCreateTag {
  onCreateTag {
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
}
` as GeneratedSubscription<
  APITypes.OnCreateTagSubscriptionVariables,
  APITypes.OnCreateTagSubscription
>;
export const onUpdateTag = /* GraphQL */ `subscription OnUpdateTag {
  onUpdateTag {
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
}
` as GeneratedSubscription<
  APITypes.OnUpdateTagSubscriptionVariables,
  APITypes.OnUpdateTagSubscription
>;
export const onDeleteTag = /* GraphQL */ `subscription OnDeleteTag {
  onDeleteTag {
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
}
` as GeneratedSubscription<
  APITypes.OnDeleteTagSubscriptionVariables,
  APITypes.OnDeleteTagSubscription
>;
export const onCreateTaggedProject = /* GraphQL */ `subscription OnCreateTaggedProject {
  onCreateTaggedProject {
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
}
` as GeneratedSubscription<
  APITypes.OnCreateTaggedProjectSubscriptionVariables,
  APITypes.OnCreateTaggedProjectSubscription
>;
export const onUpdateTaggedProject = /* GraphQL */ `subscription OnUpdateTaggedProject {
  onUpdateTaggedProject {
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
}
` as GeneratedSubscription<
  APITypes.OnUpdateTaggedProjectSubscriptionVariables,
  APITypes.OnUpdateTaggedProjectSubscription
>;
export const onDeleteTaggedProject = /* GraphQL */ `subscription OnDeleteTaggedProject {
  onDeleteTaggedProject {
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
}
` as GeneratedSubscription<
  APITypes.OnDeleteTaggedProjectSubscriptionVariables,
  APITypes.OnDeleteTaggedProjectSubscription
>;
