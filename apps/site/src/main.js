document.querySelector('#app').textContent = 'apps/site, built on Node ' + (import.meta.env.VITE_NODE_LINE ?? 'its .nvmrc names') + ' — build ' + __BUILD__;
