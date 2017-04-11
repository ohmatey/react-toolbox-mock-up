webpackHotUpdate(0,{

/***/ "./index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(\"./node_modules/react/react.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(\"./node_modules/react-dom/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_toolbox__ = __webpack_require__(\"./node_modules/react-toolbox/lib/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_toolbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_toolbox__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_NavigationList__ = __webpack_require__(\"./components/NavigationList.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_DocumentsDialog__ = __webpack_require__(\"./components/DocumentsDialog.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_PlrForm__ = __webpack_require__(\"./components/PlrForm.js\");\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\n\n\n\n\nvar HelloMessage = function (_React$Component) {\n    _inherits(HelloMessage, _React$Component);\n\n    function HelloMessage() {\n        var _ref;\n\n        var _temp, _this, _ret;\n\n        _classCallCheck(this, HelloMessage);\n\n        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n            args[_key] = arguments[_key];\n        }\n\n        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HelloMessage.__proto__ || Object.getPrototypeOf(HelloMessage)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n            drawerActive: false,\n            drawerPinned: false\n        }, _this.toggleDrawerActive = function () {\n            _this.setState({ drawerActive: !_this.state.drawerActive });\n        }, _this.toggleDrawerPinned = function () {\n            _this.setState({ drawerPinned: !_this.state.drawerPinned });\n        }, _temp), _possibleConstructorReturn(_this, _ret);\n    }\n\n    _createClass(HelloMessage, [{\n        key: 'render',\n        value: function render() {\n            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                __WEBPACK_IMPORTED_MODULE_2_react_toolbox__[\"Layout\"],\n                null,\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    __WEBPACK_IMPORTED_MODULE_2_react_toolbox__[\"NavDrawer\"],\n                    { active: this.state.drawerActive,\n                        pinned: this.state.drawerPinned,\n                        onOverlayClick: this.toggleDrawerActive },\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_NavigationList__[\"a\" /* default */], null)\n                ),\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    __WEBPACK_IMPORTED_MODULE_2_react_toolbox__[\"Panel\"],\n                    { style: {\n                            width: \"50%\"\n                        } },\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_toolbox__[\"AppBar\"], { leftIcon: ':', title: 'Bistrack', onLeftIconClick: this.toggleDrawerActive, rightIcon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            __WEBPACK_IMPORTED_MODULE_2_react_toolbox__[\"Avatar\"],\n                            null,\n                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'https://placeimg.com/80/80/animals' })\n                        ) }),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        'div',\n                        { style: { flex: 1, overflowY: 'auto', padding: '1.8rem' } },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            'h1',\n                            null,\n                            'Main Content'\n                        ),\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            'p',\n                            null,\n                            'Main content goes here.'\n                        ),\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_DocumentsDialog__[\"a\" /* default */], null),\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_PlrForm__[\"a\" /* default */], null)\n                    )\n                )\n            );\n        }\n    }]);\n\n    return HelloMessage;\n}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);\n\nvar mountNode = document.getElementById('root');\n\n__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(HelloMessage, { name: 'John' }), mountNode);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5qcz8yNjQ1Il0sIm5hbWVzIjpbIkhlbGxvTWVzc2FnZSIsInN0YXRlIiwiZHJhd2VyQWN0aXZlIiwiZHJhd2VyUGlubmVkIiwidG9nZ2xlRHJhd2VyQWN0aXZlIiwic2V0U3RhdGUiLCJ0b2dnbGVEcmF3ZXJQaW5uZWQiLCJ3aWR0aCIsImZsZXgiLCJvdmVyZmxvd1kiLCJwYWRkaW5nIiwiUmVhY3QiLCJDb21wb25lbnQiLCJtb3VudE5vZGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUmVhY3RET00iLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7SUFFTUEsWTs7Ozs7Ozs7Ozs7Ozs7c01BQ0pDLEssR0FBUTtBQUNGQywwQkFBYyxLQURaO0FBRUZDLDBCQUFjO0FBRlosUyxRQUtOQyxrQixHQUFxQixZQUFNO0FBQ3ZCLGtCQUFLQyxRQUFMLENBQWMsRUFBRUgsY0FBYyxDQUFDLE1BQUtELEtBQUwsQ0FBV0MsWUFBNUIsRUFBZDtBQUNILFMsUUFFREksa0IsR0FBcUIsWUFBTTtBQUN2QixrQkFBS0QsUUFBTCxDQUFjLEVBQUVGLGNBQWMsQ0FBQyxNQUFLRixLQUFMLENBQVdFLFlBQTVCLEVBQWQ7QUFDSCxTOzs7OztpQ0FFUTtBQUNMLG1CQUNJO0FBQUMscUVBQUQ7QUFBQTtBQUNJO0FBQUMsNEVBQUQ7QUFBQSxzQkFBVyxRQUFRLEtBQUtGLEtBQUwsQ0FBV0MsWUFBOUI7QUFDSSxnQ0FBUSxLQUFLRCxLQUFMLENBQVdFLFlBRHZCO0FBRUksd0NBQWlCLEtBQUtDLGtCQUYxQjtBQUdJLGdGQUFDLDJFQUFEO0FBSEosaUJBREo7QUFNSTtBQUFDLHdFQUFEO0FBQUEsc0JBQU8sT0FBTztBQUNaRyxtQ0FBTztBQURLLHlCQUFkO0FBR0ksZ0ZBQUMscURBQUQsSUFBUSxVQUFTLEdBQWpCLEVBQXFCLE9BQU0sVUFBM0IsRUFBc0MsaUJBQWtCLEtBQUtILGtCQUE3RCxFQUFrRixXQUFXO0FBQUMsaUZBQUQ7QUFBQTtBQUFRLGlHQUFLLEtBQUksb0NBQVQ7QUFBUix5QkFBN0YsR0FISjtBQUlJO0FBQUE7QUFBQSwwQkFBSyxPQUFPLEVBQUVJLE1BQU0sQ0FBUixFQUFXQyxXQUFXLE1BQXRCLEVBQThCQyxTQUFTLFFBQXZDLEVBQVo7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKO0FBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGSjtBQUdJLG9GQUFDLDRFQUFELE9BSEo7QUFJSSxvRkFBQyxvRUFBRDtBQUpKO0FBSko7QUFOSixhQURKO0FBb0JIOzs7O0VBbkNzQiw2Q0FBQUMsQ0FBTUMsUzs7QUFzQ2pDLElBQU1DLFlBQVlDLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBbEI7O0FBRUEsaURBQUFDLENBQVNDLE1BQVQsQ0FBZ0IsNERBQUMsWUFBRCxJQUFjLE1BQUssTUFBbkIsR0FBaEIsRUFBOENKLFNBQTlDIiwiZmlsZSI6Ii4vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHsgTGF5b3V0LCBOYXZEcmF3ZXIsIFBhbmVsLCBTaWRlYmFyIH0gZnJvbSAncmVhY3QtdG9vbGJveCdcbmltcG9ydCB7IEFwcEJhciwgQ2hlY2tib3gsIEljb25CdXR0b24sIEF2YXRhciB9IGZyb20gJ3JlYWN0LXRvb2xib3gnXG5cbmltcG9ydCBOYXZpZ2F0aW9uTGlzdCBmcm9tICcuL2NvbXBvbmVudHMvTmF2aWdhdGlvbkxpc3QnXG5pbXBvcnQgRG9jdW1lbnRzRGlhbG9nIGZyb20gJy4vY29tcG9uZW50cy9Eb2N1bWVudHNEaWFsb2cnXG5pbXBvcnQgUGxyRm9ybSBmcm9tICcuL2NvbXBvbmVudHMvUGxyRm9ybSdcblxuY2xhc3MgSGVsbG9NZXNzYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgICAgIGRyYXdlckFjdGl2ZTogZmFsc2UsXG4gICAgICAgIGRyYXdlclBpbm5lZDogZmFsc2VcbiAgICB9O1xuXG4gICAgdG9nZ2xlRHJhd2VyQWN0aXZlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZHJhd2VyQWN0aXZlOiAhdGhpcy5zdGF0ZS5kcmF3ZXJBY3RpdmUgfSk7XG4gICAgfTtcblxuICAgIHRvZ2dsZURyYXdlclBpbm5lZCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRyYXdlclBpbm5lZDogIXRoaXMuc3RhdGUuZHJhd2VyUGlubmVkIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPE5hdkRyYXdlciBhY3RpdmU9e3RoaXMuc3RhdGUuZHJhd2VyQWN0aXZlfVxuICAgICAgICAgICAgICAgICAgICBwaW5uZWQ9e3RoaXMuc3RhdGUuZHJhd2VyUGlubmVkfVxuICAgICAgICAgICAgICAgICAgICBvbk92ZXJsYXlDbGljaz17IHRoaXMudG9nZ2xlRHJhd2VyQWN0aXZlIH0+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uTGlzdCAvPlxuICAgICAgICAgICAgICAgIDwvTmF2RHJhd2VyPlxuICAgICAgICAgICAgICAgIDxQYW5lbCBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNTAlXCJcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgPEFwcEJhciBsZWZ0SWNvbj0nOicgdGl0bGU9XCJCaXN0cmFja1wiIG9uTGVmdEljb25DbGljaz17IHRoaXMudG9nZ2xlRHJhd2VyQWN0aXZlIH0gcmlnaHRJY29uPXs8QXZhdGFyPjxpbWcgc3JjPVwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODAvODAvYW5pbWFsc1wiLz48L0F2YXRhcj59IC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogMSwgb3ZlcmZsb3dZOiAnYXV0bycsIHBhZGRpbmc6ICcxLjhyZW0nIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPk1haW4gQ29udGVudDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5NYWluIGNvbnRlbnQgZ29lcyBoZXJlLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEb2N1bWVudHNEaWFsb2cgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQbHJGb3JtIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1vdW50Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcblxuUmVhY3RET00ucmVuZGVyKDxIZWxsb01lc3NhZ2UgbmFtZT1cIkpvaG5cIiAvPiwgbW91bnROb2RlKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})