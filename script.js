function changeContent(section) {

  const contentMap = {
    home: "This is Home page",
    about: "This is About page",
    contact: "This is Contact page",
    blog: "This is Blog page",
    job: "This is Job page",
  };

  document.getElementById("content").textContent = contentMap[section];
}
