import React from 'react'
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import EventPage from './pages/EventPage'
import { eventData } from './data/eventData'

function App() {
  // Redirect to the edition with status 'current', or fallback to the first edition
  const currentEdition = eventData.find(edition => edition.status === 'current') || eventData[0]

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={`/${currentEdition.year}`} replace />} />
        <Route path="/:year" element={<EventPage />} />
      </Routes>
    </Router>
  )
}

export default App