webpackHotUpdate(0,{

/***/ "./index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(\"./node_modules/react/react.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(\"./node_modules/react-dom/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_toolbox__ = __webpack_require__(\"./node_modules/react-toolbox/lib/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_toolbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_toolbox__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\nvar HelloMessage = function (_React$Component) {\n    _inherits(HelloMessage, _React$Component);\n\n    function HelloMessage() {\n        var _ref;\n\n        var _temp, _this, _ret;\n\n        _classCallCheck(this, HelloMessage);\n\n        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n            args[_key] = arguments[_key];\n        }\n\n        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HelloMessage.__proto__ || Object.getPrototypeOf(HelloMessage)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n            drawerActive: false,\n            drawerPinned: false,\n            sidebarPinned: false\n        }, _this.toggleDrawerActive = function () {\n            _this.setState({ drawerActive: !_this.state.drawerActive });\n        }, _this.toggleDrawerPinned = function () {\n            _this.setState({ drawerPinned: !_this.state.drawerPinned });\n        }, _this.toggleSidebar = function () {\n            _this.setState({ sidebarPinned: !_this.state.sidebarPinned });\n        }, _temp), _possibleConstructorReturn(_this, _ret);\n    }\n\n    _createClass(HelloMessage, [{\n        key: 'render',\n        value: function render() {\n            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                __WEBPACK_IMPORTED_MODULE_2_react_toolbox__[\"Layout\"],\n                null,\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    __WEBPACK_IMPORTED_MODULE_2_react_toolbox__[\"NavDrawer\"],\n                    { active: this.state.drawerActive,\n                        pinned: this.state.drawerPinned, permanentAt: 'xxxl',\n                        onOverlayClick: this.toggleDrawerActive },\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        'p',\n                        null,\n                        'Navigation, account switcher, etc. go here.'\n                    )\n                ),\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    __WEBPACK_IMPORTED_MODULE_2_react_toolbox__[\"Panel\"],\n                    null,\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_toolbox__[\"AppBar\"], { leftIcon: 'menu', onLeftIconClick: this.toggleDrawerActive }),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        'div',\n                        { style: { flex: 1, overflowY: 'auto', padding: '1.8rem' } },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            'h1',\n                            null,\n                            'Main Content'\n                        ),\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            'p',\n                            null,\n                            'Main content goes here.'\n                        ),\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_toolbox__[\"Checkbox\"], { label: 'Pin drawer', checked: this.state.drawerPinned, onChange: this.toggleDrawerPinned }),\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_toolbox__[\"Checkbox\"], { label: 'Show sidebar', checked: this.state.sidebarPinned, onChange: this.toggleSidebar })\n                    )\n                ),\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    __WEBPACK_IMPORTED_MODULE_2_react_toolbox__[\"Sidebar\"],\n                    { pinned: this.state.sidebarPinned, width: 5 },\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        'div',\n                        null,\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_toolbox__[\"IconButton\"], { icon: 'close', onClick: this.toggleSidebar })\n                    ),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        'div',\n                        { style: { flex: 1 } },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            'p',\n                            null,\n                            'Supplemental content goes here.'\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return HelloMessage;\n}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);\n\nvar mountNode = document.getElementById('root');\n\n__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(HelloMessage, { name: 'John' }), mountNode);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5qcz8yNjQ1Il0sIm5hbWVzIjpbIkhlbGxvTWVzc2FnZSIsInN0YXRlIiwiZHJhd2VyQWN0aXZlIiwiZHJhd2VyUGlubmVkIiwic2lkZWJhclBpbm5lZCIsInRvZ2dsZURyYXdlckFjdGl2ZSIsInNldFN0YXRlIiwidG9nZ2xlRHJhd2VyUGlubmVkIiwidG9nZ2xlU2lkZWJhciIsImZsZXgiLCJvdmVyZmxvd1kiLCJwYWRkaW5nIiwiUmVhY3QiLCJDb21wb25lbnQiLCJtb3VudE5vZGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUmVhY3RET00iLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxZOzs7Ozs7Ozs7Ozs7OztzTUFDSkMsSyxHQUFRO0FBQ0ZDLDBCQUFjLEtBRFo7QUFFRkMsMEJBQWMsS0FGWjtBQUdGQywyQkFBZTtBQUhiLFMsUUFNTkMsa0IsR0FBcUIsWUFBTTtBQUN2QixrQkFBS0MsUUFBTCxDQUFjLEVBQUVKLGNBQWMsQ0FBQyxNQUFLRCxLQUFMLENBQVdDLFlBQTVCLEVBQWQ7QUFDSCxTLFFBRURLLGtCLEdBQXFCLFlBQU07QUFDdkIsa0JBQUtELFFBQUwsQ0FBYyxFQUFFSCxjQUFjLENBQUMsTUFBS0YsS0FBTCxDQUFXRSxZQUE1QixFQUFkO0FBQ0gsUyxRQUVESyxhLEdBQWdCLFlBQU07QUFDbEIsa0JBQUtGLFFBQUwsQ0FBYyxFQUFFRixlQUFlLENBQUMsTUFBS0gsS0FBTCxDQUFXRyxhQUE3QixFQUFkO0FBQ0gsUzs7Ozs7aUNBRVE7QUFDTCxtQkFDSTtBQUFDLHFFQUFEO0FBQUE7QUFDSTtBQUFDLDRFQUFEO0FBQUEsc0JBQVcsUUFBUSxLQUFLSCxLQUFMLENBQVdDLFlBQTlCO0FBQ0ksZ0NBQVEsS0FBS0QsS0FBTCxDQUFXRSxZQUR2QixFQUNxQyxhQUFZLE1BRGpEO0FBRUksd0NBQWlCLEtBQUtFLGtCQUYxQjtBQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFISixpQkFESjtBQVFJO0FBQUMsd0VBQUQ7QUFBQTtBQUNJLGdGQUFDLHFEQUFELElBQVEsVUFBUyxNQUFqQixFQUF3QixpQkFBa0IsS0FBS0Esa0JBQS9DLEdBREo7QUFFSTtBQUFBO0FBQUEsMEJBQUssT0FBTyxFQUFFSSxNQUFNLENBQVIsRUFBV0MsV0FBVyxNQUF0QixFQUE4QkMsU0FBUyxRQUF2QyxFQUFaO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRko7QUFHSSxvRkFBQyx1REFBRCxJQUFVLE9BQU0sWUFBaEIsRUFBNkIsU0FBUyxLQUFLVixLQUFMLENBQVdFLFlBQWpELEVBQStELFVBQVUsS0FBS0ksa0JBQTlFLEdBSEo7QUFJSSxvRkFBQyx1REFBRCxJQUFVLE9BQU0sY0FBaEIsRUFBK0IsU0FBUyxLQUFLTixLQUFMLENBQVdHLGFBQW5ELEVBQWtFLFVBQVUsS0FBS0ksYUFBakY7QUFKSjtBQUZKLGlCQVJKO0FBaUJJO0FBQUMsMEVBQUQ7QUFBQSxzQkFBUyxRQUFTLEtBQUtQLEtBQUwsQ0FBV0csYUFBN0IsRUFBNkMsT0FBUSxDQUFyRDtBQUNJO0FBQUE7QUFBQTtBQUFLLG9GQUFDLHlEQUFELElBQVksTUFBSyxPQUFqQixFQUF5QixTQUFVLEtBQUtJLGFBQXhDO0FBQUwscUJBREo7QUFFSTtBQUFBO0FBQUEsMEJBQUssT0FBTyxFQUFFQyxNQUFNLENBQVIsRUFBWjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUZKO0FBakJKLGFBREo7QUEwQkg7Ozs7RUE5Q3NCLDZDQUFBRyxDQUFNQyxTOztBQWlEakMsSUFBTUMsWUFBWUMsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUFsQjs7QUFFQSxpREFBQUMsQ0FBU0MsTUFBVCxDQUFnQiw0REFBQyxZQUFELElBQWMsTUFBSyxNQUFuQixHQUFoQixFQUE4Q0osU0FBOUMiLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgeyBMYXlvdXQsIE5hdkRyYXdlciwgUGFuZWwsIFNpZGViYXIgfSBmcm9tICdyZWFjdC10b29sYm94J1xuaW1wb3J0IHsgQXBwQmFyLCBDaGVja2JveCwgSWNvbkJ1dHRvbiB9IGZyb20gJ3JlYWN0LXRvb2xib3gnXG5cbmNsYXNzIEhlbGxvTWVzc2FnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgICAgICBkcmF3ZXJBY3RpdmU6IGZhbHNlLFxuICAgICAgICBkcmF3ZXJQaW5uZWQ6IGZhbHNlLFxuICAgICAgICBzaWRlYmFyUGlubmVkOiBmYWxzZVxuICAgIH07XG5cbiAgICB0b2dnbGVEcmF3ZXJBY3RpdmUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkcmF3ZXJBY3RpdmU6ICF0aGlzLnN0YXRlLmRyYXdlckFjdGl2ZSB9KTtcbiAgICB9O1xuXG4gICAgdG9nZ2xlRHJhd2VyUGlubmVkID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZHJhd2VyUGlubmVkOiAhdGhpcy5zdGF0ZS5kcmF3ZXJQaW5uZWQgfSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlU2lkZWJhciA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNpZGViYXJQaW5uZWQ6ICF0aGlzLnN0YXRlLnNpZGViYXJQaW5uZWQgfSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPE5hdkRyYXdlciBhY3RpdmU9e3RoaXMuc3RhdGUuZHJhd2VyQWN0aXZlfVxuICAgICAgICAgICAgICAgICAgICBwaW5uZWQ9e3RoaXMuc3RhdGUuZHJhd2VyUGlubmVkfSBwZXJtYW5lbnRBdD0neHh4bCdcbiAgICAgICAgICAgICAgICAgICAgb25PdmVybGF5Q2xpY2s9eyB0aGlzLnRvZ2dsZURyYXdlckFjdGl2ZSB9PlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5hdmlnYXRpb24sIGFjY291bnQgc3dpdGNoZXIsIGV0Yy4gZ28gaGVyZS5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvTmF2RHJhd2VyPlxuICAgICAgICAgICAgICAgIDxQYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgPEFwcEJhciBsZWZ0SWNvbj0nbWVudScgb25MZWZ0SWNvbkNsaWNrPXsgdGhpcy50b2dnbGVEcmF3ZXJBY3RpdmUgfSAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IDEsIG92ZXJmbG93WTogJ2F1dG8nLCBwYWRkaW5nOiAnMS44cmVtJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5NYWluIENvbnRlbnQ8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+TWFpbiBjb250ZW50IGdvZXMgaGVyZS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggbGFiZWw9J1BpbiBkcmF3ZXInIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZHJhd2VyUGlubmVkfSBvbkNoYW5nZT17dGhpcy50b2dnbGVEcmF3ZXJQaW5uZWR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggbGFiZWw9J1Nob3cgc2lkZWJhcicgY2hlY2tlZD17dGhpcy5zdGF0ZS5zaWRlYmFyUGlubmVkfSBvbkNoYW5nZT17dGhpcy50b2dnbGVTaWRlYmFyfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1BhbmVsPlxuICAgICAgICAgICAgICAgIDxTaWRlYmFyIHBpbm5lZD17IHRoaXMuc3RhdGUuc2lkZWJhclBpbm5lZCB9IHdpZHRoPXsgNSB9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxJY29uQnV0dG9uIGljb249J2Nsb3NlJyBvbkNsaWNrPXsgdGhpcy50b2dnbGVTaWRlYmFyIH0vPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IDEgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5TdXBwbGVtZW50YWwgY29udGVudCBnb2VzIGhlcmUuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1NpZGViYXI+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1vdW50Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcblxuUmVhY3RET00ucmVuZGVyKDxIZWxsb01lc3NhZ2UgbmFtZT1cIkpvaG5cIiAvPiwgbW91bnROb2RlKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})