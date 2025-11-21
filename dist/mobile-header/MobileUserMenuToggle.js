import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
var MobileUserMenuToggle = function MobileUserMenuToggle(_ref) {
  var avatar = _ref.avatar,
    username = _ref.username;
  return /*#__PURE__*/React.createElement(Avatar, {
    size: "1.5rem",
    src: avatar,
    alt: username
  });
};
export var MobileUserMenuTogglePropTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string
};
MobileUserMenuToggle.propTypes = MobileUserMenuTogglePropTypes;
export default MobileUserMenuToggle;
//# sourceMappingURL=MobileUserMenuToggle.js.map