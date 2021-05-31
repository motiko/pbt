export default async (req, res) => {
  const push = req.body;
  console.log("Processing push", JSON.stringify(push, null, ""));

  const t0 = Date.now();
  try {
    await sendPoke();

    res.send("ok");
  } catch (e) {
    console.error(e);
    res.status(500).send(e.toString());
  } finally {
    console.log("Processed push in", Date.now() - t0);
  }
};

async function sendPoke() {
  // TODO
}
