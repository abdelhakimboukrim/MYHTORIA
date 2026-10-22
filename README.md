# MYTHORIA – Boutique de boosters (Livrable 1)

J'ai créé la première partie du site MYTHORIA, un site de cartes à collectionner fantasy, en HTML, CSS (Tailwind) et JavaScript. Ce livrable contient la boutique de boosters avec un panier qui fonctionne.

## Pages

- Accueil (`index.html`)
- Boutique de boosters (`shop.html`)



## Les boosters

- Beginner Pack – 10
- Summoning of the Legends – 15
- Dark Summoning – 15
- Lucky Pack – 30

## Fonctionnalités

- Un menu de navigation pour passer d'une page à l'autre.
- Quatre boosters avec image, description et prix.
- Un bouton « add to cart » qui ajoute le booster au panier.
- Un bouton « remove » pour retirer un booster du panier.
- Le total du panier se met à jour automatiquement.

## Planification

planing : [https://github.com/users/abdelhakimboukrim/projects/6/views/1]

## Ce que j'ai appris

- Relier plusieurs pages HTML entre elles avec un menu de navigation.
- Utiliser `querySelector` avec les bons sélecteurs (`.classe` et `#id`).
- Créer des éléments avec `createElement` et les ajouter à la page avec `appendChild`.
- Utiliser la délégation d'événements : un seul `addEventListener` sur le conteneur pour gérer tous les boutons.
- Utiliser `closest()` pour retrouver la carte du booster à partir du bouton cliqué.
- Utiliser `parseFloat` pour lire un prix avec des décimales (`parseInt` coupe le `.99`).

- Retrouver mes erreurs avec la console du navigateur (`console.log`).
- Corriger mes balises HTML (`<div>` jamais fermées) et mes chemins d'images.
- Utiliser Tailwind CSS pour mettre en forme la page.
- Mettre le site en ligne avec virsel.

## Limites actuelles

- Le panier n'est pas sauvegardé : si je recharge la page, il se vide.
- On ne peut pas encore ouvrir les boosters (livrable 2).

## Liens

- Site en ligne : [https://mythoria-orcin.vercel.app/]
- Dépôt GitHub : [https://github.com/abdelhakimboukrim/MYHTORIA]
