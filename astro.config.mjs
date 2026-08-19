// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Your live GitHub Pages URL. The repo is lesliegs4/Leslie-Portfolio,
  // so the site is served from https://lesliegs4.github.io/Leslie-Portfolio/
  site: 'https://lesliegs4.github.io',
  base: '/Leslie-Portfolio',

  devToolbar: { enabled: false },
});
