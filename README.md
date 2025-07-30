# Snip & Shine - Toeletta Mobile per Animali

Una bellissima landing page responsive per un servizio di toeletta mobile per animali costruita con Express.js, caratterizzata da un design moderno con palette di colori lilla e tiffany.

## Caratteristiche

- 🎨 Design moderno e responsive con palette di colori lilla e tiffany
- 📱 Approccio mobile-first con navigazione hamburger
- 💬 Integrazione WhatsApp per prenotazioni e contatti
- ✨ Animazioni fluide e effetti hover
- 🎯 Struttura SEO-friendly
- 🚀 Caricamento veloce con asset ottimizzati

## Color Palette

- **Lilla Primary**: #8B5FBF
- **Lilla Light**: #B19CD9
- **Lilla Dark**: #6A4C93
- **Tiffany Primary**: #81D8D0
- **Tiffany Light**: #A8E6E0
- **Tiffany Dark**: #5BC0BE

## Installazione

1. Clona il repository:

```bash
git clone <repository-url>
cd snip-and-shine-website
```

2. Installa le dipendenze:

```bash
npm install
# oppure
pnpm install
```

3. Avvia il server di sviluppo:

```bash
npm run dev
# oppure
pnpm dev
```

4. Apri il browser e vai su `http://localhost:3000`

## Struttura del Progetto

```
snip-and-shine-website/
├── public/
│   ├── index.html          # File HTML principale
│   ├── styles.css          # Stili CSS con palette lilla/tiffany
│   └── script.js           # Funzionalità JavaScript
├── server.js               # Server Express
├── package.json            # Dipendenze e script
└── README.md              # Questo file
```

## Script Disponibili

- `npm start` - Avvia il server di produzione
- `npm run dev` - Avvia il server di sviluppo con nodemon
- `npm test` - Esegue i test (placeholder)

## Dettagli delle Funzionalità

### Frontend

- **Navigazione Responsive**: Navbar fissa con menu hamburger mobile
- **Sezione Hero**: Sfondo gradiente accattivante con pulsanti call-to-action
- **Sezione Servizi**: Layout a griglia che mostra i servizi di toeletta con prezzi
- **Sezione Chi Siamo**: Caratteristiche che evidenziano i vantaggi della toeletta mobile
- **Sezione WhatsApp**: Integrazione diretta con WhatsApp per prenotazioni
- **Sezione Contatti**: Informazioni di contatto e link WhatsApp
- **Footer**: Link, social media e informazioni aziendali

### Backend

- **Server Express**: Serve file statici
- **Server Semplice**: Nessun endpoint di form, tutto gestito via WhatsApp

### Funzionalità Interattive

- Navigazione con scroll fluido
- Integrazione WhatsApp diretta
- Toggle menu mobile
- Animazioni allo scroll
- Effetti hover
- Pulsanti WhatsApp con messaggi predefiniti

## Personalizzazione

### Colori

La palette di colori è definita nelle variabili CSS all'inizio di `public/styles.css`. Puoi facilmente modificare i colori cambiando i valori nella sezione `:root`.

### Contenuto

- Aggiorna le informazioni aziendali in `public/index.html`
- Modifica prezzi e descrizioni dei servizi
- Cambia i dettagli di contatto e l'area di servizio
- Aggiorna i link dei social media
- Modifica il numero WhatsApp in tutti i link

### Styling

- Modifica `public/styles.css` per cambiare il design
- Aggiungi animazioni personalizzate nel CSS
- Regola i breakpoint responsive secondo necessità

## Deployment

### Sviluppo Locale

```bash
npm run dev
```

### Produzione

```bash
npm start
```

### Variabili d'Ambiente

- `PORT`: Porta del server (default: 3000)

## Supporto Browser

- Chrome (ultima versione)
- Firefox (ultima versione)
- Safari (ultima versione)
- Edge (ultima versione)
- Browser mobili

## Tecnologie Utilizzate

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS Grid, Flexbox, CSS Variables
- **Icone**: Font Awesome
- **Font**: Google Fonts (Poppins)
- **Integrazione**: WhatsApp Business API

## Licenza

ISC License

## Supporto

Per supporto o domande, contatta il team di sviluppo.
