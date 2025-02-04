import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CommandInput } from './components/CommandInput';
import { TaskList } from './components/TaskList';
import { AgentStatus } from './components/AgentStatus';
import { Footer } from './components/Footer';
import { Watermark } from './components/Watermark';
import { parseCommand } from './utils/nlp';
import { AIAgent, Task } from './types';
import { Github } from 'lucide-react';

export default function App() {
  const [agent, setAgent] = useState<AIAgent>({
    name: 'AI Assistant by Aryan Acharya',
    status: 'idle',
    tasks: [],
    capabilities: ['Email', 'Calendar', 'File Management'],
  });

  const handleCommand = async (command: string) => {
    // Set agent to processing state
    setAgent(prev => ({ ...prev, status: 'processing' }));

    // Create a new task
    const task: Task = {
      id: uuidv4(),
      type: 'pending',
      status: 'pending',
      description: command,
      created: new Date(),
    };

    // Add task to the list
    setAgent(prev => ({
      ...prev,
      tasks: [task, ...prev.tasks],
    }));

    try {
      // Process the command
      const result = await parseCommand(command);

      // Update task with result
      setAgent(prev => ({
        ...prev,
        status: 'idle',
        tasks: prev.tasks.map(t => 
          t.id === task.id
            ? {
                ...t,
                type: result.data?.type || 'ui',
                status: result.success ? 'completed' : 'failed',
                completed: new Date(),
                error: result.success ? undefined : result.message,
                result: result.message
              }
            : t
        ),
      }));
    } catch (error) {
      // Handle any errors
      setAgent(prev => ({
        ...prev,
        status: 'idle',
        tasks: prev.tasks.map(t =>
          t.id === task.id
            ? {
                ...t,
                status: 'failed',
                completed: new Date(),
                error: error instanceof Error ? error.message : 'An error occurred'
              }
            : t
        ),
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Watermark />
      <div className="max-w-4xl mx-auto p-6 space-y-6 pb-16">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">
            AI Agent System
            <span className="text-sm text-gray-500 ml-2">by Aryan Acharya</span>
          </h1>
          <a
            href="https://github.com/aryan1112003"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Github size={24} />
            <span className="text-sm font-medium">@aryan1112003</span>
          </a>
        </div>
        
        <AgentStatus agent={agent} />
        
        <div className="space-y-4">
          <CommandInput
            onSubmit={handleCommand}
            disabled={agent.status === 'processing'}
          />
          
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h2 className="text-lg font-semibold mb-4">Task History</h2>
            <TaskList tasks={agent.tasks} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}