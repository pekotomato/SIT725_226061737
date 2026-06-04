const addCards = (items) => {
  items.forEach(item => {
    let itemToAppend = `
      <div class="col s4 center-align">
        <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="${item.image}">
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">
              ${item.title}
              <i class="material-icons right">more_vert</i>
            </span>
            <p><i class="material-icons tiny">location_on</i> ${item.location}</p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">
              ${item.title}
              <i class="material-icons right">close</i>
            </span>
            <p>${item.description}</p>
          </div>
        </div>
      </div>
    `;
    $('#card-section').append(itemToAppend);
  });
};

const getDogPhotos = () => {
  $.get('/api/dogphotos', (response) => {
    if (response.statusCode == 200) {
      addCards(response.data);
    }
  });
};

$(document).ready(function () {
  $('.materialboxed').materialbox();

  $('#formSubmit').click(() => {
    submitForm();
  });

  getDogPhotos();

  $('.modal').modal();
});