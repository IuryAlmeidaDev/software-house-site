import { useCallback } from 'react';

export function useScrollSection(): (id: string) => void {
  return useCallback((id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);
}
