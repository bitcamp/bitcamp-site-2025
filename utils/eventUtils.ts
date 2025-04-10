import type { ParsedEvent } from '../types/event';

export function formatEventTime(startTime: string, endTime: string): string {
  const start = new Date(startTime);
  const end = new Date(endTime);
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return `${formatTime(start)} - ${formatTime(end)}`;
}

export function formatEventDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });
}

export function parseEventData(rawEvent: any): ParsedEvent {
  return {
    id: rawEvent.id,
    title: rawEvent.event_name || rawEvent.title,
    description: rawEvent.description || '',
    startTime: rawEvent.start_time || rawEvent.startTime,
    endTime: rawEvent.end_time || rawEvent.endTime,
    location: rawEvent.location || 'TBD',
    type: rawEvent.category || rawEvent.type || 'General',
    speakers: rawEvent.speakers || [],
    links: rawEvent.links || []
  };
} 