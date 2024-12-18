export class DisplayContent {
  displayGames(data) {
    let box = ``;
    for (let i = 0; i < data.length; i++) {
      box += `
         <div class="col">
            <div class="card bg-transparent" data-id="${data[i].id}">
              <div class="card-body">
                <figure class="position-relative">
                  <img
                    class="card-img-top object-fit-cover h-100"
                    src="${data[i].thumbnail}"
                  />
                </figure>

                <figcaption>
                  <div class="d-flex justify-content-between mb-3">
                    <h3 class="h6 small">${data[i].title}</h3>
                    <span class="badge text-bg-primary p-2">Free</span>
                  </div>

                  <p class="card-text small text-center text-white opacity-50">
                   ${data[i].short_description.split(" ", 8)}
                  </p>
                </figcaption>

                <div class="card-info d-flex mt-4 justify-content-between">
                  <span class="badge badge-color">${data[i].genre}</span>
                  <span class="badge badge-color">${data[i].platform}</span>
                </div>
              </div>
            </div>
          </div>`;
      console.log(data.length);
    }

    document.getElementById("games").innerHTML = box;
    console.log(document.getElementById("games"));
  }

  displayDetails(data) {
    let detailsBox = `
    <div class="col-md-3">
            <img src="${data.thumbnail}" class="w-100" alt="Image" />
          </div>
          <div class="col-md-8">
            <h3>${data.title}</h3>
            <p>Categrory: <span class="badge text-bg-info">${data.genre}</span></p>
            <p>Platform: <span class="badge text-bg-info">${data.platform}</span></p>
            <p>Status: <span class="badge text-bg-info">${data.status}</span></p>
      
            <p>
                ${data.description}
            </p>
            <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
          </div>`;
    let displayDetails = document.getElementById("details");
    displayDetails.innerHTML = detailsBox;
    console.log(detailsBox);
    console.log(displayDetails);
  }
}
