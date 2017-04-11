webpackHotUpdate(0,{

/***/ "./components/DocumentsDialog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(\"./node_modules/react/react.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_toolbox_lib_dialog__ = __webpack_require__(\"./node_modules/react-toolbox/lib/dialog/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_toolbox_lib_dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_toolbox_lib_dialog__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_button__ = __webpack_require__(\"./node_modules/react-toolbox/lib/button/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_button__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_toolbox_lib_list__ = __webpack_require__(\"./node_modules/react-toolbox/lib/list/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_toolbox_lib_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_toolbox_lib_list__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_toolbox_lib_font_icon__ = __webpack_require__(\"./node_modules/react-toolbox/lib/font_icon/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_toolbox_lib_font_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_toolbox_lib_font_icon__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_toolbox_lib_input__ = __webpack_require__(\"./node_modules/react-toolbox/lib/input/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_toolbox_lib_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_toolbox_lib_input__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ListDocuments__ = __webpack_require__(\"./components/ListDocuments.js\");\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\n\n\n\n\nvar DocumentsDialog = function (_React$Component) {\n  _inherits(DocumentsDialog, _React$Component);\n\n  function DocumentsDialog() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, DocumentsDialog);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DocumentsDialog.__proto__ || Object.getPrototypeOf(DocumentsDialog)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      active: false,\n      name: \"\"\n    }, _this.handleToggle = function () {\n      _this.setState({ active: !_this.state.active });\n    }, _this.actions = [{ label: \"Done\", onClick: _this.handleToggle }], _this.listItemActions = [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_toolbox_lib_font_icon___default.a, { value: 'delete', onClick: function onClick() {\n        return console.log(\"delete\");\n      } })], _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(DocumentsDialog, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        'div',\n        null,\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_button___default.a, { label: 'Documents', onClick: this.handleToggle }),\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n          __WEBPACK_IMPORTED_MODULE_1_react_toolbox_lib_dialog___default.a,\n          {\n            actions: this.actions,\n            active: this.state.active,\n            onEscKeyDown: this.handleToggle,\n            onOverlayClick: this.handleToggle,\n            title: 'Documents'\n          },\n          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            'div',\n            null,\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_toolbox_lib_input___default.a, { type: 'text', label: 'Name', name: 'name', value: this.state.name, onChange: function onChange(val) {\n                return _this2.setState({ name: val });\n              }, maxLength: 16 }),\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_button___default.a, { label: 'Add document', raised: true, primary: true })\n          ),\n          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            'div',\n            { style: {\n                height: 200,\n                overflowY: \"auto\"\n              } },\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__ListDocuments__[\"a\" /* default */], null)\n          )\n        )\n      );\n    }\n  }]);\n\n  return DocumentsDialog;\n}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (DocumentsDialog);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RvY3VtZW50c0RpYWxvZy5qcz8wZGY3Il0sIm5hbWVzIjpbIkRvY3VtZW50c0RpYWxvZyIsInN0YXRlIiwiYWN0aXZlIiwibmFtZSIsImhhbmRsZVRvZ2dsZSIsInNldFN0YXRlIiwiYWN0aW9ucyIsImxhYmVsIiwib25DbGljayIsImxpc3RJdGVtQWN0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJ2YWwiLCJoZWlnaHQiLCJvdmVyZmxvd1kiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztJQUVNQSxlOzs7Ozs7Ozs7Ozs7Ozt3TUFDSkMsSyxHQUFRO0FBQ05DLGNBQVEsS0FERjtBQUVOQyxZQUFNO0FBRkEsSyxRQUtSQyxZLEdBQWUsWUFBTTtBQUNuQixZQUFLQyxRQUFMLENBQWMsRUFBQ0gsUUFBUSxDQUFDLE1BQUtELEtBQUwsQ0FBV0MsTUFBckIsRUFBZDtBQUNELEssUUFFREksTyxHQUFVLENBQ1IsRUFBRUMsT0FBTyxNQUFULEVBQWlCQyxTQUFTLE1BQUtKLFlBQS9CLEVBRFEsQyxRQUlWSyxlLEdBQWtCLENBQ2hCLDREQUFDLG1FQUFELElBQVUsT0FBTSxRQUFoQixFQUF5QixTQUFTO0FBQUEsZUFBTUMsUUFBUUMsR0FBUixDQUFZLFFBQVosQ0FBTjtBQUFBLE9BQWxDLEdBRGdCLEM7Ozs7OzZCQUlSO0FBQUE7O0FBQ1IsYUFDRTtBQUFBO0FBQUE7QUFDRSxvRUFBQyxnRUFBRCxJQUFRLE9BQU0sV0FBZCxFQUEwQixTQUFTLEtBQUtQLFlBQXhDLEdBREY7QUFFRTtBQUFDLDBFQUFEO0FBQUE7QUFDRSxxQkFBUyxLQUFLRSxPQURoQjtBQUVFLG9CQUFRLEtBQUtMLEtBQUwsQ0FBV0MsTUFGckI7QUFHRSwwQkFBYyxLQUFLRSxZQUhyQjtBQUlFLDRCQUFnQixLQUFLQSxZQUp2QjtBQUtFLG1CQUFNO0FBTFI7QUFPRTtBQUFBO0FBQUE7QUFDRSx3RUFBQywrREFBRCxJQUFPLE1BQUssTUFBWixFQUFtQixPQUFNLE1BQXpCLEVBQWdDLE1BQUssTUFBckMsRUFBNEMsT0FBTyxLQUFLSCxLQUFMLENBQVdFLElBQTlELEVBQW9FLFVBQVUsa0JBQUNTLEdBQUQ7QUFBQSx1QkFBUyxPQUFLUCxRQUFMLENBQWMsRUFBQ0YsTUFBTVMsR0FBUCxFQUFkLENBQVQ7QUFBQSxlQUE5RSxFQUFtSCxXQUFXLEVBQTlILEdBREY7QUFFRSx3RUFBQyxnRUFBRCxJQUFRLE9BQU0sY0FBZCxFQUE2QixZQUE3QixFQUFvQyxhQUFwQztBQUZGLFdBUEY7QUFXRTtBQUFBO0FBQUEsY0FBSyxPQUFPO0FBQ1ZDLHdCQUFRLEdBREU7QUFFVkMsMkJBQVc7QUFGRCxlQUFaO0FBSUUsd0VBQUMsK0RBQUQ7QUFKRjtBQVhGO0FBRkYsT0FERjtBQXVCRDs7OztFQTFDMkIsNkNBQUFDLENBQU1DLFM7O0FBNkNwQyx5REFBZWhCLGVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0RvY3VtZW50c0RpYWxvZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBEaWFsb2cgZnJvbSAncmVhY3QtdG9vbGJveC9saWIvZGlhbG9nJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC10b29sYm94L2xpYi9idXR0b24nXG5pbXBvcnQgeyBMaXN0LCBMaXN0SXRlbSwgTGlzdFN1YkhlYWRlciwgTGlzdERpdmlkZXIsIExpc3RDaGVja2JveCB9IGZyb20gJ3JlYWN0LXRvb2xib3gvbGliL2xpc3QnXG5pbXBvcnQgRm9udEljb24gZnJvbSAncmVhY3QtdG9vbGJveC9saWIvZm9udF9pY29uJ1xuaW1wb3J0IElucHV0IGZyb20gJ3JlYWN0LXRvb2xib3gvbGliL2lucHV0J1xuXG5pbXBvcnQgTGlzdERvY3VtZW50cyBmcm9tICcuL0xpc3REb2N1bWVudHMnXG5cbmNsYXNzIERvY3VtZW50c0RpYWxvZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgbmFtZTogXCJcIlxuICB9O1xuXG4gIGhhbmRsZVRvZ2dsZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHthY3RpdmU6ICF0aGlzLnN0YXRlLmFjdGl2ZX0pO1xuICB9XG5cbiAgYWN0aW9ucyA9IFtcbiAgICB7IGxhYmVsOiBcIkRvbmVcIiwgb25DbGljazogdGhpcy5oYW5kbGVUb2dnbGUgfSxcbiAgXTtcblxuICBsaXN0SXRlbUFjdGlvbnMgPSBbXG4gICAgPEZvbnRJY29uIHZhbHVlPSdkZWxldGUnIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKFwiZGVsZXRlXCIpfSAvPlxuICBdXG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEJ1dHRvbiBsYWJlbD0nRG9jdW1lbnRzJyBvbkNsaWNrPXt0aGlzLmhhbmRsZVRvZ2dsZX0gLz5cbiAgICAgICAgPERpYWxvZ1xuICAgICAgICAgIGFjdGlvbnM9e3RoaXMuYWN0aW9uc31cbiAgICAgICAgICBhY3RpdmU9e3RoaXMuc3RhdGUuYWN0aXZlfVxuICAgICAgICAgIG9uRXNjS2V5RG93bj17dGhpcy5oYW5kbGVUb2dnbGV9XG4gICAgICAgICAgb25PdmVybGF5Q2xpY2s9e3RoaXMuaGFuZGxlVG9nZ2xlfVxuICAgICAgICAgIHRpdGxlPSdEb2N1bWVudHMnXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPElucHV0IHR5cGU9J3RleHQnIGxhYmVsPSdOYW1lJyBuYW1lPSduYW1lJyB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSBvbkNoYW5nZT17KHZhbCkgPT4gdGhpcy5zZXRTdGF0ZSh7bmFtZTogdmFsfSl9IG1heExlbmd0aD17MTYgfSAvPlxuICAgICAgICAgICAgPEJ1dHRvbiBsYWJlbD0nQWRkIGRvY3VtZW50JyByYWlzZWQgcHJpbWFyeSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgIGhlaWdodDogMjAwLFxuICAgICAgICAgICAgb3ZlcmZsb3dZOiBcImF1dG9cIlxuICAgICAgICAgIH19PlxuICAgICAgICAgICAgPExpc3REb2N1bWVudHMgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9EaWFsb2c+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERvY3VtZW50c0RpYWxvZ1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Eb2N1bWVudHNEaWFsb2cuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ "./components/ListDocuments.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(\"./node_modules/react/react.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\nvar _this = this;\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (function (props) {\n  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n    List,\n    null,\n    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListSubHeader, { caption: 'Plr #123' }),\n    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListItem, {\n      avatar: 'https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg',\n      caption: 'SOmething.pdf',\n      rightActions: _this.listItemActions,\n      onClick: function onClick() {\n        return console.log(\"open doc\");\n      }\n    }),\n    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListItem, {\n      avatar: 'https://dl.dropboxusercontent.com/u/2247264/assets/o.jpg',\n      caption: 'Ozymandias',\n      rightActions: _this.listItemActions,\n      onClick: function onClick() {\n        return console.log(\"open doc\");\n      }\n    }),\n    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListItem, {\n      avatar: 'https://dl.dropboxusercontent.com/u/2247264/assets/r.jpg',\n      caption: 'Rorschach',\n      rightActions: _this.listItemActions,\n      onClick: function onClick() {\n        return console.log(\"open doc\");\n      }\n    })\n  );\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpc3REb2N1bWVudHMuanM/Zjc1YyJdLCJuYW1lcyI6WyJsaXN0SXRlbUFjdGlvbnMiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBRUEseURBQWU7QUFBQSxTQUNiO0FBQUMsUUFBRDtBQUFBO0FBQ0UsZ0VBQUMsYUFBRCxJQUFlLFNBQVEsVUFBdkIsR0FERjtBQUVFLGdFQUFDLFFBQUQ7QUFDRSxjQUFPLDBEQURUO0FBRUUsZUFBUSxlQUZWO0FBR0Usb0JBQWMsTUFBS0EsZUFIckI7QUFJRSxlQUFTO0FBQUEsZUFBTUMsUUFBUUMsR0FBUixDQUFZLFVBQVosQ0FBTjtBQUFBO0FBSlgsTUFGRjtBQVFFLGdFQUFDLFFBQUQ7QUFDRSxjQUFPLDBEQURUO0FBRUUsZUFBUSxZQUZWO0FBR0Usb0JBQWMsTUFBS0YsZUFIckI7QUFJRSxlQUFTO0FBQUEsZUFBTUMsUUFBUUMsR0FBUixDQUFZLFVBQVosQ0FBTjtBQUFBO0FBSlgsTUFSRjtBQWNFLGdFQUFDLFFBQUQ7QUFDRSxjQUFPLDBEQURUO0FBRUUsZUFBUSxXQUZWO0FBR0Usb0JBQWMsTUFBS0YsZUFIckI7QUFJRSxlQUFTO0FBQUEsZUFBTUMsUUFBUUMsR0FBUixDQUFZLFVBQVosQ0FBTjtBQUFBO0FBSlg7QUFkRixHQURhO0FBQUEsQ0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGlzdERvY3VtZW50cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgcHJvcHMgPT4gKFxuICA8TGlzdD5cbiAgICA8TGlzdFN1YkhlYWRlciBjYXB0aW9uPSdQbHIgIzEyMycgLz5cbiAgICA8TGlzdEl0ZW1cbiAgICAgIGF2YXRhcj0naHR0cHM6Ly9kbC5kcm9wYm94dXNlcmNvbnRlbnQuY29tL3UvMjI0NzI2NC9hc3NldHMvbS5qcGcnXG4gICAgICBjYXB0aW9uPSdTT21ldGhpbmcucGRmJ1xuICAgICAgcmlnaHRBY3Rpb25zPXt0aGlzLmxpc3RJdGVtQWN0aW9uc31cbiAgICAgIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKFwib3BlbiBkb2NcIil9XG4gICAgLz5cbiAgICA8TGlzdEl0ZW1cbiAgICAgIGF2YXRhcj0naHR0cHM6Ly9kbC5kcm9wYm94dXNlcmNvbnRlbnQuY29tL3UvMjI0NzI2NC9hc3NldHMvby5qcGcnXG4gICAgICBjYXB0aW9uPSdPenltYW5kaWFzJ1xuICAgICAgcmlnaHRBY3Rpb25zPXt0aGlzLmxpc3RJdGVtQWN0aW9uc31cbiAgICAgIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKFwib3BlbiBkb2NcIil9XG4gICAgLz5cbiAgICA8TGlzdEl0ZW1cbiAgICAgIGF2YXRhcj0naHR0cHM6Ly9kbC5kcm9wYm94dXNlcmNvbnRlbnQuY29tL3UvMjI0NzI2NC9hc3NldHMvci5qcGcnXG4gICAgICBjYXB0aW9uPSdSb3JzY2hhY2gnXG4gICAgICByaWdodEFjdGlvbnM9e3RoaXMubGlzdEl0ZW1BY3Rpb25zfVxuICAgICAgb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coXCJvcGVuIGRvY1wiKX1cbiAgICAvPlxuICA8L0xpc3Q+XG4pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0xpc3REb2N1bWVudHMuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})