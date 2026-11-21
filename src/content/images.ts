// Photos in /public/images/photos, used to dress page sections.
const photos = [
  "/images/photos/pexels-933964.jpg",
  "/images/photos/pexels-840996.jpg",
  "/images/photos/pexels-1128317.jpg",
  "/images/photos/pexels-585419.jpg",
  "/images/photos/pexels-8961401.jpg",
  "/images/photos/pexels-6230973.jpg",
  "/images/photos/pexels-327540.jpg",
  "/images/photos/pexels-4981810.jpg",
  "/images/photos/pexels-2199293.jpg",
  "/images/photos/pexels-2290753.jpg",
  "/images/photos/pexels-2696064.jpg",
  "/images/photos/pexels-30821414.jpg",
  "/images/photos/pexels-8422248.jpg",
  "/images/photos/pexels-7579041.jpg",
  "/images/photos/pexels-1020370.jpg",
  "/images/photos/pexels-1451040.jpg",
  "/images/photos/industry-healthcare.webp",
  "/images/photos/industry-retail.webp",
  "/images/photos/crane-truck.png",
  "/images/photos/cta-bg.jpg",
];

/**
 * A stable set of `count` different photos for a page, chosen from its slug so each
 * page gets its own mix and the same page always looks the same. Skips `exclude`.
 */
export function pagePhotos(seed: string, count: number, exclude: string[] = []): string[] {
  const pool = photos.filter((p) => !exclude.includes(p));
  let hash = 0;
  for (const ch of seed) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
  const step = [3, 7, 9, 11, 13].find((s) => pool.length % s !== 0) ?? 1;
  return Array.from({ length: Math.min(count, pool.length) }, (_, i) => pool[(hash + i * step) % pool.length]);
}
