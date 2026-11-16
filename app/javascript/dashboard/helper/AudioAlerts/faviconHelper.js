const FAVICON_PATH = '/faviconthebrain/favicon-96x96.png';
const BADGE_FAVICON_PATH = '/faviconthebrain/favicon-badge.svg';

export const showBadgeOnFavicon = () => {
  const favicons = document.querySelectorAll('.favicon');

  favicons.forEach(favicon => {
    favicon.type = 'image/svg+xml';
    favicon.href = BADGE_FAVICON_PATH;
  });
};

export const initFaviconSwitcher = () => {
  const favicons = document.querySelectorAll('.favicon');

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      favicons.forEach(favicon => {
        favicon.type = 'image/png';
        favicon.href = FAVICON_PATH;
      });
    }
  });
};
