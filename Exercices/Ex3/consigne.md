# Exercice 1 : Sapin

Dans script.js :

Créer une fonction sapinDeNoel() qui prend 1 argument et qui
affiche dans la console un sapin composé de characteres "0"
mesurant X lignes de haut (X étant le paramètre)

ex : sapinDeNoel(5)

Résultat :
    0
   000
  00000
 0000000
000000000
    |

nombre de zéro à chaque ligne = n de la ligne x 2 - 1
nombre d'espace a chaque ligne = h - n de la ligne
nombre d'espace avant le tronc = h - 1