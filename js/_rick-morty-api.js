
$(document).ready(() => {

  // Fetch data from Rick and morty API
  $.ajax({
    url: 'https://rickandmortyapi.com/api/character/63',
    success: (data) => {
      $('#rick_morty').html(
        `
          <div class="rick-morty-char">
            <div class="char-name">Name: ${ data.name }</div>

            <div class="char-data">
              Episode: <a href='${ data.episode }' target='_blank'>${ data.episode }</a>
            </div>

            <div class="char-avatar">
              <img src="${ data.image }" />
            </div>
          </div>
        `
      );
    },
    error: (error) => {
      $('#rick_morty').html(`
          <div class="alert alert-danger p-2">
            Ismeretlen hiba történt. Kérem, próbálja meg később.
          </div>
        `
      );
    }
  });
});
