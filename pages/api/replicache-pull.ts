export default async (req, res) => {
  res.json({
    // We will discuss these two fields in later steps.
    lastMutationID: 0,
    cookie: null,
    patch: [
      { op: "clear" },
      {
        op: "put",
        key: "move/qpdgkvpb9ao",
        value: {
          from: "e2",
          to:"e4",
          order: 1,
        },
      },
      {
        op: "put",
        key: "move/5ahljadc408",
        value: {
          from: "e7",
          to:"e5",
          order: 2,
        },
      },
    ],
  });
  res.end();
};
