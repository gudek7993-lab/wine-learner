/** Stable in-page anchor for a study topic. Shared by TopicBlock (renders it) and the search index (links to it). */
export function topicAnchor(title: string): string {
  return "t-" + title.trim().replace(/[\s#?/\\%]+/g, "-");
}
