const episodeTiles = document.querySelectorAll('.episode');

episodeTiles.forEach(tile => {
  tile.addEventListener('click', () => {
    // Go to episode detail page (implement your logic here)
    console.log('Episode clicked');
  });
});
