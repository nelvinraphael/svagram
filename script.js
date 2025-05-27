 <!-- JavaScript: script.js -->
  <script>
    window.addEventListener('load', () => {
      const loader = document.getElementById('loader');
      const main = document.getElementById('main');

      setTimeout(() => {
        loader.style.display = 'none';
        main.classList.remove('hidden');
      }, 2000);
    });

    // Team member hover effect
    document.querySelectorAll('.team-img').forEach(img => {
      img.addEventListener('mouseenter', () => {
        img.src = img.dataset.color;
      });
      img.addEventListener('mouseleave', () => {
        const src = img.src.replace('-color', '-bw');
        img.src = src;
      });
    });
  </script>
</body>
</html>
