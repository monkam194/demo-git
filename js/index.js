//boutton de la nav-bar
$(".nav-link").click(function() {
  // Retirez la classe "active" de tous les liens
  $(".nav-link").removeClass("active");
  // Ajoutez la classe "active" au lien sur lequel vous avez cliqué
  $(this).addClass("active");
});
//soumission du formulaire
$('form').submit(function(event) {
  // Empêcher le rechargement de la page
  event.preventDefault();

  // Réinitialiser les messages d'erreur
  $('.form-text').removeClass('active');

  // Valider chaque champ
  var formIsValid = true;

  // Validation du champ "Nom"
  var nomValue = $('#exampleInputEmail1').val();
  if (nomValue.trim() === '') {
    $('#nomHelp').addClass('active');
    formIsValid = false;
  }

  // Validation du champ "Numéro de téléphone"
  var telValue = $('#exampleInputEmail2').val();
  if (telValue.trim() === '') {
    $('#telHelp').addClass('active');
    formIsValid = false;
  }
  // Validation du champ "Numéro de téléphone"
  var telValue = $('#exampleInputEmail3').val();
  if (telValue.trim() === '') {
    $('#orderHelp').addClass('active');
    formIsValid = false;
  }
  // Validation du champ "Numéro de téléphone"
  var telValue = $('#exampleInputEmail4').val();
  if (telValue.trim() === '') {
    $('#otherOrderHelp').addClass('active');
    formIsValid = false;
  }
  // Validation du champ "Numéro de téléphone"
  var telValue = $('#exampleInputEmail5').val();
  if (telValue.trim() === '') {
    $('#nbrHelp').addClass('active');
    formIsValid = false;
  }
  // Validation du champ "Numéro de téléphone"
  var telValue = $('#exampleInputEmail6').val();
  if (telValue.trim() === '') {
    $('#dateHelp').addClass('active');
    formIsValid = false;
  }
  // Validation du champ "Numéro de téléphone"
  var telValue = $('#message1').val();
  if (telValue.trim() === '') {
    $('#addresseHelp').addClass('active');
    formIsValid = false;
  }
  // Validation du champ "Numéro de téléphone"
  var telValue = $('#message2').val();
  if (telValue.trim() === '') {
    $('#descriptionHelp').addClass('active');
    formIsValid = false;
  }

  
});


// when selected an item

  // Initialisation des compteurs
  var cardCount = 0;
  var modalCount = 0;

  // Fonction pour mettre à jour le texte du bouton et les compteurs
  function updateButtonAndCounters(button, cardCounter, modalCounter) {
    var buttonText = button.text() === 'Add to Card' ? 'Remove from Card' : 'Add to Card';
    button.text(buttonText);

    // Mise à jour du nombre dans circle-item
    $('.circle-item').text(cardCounter);

    // Mise à jour du nombre dans modal-body
    $('.modal-body.count').text(modalCounter);
  }

  // Gestion du clic sur le bouton
  $('.choose .btn-primary').on('click', function() {
    var button = $(this);
    
    if (button.text() === 'Add to Card') {
      // Si le texte est "Add to Card", incrémentez les compteurs
      cardCount++;
      modalCount++;
      console.log(modalCount);
    } else {
      // Sinon, décrémentez les compteurs
      cardCount--;
      modalCount--;
    }

    // Mise à jour du texte du bouton et des compteurs
    updateButtonAndCounters(button, cardCount, modalCount);
  });
  // Gérer le changement de taille
  $('.range input[type="range"]').change(function() {
    var selectedSize = $(this).val();
    $('.questions h3').css('font-size', selectedSize + 'px');
    $('.range span').text(selectedSize + 'px');
  });
  //  changer la couleur
  $('.color input[type="color"]').change(function() {
    var selectedColor = $(this).val();
    $('.questions h3').css('color', selectedColor);
  });
  //afficher la réponse
$('.question').click(function() {

  $(this).find('h3').toggleClass('active');
  // Vérifier l'état de rotation
  var img = $(this).find('img');
  var rotated = img.data('rotated');

  // Appliquer une rotation de 90 degrés uniquement si non déjà rotaté
  if (!rotated) {
    img.css({
      'transform': 'rotate(90deg)',
      '-webkit-transform': 'rotate(180deg)'
    }).data('rotated', true);
  } else {
    // Revenir à la position d'origine
    img.css({
      'transform': 'rotate(0deg)',
      '-webkit-transform': 'rotate(0deg)'
    }).data('rotated', false);
  }
});



// alert of nbr selected
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
//afficher la réponse 
// function showAnswer(){
//   var question = document.querySelector(".questions .question");
//   var answer = document.querySelector(".question .question-line h3");
//   answer.classList.toggle("active");
//   question.classList.toggle("active");
// }

