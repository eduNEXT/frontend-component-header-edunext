import React from 'react';
import PropTypes from 'prop-types';
import { CaretIcon } from '../Icons';
import Avatar from '../Avatar';
var DesktopUserMenuToggle = function DesktopUserMenuToggle(_ref) {
  var avatar = _ref.avatar,
    label = _ref.label;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Avatar, {
    size: "1.5em",
    src: avatar,
    alt: "",
    className: "mr-2"
  }), label, " ", /*#__PURE__*/React.createElement(CaretIcon, {
    role: "img",
    "aria-hidden": true,
    focusable: "false"
  }));
};
export var DesktopUserMenuTogglePropTypes = {
  avatar: PropTypes.string,
  label: PropTypes.string
};
DesktopUserMenuToggle.propTypes = DesktopUserMenuTogglePropTypes;
export default DesktopUserMenuToggle;
//# sourceMappingURL=DesktopUserMenuToggle.js.map