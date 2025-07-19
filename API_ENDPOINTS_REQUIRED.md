# Endpoints API requis pour la personnalisation de la page d'accueil

Pour que la fonctionnalité de personnalisation de la page d'accueil fonctionne correctement, les endpoints suivants doivent être implémentés côté backend (MongoDB/Express) :

## 1. GET /dashboard/getHomeConfig

**Description :** Récupère la configuration actuelle de la page d'accueil

**Réponse attendue :**
```json
{
  "_id": "ObjectId",
  "videoUrl": "videos/ssng/Trailer_SISING23th.mp4",
  "logoUrl": "/img/ssng/ssng_logo.png",
  "steamIframeUrl": "https://store.steampowered.com/widget/3607150/",
  "title": "SSNG",
  "backgroundColor": "#000000"
}
```

**En cas d'erreur (pas de configuration) :**
```json
{
  "message": "Configuration not found",
  "error": true
}
```

## 2. PUT /dashboard/updateHomeConfig

**Description :** Met à jour la configuration de la page d'accueil

**Corps de la requête :**
```json
{
  "id": "ObjectId (optionnel pour création)",
  "videoUrl": "videos/ssng/Trailer_SISING23th.mp4",
  "logoUrl": "/img/ssng/ssng_logo.png",
  "steamIframeUrl": "https://store.steampowered.com/widget/3607150/",
  "title": "SSNG",
  "backgroundColor": "#000000"
}
```

**Réponse de succès :**
```json
{
  "message": "Configuration mise à jour avec succès",
  "success": true
}
```

**Réponse d'erreur :**
```json
{
  "message": "Erreur lors de la mise à jour",
  "error": true
}
```

## Modèle MongoDB suggéré

```javascript
const homeConfigSchema = new mongoose.Schema({
  videoUrl: {
    type: String,
    default: 'videos/ssng/Trailer_SISING23th.mp4'
  },
  logoUrl: {
    type: String,
    default: '/img/ssng/ssng_logo.png'
  },
  steamIframeUrl: {
    type: String,
    default: 'https://store.steampowered.com/widget/3607150/'
  },
  title: {
    type: String,
    default: 'SSNG'
  },
  backgroundColor: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('HomeConfig', homeConfigSchema);
```

## Exemple d'implémentation Express.js

```javascript
// GET /dashboard/getHomeConfig
app.get('/dashboard/getHomeConfig', async (req, res) => {
  try {
    let config = await HomeConfig.findOne();
    if (!config) {
      // Créer une configuration par défaut si elle n'existe pas
      config = new HomeConfig();
      await config.save();
    }
    res.json(config);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error: true });
  }
});

// PUT /dashboard/updateHomeConfig
app.put('/dashboard/updateHomeConfig', async (req, res) => {
  try {
    const { id, videoUrl, logoUrl, steamIframeUrl, title, backgroundColor } = req.body;
    
    let config;
    if (id) {
      config = await HomeConfig.findByIdAndUpdate(id, {
        videoUrl,
        logoUrl,
        steamIframeUrl,
        title,
        backgroundColor,
        updatedAt: new Date()
      }, { new: true });
    } else {
      config = await HomeConfig.findOneAndUpdate({}, {
        videoUrl,
        logoUrl,
        steamIframeUrl,
        title,
        backgroundColor,
        updatedAt: new Date()
      }, { new: true, upsert: true });
    }
    
    res.json({ message: 'Configuration mise à jour avec succès', success: true });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour', error: true });
  }
});
```

## Notes importantes

1. **Authentification :** Ces endpoints doivent être protégés et accessibles uniquement aux administrateurs
2. **Validation :** Ajouter une validation des données côté serveur
3. **CORS :** S'assurer que les headers CORS sont correctement configurés
4. **Sécurité :** Valider les URLs pour éviter les injections malveillantes
