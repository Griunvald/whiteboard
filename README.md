# Whiteboard

A collaborative app that allows to draw on a virtual whiteboard for two or more parties and reflect changes in real-time

## Tech stack

React, Redux, Firebase, Semantic UI, Formic, Yup, p5

## Future improvements

- Add ability to invite other users to the current whiteboard for collaboration
- Add instant messaging feature
- Add user profile
- Export drawings to JEPG format

## Prerequisites

Node.js v14 or greater and NPM v6 or greater

## Projet setup

```bash
git clone https://github.com/Griunvald/whiteboard.git
cd whiteboard && cd client
npm install
npm start
```

Create .env in the root of the project, add your firebase credentials

REACT_APP_API_KEY=YOUR_REACT_APP_API_KEY
REACT_APP_AUTH_DOMAIN=YOUR_REACT_APP_AUTH_DOMAIN
REACT_APP_PROJECT_ID=YOUR_REACT_APP_PROJECT_ID
REACT_APP_STORAGE_BUCKET=YOUR_REACT_APP_STORAGE_BUCKET
REACT_APP_MESSAGING_SENDER_ID=YOUR_REACT_APP_MESSAGING_SENDER_ID
REACT_APP_APP_ID=YOUR_REACT_APP_APP_ID
REACT_APP_MEASUREMENT_ID=YOUR_REACT_APP_MEASUREMENT_ID

## Usage

Sign up and open two browser windows side by side. Start drawing in the first window to see instant changes in the second window
