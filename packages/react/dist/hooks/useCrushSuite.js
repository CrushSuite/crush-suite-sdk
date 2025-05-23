"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCrushSuite = exports.CrushSuiteContext = void 0;
const react_1 = require("react");
exports.CrushSuiteContext = (0, react_1.createContext)(null);
const useCrushSuite = () => {
    const ctx = (0, react_1.useContext)(exports.CrushSuiteContext);
    if (!ctx)
        throw new Error('useCrushSuite must be used within CrushSuiteProvider');
    return ctx;
};
exports.useCrushSuite = useCrushSuite;
