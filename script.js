document.addEventListener("keydown", (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    alert("Spotlight search is coming soon ✨");
  }
});
document.addEventListener("keydown", (e) => {
  if ((e.metaKey || e.shiftKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    alert(`
    Changelog V1.0.1 ✨
    - New UI 
    - New Visual 
    - 10 Games Added 
    - Optimize Bugs`);
  }
});
