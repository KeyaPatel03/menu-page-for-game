(function () {
  const BASE_WIDTH = 1280;
  const BASE_HEIGHT = 832;

  function applyScale() {
    const scaleX = window.innerWidth / BASE_WIDTH;
    const scaleY = window.innerHeight / BASE_HEIGHT;
    const scale = Math.min(scaleX, scaleY);
    document.documentElement.style.setProperty("--scale", String(scale));
  }

  window.addEventListener("load", applyScale);
  window.addEventListener("resize", applyScale);
})();
