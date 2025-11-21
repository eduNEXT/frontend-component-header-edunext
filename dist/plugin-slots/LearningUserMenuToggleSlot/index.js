import React from 'react';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import LearningUserMenuToggle, { LearningUserMenuTogglePropTypes } from '../../learning-header/LearningUserMenuToggle';
var LearningUserMenuToggleSlot = function LearningUserMenuToggleSlot(_ref) {
  var label = _ref.label,
    icon = _ref.icon;
  return /*#__PURE__*/React.createElement(PluginSlot, {
    id: "org.openedx.frontend.layout.header_learning_user_menu_toggle.v1",
    slotOptions: {
      mergeProps: true
    }
  }, /*#__PURE__*/React.createElement(LearningUserMenuToggle, {
    label: label,
    icon: icon
  }));
};
LearningUserMenuToggleSlot.propTypes = LearningUserMenuTogglePropTypes;
export default LearningUserMenuToggleSlot;
//# sourceMappingURL=index.js.map