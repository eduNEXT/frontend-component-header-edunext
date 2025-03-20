import React from 'react';
import { mergeConfig } from '@edx/frontend-platform';
import { getCookies } from '@edx/frontend-platform/i18n/lib';
import {
  authenticatedUser, fireEvent, initializeMockApp, render, screen,
} from '../setupTest';
import LanguageSelector from './LanguageSelector';

jest.mock('@openedx/paragon/icons', () => ({
  Language: () => <div>LanguageIcon</div>,
}));

jest.mock('@openedx/paragon', () => ({
  ...jest.requireActual('@openedx/paragon'),
  useWindowSize: () => ({ width: global.innerWidth }),
}));

const LANGUAGE_PREFERENCE_COOKIE_NAME = 'language-preference';

describe('LanguageSelector', () => {
  let mockReload;

  beforeEach(() => {
    jest.clearAllMocks();

    mergeConfig({
      ENABLE_HEADER_LANG_SELECTOR: true,
      LANGUAGE_PREFERENCE_COOKIE_NAME,
      SITE_SUPPORTED_LANGUAGES: ['es', 'en'],
      authenticatedUser,
    });

    initializeMockApp();

    mockReload = jest.fn();
    Object.defineProperty(window, 'location', {
      configurable: true,
      writable: true,
      value: { reload: mockReload },
    });

    global.innerWidth = 1200;
  });

  it('should not render when language selector is disabled', () => {
    mergeConfig({
      ENABLE_HEADER_LANG_SELECTOR: false,
    });

    const { container } = render(<LanguageSelector />);

    expect(container.querySelector('#language-selector')).toBeNull();
  });

  it('should not render when no supported languages are available', () => {
    mergeConfig({
      SITE_SUPPORTED_LANGUAGES: [],
    });

    const { container } = render(<LanguageSelector />);

    expect(container.querySelector('#language-selector')).toBeNull();
  });

  it('should change the language and reload the page', () => {
    const setCookiesSpy = jest.spyOn(getCookies(), 'set');
    render(<LanguageSelector />);

    const langDropdown = screen.getByRole('button', { id: 'lang-selector-dropdown' });
    fireEvent.click(langDropdown);

    const spanishOption = screen.getByRole('button', { name: 'Español' });
    fireEvent.click(spanishOption);

    expect(setCookiesSpy).toHaveBeenCalledWith(LANGUAGE_PREFERENCE_COOKIE_NAME, 'es');
    expect(mockReload).toHaveBeenCalled();
  });

  it('should not reload the page if the same language is selected', () => {
    jest.spyOn(getCookies(), 'get').mockImplementation(() => 'en');

    const setCookiesSpy = jest.spyOn(getCookies(), 'set');
    render(<LanguageSelector />);

    const langDropdown = screen.getByRole('button', { id: 'lang-selector-dropdown' });
    fireEvent.click(langDropdown);

    const englishOption = screen.getByRole('button', { name: 'English' });
    fireEvent.click(englishOption);

    expect(setCookiesSpy).not.toHaveBeenCalled();
    expect(mockReload).not.toHaveBeenCalled();
  });

  it('should display the language icon and modify the label according to the screen size', () => {
    jest.spyOn(getCookies(), 'get').mockImplementation(() => 'en');

    global.innerWidth = 1200;
    const { rerender } = render(<LanguageSelector />);
    const button = screen.getByRole('button', { id: 'lang-selector-dropdown' });
    expect(button.textContent).toContain('English');

    global.innerWidth = 700;
    rerender(<LanguageSelector />);
    expect(button.textContent).toContain('EN');

    global.innerWidth = 500;
    rerender(<LanguageSelector />);
    expect(button.textContent).not.toContain('EN');
    expect(button.textContent).not.toContain('English');
  });
});
