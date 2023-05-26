import './style.scss';

import Alpine from 'alpinejs';
import collapse from '@alpinejs/collapse';

Alpine.data('navmenu', () => ({
  open: false,
  toggle() {
    this.open = !this.open;
  }
}));
 
Alpine.plugin(collapse);

Alpine.start();