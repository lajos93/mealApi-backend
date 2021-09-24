"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = require("body-parser");
var dataRoutes_1 = require("./routes/data/dataRoutes");
var app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use(dataRoutes_1.dataRoutes);
app.listen(3000, function () {
    console.log("server up");
});
//# sourceMappingURL=index.js.map