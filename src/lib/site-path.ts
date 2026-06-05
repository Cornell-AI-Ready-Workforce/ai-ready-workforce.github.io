const siteBasePath = process.env.NEXT_PUBLIC_SITE_BASE_PATH ?? "";

export function withSiteBasePath(path: string) {
  if (!siteBasePath || !path.startsWith("/")) {
    return path;
  }

  return `${siteBasePath}${path}`;
}
