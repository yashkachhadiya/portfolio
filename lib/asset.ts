/**
 * Direct constant for repository base path on GitHub Pages.
 * No environment variables needed or used.
 */
export const BASE_PATH = "/portfolio";

export function getAssetPath(path: string): string {
  if (!path) return `${BASE_PATH}/`;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (cleanPath === "/") {
    return `${BASE_PATH}/`;
  }
  return `${BASE_PATH}${cleanPath}`;
}
