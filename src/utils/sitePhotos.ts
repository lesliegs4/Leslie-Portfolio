import { readdirSync } from "node:fs";
import { join } from "node:path";

export type SitePhoto = {
  src: string;
  alt: string;
};

const PHOTO_ROOT = join(
  process.cwd(),
  "public/images/site photos/photo_scroll",
);
const IMAGE_EXT = /\.(jpe?g|png)$/i;

function titleCase(value: string): string {
  return value
    .replace(/[+@]/g, " ")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function formatPhoto(filename: string): SitePhoto {
  const caption = filename.replace(IMAGE_EXT, "");

  return {
    src: `/images/site photos/photo_scroll/${encodeURIComponent(filename)}`,
    alt: titleCase(caption),
  };
}

function shuffle<T>(items: T[]): T[] {
  const array = [...items];

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

export function getSitePhotos(): SitePhoto[] {
  const photos = readdirSync(PHOTO_ROOT)
    .filter((entry) => IMAGE_EXT.test(entry))
    .map(formatPhoto);

  return shuffle(photos);
}
