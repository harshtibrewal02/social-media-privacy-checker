function showTips() {
  const tipsSection = document.getElementById('tips');
  tipsSection.scrollIntoView({ behavior: 'smooth' });
}

function searchTips() {
  const searchTerm = document.getElementById('searchBar').value;
  alert(`Searching for: ${searchTerm}`);
  // You can add more functionality here to filter tips based on the search term
}