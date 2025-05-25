// scripts/app.js

const primaryNavItems = document.querySelectorAll('#primary-nav .nav-item');
const secondaryNavItems = document.querySelectorAll('#secondary-nav .nav-item');
const mainContent = document.getElementById('page-content');
const terminalSection = document.getElementById('terminal');
const terminalOutput = document.getElementById('terminal-output');
const terminalInput = document.getElementById('terminal-input');

function clearActive(navItems) {
  navItems.forEach(item => item.classList.remove('active'));
}

function loadPage(page, fromPanel) {
  // Clear active states
  if (fromPanel === 'primary') {
    clearActive(primaryNavItems);
  } else {
    clearActive(secondaryNavItems);
  }

  // Set active
  let navItems = fromPanel === 'primary' ? primaryNavItems : secondaryNavItems;
  navItems.forEach(item => {
    if (item.dataset.page === page) {
      item.classList.add('active');
    }
  });

  // Clear terminal output and input on page change
  terminalOutput.textContent = '';
  terminalInput.value = '';

  // Logic to load page content and show/hide terminal
  if (page === 'learn' || page === 'ctf') {
    // Show terminal when entering Learn or CTF
    terminalSection.classList.remove('hidden');
    mainContent.style.paddingBottom = '10px';
  } else {
    terminalSection.classList.add('hidden');
    mainContent.style.paddingBottom = '2rem';
  }

  // Update main content area (placeholder)
  mainContent.innerHTML = `<h1>${page.charAt(0).toUpperCase() + page.slice(1)}</h1><p>This is the ${page} section.</p>`;
  if (!terminalSection.classList.contains('hidden')) {
    mainContent.appendChild(terminalSection);
  }
}

// Handle nav clicks for primary nav
primaryNavItems.forEach(item => {
  item.addEventListener('click', () => {
    loadPage(item.dataset.page, 'primary');
  });
});

// Handle nav clicks for secondary nav
secondaryNavItems.forEach(item => {
  item.addEventListener('click', () => {
    loadPage(item.dataset.page, 'secondary');
  });
});

// Terminal input handler (example echo command)
terminalInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    const command = terminalInput.value.trim();
    if (command) {
      terminalOutput.textContent += `> ${command}\n`;
      // Simple echo for now, extend with real command parsing later
      terminalOutput.textContent += `Executed: ${command}\n\n`;
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
      terminalInput.value = '';
    }
  }
});

// Initialize with Dashboard page
loadPage('dashboard', 'primary');
