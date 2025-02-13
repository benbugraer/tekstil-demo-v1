export interface TimelineItemData {
  title: string;
  content: string;
}

export interface TimelineItemProps extends TimelineItemData {
  animationDelay?: number;
}

export interface TimelineProps {
  data: TimelineItemData[];
}
