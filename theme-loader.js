/**
 * CameronPAD Theme Loader
 * Easy theme loading for any web application
 * 
 * Usage:
 *   <script src="https://cdn.jsdelivr.net/gh/camayuki/theme_marketplace@main/theme-loader.js"></script>
 *   <script>loadTheme('cobalt-0');</script>
 */

(function(window) {
    'use strict';

    const THEME_BASE_URL = 'https://cdn.jsdelivr.net/gh/camayuki/theme_marketplace@main/';
    const THEME_INDEX_URL = THEME_BASE_URL + 'index.json';

    /**
     * Load a theme by ID
     * @param {string} themeId - The theme ID (e.g., 'cobalt-0')
     * @param {function} callback - Optional callback function
     */
    window.loadTheme = function(themeId, callback) {
        const themeUrl = THEME_BASE_URL + themeId + '.json';
        
        fetch(themeUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Theme not found: ${themeId}`);
                }
                return response.json();
            })
            .then(theme => {
                applyTheme(theme);
                if (callback) callback(null, theme);
            })
            .catch(error => {
                console.error('Error loading theme:', error);
                if (callback) callback(error, null);
            });
    };

    /**
     * Get list of all available themes
     * @param {function} callback - Callback function(error, themes)
     */
    window.getAvailableThemes = function(callback) {
        fetch(THEME_INDEX_URL)
            .then(response => response.json())
            .then(data => {
                if (callback) callback(null, data.themes);
            })
            .catch(error => {
                console.error('Error fetching themes:', error);
                if (callback) callback(error, null);
            });
    };

    /**
     * Apply theme to document
     * @param {object} theme - Theme object with css_variables
     */
    function applyTheme(theme) {
        if (!theme || !theme.css_variables) {
            console.error('Invalid theme format');
            return;
        }

        const root = document.documentElement;
        Object.entries(theme.css_variables).forEach(([key, value]) => {
            root.style.setProperty(key, value);
        });

        // Store current theme in localStorage
        try {
            localStorage.setItem('cameronpad-theme', JSON.stringify({
                id: theme.id,
                name: theme.name,
                timestamp: Date.now()
            }));
        } catch (e) {
            // Silently fail if localStorage is not available
        }

        // Dispatch custom event
        window.dispatchEvent(new CustomEvent('themeChanged', { 
            detail: { theme: theme } 
        }));

        console.log(`✅ Theme applied: ${theme.name}`);
    }

    /**
     * Load theme from localStorage on page load
     */
    window.loadSavedTheme = function() {
        try {
            const saved = localStorage.getItem('cameronpad-theme');
            if (saved) {
                const themeInfo = JSON.parse(saved);
                window.loadTheme(themeInfo.id);
            }
        } catch (e) {
            // Silently fail
        }
    };

    /**
     * Preview theme without saving
     * @param {string} themeId - The theme ID
     */
    window.previewTheme = function(themeId) {
        const themeUrl = THEME_BASE_URL + themeId + '.json';
        
        fetch(themeUrl)
            .then(response => response.json())
            .then(theme => {
                applyTheme(theme);
                // Don't save to localStorage
            })
            .catch(error => {
                console.error('Error previewing theme:', error);
            });
    };

    /**
     * Create theme switcher UI
     * @param {string} containerId - ID of container element
     */
    window.createThemeSwitcher = function(containerId) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error(`Container not found: ${containerId}`);
            return;
        }

        window.getAvailableThemes((error, themes) => {
            if (error) {
                container.innerHTML = '<p>Error loading themes</p>';
                return;
            }

            const select = document.createElement('select');
            select.className = 'theme-switcher';
            select.innerHTML = '<option value="">Select a theme...</option>';

            themes.forEach(theme => {
                const option = document.createElement('option');
                option.value = theme.id;
                option.textContent = `${theme.name} (${theme.category})`;
                select.appendChild(option);
            });

            select.addEventListener('change', (e) => {
                if (e.target.value) {
                    window.loadTheme(e.target.value);
                }
            });

            container.appendChild(select);
        });
    };

    // Auto-load saved theme on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', window.loadSavedTheme);
    } else {
        window.loadSavedTheme();
    }

    console.log('🎨 CameronPAD Theme Loader ready!');
    console.log('Usage: loadTheme("cobalt-0")');

})(window);
