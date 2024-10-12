// function onEntry(entry) {
//   entry.forEach(change => {
//     if (change.isIntersecting) {
//       change.target.classList.add('element-show');
//     }
//   });
// }
// let options = { threshold: [0.5] };
// let observer = new IntersectionObserver(onEntry, options);
// let elements = document.querySelectorAll('.animation');
// for (let elm of elements) {
//   observer.observe(elm);
// }

function customScrollFunction(id, top) {
  document.getElementById(id).addEventListener("click", () => {
    window.scrollTo({
      top,
      left: 0,
      behavior: "smooth",
    });
  });
}

customScrollFunction("info", 200);
customScrollFunction("stack", 800);
customScrollFunction("works", 1800);
customScrollFunction("contacts", 3400);

// function customScrollFunction(top){
//   document.querySelector("").addEventListener("click", () => {
//     window.scrollIntoView({
//       block: "start",
//       inline: "nearest",
//       behavior: "smooth"
//     })
//   })
// }

// customScrollFunction(".info__title");
// customScrollFunction(".stack");
// customScrollFunction(".works__title");
// customScrollFunction(".footer__title");
