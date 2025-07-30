import React from 'react'

export default function About() {
  return (
    <div className='text-center'>
        <h1>About</h1>
      <p>
        Texify is lightweight, fast, and focused on doing one thing well—helping you work better with text. Whether you're preparing content, cleaning data, or just formatting text for clarity, Texify makes it easy and efficient.
      
      </p>
      <div className='text-start'>
         <ul>       
        <li><p>Text Transformations: Convert text to uppercase, lowercase, remove extra spaces, and copy text instantly</p></li>
      <li><p>Theme Modes: Toggle between light, dark, and custom color themes (like red, green, yellow) to suit your environment or preference.</p></li>
      <li><p>Real-time Alerts: Get instant feedback after each action with brief, informative alerts.</p></li>
      <li><p>Navigation Support: Use built-in pages like Home and About through React Router for a multi-page experience</p></li>
      </ul>
      </div>
    </div>
  )
}
