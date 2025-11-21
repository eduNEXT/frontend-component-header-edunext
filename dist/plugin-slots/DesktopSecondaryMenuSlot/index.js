import React from 'react';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import DesktopHeaderMainOrSecondaryMenu, { desktopHeaderMainOrSecondaryMenuDataShape } from '../../desktop-header/DesktopHeaderMainOrSecondaryMenu';
var DesktopSecondaryMenuSlot = function DesktopSecondaryMenuSlot(_ref) {
  var menu = _ref.menu;
  return /*#__PURE__*/React.createElement(PluginSlot, {
    id: "org.openedx.frontend.layout.header_desktop_secondary_menu.v1",
    idAliases: ['desktop_secondary_menu_slot'],
    slotOptions: {
      mergeProps: true
    }
  }, /*#__PURE__*/React.createElement(DesktopHeaderMainOrSecondaryMenu, {
    menu: menu
  }));
};
DesktopSecondaryMenuSlot.propTypes = {
  menu: desktopHeaderMainOrSecondaryMenuDataShape
};
export default DesktopSecondaryMenuSlot;
//# sourceMappingURL=index.js.map