/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
      id
      email
      rating
      createdAt
      updatedAt
    }
  }
`;
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
      id
      email
      rating
      createdAt
      updatedAt
    }
  }
`;
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
      id
      email
      rating
      createdAt
      updatedAt
    }
  }
`;
export const createPuzzle = /* GraphQL */ `
  mutation CreatePuzzle(
    $input: CreatePuzzleInput!
    $condition: ModelPuzzleConditionInput
  ) {
    createPuzzle(input: $input, condition: $condition) {
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
export const updatePuzzle = /* GraphQL */ `
  mutation UpdatePuzzle(
    $input: UpdatePuzzleInput!
    $condition: ModelPuzzleConditionInput
  ) {
    updatePuzzle(input: $input, condition: $condition) {
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
export const deletePuzzle = /* GraphQL */ `
  mutation DeletePuzzle(
    $input: DeletePuzzleInput!
    $condition: ModelPuzzleConditionInput
  ) {
    deletePuzzle(input: $input, condition: $condition) {
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
export const createBattle = /* GraphQL */ `
  mutation CreateBattle(
    $input: CreateBattleInput!
    $condition: ModelBattleConditionInput
  ) {
    createBattle(input: $input, condition: $condition) {
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
export const updateBattle = /* GraphQL */ `
  mutation UpdateBattle(
    $input: UpdateBattleInput!
    $condition: ModelBattleConditionInput
  ) {
    updateBattle(input: $input, condition: $condition) {
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
export const deleteBattle = /* GraphQL */ `
  mutation DeleteBattle(
    $input: DeleteBattleInput!
    $condition: ModelBattleConditionInput
  ) {
    deleteBattle(input: $input, condition: $condition) {
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
