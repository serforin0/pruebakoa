"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const koa_router_1 = __importDefault(require("koa-router"));
exports.router = new koa_router_1.default();
exports.router.get('/', async (ctx, next) => {
    ctx.body = { msg: 'hello world' };
    await next();
});
//# sourceMappingURL=index.js.map