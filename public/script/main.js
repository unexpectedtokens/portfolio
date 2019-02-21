window.addEventListener("load", () => {
  const hamburger = document.getElementsByClassName("hamburger")[0];
  const nav = document.getElementsByClassName("ol-nav")[0];
  const close = document.getElementsByClassName("close-nav")[0];
  const links = document.getElementsByClassName("nav-link");
  const home = document.getElementsByClassName("home")[0];
  const about = document.getElementsByClassName("about")[0];
  const work = document.getElementsByClassName("work")[0];
  const contact = document.getElementsByClassName("contact")[0];
  const landing = document.getElementsByClassName("landing")[0];
  const aboutSection = document.getElementsByClassName("section-about")[0];
  const workSection = document.getElementsByClassName("section-work")[0];
  const contactSection = document.getElementsByClassName("section-contact")[0];
  aboutSection.style.display = "none";
  workSection.style.display = "none";
  contactSection.style.display = "none";
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
    nav.style.width = "0%";
    for (x = 0; x < links.length; x++) {
      links[x].style.opacity = 0;
    }
    close.style.opacity = 0;
    aboutSection.style.display = "none";
    workSection.style.display = "none";
    contactSection.style.display = "none";
    landing.style.display = "block";
  });
  about.addEventListener("click", () => {
    nav.style.width = "0%";
    for (x = 0; x < links.length; x++) {
      links[x].style.opacity = 0;
    }
    close.style.opacity = 0;
    workSection.style.display = "none";
    contactSection.style.display = "none";
    landing.style.display = "none";
    aboutSection.style.display = "block";
  });
  work.addEventListener("click", () => {
    nav.style.width = "0%";
    for (x = 0; x < links.length; x++) {
      links[x].style.opacity = 0;
    }
    close.style.opacity = 0;
    contactSection.style.display = "none";
    landing.style.display = "none";
    aboutSection.style.display = "none";
    workSection.style.display = "block";
  });
  contact.addEventListener("click", () => {
    nav.style.width = "0%";
    for (x = 0; x < links.length; x++) {
      links[x].style.opacity = 0;
    }
    close.style.opacity = 0;
    aboutSection.style.display = "none";
    workSection.style.display = "none";
    landing.style.display = "none";
    contactSection.style.display = "block";
  });
});
