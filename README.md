# LaTeX Collaborative Editor

A real-time collaborative LaTeX editor built with React, CodeMirror 6, and Yjs - similar to Overleaf.

## Features

- 🔥 **Real-time Collaboration**: Multiple users can edit documents simultaneously with live synchronization
- 📝 **LaTeX Support**: Full LaTeX syntax highlighting and editing with CodeMirror 6
- 👥 **User Management**: User registration, project creation, and collaborator management
- 🌙 **Dark/Light Mode**: Toggle between themes for comfortable editing
- 📁 **Project Management**: Create projects, manage files, and organize your work
- 🔒 **Permission System**: Share projects with edit or view-only permissions
- 💾 **Auto-sync**: Changes are automatically synchronized across all connected clients
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile devices

## Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or use this template
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

The application consists of two parts: the React frontend and the Y.js WebSocket server for real-time collaboration.

#### Option 1: Run both simultaneously (Recommended)
```bash
npm run dev:full
```

This will start both the Vite development server (React app) and the Y.js WebSocket server.

#### Option 2: Run separately
```bash
# Terminal 1 - Start the Y.js server
npm run server

# Terminal 2 - Start the React app
npm run dev
```

### Accessing the Application

1. Open your browser and go to `http://localhost:5173`
2. Fill out the user form with your name and email
3. Create a new project or work on the default "Research Paper" project
4. Start editing in the CodeMirror editor
5. Open another browser tab/window to test real-time collaboration

## Architecture

### Frontend (React)
- **UserForm**: Initial user registration form
- **Dashboard**: Main interface with project and file management
- **ProjectEditor**: CodeMirror 6 editor with Yjs integration
- **CollaboratorsList**: Shows active collaborators and their permissions

### Backend (Y.js WebSocket Server)
- Handles real-time document synchronization
- Manages WebSocket connections and rooms
- Logs all collaborative activities
- Automatic room cleanup when no users are connected

### Real-time Collaboration
- Uses **Yjs** for conflict-free replicated data types (CRDTs)
- **y-websocket** for WebSocket transport
- **y-codemirror.next** for CodeMirror 6 integration
- Each project file gets its own Yjs room: `{projectId}-{fileName}`

## Usage

### Creating Projects
1. Click the "+" button in the sidebar
2. Enter a project name
3. A new project will be created with a default `main.tex` file

### Adding Files
1. Select a project
2. Click "Add File" in the files section
3. Enter the filename with extension (e.g., `references.bib`)

### Real-time Collaboration
1. Share your project by clicking the share button
2. Other users can join by accessing the same project
3. See real-time cursors and selections from other users
4. All changes are automatically synchronized

### Sharing Projects
1. Click the share icon next to a project
2. Enter collaborator email and set permissions:
   - **Can Edit**: Full editing permissions
   - **View Only**: Read-only access
3. Send invitation (UI simulation - integrate with your backend)

## Development

### File Structure
```
src/
├── components/
│   ├── UserForm.jsx          # User registration form
│   ├── Dashboard.jsx         # Main dashboard interface
│   ├── ProjectEditor.jsx     # CodeMirror editor with Yjs
│   └── CollaboratorsList.jsx # Collaborators management
├── App.jsx                   # Main app component
└── main.jsx                  # React entry point

server.js                     # Y.js WebSocket server
```

### Key Technologies
- **React 18** - Frontend framework
- **CodeMirror 6** - Code editor
- **Yjs** - Real-time collaboration
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Vite** - Build tool

### Customization
- Modify `server.js` to add authentication, persistence, or custom logic
- Update the LaTeX template in `ProjectEditor.jsx`
- Add new file types by extending the CodeMirror language support
- Customize the UI theme in Tailwind configuration

## Deployment

### Frontend
Build the React app for production:
```bash
npm run build
```

Deploy the `dist` folder to any static hosting service (Netlify, Vercel, etc.).

### Backend
The Y.js server can be deployed to any Node.js hosting platform:
- Heroku
- Railway
- DigitalOcean
- AWS EC2

Make sure to update the WebSocket URL in `ProjectEditor.jsx` to point to your deployed server.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with multiple browser tabs for collaboration
5. Submit a pull request

## License

MIT License - feel free to use this project for learning or building your own collaborative editor!