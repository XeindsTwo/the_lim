export function casesPage() {
  Fancybox.bind('[data-fancybox]', {
    groupAll: false,
  });

  const copyButton = document.querySelector('[data-copy-link]');
  if (!copyButton) return;

  const badge = copyButton.parentElement.querySelector('.copy-link-badge');
  let timer;

  copyButton.addEventListener('click', async () => {
    clearTimeout(timer);

    try {
      await navigator.clipboard.writeText(window.location.href);

      copyButton.classList.add('copy-link--copied');
      badge.classList.add('is-visible');

      timer = setTimeout(() => {
        copyButton.classList.remove('copy-link--copied');
        badge.classList.remove('is-visible');
      }, 2000);

    } catch (err) {
      console.error('Ошибка копирования:', err);
    }
  });
}