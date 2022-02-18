import { useState } from 'react';

// custom local storage hook
function useLocalStorage(key, initialValue) {
// create state to store our value
// pass the initial state function to useState so that the logic 
// is only executed once, initially
  const [storedValue, setStoredValue] = useState(() => {
      if (typeof window === 'undefined') {
        return initialValue;
      }
      try {
        const item = window.localStorage.getItem(key);
        // Get from local storage by key
        return item ? JSON.parse(item) : initialValue;
        // Parse stored json or if none, return initialValue
      } catch (e) {
          return initialValue;
        // if error also return initialValue
      }
  })
// return wrapped version of useState's setter function
// that persists with new value to LS
  const setValue = (value) => {
      try {
// Allow value to be a function so we have the same API as useState
      }
  }