/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ "./src/js/form.js":
      /*!************************!*\
  !*** ./src/js/form.js ***!
  \************************/
      /***/ () => {
        eval(
          'const form = document.getElementById("formToggle");\nconsole.log(form);\n\nconst toggleForm = () => {\n  if (form.style.display === "none") {\n    form.style.display = "block";\n  } else {\n    form.style.display = "none";\n  }\n}\n\nconst newContactButton = document.getElementById("new-contact");\n\nnewContactButton.addEventListener(\'click\', event => {\n toggleForm()\n})\n\n\n//# sourceURL=webpack://client/./src/js/form.js?'
        );

        /***/
      },

    /***/ "./src/js/index.js":
      /*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./src/js/form.js");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_form__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _submit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submit */ "./src/js/submit.js");\n/* harmony import */ var _submit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_submit__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconsole.log("Hello World");\n\n\n//# sourceURL=webpack://client/./src/js/index.js?'
        );

        /***/
      },

    /***/ "./src/js/submit.js":
      /*!**************************!*\
  !*** ./src/js/submit.js ***!
  \**************************/
      /***/ () => {
        eval(
          'const submitButton = document.getElementById("submit-button");\nsubmitButton.disabled = true;\n\n\n//# sourceURL=webpack://client/./src/js/submit.js?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./src/js/index.js");
  /******/
  /******/
})();

/** copied html file */

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  
    <!--Bootstrap CDN-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <!--CSS file-->
    <link rel="stylesheet" href="./src/css/card.css">
    <link rel="stylesheet" href="./src/css/form.css">
    <link rel="stylesheet" href="./src/css/header.css">
    <link rel="stylesheet" href="./src/css/index.css">

   
    <title>Contact Cards</title>
  </head>
  <body>
 
<!-- Navigation -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img id= "logo" src="./assets/images/logo.png" alt="...">
      </a>
      <h2 id= "navbar-header">Contact Cards</h2>
     
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <button type="submit" id="new-contact"class="btn btn-light" height="48px">CREATE NEW CONTACT</button>
        </ul>
        <!--TODO: INSTALL BUTTON -->
      </div>
  </nav>
  
  <!-- Page Content -->

  <!--Toggleable Form -->
  <section class="shadow-lg p-3 mb-5 bg-body rounded" id="formToggle">
    <form id="contact-form">
      <!--Name-->
      <div class="form-group">
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-control" id="name" placeholder="ex. Joe Smith">
        </div>

      <!--Email-->
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" placeholder="youremail@email.com">
      </div>

        <!--Phone-->
        <div class="mb-3">
          <label for="phone" class="form-label">Phone</label>
          <input type="phone" class="form-control" id="phone" placeholder="ex. 555-555-5555">
        </div>

        <!--Radio Buttons-->
        <div id="radio-select">
            <div class="form-check">
            <p>Pick profile image below:</p>
            <input class="form-check-input" type="radio"  data-src= "Bear" name="exampleRadios"  value="Bear" checked>
            <label class="form-check-label" for="exampleRadios1">
              <img id="bearThumbnail"  src="./src/images/bear.png" alt="" width="60" height="60">
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" data-pic= "Dog" name="exampleRadios"  value="Dog">
            <label class="form-check-label" for="exampleRadios2">
              <img id="dogThumbnail" src="./src/images/dog.png" alt="" width="60" height="60">
            </label>
          </div>
        </div>
     
      <!--Form Submit Button-->
      <button type="submit" class="btn btn-dark" id="submit-button">Submit</button>
    </form>
</section>

<!--Card Gallery-->

<section class="d-flex p-2 bd-highlight flex-wrap justify-content-evenly" id="card-gallery">
<div class="card shadow p-3 mb-5 bg-body rounded">
  <div class="card-header">
    Name 
  </div>
  <div class="card-body">
    <h5 class="card-title">Email</h5>
    <h5 class="card-title">Phone</h5>
    <button type="button" class="btn btn-dark">Edit</button>
    <button type="button" class="btn btn-danger">Delete</button>
  </div>
</div>

<div class="card shadow p-3 mb-5 bg-body rounded">
  <div class="card-header">
    Name 
  </div>
  <div class="card-body">
    <h5 class="card-title">Email</h5>
    <h5 class="card-title">Phone</h5>
    <button type="button" class="btn btn-dark">Edit</button>
    <button type="button" class="btn btn-danger">Delete</button>
  </div>
</div>

<div class="card shadow p-3 mb-5 bg-body rounded">
  <div class="card-header">
    Name 
  </div>
  <div class="card-body">
    <h5 class="card-title">Email</h5>
    <h5 class="card-title">Phone</h5>
    <button type="button" class="btn btn-dark">Edit</button>
    <button type="button" class="btn btn-danger">Delete</button>
  </div>
</div>
</section>

<!--Bootstrap Script Bundle including Popper-->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

<!-- Script files-->
<script src="./main.js"></script>

  </body>
</html>