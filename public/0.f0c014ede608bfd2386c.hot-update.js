webpackHotUpdate(0,{

/***/ "./components/PlrForm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(\"./node_modules/react/react.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n\n\nvar PlrForm = function PlrForm(props) {\n  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n    'form',\n    null,\n    't'\n  );\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (PlrForm);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BsckZvcm0uanM/NDcxZSJdLCJuYW1lcyI6WyJQbHJGb3JtIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLElBQU1BLFVBQVUsU0FBVkEsT0FBVTtBQUFBLFNBQ2Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQURjO0FBQUEsQ0FBaEI7O0FBTUEseURBQWVBLE9BQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1BsckZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IFBsckZvcm0gPSBwcm9wcyA9PiAoXG4gIDxmb3JtPlxuICAgIHRcbiAgPC9mb3JtPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBQbHJGb3JtXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1BsckZvcm0uanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ "./index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(\"./node_modules/react/react.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(\"./node_modules/react-dom/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_toolbox__ = __webpack_require__(\"./node_modules/react-toolbox/lib/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_toolbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_toolbox__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_NavigationList__ = __webpack_require__(\"./components/NavigationList.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_DocumentsDialog__ = __webpack_require__(\"./components/DocumentsDialog.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_PlrForm__ = __webpack_require__(\"./components/PlrForm.js\");\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\n\n\n\n\nvar HelloMessage = function (_React$Component) {\n    _inherits(HelloMessage, _React$Component);\n\n    function HelloMessage() {\n        var _ref;\n\n        var _temp, _this, _ret;\n\n        _classCallCheck(this, HelloMessage);\n\n        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n            args[_key] = arguments[_key];\n        }\n\n        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HelloMessage.__proto__ || Object.getPrototypeOf(HelloMessage)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n            drawerActive: false,\n            drawerPinned: false\n        }, _this.toggleDrawerActive = function () {\n            _this.setState({ drawerActive: !_this.state.drawerActive });\n        }, _this.toggleDrawerPinned = function () {\n            _this.setState({ drawerPinned: !_this.state.drawerPinned });\n        }, _temp), _possibleConstructorReturn(_this, _ret);\n    }\n\n    _createClass(HelloMessage, [{\n        key: 'render',\n        value: function render() {\n            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                __WEBPACK_IMPORTED_MODULE_2_react_toolbox__[\"Layout\"],\n                null,\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    __WEBPACK_IMPORTED_MODULE_2_react_toolbox__[\"NavDrawer\"],\n                    { active: this.state.drawerActive,\n                        pinned: this.state.drawerPinned, permanentAt: 'xxxl',\n                        onOverlayClick: this.toggleDrawerActive },\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_NavigationList__[\"a\" /* default */], null)\n                ),\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    __WEBPACK_IMPORTED_MODULE_2_react_toolbox__[\"Panel\"],\n                    null,\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_toolbox__[\"AppBar\"], { leftIcon: ':', title: 'Bistrack', onLeftIconClick: this.toggleDrawerActive, rightIcon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            __WEBPACK_IMPORTED_MODULE_2_react_toolbox__[\"Avatar\"],\n                            null,\n                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'https://placeimg.com/80/80/animals' })\n                        ) }),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        'div',\n                        { style: { flex: 1, overflowY: 'auto', padding: '1.8rem' } },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            'h1',\n                            null,\n                            'Main Content'\n                        ),\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            'p',\n                            null,\n                            'Main content goes here.'\n                        ),\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_DocumentsDialog__[\"a\" /* default */], null),\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_PlrForm__[\"a\" /* default */], null)\n                    )\n                )\n            );\n        }\n    }]);\n\n    return HelloMessage;\n}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);\n\nvar mountNode = document.getElementById('root');\n\n__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(HelloMessage, { name: 'John' }), mountNode);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5qcz8yNjQ1Il0sIm5hbWVzIjpbIkhlbGxvTWVzc2FnZSIsInN0YXRlIiwiZHJhd2VyQWN0aXZlIiwiZHJhd2VyUGlubmVkIiwidG9nZ2xlRHJhd2VyQWN0aXZlIiwic2V0U3RhdGUiLCJ0b2dnbGVEcmF3ZXJQaW5uZWQiLCJmbGV4Iiwib3ZlcmZsb3dZIiwicGFkZGluZyIsIlJlYWN0IiwiQ29tcG9uZW50IiwibW91bnROb2RlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlJlYWN0RE9NIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0lBRU1BLFk7Ozs7Ozs7Ozs7Ozs7O3NNQUNKQyxLLEdBQVE7QUFDRkMsMEJBQWMsS0FEWjtBQUVGQywwQkFBYztBQUZaLFMsUUFLTkMsa0IsR0FBcUIsWUFBTTtBQUN2QixrQkFBS0MsUUFBTCxDQUFjLEVBQUVILGNBQWMsQ0FBQyxNQUFLRCxLQUFMLENBQVdDLFlBQTVCLEVBQWQ7QUFDSCxTLFFBRURJLGtCLEdBQXFCLFlBQU07QUFDdkIsa0JBQUtELFFBQUwsQ0FBYyxFQUFFRixjQUFjLENBQUMsTUFBS0YsS0FBTCxDQUFXRSxZQUE1QixFQUFkO0FBQ0gsUzs7Ozs7aUNBRVE7QUFDTCxtQkFDSTtBQUFDLHFFQUFEO0FBQUE7QUFDSTtBQUFDLDRFQUFEO0FBQUEsc0JBQVcsUUFBUSxLQUFLRixLQUFMLENBQVdDLFlBQTlCO0FBQ0ksZ0NBQVEsS0FBS0QsS0FBTCxDQUFXRSxZQUR2QixFQUNxQyxhQUFZLE1BRGpEO0FBRUksd0NBQWlCLEtBQUtDLGtCQUYxQjtBQUdJLGdGQUFDLDJFQUFEO0FBSEosaUJBREo7QUFNSTtBQUFDLHdFQUFEO0FBQUE7QUFDSSxnRkFBQyxxREFBRCxJQUFRLFVBQVMsR0FBakIsRUFBcUIsT0FBTSxVQUEzQixFQUFzQyxpQkFBa0IsS0FBS0Esa0JBQTdELEVBQWtGLFdBQVc7QUFBQyxpRkFBRDtBQUFBO0FBQVEsaUdBQUssS0FBSSxvQ0FBVDtBQUFSLHlCQUE3RixHQURKO0FBRUk7QUFBQTtBQUFBLDBCQUFLLE9BQU8sRUFBRUcsTUFBTSxDQUFSLEVBQVdDLFdBQVcsTUFBdEIsRUFBOEJDLFNBQVMsUUFBdkMsRUFBWjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZKO0FBR0ksb0ZBQUMsNEVBQUQsT0FISjtBQUlJLG9GQUFDLG9FQUFEO0FBSko7QUFGSjtBQU5KLGFBREo7QUFrQkg7Ozs7RUFqQ3NCLDZDQUFBQyxDQUFNQyxTOztBQW9DakMsSUFBTUMsWUFBWUMsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUFsQjs7QUFFQSxpREFBQUMsQ0FBU0MsTUFBVCxDQUFnQiw0REFBQyxZQUFELElBQWMsTUFBSyxNQUFuQixHQUFoQixFQUE4Q0osU0FBOUMiLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgeyBMYXlvdXQsIE5hdkRyYXdlciwgUGFuZWwsIFNpZGViYXIgfSBmcm9tICdyZWFjdC10b29sYm94J1xuaW1wb3J0IHsgQXBwQmFyLCBDaGVja2JveCwgSWNvbkJ1dHRvbiwgQXZhdGFyIH0gZnJvbSAncmVhY3QtdG9vbGJveCdcblxuaW1wb3J0IE5hdmlnYXRpb25MaXN0IGZyb20gJy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uTGlzdCdcbmltcG9ydCBEb2N1bWVudHNEaWFsb2cgZnJvbSAnLi9jb21wb25lbnRzL0RvY3VtZW50c0RpYWxvZydcbmltcG9ydCBQbHJGb3JtIGZyb20gJy4vY29tcG9uZW50cy9QbHJGb3JtJ1xuXG5jbGFzcyBIZWxsb01lc3NhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICAgICAgZHJhd2VyQWN0aXZlOiBmYWxzZSxcbiAgICAgICAgZHJhd2VyUGlubmVkOiBmYWxzZVxuICAgIH07XG5cbiAgICB0b2dnbGVEcmF3ZXJBY3RpdmUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkcmF3ZXJBY3RpdmU6ICF0aGlzLnN0YXRlLmRyYXdlckFjdGl2ZSB9KTtcbiAgICB9O1xuXG4gICAgdG9nZ2xlRHJhd2VyUGlubmVkID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZHJhd2VyUGlubmVkOiAhdGhpcy5zdGF0ZS5kcmF3ZXJQaW5uZWQgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICA8TmF2RHJhd2VyIGFjdGl2ZT17dGhpcy5zdGF0ZS5kcmF3ZXJBY3RpdmV9XG4gICAgICAgICAgICAgICAgICAgIHBpbm5lZD17dGhpcy5zdGF0ZS5kcmF3ZXJQaW5uZWR9IHBlcm1hbmVudEF0PSd4eHhsJ1xuICAgICAgICAgICAgICAgICAgICBvbk92ZXJsYXlDbGljaz17IHRoaXMudG9nZ2xlRHJhd2VyQWN0aXZlIH0+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uTGlzdCAvPlxuICAgICAgICAgICAgICAgIDwvTmF2RHJhd2VyPlxuICAgICAgICAgICAgICAgIDxQYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgPEFwcEJhciBsZWZ0SWNvbj0nOicgdGl0bGU9XCJCaXN0cmFja1wiIG9uTGVmdEljb25DbGljaz17IHRoaXMudG9nZ2xlRHJhd2VyQWN0aXZlIH0gcmlnaHRJY29uPXs8QXZhdGFyPjxpbWcgc3JjPVwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODAvODAvYW5pbWFsc1wiLz48L0F2YXRhcj59IC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogMSwgb3ZlcmZsb3dZOiAnYXV0bycsIHBhZGRpbmc6ICcxLjhyZW0nIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPk1haW4gQ29udGVudDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5NYWluIGNvbnRlbnQgZ29lcyBoZXJlLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEb2N1bWVudHNEaWFsb2cgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQbHJGb3JtIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1vdW50Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcblxuUmVhY3RET00ucmVuZGVyKDxIZWxsb01lc3NhZ2UgbmFtZT1cIkpvaG5cIiAvPiwgbW91bnROb2RlKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})