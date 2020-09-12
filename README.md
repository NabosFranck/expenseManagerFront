# Cocktails

Ce projet a été généré avec [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

### Mise en place
Une fois téléchargé sur votre système on n'oublie pas de ramener toutes les dépendances avec npm
```sh
$ npm install
```

### Seveur de développement
`ng serve`. Disponible à l'url `http://localhost:4200/`. 
Vous pouvez également utilisé les raccourcis npm écrits dans le fichier package.json `npm run start`

### Documentation
Vous avez à disposition les commandes de génération de [Compodoc](https://compodoc.app/)
Encore une tout cela est dans le fichier `package.json`

# Explications générales de cet applicatif web

Applicatif généré par angular cli
Installation de nebular
Création de 3 modules pour regrouper les 'bloques' de pages
Chaque module dispose:
- de composant pour les pages
- d'un système de routage pour leur propre page

Suite à cela nous avons pu mettre en place le routage principal dans le fichier `app-routing.module.js`

Mise en place du système de connexion utilisateur avec le module NbAuthModule de nebular mais en utilisant la partie custom de la documentation (`auth-login module`)

Nous avons mis une condition sur l'affichage dans `app.component` afin de cacher certaines parties suivant l'état de connexion.

Pour interagir avec une API nous avons également mis en place un `HttpInterceptor` afin de modifier nos requêtes pour qu'elles corresponde aux attentes de l'api.

Bien sûr nous avons fait en sorte de pouvoir la `provider` dans le `app.module.ts`
(Voir fin de fichier `graphql.interceptor.ts`) et les providers dans app.module


Afin de protéger les routes de notre routeur nous avons mis en place un Guard `AuthorizationGuard` afin encore une fois de protéger les routes suivant l'état de connexion


#expenseManagerFront
