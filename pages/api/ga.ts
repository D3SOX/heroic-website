interface GAEvent {
  action: string
  category: string
  label: string
  value: number
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

export type CookiesState = 'accepted' | 'denied' | undefined

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  // @ts-ignore
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GAEvent) => {
  // @ts-ignore
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  })
}
