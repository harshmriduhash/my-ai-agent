import { CommandResult } from "../types";
import { sendEmail } from "../services/email";
import { scheduleMeeting } from "../services/calendar";
import { openFile } from "../services/files";

const COMMAND_PATTERNS = {
  // Updated to handle "send mail" and "send email" variations
  email:
    /(?:send\s+(?:mail|email)|email)\s+(?:to\s+)?(\w+)(?:\s+about\s+(.+))?/i,
  calendar: /schedule(?:\s+a?)?\s+meeting(?:\s+about\s+(.+))?/i,
  file: /open\s+(?:the\s+)?file\s+(\w+)/i,
};

export async function parseCommand(input: string): Promise<CommandResult> {
  // Email command
  const emailMatch = input.match(COMMAND_PATTERNS.email);
  if (emailMatch) {
    const [, recipient, subject] = emailMatch;
    return sendEmail(recipient, subject);
  }

  // Calendar command
  const calendarMatch = input.match(COMMAND_PATTERNS.calendar);
  if (calendarMatch) {
    const [, title] = calendarMatch;
    return scheduleMeeting(title || "New Meeting");
  }

  // File command
  const fileMatch = input.match(COMMAND_PATTERNS.file);
  if (fileMatch) {
    const [, filename] = fileMatch;
    return openFile(filename);
  }

  return {
    success: false,
    message:
      "Command not recognized. Try these formats:\n" +
      "- send email/mail to [name] about [subject]\n" +
      "- schedule meeting about [title]\n" +
      "- open file [filename]",
  };
}
