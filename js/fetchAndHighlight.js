const fetchAndHighlight = (function() {
  "use strict";

  // Fetch an html document and highlight its syntax
  // this requires highlight js

  const getDocument = url => {
    return fetch(url)
      .then(response => response.text())
      .catch(error => console.log(error));
  };

  const getUrl = documentName =>
    `https://cdn.jsdelivr.net/gh/programmeringsskolan/cdn/articles/${documentName}`;

  const getUrlDev = documentName => `http://localhost:4567/${documentName}`;

  return (documentName, elementId) => {
    getDocument(getUrl(documentName)).then(html => {
      document.getElementById(elementId).innerHTML = html;
      hljs.initHighlighting.called = false;
      hljs.initHighlighting();
    });
  };
})();
