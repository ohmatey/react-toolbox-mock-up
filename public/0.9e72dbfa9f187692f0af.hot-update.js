webpackHotUpdate(0,{

/***/ "./index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(\"./node_modules/react/react.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(\"./node_modules/react-dom/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_toolbox__ = __webpack_require__(\"./node_modules/react-toolbox/lib/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_toolbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_toolbox__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_NavigationList__ = __webpack_require__(\"./components/NavigationList.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ListDocuments__ = __webpack_require__(\"./components/ListDocuments.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_PlrForm__ = __webpack_require__(\"./components/PlrForm.js\");\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\n\n\n\n\nvar HelloMessage = function (_React$Component) {\n  _inherits(HelloMessage, _React$Component);\n\n  function HelloMessage() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, HelloMessage);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HelloMessage.__proto__ || Object.getPrototypeOf(HelloMessage)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      drawerActive: false,\n      drawerPinned: false\n    }, _this.toggleDrawerActive = function () {\n      _this.setState({ drawerActive: !_this.state.drawerActive });\n    }, _this.toggleDrawerPinned = function () {\n      _this.setState({ drawerPinned: !_this.state.drawerPinned });\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(HelloMessage, [{\n    key: 'render',\n    value: function render() {\n      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        __WEBPACK_IMPORTED_MODULE_2_react_toolbox__[\"Layout\"],\n        null,\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n          __WEBPACK_IMPORTED_MODULE_2_react_toolbox__[\"NavDrawer\"],\n          { active: this.state.drawerActive,\n            pinned: this.state.drawerPinned,\n            onOverlayClick: this.toggleDrawerActive },\n          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_NavigationList__[\"a\" /* default */], null)\n        ),\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n          __WEBPACK_IMPORTED_MODULE_2_react_toolbox__[\"Panel\"],\n          null,\n          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_toolbox__[\"AppBar\"], { leftIcon: ':', title: 'Bistrack', onLeftIconClick: this.toggleDrawerActive, rightIcon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n              __WEBPACK_IMPORTED_MODULE_2_react_toolbox__[\"Avatar\"],\n              null,\n              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'https://placeimg.com/80/80/animals' })\n            ) }),\n          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            'div',\n            { style: { flex: 1, overflowY: 'auto', padding: '1.8rem', width: 1080, margin: 'auto' } },\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n              'h1',\n              null,\n              'Create Plr'\n            ),\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n              'div',\n              null,\n              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                'div',\n                { style: {\n                    width: \"50%\",\n                    display: \"inline-block\"\n                  } },\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_PlrForm__[\"a\" /* default */], null)\n              ),\n              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                'div',\n                { style: {\n                    width: \"50%\",\n                    display: \"inline-block\"\n                  } },\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_ListDocuments__[\"a\" /* default */], null)\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return HelloMessage;\n}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);\n\nvar mountNode = document.getElementById('root');\n\n__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(HelloMessage, { name: 'John' }), mountNode);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5qcz8yNjQ1Il0sIm5hbWVzIjpbIkhlbGxvTWVzc2FnZSIsInN0YXRlIiwiZHJhd2VyQWN0aXZlIiwiZHJhd2VyUGlubmVkIiwidG9nZ2xlRHJhd2VyQWN0aXZlIiwic2V0U3RhdGUiLCJ0b2dnbGVEcmF3ZXJQaW5uZWQiLCJmbGV4Iiwib3ZlcmZsb3dZIiwicGFkZGluZyIsIndpZHRoIiwibWFyZ2luIiwiZGlzcGxheSIsIlJlYWN0IiwiQ29tcG9uZW50IiwibW91bnROb2RlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlJlYWN0RE9NIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0lBRU1BLFk7Ozs7Ozs7Ozs7Ozs7O2tNQUNKQyxLLEdBQVE7QUFDRkMsb0JBQWMsS0FEWjtBQUVGQyxvQkFBYztBQUZaLEssUUFLTkMsa0IsR0FBcUIsWUFBTTtBQUN2QixZQUFLQyxRQUFMLENBQWMsRUFBRUgsY0FBYyxDQUFDLE1BQUtELEtBQUwsQ0FBV0MsWUFBNUIsRUFBZDtBQUNILEssUUFFREksa0IsR0FBcUIsWUFBTTtBQUN2QixZQUFLRCxRQUFMLENBQWMsRUFBRUYsY0FBYyxDQUFDLE1BQUtGLEtBQUwsQ0FBV0UsWUFBNUIsRUFBZDtBQUNILEs7Ozs7OzZCQUVRO0FBQ0wsYUFDRTtBQUFDLDZEQUFEO0FBQUE7QUFDRTtBQUFDLGtFQUFEO0FBQUEsWUFBVyxRQUFRLEtBQUtGLEtBQUwsQ0FBV0MsWUFBOUI7QUFDRSxvQkFBUSxLQUFLRCxLQUFMLENBQVdFLFlBRHJCO0FBRUUsNEJBQWlCLEtBQUtDLGtCQUZ4QjtBQUdFLHNFQUFDLDJFQUFEO0FBSEYsU0FERjtBQU1FO0FBQUMsOERBQUQ7QUFBQTtBQUNFLHNFQUFDLHFEQUFELElBQVEsVUFBUyxHQUFqQixFQUFxQixPQUFNLFVBQTNCLEVBQXNDLGlCQUFrQixLQUFLQSxrQkFBN0QsRUFBa0YsV0FBVztBQUFDLG1FQUFEO0FBQUE7QUFBUSxtRkFBSyxLQUFJLG9DQUFUO0FBQVIsYUFBN0YsR0FERjtBQUVFO0FBQUE7QUFBQSxjQUFLLE9BQU8sRUFBRUcsTUFBTSxDQUFSLEVBQVdDLFdBQVcsTUFBdEIsRUFBOEJDLFNBQVMsUUFBdkMsRUFBaURDLE9BQU8sSUFBeEQsRUFBOERDLFFBQVEsTUFBdEUsRUFBWjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxrQkFBSyxPQUFPO0FBQ1ZELDJCQUFPLEtBREc7QUFFVkUsNkJBQVM7QUFGQyxtQkFBWjtBQUlFLDRFQUFDLG9FQUFEO0FBSkYsZUFERjtBQU9FO0FBQUE7QUFBQSxrQkFBSyxPQUFPO0FBQ1ZGLDJCQUFPLEtBREc7QUFFVkUsNkJBQVM7QUFGQyxtQkFBWjtBQUlFLDRFQUFDLDBFQUFEO0FBSkY7QUFQRjtBQUZGO0FBRkY7QUFORixPQURGO0FBNkJIOzs7O0VBNUNzQiw2Q0FBQUMsQ0FBTUMsUzs7QUErQ2pDLElBQU1DLFlBQVlDLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBbEI7O0FBRUEsaURBQUFDLENBQVNDLE1BQVQsQ0FBZ0IsNERBQUMsWUFBRCxJQUFjLE1BQUssTUFBbkIsR0FBaEIsRUFBOENKLFNBQTlDIiwiZmlsZSI6Ii4vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHsgTGF5b3V0LCBOYXZEcmF3ZXIsIFBhbmVsLCBTaWRlYmFyIH0gZnJvbSAncmVhY3QtdG9vbGJveCdcbmltcG9ydCB7IEFwcEJhciwgQ2hlY2tib3gsIEljb25CdXR0b24sIEF2YXRhciB9IGZyb20gJ3JlYWN0LXRvb2xib3gnXG5cbmltcG9ydCBOYXZpZ2F0aW9uTGlzdCBmcm9tICcuL2NvbXBvbmVudHMvTmF2aWdhdGlvbkxpc3QnXG5pbXBvcnQgTGlzdERvY3VtZW50cyBmcm9tICcuL2NvbXBvbmVudHMvTGlzdERvY3VtZW50cydcbmltcG9ydCBQbHJGb3JtIGZyb20gJy4vY29tcG9uZW50cy9QbHJGb3JtJ1xuXG5jbGFzcyBIZWxsb01lc3NhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICAgICAgZHJhd2VyQWN0aXZlOiBmYWxzZSxcbiAgICAgICAgZHJhd2VyUGlubmVkOiBmYWxzZVxuICAgIH07XG5cbiAgICB0b2dnbGVEcmF3ZXJBY3RpdmUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkcmF3ZXJBY3RpdmU6ICF0aGlzLnN0YXRlLmRyYXdlckFjdGl2ZSB9KTtcbiAgICB9O1xuXG4gICAgdG9nZ2xlRHJhd2VyUGlubmVkID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZHJhd2VyUGlubmVkOiAhdGhpcy5zdGF0ZS5kcmF3ZXJQaW5uZWQgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8TmF2RHJhd2VyIGFjdGl2ZT17dGhpcy5zdGF0ZS5kcmF3ZXJBY3RpdmV9XG4gICAgICAgICAgICAgIHBpbm5lZD17dGhpcy5zdGF0ZS5kcmF3ZXJQaW5uZWR9XG4gICAgICAgICAgICAgIG9uT3ZlcmxheUNsaWNrPXsgdGhpcy50b2dnbGVEcmF3ZXJBY3RpdmUgfT5cbiAgICAgICAgICAgICAgPE5hdmlnYXRpb25MaXN0IC8+XG4gICAgICAgICAgICA8L05hdkRyYXdlcj5cbiAgICAgICAgICAgIDxQYW5lbD5cbiAgICAgICAgICAgICAgPEFwcEJhciBsZWZ0SWNvbj0nOicgdGl0bGU9XCJCaXN0cmFja1wiIG9uTGVmdEljb25DbGljaz17IHRoaXMudG9nZ2xlRHJhd2VyQWN0aXZlIH0gcmlnaHRJY29uPXs8QXZhdGFyPjxpbWcgc3JjPVwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODAvODAvYW5pbWFsc1wiLz48L0F2YXRhcj59IC8+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogMSwgb3ZlcmZsb3dZOiAnYXV0bycsIHBhZGRpbmc6ICcxLjhyZW0nLCB3aWR0aDogMTA4MCwgbWFyZ2luOiAnYXV0bycgfX0+XG4gICAgICAgICAgICAgICAgPGgxPkNyZWF0ZSBQbHI8L2gxPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgPFBsckZvcm0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI1MCVcIixcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0RG9jdW1lbnRzIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1BhbmVsPlxuICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbW91bnROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuXG5SZWFjdERPTS5yZW5kZXIoPEhlbGxvTWVzc2FnZSBuYW1lPVwiSm9oblwiIC8+LCBtb3VudE5vZGUpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})