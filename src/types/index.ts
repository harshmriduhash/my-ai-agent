export interface Task {
  id: string;
  type: 'email' | 'calendar' | 'file' | 'ui' | 'pending';
  status: 'pending' | 'running' | 'completed' | 'failed';
  description: string;
  created: Date;
  completed?: Date;
  error?: string;
  result?: string;
}

export interface AIAgent {
  name: string;
  status: 'idle' | 'processing';
  tasks: Task[];
  capabilities: string[];
}

export interface CommandResult {
  success: boolean;
  message: string;
  data?: {
    type: 'email' | 'calendar' | 'file' | 'ui';
    [key: string]: any;
  };
}