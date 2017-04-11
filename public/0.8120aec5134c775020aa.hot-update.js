webpackHotUpdate(0,{

/***/ "./components/DocumentsDialog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(\"./node_modules/react/react.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_toolbox_lib_dialog__ = __webpack_require__(\"./node_modules/react-toolbox/lib/dialog/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_toolbox_lib_dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_toolbox_lib_dialog__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_button__ = __webpack_require__(\"./node_modules/react-toolbox/lib/button/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_button__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_toolbox_lib_list__ = __webpack_require__(\"./node_modules/react-toolbox/lib/list/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_toolbox_lib_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_toolbox_lib_list__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\nvar DocumentsDialog = function (_React$Component) {\n  _inherits(DocumentsDialog, _React$Component);\n\n  function DocumentsDialog() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, DocumentsDialog);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DocumentsDialog.__proto__ || Object.getPrototypeOf(DocumentsDialog)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      active: false\n    }, _this.handleToggle = function () {\n      _this.setState({ active: !_this.state.active });\n    }, _this.actions = [{ label: \"Cancel\", onClick: _this.handleToggle }, { label: \"Save\", onClick: _this.handleToggle }], _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(DocumentsDialog, [{\n    key: 'render',\n    value: function render() {\n      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        'div',\n        null,\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_toolbox_lib_button___default.a, { label: 'Show my dialog', onClick: this.handleToggle }),\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n          __WEBPACK_IMPORTED_MODULE_1_react_toolbox_lib_dialog___default.a,\n          {\n            actions: this.actions,\n            active: this.state.active,\n            onEscKeyDown: this.handleToggle,\n            onOverlayClick: this.handleToggle,\n            title: 'My awesome dialog'\n          },\n          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            'div',\n            { style: {\n                height: 500\n              } },\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n              __WEBPACK_IMPORTED_MODULE_3_react_toolbox_lib_list__[\"List\"],\n              { selectable: true, ripple: true },\n              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_toolbox_lib_list__[\"ListSubHeader\"], { caption: 'Documents' }),\n              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_toolbox_lib_list__[\"ListItem\"], {\n                avatar: 'https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg',\n                caption: 'Dr. Manhattan',\n                legend: 'Jonathan \\'Jon\\' Osterman',\n                rightIcon: 'star'\n              }),\n              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_toolbox_lib_list__[\"ListItem\"], {\n                avatar: 'https://dl.dropboxusercontent.com/u/2247264/assets/o.jpg',\n                caption: 'Ozymandias',\n                legend: 'Adrian Veidt',\n                rightIcon: 'star'\n              }),\n              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_toolbox_lib_list__[\"ListItem\"], {\n                avatar: 'https://dl.dropboxusercontent.com/u/2247264/assets/r.jpg',\n                caption: 'Rorschach',\n                legend: 'Walter Joseph Kovacs',\n                rightIcon: 'star'\n              }),\n              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_toolbox_lib_list__[\"ListSubHeader\"], { caption: 'Configuration' }),\n              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_toolbox_lib_list__[\"ListCheckbox\"], { checked: true, caption: 'Notify new comics', legend: 'You will receive a notification when a new one is published' }),\n              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_toolbox_lib_list__[\"ListDivider\"], null),\n              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_toolbox_lib_list__[\"ListItem\"], { caption: 'Contact the publisher', leftIcon: 'send' }),\n              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_toolbox_lib_list__[\"ListItem\"], { caption: 'Remove this publication', leftIcon: 'delete' })\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return DocumentsDialog;\n}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (DocumentsDialog);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RvY3VtZW50c0RpYWxvZy5qcz8wZGY3Il0sIm5hbWVzIjpbIkRvY3VtZW50c0RpYWxvZyIsInN0YXRlIiwiYWN0aXZlIiwiaGFuZGxlVG9nZ2xlIiwic2V0U3RhdGUiLCJhY3Rpb25zIiwibGFiZWwiLCJvbkNsaWNrIiwiaGVpZ2h0IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsZTs7Ozs7Ozs7Ozs7Ozs7d01BQ0pDLEssR0FBUTtBQUNOQyxjQUFRO0FBREYsSyxRQUlSQyxZLEdBQWUsWUFBTTtBQUNuQixZQUFLQyxRQUFMLENBQWMsRUFBQ0YsUUFBUSxDQUFDLE1BQUtELEtBQUwsQ0FBV0MsTUFBckIsRUFBZDtBQUNELEssUUFFREcsTyxHQUFVLENBQ1IsRUFBRUMsT0FBTyxRQUFULEVBQW1CQyxTQUFTLE1BQUtKLFlBQWpDLEVBRFEsRUFFUixFQUFFRyxPQUFPLE1BQVQsRUFBaUJDLFNBQVMsTUFBS0osWUFBL0IsRUFGUSxDOzs7Ozs2QkFLQTtBQUNSLGFBQ0U7QUFBQTtBQUFBO0FBQ0Usb0VBQUMsZ0VBQUQsSUFBUSxPQUFNLGdCQUFkLEVBQStCLFNBQVMsS0FBS0EsWUFBN0MsR0FERjtBQUVFO0FBQUMsMEVBQUQ7QUFBQTtBQUNFLHFCQUFTLEtBQUtFLE9BRGhCO0FBRUUsb0JBQVEsS0FBS0osS0FBTCxDQUFXQyxNQUZyQjtBQUdFLDBCQUFjLEtBQUtDLFlBSHJCO0FBSUUsNEJBQWdCLEtBQUtBLFlBSnZCO0FBS0UsbUJBQU07QUFMUjtBQU9FO0FBQUE7QUFBQSxjQUFLLE9BQU87QUFDVkssd0JBQVE7QUFERSxlQUFaO0FBR0U7QUFBQywwRUFBRDtBQUFBLGdCQUFNLGdCQUFOLEVBQWlCLFlBQWpCO0FBQ0UsMEVBQUMscUVBQUQsSUFBZSxTQUFRLFdBQXZCLEdBREY7QUFFRSwwRUFBQyxnRUFBRDtBQUNFLHdCQUFPLDBEQURUO0FBRUUseUJBQVEsZUFGVjtBQUdFLHdCQUFPLDJCQUhUO0FBSUUsMkJBQVU7QUFKWixnQkFGRjtBQVFFLDBFQUFDLGdFQUFEO0FBQ0Usd0JBQU8sMERBRFQ7QUFFRSx5QkFBUSxZQUZWO0FBR0Usd0JBQU8sY0FIVDtBQUlFLDJCQUFVO0FBSlosZ0JBUkY7QUFjRSwwRUFBQyxnRUFBRDtBQUNFLHdCQUFPLDBEQURUO0FBRUUseUJBQVEsV0FGVjtBQUdFLHdCQUFPLHNCQUhUO0FBSUUsMkJBQVU7QUFKWixnQkFkRjtBQW9CRSwwRUFBQyxxRUFBRCxJQUFlLFNBQVEsZUFBdkIsR0FwQkY7QUFxQkUsMEVBQUMsb0VBQUQsSUFBYyxhQUFkLEVBQXNCLFNBQVEsbUJBQTlCLEVBQWtELFFBQU8sNkRBQXpELEdBckJGO0FBc0JFLDBFQUFDLG1FQUFELE9BdEJGO0FBdUJFLDBFQUFDLGdFQUFELElBQVUsU0FBUSx1QkFBbEIsRUFBMEMsVUFBUyxNQUFuRCxHQXZCRjtBQXdCRSwwRUFBQyxnRUFBRCxJQUFVLFNBQVEseUJBQWxCLEVBQTRDLFVBQVMsUUFBckQ7QUF4QkY7QUFIRjtBQVBGO0FBRkYsT0FERjtBQTJDRDs7OztFQTFEMkIsNkNBQUFDLENBQU1DLFM7O0FBNkRwQyx5REFBZVYsZUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRG9jdW1lbnRzRGlhbG9nLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IERpYWxvZyBmcm9tICdyZWFjdC10b29sYm94L2xpYi9kaWFsb2cnXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LXRvb2xib3gvbGliL2J1dHRvbidcbmltcG9ydCB7IExpc3QsIExpc3RJdGVtLCBMaXN0U3ViSGVhZGVyLCBMaXN0RGl2aWRlciwgTGlzdENoZWNrYm94IH0gZnJvbSAncmVhY3QtdG9vbGJveC9saWIvbGlzdCc7XG5cbmNsYXNzIERvY3VtZW50c0RpYWxvZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGFjdGl2ZTogZmFsc2VcbiAgfTtcblxuICBoYW5kbGVUb2dnbGUgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlOiAhdGhpcy5zdGF0ZS5hY3RpdmV9KTtcbiAgfVxuXG4gIGFjdGlvbnMgPSBbXG4gICAgeyBsYWJlbDogXCJDYW5jZWxcIiwgb25DbGljazogdGhpcy5oYW5kbGVUb2dnbGUgfSxcbiAgICB7IGxhYmVsOiBcIlNhdmVcIiwgb25DbGljazogdGhpcy5oYW5kbGVUb2dnbGUgfVxuICBdO1xuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxCdXR0b24gbGFiZWw9J1Nob3cgbXkgZGlhbG9nJyBvbkNsaWNrPXt0aGlzLmhhbmRsZVRvZ2dsZX0gLz5cbiAgICAgICAgPERpYWxvZ1xuICAgICAgICAgIGFjdGlvbnM9e3RoaXMuYWN0aW9uc31cbiAgICAgICAgICBhY3RpdmU9e3RoaXMuc3RhdGUuYWN0aXZlfVxuICAgICAgICAgIG9uRXNjS2V5RG93bj17dGhpcy5oYW5kbGVUb2dnbGV9XG4gICAgICAgICAgb25PdmVybGF5Q2xpY2s9e3RoaXMuaGFuZGxlVG9nZ2xlfVxuICAgICAgICAgIHRpdGxlPSdNeSBhd2Vzb21lIGRpYWxvZydcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgIGhlaWdodDogNTAwXG4gICAgICAgICAgfX0+XG4gICAgICAgICAgICA8TGlzdCBzZWxlY3RhYmxlIHJpcHBsZT5cbiAgICAgICAgICAgICAgPExpc3RTdWJIZWFkZXIgY2FwdGlvbj0nRG9jdW1lbnRzJyAvPlxuICAgICAgICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICAgICAgICBhdmF0YXI9J2h0dHBzOi8vZGwuZHJvcGJveHVzZXJjb250ZW50LmNvbS91LzIyNDcyNjQvYXNzZXRzL20uanBnJ1xuICAgICAgICAgICAgICAgIGNhcHRpb249J0RyLiBNYW5oYXR0YW4nXG4gICAgICAgICAgICAgICAgbGVnZW5kPVwiSm9uYXRoYW4gJ0pvbicgT3N0ZXJtYW5cIlxuICAgICAgICAgICAgICAgIHJpZ2h0SWNvbj0nc3RhcidcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICAgICAgYXZhdGFyPSdodHRwczovL2RsLmRyb3Bib3h1c2VyY29udGVudC5jb20vdS8yMjQ3MjY0L2Fzc2V0cy9vLmpwZydcbiAgICAgICAgICAgICAgICBjYXB0aW9uPSdPenltYW5kaWFzJ1xuICAgICAgICAgICAgICAgIGxlZ2VuZD0nQWRyaWFuIFZlaWR0J1xuICAgICAgICAgICAgICAgIHJpZ2h0SWNvbj0nc3RhcidcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICAgICAgYXZhdGFyPSdodHRwczovL2RsLmRyb3Bib3h1c2VyY29udGVudC5jb20vdS8yMjQ3MjY0L2Fzc2V0cy9yLmpwZydcbiAgICAgICAgICAgICAgICBjYXB0aW9uPSdSb3JzY2hhY2gnXG4gICAgICAgICAgICAgICAgbGVnZW5kPSdXYWx0ZXIgSm9zZXBoIEtvdmFjcydcbiAgICAgICAgICAgICAgICByaWdodEljb249J3N0YXInXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxMaXN0U3ViSGVhZGVyIGNhcHRpb249J0NvbmZpZ3VyYXRpb24nIC8+XG4gICAgICAgICAgICAgIDxMaXN0Q2hlY2tib3ggY2hlY2tlZCBjYXB0aW9uPSdOb3RpZnkgbmV3IGNvbWljcycgbGVnZW5kPSdZb3Ugd2lsbCByZWNlaXZlIGEgbm90aWZpY2F0aW9uIHdoZW4gYSBuZXcgb25lIGlzIHB1Ymxpc2hlZCcgLz5cbiAgICAgICAgICAgICAgPExpc3REaXZpZGVyIC8+XG4gICAgICAgICAgICAgIDxMaXN0SXRlbSBjYXB0aW9uPSdDb250YWN0IHRoZSBwdWJsaXNoZXInIGxlZnRJY29uPSdzZW5kJyAvPlxuICAgICAgICAgICAgICA8TGlzdEl0ZW0gY2FwdGlvbj0nUmVtb3ZlIHRoaXMgcHVibGljYXRpb24nIGxlZnRJY29uPSdkZWxldGUnIC8+XG4gICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRGlhbG9nPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEb2N1bWVudHNEaWFsb2dcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvRG9jdW1lbnRzRGlhbG9nLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})