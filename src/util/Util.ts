export const unslugify = (slug: string) =>
  slug
    .replace(/\-/g, " ")
    .replace(
      /\w\S*/g,
      (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
    );

export const slugify = (string: string) =>
  string
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\s+/g, "-");
