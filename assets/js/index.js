document.addEventListener("DOMContentLoaded", function () {
  const btnPlus = document.getElementById("plus");
  const btnMoins = document.getElementById("moins");
  const elCompteur = document.getElementById("compteur");
  const elMsg = document.getElementById("message");

  // Si les éléments ne sont pas sur la page, on ne fait rien
  if (!btnPlus || !btnMoins || !elCompteur) return;

  // Valeur initiale lue dans le DOM (ex. "3")
  let valeur = parseInt(elCompteur.textContent, 10);
  if (isNaN(valeur)) valeur = 0;

  function majAffichage() {
    elCompteur.textContent = String(valeur);

    if (!elMsg) return;

    // Petit message d’info simple (optionnel)
    if (valeur > 10) {
      elMsg.textContent =
        "Au-delà de 10 pages, un devis personnalisé est recommandé.";
      elMsg.classList.add("text-warning");
    } else {
      elMsg.textContent = "";
      elMsg.classList.remove("text-warning");
    }
  }

  btnPlus.addEventListener("click", () => {
    valeur += 1;
    majAffichage();
  });

  btnMoins.addEventListener("click", () => {
    if (valeur > 0) {
      valeur -= 1;
      majAffichage();
    }
  });

  // Premier rendu
  majAffichage();
});