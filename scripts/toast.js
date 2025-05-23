// scripts/toast.js

const toastContainer = document.getElementById('toast-container');

export function showToast(message, type = 'info', duration = 4000) {
  if (!toastContainer) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;

  toastContainer.appendChild(toast);

  // Trigger slide-in animation
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  // Remove toast after duration with slide-out
  setTimeout(() => {
    toast.classList.remove('show');
    toast.classList.add('hide');

    toast.addEventListener('animationend', () => {
      toast.remove();
    });
  }, duration);
}
