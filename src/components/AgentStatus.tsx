import React from "react";
import { AIAgent } from "../types";
import { Bot } from "lucide-react";

interface AgentStatusProps {
  agent: AIAgent;
}

export function AgentStatus({ agent }: AgentStatusProps) {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
      <div className="p-3 bg-blue-100 rounded-full">
        <Bot className="w-6 h-6 text-blue-500" />
      </div>
      <div>
        <h2 className="text-lg font-semibold">{agent.name}</h2>
        <p className="text-sm text-gray-500">
          Status: <span className="font-medium">{agent.status}</span>
        </p>
      </div>
      <div className="ml-auto">
        <div className="flex flex-wrap gap-2">
          {agent.capabilities.map((capability) => (
            <span
              key={capability}
              className="px-2 py-1 text-xs bg-gray-100 rounded-full"
            >
              {capability}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
