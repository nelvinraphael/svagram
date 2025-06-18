window.onload = () => {
  const redScreen = document.getElementById('redScreen');
  const logoContainer = document.getElementById('logoContainer');
  const fullLogo = document.getElementById('fullLogo');

  // Step 1: Zoom out red screen to become first dot
  setTimeout(() => {
    redScreen.style.transform = 'translate(-50%, -50%) scale(0.05)';
  }, 500);

  // Step 2: Pop in second red dot (simulated by showing the logo with filter off)
  setTimeout(() => {
    logoContainer.style.opacity = '1';
  }, 2000);

  // Step 3: Reveal full logo clearly (removes brightness/contrast)
  setTimeout(() => {
    fullLogo.style.filter = 'brightness(1) contrast(1)';
  }, 2500);
};
