function redirectToPage() {
    window.location.href = '../src/pages/text.html';
}
  
const linkBtn = document.getElementById('link-btn');
linkBtn.addEventListener('click', redirectToPage);