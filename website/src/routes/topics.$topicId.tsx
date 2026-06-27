import { createFileRoute, Link, notFound, useCanGoBack, useRouter } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { DifficultyBadge, Tag, TypeBadge } from "@/components/site/Badges";
import { TableOfContents } from "@/components/site/TableOfContents";
import {
  getRelatedTopics,
  getTopicById,
  getTopicDetail,
  getTopicRegion,
  topicSections,
} from "@/data/topicPages";
import { topics } from "@/data/topics";
import type { TopicDetailResource } from "@/data/topicDetails";

export const Route = createFileRoute("/topics/$topicId")({
  loader: ({ params }) => {
    const topic = getTopicById(params.topicId);
    if (!topic) throw notFound();
    const detail = getTopicDetail(topic);
    if (!detail) throw notFound();

    return {
      topic,
      detail,
      region: getTopicRegion(topic),
      related: getRelatedTopics(topic),
    };
  },
  head: ({ loaderData }) => {
    const topic = loaderData?.topic;
    const title = topic ? `${topic.title} — Operations Research` : "Operations Research Topic";
    const description = topic?.short ?? "A topic guide in the Map of Operations Research.";

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: TopicPage,
});

export function getStaticPaths() {
  return topics.map((topic) => ({ topicId: topic.id }));
}

function TopicPage() {
  const { topic, detail, region, related } = Route.useLoaderData();

  return (
    <div>
      <section className="relative border-b border-border/60">
        <div className="grid-bg absolute inset-0 opacity-35" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
          <BackControl regionId={topic.region} regionTitle={region?.title} />

          <div className="mt-8 max-w-3xl">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <TypeBadge value={topic.type} />
              <DifficultyBadge value={topic.difficulty} />
              <span className="mono text-[11px] text-muted-foreground">
                {topic.regionIndex.toString().padStart(2, "0")}.
                {topic.topicIndex.toString().padStart(2, "0")}
              </span>
            </div>
            <div className="mono text-[11px] uppercase tracking-wider text-primary">
              {region?.title ?? "Operations Research"}
            </div>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl">{topic.title}</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
              {topic.short}
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
        <div className="min-w-0">
          <div className="mb-8 rounded-lg border border-border bg-card p-4 lg:hidden">
            <TableOfContents sections={topicSections} />
          </div>

          <article className="topic-page space-y-12">
            <TopicSection id="overview" title="Overview">
              {detail.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </TopicSection>

            <TopicSection id="core-ideas" title="Core ideas">
              <div className="grid gap-3 sm:grid-cols-2">
                {topic.concepts.map((concept) => (
                  <div key={concept} className="rounded-lg border border-border bg-card p-4">
                    <h3 className="text-sm font-semibold">{concept}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {detail.conceptNotes[concept]}
                    </p>
                  </div>
                ))}
              </div>
            </TopicSection>

            <TopicSection id="workflow" title="How to use it">
              <ol className="space-y-3">
                {detail.workflow.map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md bg-primary text-xs font-semibold text-primary-foreground">
                      {index + 1}
                    </span>
                    <span className="text-sm leading-6 text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ol>
            </TopicSection>

            <TopicSection id="applications" title="Applications">
              {topic.applications && topic.applications.length > 0 ? (
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {topic.applications.map((application) => (
                      <Tag key={application}>{application}</Tag>
                    ))}
                  </div>
                  {detail.applicationNotes.length > 0 && (
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {detail.applicationNotes.map((note) => (
                        <li
                          key={note}
                          className="rounded-lg border border-border bg-card p-4 text-sm"
                        >
                          {note}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                detail.applicationNotes.map((note) => <p key={note}>{note}</p>)
              )}
            </TopicSection>

            <TopicSection id="pitfalls" title="Common pitfalls">
              <ul className="grid gap-3 sm:grid-cols-2">
                {detail.pitfalls.map((pitfall) => (
                  <li key={pitfall} className="rounded-lg border border-border bg-card p-4 text-sm">
                    {pitfall}
                  </li>
                ))}
              </ul>
            </TopicSection>

            <TopicSection id="resources" title="Resources">
              <ResourceList resources={detail.resources} />
            </TopicSection>

            <TopicSection id="related" title="Related topics">
              <div className="grid gap-3 sm:grid-cols-2">
                {related.map((item) => (
                  <Link
                    key={item.id}
                    to="/topics/$topicId"
                    params={{ topicId: item.id }}
                    className="group rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="mono text-[11px] text-muted-foreground">
                          {item.regionIndex.toString().padStart(2, "0")}.
                          {item.topicIndex.toString().padStart(2, "0")}
                        </div>
                        <h3 className="mt-1 text-sm font-semibold group-hover:text-primary">
                          {item.title}
                        </h3>
                      </div>
                      <ArrowUpRight className="size-4 shrink-0 text-muted-foreground group-hover:text-primary" />
                    </div>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.short}</p>
                  </Link>
                ))}
              </div>
            </TopicSection>
          </article>
        </div>

        <aside className="hidden lg:sticky lg:top-28 lg:block">
          <TableOfContents sections={topicSections} />
        </aside>
      </div>
    </div>
  );
}

function BackControl({ regionId, regionTitle }: { regionId: string; regionTitle?: string }) {
  const router = useRouter();
  const canGoBack = useCanGoBack();
  const className =
    "inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary";

  if (canGoBack) {
    return (
      <button type="button" onClick={() => router.history.back()} className={className}>
        <ArrowLeft className="size-4" />
        Back to map
      </button>
    );
  }

  return (
    <Link to="/map" hash={regionId} className={className}>
      <ArrowLeft className="size-4" />
      Back to {regionTitle ?? "map"}
    </Link>
  );
}

function TopicSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-4 text-sm leading-7 text-muted-foreground">{children}</div>
    </section>
  );
}

function ResourceList({ resources }: { resources: TopicDetailResource[] }) {
  return (
    <div className="rounded-lg border border-border bg-card p-4">
      {resources.length > 0 ? (
        <ul className="space-y-3">
          {resources.map((resource) => (
            <li key={resource.url}>
              <a
                href={resource.url}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-start gap-2 text-sm text-primary hover:underline"
              >
                <span>{resource.title}</span>
                <ExternalLink className="mt-0.5 size-3.5 shrink-0 opacity-70" />
              </a>
              {"note" in resource && (
                <p className="mt-1 text-xs leading-5 text-muted-foreground">{resource.note}</p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-3 text-sm text-muted-foreground">No dedicated resources are listed yet.</p>
      )}
    </div>
  );
}
