webpackHotUpdate(0,{

/***/ "./index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(\"./node_modules/react/react.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(\"./node_modules/react-dom/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_toolbox__ = __webpack_require__(\"./node_modules/react-toolbox/lib/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_toolbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_toolbox__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_NavigationList__ = __webpack_require__(\"./components/NavigationList.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_DocumentsDialog__ = __webpack_require__(\"./components/DocumentsDialog.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_PlrForm__ = __webpack_require__(\"./components/PlrForm.js\");\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\n\n\n\n\nvar HelloMessage = function (_React$Component) {\n  _inherits(HelloMessage, _React$Component);\n\n  function HelloMessage() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, HelloMessage);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HelloMessage.__proto__ || Object.getPrototypeOf(HelloMessage)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      drawerActive: false,\n      drawerPinned: false\n    }, _this.toggleDrawerActive = function () {\n      _this.setState({ drawerActive: !_this.state.drawerActive });\n    }, _this.toggleDrawerPinned = function () {\n      _this.setState({ drawerPinned: !_this.state.drawerPinned });\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(HelloMessage, [{\n    key: 'render',\n    value: function render() {\n      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        __WEBPACK_IMPORTED_MODULE_2_react_toolbox__[\"Layout\"],\n        null,\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n          __WEBPACK_IMPORTED_MODULE_2_react_toolbox__[\"NavDrawer\"],\n          { active: this.state.drawerActive,\n            pinned: this.state.drawerPinned,\n            onOverlayClick: this.toggleDrawerActive },\n          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_NavigationList__[\"a\" /* default */], null)\n        ),\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n          __WEBPACK_IMPORTED_MODULE_2_react_toolbox__[\"Panel\"],\n          null,\n          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_toolbox__[\"AppBar\"], { leftIcon: ':', title: 'Bistrack', onLeftIconClick: this.toggleDrawerActive, rightIcon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n              __WEBPACK_IMPORTED_MODULE_2_react_toolbox__[\"Avatar\"],\n              null,\n              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'https://placeimg.com/80/80/animals' })\n            ) }),\n          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            'div',\n            { style: { flex: 1, overflowY: 'auto', padding: '1.8rem', width: 1080, margin: 'auto' } },\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n              'h1',\n              null,\n              'Main Content'\n            ),\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n              'p',\n              null,\n              'Main content goes here.'\n            ),\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n              'div',\n              { style: { float: \"right\" } },\n              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_DocumentsDialog__[\"a\" /* default */], null)\n            ),\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_PlrForm__[\"a\" /* default */], null)\n          )\n        )\n      );\n    }\n  }]);\n\n  return HelloMessage;\n}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);\n\nvar mountNode = document.getElementById('root');\n\n__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(HelloMessage, { name: 'John' }), mountNode);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5qcz8yNjQ1Il0sIm5hbWVzIjpbIkhlbGxvTWVzc2FnZSIsInN0YXRlIiwiZHJhd2VyQWN0aXZlIiwiZHJhd2VyUGlubmVkIiwidG9nZ2xlRHJhd2VyQWN0aXZlIiwic2V0U3RhdGUiLCJ0b2dnbGVEcmF3ZXJQaW5uZWQiLCJmbGV4Iiwib3ZlcmZsb3dZIiwicGFkZGluZyIsIndpZHRoIiwibWFyZ2luIiwiZmxvYXQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIm1vdW50Tm9kZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZWFjdERPTSIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztJQUVNQSxZOzs7Ozs7Ozs7Ozs7OztrTUFDSkMsSyxHQUFRO0FBQ0ZDLG9CQUFjLEtBRFo7QUFFRkMsb0JBQWM7QUFGWixLLFFBS05DLGtCLEdBQXFCLFlBQU07QUFDdkIsWUFBS0MsUUFBTCxDQUFjLEVBQUVILGNBQWMsQ0FBQyxNQUFLRCxLQUFMLENBQVdDLFlBQTVCLEVBQWQ7QUFDSCxLLFFBRURJLGtCLEdBQXFCLFlBQU07QUFDdkIsWUFBS0QsUUFBTCxDQUFjLEVBQUVGLGNBQWMsQ0FBQyxNQUFLRixLQUFMLENBQVdFLFlBQTVCLEVBQWQ7QUFDSCxLOzs7Ozs2QkFFUTtBQUNMLGFBQ0U7QUFBQyw2REFBRDtBQUFBO0FBQ0U7QUFBQyxrRUFBRDtBQUFBLFlBQVcsUUFBUSxLQUFLRixLQUFMLENBQVdDLFlBQTlCO0FBQ0Usb0JBQVEsS0FBS0QsS0FBTCxDQUFXRSxZQURyQjtBQUVFLDRCQUFpQixLQUFLQyxrQkFGeEI7QUFHRSxzRUFBQywyRUFBRDtBQUhGLFNBREY7QUFNRTtBQUFDLDhEQUFEO0FBQUE7QUFDRSxzRUFBQyxxREFBRCxJQUFRLFVBQVMsR0FBakIsRUFBcUIsT0FBTSxVQUEzQixFQUFzQyxpQkFBa0IsS0FBS0Esa0JBQTdELEVBQWtGLFdBQVc7QUFBQyxtRUFBRDtBQUFBO0FBQVEsbUZBQUssS0FBSSxvQ0FBVDtBQUFSLGFBQTdGLEdBREY7QUFFRTtBQUFBO0FBQUEsY0FBSyxPQUFPLEVBQUVHLE1BQU0sQ0FBUixFQUFXQyxXQUFXLE1BQXRCLEVBQThCQyxTQUFTLFFBQXZDLEVBQWlEQyxPQUFPLElBQXhELEVBQThEQyxRQUFRLE1BQXRFLEVBQVo7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFHRTtBQUFBO0FBQUEsZ0JBQUssT0FBTyxFQUFDQyxPQUFPLE9BQVIsRUFBWjtBQUE4QiwwRUFBQyw0RUFBRDtBQUE5QixhQUhGO0FBSUUsd0VBQUMsb0VBQUQ7QUFKRjtBQUZGO0FBTkYsT0FERjtBQWtCSDs7OztFQWpDc0IsNkNBQUFDLENBQU1DLFM7O0FBb0NqQyxJQUFNQyxZQUFZQyxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBQWxCOztBQUVBLGlEQUFBQyxDQUFTQyxNQUFULENBQWdCLDREQUFDLFlBQUQsSUFBYyxNQUFLLE1BQW5CLEdBQWhCLEVBQThDSixTQUE5QyIsImZpbGUiOiIuL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7IExheW91dCwgTmF2RHJhd2VyLCBQYW5lbCwgU2lkZWJhciB9IGZyb20gJ3JlYWN0LXRvb2xib3gnXG5pbXBvcnQgeyBBcHBCYXIsIENoZWNrYm94LCBJY29uQnV0dG9uLCBBdmF0YXIgfSBmcm9tICdyZWFjdC10b29sYm94J1xuXG5pbXBvcnQgTmF2aWdhdGlvbkxpc3QgZnJvbSAnLi9jb21wb25lbnRzL05hdmlnYXRpb25MaXN0J1xuaW1wb3J0IERvY3VtZW50c0RpYWxvZyBmcm9tICcuL2NvbXBvbmVudHMvRG9jdW1lbnRzRGlhbG9nJ1xuaW1wb3J0IFBsckZvcm0gZnJvbSAnLi9jb21wb25lbnRzL1BsckZvcm0nXG5cbmNsYXNzIEhlbGxvTWVzc2FnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgICAgICBkcmF3ZXJBY3RpdmU6IGZhbHNlLFxuICAgICAgICBkcmF3ZXJQaW5uZWQ6IGZhbHNlXG4gICAgfTtcblxuICAgIHRvZ2dsZURyYXdlckFjdGl2ZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRyYXdlckFjdGl2ZTogIXRoaXMuc3RhdGUuZHJhd2VyQWN0aXZlIH0pO1xuICAgIH07XG5cbiAgICB0b2dnbGVEcmF3ZXJQaW5uZWQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkcmF3ZXJQaW5uZWQ6ICF0aGlzLnN0YXRlLmRyYXdlclBpbm5lZCB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxOYXZEcmF3ZXIgYWN0aXZlPXt0aGlzLnN0YXRlLmRyYXdlckFjdGl2ZX1cbiAgICAgICAgICAgICAgcGlubmVkPXt0aGlzLnN0YXRlLmRyYXdlclBpbm5lZH1cbiAgICAgICAgICAgICAgb25PdmVybGF5Q2xpY2s9eyB0aGlzLnRvZ2dsZURyYXdlckFjdGl2ZSB9PlxuICAgICAgICAgICAgICA8TmF2aWdhdGlvbkxpc3QgLz5cbiAgICAgICAgICAgIDwvTmF2RHJhd2VyPlxuICAgICAgICAgICAgPFBhbmVsPlxuICAgICAgICAgICAgICA8QXBwQmFyIGxlZnRJY29uPSc6JyB0aXRsZT1cIkJpc3RyYWNrXCIgb25MZWZ0SWNvbkNsaWNrPXsgdGhpcy50b2dnbGVEcmF3ZXJBY3RpdmUgfSByaWdodEljb249ezxBdmF0YXI+PGltZyBzcmM9XCJodHRwczovL3BsYWNlaW1nLmNvbS84MC84MC9hbmltYWxzXCIvPjwvQXZhdGFyPn0gLz5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiAxLCBvdmVyZmxvd1k6ICdhdXRvJywgcGFkZGluZzogJzEuOHJlbScsIHdpZHRoOiAxMDgwLCBtYXJnaW46ICdhdXRvJyB9fT5cbiAgICAgICAgICAgICAgICA8aDE+TWFpbiBDb250ZW50PC9oMT5cbiAgICAgICAgICAgICAgICA8cD5NYWluIGNvbnRlbnQgZ29lcyBoZXJlLjwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxvYXQ6IFwicmlnaHRcIn19PjxEb2N1bWVudHNEaWFsb2cgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8UGxyRm9ybSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtb3VudE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG5cblJlYWN0RE9NLnJlbmRlcig8SGVsbG9NZXNzYWdlIG5hbWU9XCJKb2huXCIgLz4sIG1vdW50Tm9kZSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})