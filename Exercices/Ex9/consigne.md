# Liste

Gràce à Javascript et CSS, il doit être possible de réorganiser la liste en drag and drop

Marche à suivre (bancale)

- Créer des écouteurs d'évènnements pour:
  - le début d'un drag : supprimer (ou cacher) l'élément en question
  - lorsque l'on passe sur un élément pendant un drag : afficher un repère visuel pour prévisualiser ou sera l'élément à la fin du drag, mémoriser le dernier élément survolé en js
  - la fin d'un drag: ajouter l'élément du début avant ou après le dernier élément survolé

- Créer des règles css pour enlever les puces de la liste, le repère visuel

- Créer un élément temporaire en js lors du drag pour permettre un déplacement complet
