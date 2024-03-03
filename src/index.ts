import express from "express";
import routes from "./routes/formatter";
import bodyParser from "body-parser";

const app = express();

app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use(routes);

app.listen(3000);
