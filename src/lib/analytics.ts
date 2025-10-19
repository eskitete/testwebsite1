// Simple analytics stub. Replace with your provider (Plausible, GA4, etc.)
export function track(event: string, data?: Record<string, unknown>) {
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.debug('[analytics]', event, data || {})
  }
}

