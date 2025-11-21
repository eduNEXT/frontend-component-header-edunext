import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from '@edx/frontend-platform/i18n';
import { getConfig } from '@edx/frontend-platform';

// Local Components
import DesktopUserMenuToggleSlot from '../plugin-slots/DesktopUserMenuToggleSlot';
import { Menu, MenuTrigger, MenuContent } from '../Menu';
import LogoSlot from '../plugin-slots/LogoSlot';
import DesktopLoggedOutItemsSlot from '../plugin-slots/DesktopLoggedOutItemsSlot';
import { desktopLoggedOutItemsDataShape } from './DesktopLoggedOutItems';
import DesktopMainMenuSlot from '../plugin-slots/DesktopMainMenuSlot';
import { desktopHeaderMainOrSecondaryMenuDataShape } from './DesktopHeaderMainOrSecondaryMenu';
import DesktopSecondaryMenuSlot from '../plugin-slots/DesktopSecondaryMenuSlot';
import DesktopUserMenuSlot from '../plugin-slots/DesktopUserMenuSlot';
import { desktopUserMenuDataShape } from './DesktopHeaderUserMenu';
import LanguageSelector from '../language-selector';

// i18n
import messages from '../Header.messages';

// Assets

var DesktopHeader = function DesktopHeader(_ref) {
  var mainMenu = _ref.mainMenu,
    secondaryMenu = _ref.secondaryMenu,
    userMenu = _ref.userMenu,
    loggedOutItems = _ref.loggedOutItems,
    logo = _ref.logo,
    logoAltText = _ref.logoAltText,
    logoDestination = _ref.logoDestination,
    avatar = _ref.avatar,
    username = _ref.username,
    loggedIn = _ref.loggedIn;
  var intl = useIntl();
  var renderMainMenu = function renderMainMenu() {
    return /*#__PURE__*/React.createElement(DesktopMainMenuSlot, {
      menu: mainMenu
    });
  };
  var renderSecondaryMenu = function renderSecondaryMenu() {
    return /*#__PURE__*/React.createElement(DesktopSecondaryMenuSlot, {
      menu: secondaryMenu
    });
  };
  var renderUserMenu = function renderUserMenu() {
    return /*#__PURE__*/React.createElement(Menu, {
      transitionClassName: "menu-dropdown",
      transitionTimeout: 250
    }, /*#__PURE__*/React.createElement(MenuTrigger, {
      tag: "button",
      "aria-label": intl.formatMessage(messages['header.label.account.menu.for'], {
        username: username
      }),
      className: "btn btn-outline-primary d-inline-flex align-items-center pl-2 pr-3"
    }, /*#__PURE__*/React.createElement(DesktopUserMenuToggleSlot, {
      avatar: avatar,
      label: username
    })), /*#__PURE__*/React.createElement(MenuContent, {
      className: "mb-0 dropdown-menu show dropdown-menu-right pin-right shadow py-2"
    }, /*#__PURE__*/React.createElement(DesktopUserMenuSlot, {
      menu: userMenu
    })));
  };
  var renderLoggedOutItems = function renderLoggedOutItems() {
    return /*#__PURE__*/React.createElement(DesktopLoggedOutItemsSlot, {
      items: loggedOutItems
    });
  };
  var logoProps = {
    src: logo,
    alt: logoAltText,
    href: logoDestination
  };
  var logoClasses = getConfig().AUTHN_MINIMAL_HEADER ? 'mw-100' : null;
  return /*#__PURE__*/React.createElement("header", {
    className: "site-header-desktop"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-skip sr-only sr-only-focusable",
    href: "#main"
  }, intl.formatMessage(messages['header.label.skip.nav'])), /*#__PURE__*/React.createElement("div", {
    className: "container-fluid ".concat(logoClasses)
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-container position-relative d-flex align-items-center"
  }, /*#__PURE__*/React.createElement(LogoSlot, logoProps), /*#__PURE__*/React.createElement("nav", {
    "aria-label": intl.formatMessage(messages['header.label.main.nav']),
    className: "nav main-nav"
  }, renderMainMenu()), /*#__PURE__*/React.createElement("nav", {
    "aria-label": intl.formatMessage(messages['header.label.secondary.nav']),
    className: "nav secondary-menu-container align-items-center ml-auto"
  }, getConfig().ENABLE_HEADER_LANG_SELECTOR && /*#__PURE__*/React.createElement(LanguageSelector, null), loggedIn ? /*#__PURE__*/React.createElement(React.Fragment, null, renderSecondaryMenu(), renderUserMenu()) : renderLoggedOutItems()))));
};
export var desktopHeaderDataShape = {
  mainMenu: desktopHeaderMainOrSecondaryMenuDataShape,
  secondaryMenu: desktopHeaderMainOrSecondaryMenuDataShape,
  userMenu: desktopUserMenuDataShape,
  loggedOutItems: desktopLoggedOutItemsDataShape,
  logo: PropTypes.string,
  logoAltText: PropTypes.string,
  logoDestination: PropTypes.string,
  avatar: PropTypes.string,
  username: PropTypes.string,
  loggedIn: PropTypes.bool
};
DesktopHeader.propTypes = {
  mainMenu: desktopHeaderDataShape.mainMenu,
  secondaryMenu: desktopHeaderDataShape.secondaryMenu,
  userMenu: desktopHeaderDataShape.userMenu,
  loggedOutItems: desktopHeaderDataShape.loggedOutItems,
  logo: desktopHeaderDataShape.logo,
  logoAltText: desktopHeaderDataShape.logoAltText,
  logoDestination: desktopHeaderDataShape.logoDestination,
  avatar: desktopHeaderDataShape.avatar,
  username: desktopHeaderDataShape.username,
  loggedIn: desktopHeaderDataShape.loggedIn
};
DesktopHeader.defaultProps = {
  mainMenu: [],
  secondaryMenu: [],
  userMenu: [],
  loggedOutItems: [],
  logo: null,
  logoAltText: null,
  logoDestination: null,
  avatar: null,
  username: null,
  loggedIn: false
};
export default DesktopHeader;
//# sourceMappingURL=DesktopHeader.js.map