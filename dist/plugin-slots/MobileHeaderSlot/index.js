import React from 'react';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import MobileHeader, { mobileHeaderDataShape } from '../../mobile-header/MobileHeader';
var MobileHeaderSlot = function MobileHeaderSlot(_ref) {
  var props = _ref.props;
  return /*#__PURE__*/React.createElement(PluginSlot, {
    id: "org.openedx.frontend.layout.header_mobile.v1",
    idAliases: ['mobile_header_slot'],
    slotOptions: {
      mergeProps: true
    }
  }, /*#__PURE__*/React.createElement(MobileHeader, props));
};
MobileHeaderSlot.propTypes = mobileHeaderDataShape;
export default MobileHeaderSlot;
//# sourceMappingURL=index.js.map