import { useEffect, useState } from 'react';

import { CommandItem } from '@/components/ui/command';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

function readTheme(): 'dark' | 'light' {
  if (typeof document === 'undefined') return 'dark';
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

function applyTheme(theme: 'dark' | 'light') {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  document.documentElement.style.colorScheme = theme;
  localStorage.setItem('theme', theme);
  document.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
}

export default function ToggleTheme() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(readTheme() === 'dark');
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <CommandItem className="flex justify-between">
      <Label>Dark Mode</Label>
      <Switch
        checked={isDark}
        onCheckedChange={() => {
          const next = isDark ? 'light' : 'dark';
          applyTheme(next);
          setIsDark(!isDark);
        }}
      />
    </CommandItem>
  );
}
