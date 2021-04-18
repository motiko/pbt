/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer {
    onCreatePlayer {
      id
      email
      rating
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer {
    onUpdatePlayer {
      id
      email
      rating
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer {
    onDeletePlayer {
      id
      email
      rating
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePuzzle = /* GraphQL */ `
  subscription OnCreatePuzzle {
    onCreatePuzzle {
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
export const onUpdatePuzzle = /* GraphQL */ `
  subscription OnUpdatePuzzle {
    onUpdatePuzzle {
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
export const onDeletePuzzle = /* GraphQL */ `
  subscription OnDeletePuzzle {
    onDeletePuzzle {
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
export const onCreateBattle = /* GraphQL */ `
  subscription OnCreateBattle {
    onCreateBattle {
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
export const onUpdateBattle = /* GraphQL */ `
  subscription OnUpdateBattle {
    onUpdateBattle {
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
export const onDeleteBattle = /* GraphQL */ `
  subscription OnDeleteBattle {
    onDeleteBattle {
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
