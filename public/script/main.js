window.addEventListener("load", () => {
  const hamburger = document.getElementsByClassName("hamburger")[0];
  const nav = document.getElementsByClassName("ol-nav")[0];
  const close = document.getElementsByClassName("close-nav")[0];
  const links = document.getElementsByClassName("nav-link");
  const home = document.getElementsByClassName("home")[0];
  const about = document.getElementsByClassName("about")[0];
  const work = document.getElementsByClassName("work")[0];
  const contact = document.getElementsByClassName("contact")[0];
  hamburger.addEventListener("click", () => {
    nav.style.width = "100%";
    for (x = 0; x < links.length; x++) {
      links[x].style.opacity = 1;
    }
    close.style.opacity = 1;
  });

  close.addEventListener("click", () => {
    nav.style.width = "0%";
    for (x = 0; x < links.length; x++) {
      links[x].style.opacity = 0;
    }
    close.style.opacity = 0;
  });
  home.addEventListener("click", () => {
    about.style.display = "none";
    work.style.display = "none";
    contact.style.display = "none";
  });
  about.addEventListener("click", () => {
    console.log("home");
  });
  work.addEventListener("click", () => {
    console.log("home");
  });
  contact.addEventListener("click", () => {
    console.log("home");
  });
});
