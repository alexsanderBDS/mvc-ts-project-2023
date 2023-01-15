import express from "express";
import routes from "./routes/index";
import path from "path";
import livereload from "livereload";
import connectLivereload from "connect-livereload";

const port = 3000;
const app = express();
const liveReloadServer = livereload.createServer();

const views_folder = path.join(__dirname, "views");
const styles_folder = path.join(__dirname, "styles");
const assets_folder = path.join(__dirname, "assets");

liveReloadServer.watch([views_folder, styles_folder]);

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

app.use(express.static(styles_folder));
app.use(express.static(assets_folder));
app.use(connectLivereload());
app.use("/", routes);
app.set("views", views_folder);
app.set("view engine", "ejs");

app.listen(port, () => {
  console.log("Server Running on port " + port);
});
