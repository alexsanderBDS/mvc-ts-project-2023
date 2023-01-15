"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
console.log("hello");
router.get("/", (req, res) => {
    res.json({ status: true, title: "app-ts-node" });
});
