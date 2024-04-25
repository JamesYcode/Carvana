const sidebarAccordion = document.querySelectorAll('.sidebar-accordion');
const closeSideBar = document.querySelector('.close-sidebar');
// const sidebar = document.querySelector('.sidebar-container');
const sidebar = document.querySelector('.sidebar');
const sidebarBtn = document.querySelector('.sidebar-btn');
const body = document.querySelector('body');

// ! Only if you don't want transition effect for nav sidebar!
// sidebarAccordion.forEach(function (el) {
//   el.addEventListener('click', function () {
//     const content = this.nextElementSibling;

//     if (content.style.display === 'block') {
//       content.style.display = 'none';

//       this.querySelector('.sidebar-toggle').textContent = '+';
//     } else {
//       content.style.display = 'block';
//       this.querySelector('.sidebar-toggle').textContent = '-';
//     }
//   });
// });

sidebarAccordion.forEach(function (el) {
  el.addEventListener('click', function () {
    const content = this.nextElementSibling;
    content.classList.toggle('transform');
  });
});

sidebarBtn.addEventListener('click', function () {
  if (sidebar.style.display === 'block') return;
  sidebar.style.display = 'block';
  sidebar.classList.add('sidebar-active');

  console.log('clicked');
});

closeSideBar.addEventListener('click', function () {
  sidebar.style.display = 'flex';
  sidebar.classList.remove('sidebar-active');
});
