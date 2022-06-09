import app from "./src/app";

app.listen(app.get("port"));

console.log("Serveeer on port", app.get("port"));
