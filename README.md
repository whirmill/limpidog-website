# Snip & Shine - Mobile Pet Grooming Landing Page

A beautiful, responsive landing page for a mobile pet grooming service built with Express.js, featuring a modern design with a lilla and tiffany color palette.

## Features

- 🎨 Modern, responsive design with lilla and tiffany color palette
- 📱 Mobile-first approach with hamburger navigation
- 📝 Interactive booking and contact forms
- ✨ Smooth animations and hover effects
- 🎯 SEO-friendly structure
- 🚀 Fast loading with optimized assets

## Color Palette

- **Lilla Primary**: #8B5FBF
- **Lilla Light**: #B19CD9
- **Lilla Dark**: #6A4C93
- **Tiffany Primary**: #81D8D0
- **Tiffany Light**: #A8E6E0
- **Tiffany Dark**: #5BC0BE

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd snip-and-shine-website
```

2. Install dependencies:

```bash
npm install
# or
pnpm install
```

3. Start the development server:

```bash
npm run dev
# or
pnpm dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
snip-and-shine-website/
├── public/
│   ├── index.html          # Main HTML file
│   ├── styles.css          # CSS styles with lilla/tiffany palette
│   └── script.js           # JavaScript functionality
├── server.js               # Express server
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with nodemon
- `npm test` - Run tests (placeholder)

## Features Breakdown

### Frontend

- **Responsive Navigation**: Fixed navbar with mobile hamburger menu
- **Hero Section**: Eye-catching gradient background with call-to-action buttons
- **Services Section**: Grid layout showcasing grooming services with pricing
- **About Section**: Features highlighting the benefits of mobile grooming
- **Booking Form**: Interactive form for appointment scheduling
- **Contact Section**: Contact information and message form
- **Footer**: Links, social media, and company information

### Backend

- **Express Server**: Serves static files and handles form submissions
- **Form Endpoints**: `/contact` and `/book` endpoints for form processing
- **JSON Responses**: Proper API responses for form submissions

### Interactive Features

- Smooth scrolling navigation
- Form validation and submission
- Success/error message display
- Mobile menu toggle
- Scroll animations
- Hover effects
- Phone number formatting

## Customization

### Colors

The color palette is defined in CSS variables at the top of `public/styles.css`. You can easily modify the colors by changing the values in the `:root` section.

### Content

- Update the business information in `public/index.html`
- Modify service prices and descriptions
- Change contact details and service area
- Update social media links

### Styling

- Modify `public/styles.css` to change the design
- Add custom animations in the CSS
- Adjust responsive breakpoints as needed

## Deployment

### Local Development

```bash
npm run dev
```

### Production

```bash
npm start
```

### Environment Variables

- `PORT`: Server port (default: 3000)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS Grid, Flexbox, CSS Variables
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Poppins)

## License

ISC License

## Support

For support or questions, please contact the development team.
