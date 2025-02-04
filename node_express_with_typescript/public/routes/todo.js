"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const poo_1 = __importDefault(require("../pool/poo"));
const router = (0, express_1.Router)();
let counter = 3;
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body.name;
    try {
        yield poo_1.default.query(`INSERT INTO customers(id,name) VALUES ($1,$2)`, [counter, data]);
        counter = counter + 1;
        res.json({ mesage: "data inserted Successfully" });
    }
    catch (err) {
        res.json({ message: err });
    }
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield poo_1.default.query(` SELECT * FROM customers`);
        const ans = result.rows;
        res.json({ message: ans });
    }
    catch (err) {
        res.json({ message: "Error in Fetching Data" });
    }
}));
exports.default = router;
