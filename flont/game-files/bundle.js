/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./ts-scripts/funs.ts":
/*!****************************!*\
  !*** ./ts-scripts/funs.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.reverse_piece = void 0;\nconst main_1 = __webpack_require__(/*! ./main */ \"./ts-scripts/main.ts\");\nconst reverse_piece = (x, y) => {\n    try {\n        if (main_1.stage.map[y + 1][x] != main_1.turn.n) {\n            for (let i = y; main_1.stage_height > i; i++) {\n                if (main_1.stage.map[i][x] == main_1.turn.n) {\n                    for (let g = y; i >= g; g++) {\n                        main_1.stage.map[g][x] = main_1.turn.n;\n                    }\n                    // break\n                }\n            }\n        }\n    }\n    catch {\n    }\n    try {\n        if (main_1.stage.map[y - 1][x] != main_1.turn.n) {\n            for (let i = y; i >= 0; i--) {\n                if (main_1.stage.map[i][x] == main_1.turn.n) {\n                    for (let g = y; i <= g; g--) {\n                        main_1.stage.map[g][x] = main_1.turn.n;\n                    }\n                    // break\n                }\n            }\n        }\n    }\n    catch {\n    }\n    try {\n        if (main_1.stage.map[y][x + 1] != main_1.turn.n) {\n            for (let i = x; main_1.stage_height > i; i++) {\n                if (main_1.stage.map[y][i] == main_1.turn.n) {\n                    for (let g = x; i >= g; g++) {\n                        main_1.stage.map[y][g] = main_1.turn.n;\n                    }\n                }\n            }\n        }\n    }\n    catch {\n    }\n    try {\n        if (main_1.stage.map[y][x - 1] != main_1.turn.n) {\n            for (let i = x; i >= 0; i--) {\n                if (main_1.stage.map[y][i] == main_1.turn.n) {\n                    for (let g = x; i <= g; g--) {\n                        main_1.stage.map[y][g] = main_1.turn.n;\n                    }\n                }\n            }\n        }\n    }\n    catch {\n    }\n    try {\n        if (main_1.stage.map[y + 1][x + 1] != main_1.turn.n) {\n            let co = 0;\n            for (let i = x; main_1.stage_height > i; i++) {\n                if (main_1.stage.map[y + co][i] == main_1.turn.n) {\n                    let co2 = 0;\n                    for (let g = x; i >= g; g++) {\n                        main_1.stage.map[y + co2][g] = main_1.turn.n;\n                        co2 += 1;\n                    }\n                }\n                co += 1;\n            }\n        }\n    }\n    catch {\n    }\n    try {\n        if (main_1.stage.map[y - 1][x - 1] != main_1.turn.n) {\n            let co = y;\n            for (let i = x; i >= 0; i--) {\n                if (main_1.stage.map[co][i] == main_1.turn.n) {\n                    let co2 = y;\n                    for (let g = x; i <= g; g--) {\n                        main_1.stage.map[co2][g] = main_1.turn.n;\n                        co2 -= 1;\n                    }\n                }\n                co -= 1;\n            }\n        }\n    }\n    catch {\n    }\n    try {\n        if (main_1.stage.map[y - 1][x + 1] != main_1.turn.n) {\n            let co = y;\n            for (let i = x; main_1.stage_height > i; i++) {\n                if (main_1.stage.map[co][i] == main_1.turn.n) {\n                    let co2 = y;\n                    for (let g = x; i > g; g++) {\n                        main_1.stage.map[co2][g] = main_1.turn.n;\n                        co2 -= 1;\n                    }\n                }\n                co -= 1;\n            }\n        }\n    }\n    catch {\n    }\n    try {\n        if (main_1.stage.map[y + 1][x - 1] != main_1.turn.n) {\n            let co = y;\n            for (let i = x; i >= 0; i--) {\n                if (main_1.stage.map[co][i] == main_1.turn.n) {\n                    let co2 = y;\n                    for (let g = x; i <= g; g--) {\n                        main_1.stage.map[co2][g] = main_1.turn.n;\n                        co2 += 1;\n                    }\n                }\n                co += 1;\n            }\n        }\n    }\n    catch {\n    }\n};\nexports.reverse_piece = reverse_piece;\n\n\n//# sourceURL=webpack://app_8_server_3/./ts-scripts/funs.ts?");

/***/ }),

/***/ "./ts-scripts/game_system.ts":
/*!***********************************!*\
  !*** ./ts-scripts/game_system.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.setPiece = exports.check_reverse = exports.checkPutSpace = exports.turn_change = void 0;\nconst funs_1 = __webpack_require__(/*! ./funs */ \"./ts-scripts/funs.ts\");\nconst main_1 = __webpack_require__(/*! ./main */ \"./ts-scripts/main.ts\");\nconst turn_change = () => {\n    if (main_1.turn.n == 1) {\n        main_1.turn.n = 2;\n    }\n    else {\n        main_1.turn.n = 1;\n    }\n};\nexports.turn_change = turn_change;\nconst checkPutSpace = () => {\n    ///複数個の判定ができないバグがある\n    for (let i = 0; main_1.stage_height > i; i++) {\n        for (let s = 0; main_1.stage_width > s; s++) {\n            try {\n                if (main_1.stage.map[i][s] != 0 && main_1.turn.n != main_1.stage.map[i][s] && main_1.stage.map[i][s] != 3 && (main_1.stage.map[i + 1][s] == 0 || main_1.stage.map[i - 1][s] == 0 || main_1.stage.map[i + 1][s + 1] == 0 || main_1.stage.map[i + 1][s - 1] == 0 || main_1.stage.map[i][s + 1] == 0 || main_1.stage.map[i][s - 1] == 0 || main_1.stage.map[i - 1][s - 1] == 0 || main_1.stage.map[i - 1][s + 1] == 0)) {\n                    if (main_1.stage.map[i][s + 1] != 0 && main_1.stage.map[i][s - 1] == 0) {\n                        for (let g = s; main_1.stage_width > g; g++) {\n                            if (main_1.stage.map[i][g] == main_1.turn.n) {\n                                main_1.stage.map[i][s - 1] = 3;\n                                console.log(main_1.stage.map);\n                                break;\n                            }\n                        }\n                    }\n                    console.log(\"f\");\n                    if (main_1.stage.map[i][s - 1] != 0 && main_1.stage.map[i][s + 1] == 0) {\n                        for (let g = s; 0 <= g; g--) {\n                            if (main_1.stage.map[i][g] == main_1.turn.n) {\n                                main_1.stage.map[i][s + 1] = 3;\n                                console.log(main_1.stage.map);\n                                break;\n                            }\n                        }\n                    }\n                    if (main_1.stage.map[i - 1][s] != 0 && main_1.stage.map[i + 1][s] == 0) {\n                        for (let g = i; 0 <= g; g--) {\n                            if (main_1.stage.map[g][s] == main_1.turn.n) {\n                                main_1.stage.map[i + 1][s] = 3;\n                                console.log(main_1.stage.map);\n                                break;\n                            }\n                        }\n                    }\n                    if (main_1.stage.map[i + 1][s] != 0 && main_1.stage.map[i - 1][s] == 0) {\n                        for (let g = i; main_1.stage_height > g; g++) {\n                            if (main_1.stage.map[g][s] == main_1.turn.n) {\n                                main_1.stage.map[i - 1][s] = 3;\n                                console.log(main_1.stage.map);\n                                break;\n                            }\n                        }\n                    }\n                    //斜め\n                    if (main_1.stage.map[i + 1][s + 1] != 0 && main_1.stage.map[i - 1][s - 1] == 0) {\n                        console.log(\"ff\");\n                        let s2 = s;\n                        for (let g = i; main_1.stage_height > g; g++) {\n                            if (main_1.stage_width > s2) {\n                                if (main_1.stage.map[g][s2] == main_1.turn.n) {\n                                    console.log(\"ff\");\n                                    main_1.stage.map[i - 1][s - 1] = 3;\n                                    console.log(main_1.stage.map);\n                                    break;\n                                }\n                                s2 += 1;\n                            }\n                        }\n                    }\n                    if (main_1.stage.map[i - 1][s - 1] != 0 && main_1.stage.map[i + 1][s + 1] == 0) {\n                        console.log(\"ff\");\n                        let s2 = s;\n                        for (let g = i; g >= 0; g--) {\n                            if (s2 >= 0) {\n                                if (main_1.stage.map[g][s2] == main_1.turn.n) {\n                                    console.log(\"ff\");\n                                    main_1.stage.map[i + 1][s + 1] = 3;\n                                    console.log(main_1.stage.map);\n                                    break;\n                                }\n                                s2 -= 1;\n                            }\n                        }\n                    }\n                    if (main_1.stage.map[i + 1][s - 1] != 0 && main_1.stage.map[i - 1][s + 1] == 0) {\n                        console.log(\"gg\");\n                        let s2 = s;\n                        for (let g = i; main_1.stage_height > g; g++) {\n                            if (s2 >= 0) {\n                                if (main_1.stage.map[g][s2] == main_1.turn.n) {\n                                    console.log(\"ff2\");\n                                    main_1.stage.map[i - 1][s + 1] = 3;\n                                    console.log(main_1.stage.map);\n                                    break;\n                                }\n                                s2 -= 1;\n                            }\n                        }\n                    }\n                    if (main_1.stage.map[i - 1][s + 1] != 0 && main_1.stage.map[i + 1][s - 1] == 0) {\n                        console.log(\"gg\");\n                        let s2 = s;\n                        for (let g = i; g >= 0; g--) {\n                            if (s2 < main_1.stage_height) {\n                                if (main_1.stage.map[g][s2] == main_1.turn.n) {\n                                    console.log(\"ff2\");\n                                    main_1.stage.map[i + 1][s - 1] = 3;\n                                    console.log(main_1.stage.map);\n                                    break;\n                                }\n                                s2 += 1;\n                            }\n                        }\n                    }\n                }\n            }\n            catch {\n            }\n        }\n    }\n};\nexports.checkPutSpace = checkPutSpace;\nconst check_reverse = (x, y) => {\n    (0, funs_1.reverse_piece)(x, y);\n};\nexports.check_reverse = check_reverse;\nconst setPiece = () => {\n    if (main_1.stage.map[main_1.my.p][main_1.mx.p] == 3) {\n        (0, exports.check_reverse)(main_1.mx.p, main_1.my.p);\n        (0, exports.turn_change)();\n        for (let i = 0; main_1.stage_height > i; i++) {\n            for (let s = 0; main_1.stage_width > s; s++) {\n                if (main_1.stage.map[i][s] == 3) {\n                    main_1.stage.map[i][s] = 0;\n                }\n            }\n        }\n        (0, exports.checkPutSpace)();\n    }\n};\nexports.setPiece = setPiece;\n\n\n//# sourceURL=webpack://app_8_server_3/./ts-scripts/game_system.ts?");

/***/ }),

/***/ "./ts-scripts/init.ts":
/*!****************************!*\
  !*** ./ts-scripts/init.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.set_stage = void 0;\nconst main_1 = __webpack_require__(/*! ./main */ \"./ts-scripts/main.ts\");\nconst set_stage = () => {\n    for (let i = 0; main_1.stage_height > i; i++) {\n        if (i + 1 == (main_1.stage_height) / 2) {\n            main_1.stage.map[i] = [0, 0, 0, 2, 1, 0, 0, 0];\n        }\n        else if (i + 1 == (main_1.stage_height) / 2 + 1) {\n            main_1.stage.map[i] = [0, 0, 0, 1, 2, 0, 0, 0];\n        }\n        else {\n            main_1.stage.map[i] = [0, 0, 0, 0, 0, 0, 0, 0];\n        }\n    }\n    console.log(main_1.stage);\n};\nexports.set_stage = set_stage;\n\n\n//# sourceURL=webpack://app_8_server_3/./ts-scripts/init.ts?");

/***/ }),

/***/ "./ts-scripts/main.ts":
/*!****************************!*\
  !*** ./ts-scripts/main.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.my = exports.mx = exports.myStage = exports.mxStage = exports.turn = exports.stage = exports.stage_space = exports.stage_height = exports.stage_width = exports.ctx = exports.canvas = void 0;\nconst game_system_1 = __webpack_require__(/*! ./game_system */ \"./ts-scripts/game_system.ts\");\nconst init_1 = __webpack_require__(/*! ./init */ \"./ts-scripts/init.ts\");\nconst write_ui_1 = __webpack_require__(/*! ./write_ui */ \"./ts-scripts/write_ui.ts\");\nexports.canvas = document.querySelector(\".canvas\");\nexports.ctx = exports.canvas.getContext(\"2d\");\nexports.stage_width = 8;\nexports.stage_height = 8;\nexports.stage_space = 600 / 8;\nexports.stage = {\n    map: []\n};\nexports.turn = { n: 1 };\nexports.mxStage = { p: 0 };\nexports.myStage = { p: 0 };\nexports.mx = { p: 0 };\nexports.my = { p: 0 };\nwindow.addEventListener(\"DOMContentLoaded\", () => {\n    exports.canvas.addEventListener(\"mousemove\", (e) => {\n        const rect = exports.canvas.getBoundingClientRect();\n        // console.log(e)\n        exports.mxStage.p = (e.pageX - rect.left) * (exports.canvas.width / rect.width);\n        exports.myStage.p = (e.pageY - rect.top) * (exports.canvas.height / rect.height);\n        exports.mx.p = Math.floor(exports.mxStage.p / 75);\n        exports.my.p = Math.floor(exports.myStage.p / 75);\n        // console.log(mx.p,my.p)\n    });\n});\nwindow.addEventListener(\"click\", () => {\n    (0, game_system_1.setPiece)();\n});\n(0, init_1.set_stage)();\nconsole.log(exports.stage.map);\n(0, game_system_1.checkPutSpace)();\nconsole.log(\"test\");\nconst main_loop = () => {\n    exports.ctx.clearRect(0, 0, 600, 600);\n    (0, write_ui_1.write_stage)();\n    (0, write_ui_1.writePiece)();\n    window.requestAnimationFrame(main_loop);\n};\nmain_loop();\n\n\n//# sourceURL=webpack://app_8_server_3/./ts-scripts/main.ts?");

/***/ }),

/***/ "./ts-scripts/write_ui.ts":
/*!********************************!*\
  !*** ./ts-scripts/write_ui.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.writePiece = exports.write_stage = void 0;\nconst main_1 = __webpack_require__(/*! ./main */ \"./ts-scripts/main.ts\");\nconst write_stage = () => {\n    main_1.ctx.beginPath();\n    for (let i = 0; main_1.stage_width - 1 > i; i++) {\n        write_line((i + 1) * main_1.stage_space, 0, (i + 1) * main_1.stage_space, 600, \"white\");\n    }\n    for (let s = 0; main_1.stage_height - 1 > s; s++) {\n        write_line(0, (s + 1) * main_1.stage_space, 600, (s + 1) * main_1.stage_space, \"white\");\n    }\n    main_1.ctx.stroke();\n};\nexports.write_stage = write_stage;\nconst writePiece = () => {\n    for (let i = 0; main_1.stage_height > i; i++) {\n        for (let s = 0; main_1.stage_width > s; s++) {\n            if (main_1.stage.map[s][i] == 2) {\n                main_1.ctx.beginPath();\n                main_1.ctx.arc(i * main_1.stage_space + 37.5, s * main_1.stage_space + 37.5, 36, 0 * Math.PI / 180, 360 * Math.PI / 180, false);\n                main_1.ctx.fillStyle = \"white\";\n                // 塗りつぶしを実行\n                main_1.ctx.fill();\n            }\n            if (main_1.stage.map[s][i] == 1) {\n                main_1.ctx.beginPath();\n                main_1.ctx.arc(i * main_1.stage_space + 37.5, s * main_1.stage_space + 37.5, 36, 0 * Math.PI / 180, 360 * Math.PI / 180, false);\n                main_1.ctx.fillStyle = \"black\";\n                // 塗りつぶしを実行\n                main_1.ctx.fill();\n            }\n            if (main_1.stage.map[s][i] == 3) {\n                main_1.ctx.beginPath();\n                main_1.ctx.arc(i * main_1.stage_space + 37.5, s * main_1.stage_space + 37.5, 20, 0 * Math.PI / 180, 360 * Math.PI / 180, false);\n                main_1.ctx.fillStyle = \"rgba(37, 254, 145, 0.54)\";\n                // 塗りつぶしを実行\n                main_1.ctx.fill();\n            }\n        }\n    }\n};\nexports.writePiece = writePiece;\nfunction write_line(x, y, x2, y2, color) {\n    main_1.ctx.strokeStyle = color;\n    main_1.ctx.moveTo(x, y);\n    main_1.ctx.lineTo(x2, y2);\n}\n\n\n//# sourceURL=webpack://app_8_server_3/./ts-scripts/write_ui.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./ts-scripts/main.ts");
/******/ 	
/******/ })()
;