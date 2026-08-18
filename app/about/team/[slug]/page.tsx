import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { teamMembers, getMemberBySlug, getAdjacentMembers } from "@/lib/members";
import TeamMemberProfile from "@/components/team/TeamMemberProfile";
import { buildMetadata } from "@/lib/seo";

interface TeamMemberPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return teamMembers.map((member) => ({ slug: member.slug }));
}

export function generateMetadata({ params }: TeamMemberPageProps): Metadata {
  const member = getMemberBySlug(params.slug);
  if (!member) return {};

  return buildMetadata({
    title: `${member.name} — ${member.position}`,
    description: `${member.name} (${member.position}) — read their Rotaract journey and memories with the Rotaract Club of Lalitpur.`,
    path: `/about/team/${member.slug}`,
  });
}

export default function TeamMemberPage({ params }: TeamMemberPageProps) {
  const member = getMemberBySlug(params.slug);
  if (!member) notFound();

  const { previous, next } = getAdjacentMembers(params.slug);

  return <TeamMemberProfile member={member} previous={previous} next={next} />;
}
