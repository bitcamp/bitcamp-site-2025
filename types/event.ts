export interface ParsedEvent {
  id: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  location: string;
  type: string;
  speakers?: string[];
  links?: {
    title: string;
    url: string;
  }[];
} 