import React from 'react';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import MobileUserMenuToggle, { MobileUserMenuTogglePropTypes } from '../../mobile-header/MobileUserMenuToggle';
var MobileUserMenuToggleSlot = function MobileUserMenuToggleSlot(_ref) {
  var avatar = _ref.avatar,
    label = _ref.label;
  return /*#__PURE__*/React.createElement(PluginSlot, {
    id: "org.openedx.frontend.layout.header_mobile_user_menu_trigger.v1",
    slotOptions: {
      mergeProps: true
    }
  }, /*#__PURE__*/React.createElement(MobileUserMenuToggle, {
    avatar: avatar,
    label: label
  }));
};
MobileUserMenuToggleSlot.propTypes = MobileUserMenuTogglePropTypes;
export default MobileUserMenuToggleSlot;
//# sourceMappingURL=index.js.map