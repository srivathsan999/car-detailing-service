// Global Theme Controller
(function() {
    'use strict';

    const ThemeController = {
        init: function() {
            this.loadTheme();
            this.bindEvents();
            this.applyTheme();
        },

        loadTheme: function() {
            const savedTheme = localStorage.getItem('theme') || 'light';
            document.documentElement.setAttribute('data-theme', savedTheme);
        },

        bindEvents: function() {
            const themeToggles = document.querySelectorAll('[data-theme-toggle]');
            themeToggles.forEach(toggle => {
                toggle.addEventListener('click', () => this.toggleTheme());
            });
        },

        toggleTheme: function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Update toggle icons
            this.updateToggleIcons(newTheme);
        },

        applyTheme: function() {
            const theme = document.documentElement.getAttribute('data-theme');
            this.updateToggleIcons(theme);
        },

        updateToggleIcons: function(theme) {
            const icons = document.querySelectorAll('[data-theme-icon]');
            icons.forEach(icon => {
                if (theme === 'dark') {
                    icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>`;
                } else {
                    icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
                }
            });
        }
    };

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => ThemeController.init());
    } else {
        ThemeController.init();
    }
})();

