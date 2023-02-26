const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (
        entry.intersectionRatio > 0.5 &&
        !entry.target?.classList?.contains("is-displayed")
      ) {
        entry.target.style.animationDelay = Math.random() * 200 + "ms";
        entry.target?.classList?.add("is-displayed");
      }
    }
  },
  {
    threshold: 0.5,
  }
);

const observationTargets = document.querySelectorAll(".observe");
for (const target of observationTargets) {
  observer.observe(target);
}
