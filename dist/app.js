"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const projectInput_1 = __importDefault(require("./projectInput"));
const projectList_1 = __importDefault(require("./projectList"));
new projectInput_1.default();
new projectList_1.default("active");
new projectList_1.default("finished");
//# sourceMappingURL=app.js.map