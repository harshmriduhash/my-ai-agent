import { CommandResult } from '../types';

export async function sendEmail(recipient: string, subject?: string, body?: string): Promise<CommandResult> {
  // Since we can't integrate with real email services in the browser environment,
  // we'll simulate a successful email send
  return {
    success: true,
    message: `Email would be sent to ${recipient}`,
    data: {
      type: 'email',
      recipient,
      subject: subject || 'No subject',
      body: body || 'No content'
    }
  };
}