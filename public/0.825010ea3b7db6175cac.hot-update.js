webpackHotUpdate(0,{

/***/ "./components/DocumentsDialog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(\"./node_modules/react/react.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_toolbox_lib_dialog__ = __webpack_require__(\"./node_modules/react-toolbox/lib/dialog/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_toolbox_lib_dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_toolbox_lib_dialog__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_button__ = __webpack_require__(\"./node_modules/react-toolbox/lib/button/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_button__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_toolbox_lib_list__ = __webpack_require__(\"./node_modules/react-toolbox/lib/list/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_toolbox_lib_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_toolbox_lib_list__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_toolbox_lib_font_icon__ = __webpack_require__(\"./node_modules/react-toolbox/lib/font_icon/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_toolbox_lib_font_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_toolbox_lib_font_icon__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\n\nvar DocumentsDialog = function (_React$Component) {\n  _inherits(DocumentsDialog, _React$Component);\n\n  function DocumentsDialog() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, DocumentsDialog);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DocumentsDialog.__proto__ || Object.getPrototypeOf(DocumentsDialog)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      active: false\n    }, _this.handleToggle = function () {\n      _this.setState({ active: !_this.state.active });\n    }, _this.actions = [{ label: \"Cancel\", onClick: _this.handleToggle }, { label: \"Save\", onClick: _this.handleToggle }], _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(DocumentsDialog, [{\n    key: 'render',\n    value: function render() {\n      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        'div',\n        null,\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_button___default.a, { label: 'Show my dialog', onClick: this.handleToggle }),\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n          __WEBPACK_IMPORTED_MODULE_1_react_toolbox_lib_dialog___default.a,\n          {\n            actions: this.actions,\n            active: this.state.active,\n            onEscKeyDown: this.handleToggle,\n            onOverlayClick: this.handleToggle,\n            title: 'Documents'\n          },\n          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            'div',\n            { style: {\n                height: 200,\n                overflowY: \"auto\"\n              } },\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n              __WEBPACK_IMPORTED_MODULE_3_react_toolbox_lib_list__[\"List\"],\n              { selectable: true, ripple: true },\n              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_toolbox_lib_list__[\"ListSubHeader\"], { caption: 'Plr #123' }),\n              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_toolbox_lib_list__[\"ListItem\"], {\n                avatar: 'https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg',\n                caption: 'SOmething.pdf'\n              }),\n              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_toolbox_lib_list__[\"ListItem\"], {\n                avatar: 'https://dl.dropboxusercontent.com/u/2247264/assets/o.jpg',\n                caption: 'Ozymandias'\n              }),\n              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_toolbox_lib_list__[\"ListItem\"], {\n                avatar: 'https://dl.dropboxusercontent.com/u/2247264/assets/r.jpg',\n                caption: 'Rorschach'\n              })\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return DocumentsDialog;\n}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (DocumentsDialog);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RvY3VtZW50c0RpYWxvZy5qcz8wZGY3Il0sIm5hbWVzIjpbIkRvY3VtZW50c0RpYWxvZyIsInN0YXRlIiwiYWN0aXZlIiwiaGFuZGxlVG9nZ2xlIiwic2V0U3RhdGUiLCJhY3Rpb25zIiwibGFiZWwiLCJvbkNsaWNrIiwiaGVpZ2h0Iiwib3ZlcmZsb3dZIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLGU7Ozs7Ozs7Ozs7Ozs7O3dNQUNKQyxLLEdBQVE7QUFDTkMsY0FBUTtBQURGLEssUUFJUkMsWSxHQUFlLFlBQU07QUFDbkIsWUFBS0MsUUFBTCxDQUFjLEVBQUNGLFFBQVEsQ0FBQyxNQUFLRCxLQUFMLENBQVdDLE1BQXJCLEVBQWQ7QUFDRCxLLFFBRURHLE8sR0FBVSxDQUNSLEVBQUVDLE9BQU8sUUFBVCxFQUFtQkMsU0FBUyxNQUFLSixZQUFqQyxFQURRLEVBRVIsRUFBRUcsT0FBTyxNQUFULEVBQWlCQyxTQUFTLE1BQUtKLFlBQS9CLEVBRlEsQzs7Ozs7NkJBS0E7QUFDUixhQUNFO0FBQUE7QUFBQTtBQUNFLG9FQUFDLGdFQUFELElBQVEsT0FBTSxnQkFBZCxFQUErQixTQUFTLEtBQUtBLFlBQTdDLEdBREY7QUFFRTtBQUFDLDBFQUFEO0FBQUE7QUFDRSxxQkFBUyxLQUFLRSxPQURoQjtBQUVFLG9CQUFRLEtBQUtKLEtBQUwsQ0FBV0MsTUFGckI7QUFHRSwwQkFBYyxLQUFLQyxZQUhyQjtBQUlFLDRCQUFnQixLQUFLQSxZQUp2QjtBQUtFLG1CQUFNO0FBTFI7QUFPRTtBQUFBO0FBQUEsY0FBSyxPQUFPO0FBQ1ZLLHdCQUFRLEdBREU7QUFFVkMsMkJBQVc7QUFGRCxlQUFaO0FBSUU7QUFBQywwRUFBRDtBQUFBLGdCQUFNLGdCQUFOLEVBQWlCLFlBQWpCO0FBQ0UsMEVBQUMscUVBQUQsSUFBZSxTQUFRLFVBQXZCLEdBREY7QUFFRSwwRUFBQyxnRUFBRDtBQUNFLHdCQUFPLDBEQURUO0FBRUUseUJBQVE7QUFGVixnQkFGRjtBQU1FLDBFQUFDLGdFQUFEO0FBQ0Usd0JBQU8sMERBRFQ7QUFFRSx5QkFBUTtBQUZWLGdCQU5GO0FBVUUsMEVBQUMsZ0VBQUQ7QUFDRSx3QkFBTywwREFEVDtBQUVFLHlCQUFRO0FBRlY7QUFWRjtBQUpGO0FBUEY7QUFGRixPQURGO0FBaUNEOzs7O0VBaEQyQiw2Q0FBQUMsQ0FBTUMsUzs7QUFtRHBDLHlEQUFlWCxlQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Eb2N1bWVudHNEaWFsb2cuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgRGlhbG9nIGZyb20gJ3JlYWN0LXRvb2xib3gvbGliL2RpYWxvZydcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtdG9vbGJveC9saWIvYnV0dG9uJ1xuaW1wb3J0IHsgTGlzdCwgTGlzdEl0ZW0sIExpc3RTdWJIZWFkZXIsIExpc3REaXZpZGVyLCBMaXN0Q2hlY2tib3ggfSBmcm9tICdyZWFjdC10b29sYm94L2xpYi9saXN0J1xuaW1wb3J0IEZvbnRJY29uIGZyb20gJ3JlYWN0LXRvb2xib3gvbGliL2ZvbnRfaWNvbidcblxuY2xhc3MgRG9jdW1lbnRzRGlhbG9nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgYWN0aXZlOiBmYWxzZVxuICB9O1xuXG4gIGhhbmRsZVRvZ2dsZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHthY3RpdmU6ICF0aGlzLnN0YXRlLmFjdGl2ZX0pO1xuICB9XG5cbiAgYWN0aW9ucyA9IFtcbiAgICB7IGxhYmVsOiBcIkNhbmNlbFwiLCBvbkNsaWNrOiB0aGlzLmhhbmRsZVRvZ2dsZSB9LFxuICAgIHsgbGFiZWw6IFwiU2F2ZVwiLCBvbkNsaWNrOiB0aGlzLmhhbmRsZVRvZ2dsZSB9XG4gIF07XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEJ1dHRvbiBsYWJlbD0nU2hvdyBteSBkaWFsb2cnIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVG9nZ2xlfSAvPlxuICAgICAgICA8RGlhbG9nXG4gICAgICAgICAgYWN0aW9ucz17dGhpcy5hY3Rpb25zfVxuICAgICAgICAgIGFjdGl2ZT17dGhpcy5zdGF0ZS5hY3RpdmV9XG4gICAgICAgICAgb25Fc2NLZXlEb3duPXt0aGlzLmhhbmRsZVRvZ2dsZX1cbiAgICAgICAgICBvbk92ZXJsYXlDbGljaz17dGhpcy5oYW5kbGVUb2dnbGV9XG4gICAgICAgICAgdGl0bGU9J0RvY3VtZW50cydcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgIGhlaWdodDogMjAwLFxuICAgICAgICAgICAgb3ZlcmZsb3dZOiBcImF1dG9cIlxuICAgICAgICAgIH19PlxuICAgICAgICAgICAgPExpc3Qgc2VsZWN0YWJsZSByaXBwbGU+XG4gICAgICAgICAgICAgIDxMaXN0U3ViSGVhZGVyIGNhcHRpb249J1BsciAjMTIzJyAvPlxuICAgICAgICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICAgICAgICBhdmF0YXI9J2h0dHBzOi8vZGwuZHJvcGJveHVzZXJjb250ZW50LmNvbS91LzIyNDcyNjQvYXNzZXRzL20uanBnJ1xuICAgICAgICAgICAgICAgIGNhcHRpb249J1NPbWV0aGluZy5wZGYnXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAgICAgIGF2YXRhcj0naHR0cHM6Ly9kbC5kcm9wYm94dXNlcmNvbnRlbnQuY29tL3UvMjI0NzI2NC9hc3NldHMvby5qcGcnXG4gICAgICAgICAgICAgICAgY2FwdGlvbj0nT3p5bWFuZGlhcydcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICAgICAgYXZhdGFyPSdodHRwczovL2RsLmRyb3Bib3h1c2VyY29udGVudC5jb20vdS8yMjQ3MjY0L2Fzc2V0cy9yLmpwZydcbiAgICAgICAgICAgICAgICBjYXB0aW9uPSdSb3JzY2hhY2gnXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRGlhbG9nPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEb2N1bWVudHNEaWFsb2dcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvRG9jdW1lbnRzRGlhbG9nLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})