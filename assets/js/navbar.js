// Navbar Scroll Effect
(function() {
    'use strict';

    const NavbarController = {
        init: function() {
            const navbar = document.querySelector('.navbar');
            if (!navbar) return;

            let lastScroll = 0;
            
            window.addEventListener('scroll', () => {
                const currentScroll = window.pageYOffset;
                
                if (currentScroll > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
                
                lastScroll = currentScroll;
            });

            // Mobile menu toggle
            const mobileMenuToggle = document.querySelector('[data-mobile-menu-toggle]');
            const mobileMenu = document.querySelector('[data-mobile-menu]');
            const body = document.body;
            
            // Create overlay if it doesn't exist
            let overlay = document.querySelector('.mobile-menu-overlay');
            if (!overlay) {
                overlay = document.createElement('div');
                overlay.className = 'mobile-menu-overlay';
                document.body.appendChild(overlay);
            }
            
            if (mobileMenuToggle && mobileMenu) {
                mobileMenuToggle.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const isOpen = mobileMenu.classList.contains('open');
                    
                    if (isOpen) {
                        mobileMenu.classList.remove('open');
                        mobileMenu.classList.add('hidden');
                        overlay.classList.remove('active');
                        body.style.overflow = '';
                    } else {
                        mobileMenu.classList.remove('hidden');
                        mobileMenu.classList.add('open');
                        overlay.classList.add('active');
                        body.style.overflow = 'hidden';
                    }
                });
                
                // Close menu when clicking overlay
                overlay.addEventListener('click', () => {
                    mobileMenu.classList.remove('open');
                    overlay.classList.remove('active');
                    body.style.overflow = '';
                });
                
                // Close menu when clicking a link
                const menuLinks = mobileMenu.querySelectorAll('a');
                menuLinks.forEach(link => {
                    link.addEventListener('click', () => {
                        mobileMenu.classList.remove('open');
                        overlay.classList.remove('active');
                        body.style.overflow = '';
                    });
                });
            }
        }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => NavbarController.init());
    } else {
        NavbarController.init();
    }
})();

