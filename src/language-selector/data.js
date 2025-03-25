import { getConfig } from '@edx/frontend-platform';
import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';
import { convertKeyNames, snakeCaseObject } from '@edx/frontend-platform/utils';

/**
 * Updates user preferences via the preferences API
 *
 * @param {string} username - The username of the user whose preferences to update
 * @param {Object} params - The preference parameters to update
 * @returns {Promise} - Promise that resolves when the API call completes
 */
export async function patchPreferences(username, params) {
  let processedParams = snakeCaseObject(params);
  processedParams = convertKeyNames(processedParams, {
    pref_lang: 'pref-lang',
  });

  await getAuthenticatedHttpClient()
    .patch(`${getConfig().LMS_BASE_URL}/api/user/v1/preferences/${username}`, processedParams, {
      headers: { 'Content-Type': 'application/merge-patch+json' },
    });
}

/**
 * Sets the language for the current session using the setlang endpoint
 *
 * @param {string} code - The language code to set (e.g., 'en', 'es')
 * @returns {Promise} - Promise that resolves when the API call completes
 */
export async function postSetLang(code) {
  const formData = new FormData();
  const requestConfig = {
    headers: {
      Accept: 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
  };
  const url = `${getConfig().LMS_BASE_URL}/i18n/setlang/`;
  formData.append('language', code);

  await getAuthenticatedHttpClient()
    .post(url, formData, requestConfig);
}
