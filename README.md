# Amina's Piece - Handcrafted Crochet Website

A stunning parallax scrolling website showcasing handcrafted crochet artistry.

## Features

### ✨ Parallax Scrolling Effects
- **Multi-layer parallax backgrounds** with different scroll speeds
- **Element-based parallax** for images and text blocks
- **Smooth scroll animations** with fade-in effects
- **3D tilt effects** on image hover
- **Floating animated elements** (yarn balls)

### 🎨 Storytelling Through Scroll
- Hero section with dramatic entrance
- Sequential story sections revealing the craft
- Gallery showcase with staggered parallax
- Custom orders section with dark theme contrast
- Process timeline showing the journey
- Contact section with social links

### 🎯 Interactive Elements
- Smooth navigation with scroll indicators
- Hover effects on all interactive elements
- 3D transforms on images
- Mouse-tracking parallax on hero section
- Animated scroll indicators
- Responsive button interactions

### 📱 Responsive Design
- Mobile-friendly layout
- Adaptive grid systems
- Touch-friendly navigation
- Optimized for all screen sizes

## Mock Content Sections

1. **Hero Section** - Grand introduction with floating yarn elements
2. **The Art of Crochet** - Story section featuring hats
3. **Warmth & Style** - Cardigan showcase with reverse layout
4. **Our Collection** - 6-item gallery with different products:
   - Beanies
   - Scarves
   - Sweaters
   - Bags
   - Blankets
   - Accessories
5. **Custom Creations** - Dark-themed section for custom orders
6. **The Journey** - 4-step process timeline
7. **Contact** - Get in touch section

## Color Scheme

The website uses a warm, earthy palette inspired by natural yarn colors:
- Primary: `#D4A373` (Warm Tan)
- Secondary: `#8B6F47` (Rich Brown)
- Accent: `#E8C4A0` (Light Beige)
- Text Dark: `#2C2416`
- Text Light: `#F5F5F0`

## How to Use

1. Open `index.html` in a web browser
2. Scroll through the page to experience the parallax effects
3. Hover over images for 3D tilt effects
4. Try the navigation menu for smooth scrolling
5. Move your mouse around the hero section for interactive parallax

## Parallax Techniques Used

- **Speed-based parallax**: Elements move at different rates (data-speed attribute)
- **Opacity parallax**: Elements fade as you scroll
- **Mouse-tracking parallax**: Elements respond to cursor position
- **Intersection Observer**: Efficient scroll-triggered animations
- **Transform 3D**: Hardware-accelerated smooth animations
- **Throttling**: Optimized scroll event handling for performance

## Customization for Real Content

To replace mock images with real photos:
1. Replace the gradient backgrounds in CSS with actual images
2. Update the `.mock-image` classes with `background-image: url('path/to/image.jpg')`
3. Maintain the parallax data-speed attributes for effects
4. Update text content in HTML
5. Adjust colors in `:root` CSS variables

## Performance Optimizations

- Throttled scroll events (10ms)
- CSS transforms for hardware acceleration
- Intersection Observer for efficient viewport detection
- Smooth scroll with CSS `scroll-behavior`
- Optimized animations with `transform` and `opacity`

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox
- ES6 JavaScript
- Intersection Observer API

---

Built with ❤️ for Amina's Piece
