"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/addproduct";
exports.ids = ["pages/api/addproduct"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./middleware/mongoose.js":
/*!********************************!*\
  !*** ./middleware/mongoose.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectDb = (handler)=>async (req, res)=>{\n        if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) {\n            return handler(req, res);\n        }\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URI);\n        return handler(req, res);\n    }\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDb);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9taWRkbGV3YXJlL21vbmdvb3NlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxTQUFTLEdBQUdDLENBQUFBLE9BQU8sR0FBSSxPQUFPQyxHQUFHLEVBQUVDLEdBQUcsR0FBSztRQUMvQyxJQUFJSiwyRUFBa0MsRUFBRTtZQUN0QyxPQUFPRSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxDQUFDLENBQUM7U0FDMUI7UUFDRCxNQUFNSix1REFBZ0IsQ0FBQ1EsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFNBQVMsQ0FBQyxDQUFDO1FBQzlDLE9BQU9SLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLENBQUMsQ0FBQztLQUMxQjtBQUFDO0FBRUYsaUVBQWVILFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tZXJjZS8uL21pZGRsZXdhcmUvbW9uZ29vc2UuanM/YTc5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IGNvbm5lY3REYiA9IGhhbmRsZXIgPT4gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGlmIChtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlKSB7XG4gICAgcmV0dXJuIGhhbmRsZXIocmVxLCByZXMpO1xuICB9XG4gIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fVVJJKTtcbiAgcmV0dXJuIGhhbmRsZXIocmVxLCByZXMpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERiO1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdERiIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09fVVJJIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./middleware/mongoose.js\n");

/***/ }),

/***/ "(api)/./models/Product.js":
/*!***************************!*\
  !*** ./models/Product.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst ProductSchema = new mongoose.Schema({\n    title: {\n        type: String,\n        required: true\n    },\n    slug: {\n        type: String,\n        required: true\n    },\n    desc: {\n        type: String,\n        required: true\n    },\n    img: {\n        type: String,\n        required: true\n    },\n    category: {\n        type: String,\n        required: true\n    },\n    price: {\n        type: Number,\n        required: true\n    },\n    availableQty: {\n        type: Number,\n        required: true\n    },\n    size: {\n        type: String\n    },\n    color: {\n        type: String\n    }\n}, {\n    timestamps: true\n});\nmongoose.models = {};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose.model(\"Product\", ProductSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvUHJvZHVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsUUFBUSxHQUFHQyxtQkFBTyxDQUFDLDBCQUFVLENBQUM7QUFFcEMsTUFBTUMsYUFBYSxHQUFHLElBQUlGLFFBQVEsQ0FBQ0csTUFBTSxDQUN2QztJQUNFQyxLQUFLLEVBQUU7UUFBRUMsSUFBSSxFQUFFQyxNQUFNO1FBQUVDLFFBQVEsRUFBRSxJQUFJO0tBQUU7SUFDdkNDLElBQUksRUFBRTtRQUFFSCxJQUFJLEVBQUVDLE1BQU07UUFBRUMsUUFBUSxFQUFFLElBQUk7S0FBRTtJQUN0Q0UsSUFBSSxFQUFFO1FBQUVKLElBQUksRUFBRUMsTUFBTTtRQUFFQyxRQUFRLEVBQUUsSUFBSTtLQUFFO0lBQ3RDRyxHQUFHLEVBQUU7UUFBRUwsSUFBSSxFQUFFQyxNQUFNO1FBQUVDLFFBQVEsRUFBRSxJQUFJO0tBQUU7SUFDckNJLFFBQVEsRUFBRTtRQUFFTixJQUFJLEVBQUVDLE1BQU07UUFBRUMsUUFBUSxFQUFFLElBQUk7S0FBRTtJQUMxQ0ssS0FBSyxFQUFFO1FBQUVQLElBQUksRUFBRVEsTUFBTTtRQUFFTixRQUFRLEVBQUUsSUFBSTtLQUFFO0lBQ3ZDTyxZQUFZLEVBQUU7UUFBRVQsSUFBSSxFQUFFUSxNQUFNO1FBQUVOLFFBQVEsRUFBRSxJQUFJO0tBQUU7SUFDOUNRLElBQUksRUFBRTtRQUFFVixJQUFJLEVBQUVDLE1BQU07S0FBRTtJQUN0QlUsS0FBSyxFQUFFO1FBQUVYLElBQUksRUFBRUMsTUFBTTtLQUFFO0NBQ3hCLEVBQ0Q7SUFBRVcsVUFBVSxFQUFFLElBQUk7Q0FBRSxDQUNyQjtBQUNEakIsUUFBUSxDQUFDa0IsTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNyQixpRUFBZWxCLFFBQVEsQ0FBQ21CLEtBQUssQ0FBQyxTQUFTLEVBQUVqQixhQUFhLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tZXJjZS8uL21vZGVscy9Qcm9kdWN0LmpzPzA5YzYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7XG5cbmNvbnN0IFByb2R1Y3RTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxuICB7XG4gICAgdGl0bGU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIHNsdWc6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIGRlc2M6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIGltZzogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgY2F0ZWdvcnk6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIHByaWNlOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBhdmFpbGFibGVRdHk6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIHNpemU6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgY29sb3I6IHsgdHlwZTogU3RyaW5nIH0sXG4gIH0sXG4gIHsgdGltZXN0YW1wczogdHJ1ZSB9XG4pO1xubW9uZ29vc2UubW9kZWxzID0ge307XG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbChcIlByb2R1Y3RcIiwgUHJvZHVjdFNjaGVtYSk7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJyZXF1aXJlIiwiUHJvZHVjdFNjaGVtYSIsIlNjaGVtYSIsInRpdGxlIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwic2x1ZyIsImRlc2MiLCJpbWciLCJjYXRlZ29yeSIsInByaWNlIiwiTnVtYmVyIiwiYXZhaWxhYmxlUXR5Iiwic2l6ZSIsImNvbG9yIiwidGltZXN0YW1wcyIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/Product.js\n");

/***/ }),

/***/ "(api)/./pages/api/addproduct.js":
/*!*********************************!*\
  !*** ./pages/api/addproduct.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/Product */ \"(api)/./models/Product.js\");\n/* harmony import */ var _middleware_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../middleware/mongoose */ \"(api)/./middleware/mongoose.js\");\n\n\nconst handler = async (req, res)=>{\n    if (req.method == \"POST\") {\n        console.log(\"AA gaya\");\n        // console.log(req.body);\n        for(let i = 0; i < req.body.length; i++){\n            let p = new _models_Product__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n                title: req.body[i].title,\n                slug: req.body[i].slug,\n                desc: req.body[i].desc,\n                img: req.body[i].img,\n                category: req.body[i].category,\n                price: req.body[i].price,\n                availableQty: req.body[i].availableQty,\n                size: req.body[i].size,\n                color: req.body[i].color\n            });\n            await p.save();\n        }\n        res.status(200).json({\n            success: \"Success\"\n        });\n    } else {\n        res.status(400).json({\n            error: \"This method is not allowed\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_middleware_mongoose__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(handler));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkcHJvZHVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkM7QUFDTztBQUVsRCxNQUFNRSxPQUFPLEdBQUcsT0FBT0MsR0FBRyxFQUFFQyxHQUFHLEdBQUs7SUFDbEMsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLElBQUksTUFBTSxFQUFFO1FBQ3hCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2Qix5QkFBeUI7UUFDekIsSUFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdMLEdBQUcsQ0FBQ00sSUFBSSxDQUFDQyxNQUFNLEVBQUVGLENBQUMsRUFBRSxDQUFFO1lBQ3hDLElBQUlHLENBQUMsR0FBRyxJQUFJWCx1REFBTyxDQUFDO2dCQUNsQlksS0FBSyxFQUFFVCxHQUFHLENBQUNNLElBQUksQ0FBQ0QsQ0FBQyxDQUFDLENBQUNJLEtBQUs7Z0JBQ3hCQyxJQUFJLEVBQUVWLEdBQUcsQ0FBQ00sSUFBSSxDQUFDRCxDQUFDLENBQUMsQ0FBQ0ssSUFBSTtnQkFDdEJDLElBQUksRUFBRVgsR0FBRyxDQUFDTSxJQUFJLENBQUNELENBQUMsQ0FBQyxDQUFDTSxJQUFJO2dCQUN0QkMsR0FBRyxFQUFFWixHQUFHLENBQUNNLElBQUksQ0FBQ0QsQ0FBQyxDQUFDLENBQUNPLEdBQUc7Z0JBQ3BCQyxRQUFRLEVBQUViLEdBQUcsQ0FBQ00sSUFBSSxDQUFDRCxDQUFDLENBQUMsQ0FBQ1EsUUFBUTtnQkFDOUJDLEtBQUssRUFBRWQsR0FBRyxDQUFDTSxJQUFJLENBQUNELENBQUMsQ0FBQyxDQUFDUyxLQUFLO2dCQUN4QkMsWUFBWSxFQUFFZixHQUFHLENBQUNNLElBQUksQ0FBQ0QsQ0FBQyxDQUFDLENBQUNVLFlBQVk7Z0JBQ3RDQyxJQUFJLEVBQUVoQixHQUFHLENBQUNNLElBQUksQ0FBQ0QsQ0FBQyxDQUFDLENBQUNXLElBQUk7Z0JBQ3RCQyxLQUFLLEVBQUVqQixHQUFHLENBQUNNLElBQUksQ0FBQ0QsQ0FBQyxDQUFDLENBQUNZLEtBQUs7YUFDekIsQ0FBQztZQUNGLE1BQU1ULENBQUMsQ0FBQ1UsSUFBSSxFQUFFLENBQUM7U0FDaEI7UUFDRGpCLEdBQUcsQ0FBQ2tCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRSxTQUFTO1NBQUUsQ0FBQyxDQUFDO0tBQzlDLE1BQU07UUFDTHBCLEdBQUcsQ0FBQ2tCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVFLEtBQUssRUFBRSw0QkFBNEI7U0FBRSxDQUFDLENBQUM7S0FDL0Q7Q0FDRjtBQUVELGlFQUFleEIsZ0VBQVMsQ0FBQ0MsT0FBTyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UvLi9wYWdlcy9hcGkvYWRkcHJvZHVjdC5qcz85NmU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0IGZyb20gJy4uLy4uL21vZGVscy9Qcm9kdWN0JztcbmltcG9ydCBjb25uZWN0RGIgZnJvbSAnLi4vLi4vbWlkZGxld2FyZS9tb25nb29zZSc7XG5cbmNvbnN0IGhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgaWYgKHJlcS5tZXRob2QgPT0gJ1BPU1QnKSB7XG4gICAgY29uc29sZS5sb2coJ0FBIGdheWEnKTtcbiAgICAvLyBjb25zb2xlLmxvZyhyZXEuYm9keSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXEuYm9keS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHAgPSBuZXcgUHJvZHVjdCh7XG4gICAgICAgIHRpdGxlOiByZXEuYm9keVtpXS50aXRsZSxcbiAgICAgICAgc2x1ZzogcmVxLmJvZHlbaV0uc2x1ZyxcbiAgICAgICAgZGVzYzogcmVxLmJvZHlbaV0uZGVzYyxcbiAgICAgICAgaW1nOiByZXEuYm9keVtpXS5pbWcsXG4gICAgICAgIGNhdGVnb3J5OiByZXEuYm9keVtpXS5jYXRlZ29yeSxcbiAgICAgICAgcHJpY2U6IHJlcS5ib2R5W2ldLnByaWNlLFxuICAgICAgICBhdmFpbGFibGVRdHk6IHJlcS5ib2R5W2ldLmF2YWlsYWJsZVF0eSxcbiAgICAgICAgc2l6ZTogcmVxLmJvZHlbaV0uc2l6ZSxcbiAgICAgICAgY29sb3I6IHJlcS5ib2R5W2ldLmNvbG9yLFxuICAgICAgfSk7XG4gICAgICBhd2FpdCBwLnNhdmUoKTtcbiAgICB9XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiAnU3VjY2VzcycgfSk7XG4gIH0gZWxzZSB7XG4gICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogJ1RoaXMgbWV0aG9kIGlzIG5vdCBhbGxvd2VkJyB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERiKGhhbmRsZXIpO1xuIl0sIm5hbWVzIjpbIlByb2R1Y3QiLCJjb25uZWN0RGIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiY29uc29sZSIsImxvZyIsImkiLCJib2R5IiwibGVuZ3RoIiwicCIsInRpdGxlIiwic2x1ZyIsImRlc2MiLCJpbWciLCJjYXRlZ29yeSIsInByaWNlIiwiYXZhaWxhYmxlUXR5Iiwic2l6ZSIsImNvbG9yIiwic2F2ZSIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/addproduct.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/addproduct.js"));
module.exports = __webpack_exports__;

})();