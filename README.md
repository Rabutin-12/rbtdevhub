# Rbt Dev Hub — Site web officiel

**« Votre idée, notre code, votre succès »**

Site vitrine premium construit avec **Next.js (App Router)**, **TypeScript** et **Tailwind CSS**.

## Démarrage

```bash
npm install
npm run dev
```

Le site est accessible sur [http://localhost:3000](http://localhost:3000).

## Structure du projet

```
app/
  layout.tsx        → Layout racine, polices, metadata SEO
  page.tsx          → Page d'accueil (assemblage des sections)
  globals.css       → Styles globaux, animations, accessibilité
  api/quote/        → API de réception des demandes de devis
components/
  Navbar.tsx        → Barre de navigation fixe (menu mobile inclus)
  Hero.tsx          → Section d'accueil avec terminal animé
  Services.tsx      → Les 4 services avec animations au survol
  About.tsx         → Présentation de l'entreprise et valeurs
  Portfolio.tsx     → Galerie de projets filtrable par catégorie
  QuoteForm.tsx     → Formulaire de devis gratuit + confirmation
  Contact.tsx       → Coordonnées, WhatsApp, réseaux, formulaire
  Footer.tsx        → Pied de page
  Reveal.tsx        → Révélation au défilement (IntersectionObserver)
  SectionHeading.tsx→ Titre de section réutilisable
lib/
  data.ts           → Services, projets, coordonnées (à personnaliser)
public/             → Images et ressources statiques
```

## Personnalisation rapide

1. **Coordonnées** : modifiez `lib/data.ts` (email, numéro WhatsApp, réseaux sociaux).
2. **Projets du portfolio** : remplacez les exemples dans `lib/data.ts` par vos vraies réalisations (vous pouvez remplacer les aperçus en dégradé par des captures d'écran via `next/image`).
3. **Envoi d'email des devis** : géré via Resend (`lib/sendMail.ts`), branché dans `app/api/quote/route.ts` et `app/api/contact/route.ts`.
   - Sans nom de domaine, les emails partent depuis l'adresse sandbox `onboarding@resend.dev` — c'est volontaire et sans limitation ici, car les notifications sont toujours envoyées vers votre propre adresse (`CONTACT_TO_EMAIL`), ce qui correspond à la restriction du mode sandbox Resend (envoi uniquement vers l'adresse du compte).
   - Si vous achetez un domaine plus tard, vérifiez-le dans [resend.com/domains](https://resend.com/domains) puis renseignez `RESEND_FROM_EMAIL` et `CONTACT_TO_EMAIL` dans `.env.local` (voir les lignes commentées) pour envoyer depuis une adresse @votredomaine.
4. **Nom de domaine** : le site n'en utilise pas actuellement (`metadataBase` est commenté dans `app/layout.tsx`). Si vous en achetez un, décommentez-le et mettez à jour l'URL.

## Identité visuelle

- Logo rond : `public/logo.png` (utilisé dans la navbar et le footer)
- Favicon : `app/icon.png` (généré automatiquement par Next.js)
- Image de partage (Open Graph / réseaux sociaux) : `public/couverture.png`
- Charte : navy `#061229` / `#0A1B3D`, jaune or `#F5C518`, blanc `#F4F6FB`

## Points techniques

- SEO : metadata Next.js complètes (Open Graph, Twitter Card, robots)
- Accessibilité : focus clavier visible, labels de formulaire, `prefers-reduced-motion` respecté
- Responsive : mobile, tablette et desktop
- Aucune dépendance UI externe : Tailwind pur, icônes SVG intégrées
