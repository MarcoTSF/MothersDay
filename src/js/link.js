function redirectToPage() {
    window.location.href = '/MothersDay/src/pages/text.html';
}
  
const linkBtn = document.getElementById('link-btn');
linkBtn.addEventListener('click', redirectToPage);