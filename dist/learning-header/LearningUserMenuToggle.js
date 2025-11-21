import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
var LearningUserMenuToggle = function LearningUserMenuToggle(_ref) {
  var label = _ref.label,
    icon = _ref.icon;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: icon,
    className: "d-md-none",
    size: "lg"
  }), /*#__PURE__*/React.createElement("span", {
    "data-hj-suppress": true,
    className: "d-none d-md-inline"
  }, label));
};
export var LearningUserMenuTogglePropTypes = {
  label: PropTypes.string.isRequired,
  // Full shape available by examining @fortawesome/fontawesome-common-types/index.d.ts.
  icon: PropTypes.shape({
    prefix: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired
  }).isRequired
};
LearningUserMenuToggle.propTypes = LearningUserMenuTogglePropTypes;
export default LearningUserMenuToggle;
//# sourceMappingURL=LearningUserMenuToggle.js.map