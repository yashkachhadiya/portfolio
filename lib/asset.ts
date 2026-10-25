/**
 * Helper to resolve asset and resource paths correctly across both
 * local development (root /) and GitHub Pages subpath deployment (/portfolio/).
 */
export function getAssetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!path) return basePath || "/";
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}
