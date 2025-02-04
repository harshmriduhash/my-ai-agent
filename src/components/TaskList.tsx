import React from 'react';
import { Task } from '../types';
import { CheckCircle, XCircle, Clock, Play } from 'lucide-react';

interface TaskListProps {
  tasks: Task[];
}

export function TaskList({ tasks }: TaskListProps) {
  const getStatusIcon = (status: Task['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'failed':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'running':
        return <Play className="w-5 h-5 text-blue-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="p-4 rounded-lg border border-gray-200 bg-white shadow-sm"
        >
          <div className="flex items-center gap-3">
            {getStatusIcon(task.status)}
            <div className="flex-1">
              <p className="font-medium">{task.description}</p>
              <p className="text-sm text-gray-500">
                {new Date(task.created).toLocaleString()}
              </p>
            </div>
            <span className="px-2 py-1 text-sm rounded-full bg-gray-100">
              {task.type}
            </span>
          </div>
          {task.error && (
            <p className="mt-2 text-sm text-red-500">{task.error}</p>
          )}
        </div>
      ))}
    </div>
  );
}