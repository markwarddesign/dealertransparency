import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'RADAR – Behavioral Engagement Layer',
  description: 'RADAR is a behavioral engagement layer inside the CRM that keeps working opportunities long after humans and AI stop.',
};

export default function RadarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
