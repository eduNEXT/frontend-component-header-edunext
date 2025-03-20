import PropTypes from 'prop-types';
import React, { useMemo, useContext } from 'react';
import { getPrimaryLanguageSubtag, injectIntl } from '@edx/frontend-platform/i18n';
import { Dropdown, useWindowSize } from '@openedx/paragon';
import { Language } from '@openedx/paragon/icons';
import { getCookies } from '@edx/frontend-platform/i18n/lib';
import { AppContext } from '@edx/frontend-platform/react';

const onLanguageSelected = (langCookieName, selectedLocale) => {
  const cookies = getCookies();
  cookies.set(langCookieName, selectedLocale);
  window.location.reload();
};

const getLocaleName = (locale) => {
  const langName = new Intl.DisplayNames([locale], { type: 'language', languageDisplay: 'standard' }).of(locale);
  return langName.charAt(0).toUpperCase() + langName.slice(1);
};

const LanguageSelector = ({ className }) => {
  const { config } = useContext(AppContext);
  const { width } = useWindowSize();
  const cookies = getCookies();

  const options = config.SITE_SUPPORTED_LANGUAGES;
  const langCookieName = config?.LANGUAGE_PREFERENCE_COOKIE_NAME;
  const currentLocale = cookies.get(langCookieName) || 'en';

  const handleSelect = (selectedLocale) => {
    if (currentLocale !== selectedLocale) {
      onLanguageSelected(langCookieName, selectedLocale);
    }
  };

  const currentLocaleLabel = useMemo(() => {
    if (width < 576) { return ''; }
    if (width < 768) { return getPrimaryLanguageSubtag(currentLocale).toUpperCase(); }
    return getLocaleName(currentLocale);
  }, [currentLocale, width]);

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
