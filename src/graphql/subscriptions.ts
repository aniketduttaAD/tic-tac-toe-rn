/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer($owner: String) {
    onCreatePlayer(owner: $owner) {
      id
      cognitoID
      username
      name
      email
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer($owner: String) {
    onUpdatePlayer(owner: $owner) {
      id
      cognitoID
      username
      name
      email
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer($owner: String) {
    onDeletePlayer(owner: $owner) {
      id
      cognitoID
      username
      name
      email
      createdAt
      updatedAt
      owner
    }
  }
`;
