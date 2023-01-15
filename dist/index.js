"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const path_1 = __importDefault(require("path"));
const livereload_1 = __importDefault(require("livereload"));
const connect_livereload_1 = __importDefault(require("connect-livereload"));
const port = 3000;
const app = (0, express_1.default)();
const liveReloadServer = livereload_1.default.createServer();
const views_folder = path_1.default.join(__dirname, "views");
const styles_folder = path_1.default.join(__dirname, "styles");
const assets_folder = path_1.default.join(__dirname, "assets");
liveReloadServer.watch([views_folder, styles_folder]);
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});
app.use(express_1.default.static(styles_folder));
app.use(express_1.default.static(assets_folder));
app.use((0, connect_livereload_1.default)());
app.use("/", index_1.default);
app.set("views", views_folder);
app.set("view engine", "ejs");
app.listen(port, () => {
    console.log("Server Running on port " + port);
});
