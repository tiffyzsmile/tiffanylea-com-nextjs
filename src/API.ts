/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProjectInput = {
  id?: string | null,
  name: string,
  date?: string | null,
  description?: string | null,
  features?: Array< string | null > | null,
  url?: string | null,
  images?: Array< string | null > | null,
  display?: boolean | null,
  logo?: string | null,
  internal?: string | null,
  projectEmployerId?: string | null,
  projectClientId: string,
};

export type ModelProjectConditionInput = {
  name?: ModelStringInput | null,
  date?: ModelStringInput | null,
  description?: ModelStringInput | null,
  features?: ModelStringInput | null,
  url?: ModelStringInput | null,
  images?: ModelStringInput | null,
  display?: ModelBooleanInput | null,
  logo?: ModelStringInput | null,
  internal?: ModelStringInput | null,
  and?: Array< ModelProjectConditionInput | null > | null,
  or?: Array< ModelProjectConditionInput | null > | null,
  not?: ModelProjectConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Project = {
  __typename: "Project",
  id: string,
  name: string,
  date?: string | null,
  description?: string | null,
  features?: Array< string | null > | null,
  url?: string | null,
  images?: Array< string | null > | null,
  display?: boolean | null,
  logo?: string | null,
  internal?: string | null,
  createdAt: string,
  updatedAt: string,
  employer?: Employer | null,
  client: Client,
  tags?: ModelTaggedProjectConnection | null,
};

export type Employer = {
  __typename: "Employer",
  id: string,
  name: string,
  startdate?: string | null,
  enddate?: string | null,
  url?: string | null,
  logo?: string | null,
  createdAt: string,
  updatedAt: string,
  projects?: ModelProjectConnection | null,
};

export type ModelProjectConnection = {
  __typename: "ModelProjectConnection",
  items:  Array<Project | null >,
  nextToken?: string | null,
};

export type Client = {
  __typename: "Client",
  id: string,
  name: string,
  description?: string | null,
  logo?: string | null,
  url?: string | null,
  feedback?: string | null,
  display?: boolean | null,
  ignoreme?: string | null,
  createdAt: string,
  updatedAt: string,
  projects?: Project | null,
};

export type ModelTaggedProjectConnection = {
  __typename: "ModelTaggedProjectConnection",
  items:  Array<TaggedProject | null >,
  nextToken?: string | null,
};

export type TaggedProject = {
  __typename: "TaggedProject",
  id: string,
  createdAt: string,
  updatedAt: string,
  project: Project,
  tag: Tag,
};

export type Tag = {
  __typename: "Tag",
  id: string,
  name?: string | null,
  category?: string | null,
  display?: boolean | null,
  logo?: string | null,
  createdAt: string,
  updatedAt: string,
  projects?: ModelTaggedProjectConnection | null,
};

export type UpdateProjectInput = {
  id: string,
  name?: string | null,
  date?: string | null,
  description?: string | null,
  features?: Array< string | null > | null,
  url?: string | null,
  images?: Array< string | null > | null,
  display?: boolean | null,
  logo?: string | null,
  internal?: string | null,
  projectEmployerId?: string | null,
  projectClientId?: string | null,
};

export type DeleteProjectInput = {
  id: string,
};

export type CreateEmployerInput = {
  id?: string | null,
  name: string,
  startdate?: string | null,
  enddate?: string | null,
  url?: string | null,
  logo?: string | null,
};

export type ModelEmployerConditionInput = {
  name?: ModelStringInput | null,
  startdate?: ModelStringInput | null,
  enddate?: ModelStringInput | null,
  url?: ModelStringInput | null,
  logo?: ModelStringInput | null,
  and?: Array< ModelEmployerConditionInput | null > | null,
  or?: Array< ModelEmployerConditionInput | null > | null,
  not?: ModelEmployerConditionInput | null,
};

export type UpdateEmployerInput = {
  id: string,
  name?: string | null,
  startdate?: string | null,
  enddate?: string | null,
  url?: string | null,
  logo?: string | null,
};

export type DeleteEmployerInput = {
  id: string,
};

export type CreateClientInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  logo?: string | null,
  url?: string | null,
  feedback?: string | null,
  display?: boolean | null,
  ignoreme?: string | null,
  clientProjectsId?: string | null,
};

export type ModelClientConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  logo?: ModelStringInput | null,
  url?: ModelStringInput | null,
  feedback?: ModelStringInput | null,
  display?: ModelBooleanInput | null,
  ignoreme?: ModelStringInput | null,
  and?: Array< ModelClientConditionInput | null > | null,
  or?: Array< ModelClientConditionInput | null > | null,
  not?: ModelClientConditionInput | null,
};

export type UpdateClientInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  logo?: string | null,
  url?: string | null,
  feedback?: string | null,
  display?: boolean | null,
  ignoreme?: string | null,
  clientProjectsId?: string | null,
};

export type DeleteClientInput = {
  id: string,
};

export type CreateTagInput = {
  id?: string | null,
  name?: string | null,
  category?: string | null,
  display?: boolean | null,
  logo?: string | null,
};

export type ModelTagConditionInput = {
  name?: ModelStringInput | null,
  category?: ModelStringInput | null,
  display?: ModelBooleanInput | null,
  logo?: ModelStringInput | null,
  and?: Array< ModelTagConditionInput | null > | null,
  or?: Array< ModelTagConditionInput | null > | null,
  not?: ModelTagConditionInput | null,
};

export type UpdateTagInput = {
  id: string,
  name?: string | null,
  category?: string | null,
  display?: boolean | null,
  logo?: string | null,
};

export type DeleteTagInput = {
  id: string,
};

export type CreateTaggedProjectInput = {
  id?: string | null,
  taggedProjectTagId: string,
  taggedProjectProjectId: string,
};

export type ModelTaggedProjectConditionInput = {
  and?: Array< ModelTaggedProjectConditionInput | null > | null,
  or?: Array< ModelTaggedProjectConditionInput | null > | null,
  not?: ModelTaggedProjectConditionInput | null,
};

export type UpdateTaggedProjectInput = {
  id: string,
  taggedProjectTagId?: string | null,
  taggedProjectProjectId?: string | null,
};

export type DeleteTaggedProjectInput = {
  id: string,
};

export type ModelProjectFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  date?: ModelStringInput | null,
  description?: ModelStringInput | null,
  features?: ModelStringInput | null,
  url?: ModelStringInput | null,
  images?: ModelStringInput | null,
  display?: ModelBooleanInput | null,
  logo?: ModelStringInput | null,
  internal?: ModelStringInput | null,
  and?: Array< ModelProjectFilterInput | null > | null,
  or?: Array< ModelProjectFilterInput | null > | null,
  not?: ModelProjectFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelEmployerFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  startdate?: ModelStringInput | null,
  enddate?: ModelStringInput | null,
  url?: ModelStringInput | null,
  logo?: ModelStringInput | null,
  and?: Array< ModelEmployerFilterInput | null > | null,
  or?: Array< ModelEmployerFilterInput | null > | null,
  not?: ModelEmployerFilterInput | null,
};

export type ModelEmployerConnection = {
  __typename: "ModelEmployerConnection",
  items:  Array<Employer | null >,
  nextToken?: string | null,
};

export type ModelClientFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  logo?: ModelStringInput | null,
  url?: ModelStringInput | null,
  feedback?: ModelStringInput | null,
  display?: ModelBooleanInput | null,
  ignoreme?: ModelStringInput | null,
  and?: Array< ModelClientFilterInput | null > | null,
  or?: Array< ModelClientFilterInput | null > | null,
  not?: ModelClientFilterInput | null,
};

export type ModelClientConnection = {
  __typename: "ModelClientConnection",
  items:  Array<Client | null >,
  nextToken?: string | null,
};

export type ModelTagFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  category?: ModelStringInput | null,
  display?: ModelBooleanInput | null,
  logo?: ModelStringInput | null,
  and?: Array< ModelTagFilterInput | null > | null,
  or?: Array< ModelTagFilterInput | null > | null,
  not?: ModelTagFilterInput | null,
};

export type ModelTagConnection = {
  __typename: "ModelTagConnection",
  items:  Array<Tag | null >,
  nextToken?: string | null,
};

export type ModelTaggedProjectFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelTaggedProjectFilterInput | null > | null,
  or?: Array< ModelTaggedProjectFilterInput | null > | null,
  not?: ModelTaggedProjectFilterInput | null,
};

export type CreateProjectMutationVariables = {
  input: CreateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type CreateProjectMutation = {
  createProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    date?: string | null,
    description?: string | null,
    features?: Array< string | null > | null,
    url?: string | null,
    images?: Array< string | null > | null,
    display?: boolean | null,
    logo?: string | null,
    internal?: string | null,
    createdAt: string,
    updatedAt: string,
    employer?:  {
      __typename: "Employer",
      id: string,
      name: string,
      startdate?: string | null,
      enddate?: string | null,
      url?: string | null,
      logo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    client:  {
      __typename: "Client",
      id: string,
      name: string,
      description?: string | null,
      logo?: string | null,
      url?: string | null,
      feedback?: string | null,
      display?: boolean | null,
      ignoreme?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    tags?:  {
      __typename: "ModelTaggedProjectConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateProjectMutationVariables = {
  input: UpdateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type UpdateProjectMutation = {
  updateProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    date?: string | null,
    description?: string | null,
    features?: Array< string | null > | null,
    url?: string | null,
    images?: Array< string | null > | null,
    display?: boolean | null,
    logo?: string | null,
    internal?: string | null,
    createdAt: string,
    updatedAt: string,
    employer?:  {
      __typename: "Employer",
      id: string,
      name: string,
      startdate?: string | null,
      enddate?: string | null,
      url?: string | null,
      logo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    client:  {
      __typename: "Client",
      id: string,
      name: string,
      description?: string | null,
      logo?: string | null,
      url?: string | null,
      feedback?: string | null,
      display?: boolean | null,
      ignoreme?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    tags?:  {
      __typename: "ModelTaggedProjectConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteProjectMutationVariables = {
  input: DeleteProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type DeleteProjectMutation = {
  deleteProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    date?: string | null,
    description?: string | null,
    features?: Array< string | null > | null,
    url?: string | null,
    images?: Array< string | null > | null,
    display?: boolean | null,
    logo?: string | null,
    internal?: string | null,
    createdAt: string,
    updatedAt: string,
    employer?:  {
      __typename: "Employer",
      id: string,
      name: string,
      startdate?: string | null,
      enddate?: string | null,
      url?: string | null,
      logo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    client:  {
      __typename: "Client",
      id: string,
      name: string,
      description?: string | null,
      logo?: string | null,
      url?: string | null,
      feedback?: string | null,
      display?: boolean | null,
      ignoreme?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    tags?:  {
      __typename: "ModelTaggedProjectConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateEmployerMutationVariables = {
  input: CreateEmployerInput,
  condition?: ModelEmployerConditionInput | null,
};

export type CreateEmployerMutation = {
  createEmployer?:  {
    __typename: "Employer",
    id: string,
    name: string,
    startdate?: string | null,
    enddate?: string | null,
    url?: string | null,
    logo?: string | null,
    createdAt: string,
    updatedAt: string,
    projects?:  {
      __typename: "ModelProjectConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateEmployerMutationVariables = {
  input: UpdateEmployerInput,
  condition?: ModelEmployerConditionInput | null,
};

export type UpdateEmployerMutation = {
  updateEmployer?:  {
    __typename: "Employer",
    id: string,
    name: string,
    startdate?: string | null,
    enddate?: string | null,
    url?: string | null,
    logo?: string | null,
    createdAt: string,
    updatedAt: string,
    projects?:  {
      __typename: "ModelProjectConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteEmployerMutationVariables = {
  input: DeleteEmployerInput,
  condition?: ModelEmployerConditionInput | null,
};

export type DeleteEmployerMutation = {
  deleteEmployer?:  {
    __typename: "Employer",
    id: string,
    name: string,
    startdate?: string | null,
    enddate?: string | null,
    url?: string | null,
    logo?: string | null,
    createdAt: string,
    updatedAt: string,
    projects?:  {
      __typename: "ModelProjectConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateClientMutationVariables = {
  input: CreateClientInput,
  condition?: ModelClientConditionInput | null,
};

export type CreateClientMutation = {
  createClient?:  {
    __typename: "Client",
    id: string,
    name: string,
    description?: string | null,
    logo?: string | null,
    url?: string | null,
    feedback?: string | null,
    display?: boolean | null,
    ignoreme?: string | null,
    createdAt: string,
    updatedAt: string,
    projects?:  {
      __typename: "Project",
      id: string,
      name: string,
      date?: string | null,
      description?: string | null,
      features?: Array< string | null > | null,
      url?: string | null,
      images?: Array< string | null > | null,
      display?: boolean | null,
      logo?: string | null,
      internal?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type UpdateClientMutationVariables = {
  input: UpdateClientInput,
  condition?: ModelClientConditionInput | null,
};

export type UpdateClientMutation = {
  updateClient?:  {
    __typename: "Client",
    id: string,
    name: string,
    description?: string | null,
    logo?: string | null,
    url?: string | null,
    feedback?: string | null,
    display?: boolean | null,
    ignoreme?: string | null,
    createdAt: string,
    updatedAt: string,
    projects?:  {
      __typename: "Project",
      id: string,
      name: string,
      date?: string | null,
      description?: string | null,
      features?: Array< string | null > | null,
      url?: string | null,
      images?: Array< string | null > | null,
      display?: boolean | null,
      logo?: string | null,
      internal?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type DeleteClientMutationVariables = {
  input: DeleteClientInput,
  condition?: ModelClientConditionInput | null,
};

export type DeleteClientMutation = {
  deleteClient?:  {
    __typename: "Client",
    id: string,
    name: string,
    description?: string | null,
    logo?: string | null,
    url?: string | null,
    feedback?: string | null,
    display?: boolean | null,
    ignoreme?: string | null,
    createdAt: string,
    updatedAt: string,
    projects?:  {
      __typename: "Project",
      id: string,
      name: string,
      date?: string | null,
      description?: string | null,
      features?: Array< string | null > | null,
      url?: string | null,
      images?: Array< string | null > | null,
      display?: boolean | null,
      logo?: string | null,
      internal?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type CreateTagMutationVariables = {
  input: CreateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type CreateTagMutation = {
  createTag?:  {
    __typename: "Tag",
    id: string,
    name?: string | null,
    category?: string | null,
    display?: boolean | null,
    logo?: string | null,
    createdAt: string,
    updatedAt: string,
    projects?:  {
      __typename: "ModelTaggedProjectConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateTagMutationVariables = {
  input: UpdateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type UpdateTagMutation = {
  updateTag?:  {
    __typename: "Tag",
    id: string,
    name?: string | null,
    category?: string | null,
    display?: boolean | null,
    logo?: string | null,
    createdAt: string,
    updatedAt: string,
    projects?:  {
      __typename: "ModelTaggedProjectConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteTagMutationVariables = {
  input: DeleteTagInput,
  condition?: ModelTagConditionInput | null,
};

export type DeleteTagMutation = {
  deleteTag?:  {
    __typename: "Tag",
    id: string,
    name?: string | null,
    category?: string | null,
    display?: boolean | null,
    logo?: string | null,
    createdAt: string,
    updatedAt: string,
    projects?:  {
      __typename: "ModelTaggedProjectConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateTaggedProjectMutationVariables = {
  input: CreateTaggedProjectInput,
  condition?: ModelTaggedProjectConditionInput | null,
};

export type CreateTaggedProjectMutation = {
  createTaggedProject?:  {
    __typename: "TaggedProject",
    id: string,
    createdAt: string,
    updatedAt: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      date?: string | null,
      description?: string | null,
      features?: Array< string | null > | null,
      url?: string | null,
      images?: Array< string | null > | null,
      display?: boolean | null,
      logo?: string | null,
      internal?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      name?: string | null,
      category?: string | null,
      display?: boolean | null,
      logo?: string | null,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type UpdateTaggedProjectMutationVariables = {
  input: UpdateTaggedProjectInput,
  condition?: ModelTaggedProjectConditionInput | null,
};

export type UpdateTaggedProjectMutation = {
  updateTaggedProject?:  {
    __typename: "TaggedProject",
    id: string,
    createdAt: string,
    updatedAt: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      date?: string | null,
      description?: string | null,
      features?: Array< string | null > | null,
      url?: string | null,
      images?: Array< string | null > | null,
      display?: boolean | null,
      logo?: string | null,
      internal?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      name?: string | null,
      category?: string | null,
      display?: boolean | null,
      logo?: string | null,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type DeleteTaggedProjectMutationVariables = {
  input: DeleteTaggedProjectInput,
  condition?: ModelTaggedProjectConditionInput | null,
};

export type DeleteTaggedProjectMutation = {
  deleteTaggedProject?:  {
    __typename: "TaggedProject",
    id: string,
    createdAt: string,
    updatedAt: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      date?: string | null,
      description?: string | null,
      features?: Array< string | null > | null,
      url?: string | null,
      images?: Array< string | null > | null,
      display?: boolean | null,
      logo?: string | null,
      internal?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      name?: string | null,
      category?: string | null,
      display?: boolean | null,
      logo?: string | null,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type GetProjectQueryVariables = {
  id: string,
};

export type GetProjectQuery = {
  getProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    date?: string | null,
    description?: string | null,
    features?: Array< string | null > | null,
    url?: string | null,
    images?: Array< string | null > | null,
    display?: boolean | null,
    logo?: string | null,
    internal?: string | null,
    createdAt: string,
    updatedAt: string,
    employer?:  {
      __typename: "Employer",
      id: string,
      name: string,
      startdate?: string | null,
      enddate?: string | null,
      url?: string | null,
      logo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    client:  {
      __typename: "Client",
      id: string,
      name: string,
      description?: string | null,
      logo?: string | null,
      url?: string | null,
      feedback?: string | null,
      display?: boolean | null,
      ignoreme?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    tags?:  {
      __typename: "ModelTaggedProjectConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListProjectsQueryVariables = {
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProjectsQuery = {
  listProjects?:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      id: string,
      name: string,
      date?: string | null,
      description?: string | null,
      features?: Array< string | null > | null,
      url?: string | null,
      images?: Array< string | null > | null,
      display?: boolean | null,
      logo?: string | null,
      internal?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEmployerQueryVariables = {
  id: string,
};

export type GetEmployerQuery = {
  getEmployer?:  {
    __typename: "Employer",
    id: string,
    name: string,
    startdate?: string | null,
    enddate?: string | null,
    url?: string | null,
    logo?: string | null,
    createdAt: string,
    updatedAt: string,
    projects?:  {
      __typename: "ModelProjectConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListEmployersQueryVariables = {
  filter?: ModelEmployerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEmployersQuery = {
  listEmployers?:  {
    __typename: "ModelEmployerConnection",
    items:  Array< {
      __typename: "Employer",
      id: string,
      name: string,
      startdate?: string | null,
      enddate?: string | null,
      url?: string | null,
      logo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetClientQueryVariables = {
  id: string,
};

export type GetClientQuery = {
  getClient?:  {
    __typename: "Client",
    id: string,
    name: string,
    description?: string | null,
    logo?: string | null,
    url?: string | null,
    feedback?: string | null,
    display?: boolean | null,
    ignoreme?: string | null,
    createdAt: string,
    updatedAt: string,
    projects?:  {
      __typename: "Project",
      id: string,
      name: string,
      date?: string | null,
      description?: string | null,
      features?: Array< string | null > | null,
      url?: string | null,
      images?: Array< string | null > | null,
      display?: boolean | null,
      logo?: string | null,
      internal?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type ListClientsQueryVariables = {
  filter?: ModelClientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListClientsQuery = {
  listClients?:  {
    __typename: "ModelClientConnection",
    items:  Array< {
      __typename: "Client",
      id: string,
      name: string,
      description?: string | null,
      logo?: string | null,
      url?: string | null,
      feedback?: string | null,
      display?: boolean | null,
      ignoreme?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTagQueryVariables = {
  id: string,
};

export type GetTagQuery = {
  getTag?:  {
    __typename: "Tag",
    id: string,
    name?: string | null,
    category?: string | null,
    display?: boolean | null,
    logo?: string | null,
    createdAt: string,
    updatedAt: string,
    projects?:  {
      __typename: "ModelTaggedProjectConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListTagsQueryVariables = {
  filter?: ModelTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTagsQuery = {
  listTags?:  {
    __typename: "ModelTagConnection",
    items:  Array< {
      __typename: "Tag",
      id: string,
      name?: string | null,
      category?: string | null,
      display?: boolean | null,
      logo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTaggedProjectQueryVariables = {
  id: string,
};

export type GetTaggedProjectQuery = {
  getTaggedProject?:  {
    __typename: "TaggedProject",
    id: string,
    createdAt: string,
    updatedAt: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      date?: string | null,
      description?: string | null,
      features?: Array< string | null > | null,
      url?: string | null,
      images?: Array< string | null > | null,
      display?: boolean | null,
      logo?: string | null,
      internal?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      name?: string | null,
      category?: string | null,
      display?: boolean | null,
      logo?: string | null,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type ListTaggedProjectsQueryVariables = {
  filter?: ModelTaggedProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTaggedProjectsQuery = {
  listTaggedProjects?:  {
    __typename: "ModelTaggedProjectConnection",
    items:  Array< {
      __typename: "TaggedProject",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateProjectSubscriptionVariables = {
};

export type OnCreateProjectSubscription = {
  onCreateProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    date?: string | null,
    description?: string | null,
    features?: Array< string | null > | null,
    url?: string | null,
    images?: Array< string | null > | null,
    display?: boolean | null,
    logo?: string | null,
    internal?: string | null,
    createdAt: string,
    updatedAt: string,
    employer?:  {
      __typename: "Employer",
      id: string,
      name: string,
      startdate?: string | null,
      enddate?: string | null,
      url?: string | null,
      logo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    client:  {
      __typename: "Client",
      id: string,
      name: string,
      description?: string | null,
      logo?: string | null,
      url?: string | null,
      feedback?: string | null,
      display?: boolean | null,
      ignoreme?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    tags?:  {
      __typename: "ModelTaggedProjectConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateProjectSubscriptionVariables = {
};

export type OnUpdateProjectSubscription = {
  onUpdateProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    date?: string | null,
    description?: string | null,
    features?: Array< string | null > | null,
    url?: string | null,
    images?: Array< string | null > | null,
    display?: boolean | null,
    logo?: string | null,
    internal?: string | null,
    createdAt: string,
    updatedAt: string,
    employer?:  {
      __typename: "Employer",
      id: string,
      name: string,
      startdate?: string | null,
      enddate?: string | null,
      url?: string | null,
      logo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    client:  {
      __typename: "Client",
      id: string,
      name: string,
      description?: string | null,
      logo?: string | null,
      url?: string | null,
      feedback?: string | null,
      display?: boolean | null,
      ignoreme?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    tags?:  {
      __typename: "ModelTaggedProjectConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteProjectSubscriptionVariables = {
};

export type OnDeleteProjectSubscription = {
  onDeleteProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    date?: string | null,
    description?: string | null,
    features?: Array< string | null > | null,
    url?: string | null,
    images?: Array< string | null > | null,
    display?: boolean | null,
    logo?: string | null,
    internal?: string | null,
    createdAt: string,
    updatedAt: string,
    employer?:  {
      __typename: "Employer",
      id: string,
      name: string,
      startdate?: string | null,
      enddate?: string | null,
      url?: string | null,
      logo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    client:  {
      __typename: "Client",
      id: string,
      name: string,
      description?: string | null,
      logo?: string | null,
      url?: string | null,
      feedback?: string | null,
      display?: boolean | null,
      ignoreme?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    tags?:  {
      __typename: "ModelTaggedProjectConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateEmployerSubscriptionVariables = {
};

export type OnCreateEmployerSubscription = {
  onCreateEmployer?:  {
    __typename: "Employer",
    id: string,
    name: string,
    startdate?: string | null,
    enddate?: string | null,
    url?: string | null,
    logo?: string | null,
    createdAt: string,
    updatedAt: string,
    projects?:  {
      __typename: "ModelProjectConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateEmployerSubscriptionVariables = {
};

export type OnUpdateEmployerSubscription = {
  onUpdateEmployer?:  {
    __typename: "Employer",
    id: string,
    name: string,
    startdate?: string | null,
    enddate?: string | null,
    url?: string | null,
    logo?: string | null,
    createdAt: string,
    updatedAt: string,
    projects?:  {
      __typename: "ModelProjectConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteEmployerSubscriptionVariables = {
};

export type OnDeleteEmployerSubscription = {
  onDeleteEmployer?:  {
    __typename: "Employer",
    id: string,
    name: string,
    startdate?: string | null,
    enddate?: string | null,
    url?: string | null,
    logo?: string | null,
    createdAt: string,
    updatedAt: string,
    projects?:  {
      __typename: "ModelProjectConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateClientSubscriptionVariables = {
};

export type OnCreateClientSubscription = {
  onCreateClient?:  {
    __typename: "Client",
    id: string,
    name: string,
    description?: string | null,
    logo?: string | null,
    url?: string | null,
    feedback?: string | null,
    display?: boolean | null,
    ignoreme?: string | null,
    createdAt: string,
    updatedAt: string,
    projects?:  {
      __typename: "Project",
      id: string,
      name: string,
      date?: string | null,
      description?: string | null,
      features?: Array< string | null > | null,
      url?: string | null,
      images?: Array< string | null > | null,
      display?: boolean | null,
      logo?: string | null,
      internal?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnUpdateClientSubscriptionVariables = {
};

export type OnUpdateClientSubscription = {
  onUpdateClient?:  {
    __typename: "Client",
    id: string,
    name: string,
    description?: string | null,
    logo?: string | null,
    url?: string | null,
    feedback?: string | null,
    display?: boolean | null,
    ignoreme?: string | null,
    createdAt: string,
    updatedAt: string,
    projects?:  {
      __typename: "Project",
      id: string,
      name: string,
      date?: string | null,
      description?: string | null,
      features?: Array< string | null > | null,
      url?: string | null,
      images?: Array< string | null > | null,
      display?: boolean | null,
      logo?: string | null,
      internal?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnDeleteClientSubscriptionVariables = {
};

export type OnDeleteClientSubscription = {
  onDeleteClient?:  {
    __typename: "Client",
    id: string,
    name: string,
    description?: string | null,
    logo?: string | null,
    url?: string | null,
    feedback?: string | null,
    display?: boolean | null,
    ignoreme?: string | null,
    createdAt: string,
    updatedAt: string,
    projects?:  {
      __typename: "Project",
      id: string,
      name: string,
      date?: string | null,
      description?: string | null,
      features?: Array< string | null > | null,
      url?: string | null,
      images?: Array< string | null > | null,
      display?: boolean | null,
      logo?: string | null,
      internal?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnCreateTagSubscriptionVariables = {
};

export type OnCreateTagSubscription = {
  onCreateTag?:  {
    __typename: "Tag",
    id: string,
    name?: string | null,
    category?: string | null,
    display?: boolean | null,
    logo?: string | null,
    createdAt: string,
    updatedAt: string,
    projects?:  {
      __typename: "ModelTaggedProjectConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateTagSubscriptionVariables = {
};

export type OnUpdateTagSubscription = {
  onUpdateTag?:  {
    __typename: "Tag",
    id: string,
    name?: string | null,
    category?: string | null,
    display?: boolean | null,
    logo?: string | null,
    createdAt: string,
    updatedAt: string,
    projects?:  {
      __typename: "ModelTaggedProjectConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteTagSubscriptionVariables = {
};

export type OnDeleteTagSubscription = {
  onDeleteTag?:  {
    __typename: "Tag",
    id: string,
    name?: string | null,
    category?: string | null,
    display?: boolean | null,
    logo?: string | null,
    createdAt: string,
    updatedAt: string,
    projects?:  {
      __typename: "ModelTaggedProjectConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateTaggedProjectSubscriptionVariables = {
};

export type OnCreateTaggedProjectSubscription = {
  onCreateTaggedProject?:  {
    __typename: "TaggedProject",
    id: string,
    createdAt: string,
    updatedAt: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      date?: string | null,
      description?: string | null,
      features?: Array< string | null > | null,
      url?: string | null,
      images?: Array< string | null > | null,
      display?: boolean | null,
      logo?: string | null,
      internal?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      name?: string | null,
      category?: string | null,
      display?: boolean | null,
      logo?: string | null,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type OnUpdateTaggedProjectSubscriptionVariables = {
};

export type OnUpdateTaggedProjectSubscription = {
  onUpdateTaggedProject?:  {
    __typename: "TaggedProject",
    id: string,
    createdAt: string,
    updatedAt: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      date?: string | null,
      description?: string | null,
      features?: Array< string | null > | null,
      url?: string | null,
      images?: Array< string | null > | null,
      display?: boolean | null,
      logo?: string | null,
      internal?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      name?: string | null,
      category?: string | null,
      display?: boolean | null,
      logo?: string | null,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type OnDeleteTaggedProjectSubscriptionVariables = {
};

export type OnDeleteTaggedProjectSubscription = {
  onDeleteTaggedProject?:  {
    __typename: "TaggedProject",
    id: string,
    createdAt: string,
    updatedAt: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      date?: string | null,
      description?: string | null,
      features?: Array< string | null > | null,
      url?: string | null,
      images?: Array< string | null > | null,
      display?: boolean | null,
      logo?: string | null,
      internal?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      name?: string | null,
      category?: string | null,
      display?: boolean | null,
      logo?: string | null,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};
