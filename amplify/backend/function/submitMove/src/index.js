/* Amplify Params - DO NOT EDIT
	API_PBT_GRAPHQLAPIENDPOINTOUTPUT
	API_PBT_GRAPHQLAPIIDOUTPUT
	API_PBT_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const axios = require("axios");
const gql = require("graphql-tag");
const graphql = require("graphql");
const { print } = graphql;

const getPuzzle = gql`
  query GetPuzzle($id: ID!) {
    getPuzzle(id: $id) {
      lines
    }
  }
`;

exports.handler = async (event) => {
  try {
    const graphqlData = await axios({
      url: process.env.API_PBT_GRAPHQLAPIENDPOINTOUTPUT,
      method: "post",
      headers: {
        "x-api-key": process.env.API_PBT_GRAPHQLAPIKEYOUTPUT,
      },
      data: {
        query: print(getPuzzle),
        variables: { id: event.puzzleId },
      },
    });
    const moves = event.moves.split(" ");
    const currentLine = graphqlData.data.data.getPuzzle.lines;
    const correctMoves = verifyMoves(moves, JSON.parse(currentLine));
    return {
      statusCode: 200,
      body: correctMoves,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
    };
  } catch (err) {
    console.error("error posting to appsync: ", err);
  }
};

function verifyMoves(moves, lines) {
  let currentLine = lines;
  return moves.every((move, i) => {
    const goodMoves = Object.keys(currentLine);
    if (goodMoves.includes(move)) {
      currentLine = currentLine[move];
      return true;
    }
    return false;
  });
}
