"use client";

import { Timeline } from "@/components/ui/timeline";
import { TimelineItem } from "./TimelineItem";
import { timelineData } from "../data/timelineData";

const ANIMATION_DELAY_INCREMENT = 0.1;

export default function TimelineContent() {
  const timelineItems = timelineData.map((item, index) => ({
    title: item.title,
    content: (
      <TimelineItem
        {...item}
        animationDelay={index * ANIMATION_DELAY_INCREMENT}
      />
    ),
  }));

  return (
    <main className="bg-white">
      <section>
        <Timeline data={timelineItems} />
      </section>
    </main>
  );
}
