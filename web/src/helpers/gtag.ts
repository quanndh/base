import { GA_TRACKING_ID } from './environment';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (GA_TRACKING_ID)
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (
  name: Gtag.EventNames | string,
  params?: Gtag.ControlParams | Gtag.EventParams | Gtag.CustomParams,
) => {
  if (GA_TRACKING_ID) {
    window.gtag('event', name, params);
  }
};

export default { pageview, event };
