import app from "./app";

app.listen(app.get("port"));

console.log("Serveeer on port", app.get("port"));
