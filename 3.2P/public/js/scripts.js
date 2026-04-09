// DATA
const cardList = [
{
  title: "Peko 2",
  image: "images/Subject copy 2.png",
  link: "About Peko 2",
  description: "She is a morkie"
},
{
  title: "Peko 3",
  image: "images/Subject copy.png",
  link: "About Peko 3",
  description: "She is 8 years old"
}
];

const clickMe = () => {
  alert("I hope you enjoyed this page!");
};

const addCards = (items) => {
  items.forEach(item => {
    let itemToAppend =
    '<div class="col s4 center-align">'+
      '<div class="card medium">'+
        '<div class="card-image waves-effect waves-block waves-light">'+
          '<img class="activator" src="'+item.image+'">'+
        '</div>'+
        '<div class="card-content">'+
          '<span class="card-title activator grey-text text-darken-4">'+
            item.title +
            '<i class="material-icons right">more_vert</i>'+
          '</span>'+
          '<p><a href="#">'+item.link+'</a></p>'+
        '</div>'+
        '<div class="card-reveal">'+
          '<span class="card-title grey-text text-darken-4">'+
            item.title +
            '<i class="material-icons right">close</i>'+
          '</span>'+
          '<p>'+item.description+'</p>'+
        '</div>'+
      '</div>'+
    '</div>';

    $("#card-section").append(itemToAppend);
  });
};

$(document).ready(function(){

  $('.materialboxed').materialbox();

  $('#clickMeButton').click(() => {
    clickMe();
  });

  addCards(cardList);

});