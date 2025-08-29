# Sangaredi TV — Projet React (Vite + Tailwind)

## 📦 Contenu
- React 18 + Vite + Tailwind CSS
- Composants : Header (logo), Feed (likes + commentaires), Contact (formulaire simulé + WhatsApp + email), Footer
- Logos intégrés : `public/assets/logo-horizontal.png`, `public/assets/logo-portrait.png`

## 🚀 Déployer sur Vercel (depuis Android)
1. Crée un repo sur GitHub (appli mobile GitHub).
2. Envoie **tous les fichiers** de ce dossier sur GitHub.
3. Va sur https://vercel.com → Login avec GitHub → **New Project** → sélectionne le repo → **Deploy**.
   - Build Command: `npm run build`
   - Output Directory: `dist` (par défaut avec Vite)
4. Ton site sera en ligne : `https://sangareditv.vercel.app` (ou équivalent).

## 🌍 Lier un domaine personnalisé
- Sur Vercel : **Project → Settings → Domains → Add** → `sangareditv.com`
- Chez ton registrar (OVH/Namecheap/Hostinger) : ajoute les DNS indiqués par Vercel (CNAME/ A).
- SSL automatique.

## ✉️ Formulaire
- Actuellement en **mode simulation** (pas d’envoi d’email).
- Pour activer : EmailJS / Formspree / backend (Nodemailer).

## 🔧 Dév local (optionnel)
- `npm install`
- `npm run dev`
- `npm run build` (sortie dans `dist/`)

Bon déploiement !
