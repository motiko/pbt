/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePlayerInput = {
  id?: string | null,
  email?: string | null,
  rating?: number | null,
};

export type ModelPlayerConditionInput = {
  email?: ModelStringInput | null,
  rating?: ModelIntInput | null,
  and?: Array< ModelPlayerConditionInput | null > | null,
  or?: Array< ModelPlayerConditionInput | null > | null,
  not?: ModelPlayerConditionInput | null,
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

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Player = {
  __typename: "Player",
  id?: string,
  email?: string | null,
  rating?: number | null,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdatePlayerInput = {
  id: string,
  email?: string | null,
  rating?: number | null,
};

export type DeletePlayerInput = {
  id?: string | null,
};

export type CreatePuzzleInput = {
  id?: string | null,
  initialFen?: string | null,
  initialMove?: string | null,
  puzzleFen: string,
  lines?: string | null,
  color?: string | null,
  rating?: number | null,
};

export type ModelPuzzleConditionInput = {
  initialFen?: ModelStringInput | null,
  initialMove?: ModelStringInput | null,
  puzzleFen?: ModelStringInput | null,
  lines?: ModelStringInput | null,
  color?: ModelStringInput | null,
  rating?: ModelIntInput | null,
  and?: Array< ModelPuzzleConditionInput | null > | null,
  or?: Array< ModelPuzzleConditionInput | null > | null,
  not?: ModelPuzzleConditionInput | null,
};

export type Puzzle = {
  __typename: "Puzzle",
  id?: string,
  initialFen?: string | null,
  initialMove?: string | null,
  puzzleFen?: string,
  lines?: string | null,
  color?: string | null,
  rating?: number | null,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdatePuzzleInput = {
  id: string,
  initialFen?: string | null,
  initialMove?: string | null,
  puzzleFen?: string | null,
  lines?: string | null,
  color?: string | null,
  rating?: number | null,
};

export type DeletePuzzleInput = {
  id?: string | null,
};

export type CreateBattleInput = {
  id?: string | null,
  puzzleId: string,
  currentFen?: string | null,
  moves?: Array< string | null > | null,
  players?: Array< string | null > | null,
};

export type ModelBattleConditionInput = {
  puzzleId?: ModelIDInput | null,
  currentFen?: ModelStringInput | null,
  moves?: ModelStringInput | null,
  players?: ModelStringInput | null,
  and?: Array< ModelBattleConditionInput | null > | null,
  or?: Array< ModelBattleConditionInput | null > | null,
  not?: ModelBattleConditionInput | null,
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

export type Battle = {
  __typename: "Battle",
  id?: string,
  puzzleId?: string,
  puzzle?: Puzzle,
  currentFen?: string | null,
  moves?: Array< string | null > | null,
  players?: Array< string | null > | null,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateBattleInput = {
  id: string,
  puzzleId?: string | null,
  currentFen?: string | null,
  moves?: Array< string | null > | null,
  players?: Array< string | null > | null,
};

export type DeleteBattleInput = {
  id?: string | null,
};

export type ModelPlayerFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  rating?: ModelIntInput | null,
  and?: Array< ModelPlayerFilterInput | null > | null,
  or?: Array< ModelPlayerFilterInput | null > | null,
  not?: ModelPlayerFilterInput | null,
};

export type ModelPlayerConnection = {
  __typename: "ModelPlayerConnection",
  items?:  Array<Player | null > | null,
  nextToken?: string | null,
};

export type ModelPuzzleFilterInput = {
  id?: ModelIDInput | null,
  initialFen?: ModelStringInput | null,
  initialMove?: ModelStringInput | null,
  puzzleFen?: ModelStringInput | null,
  lines?: ModelStringInput | null,
  color?: ModelStringInput | null,
  rating?: ModelIntInput | null,
  and?: Array< ModelPuzzleFilterInput | null > | null,
  or?: Array< ModelPuzzleFilterInput | null > | null,
  not?: ModelPuzzleFilterInput | null,
};

export type ModelPuzzleConnection = {
  __typename: "ModelPuzzleConnection",
  items?:  Array<Puzzle | null > | null,
  nextToken?: string | null,
};

export type ModelBattleFilterInput = {
  id?: ModelIDInput | null,
  puzzleId?: ModelIDInput | null,
  currentFen?: ModelStringInput | null,
  moves?: ModelStringInput | null,
  players?: ModelStringInput | null,
  and?: Array< ModelBattleFilterInput | null > | null,
  or?: Array< ModelBattleFilterInput | null > | null,
  not?: ModelBattleFilterInput | null,
};

export type ModelBattleConnection = {
  __typename: "ModelBattleConnection",
  items?:  Array<Battle | null > | null,
  nextToken?: string | null,
};

export type CreatePlayerMutationVariables = {
  input?: CreatePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type CreatePlayerMutation = {
  createPlayer?:  {
    __typename: "Player",
    id: string,
    email?: string | null,
    rating?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePlayerMutationVariables = {
  input?: UpdatePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type UpdatePlayerMutation = {
  updatePlayer?:  {
    __typename: "Player",
    id: string,
    email?: string | null,
    rating?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePlayerMutationVariables = {
  input?: DeletePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type DeletePlayerMutation = {
  deletePlayer?:  {
    __typename: "Player",
    id: string,
    email?: string | null,
    rating?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePuzzleMutationVariables = {
  input?: CreatePuzzleInput,
  condition?: ModelPuzzleConditionInput | null,
};

export type CreatePuzzleMutation = {
  createPuzzle?:  {
    __typename: "Puzzle",
    id: string,
    initialFen?: string | null,
    initialMove?: string | null,
    puzzleFen: string,
    lines?: string | null,
    color?: string | null,
    rating?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePuzzleMutationVariables = {
  input?: UpdatePuzzleInput,
  condition?: ModelPuzzleConditionInput | null,
};

export type UpdatePuzzleMutation = {
  updatePuzzle?:  {
    __typename: "Puzzle",
    id: string,
    initialFen?: string | null,
    initialMove?: string | null,
    puzzleFen: string,
    lines?: string | null,
    color?: string | null,
    rating?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePuzzleMutationVariables = {
  input?: DeletePuzzleInput,
  condition?: ModelPuzzleConditionInput | null,
};

export type DeletePuzzleMutation = {
  deletePuzzle?:  {
    __typename: "Puzzle",
    id: string,
    initialFen?: string | null,
    initialMove?: string | null,
    puzzleFen: string,
    lines?: string | null,
    color?: string | null,
    rating?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBattleMutationVariables = {
  input?: CreateBattleInput,
  condition?: ModelBattleConditionInput | null,
};

export type CreateBattleMutation = {
  createBattle?:  {
    __typename: "Battle",
    id: string,
    puzzleId: string,
    puzzle?:  {
      __typename: "Puzzle",
      id: string,
      initialFen?: string | null,
      initialMove?: string | null,
      puzzleFen: string,
      lines?: string | null,
      color?: string | null,
      rating?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    currentFen?: string | null,
    moves?: Array< string | null > | null,
    players?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBattleMutationVariables = {
  input?: UpdateBattleInput,
  condition?: ModelBattleConditionInput | null,
};

export type UpdateBattleMutation = {
  updateBattle?:  {
    __typename: "Battle",
    id: string,
    puzzleId: string,
    puzzle?:  {
      __typename: "Puzzle",
      id: string,
      initialFen?: string | null,
      initialMove?: string | null,
      puzzleFen: string,
      lines?: string | null,
      color?: string | null,
      rating?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    currentFen?: string | null,
    moves?: Array< string | null > | null,
    players?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBattleMutationVariables = {
  input?: DeleteBattleInput,
  condition?: ModelBattleConditionInput | null,
};

export type DeleteBattleMutation = {
  deleteBattle?:  {
    __typename: "Battle",
    id: string,
    puzzleId: string,
    puzzle?:  {
      __typename: "Puzzle",
      id: string,
      initialFen?: string | null,
      initialMove?: string | null,
      puzzleFen: string,
      lines?: string | null,
      color?: string | null,
      rating?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    currentFen?: string | null,
    moves?: Array< string | null > | null,
    players?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetPlayerQueryVariables = {
  id?: string,
};

export type GetPlayerQuery = {
  getPlayer?:  {
    __typename: "Player",
    id: string,
    email?: string | null,
    rating?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPlayersQueryVariables = {
  filter?: ModelPlayerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlayersQuery = {
  listPlayers?:  {
    __typename: "ModelPlayerConnection",
    items?:  Array< {
      __typename: "Player",
      id: string,
      email?: string | null,
      rating?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPuzzleQueryVariables = {
  id?: string,
};

export type GetPuzzleQuery = {
  getPuzzle?:  {
    __typename: "Puzzle",
    id: string,
    initialFen?: string | null,
    initialMove?: string | null,
    puzzleFen: string,
    lines?: string | null,
    color?: string | null,
    rating?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPuzzlesQueryVariables = {
  filter?: ModelPuzzleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPuzzlesQuery = {
  listPuzzles?:  {
    __typename: "ModelPuzzleConnection",
    items?:  Array< {
      __typename: "Puzzle",
      id: string,
      initialFen?: string | null,
      initialMove?: string | null,
      puzzleFen: string,
      lines?: string | null,
      color?: string | null,
      rating?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetBattleQueryVariables = {
  id?: string,
};

export type GetBattleQuery = {
  getBattle?:  {
    __typename: "Battle",
    id: string,
    puzzleId: string,
    puzzle?:  {
      __typename: "Puzzle",
      id: string,
      initialFen?: string | null,
      initialMove?: string | null,
      puzzleFen: string,
      lines?: string | null,
      color?: string | null,
      rating?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    currentFen?: string | null,
    moves?: Array< string | null > | null,
    players?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBattlesQueryVariables = {
  filter?: ModelBattleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBattlesQuery = {
  listBattles?:  {
    __typename: "ModelBattleConnection",
    items?:  Array< {
      __typename: "Battle",
      id: string,
      puzzleId: string,
      puzzle?:  {
        __typename: "Puzzle",
        id: string,
        initialFen?: string | null,
        initialMove?: string | null,
        puzzleFen: string,
        lines?: string | null,
        color?: string | null,
        rating?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      currentFen?: string | null,
      moves?: Array< string | null > | null,
      players?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePlayerSubscription = {
  onCreatePlayer?:  {
    __typename: "Player",
    id: string,
    email?: string | null,
    rating?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePlayerSubscription = {
  onUpdatePlayer?:  {
    __typename: "Player",
    id: string,
    email?: string | null,
    rating?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePlayerSubscription = {
  onDeletePlayer?:  {
    __typename: "Player",
    id: string,
    email?: string | null,
    rating?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePuzzleSubscription = {
  onCreatePuzzle?:  {
    __typename: "Puzzle",
    id: string,
    initialFen?: string | null,
    initialMove?: string | null,
    puzzleFen: string,
    lines?: string | null,
    color?: string | null,
    rating?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePuzzleSubscription = {
  onUpdatePuzzle?:  {
    __typename: "Puzzle",
    id: string,
    initialFen?: string | null,
    initialMove?: string | null,
    puzzleFen: string,
    lines?: string | null,
    color?: string | null,
    rating?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePuzzleSubscription = {
  onDeletePuzzle?:  {
    __typename: "Puzzle",
    id: string,
    initialFen?: string | null,
    initialMove?: string | null,
    puzzleFen: string,
    lines?: string | null,
    color?: string | null,
    rating?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBattleSubscription = {
  onCreateBattle?:  {
    __typename: "Battle",
    id: string,
    puzzleId: string,
    puzzle?:  {
      __typename: "Puzzle",
      id: string,
      initialFen?: string | null,
      initialMove?: string | null,
      puzzleFen: string,
      lines?: string | null,
      color?: string | null,
      rating?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    currentFen?: string | null,
    moves?: Array< string | null > | null,
    players?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBattleSubscription = {
  onUpdateBattle?:  {
    __typename: "Battle",
    id: string,
    puzzleId: string,
    puzzle?:  {
      __typename: "Puzzle",
      id: string,
      initialFen?: string | null,
      initialMove?: string | null,
      puzzleFen: string,
      lines?: string | null,
      color?: string | null,
      rating?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    currentFen?: string | null,
    moves?: Array< string | null > | null,
    players?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBattleSubscription = {
  onDeleteBattle?:  {
    __typename: "Battle",
    id: string,
    puzzleId: string,
    puzzle?:  {
      __typename: "Puzzle",
      id: string,
      initialFen?: string | null,
      initialMove?: string | null,
      puzzleFen: string,
      lines?: string | null,
      color?: string | null,
      rating?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    currentFen?: string | null,
    moves?: Array< string | null > | null,
    players?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
