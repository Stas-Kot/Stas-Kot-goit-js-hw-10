import refs from "./refs";
import menuTpl from '../templates/menu.hbs';
import menu from './menu.json';

const menuMarkup = createMenuMerkup(menu);

function createMenuMerkup(menu) {
    return menu.map(menuTpl).join('');
}

export default function renderMenu() {
    refs.menuEl.insertAdjacentHTML('beforeend', menuMarkup);
}

