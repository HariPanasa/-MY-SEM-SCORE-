// Shared logic for MY SEM SCORE platform

// --- Theme Toggling ---
function initTheme() {
    const themeToggleBtn = document.getElementById('themeToggle');
    if (!themeToggleBtn) return;

    const themeIconDark = document.getElementById('themeIconDark');
    const themeIconLight = document.getElementById('themeIconLight');

    function updateIcons() {
        if (document.documentElement.classList.contains('dark')) {
            if(themeIconLight) themeIconLight.classList.remove('hidden');
            if(themeIconDark) themeIconDark.classList.add('hidden');
        } else {
            if(themeIconDark) themeIconDark.classList.remove('hidden');
            if(themeIconLight) themeIconLight.classList.add('hidden');
        }
    }

    function toggleTheme() {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
        updateIcons();
    }

    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    updateIcons();
    themeToggleBtn.addEventListener('click', toggleTheme);
}

// --- Toast Notifications ---
function showToast(message, type = 'success') {
    // Check if toast container exists, create if not
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        toastContainer.className = 'fixed bottom-4 right-4 z-50 flex flex-col gap-2';
        document.body.appendChild(toastContainer);
    }

    const toast = document.createElement('div');
    const bgColor = type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500';
    
    toast.className = `${bgColor} text-white px-6 py-3 rounded-xl shadow-lg transform transition-all duration-300 translate-y-10 opacity-0 flex items-center gap-3 font-medium`;
    toast.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()" class="text-white/80 hover:text-white transition">&times;</button>
    `;

    toastContainer.appendChild(toast);

    // Animate in
    requestAnimationFrame(() => {
        toast.classList.remove('translate-y-10', 'opacity-0');
        toast.classList.add('translate-y-0', 'opacity-100');
    });

    // Animate out after 3 seconds
    setTimeout(() => {
        toast.classList.remove('translate-y-0', 'opacity-100');
        toast.classList.add('translate-y-10', 'opacity-0');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// --- Common Utility Functions ---
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('Copied to clipboard!', 'success');
    }).catch(err => {
        showToast('Failed to copy', 'error');
        console.error('Copy error:', err);
    });
}

function updateActiveNav() {
    const path = window.location.pathname;
    const links = document.querySelectorAll('nav a.nav-link');
    
    links.forEach(link => {
        const href = link.getAttribute('href');
        // Simple check
        if(href && path.endsWith(href)) {
            link.classList.add('text-brand-600', 'dark:text-brand-400');
            link.classList.remove('text-gray-600', 'dark:text-gray-300');
        } else if (path.endsWith('/') && href === 'index.html') {
            link.classList.add('text-brand-600', 'dark:text-brand-400');
            link.classList.remove('text-gray-600', 'dark:text-gray-300');
        }
    });
}

// Mobile Menu Toggle
function setupMobileMenu() {
    const btn = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('mobileMenu');
    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    updateActiveNav();
    setupMobileMenu();
});
