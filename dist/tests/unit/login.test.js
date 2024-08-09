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
exports.default = execAllLoginTests;
const assert_1 = __importDefault(require("assert"));
function request(reqBody) {
    return __awaiter(this, void 0, void 0, function* () {
        const fetch = (yield import('node-fetch')).default;
        try {
            const resp = yield fetch(`http://localhost:${process.env.PORT}/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reqBody),
            });
            return resp.json();
        }
        catch (error) {
            throw error;
        }
    });
}
;
function test1() {
    return __awaiter(this, void 0, void 0, function* () {
        const correctReqBody = {
            email: "arman.mikoyan1@gmail.com",
            password: "Arman111",
        };
        const res = yield request(correctReqBody);
        try {
            assert_1.default.strictEqual("accessToken" in res, true, 'expected access token');
            console.log('\x1b[32m%s\x1b[0m', `${test1.name} is passed`);
        }
        catch (error) {
            console.error(`${test1.name} is failed. Expected: ${error.message}`);
        }
    });
}
;
function test2() {
    return __awaiter(this, void 0, void 0, function* () {
        const wrongReqBody = {
            email: "arman.1@gmail.com",
            password: "Arman111",
        };
        const res = yield request(wrongReqBody);
        try {
            assert_1.default.strictEqual("message" in res, true, 'error message is expected');
            console.log('\x1b[32m%s\x1b[0m', `${test2.name} is passed`);
        }
        catch (error) {
            console.error(`${test2.name} is failed. Expected: ${error.message}`);
        }
    });
}
;
function test3() {
    return __awaiter(this, void 0, void 0, function* () {
        const wrongReqBody = {
            email: "arman.mikoyan1@gmail.com",
            password: "wrongEmail",
        };
        const res = yield request(wrongReqBody);
        try {
            assert_1.default.strictEqual("message" in res, true, 'error message is expected');
            console.log('\x1b[32m%s\x1b[0m', `${test3.name} is passed`);
        }
        catch (error) {
            console.error(`${test3.name} is failed. Expected: ${error.message}`);
        }
    });
}
;
function test4() {
    return __awaiter(this, void 0, void 0, function* () {
        const wrongReqBody = {
            email: "",
            password: "wrongEmail",
        };
        const res = yield request(wrongReqBody);
        try {
            assert_1.default.strictEqual("errors" in res, true, 'error message is expected');
            console.log('\x1b[32m%s\x1b[0m', `${test4.name} is passed`);
        }
        catch (error) {
            console.error(`${test4.name} is failed. Expected: ${error.message}`);
        }
    });
}
;
function test5() {
    return __awaiter(this, void 0, void 0, function* () {
        const wrongReqBody = {};
        const res = yield request(wrongReqBody);
        try {
            assert_1.default.strictEqual("errors" in res, true, 'error message is expected');
            console.log('\x1b[32m%s\x1b[0m', `${test5.name} is passed`);
        }
        catch (error) {
            console.error(`${test5.name} is failed. Expected: ${error.message}`);
        }
    });
}
;
function execAllLoginTests() {
    return __awaiter(this, void 0, void 0, function* () {
        yield test1();
        yield test2();
        yield test3();
        yield test4();
        yield test5();
    });
}
;
