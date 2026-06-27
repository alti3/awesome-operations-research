import { topicDetails } from "@/data/topicDetails";
import { regions, topics, type Topic } from "@/data/topics";
import type { TopicSection } from "@/components/site/TableOfContents";

export const topicSections: TopicSection[] = [
  { id: "overview", title: "Overview" },
  { id: "core-ideas", title: "Core ideas" },
  { id: "workflow", title: "How to use it" },
  { id: "applications", title: "Applications" },
  { id: "pitfalls", title: "Common pitfalls" },
  { id: "resources", title: "Resources" },
  { id: "related", title: "Related topics" },
];

export function getTopicById(topicId: string) {
  return topics.find((topic) => topic.id === topicId);
}

export function getTopicRegion(topic: Topic) {
  return regions.find((region) => region.id === topic.region);
}

export function getTopicDetail(topic: Topic) {
  return topicDetails[topic.id];
}

function words(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 2);
}

function topicKeywords(topic: Topic) {
  return new Set(
    [
      topic.id,
      topic.title,
      topic.short,
      topic.description,
      topic.region,
      topic.type,
      topic.difficulty,
      ...topic.concepts,
      ...(topic.applications ?? []),
    ].flatMap(words),
  );
}

export function getRelatedTopics(topic: Topic) {
  const explicit = (topic.next ?? [])
    .map((id) => topics.find((candidate) => candidate.id === id))
    .filter((candidate): candidate is Topic => Boolean(candidate));
  const topicWords = topicKeywords(topic);
  const inferred = topics
    .filter(
      (candidate) =>
        candidate.id !== topic.id && !explicit.some((item) => item.id === candidate.id),
    )
    .map((candidate) => {
      const candidateWords = topicKeywords(candidate);
      let score = candidate.region === topic.region ? 2 : 0;
      for (const word of candidateWords) {
        if (topicWords.has(word)) score += 1;
      }
      return { candidate, score };
    })
    .filter(({ score }) => score >= 3)
    .sort((a, b) => b.score - a.score || a.candidate.title.localeCompare(b.candidate.title))
    .map(({ candidate }) => candidate);

  return [...explicit, ...inferred].slice(0, 6);
}
