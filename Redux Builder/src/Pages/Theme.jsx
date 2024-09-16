import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ToggleDark, ToggleLight } from '../Redux/action';

const Theme = () => {
    const dispatch = useDispatch();
    const { theme } = useSelector(store => store.ThemeReducer);
    console.log(theme);
  
    const buttonStyle = {
      padding: '10px 20px',
      margin: '5px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '14px',
      transition: 'background-color 0.3s ease',
    };
  
    const lightButtonStyle = {
      ...buttonStyle,
      backgroundColor: theme === 'light' ? '#ddd' : '#f0f0f0',
      color: theme === 'light' ? '#999' : '#333',
    };
  
    const darkButtonStyle = {
      ...buttonStyle,
      backgroundColor: theme === 'dark' ? '#444' : '#333',
      color: theme === 'dark' ? '#ccc' : '#fff',
    };
  
    return (
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <button
          onClick={() => ToggleLight(dispatch)}
          disabled={theme === 'light'}
          style={{
            ...lightButtonStyle,
            opacity: theme === 'light' ? 0.6 : 1,
            cursor: theme === 'light' ? 'not-allowed' : 'pointer',
          }}
        >
          Switch To Light
        </button>
        <button
          onClick={() => ToggleDark(dispatch)}
          disabled={theme === 'dark'}
          style={{
            ...darkButtonStyle,
            opacity: theme === 'dark' ? 0.6 : 1,
            cursor: theme === 'dark' ? 'not-allowed' : 'pointer',
          }}
        >
          Switch To Dark
        </button>
      </div>
    );
  };
  

export default Theme;