# KORVN Portfolio - Complete Documentation

## Build a Professional Video Editor Portfolio with HTML, CSS & JavaScript

This documentation provides everything you need to recreate the KORVN portfolio website using pure HTML, CSS, and JavaScript - no frameworks required.

---

## 📁 Project Structure

```
korvn-portfolio/
├── index.html
├── css/
│   ├── style.css
│   ├── animations.css
│   └── responsive.css
├── js/
│   ├── main.js
│   ├── navbar.js
│   ├── portfolio.js
│   └── animations.js
├── assets/
│   ├── images/
│   │   ├── hero-bg.jpg
│   │   ├── profile.jpg
│   │   └── thumbnails/
│   ├── videos/
│   └── icons/
└── favicon.png
```

---

## 🎨 Design System

### Color Palette (CSS Variables)

```css
:root {
  /* Background Colors */
  --bg-primary: #0a0a0b;
  --bg-secondary: #111113;
  --bg-card: #161618;
  --bg-card-hover: #1a1a1d;
  
  /* Text Colors */
  --text-primary: #ffffff;
  --text-secondary: #a1a1aa;
  --text-muted: #71717a;
  
  /* Accent Colors */
  --gold: #d4af37;
  --gold-light: #f4d03f;
  --gold-dark: #b8960c;
  
  /* Gradients */
  --gradient-gold: linear-gradient(135deg, #d4af37 0%, #f4d03f 50%, #d4af37 100%);
  --gradient-dark: linear-gradient(180deg, #0a0a0b 0%, #111113 100%);
  
  /* Borders */
  --border-color: rgba(255, 255, 255, 0.1);
  --border-gold: rgba(212, 175, 55, 0.3);
  
  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 8px 24px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 16px 48px rgba(0, 0, 0, 0.5);
  --shadow-gold: 0 0 30px rgba(212, 175, 55, 0.2);
}
```

### Typography

```css
/* Font Imports */
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap');

:root {
  --font-heading: 'Sora', sans-serif;
  --font-display: 'Playfair Display', serif;
  --font-body: 'Inter', sans-serif;
}

/* Typography Scale */
h1 { font-size: clamp(2.5rem, 8vw, 5rem); }
h2 { font-size: clamp(2rem, 5vw, 3rem); }
h3 { font-size: clamp(1.25rem, 3vw, 1.75rem); }
p { font-size: clamp(0.875rem, 2vw, 1rem); }
```

---

## 📄 Complete HTML Structure

### index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>KORVN | Professional Video Editor</title>
  <meta name="description" content="Professional video editor specializing in cinematic storytelling, short-form content, motion graphics, and UGC ads.">
  
  <!-- Favicon -->
  <link rel="icon" href="favicon.png" type="image/png">
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- Stylesheets -->
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/animations.css">
  <link rel="stylesheet" href="css/responsive.css">
  
  <!-- Open Graph -->
  <meta property="og:title" content="KORVN | Professional Video Editor">
  <meta property="og:description" content="Turning raw footage into cinematic stories.">
  <meta property="og:type" content="website">
</head>
<body>
  <!-- Navigation -->
  <nav class="navbar" id="navbar">
    <div class="nav-container">
      <a href="#" class="logo">
        <span class="logo-text">KORVN</span>
      </a>
      
      <ul class="nav-menu" id="nav-menu">
        <li><a href="#about" class="nav-link">About</a></li>
        <li><a href="#experience" class="nav-link">Experience</a></li>
        <li><a href="#services" class="nav-link">Services</a></li>
        <li><a href="#portfolio" class="nav-link">Portfolio</a></li>
        <li><a href="#packages" class="nav-link">Packages</a></li>
        <li><a href="#contact" class="nav-link nav-cta">Get in Touch</a></li>
      </ul>
      
      <button class="hamburger" id="hamburger" aria-label="Toggle menu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero" id="hero">
    <div class="hero-bg">
      <div class="hero-overlay"></div>
      <div class="hero-particles" id="particles"></div>
    </div>
    
    <div class="hero-content">
      <p class="hero-subtitle animate-fade-up">Professional Video Editor</p>
      <h1 class="hero-title animate-fade-up delay-1">
        Turning Raw Footage Into
        <span class="text-gradient">Cinematic Stories</span>
      </h1>
      <p class="hero-description animate-fade-up delay-2">
        Specializing in YouTube content, short-form videos, motion graphics, 
        and high-converting UGC ads that captivate audiences.
      </p>
      <div class="hero-buttons animate-fade-up delay-3">
        <a href="#portfolio" class="btn btn-primary">View My Work</a>
        <a href="#contact" class="btn btn-secondary">Start a Project</a>
      </div>
      
      <div class="hero-stats animate-fade-up delay-4">
        <div class="stat">
          <span class="stat-number" data-count="50">0</span>+
          <span class="stat-label">Happy Clients</span>
        </div>
        <div class="stat">
          <span class="stat-number" data-count="200">0</span>+
          <span class="stat-label">Projects Completed</span>
        </div>
        <div class="stat">
          <span class="stat-number" data-count="1.5">0</span>+
          <span class="stat-label">Years Experience</span>
        </div>
      </div>
    </div>
    
    <a href="#about" class="scroll-indicator">
      <span class="scroll-text">Scroll Down</span>
      <span class="scroll-arrow">↓</span>
    </a>
  </section>

  <!-- About Section -->
  <section class="about" id="about">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">About Me</span>
        <h2 class="section-title">
          Crafting Visual <span class="text-gradient">Excellence</span>
        </h2>
      </div>
      
      <div class="about-grid">
        <div class="about-image">
          <div class="image-wrapper">
            <img src="assets/images/profile.jpg" alt="KORVN - Video Editor" loading="lazy">
            <div class="image-border"></div>
          </div>
        </div>
        
        <div class="about-content">
          <p class="about-text">
            I'm a professional video editor with a passion for transforming raw footage 
            into compelling visual narratives. With expertise in premiere pro, after effects, 
            and davinci resolve, I bring creative visions to life.
          </p>
          
          <div class="skills-grid">
            <div class="skill-item">
              <div class="skill-icon">🎬</div>
              <h4>Video Editing</h4>
              <p>Premiere Pro, DaVinci Resolve</p>
            </div>
            <div class="skill-item">
              <div class="skill-icon">✨</div>
              <h4>Motion Graphics</h4>
              <p>After Effects, Cinema 4D</p>
            </div>
            <div class="skill-item">
              <div class="skill-icon">🎨</div>
              <h4>Color Grading</h4>
              <p>Professional color correction</p>
            </div>
            <div class="skill-item">
              <div class="skill-icon">🔊</div>
              <h4>Sound Design</h4>
              <p>Audio mixing & mastering</p>
            </div>
          </div>
          
          <a href="#contact" class="btn btn-primary">Let's Work Together</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Experience Section -->
  <section class="experience" id="experience">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Experience</span>
        <h2 class="section-title">
          Professional <span class="text-gradient">Journey</span>
        </h2>
      </div>
      
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <span class="timeline-date">2023 - Present</span>
            <h3>Founder & Creative Lead</h3>
            <p class="timeline-company">KORVN Studios</p>
            <p>Leading creative direction for video projects, managing client relationships, 
            and delivering high-quality content for brands and creators.</p>
          </div>
        </div>
        
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <span class="timeline-date">2022 - 2023</span>
            <h3>Video Editor</h3>
            <p class="timeline-company">Freelance</p>
            <p>Worked with various clients on YouTube content, social media videos, 
            and advertising campaigns.</p>
          </div>
        </div>
        
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <span class="timeline-date">2022</span>
            <h3>Video Editing Certification</h3>
            <p class="timeline-company">Digital Dropout Academy</p>
            <p>Intensive training in professional video editing, motion graphics, 
            and content creation strategies.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section class="services" id="services">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Services</span>
        <h2 class="section-title">
          What I <span class="text-gradient">Offer</span>
        </h2>
      </div>
      
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon">📹</div>
          <h3>YouTube Video Editing</h3>
          <p>Long-form content editing with engaging pacing, transitions, 
          and retention-focused techniques.</p>
          <ul class="service-features">
            <li>Thumbnail-worthy moments</li>
            <li>Engaging intros & outros</li>
            <li>Custom graphics & text</li>
          </ul>
        </div>
        
        <div class="service-card featured">
          <div class="service-badge">Popular</div>
          <div class="service-icon">📱</div>
          <h3>Short-Form Content</h3>
          <p>TikTok, Reels, and Shorts optimized for maximum engagement 
          and viral potential.</p>
          <ul class="service-features">
            <li>Trending transitions</li>
            <li>Captions & subtitles</li>
            <li>Platform optimization</li>
          </ul>
        </div>
        
        <div class="service-card">
          <div class="service-icon">🎯</div>
          <h3>UGC Ads</h3>
          <p>High-converting user-generated content style ads for 
          brands and e-commerce.</p>
          <ul class="service-features">
            <li>Hook optimization</li>
            <li>Call-to-action editing</li>
            <li>A/B test versions</li>
          </ul>
        </div>
        
        <div class="service-card">
          <div class="service-icon">✨</div>
          <h3>Motion Graphics</h3>
          <p>Custom animations, intros, lower thirds, and visual effects 
          to elevate your content.</p>
          <ul class="service-features">
            <li>Logo animations</li>
            <li>Kinetic typography</li>
            <li>Visual effects</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Portfolio Section -->
  <section class="portfolio" id="portfolio">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Portfolio</span>
        <h2 class="section-title">
          Featured <span class="text-gradient">Work</span>
        </h2>
      </div>
      
      <!-- Portfolio Filter -->
      <div class="portfolio-filter">
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="youtube">YouTube</button>
        <button class="filter-btn" data-filter="reels">Reels</button>
        <button class="filter-btn" data-filter="ads">Ads</button>
      </div>
      
      <!-- Portfolio Grid -->
      <div class="portfolio-grid" id="portfolio-grid">
        <!-- YouTube Videos (16:9) -->
        <div class="portfolio-item youtube" data-category="youtube">
          <div class="portfolio-thumbnail ratio-16-9">
            <img src="assets/images/thumbnails/youtube-1.jpg" alt="YouTube Project 1" loading="lazy">
            <div class="portfolio-overlay">
              <button class="play-btn" data-video="VIDEO_URL_HERE">
                <span class="play-icon">▶</span>
              </button>
              <h4>Brand Documentary</h4>
              <p>YouTube • 15:00</p>
            </div>
          </div>
        </div>
        
        <div class="portfolio-item youtube" data-category="youtube">
          <div class="portfolio-thumbnail ratio-16-9">
            <img src="assets/images/thumbnails/youtube-2.jpg" alt="YouTube Project 2" loading="lazy">
            <div class="portfolio-overlay">
              <button class="play-btn" data-video="VIDEO_URL_HERE">
                <span class="play-icon">▶</span>
              </button>
              <h4>Product Review</h4>
              <p>YouTube • 12:30</p>
            </div>
          </div>
        </div>
        
        <!-- Reels (9:16) -->
        <div class="portfolio-item reels" data-category="reels">
          <div class="portfolio-thumbnail ratio-9-16">
            <img src="assets/images/thumbnails/reel-1.jpg" alt="Reel Project 1" loading="lazy">
            <div class="portfolio-overlay">
              <button class="play-btn" data-video="VIDEO_URL_HERE">
                <span class="play-icon">▶</span>
              </button>
              <h4>Lifestyle Reel</h4>
              <p>Instagram • 0:30</p>
            </div>
          </div>
        </div>
        
        <div class="portfolio-item reels" data-category="reels">
          <div class="portfolio-thumbnail ratio-9-16">
            <img src="assets/images/thumbnails/reel-2.jpg" alt="Reel Project 2" loading="lazy">
            <div class="portfolio-overlay">
              <button class="play-btn" data-video="VIDEO_URL_HERE">
                <span class="play-icon">▶</span>
              </button>
              <h4>Travel Montage</h4>
              <p>TikTok • 0:45</p>
            </div>
          </div>
        </div>
        
        <!-- Ads (9:16) -->
        <div class="portfolio-item ads" data-category="ads">
          <div class="portfolio-thumbnail ratio-9-16">
            <img src="assets/images/thumbnails/ad-1.jpg" alt="Ad Project 1" loading="lazy">
            <div class="portfolio-overlay">
              <button class="play-btn" data-video="VIDEO_URL_HERE">
                <span class="play-icon">▶</span>
              </button>
              <h4>Product Ad</h4>
              <p>UGC • 0:30</p>
            </div>
          </div>
        </div>
        
        <div class="portfolio-item ads" data-category="ads">
          <div class="portfolio-thumbnail ratio-9-16">
            <img src="assets/images/thumbnails/ad-2.jpg" alt="Ad Project 2" loading="lazy">
            <div class="portfolio-overlay">
              <button class="play-btn" data-video="VIDEO_URL_HERE">
                <span class="play-icon">▶</span>
              </button>
              <h4>Brand Campaign</h4>
              <p>UGC • 0:45</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Video Modal -->
  <div class="video-modal" id="video-modal">
    <div class="modal-overlay"></div>
    <div class="modal-content">
      <button class="modal-close" id="modal-close">×</button>
      <div class="video-container">
        <iframe id="video-iframe" src="" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>
  </div>

  <!-- Packages Section -->
  <section class="packages" id="packages">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Packages</span>
        <h2 class="section-title">
          Pricing <span class="text-gradient">Plans</span>
        </h2>
        <p class="section-description">
          Transparent pricing for every budget. All packages include revisions.
        </p>
      </div>
      
      <div class="packages-grid">
        <!-- Basic Package -->
        <div class="package-card">
          <div class="package-header">
            <h3>Basic</h3>
            <p class="package-description">Perfect for simple edits</p>
          </div>
          <div class="package-price">
            <span class="currency">$</span>
            <span class="amount">49</span>
            <span class="period">/video</span>
          </div>
          <ul class="package-features">
            <li><span class="check">✓</span> Up to 3 minutes</li>
            <li><span class="check">✓</span> Basic cuts & transitions</li>
            <li><span class="check">✓</span> Background music</li>
            <li><span class="check">✓</span> 2 revisions</li>
            <li><span class="check">✓</span> 1-day delivery</li>
          </ul>
          <a href="#contact" class="btn btn-secondary">Get Started</a>
        </div>
        
        <!-- Standard Package -->
        <div class="package-card featured">
          <div class="package-badge">Most Popular</div>
          <div class="package-header">
            <h3>Standard</h3>
            <p class="package-description">Great for content creators</p>
          </div>
          <div class="package-price">
            <span class="currency">$</span>
            <span class="amount">99</span>
            <span class="period">/video</span>
          </div>
          <ul class="package-features">
            <li><span class="check">✓</span> Up to 10 minutes</li>
            <li><span class="check">✓</span> Advanced transitions</li>
            <li><span class="check">✓</span> Motion graphics</li>
            <li><span class="check">✓</span> Color grading</li>
            <li><span class="check">✓</span> Sound design</li>
            <li><span class="check">✓</span> 3 revisions</li>
            <li><span class="check">✓</span> 2-3 day delivery</li>
          </ul>
          <a href="#contact" class="btn btn-primary">Get Started</a>
        </div>
        
        <!-- Premium Package -->
        <div class="package-card">
          <div class="package-header">
            <h3>Premium</h3>
            <p class="package-description">For brands & businesses</p>
          </div>
          <div class="package-price">
            <span class="currency">$</span>
            <span class="amount">199</span>
            <span class="period">/video</span>
          </div>
          <ul class="package-features">
            <li><span class="check">✓</span> Up to 20 minutes</li>
            <li><span class="check">✓</span> Cinematic editing</li>
            <li><span class="check">✓</span> Custom animations</li>
            <li><span class="check">✓</span> Advanced VFX</li>
            <li><span class="check">✓</span> Premium color grading</li>
            <li><span class="check">✓</span> Unlimited revisions</li>
            <li><span class="check">✓</span> 2-5 day delivery</li>
            <li><span class="check">✓</span> Priority support</li>
          </ul>
          <a href="#contact" class="btn btn-secondary">Get Started</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section class="contact" id="contact">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Contact</span>
        <h2 class="section-title">
          Let's <span class="text-gradient">Connect</span>
        </h2>
        <p class="section-description">
          Ready to bring your vision to life? Get in touch and let's create something amazing.
        </p>
      </div>
      
      <div class="contact-grid">
        <div class="contact-info">
          <div class="contact-item">
            <div class="contact-icon">📧</div>
            <div class="contact-details">
              <h4>Email</h4>
              <a href="mailto:hello@korvn.com">hello@korvn.com</a>
            </div>
          </div>
          
          <div class="contact-item">
            <div class="contact-icon">📱</div>
            <div class="contact-details">
              <h4>WhatsApp</h4>
              <a href="https://wa.me/1234567890">+1 (234) 567-890</a>
            </div>
          </div>
          
          <div class="contact-item">
            <div class="contact-icon">📍</div>
            <div class="contact-details">
              <h4>Location</h4>
              <p>Available Worldwide</p>
            </div>
          </div>
          
          <div class="social-links">
            <a href="#" class="social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="YouTube">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="Twitter">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <form class="contact-form" id="contact-form">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required placeholder="Your name">
          </div>
          
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required placeholder="your@email.com">
          </div>
          
          <div class="form-group">
            <label for="service">Service</label>
            <select id="service" name="service" required>
              <option value="">Select a service</option>
              <option value="youtube">YouTube Video Editing</option>
              <option value="shortform">Short-Form Content</option>
              <option value="ugc">UGC Ads</option>
              <option value="motion">Motion Graphics</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div class="form-group">
            <label for="budget">Budget</label>
            <select id="budget" name="budget">
              <option value="">Select your budget</option>
              <option value="basic">$49 - Basic</option>
              <option value="standard">$99 - Standard</option>
              <option value="premium">$199 - Premium</option>
              <option value="custom">Custom Project</option>
            </select>
          </div>
          
          <div class="form-group full-width">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="5" required placeholder="Tell me about your project..."></textarea>
          </div>
          
          <button type="submit" class="btn btn-primary full-width">Send Message</button>
        </form>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <a href="#" class="logo">KORVN</a>
          <p>Turning raw footage into cinematic stories.</p>
        </div>
        
        <div class="footer-links">
          <div class="footer-column">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#packages">Packages</a></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">YouTube Editing</a></li>
              <li><a href="#services">Short-Form</a></li>
              <li><a href="#services">UGC Ads</a></li>
              <li><a href="#services">Motion Graphics</a></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h4>Connect</h4>
            <ul>
              <li><a href="mailto:hello@korvn.com">Email</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">YouTube</a></li>
              <li><a href="#">Twitter</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2024 KORVN. All rights reserved.</p>
        <p>Designed & Developed with ❤️</p>
      </div>
    </div>
  </footer>

  <!-- Scripts -->
  <script src="js/main.js"></script>
  <script src="js/navbar.js"></script>
  <script src="js/portfolio.js"></script>
  <script src="js/animations.js"></script>
</body>
</html>
```

---

## 🎨 Complete CSS

### css/style.css

```css
/* ========================================
   BASE STYLES
======================================== */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  /* Colors */
  --bg-primary: #0a0a0b;
  --bg-secondary: #111113;
  --bg-card: #161618;
  --bg-card-hover: #1a1a1d;
  
  --text-primary: #ffffff;
  --text-secondary: #a1a1aa;
  --text-muted: #71717a;
  
  --gold: #d4af37;
  --gold-light: #f4d03f;
  --gold-dark: #b8960c;
  
  --border-color: rgba(255, 255, 255, 0.1);
  --border-gold: rgba(212, 175, 55, 0.3);
  
  /* Typography */
  --font-heading: 'Sora', sans-serif;
  --font-display: 'Playfair Display', serif;
  --font-body: 'Inter', sans-serif;
  
  /* Spacing */
  --section-padding: clamp(4rem, 10vw, 8rem);
  --container-padding: clamp(1rem, 5vw, 2rem);
  
  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
  --transition-slow: 0.5s ease;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  background-color: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 600;
  line-height: 1.2;
}

.text-gradient {
  background: linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 50%, var(--gold) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-tag {
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--gold);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
}

.section-title {
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 1rem;
}

.section-description {
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 2rem;
  font-family: var(--font-heading);
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  border-radius: 0.5rem;
  transition: all var(--transition-normal);
  cursor: pointer;
  border: none;
}

.btn-primary {
  background: linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%);
  color: #000;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
}

.btn-secondary {
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}

.btn-secondary:hover {
  border-color: var(--gold);
  color: var(--gold);
}

/* ========================================
   NAVBAR
======================================== */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 0;
  background: transparent;
  transition: all var(--transition-normal);
}

.navbar.scrolled {
  background: rgba(10, 10, 11, 0.9);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-color);
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  text-decoration: none;
  letter-spacing: 0.1em;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
}

.nav-link {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.nav-link:hover {
  color: var(--text-primary);
}

.nav-cta {
  padding: 0.625rem 1.25rem;
  background: linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%);
  color: #000 !important;
  border-radius: 0.375rem;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.bar {
  width: 25px;
  height: 2px;
  background: var(--text-primary);
  transition: all var(--transition-normal);
}

/* ========================================
   HERO SECTION
======================================== */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: -1;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(10, 10, 11, 0.3) 0%,
    rgba(10, 10, 11, 0.8) 50%,
    rgba(10, 10, 11, 1) 100%
  );
}

.hero-content {
  text-align: center;
  max-width: 900px;
  padding: 0 2rem;
}

.hero-subtitle {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--gold);
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-bottom: 1.5rem;
}

.hero-title {
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.hero-description {
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 2rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 4rem;
}

.hero-stats {
  display: flex;
  gap: 3rem;
  justify-content: center;
  flex-wrap: wrap;
}

.stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--gold);
}

.stat-label {
  display: block;
  font-size: 0.875rem;
  color: var(--text-muted);
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.75rem;
  animation: float 2s ease-in-out infinite;
}

/* ========================================
   ABOUT SECTION
======================================== */
.about {
  padding: var(--section-padding) 0;
  background: var(--bg-secondary);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  align-items: center;
}

.about-image {
  position: relative;
}

.image-wrapper {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
}

.image-wrapper img {
  width: 100%;
  height: auto;
  display: block;
}

.image-border {
  position: absolute;
  inset: -10px;
  border: 2px solid var(--gold);
  border-radius: 1rem;
  opacity: 0.3;
  z-index: -1;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.about-text {
  font-size: 1.125rem;
  color: var(--text-secondary);
  line-height: 1.8;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.skill-item {
  padding: 1.5rem;
  background: var(--bg-card);
  border-radius: 0.75rem;
  border: 1px solid var(--border-color);
  transition: all var(--transition-normal);
}

.skill-item:hover {
  border-color: var(--border-gold);
  transform: translateY(-4px);
}

.skill-icon {
  font-size: 2rem;
  margin-bottom: 0.75rem;
}

.skill-item h4 {
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

.skill-item p {
  font-size: 0.875rem;
  color: var(--text-muted);
}

/* ========================================
   EXPERIENCE SECTION
======================================== */
.experience {
  padding: var(--section-padding) 0;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, var(--gold) 0%, transparent 100%);
}

.timeline-item {
  position: relative;
  padding-bottom: 3rem;
  padding-left: 2rem;
}

.timeline-marker {
  position: absolute;
  left: -2rem;
  top: 0;
  width: 12px;
  height: 12px;
  background: var(--gold);
  border-radius: 50%;
  transform: translateX(-5px);
}

.timeline-content {
  background: var(--bg-card);
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid var(--border-color);
}

.timeline-date {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--gold);
  background: rgba(212, 175, 55, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  margin-bottom: 0.75rem;
}

.timeline-content h3 {
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
}

.timeline-company {
  font-size: 0.875rem;
  color: var(--text-muted);
  margin-bottom: 0.75rem;
}

.timeline-content p:last-child {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

/* ========================================
   SERVICES SECTION
======================================== */
.services {
  padding: var(--section-padding) 0;
  background: var(--bg-secondary);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.service-card {
  position: relative;
  padding: 2rem;
  background: var(--bg-card);
  border-radius: 1rem;
  border: 1px solid var(--border-color);
  transition: all var(--transition-normal);
}

.service-card:hover {
  border-color: var(--border-gold);
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.service-card.featured {
  border-color: var(--gold);
  background: linear-gradient(180deg, rgba(212, 175, 55, 0.1) 0%, var(--bg-card) 100%);
}

.service-badge {
  position: absolute;
  top: -10px;
  right: 20px;
  padding: 0.25rem 0.75rem;
  background: var(--gold);
  color: #000;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 1rem;
}

.service-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.service-card h3 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
}

.service-card > p {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.service-features {
  list-style: none;
}

.service-features li {
  position: relative;
  padding-left: 1.5rem;
  font-size: 0.875rem;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
}

.service-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--gold);
}

/* ========================================
   PORTFOLIO SECTION
======================================== */
.portfolio {
  padding: var(--section-padding) 0;
}

.portfolio-filter {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.5rem 1.5rem;
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  font-family: var(--font-heading);
  font-size: 0.875rem;
  border-radius: 2rem;
  cursor: pointer;
  transition: all var(--transition-normal);
}

.filter-btn:hover,
.filter-btn.active {
  border-color: var(--gold);
  color: var(--gold);
  background: rgba(212, 175, 55, 0.1);
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.portfolio-item {
  transition: all var(--transition-normal);
}

.portfolio-item.hidden {
  display: none;
}

.portfolio-thumbnail {
  position: relative;
  border-radius: 0.75rem;
  overflow: hidden;
  cursor: pointer;
}

.portfolio-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.portfolio-thumbnail:hover img {
  transform: scale(1.05);
}

.portfolio-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.portfolio-thumbnail:hover .portfolio-overlay {
  opacity: 1;
}

.play-btn {
  width: 60px;
  height: 60px;
  background: var(--gold);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: transform var(--transition-normal);
}

.play-btn:hover {
  transform: scale(1.1);
}

.play-icon {
  font-size: 1.5rem;
  color: #000;
  margin-left: 4px;
}

.portfolio-overlay h4 {
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

.portfolio-overlay p {
  font-size: 0.875rem;
  color: var(--text-muted);
}

/* Aspect Ratios */
.ratio-16-9 {
  aspect-ratio: 16 / 9;
}

.ratio-9-16 {
  aspect-ratio: 9 / 16;
  max-width: 250px;
  margin: 0 auto;
}

/* Video Modal */
.video-modal {
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: none;
  align-items: center;
  justify-content: center;
}

.video-modal.active {
  display: flex;
}

.modal-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
}

.modal-content {
  position: relative;
  width: 90%;
  max-width: 900px;
  z-index: 1;
}

.modal-close {
  position: absolute;
  top: -40px;
  right: 0;
  width: 40px;
  height: 40px;
  background: var(--gold);
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  color: #000;
}

.video-container {
  position: relative;
  padding-bottom: 56.25%;
  background: #000;
  border-radius: 0.5rem;
  overflow: hidden;
}

.video-container iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

/* ========================================
   PACKAGES SECTION
======================================== */
.packages {
  padding: var(--section-padding) 0;
  background: var(--bg-secondary);
}

.packages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.package-card {
  position: relative;
  padding: 2.5rem;
  background: var(--bg-card);
  border-radius: 1rem;
  border: 1px solid var(--border-color);
  text-align: center;
  transition: all var(--transition-normal);
}

.package-card:hover {
  transform: translateY(-8px);
  border-color: var(--border-gold);
}

.package-card.featured {
  border-color: var(--gold);
  background: linear-gradient(180deg, rgba(212, 175, 55, 0.1) 0%, var(--bg-card) 100%);
  transform: scale(1.05);
}

.package-card.featured:hover {
  transform: scale(1.05) translateY(-8px);
}

.package-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.375rem 1rem;
  background: var(--gold);
  color: #000;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 1rem;
  white-space: nowrap;
}

.package-header h3 {
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
}

.package-description {
  font-size: 0.875rem;
  color: var(--text-muted);
}

.package-price {
  padding: 2rem 0;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 1.5rem;
}

.currency {
  font-size: 1.5rem;
  color: var(--text-muted);
  vertical-align: top;
}

.amount {
  font-family: var(--font-heading);
  font-size: 4rem;
  font-weight: 700;
  color: var(--gold);
}

.period {
  font-size: 0.875rem;
  color: var(--text-muted);
}

.package-features {
  list-style: none;
  text-align: left;
  margin-bottom: 2rem;
}

.package-features li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 0;
  font-size: 0.875rem;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--border-color);
}

.package-features li:last-child {
  border-bottom: none;
}

.check {
  color: var(--gold);
  font-weight: bold;
}

/* ========================================
   CONTACT SECTION
======================================== */
.contact {
  padding: var(--section-padding) 0;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.contact-icon {
  font-size: 1.5rem;
}

.contact-details h4 {
  font-size: 0.875rem;
  color: var(--text-muted);
  margin-bottom: 0.25rem;
}

.contact-details a,
.contact-details p {
  font-size: 1rem;
  color: var(--text-primary);
  text-decoration: none;
}

.contact-details a:hover {
  color: var(--gold);
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-link {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 50%;
  color: var(--text-secondary);
  transition: all var(--transition-normal);
}

.social-link:hover {
  border-color: var(--gold);
  color: var(--gold);
  transform: translateY(-4px);
}

.contact-form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group.full-width {
  grid-column: span 2;
}

.form-group label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-secondary);
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 0.875rem 1rem;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;
  color: var(--text-primary);
  font-family: var(--font-body);
  font-size: 1rem;
  transition: border-color var(--transition-fast);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--gold);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

/* ========================================
   FOOTER
======================================== */
.footer {
  padding: 4rem 0 2rem;
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  margin-bottom: 3rem;
}

.footer-brand .logo {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  display: block;
}

.footer-brand p {
  color: var(--text-muted);
  font-size: 0.875rem;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.footer-column h4 {
  font-size: 0.875rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

.footer-column ul {
  list-style: none;
}

.footer-column li {
  margin-bottom: 0.75rem;
}

.footer-column a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.875rem;
  transition: color var(--transition-fast);
}

.footer-column a:hover {
  color: var(--gold);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
}

.footer-bottom p {
  font-size: 0.875rem;
  color: var(--text-muted);
}
```

### css/animations.css

```css
/* ========================================
   ANIMATIONS
======================================== */

/* Keyframes */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(-50%);
  }
  50% {
    transform: translateY(-10px) translateX(-50%);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

/* Animation Classes */
.animate-fade-up {
  opacity: 0;
  animation: fadeUp 0.8s ease forwards;
}

.delay-1 { animation-delay: 0.1s; }
.delay-2 { animation-delay: 0.2s; }
.delay-3 { animation-delay: 0.3s; }
.delay-4 { animation-delay: 0.4s; }
.delay-5 { animation-delay: 0.5s; }

/* Scroll Animations */
.reveal {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

/* Hover Effects */
.hover-lift {
  transition: transform var(--transition-normal);
}

.hover-lift:hover {
  transform: translateY(-8px);
}

.hover-glow:hover {
  box-shadow: 0 0 30px rgba(212, 175, 55, 0.2);
}

/* Loading Animation */
.loading {
  background: linear-gradient(
    90deg,
    var(--bg-card) 0%,
    var(--bg-card-hover) 50%,
    var(--bg-card) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

/* Counter Animation */
.count-up {
  transition: all 0.3s ease;
}
```

### css/responsive.css

```css
/* ========================================
   RESPONSIVE DESIGN
======================================== */

/* Tablet */
@media (max-width: 1024px) {
  .about-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .about-image {
    max-width: 400px;
    margin: 0 auto;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

/* Mobile */
@media (max-width: 768px) {
  /* Navigation */
  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100vh;
    background: var(--bg-primary);
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    transition: right var(--transition-normal);
  }
  
  .nav-menu.active {
    right: 0;
  }
  
  .nav-link {
    font-size: 1.5rem;
  }
  
  .hamburger {
    display: flex;
    z-index: 1001;
  }
  
  .hamburger.active .bar:nth-child(1) {
    transform: rotate(45deg) translate(5px, 6px);
  }
  
  .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }
  
  .hamburger.active .bar:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -6px);
  }
  
  /* Hero */
  .hero-stats {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    width: 100%;
  }
  
  .hero-buttons .btn {
    width: 100%;
  }
  
  /* Skills Grid */
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  /* Services */
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  /* Portfolio */
  .portfolio-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .ratio-9-16 {
    max-width: 100%;
  }
  
  /* Packages */
  .packages-grid {
    grid-template-columns: 1fr;
  }
  
  .package-card.featured {
    transform: none;
  }
  
  /* Contact Form */
  .contact-form {
    grid-template-columns: 1fr;
  }
  
  .form-group.full-width {
    grid-column: span 1;
  }
  
  /* Footer */
  .footer-links {
    grid-template-columns: 1fr 1fr;
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}

/* Small Mobile */
@media (max-width: 480px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
  }
  
  .footer-links {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .social-links {
    justify-content: center;
  }
}
```

---

## 📜 JavaScript Files

### js/main.js

```javascript
// ========================================
// MAIN JAVASCRIPT
// ========================================

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all modules
  initScrollReveal();
  initCounterAnimation();
  initSmoothScroll();
  initFormHandler();
});

// Scroll Reveal Animation
function initScrollReveal() {
  const reveals = document.querySelectorAll('.section-header, .about-grid, .timeline-item, .service-card, .portfolio-item, .package-card, .contact-grid');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal', 'active');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  reveals.forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

// Counter Animation for Stats
function initCounterAnimation() {
  const counters = document.querySelectorAll('[data-count]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseFloat(counter.dataset.count);
        const duration = 2000;
        const start = 0;
        const startTime = performance.now();
        
        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeOutQuad = 1 - (1 - progress) * (1 - progress);
          const current = start + (target - start) * easeOutQuad;
          
          if (target % 1 !== 0) {
            counter.textContent = current.toFixed(1);
          } else {
            counter.textContent = Math.floor(current);
          }
          
          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          }
        }
        
        requestAnimationFrame(updateCounter);
        observer.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(counter => observer.observe(counter));
}

// Smooth Scroll for Anchor Links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Form Handler
function initFormHandler() {
  const form = document.getElementById('contact-form');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      
      // Simple validation
      if (!data.name || !data.email || !data.message) {
        showNotification('Please fill in all required fields.', 'error');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
      }
      
      // Simulate form submission
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      
      // Simulate API call
      setTimeout(() => {
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        form.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 1500);
    });
  }
}

// Notification System
function showNotification(message, type = 'info') {
  // Remove existing notifications
  const existing = document.querySelector('.notification');
  if (existing) existing.remove();
  
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <span>${message}</span>
    <button class="notification-close">&times;</button>
  `;
  
  // Styles
  notification.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    padding: 1rem 1.5rem;
    background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
    color: white;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    z-index: 3000;
    animation: slideIn 0.3s ease;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  `;
  
  document.body.appendChild(notification);
  
  // Close button
  notification.querySelector('.notification-close').addEventListener('click', () => {
    notification.remove();
  });
  
  // Auto remove after 5 seconds
  setTimeout(() => notification.remove(), 5000);
}

// Add notification animation
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  .notification-close {
    background: none;
    border: none;
    color: white;
    font-size: 1.25rem;
    cursor: pointer;
    opacity: 0.7;
  }
  .notification-close:hover {
    opacity: 1;
  }
`;
document.head.appendChild(style);
```

### js/navbar.js

```javascript
// ========================================
// NAVBAR JAVASCRIPT
// ========================================

document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Scroll Effect
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class when not at top
    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    // Hide/show navbar on scroll (optional)
    if (currentScroll > lastScroll && currentScroll > 500) {
      navbar.style.transform = 'translateY(-100%)';
    } else {
      navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
  });
  
  // Mobile Menu Toggle
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
  });
  
  // Close menu when clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
  
  // Active link highlighting
  const sections = document.querySelectorAll('section[id]');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      
      if (window.pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});
```

### js/portfolio.js

```javascript
// ========================================
// PORTFOLIO JAVASCRIPT
// ========================================

document.addEventListener('DOMContentLoaded', function() {
  initPortfolioFilter();
  initVideoModal();
});

// Portfolio Filter
function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.dataset.filter;
      
      // Filter items with animation
      portfolioItems.forEach(item => {
        const category = item.dataset.category;
        
        if (filter === 'all' || category === filter) {
          item.classList.remove('hidden');
          item.style.animation = 'fadeUp 0.5s ease forwards';
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
}

// Video Modal
function initVideoModal() {
  const modal = document.getElementById('video-modal');
  const modalClose = document.getElementById('modal-close');
  const videoIframe = document.getElementById('video-iframe');
  const playBtns = document.querySelectorAll('.play-btn');
  
  playBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const videoUrl = btn.dataset.video;
      
      if (videoUrl && videoUrl !== 'VIDEO_URL_HERE') {
        // Convert YouTube URL to embed format
        let embedUrl = videoUrl;
        if (videoUrl.includes('youtube.com/watch')) {
          const videoId = new URL(videoUrl).searchParams.get('v');
          embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        } else if (videoUrl.includes('youtu.be/')) {
          const videoId = videoUrl.split('youtu.be/')[1];
          embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        }
        
        videoIframe.src = embedUrl;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      } else {
        // Demo: Show placeholder
        alert('Video URL not configured. Replace VIDEO_URL_HERE with actual video URLs.');
      }
    });
  });
  
  // Close modal
  function closeModal() {
    modal.classList.remove('active');
    videoIframe.src = '';
    document.body.style.overflow = '';
  }
  
  modalClose.addEventListener('click', closeModal);
  
  modal.querySelector('.modal-overlay').addEventListener('click', closeModal);
  
  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}
```

### js/animations.js

```javascript
// ========================================
// ANIMATIONS JAVASCRIPT
// ========================================

document.addEventListener('DOMContentLoaded', function() {
  initParallax();
  initCursorEffect();
});

// Parallax Effect for Hero
function initParallax() {
  const hero = document.querySelector('.hero');
  
  if (hero) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const heroContent = hero.querySelector('.hero-content');
      
      if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled / (window.innerHeight * 0.8));
      }
    });
  }
}

// Custom Cursor Effect (Optional - Desktop Only)
function initCursorEffect() {
  if (window.innerWidth < 1024) return;
  
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  cursor.innerHTML = '<div class="cursor-dot"></div><div class="cursor-outline"></div>';
  document.body.appendChild(cursor);
  
  const dot = cursor.querySelector('.cursor-dot');
  const outline = cursor.querySelector('.cursor-outline');
  
  // Cursor styles
  const style = document.createElement('style');
  style.textContent = `
    .custom-cursor {
      pointer-events: none;
      position: fixed;
      z-index: 9999;
    }
    .cursor-dot {
      position: fixed;
      width: 8px;
      height: 8px;
      background: var(--gold);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      transition: transform 0.1s ease;
    }
    .cursor-outline {
      position: fixed;
      width: 40px;
      height: 40px;
      border: 1px solid var(--gold);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.15s ease;
      opacity: 0.5;
    }
    .cursor-hover .cursor-dot {
      transform: translate(-50%, -50%) scale(2);
    }
    .cursor-hover .cursor-outline {
      transform: translate(-50%, -50%) scale(1.5);
      opacity: 1;
    }
    a, button, .portfolio-thumbnail {
      cursor: none;
    }
  `;
  document.head.appendChild(style);
  
  let mouseX = 0, mouseY = 0;
  let outlineX = 0, outlineY = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
  });
  
  // Smooth outline following
  function animateOutline() {
    outlineX += (mouseX - outlineX) * 0.15;
    outlineY += (mouseY - outlineY) * 0.15;
    
    outline.style.left = outlineX + 'px';
    outline.style.top = outlineY + 'px';
    
    requestAnimationFrame(animateOutline);
  }
  animateOutline();
  
  // Hover effect on interactive elements
  const interactives = document.querySelectorAll('a, button, .portfolio-thumbnail');
  
  interactives.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
  });
}
```

---

## 🚀 Deployment Guide

### Option 1: GitHub Pages (Free)

1. Create a GitHub repository
2. Push your code to the repository
3. Go to Settings → Pages
4. Select "Deploy from a branch" → main → /root
5. Your site will be live at `username.github.io/repository-name`

### Option 2: Netlify (Recommended)

1. Create a Netlify account
2. Drag & drop your project folder
3. Your site is instantly deployed with a custom subdomain
4. Connect a custom domain if needed

### Option 3: Vercel

1. Create a Vercel account
2. Import your GitHub repository
3. Vercel automatically detects static site
4. Deploy with one click

---

## 📋 Customization Checklist

- [ ] Replace `VIDEO_URL_HERE` with actual video URLs
- [ ] Add your profile image to `assets/images/profile.jpg`
- [ ] Add portfolio thumbnails to `assets/images/thumbnails/`
- [ ] Update contact email and social links
- [ ] Customize color palette in CSS variables
- [ ] Update pricing and packages
- [ ] Add your actual experience/timeline
- [ ] Connect a form backend (Formspree, Netlify Forms, etc.)

---

## 🔗 Useful Resources

- [Google Fonts](https://fonts.google.com/) - Typography
- [Formspree](https://formspree.io/) - Form backend
- [Cloudinary](https://cloudinary.com/) - Image hosting
- [Vimeo/YouTube](https://youtube.com/) - Video hosting
- [Unsplash](https://unsplash.com/) - Free stock images
- [Lucide Icons](https://lucide.dev/) - SVG icons

---

## 📝 License

This documentation and code structure is free to use for personal and commercial projects.

---

**Built with ❤️ for creators who want clean, professional portfolios.**
