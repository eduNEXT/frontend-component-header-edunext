import React from 'react';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import LearningHeaderHelpLink from '../../learning-header/LearningHeaderHelpLink';
var LearningHelpSlot = function LearningHelpSlot() {
  return /*#__PURE__*/React.createElement(PluginSlot, {
    id: "org.openedx.frontend.layout.header_learning_help.v1",
    idAliases: ['learning_help_slot']
  }, /*#__PURE__*/React.createElement(LearningHeaderHelpLink, null));
};
export default LearningHelpSlot;
//# sourceMappingURL=index.js.map