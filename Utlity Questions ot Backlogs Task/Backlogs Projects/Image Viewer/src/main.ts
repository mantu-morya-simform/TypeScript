const container = document.querySelector(".img-container") as HTMLDivElement;
const img = document.querySelector(".img") as HTMLImageElement;

container.addEventListener("mousemove", (e) => {
  const rect = container.getBoundingClientRect();

  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;

  img.style.transformOrigin = `${x}% ${y}%`;
});

container.addEventListener("mouseleave", () => {
  img.style.transformOrigin = "center";
});
