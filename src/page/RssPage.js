import React, { useEffect, useState } from 'react';

function RssPage() {

  console.log("RSS")

  const [rssData, setRssData] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/getfeed?url=https://techcrunch.com/category/artificial-intelligence/feed/') // replace with your API endpoint
    .then(response => {
        if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`); }
        return response.json();
    })
    .then(data => setRssData(data))
    .catch(error => console.error('Error:', error));
  }, []);

  return (
<div style={{ marginBottom: '20px' }}>
  {/* render the RSS data here */}
  {rssData && rssData.map((item) => (
    <div key={item.id}>
      <h2><a href={item.link}>{item.title}</a></h2>
      <p>{StripHtml(item.summary)}</p>
      {/* 正确的方式是使用花括号来包围JavaScript表达式 */}
      <img src={item.image} alt={item.title} style={{ width: "300px", height: "auto" }}></img>
      ...
    </div>
  ))}
</div>
  );
}

function StripHtml(html) {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
}

export default RssPage;