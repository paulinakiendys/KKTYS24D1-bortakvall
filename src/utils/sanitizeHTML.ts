import DOMPurify from "dompurify";

export function sanitizeHTML(html: string) {
  return { __html: DOMPurify.sanitize(html) };
}
