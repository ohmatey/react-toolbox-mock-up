webpackHotUpdate(0,{

/***/ "./index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(\"./node_modules/react/react.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(\"./node_modules/react-dom/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_toolbox__ = __webpack_require__(\"./node_modules/react-toolbox/lib/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_toolbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_toolbox__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_NavigationList__ = __webpack_require__(\"./components/NavigationList.js\");\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\n\nconsole.log(__WEBPACK_IMPORTED_MODULE_3__components_NavigationList__[\"a\" /* default */]);\n\nvar HelloMessage = function (_React$Component) {\n    _inherits(HelloMessage, _React$Component);\n\n    function HelloMessage() {\n        var _ref;\n\n        var _temp, _this, _ret;\n\n        _classCallCheck(this, HelloMessage);\n\n        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n            args[_key] = arguments[_key];\n        }\n\n        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HelloMessage.__proto__ || Object.getPrototypeOf(HelloMessage)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n            drawerActive: false,\n            drawerPinned: false,\n            sidebarPinned: false\n        }, _this.toggleDrawerActive = function () {\n            _this.setState({ drawerActive: !_this.state.drawerActive });\n        }, _this.toggleDrawerPinned = function () {\n            _this.setState({ drawerPinned: !_this.state.drawerPinned });\n        }, _this.toggleSidebar = function () {\n            _this.setState({ sidebarPinned: !_this.state.sidebarPinned });\n        }, _temp), _possibleConstructorReturn(_this, _ret);\n    }\n\n    _createClass(HelloMessage, [{\n        key: 'render',\n        value: function render() {\n            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                __WEBPACK_IMPORTED_MODULE_2_react_toolbox__[\"Layout\"],\n                null,\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    __WEBPACK_IMPORTED_MODULE_2_react_toolbox__[\"NavDrawer\"],\n                    { active: this.state.drawerActive,\n                        pinned: this.state.drawerPinned, permanentAt: 'xxxl',\n                        onOverlayClick: this.toggleDrawerActive },\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_NavigationList__[\"a\" /* default */], null)\n                ),\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    __WEBPACK_IMPORTED_MODULE_2_react_toolbox__[\"Panel\"],\n                    null,\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_toolbox__[\"AppBar\"], { leftIcon: 'menu', onLeftIconClick: this.toggleDrawerActive }),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        'div',\n                        { style: { flex: 1, overflowY: 'auto', padding: '1.8rem' } },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            'h1',\n                            null,\n                            'Main Content'\n                        ),\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            'p',\n                            null,\n                            'Main content goes here.'\n                        ),\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_toolbox__[\"Checkbox\"], { label: 'Pin drawer', checked: this.state.drawerPinned, onChange: this.toggleDrawerPinned }),\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_toolbox__[\"Checkbox\"], { label: 'Show sidebar', checked: this.state.sidebarPinned, onChange: this.toggleSidebar })\n                    )\n                ),\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    __WEBPACK_IMPORTED_MODULE_2_react_toolbox__[\"Sidebar\"],\n                    { pinned: this.state.sidebarPinned, width: 5 },\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        'div',\n                        null,\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_toolbox__[\"IconButton\"], { icon: 'close', onClick: this.toggleSidebar })\n                    ),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        'div',\n                        { style: { flex: 1 } },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            'p',\n                            null,\n                            'Supplemental content goes here.'\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return HelloMessage;\n}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);\n\nvar mountNode = document.getElementById('root');\n\n__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(HelloMessage, { name: 'John' }), mountNode);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5qcz8yNjQ1Il0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJIZWxsb01lc3NhZ2UiLCJzdGF0ZSIsImRyYXdlckFjdGl2ZSIsImRyYXdlclBpbm5lZCIsInNpZGViYXJQaW5uZWQiLCJ0b2dnbGVEcmF3ZXJBY3RpdmUiLCJzZXRTdGF0ZSIsInRvZ2dsZURyYXdlclBpbm5lZCIsInRvZ2dsZVNpZGViYXIiLCJmbGV4Iiwib3ZlcmZsb3dZIiwicGFkZGluZyIsIlJlYWN0IiwiQ29tcG9uZW50IiwibW91bnROb2RlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlJlYWN0RE9NIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQUEsUUFBUUMsR0FBUixDQUFZLDJFQUFaOztJQUNNQyxZOzs7Ozs7Ozs7Ozs7OztzTUFDSkMsSyxHQUFRO0FBQ0ZDLDBCQUFjLEtBRFo7QUFFRkMsMEJBQWMsS0FGWjtBQUdGQywyQkFBZTtBQUhiLFMsUUFNTkMsa0IsR0FBcUIsWUFBTTtBQUN2QixrQkFBS0MsUUFBTCxDQUFjLEVBQUVKLGNBQWMsQ0FBQyxNQUFLRCxLQUFMLENBQVdDLFlBQTVCLEVBQWQ7QUFDSCxTLFFBRURLLGtCLEdBQXFCLFlBQU07QUFDdkIsa0JBQUtELFFBQUwsQ0FBYyxFQUFFSCxjQUFjLENBQUMsTUFBS0YsS0FBTCxDQUFXRSxZQUE1QixFQUFkO0FBQ0gsUyxRQUVESyxhLEdBQWdCLFlBQU07QUFDbEIsa0JBQUtGLFFBQUwsQ0FBYyxFQUFFRixlQUFlLENBQUMsTUFBS0gsS0FBTCxDQUFXRyxhQUE3QixFQUFkO0FBQ0gsUzs7Ozs7aUNBRVE7QUFDTCxtQkFDSTtBQUFDLHFFQUFEO0FBQUE7QUFDSTtBQUFDLDRFQUFEO0FBQUEsc0JBQVcsUUFBUSxLQUFLSCxLQUFMLENBQVdDLFlBQTlCO0FBQ0ksZ0NBQVEsS0FBS0QsS0FBTCxDQUFXRSxZQUR2QixFQUNxQyxhQUFZLE1BRGpEO0FBRUksd0NBQWlCLEtBQUtFLGtCQUYxQjtBQUdJLGdGQUFDLDJFQUFEO0FBSEosaUJBREo7QUFNSTtBQUFDLHdFQUFEO0FBQUE7QUFDSSxnRkFBQyxxREFBRCxJQUFRLFVBQVMsTUFBakIsRUFBd0IsaUJBQWtCLEtBQUtBLGtCQUEvQyxHQURKO0FBRUk7QUFBQTtBQUFBLDBCQUFLLE9BQU8sRUFBRUksTUFBTSxDQUFSLEVBQVdDLFdBQVcsTUFBdEIsRUFBOEJDLFNBQVMsUUFBdkMsRUFBWjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZKO0FBR0ksb0ZBQUMsdURBQUQsSUFBVSxPQUFNLFlBQWhCLEVBQTZCLFNBQVMsS0FBS1YsS0FBTCxDQUFXRSxZQUFqRCxFQUErRCxVQUFVLEtBQUtJLGtCQUE5RSxHQUhKO0FBSUksb0ZBQUMsdURBQUQsSUFBVSxPQUFNLGNBQWhCLEVBQStCLFNBQVMsS0FBS04sS0FBTCxDQUFXRyxhQUFuRCxFQUFrRSxVQUFVLEtBQUtJLGFBQWpGO0FBSko7QUFGSixpQkFOSjtBQWVJO0FBQUMsMEVBQUQ7QUFBQSxzQkFBUyxRQUFTLEtBQUtQLEtBQUwsQ0FBV0csYUFBN0IsRUFBNkMsT0FBUSxDQUFyRDtBQUNJO0FBQUE7QUFBQTtBQUFLLG9GQUFDLHlEQUFELElBQVksTUFBSyxPQUFqQixFQUF5QixTQUFVLEtBQUtJLGFBQXhDO0FBQUwscUJBREo7QUFFSTtBQUFBO0FBQUEsMEJBQUssT0FBTyxFQUFFQyxNQUFNLENBQVIsRUFBWjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUZKO0FBZkosYUFESjtBQXdCSDs7OztFQTVDc0IsNkNBQUFHLENBQU1DLFM7O0FBK0NqQyxJQUFNQyxZQUFZQyxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBQWxCOztBQUVBLGlEQUFBQyxDQUFTQyxNQUFULENBQWdCLDREQUFDLFlBQUQsSUFBYyxNQUFLLE1BQW5CLEdBQWhCLEVBQThDSixTQUE5QyIsImZpbGUiOiIuL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7IExheW91dCwgTmF2RHJhd2VyLCBQYW5lbCwgU2lkZWJhciB9IGZyb20gJ3JlYWN0LXRvb2xib3gnXG5pbXBvcnQgeyBBcHBCYXIsIENoZWNrYm94LCBJY29uQnV0dG9uIH0gZnJvbSAncmVhY3QtdG9vbGJveCdcblxuaW1wb3J0IE5hdmlnYXRpb25MaXN0IGZyb20gJy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uTGlzdCdcbmNvbnNvbGUubG9nKE5hdmlnYXRpb25MaXN0KVxuY2xhc3MgSGVsbG9NZXNzYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgICAgIGRyYXdlckFjdGl2ZTogZmFsc2UsXG4gICAgICAgIGRyYXdlclBpbm5lZDogZmFsc2UsXG4gICAgICAgIHNpZGViYXJQaW5uZWQ6IGZhbHNlXG4gICAgfTtcblxuICAgIHRvZ2dsZURyYXdlckFjdGl2ZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRyYXdlckFjdGl2ZTogIXRoaXMuc3RhdGUuZHJhd2VyQWN0aXZlIH0pO1xuICAgIH07XG5cbiAgICB0b2dnbGVEcmF3ZXJQaW5uZWQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkcmF3ZXJQaW5uZWQ6ICF0aGlzLnN0YXRlLmRyYXdlclBpbm5lZCB9KTtcbiAgICB9XG5cbiAgICB0b2dnbGVTaWRlYmFyID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2lkZWJhclBpbm5lZDogIXRoaXMuc3RhdGUuc2lkZWJhclBpbm5lZCB9KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICA8TmF2RHJhd2VyIGFjdGl2ZT17dGhpcy5zdGF0ZS5kcmF3ZXJBY3RpdmV9XG4gICAgICAgICAgICAgICAgICAgIHBpbm5lZD17dGhpcy5zdGF0ZS5kcmF3ZXJQaW5uZWR9IHBlcm1hbmVudEF0PSd4eHhsJ1xuICAgICAgICAgICAgICAgICAgICBvbk92ZXJsYXlDbGljaz17IHRoaXMudG9nZ2xlRHJhd2VyQWN0aXZlIH0+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uTGlzdCAvPlxuICAgICAgICAgICAgICAgIDwvTmF2RHJhd2VyPlxuICAgICAgICAgICAgICAgIDxQYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgPEFwcEJhciBsZWZ0SWNvbj0nbWVudScgb25MZWZ0SWNvbkNsaWNrPXsgdGhpcy50b2dnbGVEcmF3ZXJBY3RpdmUgfSAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IDEsIG92ZXJmbG93WTogJ2F1dG8nLCBwYWRkaW5nOiAnMS44cmVtJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5NYWluIENvbnRlbnQ8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+TWFpbiBjb250ZW50IGdvZXMgaGVyZS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggbGFiZWw9J1BpbiBkcmF3ZXInIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZHJhd2VyUGlubmVkfSBvbkNoYW5nZT17dGhpcy50b2dnbGVEcmF3ZXJQaW5uZWR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggbGFiZWw9J1Nob3cgc2lkZWJhcicgY2hlY2tlZD17dGhpcy5zdGF0ZS5zaWRlYmFyUGlubmVkfSBvbkNoYW5nZT17dGhpcy50b2dnbGVTaWRlYmFyfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1BhbmVsPlxuICAgICAgICAgICAgICAgIDxTaWRlYmFyIHBpbm5lZD17IHRoaXMuc3RhdGUuc2lkZWJhclBpbm5lZCB9IHdpZHRoPXsgNSB9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxJY29uQnV0dG9uIGljb249J2Nsb3NlJyBvbkNsaWNrPXsgdGhpcy50b2dnbGVTaWRlYmFyIH0vPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IDEgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5TdXBwbGVtZW50YWwgY29udGVudCBnb2VzIGhlcmUuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1NpZGViYXI+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1vdW50Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcblxuUmVhY3RET00ucmVuZGVyKDxIZWxsb01lc3NhZ2UgbmFtZT1cIkpvaG5cIiAvPiwgbW91bnROb2RlKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})