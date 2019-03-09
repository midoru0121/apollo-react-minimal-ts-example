import React, { useState } from "react";
import { ApolloProvider } from "react-apollo";
import {
  ApolloProvider as ApolloHooksProvider,
  useMutation,
  useQuery
} from "react-apollo-hooks";
import { appClient } from "./graphql/client";
import { GET_USERS, CREATE_USER } from "./graphql/tags/getUser";

interface User {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

interface Users {
  users: User[];
}

const UserList = () => {
  const { data, error, loading } = useQuery<Users>(GET_USERS);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>`Error! ${error.message}`</div>;
  }

  return (
    <ul>
      {data!.users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

const UserInput = () => {
  const [state, setState] = useState("");
  const createUser = useMutation<{ createUser: Users }>(CREATE_USER, {
    refetchQueries: [{ query: GET_USERS }],
    variables: { name: state }
  });

  const onClick = () => {
    createUser();
  };

  const onChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setState(e.currentTarget.value);
  };

  return (
    <div>
      <input type="text" value={state} onChange={onChange} />
      <button onClick={onClick}>Add</button>
    </div>
  );
};

export const App = () => (
  <ApolloProvider client={appClient}>
    <ApolloHooksProvider client={appClient}>
      <UserInput />
      <UserList />
    </ApolloHooksProvider>
  </ApolloProvider>
);
