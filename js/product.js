//boutton de la nav-bar
$(".nav-link").click(function() {
  // Retirez la classe "active" de tous les liens
  $(".nav-link").removeClass("active");
  // Ajoutez la classe "active" au lien sur lequel vous avez cliqué
  $(this).addClass("active");
});
// Gérer le changement de la quantité
$('.range2 input[type="number"]').change(function() {
    var pricePerUnit = parseInt($('.range h2 span').text());
    var quantity = parseInt($(this).val());

    // Vérifier si la quantité est un nombre valide
    if (!isNaN(quantity)) {
    // Calculer le total
    var total = pricePerUnit * quantity;

    // Mettre à jour la span dans la div de classe range2
    $('.range2 h2 span').text(total);

    // Mettre à jour la span dans la div de classe count dans le modal
    $('#exampleModal .modal-body.count span').text(total);

    // Activer ou désactiver le bouton Commander en fonction de la quantité
    
    }
});

    // Gérer le changement dans les champs de texte
    $('.form-dispo input[type="text"], .form-dispo input[type="tel"]').keyup(checkFormFields);

    function checkFormFields() {
      var allFieldsFilled = true;

      // Vérifier si tous les champs sont remplis
      $('.form-dispo input[type="text"], .form-dispo input[type="tel"]').each(function() {
        if ($(this).val() === '') {
          allFieldsFilled = false;
          return false; // Sortir de la boucle si un champ est vide
        }
      });

      // Activer ou désactiver le bouton Commander
      if (allFieldsFilled) {
        $('.form .d-grid .btn-primary').removeClass('disabled');
      } else {
        $('.form .d-grid .btn-primary').addClass('disabled');
      }
    }

// Autre code existant...


// alert of nbr selected
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
