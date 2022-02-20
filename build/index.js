"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_logger_1 = __importDefault(require("koa-logger"));
const koa_json_1 = __importDefault(require("koa-json"));
const routes_1 = require("./routes");
const PORT = process.env.PORT || `4700`;
const app = new koa_1.default();
app.use((0, koa_json_1.default)());
app.use(koa_logger_1.default);
app.use(routes_1.router.routes()).use(routes_1.router.allowedMethods());
app.listen(PORT, () => {
    console.log(`server esta escuchando en puerto ${PORT}`);
});
//# sourceMappingURL=index.js.map