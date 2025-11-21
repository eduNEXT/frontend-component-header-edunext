import React from 'react';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import DesktopUserMenuToggle, { DesktopUserMenuTogglePropTypes } from '../../desktop-header/DesktopUserMenuToggle';
var DesktopUserMenuToggleSlot = function DesktopUserMenuToggleSlot(_ref) {
  var avatar = _ref.avatar,
    label = _ref.label;
  return /*#__PURE__*/React.createElement(PluginSlot, {
    id: "org.openedx.frontend.layout.header_desktop_user_menu_toggle.v1",
    slotOptions: {
      mergeProps: true
    }
  }, /*#__PURE__*/React.createElement(DesktopUserMenuToggle, {
    avatar: avatar,
    label: label
  }));
};
DesktopUserMenuToggleSlot.propTypes = DesktopUserMenuTogglePropTypes;
export default DesktopUserMenuToggleSlot;
//# sourceMappingURL=index.js.map