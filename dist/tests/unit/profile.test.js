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
exports.default = execAllProfileTests;
const assert_1 = __importDefault(require("assert"));
function request(headers) {
    return __awaiter(this, void 0, void 0, function* () {
        const fetch = (yield import('node-fetch')).default;
        try {
            const resp = yield fetch(`http://localhost:${process.env.PORT}/profile`, {
                headers,
            });
            return resp.json();
        }
        catch (error) {
            throw error;
        }
    });
}
;
function test6() {
    return __awaiter(this, void 0, void 0, function* () {
        const wrongHeaders = {};
        const res = yield request(wrongHeaders);
        try {
            assert_1.default.strictEqual("error" in res, true, 'expected error');
            console.log('\x1b[32m%s\x1b[0m', `${test6.name} is passed`);
        }
        catch (error) {
            console.error(`${test6.name} is failed. Expected: ${error.message}`);
        }
    });
}
;
function test7() {
    return __awaiter(this, void 0, void 0, function* () {
        const wrongHeaders = {
            Authorization: "wrongToken"
        };
        const res = yield request(wrongHeaders);
        try {
            assert_1.default.strictEqual("error" in res, true, 'expected error');
            console.log('\x1b[32m%s\x1b[0m', `${test7.name} is passed`);
        }
        catch (error) {
            console.error(`${test7.name} is failed. Expected: ${error.message}`);
        }
    });
}
;
function test8() {
    return __awaiter(this, void 0, void 0, function* () {
        const wrongHeaders = {
            Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFybWFuLm1pa295YW4xQGdtYWlsLmNvbSIsImlhdCI6MTcyMzIwNjUxN30.CQTWK4mwsIRy5tR7xAfIEkgaSYGSoqJLvNJ96hpsZcE"
        };
        const res = yield request(wrongHeaders);
        try {
            assert_1.default.strictEqual("error" in res, true, 'expected error');
            console.log('\x1b[32m%s\x1b[0m', `${test8.name} is passed`);
        }
        catch (error) {
            console.error(`${test8.name} is failed. Expected: ${error.message}`);
        }
    });
}
;
function test9() {
    return __awaiter(this, void 0, void 0, function* () {
        const correctHeaders = {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFybWFuLm1pa295YW4xQGdtYWlsLmNvbSIsImlhdCI6MTcyMzIwNjUxN30.CQTWK4mwsIRy5tR7xAfIEkgaSYGSoqJLvNJ96hpsZcE"
        };
        const res = yield request(correctHeaders);
        try {
            assert_1.default.strictEqual("email" in res && "username" in res, true, 'expected user object');
            console.log('\x1b[32m%s\x1b[0m', `${test9.name} is passed`);
        }
        catch (error) {
            console.error(`${test9.name} is failed. Expected: ${error.message}`);
        }
    });
}
;
function execAllProfileTests() {
    return __awaiter(this, void 0, void 0, function* () {
        yield test6();
        yield test7();
        yield test8();
        yield test9();
    });
}
;
