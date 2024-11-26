export const slugToText = (slug: string): string => {
  return slug.replace(/-/g, ' ');
}
