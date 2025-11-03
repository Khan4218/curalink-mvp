import ResearcherForumClient from "@/app/researcher/forums/[id]/ResearcherForumClient";

export default function Page({ params }: any) {
  return <ResearcherForumClient params={params} />;
}
