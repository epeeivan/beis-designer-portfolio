# Portfolio Upgrade — Passage en style « case study Behance »

> Objectif : élever la qualité des previews (mockups + affiches détaillées) et enrichir les
> pages projet, sans refonte de code — en exploitant ce que les composants supportent déjà.

---

## 1. Ce que le code supporte DÉJÀ

- `cover` → image principale, affichée pleine largeur dans `Preview.vue` avec **zoom plein écran** au clic.
- `views: []` → **galerie de visuels supplémentaires** (bandeau de miniatures cliquables). Présent dans
  `Preview.vue` mais **non rempli** dans les données actuelles → **principal levier à activer**.
- `description` → supporte **paragraphes** (séparés par une ligne vide) + **listes à puces** (lignes en `- `).
- `logo`, `badges`, `subTitle`, et pour les cards logo : `img` + `bg` + `mid_bg`.

➡️ « Style Behance » = **produire les visuels (`cover` + `views`) + enrichir les `description`**. Pas de code à toucher au départ.

---

## 2. Specs techniques des images

Règle d'art direction n°1 : **chaque visuel est composé sur un artboard 3:2** (mockup / affiche posé sur un
fond de scène — jamais une capture brute). La card rogne en 3:2 (`aspect-3/2` + `background-size: cover`).

| Usage | Dimensions | Format | Poids visé |
|---|---|---|---|
| `cover` + chaque `views[]` | **1600 × 1067 px** (3:2) | WebP q~80 | < 200 Ko |
| `img` (logo sur dégradé) | ~800 px, transparent | WebP / PNG | < 100 Ko |
| `logo` (pastille ronde) | 128 × 128 px | WebP / PNG | < 20 Ko |

---

## 3. Kit d'éléments par type de projet

### 3.a — Projet UI/UX (apps, web_apps, websites, design_systems)
Cible = **1 cover + 4 à 6 views**, ordre narratif :

1. **Cover — hero mockup** : device réaliste (📱 phone pour apps / 💻 laptop-navigateur pour web) sur fond de marque
2. **Écran clé #1** : le parcours signature (dashboard, checkout…) dans un frame propre
3. **Écran clé #2–3** : autres écrans forts
4. **Vue « flow »** : 2–3 écrans alignés montrant un parcours
5. **Détail / close-up** : zoom sur un composant soigné
6. **Slide système** (design_systems) : couleurs + typo + composants

### 3.b — Projet Graphic / Brand (brand_identity, catalogs)
1. **Cover — affiche logo** : le logo mis en scène
2. **Déclinaisons logo** : principal / monochrome / icône
3. **Palette couleurs** : affiche des teintes + hex
4. **Typographie** : affiche des polices utilisées
5. **Mockups d'application** : carte de visite, enseigne, packaging, papeterie…
6. **Mise en situation** : marque en contexte réel
7. **Spreads** (catalogs) : magazine / catalogue ouvert en mockup

---

## 4. Sources à rassembler (une fois par projet)

- 🎨 Logo haute résolution (SVG idéalement, sinon PNG transparent)
- 🌈 Couleurs de marque (codes hex)
- 🖼️ Captures HD (UI) ou fichiers print (graphic)
- 🔤 Polices utilisées
- 📐 Templates de mockups (Figma smart-objects ou PSD)

---

## 5. Structure de fichiers (sous `public/images/projects/<projet>/`)

```
projects/tchaza/
  logo.webp
  ui_ux/mobile/
    cover.webp        ← hero mockup
    view-1.webp       ← écran clé
    view-flow.webp
    view-detail.webp
```

Puis dans le `.ts` correspondant, activer `views` :

```ts
{
  title: "achievements.tchaza_mobile.title",
  cover: "projects/tchaza/ui_ux/mobile/cover.webp",
  views: [
    "projects/tchaza/ui_ux/mobile/view-1.webp",
    "projects/tchaza/ui_ux/mobile/view-flow.webp",
    "projects/tchaza/ui_ux/mobile/view-detail.webp",
  ],
  // ...
}
```

---

## 6. Structure de la `description` (i18n `achievements.ts`)

```
[Paragraphe 1 — contexte & problème : à quoi sert le produit, pour qui]

[Paragraphe 2 — ton rôle : ce que TU as fait précisément]

- Réalisation clé 1
- Réalisation clé 2
- Réalisation clé 3

[Paragraphe 3 — résultat / valeur produite]
```

---

## 7. Ordre de mise en œuvre

1. Projet **pilote** → kit complet = template de référence. **(pilote retenu : Tchaza)**
2. Valider le rendu réel (cover + galerie + description).
3. Décliner le gabarit projet par projet.
4. Activer `views[]` au fur et à mesure.

---

## 8. Tableaux de suivi

Légende : ☐ à faire · ✅ fait. Colonnes = qualité des livrables par réalisation.

### UI/UX — Apps (mobile)
| Projet | Cover mockup | Views (galerie) | Description enrichie |
|---|---|---|---|
| Mesagoo mobile | ☐ | ☐ | ☐ |
| Cocoonin mobile | ☐ | ☐ | ☐ |
| Bewallet mobile | ☐ | ☐ | ☐ |
| **Tchaza mobile** (pilote) | ☐ | ☐ | ☐ |

### UI/UX — Web apps
| Projet | Cover mockup | Views | Description |
|---|---|---|---|
| Bewallet (be_refill) | ☐ | ☐ | ☐ |
| Mesagoo admin | ☐ | ☐ | ☐ |
| Mesagoo client | ☐ | ☐ | ☐ |
| Cocoonin admin | ☐ | ☐ | ☐ |
| Bewallet admin | ☐ | ☐ | ☐ |
| Bewallet client | ☐ | ☐ | ☐ |
| Tchaza client | ☐ | ☐ | ☐ |
| Empire Drive | ☐ | ☐ | ☐ |

### UI/UX — Websites
| Projet | Cover mockup | Views | Description |
|---|---|---|---|
| Betmomo (betfest) | ☐ | ☐ | ☐ |
| Portfolio | ☐ | ☐ | ☐ |
| Mesagoo | ☐ | ☐ | ☐ |
| Cocoonin | ☐ | ☐ | ☐ |
| Bewallet landing | ☐ | ☐ | ☐ |
| Tchaza | ☐ | ☐ | ☐ |
| Global Wine | ☐ | ☐ | ☐ |
| Softsec | ☐ | ☐ | ☐ |
| Rapid Services | ☐ | ☐ | ☐ |
| Tatami Games | ☐ | ☐ | ☐ |

### UI/UX — Design systems
| Projet | Cover | Views (tokens/composants) | Description |
|---|---|---|---|
| Mesagoo | ☐ | ☐ | ☐ |
| Cocoonin | ☐ | ☐ | ☐ |
| Bewallet | ☐ | ☐ | ☐ |
| Tchaza | ☐ | ☐ | ☐ |

### Graphic — Brand identity
| Projet | Cover / affiche | Views (logo/couleurs/typo/mockups) | Description |
|---|---|---|---|
| Ahafreight | ☐ | ☐ | ☐ |
| ApiBundle | ☐ | ☐ | ☐ |
| Vitteck | ☐ | ☐ | ☐ |
| 237Coachs | ☐ | ☐ | ☐ |
| Cocoonin | ☐ | ☐ | ☐ |
| Tchaza | ☐ | ☐ | ☐ |

### Graphic — Catalogs
| Projet | Cover mockup | Views (spreads) | Description |
|---|---|---|---|
| Ahafreight brochure | ☐ | ☐ | ☐ |
| Concord brochure | ☐ | ☐ | ☐ |
| Fireshield formation | ☐ | ☐ | ☐ |

---

## 9. Navigation / Architecture de l'information

Évaluation du flow actuel : **6,5/10** — propre et fonctionnel, mais pensé « galerie » plutôt
que « portfolio qui convertit ».

Flow actuel :
```
/ → /home → [Sidebar plein écran = landing : Profil + choix UI/UX / Graphic / Contact]
  → (clic discipline) → Sidebar 300px + [Bloc Softwares] + [Tabs achievements]
  → (clic card) → Preview = MODALE plein écran (cover + views + description, zoom, Échap)
```

### Frictions à corriger (par priorité)

- [ ] **🔴 P1 — Un projet n'a pas d'URL.** `Preview.vue` est une modale, pas une route.
  → impossible d'envoyer le lien direct d'un projet à un recruteur ; le bouton retour ne
  referme pas ; les projets ne sont pas pré-rendus en SSG (SEO/partage nuls).
  **Fix :** faire du projet une vraie route (`/home/ui-ux/tchaza`) avec URL partageable.
  Rejoint la refonte « par projet » (voir §10). *Effort moyen, gain élevé.*

- [ ] **🟠 P2 — L'entrée force un choix avant de montrer le travail.** Pas de hero, pas de
  projets « featured », pas d'accroche de positionnement.
  **Fix :** landing avec 3–4 projets mis en avant + phrase de positionnement + CTA (CV / contact).
  La segmentation par discipline vient après.

- [ ] **🟠 P3 — Les outils passent avant le travail.** Le bloc « Softwares » s'affiche au-dessus
  des réalisations (`SkillsPageLayout.vue`).
  **Fix :** travail en premier, outils en fin de page ou en colonne latérale discrète.

- [ ] **🟡 P4 — Contact mono-canal.** Seul WhatsApp dans le flow. Ajouter email + LinkedIn.

### À conserver (points forts)
- Tabs avec compteurs (bonne affordance).
- Preview : zoom plein écran + navigation clavier.
- Split UI/UX vs Graphic clair.
- Thème + langue toujours accessibles.

---

## 10. Décision IA : regrouper par PROJET (à trancher)

Aujourd'hui l'IA est **par type d'artefact** (Apps / Web apps / Websites / Design systems) →
un même produit (Tchaza) est éclaté en ~5 cards avec logo/description répétés.

Reco : **regrouper par projet**. 1 card = 1 projet ; mobile / web / admin / design system
deviennent des `views[]` d'un même case study. Avantages : récit produit complet (argument fort
pour un poste « plateforme complète »), zéro redondance, effort mockups concentré, et — couplé à
P1 — chaque projet obtient une URL partageable.

Statut : ✅ **tranché — case study unifié par projet.** Implémenté sur `feature/behance-full-vertical`.

### Ce qui a été fait (2026-08-17)
- Nouveau registre `src/assets/datas/projects.ts` : **35 items → 17 projets** fusionnés
  (Tchaza/Cocoonin regroupent UI/UX + branding ; chaque produit agrège mobile/web/admin/DS en `views[]`).
  Champs : `slug`, `disciplines[]` (`ui_ux`/`branding`), `types[]`, `cover`, `views[]`, `tools[]`, `badges[]`.
- Vue unifiée `src/views/projects/Index.vue` avec **filtres Tout | UI/UX | Branding** (comptes dynamiques).
- Route `/home/projects` (`home.projects`) ; anciennes routes `ui-ux` / `graphic-design` → **redirections** (compat).
- Sidebar : un seul point d'entrée **« Projets »** (labels i18n `projects` + `branding` ajoutés fr/en).
- Card : **badges de type** (Mobile · Web · Admin · Design System · Logo · Print) + outils au survol.
- `type-check` OK · `build:spa` OK.

### Reste à faire
- [ ] **P1 non résolu** : le détail projet est encore une **modale** (`Preview`), donc pas d'URL partageable
  par projet. Prochaine étape : détail projet = route `/home/projects/:slug`.
- [ ] Nettoyage : anciens fichiers devenus morts (`src/views/uiux/**`, `src/views/graphicDesign/**`,
  `src/assets/datas/achievements/**`) — à supprimer une fois la nouvelle structure validée visuellement.
- [ ] Produire les vraies vues (`views[]`) façon mockups pour chaque projet (le long scroll les affichera).

---

## 11. Catalogue de mockups & assignation par projet

Tout est composé sur artboard **3:2 · 1600×1067 · WebP** (cf. §2).

### Vocabulaire — codes mockup

**Device (UI)**
- `D1` phone seul face · `D2` trio phones (cascade) · `D3` phone en main (photo)
- `D4` laptop MacBook · `D5` fenêtre navigateur épurée · `D6` écran desktop/iMac
- `D7` combo phone + laptop (responsive)

**Présentation (UI & Graphic)**
- `P1` affiche titre (nom + tagline) · `P2` grille d'écrans à plat · `P3` détail / close-up

**Marque (Graphic)**
- `B1` présentation logo · `B2` déclinaisons logo · `B3` affiche palette · `B4` affiche typo
- `B5` carte de visite · `B6` papeterie · `B7` enseigne/devanture · `B8` mise en situation réelle

**Print (Catalogs)**
- `C1` couverture · `C2` double page · `C3` pages en éventail · `C4` en main / sur bureau

### Assignation par catégorie

**A. Produits complets (design + dev)** — Tchaza, Bewallet, Mesagoo, Cocoonin
| Slot | Mockup | Contenu |
|---|---|---|
| cover | `D7` | produit en un coup d'œil |
| view 1 | `D2` | parcours mobile |
| view 2 | `D6` | dashboard admin |
| view 3 | `D5` | client web / landing |
| view 4 | `P3` | composant signature |
| view 5 | `B3`+`B4` | fondations design system |
| view 6 | `D3` | mise en situation |

**B. Sites vitrine (landing seule)** — Betmomo, Portfolio, Global Wine, Softsec, Rapid Services, Tatami Games
| Slot | Mockup |
|---|---|
| cover | `D4` |
| view 1 | `P2` |
| view 2 | `D7` |
| view 3 | `P3` |

**C. Web app / admin seul** — Empire Drive
| Slot | Mockup |
|---|---|
| cover | `D6` |
| view 1 | `P2` |
| view 2 | `P3` |

**D. Identité de marque seule** — Ahafreight, ApiBundle, Vitteck, 237Coachs
| Slot | Mockup |
|---|---|
| cover | `B1` |
| view 1 | `B2` |
| view 2 | `B3` |
| view 3 | `B4` |
| view 4 | `B5`/`B7`/`B8` |

**E. Catalogues / brochures** — Ahafreight brochure, Concord, Fireshield
| Slot | Mockup |
|---|---|
| cover | `C1` |
| view 1 | `C2` |
| view 2 | `C3` |
| view 3 | `C4` |

> Note : en logique « par projet » (§10), un produit complet fusionne ses cards mobile/web/admin/DS
> en un seul case study dont les `views[]` suivent la ligne A ci-dessus.

---

## 12. Mode full vertical (présentation façon Behance)

Décision : la vue détail passe d'un combo *cover + bandeau de miniatures* à un **long scroll
vertical** d'images empilées, façon Behance. **Seule interaction = le scroll** (+ zoom plein écran
au clic). C'est le format qui simplifie le plus la navigation.

### Décisions figées
| Fork | Choix |
|---|---|
| Contenu vue détail | **En-tête minimal** (titre + sous-titre + icônes outils + badges) **puis long scroll** |
| Composition du visuel | **Plusieurs images empilées** (`cover` = 1er bloc, puis `views[]`), 1600 px de large |
| Card (grille) | Au survol : **overlay des icônes outils** sur la preview |

> Référence : Behance empile des « content blocks » (images séparées ~1400–1600 px de large,
> hauteur libre), pas une image géante unique — meilleur pour le lazy-load, le réordonnancement
> et le zoom.

### Modèle de données — champ `tools` à ajouter
```ts
{
  title: "achievements.tchaza.title",
  cover: "projects/tchaza/case/cover.webp",
  views: [
    "projects/tchaza/case/screens.webp",
    "projects/tchaza/case/flow.webp",
    "projects/tchaza/case/detail.webp",
  ],
  tools: ["figma", "vue", "laravel", "tailwind"], // ← nouveau ; réfère aux icônes de softwares.ts
  badges: [...],
}
```

### Impacts composants
- `Preview.vue` : remplacer *cover + miniatures* par → en-tête minimal collant, puis
  `[cover, ...views]` empilées pleine largeur, chacune zoomable au clic. (Le viewer plein écran actuel est conservé.)
- `CardImage.vue` : au survol, afficher les icônes `tools` en overlay sur la preview.
- `softwares.ts` : servir de source unique des icônes d'outils (mapping `tools` → icône/label).

### Statut
- [x] Spec validée
- [x] `Preview.vue` en long scroll (en-tête minimal + `[cover, ...views]` empilées, zoom conservé)
- [x] `CardImage.vue` overlay outils au survol
- [x] Registre `src/assets/datas/tools.ts` (mapping id → icône, extensible)
- [x] champ `tools` ajouté aux données pilote (apps.ts × 4, Tchaza brand identity)
- [ ] champ `tools` à généraliser au reste des projets
- [ ] visuels `views[]` à produire (le long scroll n'affiche que `cover` tant qu'aucune view)

> Implémenté sur la branche `feature/behance-full-vertical`. `npm run type-check` OK.

---

## 13. Journal

- 2026-08-15 : création du dossier ; pilote = Tchaza ; ajout éval navigation (§9) + décision IA (§10) + catalogue mockups (§11) + mode full vertical (§12).
