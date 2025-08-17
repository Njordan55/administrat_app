#!/bin/bash
# Start backend and frontend in background
npm run start:back &
BACK_PID=$!
npm run start:front &
FRONT_PID=$!

# Wait for Next.js frontend to be ready (port 3000)
while ! nc -z localhost 3000; do
  sleep 1
done

# Start Electron
npm run start:electron

# Optionally, wait for backend and frontend to finish
wait $BACK_PID
wait $FRONT_PID
