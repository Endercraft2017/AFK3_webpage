      // Year
      document.getElementById("year").textContent = new Date().getFullYear();

      // Theme toggle with persistence
      const root = document.documentElement;
      const toggle = document.getElementById("themeToggle");
      const label = toggle.querySelector(".toggle-label");

      const saved = localStorage.getItem("theme");
      if (saved === "light" || saved === "dark")
        root.setAttribute("data-theme", saved);

      function applyLabel() {
        label.textContent =
          root.getAttribute("data-theme") === "light" ? "Light" : "Dark";
      }
      applyLabel();

      toggle.addEventListener("click", () => {
        const current = root.getAttribute("data-theme");
        const next = current === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);
        applyLabel();
      });