// Prevent navigation on header nav links with href="#" (dropdown-only parent items)
document.addEventListener('click', function (e) {
  const link = e.target.closest('a.menu-list__link[href="#"]');
  if (link) {
    e.preventDefault();
  }
});
