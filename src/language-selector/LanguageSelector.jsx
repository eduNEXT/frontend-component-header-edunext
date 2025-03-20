import PropTypes from 'prop-types';
import React, { useMemo, useContext } from 'react';
import { getPrimaryLanguageSubtag, injectIntl } from '@edx/frontend-platform/i18n';
import { Dropdown, useWindowSize } from '@openedx/paragon';
import { Language } from '@openedx/paragon/icons';
import { getCookies } from '@edx/frontend-platform/i18n/lib';
import { AppContext } from '@edx/frontend-platform/react';

/**
 * Changes the user's language preference by setting a cookie and reloading the page.
 *
 * @param {string} langCookieName - The name of the cookie used to store language preference
 * @param {string} selectedLocale - The locale code (e.g. 'en', 'es') to set as the preferred language
 */
const onLanguageSelected = (langCookieName, selectedLocale) => {
  const cookies = getCookies();
  cookies.set(langCookieName, selectedLocale);
  window.location.reload();
};

/**
 * Gets the localized display name of a language in its own language.
 * First letter is capitalized for display purposes.
 *
 * @param {string} locale - The locale code (e.g. 'en', 'es')
 * @returns {string} The capitalized display name of the language
 */
const getLocaleName = (locale) => {
  const langName = new Intl.DisplayNames([locale], { type: 'language', languageDisplay: 'standard' }).of(locale);
  return langName.charAt(0).toUpperCase() + langName.slice(1);
};

/**
 * Language Selector component that displays a dropdown allowing users to change the site language.
 *
 * Features:
 * - Responsive design that adjusts label display based on screen width
 * - Only displays languages configured in SITE_SUPPORTED_LANGUAGES
 * - Can be completely disabled via ENABLE_HEADER_LANG_SELECTOR config
 * - Stores language preference in a cookie
 *
 * @component
 * @param {Object} props
 * @param {string} props.className - Additional CSS class names to apply to the component
 * @returns {React.Element|null} The rendered component or null if disabled/no supported languages
 */
const LanguageSelector = ({ className }) => {
  const { config } = useContext(AppContext);
  const { width } = useWindowSize();
  const cookies = getCookies();

  const options = config.SITE_SUPPORTED_LANGUAGES;
  const langCookieName = config?.LANGUAGE_PREFERENCE_COOKIE_NAME;
  const currentLocale = cookies.get(langCookieName) || 'en';

  /**
   * Handles the selection of a language from the dropdown.
   * Only reloads the page if the selected language is different from the current one.
   *
   * @param {string} selectedLocale - The locale code selected by the user
   */
  const handleSelect = (selectedLocale) => {
    if (currentLocale !== selectedLocale) {
      onLanguageSelected(langCookieName, selectedLocale);
    }
  };

  /**
   * Determines what to display as the button label based on screen width:
   * - Less than 576px: No text (icon only)
   * - 576px to 767px: Language code in uppercase (e.g., "EN", "ES")
   * - 768px and above: Full language name (e.g., "English", "Español")
   */
  const currentLocaleLabel = useMemo(() => {
    if (width < 576) { return ''; }
    if (width < 768) { return getPrimaryLanguageSubtag(currentLocale).toUpperCase(); }
    return getLocaleName(currentLocale);
  }, [currentLocale, width]);

  // Don't render the component if it's disabled or there are no language options
  if (!config.ENABLE_HEADER_LANG_SELECTOR
    || !Array.isArray(options)
    || options.length === 0) {
    return null;
  }

  return (
    <div className={className} id="language-selector">
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle
          id="lang-selector-dropdown"
          iconBefore={Language}
          variant="outline-primary"
          size="sm"
        >
          {currentLocaleLabel}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {options.map((locale) => (
            <Dropdown.Item key={`lang-selector-${locale}`} eventKey={locale}>
              {getLocaleName(locale)}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

LanguageSelector.propTypes = {
  className: PropTypes.string,
};

LanguageSelector.defaultProps = {
  className: '',
};

export default injectIntl(LanguageSelector);
