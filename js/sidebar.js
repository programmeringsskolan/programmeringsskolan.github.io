const createListElements = (function() {
  "use strict";

  return ({ list, elements }) => {
    elements
      .map(element => {
        console.log(element);
        const e = document.createElement("LI");
        e.innerHTML = element.name;
        e.onclick = () => {
          fetchAndHighlight(element.document, "article-container");
        };
        return e;
      })
      .forEach(child => {
        list.appendChild(child);
      });
  };
})();

(function() {
  "use strict";

  const content = [
    {
      name: "Clojure",
      content: [
        {
          name: "Grunder",
          document: "clojure/basics.clojure.html"
        }
      ]
    }
  ];

  const sidebar = document.getElementById("sidebar-container");

  content.forEach(contentType => {
    const title = document.createElement("H3");
    title.innerHTML = contentType.name.toUpperCase();
    sidebar.appendChild(title);

    const list = document.createElement("UL");
    list.className = "sidebar-list";
    createListElements({ list, elements: contentType.content });
    sidebar.appendChild(list);
  });
})();
