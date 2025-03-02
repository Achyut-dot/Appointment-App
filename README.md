# Appointment Manager

A simple, lightweight Angular application for managing appointments with a clean, minimal UI. This application leverages local storage to persist appointment data directly in the browser without requiring a backend server.

## Features

- Create and manage appointments with descriptions and dates
- Responsive, minimal UI that works across devices
- Persistent storage using browser's localStorage
- No backend required - works entirely client-side
- Simple and intuitive interface

## Screenshots

![image](https://github.com/user-attachments/assets/9ae9c60c-b2d1-446e-baad-f56024a3341b)


## Technology Stack

- Angular 18
- TypeScript
- Bootstrap 5 (for styling)
- HTML5 localStorage API

## Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/appointment-manager.git
cd appointment-manager
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
ng serve
```

4. Open your browser and navigate to `http://localhost:4200`

## Project Structure

```
appointment-manager/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── appointment-list/
│   │   │   │   ├── appointment-list.component.ts
│   │   │   │   ├── appointment-list.component.html
│   │   │   │   └── appointment-list.component.scss
│   │   ├── models/
│   │   │   └── appointment.model.ts
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   ├── assets/
│   └── index.html
└── package.json
```

## Usage

### Adding an Appointment

1. Enter the appointment description in the first input field
2. Select a date using the date picker
3. Click the "Add" button to save the appointment

### Deleting an Appointment

1. Find the appointment in the list
2. Click the "Delete" or "X" button next to the appointment

## Local Storage Implementation

The application uses the browser's localStorage API to persist appointment data. Here's how it works:

```typescript
// Save appointments to localStorage
saveAppointments(appointments: Appointment[]): void {
  localStorage.setItem('appointments', JSON.stringify(appointments));
}

// Retrieve appointments from localStorage
getAppointments(): Appointment[] {
  const storedAppointments = localStorage.getItem('appointments');
  return storedAppointments ? JSON.parse(storedAppointments) : [];
}
```

## Appointment Model

```typescript
export interface Appointment {
  id: number;
  title: string;
  date: Date;
}
```

## Building for Production

Run `ng build` to build the project for production. The build artifacts will be stored in the `dist/` directory.

```bash
ng build --prod
```

## Future Enhancements

- Add appointment categories and filtering
- Implement appointment reminders
- Add dark/light theme toggle
- Include time selection for appointments
- Add search functionality

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
