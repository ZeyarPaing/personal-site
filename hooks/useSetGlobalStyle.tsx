import { useEffect } from 'react';

export function useSetGlobalStyle(
  styles: { string: string },
  options: { reset?: boolean } = { reset: true },
) {
  useEffect(() => {
    Object.entries(styles).forEach(([property, value]) => {
      document.body.style.setProperty(property, value);
    });
    return () => {
      if (options?.reset) {
        Object.entries(styles).forEach(([property]) => {
          document.body.style.removeProperty(property);
        });
      }
    };
  });
}
