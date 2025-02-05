# 🤖 AI Agent System

A sophisticated AI assistant system that processes natural language commands for email, calendar, and file management tasks. Built with modern web technologies and a beautiful, production-ready UI.

![AI Agent System](https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200&h=400)

## ✨ Features

### Core Capabilities
- 📧 **Email Management**
  - Send emails with natural language commands
  - Smart recipient and subject detection
  - Command format: `send email to [name] about [subject]`

- 📅 **Calendar Operations**
  - Schedule meetings effortlessly
  - Intelligent date/time parsing
  - Command format: `schedule meeting about [title]`

- 📁 **File Management**
  - Quick file access and operations
  - Natural command processing
  - Command format: `open file [filename]`

### Technical Features
- 🎯 Real-time command processing
- 📝 Comprehensive task history
- 🔄 Status tracking for all operations
- 🎨 Modern, responsive UI
- 🌐 Browser-based processing

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS for modern, responsive design
- **State Management**: React Hooks
- **Icons**: Lucide React
- **Utilities**: UUID for unique identifiers
- **Build Tool**: Vite for lightning-fast development

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/harshmriduhash/ai-agent.git
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📖 Usage Examples

### Sending Emails
```
send email to John about project update
```
Result: Creates and processes an email task to John

### Scheduling Meetings
```
schedule meeting about quarterly review
```
Result: Creates a calendar event for the quarterly review

### File Operations
```
open file report
```
Result: Processes a file operation request

## 🏗️ Project Structure

```
src/
├── components/          # React UI components
│   ├── AgentStatus     # Agent status display
│   ├── CommandInput    # Command input interface
│   ├── TaskList        # Task history display
│   └── ...
├── services/           # Core service implementations
│   ├── email.ts        # Email processing
│   ├── calendar.ts     # Calendar operations
│   └── files.ts        # File management
├── types/              # TypeScript definitions
├── utils/              # Utility functions
│   └── nlp.ts         # Natural language processing
└── App.tsx            # Main application component
```

## 🔒 Security

- Input validation for all commands
- Error handling for failed operations
- Safe command processing
- Type-safe implementations

## 🎯 Future Enhancements

- [ ] Voice command support
- [ ] Advanced NLP capabilities
- [ ] Multiple language support
- [ ] Custom command templates
- [ ] Integration with external services

## 👨‍💻 Author

**Harsh Mriduhash**
- GitHub: [@harsh1112003](https://github.com/harshmriduhash)
![image](https://github.com/user-attachments/assets/69705b1b-bf89-438e-a15a-f756dce80cc0)

## 📄 License

© 2024 Harsh Mriduhash. All rights reserved.

---

<div align="center">
  <strong>Built with ❤️ by Harsh Mriduhash</strong>
</div>
