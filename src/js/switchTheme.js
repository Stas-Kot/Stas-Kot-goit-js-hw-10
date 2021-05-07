import refs from './refs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
refs.switchThemeEl.addEventListener('change', onSwitchTheme);

const STORAGE_KEY = 'Theme';

function onSwitchTheme(e) {
    const isDarkTheme = refs.bodyEl.classList.contains(Theme.DARK)
    if (isDarkTheme) {
        refs.bodyEl.classList.remove(Theme.DARK);
        refs.bodyEl.classList.add(Theme.LIGHT);
        localStorage.setItem(STORAGE_KEY, Theme.LIGHT)
    } else {
        refs.bodyEl.classList.remove(Theme.LIGHT);
        refs.bodyEl.classList.add(Theme.DARK);
        localStorage.setItem(STORAGE_KEY, Theme.DARK)
    }
}

export default function currentTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    
    if (savedTheme) {
        if (savedTheme === 'dark-theme') {
            refs.switchThemeEl.setAttribute("checked", true);;
        }
        refs.bodyEl.classList.add(savedTheme);
    }
}