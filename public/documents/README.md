# Dossier des preuves PDF

Placez ici tous les documents PDF associés à vos réalisations.

- Nommez les fichiers de façon claire (ex. `rapport-inventaire.pdf`, `procedure-windows11.pdf`).
- Dans `src/data/realisations.ts`, référencez chaque PDF par son chemin : `/documents/nom-du-fichier.pdf`.

Exemple dans une réalisation :

```ts
preuves: [
  { label: "Rapport d'installation (PDF)", href: "/documents/rapport-installation.pdf" },
  { label: "Procédure de rollback (PDF)", href: "/documents/procedure-rollback.pdf" },
]
```

Plusieurs PDF par réalisation sont possibles.
