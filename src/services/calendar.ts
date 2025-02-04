import { CommandResult } from '../types';

export async function scheduleMeeting(
  title: string = 'New Meeting',
  date?: Date
): Promise<CommandResult> {
  // Simulate calendar integration
  const meetingDate = date || new Date(Date.now() + 24 * 60 * 60 * 1000); // Default to tomorrow
  
  return {
    success: true,
    message: `Meeting "${title}" would be scheduled for ${meetingDate.toLocaleString()}`,
    data: {
      type: 'calendar',
      title,
      date: meetingDate
    }
  };
}