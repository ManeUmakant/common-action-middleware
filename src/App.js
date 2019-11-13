import React from 'react';
import './App.css';
import AppRouter from '../src/app/router/AppRouter';
import ActivityIndicator from './app/components/common/ActivityInicator';

function App() {
  return (
    <>
    <ActivityIndicator />
    <AppRouter />
    </>
  );
}

export default App;
