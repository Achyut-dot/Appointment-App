Appointment Manager
A minimal Angular application for tracking appointments using browser localStorage.
Features

Add and delete appointments
Store data in browser localStorage
Simple and minimal UI
No backend required

Installation
bashCopy# Clone repository
git clone https://github.com/yourusername/appointment-manager.git

# Install dependencies
cd appointment-manager
npm install

# Start development server
ng serve
Visit http://localhost:4200 in your browser.
How It Works
This application uses Angular with Bootstrap for styling. All appointment data is stored in the browser's localStorage, allowing data to persist between sessions without a backend server.
Data Model
typescriptCopy interface Appointment {
  id: number;
  title: string;
  date: Date;
}
LocalStorage Implementation
The app saves and retrieves data from localStorage:
typescriptCopy// Save to localStorage
localStorage.setItem('appointments', JSON.stringify(appointments));

// Load from localStorage
const data = localStorage.getItem('appointments');
return data ? JSON.parse(data) : [];
Building for Production
bashCopyng build --prod
