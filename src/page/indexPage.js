import React from 'react';
import { Link } from 'react-router-dom';

function IndexPage() {
  return (
    <div>
      <h1>Index Page</h1>
      <Link to="/rss">Go to RSS page</Link>
    </div>
  );
}

export default IndexPage;