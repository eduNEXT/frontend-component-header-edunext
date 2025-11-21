import React from 'react';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import DesktopHeaderMainOrSecondaryMenu, { desktopHeaderMainOrSecondaryMenuDataShape } from '../../desktop-header/DesktopHeaderMainOrSecondaryMenu';
var DesktopMainMenuSlot = function DesktopMainMenuSlot(_ref) {
  var menu = _ref.menu;
  return /*#__PURE__*/React.createElement(PluginSlot, {
    id: "org.openedx.frontend.layout.header_desktop_main_menu.v1",
    idAliases: ['desktop_main_menu_slot'],
    slotOptions: {
      mergeProps: true
    }
  }, /*#__PURE__*/React.createElement(DesktopHeaderMainOrSecondaryMenu, {
    menu: menu
  }));
};
DesktopMainMenuSlot.propTypes = {
  menu: desktopHeaderMainOrSecondaryMenuDataShape
};
export default DesktopMainMenuSlot;
//# sourceMappingURL=index.js.map