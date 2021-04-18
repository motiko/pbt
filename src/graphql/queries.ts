/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
      id
      email
      rating
      createdAt
      updatedAt
    }
  }
`;
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        rating
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPuzzle = /* GraphQL */ `
  query GetPuzzle($id: ID!) {
    getPuzzle(id: $id) {
      id
      initialFen
      initialMove
      puzzleFen
      lines
      color
      rating
      createdAt
      updatedAt
    }
  }
`;
export const listPuzzles = /* GraphQL */ `
  query ListPuzzles(
    $filter: ModelPuzzleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPuzzles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        initialFen
        initialMove
        puzzleFen
        lines
        color
        rating
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBattle = /* GraphQL */ `
  query GetBattle($id: ID!) {
    getBattle(id: $id) {
      id
      puzzleId
      puzzle {
        id
        initialFen
        initialMove
        puzzleFen
        lines
        color
        rating
        createdAt
        updatedAt
      }
      currentFen
      moves
      players
      createdAt
      updatedAt
    }
  }
`;
export const listBattles = /* GraphQL */ `
  query ListBattles(
    $filter: ModelBattleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBattles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        puzzleId
        puzzle {
          id
          initialFen
          initialMove
          puzzleFen
          lines
          color
          rating
          createdAt
          updatedAt
        }
        currentFen
        moves
        players
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
