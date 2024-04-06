import * as query from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";
import { Amplify } from "aws-amplify";
import awsconfig from "@/aws-exports";
import { generateClient } from "aws-amplify/api";
import { Client, UpdateClientMutation } from "@/API";
import { WithListsFixed } from "@/utils/awsTypeHelpers";

const getFormattedInput = ({
  id,
  name,
  description,
  logo,
  url,
  feedback,
  display,
}) => {
  const formattedInput: { id?: string } = {};

  if (id) {
    formattedInput.id = id;
  }

  return { name, description, logo, url, feedback, display, ...formattedInput };
};

Amplify.configure(awsconfig, { ssr: true });
const client = generateClient();

const getClient = async (clientId) => {
  const { data } = await client.graphql({
    query: query.getClient,
    variables: { id: clientId },
    authMode: "userPool",
  });

  const clientData = data ? data.getClient : data;
  return { client: clientData };
};

const getClients = async () => {
  const { data } = await client.graphql({
    query: query.listClients,
    variables: { limit: 500 },
    authMode: "userPool",
  });

  const clients = data ? data.listClients.items : data;
  return { clients: clients };
};

const addClient = ({ clientData, onSuccess }) => {
  const formattedClient = getFormattedInput(clientData);
  client
    .graphql({
      query: mutations.createClient,
      variables: { input: formattedClient },
      authMode: "userPool",
    })
    .then(({ data: { createClient } }) => onSuccess(createClient));
};

const deleteClient = ({ clientId, onSuccess }) => {
  client
    .graphql({
      query: mutations.deleteClient,
      variables: { input: { id: clientId } },
      authMode: "userPool",
    })
    .then(() => onSuccess(clientId));
};

const updateClient = ({
  clientData,
  onSuccess,
}: {
  clientData: Client;
  onSuccess?: (
    onSuccessData: Exclude<
      WithListsFixed<UpdateClientMutation["updateClient"]>,
      undefined | null
    >,
  ) => void;
}) => {
  client
    .graphql({
      query: mutations.updateClient,
      variables: { input: clientData },
      authMode: "userPool",
    })
    .then(({ data: { updateClient } }) => onSuccess?.(updateClient));
};

export { getClient, getClients, addClient, deleteClient, updateClient };
