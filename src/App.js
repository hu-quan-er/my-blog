import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexPage from './page/indexPage'; // import your index page
import RssPage from './page/RssPage'; // import your RSS page

function App() {
  console.log('xx')
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/rss" element={<RssPage />} />
      </Routes>
    </Router>
  );
}

export default App;

