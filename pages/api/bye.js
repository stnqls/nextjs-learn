export default function handler(req, res) {
  res.status(200).json({ text: "bye" });
  console.log("api/bye");
}
