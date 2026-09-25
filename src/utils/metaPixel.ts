// Meta Pixel & Conversions API (CAPI) Utility
export const META_PIXEL_ID = '1031140289908433';
export const META_ACCESS_TOKEN =
  import.meta.env.VITE_META_ACCESS_TOKEN ||
  'EAFzGloW5T2cBSnkMMtkZBgm5gUvMuKQnqSXaJalp4BIVtsccJZAubHoNxoKoOwNoPy9m5iPapbSdfXnN4bvfhNOehZCCloMsAtC2HgIdfk3rM2bLsB9m1IWTYiv782LU9TT3f6cNp7sZC3SBdeeKsUO0lfjluzjpkbwMbpnS0w5aIoIQYQjwiGayPYSlXgZDZD';

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}

// Generate unique event ID for deduplication between Pixel and CAPI
export const generateEventId = (): string => {
  return 'evt_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9);
};

// SHA-256 hash helper for CAPI user data normalization
async function hashValue(val: string): Promise<string> {
  const cleanVal = val.trim().toLowerCase();
  if (!cleanVal) return '';
  try {
    if (window.crypto && window.crypto.subtle) {
      const msgBuffer = new TextEncoder().encode(cleanVal);
      const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
    }
  } catch (e) {
    console.warn('Crypto SHA-256 error', e);
  }
  return '';
}

export interface UserData {
  email?: string;
  phone?: string;
  name?: string;
}

export interface CustomData {
  content_name?: string;
  content_category?: string;
  content_ids?: string[];
  value?: number;
  currency?: string;
  num_items?: number;
  [key: string]: any;
}

/**
 * Track standard or custom event via Meta Pixel (Browser) and Meta Conversions API (CAPI)
 */
export async function trackMetaEvent(
  eventName: string,
  customData: CustomData = {
    content_name: '700+ Produk Digital Siap Jual + Panduan LYNK ID',
    value: 49000,
    currency: 'IDR',
  },
  userData?: UserData
) {
  const eventId = generateEventId();
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  // 1. Client-Side Meta Pixel (fbq)
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      window.fbq('track', eventName, customData, { eventID: eventId });
    } catch (err) {
      console.warn('Pixel track error:', err);
    }
  }

  // 2. Server-side / Direct Meta Conversions API (CAPI)
  if (META_ACCESS_TOKEN && META_PIXEL_ID) {
    try {
      const hashedEmail = userData?.email ? await hashValue(userData.email) : undefined;
      let cleanPhone = userData?.phone ? userData.phone.replace(/[^0-9]/g, '') : undefined;
      if (cleanPhone && cleanPhone.startsWith('0')) {
        cleanPhone = '62' + cleanPhone.substring(1);
      }
      const hashedPhone = cleanPhone ? await hashValue(cleanPhone) : undefined;

      const payload = {
        data: [
          {
            event_name: eventName,
            event_time: Math.floor(Date.now() / 1000),
            event_id: eventId,
            event_source_url: currentUrl,
            action_source: 'website',
            user_data: {
              ...(hashedEmail ? { em: [hashedEmail] } : {}),
              ...(hashedPhone ? { ph: [hashedPhone] } : {}),
              client_user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
            },
            custom_data: {
              ...customData,
            },
          },
        ],
      };

      // Send to Graph API Conversions endpoint
      fetch(
        `https://graph.facebook.com/v19.0/${META_PIXEL_ID}/events?access_token=${encodeURIComponent(
          META_ACCESS_TOKEN
        )}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
          keepalive: true,
        }
      ).catch((e) => {
        // Silent catch for ad-blockers / network issues
        console.debug('CAPI fetch notice:', e);
      });
    } catch (e) {
      console.debug('CAPI dispatch error:', e);
    }
  }

  return eventId;
}

/**
 * Convenient helper when user initiates checkout
 */
export function trackInitiateCheckout(source: string = 'cta_button') {
  trackMetaEvent('InitiateCheckout', {
    content_name: 'Akses 700+ Produk Digital Siap Jual + Bonus Panduan',
    content_category: 'Digital Products',
    value: 49000,
    currency: 'IDR',
    source: source,
  });
}

/**
 * Convenient helper when user submits checkout form
 */
export function trackLeadOrPurchase(userData: UserData) {
  trackMetaEvent(
    'Lead',
    {
      content_name: 'Pendaftaran Akses 700+ Produk Digital',
      value: 49000,
      currency: 'IDR',
    },
    userData
  );
}
