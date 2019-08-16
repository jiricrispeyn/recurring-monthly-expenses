import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
} from '@react-firebase/auth';

import logo from './logo.svg';
import './App.css';
import { AuthEmission } from '@react-firebase/auth/dist/types';

// Firebase Config
const config = {
  apiKey: 'API_KEY',
  projectId: 'PROJECT_ID',
  databaseURL: 'DATABASE_URL',
  authDomain: 'AUTH_DOMAIN',
  // OPTIONAL
  storageBucket: 'STORAGE_BUCKET',
  messagingSenderId: 'MESSAGING_SENDER_ID',
};

const App: React.FC = () => {
  return (
    <div className="App">
      <FirebaseAuthProvider firebase={firebase} {...config}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <FirebaseAuthConsumer>
          {({ isSignedIn, user, providerId }: AuthEmission) => {
            console.log({ isSignedIn, user, providerId });

            return (
              <pre style={{ height: 300, overflow: 'auto' }}>
                {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
              </pre>
            );
          }}
        </FirebaseAuthConsumer>
      </FirebaseAuthProvider>
    </div>
  );
};

export default App;
