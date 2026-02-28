# Portfolio E4 · BTS SIO option SISR

Portfolio de professionnalisation pour l’épreuve E4 du BTS SIO option SISR.  
Présentation du parcours en alternance et démonstration du bloc **« Support et mise à disposition de services informatiques »**.

- **Stack :** Next.js, TypeScript, Tailwind CSS  
- **Déploiement :** Vercel (sans configuration complexe)

---

## Arborescence du projet

```
PORTFOLIOV1/
├── public/
│   └── documents/          # PDF des preuves (à ajouter)
│       └── README.md
├── src/
│   ├── app/
│   │   ├── a-propos/page.tsx
│   │   ├── competences/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── developpement-pro/page.tsx
│   │   ├── realisations/page.tsx
│   │   ├── synthese/page.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx        # Accueil
│   │   └── globals.css
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── PageSection.tsx
│   │   ├── PreuvesList.tsx
│   │   └── RealisationCard.tsx
│   ├── data/
│   │   ├── index.ts
│   │   ├── competences.ts  # Données des 6 compétences
│   │   └── realisations.ts # Données des réalisations + preuves PDF
│   └── types/
│       └── index.ts
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## Installation

```bash
npm install
```

---

## Lancement en local

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

---

## Build

```bash
npm run build
```

Puis lancer le serveur de production en local :

```bash
npm start
```

---

## Déploiement sur Vercel

1. **Compte Vercel**  
   Créer un compte sur [vercel.com](https://vercel.com) (gratuit).

2. **Connexion du projet**  
   - Aller sur [vercel.com/new](https://vercel.com/new)  
   - Importer le dépôt Git du projet (GitHub, GitLab ou Bitbucket), ou uploader le dossier du projet  
   - Vercel détecte automatiquement Next.js : ne pas modifier les paramètres par défaut  
   - Cliquer sur **Deploy**

3. **Build**  
   Vercel exécute `npm run build` puis déploie. Aucune configuration supplémentaire n’est nécessaire pour un projet Next.js standard.

4. **Variables d’environnement**  
   Si vous en ajoutez plus tard : *Project → Settings → Environment Variables*.

5. **PDF dans `public/documents/`**  
   Les fichiers dans `public/` sont servis à la racine. Les liens du type `/documents/mon-fichier.pdf` fonctionneront en production dès que les PDF sont bien dans `public/documents/`.

---

## Personnalisation des contenus

- **Réalisations et preuves :** modifier `src/data/realisations.ts`.  
  Chaque réalisation contient : `titre`, `contexte`, `tachesRealisees`, `competencesMobilisees`, `preuves` (tableau de `{ label, href }` vers les PDF).
- **Compétences :** texte et indicateurs dans `src/data/competences.ts`.
- **Textes des pages :** éditer les fichiers dans `src/app/*/page.tsx` (à propos, accueil, contact, développement pro, etc.).
- **PDF :** placer les fichiers dans `public/documents/` et mettre à jour les chemins `href` dans `realisations.ts` (ex. `/documents/rapport-installation.pdf`).

---

## Licence

Usage personnel / formation BTS SIO.
