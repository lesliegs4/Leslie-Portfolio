/**
 * Prefixes a root-relative path (e.g. "/images/foo.jpg") with the site's base
 * path so links keep working when the site is served from a subdirectory,
 * such as https://lesliegs4.github.io/Leslie-Portfolio/
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
