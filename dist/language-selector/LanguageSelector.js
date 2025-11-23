function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { changeUserSessionLanguage, getSupportedLocaleList, getPrimaryLanguageSubtag, injectIntl } from '@edx/frontend-platform/i18n';
import { getConfig } from '@edx/frontend-platform'; // Agregar este import
import { getLocale } from '@edx/frontend-platform/i18n/lib';
import { Dropdown } from '@openedx/paragon';
import { Language } from '@openedx/paragon/icons';

/**
 * Gets the localized display name of a language in its own language.
 *
 * @function getDisplayName
 * @param {string} locale - The locale code (e.g., 'en', 'es', 'ar')
 * @returns {string} The capitalized display name of the language in its native form
 * @example
 */
var getDisplayName = function getDisplayName(locale) {
  var langName = new Intl.DisplayNames([locale], {
    type: 'language',
    languageDisplay: 'standard'
  }).of(locale);
  return langName.charAt(0).toUpperCase() + langName.slice(1);
};

/**
 * Language Selector component that displays a dropdown allowing users to change the site language.
 *
 * The component is responsive and adapts to different screen sizes:
 * - On large screens: Shows the full language name (e.g., "English")
 * - On medium screens: Shows the language code (e.g., "EN")
 * - On small screens: Shows only the language icon
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} [props.className=''] - Additional CSS class names to apply to the component
 * @returns {React.Element|null} The rendered component or null if disabled or no supported languages
 *
 * @requires config.SITE_SUPPORTED_LANGUAGES - Must be a non-empty array of locale codes
 * @requires config.LANGUAGE_PREFERENCE_COOKIE_NAME - Cookie name for storing language preference
 */
var LanguageSelector = function LanguageSelector(_ref) {
  var className = _ref.className;
  var allLanguages = getSupportedLocaleList();
  var configuredLanguages = getConfig().SITE_SUPPORTED_LANGUAGES;

  // Filter languages based on SITE_SUPPORTED_LANGUAGES config
  var languageOptions = Array.isArray(configuredLanguages) && configuredLanguages.length > 0 ? allLanguages.filter(function (locale) {
    return configuredLanguages.includes(locale);
  }) : allLanguages;
  var _useState = useState(getLocale()),
    _useState2 = _slicedToArray(_useState, 2),
    currentLocale = _useState2[0],
    setCurrentLocale = _useState2[1];

  /**
   * Handles the selection of a language from the dropdown.
   * Only triggers language change if the selected language is different from the current one.
   *
   * @param {string} selectedLocale - The locale code selected by the user
   */
  var handleSelect = function handleSelect(selectedLocale) {
    if (currentLocale !== selectedLocale) {
      changeUserSessionLanguage(selectedLocale, true);
      setCurrentLocale(selectedLocale);
    }
  };
  var currentLangCode = getPrimaryLanguageSubtag(currentLocale).toUpperCase();
  var currentlangDisplayName = getDisplayName(currentLocale);

  // Don't render the component if there are no language options
  if (!Array.isArray(languageOptions) || languageOptions.length === 0) {
    return null;
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(className, " language-selector"),
    id: "language-selector"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    onSelect: handleSelect
  }, /*#__PURE__*/React.createElement(Dropdown.Toggle, {
    id: "lang-selector-dropdown",
    iconBefore: Language,
    variant: "outline-primary",
    size: "sm"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lang-label-medium"
  }, currentLangCode), /*#__PURE__*/React.createElement("span", {
    className: "lang-label-large"
  }, currentlangDisplayName)), /*#__PURE__*/React.createElement(Dropdown.Menu, null, languageOptions.map(function (locale) {
    return /*#__PURE__*/React.createElement(Dropdown.Item, {
      key: "lang-selector-".concat(locale),
      eventKey: locale
    }, getDisplayName(locale));
  }))));
};
LanguageSelector.propTypes = {
  className: PropTypes.string
};
LanguageSelector.defaultProps = {
  className: ''
};
export default injectIntl(LanguageSelector);
//# sourceMappingURL=LanguageSelector.js.map