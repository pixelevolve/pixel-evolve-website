# PixelEvolve Website Design PRD

**Version**: 1.1  
**Date**: December 2025  
**Status**: Design Planning (Iterated Version)

---

## Version History

| Version | Date | Major Changes |
|---------|------|---------------|
| 1.0 | Dec 2025 | Initial version |
| 1.1 | Dec 2025 | Logo upgrade, pricing optimization, trust signals, SEO enhancements |

### V1.1 Change Summary

1. **Logo Redesign** - Upgraded from "pixel arrow" to "The Morph" concept
2. **Pricing Optimization** - Added $19 Basic tier to reduce conversion friction
3. **Trust Signals** - Added "Engineered in Stockholm" badge
4. **FAQ Enhancement** - Added SEO-related questions
5. **Technical SEO** - Added sitemap, JSON-LD, Cookie Banner requirements

---

## 1. Brand Design

### 1.1 Brand Name Interpretation

**PixelEvolve** = Pixel + Evolve

| Element | Meaning | Brand Association |
|---------|---------|-------------------|
| Pixel | The smallest unit of the digital world, raw data | Technology, precision, rigid input |
| Evolve | Evolution, transformation, growth | Intelligence, fluidity, organic experience |
| Combined | From rigid to fluid evolution | AI transforms rigid input into smooth localized experiences |

**Brand Tagline**: *"From rigid pixels to organic experiences."*

### 1.2 Logo Design

#### Primary Logo Concept: The Morph

```
Design Philosophy:
- Represents the evolution from "rigid technology" to "fluid intelligence"
- Left: Square pixel block → Middle: Rounded transition → Right: Perfect circle
- Color gradient from deep blue (technology/Pixel) to vibrant teal (vitality/Evolve)

Visual Representation:

  ┌────┐     ╭────╮       ●
  │    │  →  │    │  →   ⬤   →
  │    │     ╰────╯      
  └────┘
  
  Square     Rounded     Circle    Arrow
  #1e40af    #3b82f6    #10b981   (pointing forward)
  
  Pixel      Transition  Evolve    Growth
  (Origin)   (Transform) (Evolved) (Continuous)
```

#### Logo Variants

| Variant | Use Case | Description |
|---------|----------|-------------|
| **Primary Logo** | Icon + "PixelEvolve" text | Website header, business cards |
| **Icon Logo** | Morph icon only | Favicon, app icon, social avatar |
| **Simplified Logo** | Square + circle (skip transition) | Very small sizes |
| **Dark Background** | White/light version | Footer, dark sections |
| **Monochrome** | Pure black or white | Print, special cases |

#### Logo Specifications

```
Primary Logo (icon + text):
┌──────────────────────────────────────────┐
│  [■ ▢ ● →]  PixelEvolve                  │
│   40px        text height 24px            │
└──────────────────────────────────────────┘

Minimum Size:
- Primary Logo: width no less than 140px
- Icon Logo: no less than 32px × 32px (ensure all three shapes are recognizable)

Safe Space:
- Minimum clearance around logo: 25% of logo height

Animation Suggestions (V2):
- Hover: Square → rounded → circle appear sequentially
- Loading: Evolution process animation
```

### 1.3 Color System

#### Primary Colors (V1.1 Updated)

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Primary Blue** | `#3b82f6` | 59, 130, 246 | Primary buttons, links, emphasis |
| **Primary Dark** | `#1e40af` | 30, 64, 175 | Logo start, dark emphasis, hover states |
| **Primary Light** | `#60a5fa` | 96, 165, 250 | Light backgrounds, icons |
| **Evolve Teal** | `#10b981` | 16, 185, 129 | **V1.1 New** Logo endpoint, success states, CTA emphasis |

#### Gradients (V1.1 Updated)

```css
/* Primary Gradient - Logo gradient (represents evolution) */
.logo-gradient {
  background: linear-gradient(90deg, #1e40af 0%, #3b82f6 50%, #10b981 100%);
}

/* Hero Background Gradient */
.hero-gradient {
  background: linear-gradient(135deg, #f8fafc 0%, #eff6ff 50%, #ecfdf5 100%);
}

/* CTA Button Gradient (optional) */
.cta-gradient {
  background: linear-gradient(90deg, #3b82f6 0%, #10b981 100%);
}
```

#### Neutral Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Gray 900** | `#111827` | Primary text |
| **Gray 700** | `#374151` | Heading text |
| **Gray 600** | `#4b5563` | Secondary text |
| **Gray 400** | `#9ca3af` | Placeholder, disabled states |
| **Gray 100** | `#f3f4f6` | Backgrounds, dividers |
| **White** | `#ffffff` | Card backgrounds, main background |

#### Functional Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Success** | `#10b981` | Success states, completion (unified with Evolve Teal) |
| **Warning** | `#f59e0b` | Warnings, attention |
| **Error** | `#ef4444` | Errors, dangerous actions |
| **Info** | `#3b82f6` | Information tips |

### 1.4 Typography System

#### Font Selection

| Usage | Font | Fallback |
|-------|------|----------|
| **Headings** | Inter | -apple-system, BlinkMacSystemFont, sans-serif |
| **Body** | Inter | -apple-system, BlinkMacSystemFont, sans-serif |
| **Code** | JetBrains Mono | Fira Code, monospace |

#### Typography Scale

| Level | Size | Line Height | Weight | Usage |
|-------|------|-------------|--------|-------|
| H1 | 48px / 3rem | 1.2 | 700 | Page main title |
| H2 | 36px / 2.25rem | 1.3 | 700 | Section titles |
| H3 | 24px / 1.5rem | 1.4 | 600 | Card titles |
| H4 | 20px / 1.25rem | 1.4 | 600 | Subtitles |
| Body Large | 18px / 1.125rem | 1.6 | 400 | Important body text |
| Body | 16px / 1rem | 1.6 | 400 | Body text |
| Small | 14px / 0.875rem | 1.5 | 400 | Helper text |
| Caption | 12px / 0.75rem | 1.5 | 400 | Annotations, labels |

### 1.5 Component Specifications

#### Buttons

```
Primary Button:
┌─────────────────────────┐
│     Button Text         │  Background: #3b82f6 or gradient
│                         │  Text: #ffffff
└─────────────────────────┘  Border radius: 8px
                             Padding: 12px 24px
                             Hover: #1e40af
                             
Primary Button - Evolve variant (for final CTAs):
┌─────────────────────────┐
│     Button Text         │  Background: #10b981
│                         │  Text: #ffffff
└─────────────────────────┘  Hover: #059669

Secondary Button:
┌─────────────────────────┐
│     Button Text         │  Background: transparent
│                         │  Border: #3b82f6
└─────────────────────────┘  Text: #3b82f6
                             Hover background: #eff6ff
```

#### Cards

```
Standard Card:
┌─────────────────────────────────┐
│                                 │  Background: #ffffff
│  Card Content                   │  Border radius: 12px
│                                 │  Shadow: 0 4px 6px rgba(0,0,0,0.05)
└─────────────────────────────────┘  Padding: 24px
                                     Hover shadow: 0 10px 20px rgba(0,0,0,0.1)

Highlighted Card (for recommended pricing):
┌─────────────────────────────────┐
│                                 │  Border: 2px solid #10b981
│  Card Content                   │  Shadow: 0 8px 16px rgba(16,185,129,0.15)
│                                 │
└─────────────────────────────────┘
```

#### Trust Badges

```
┌─────────────────────────────────┐
│  🇸🇪 Engineered in Stockholm    │  Background: #f8fafc
│                                 │  Border: 1px solid #e5e7eb
└─────────────────────────────────┘  Border radius: 20px (pill shape)
                                     Font: Small, Gray 600

┌─────────────────────────────────┐
│  ✓ Built for Shopify            │  Same styling as above
└─────────────────────────────────┘
```

---

## 2. Company Homepage Design (pixel-evolve.com)

### 2.1 Page Goals

| Goal | Priority | Metric |
|------|----------|--------|
| Establish professional, trustworthy company image | P0 | Visitor trust |
| Guide users to learn about products | P0 | Product link click rate |
| Convey "Swedish quality" trust signal | P0 | **V1.1 New** |
| Provide necessary company information | P1 | Compliance requirements |

### 2.2 Page Structure

```
pixel-evolve.com
├── Header (Navigation)
├── Hero Section (Main visual)
├── Products Section (Product showcase)
├── Trust Section (Trust signals) [V1.1 New]
├── Footer
└── Legal Pages
    ├── /privacy (Privacy Policy)
    └── /terms (Terms of Service)
```

### 2.3 Detailed Design

#### 2.3.1 Header

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  [■▢●→] PixelEvolve          Products    About    Contact           │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘

Specifications:
- Height: 64px
- Background: White (add shadow on scroll: box-shadow: 0 1px 3px rgba(0,0,0,0.1))
- Logo: Left side, using The Morph icon
- Navigation: Right side
- Mobile: Hamburger menu

Navigation Items:
- Products → Scroll to products section
- About → Scroll to trust section
- Contact → mailto:hello@pixel-evolve.com
```

#### 2.3.2 Hero Section

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                     [■ → ▢ → ● →]                                   │
│                       (Logo animation)                               │
│                                                                     │
│                       PixelEvolve                                   │
│                                                                     │
│            Building tools that help e-commerce                      │
│                   businesses grow globally                          │
│                                                                     │
│            ┌─────────────────────────────────────┐                  │
│            │ 🇸🇪 Engineered in Stockholm          │                  │
│            └─────────────────────────────────────┘                  │
│                                                                     │
│                   [Explore Our Products ↓]                          │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘

Specifications:
- Height: 100vh (full screen) or min 600px
- Background: Light gradient (#f8fafc → #eff6ff → #ecfdf5)
- Logo icon: Centered, 64px, with evolution animation
- Title: H1, centered
- Subtitle: Body Large, centered, Gray 600
- Trust badge: V1.1 new, pill shape
- CTA Button: Primary Button

Copy:
- Title: "PixelEvolve"
- Subtitle: "Building tools that help e-commerce businesses grow globally"
- Badge: "🇸🇪 Engineered in Stockholm"
- Button: "Explore Our Products"
```

#### 2.3.3 Products Section

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                        Our Products                                 │
│                                                                     │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │                                                               │  │
│  │   🌐                                                          │  │
│  │                                                               │  │
│  │   SmartLang                                                   │  │
│  │                                                               │  │
│  │   Translate your Shopify store into multiple languages        │  │
│  │   in minutes, not days. Powered by AI with smart brand        │  │
│  │   term protection.                                            │  │
│  │                                                               │  │
│  │   ✓ AI-powered translation    ✓ Brand term protection         │  │
│  │   ✓ Simple pricing            ✓ Native Shopify integration    │  │
│  │                                                               │  │
│  │   ┌─────────────────┐  ┌─────────────────┐                    │  │
│  │   │ Built for       │  │ 🇸🇪 Made in     │                    │  │
│  │   │ Shopify ✓       │  │ Sweden          │                    │  │
│  │   └─────────────────┘  └─────────────────┘                    │  │
│  │                                                               │  │
│  │                                    [Learn More →]             │  │
│  │                                                               │  │
│  └───────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │                                                               │  │
│  │   🚀  More products coming soon...                            │  │
│  │                                                               │  │
│  │   We're working on more tools to help your business grow.     │  │
│  │   Stay tuned!                                                 │  │
│  │                                                               │  │
│  └───────────────────────────────────────────────────────────────┘  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘

Specifications:
- Section padding: 80px top/bottom
- Title: H2, centered
- Product card: Max width 800px, centered
- Card padding: 40px
- Card background: White
- Shadow: Medium

Product Card Content:
- Icon: 48px emoji or SVG
- Product name: H3
- Description: Body, 2-3 lines
- Feature list: 2-column grid with checkmark icons
- Trust badges: V1.1 new, "Built for Shopify" + "Made in Sweden"
- CTA: Text link "Learn More →"
```

#### 2.3.4 Footer (V1.1 Updated)

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  [■▢●→] PixelEvolve                    🇸🇪 Engineered in Stockholm  │
│                                                                     │
│  ───────────────────────────────────────────────────────────────    │
│                                                                     │
│  Products              Legal                 Contact                │
│  • SmartLang           • Privacy Policy      hello@pixel-evolve.com │
│                        • Terms of Service                           │
│                                                                     │
│  ───────────────────────────────────────────────────────────────    │
│                                                                     │
│  © 2025 PixelEvolve AB. All rights reserved.                       │
│  Org.nr: 559493-7418 | Stockholm, Sweden                           │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘

V1.1 Updates:
- Added "🇸🇪 Engineered in Stockholm" badge next to logo
- Maintained company registration info (Swedish regulatory requirement)

Specifications:
- Background: Gray 900 (#111827)
- Text: White/Gray 400
- Padding: 60px top/bottom
- Three-column layout (stacked on mobile)
```

### 2.4 Responsive Breakpoints

| Breakpoint | Width | Layout Adjustments |
|------------|-------|-------------------|
| Desktop | ≥1024px | Full layout |
| Tablet | 768-1023px | Two columns to single column, stacked badges |
| Mobile | <768px | Single column, hamburger menu |

---

## 3. Product Page Design (translate.pixel-evolve.com)

### 3.1 Page Goals

| Goal | Priority | Metric |
|------|----------|--------|
| Drive app installations | P0 | Install conversion rate |
| Clearly communicate product value | P0 | Page dwell time |
| Present pricing tiers (including middle tier) | P0 | Pricing section visibility |
| Establish professional trust | P0 | **V1.1 Enhanced** |
| Answer common questions (including SEO) | P1 | Support ticket reduction |

### 3.2 Page Structure

```
translate.pixel-evolve.com
├── Header (Navigation)
├── Hero Section (Main visual + CTA + Trust badges)
├── Features Section (Core features)
├── How It Works (Usage flow)
├── Pricing Section (Three-tier pricing) [V1.1 Updated]
├── FAQ Section (Common questions) [V1.1 Updated]
├── Final CTA Section (Final conversion)
├── Footer
└── Legal Pages
    ├── /privacy (Privacy Policy)
    └── /terms (Terms of Service)
```

### 3.3 Detailed Design

#### 3.3.1 Header

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  [■▢●→] SmartLang               Features  Pricing  FAQ    [Install] │
│         by PixelEvolve                                              │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘

Specifications:
- Height: 64px
- Right CTA button: "Install Free" (Primary Button, small size)
- Sub-brand note: "by PixelEvolve" (small text, links to main site)
```

#### 3.3.2 Hero Section (V1.1 Updated)

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                    🌐 SmartLang                                     │
│                                                                     │
│                 Translate your store in minutes,                    │
│                         not days                                    │
│                                                                     │
│        AI-powered translation with smart brand protection           │
│                                                                     │
│                      [Install Free →]                               │
│                                                                     │
│                   Free plan • No credit card                        │
│                                                                     │
│   ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐  │
│   │ ✓ Built for      │  │ 🇸🇪 Engineered in │  │ ⚡ Powered by    │  │
│   │   Shopify        │  │   Stockholm      │  │   GPT-4         │  │
│   └──────────────────┘  └──────────────────┘  └──────────────────┘  │
│                                                                     │
│         ┌─────────────────────────────────────────────┐            │
│         │                                             │            │
│         │        [Product screenshot/mockup]          │            │
│         │                                             │            │
│         └─────────────────────────────────────────────┘            │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘

V1.1 Updates:
- Added three trust badge row: Built for Shopify / Engineered in Stockholm / Powered by GPT-4

Specifications:
- Height: auto, content-adaptive
- Background: Gradient (#f8fafc → #eff6ff → #ecfdf5)
- Main title: H1
- Subtitle: H3, Gray 600
- Description: Body, Gray 500
- CTA: Primary Button (Evolve Green #10b981), large size
- Trust badges: 3-column layout, pill shape
- Product image: Max width 800px, with shadow

Copy:
- Title: "Translate your store in minutes, not days"
- Subtitle: "AI-powered translation with smart brand protection"
- CTA: "Install Free"
- Trust note: "Free plan • No credit card required"
```

#### 3.3.3 Features Section

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                     Why merchants love us                           │
│                                                                     │
│   ┌─────────────┐    ┌─────────────┐    ┌─────────────┐            │
│   │             │    │             │    │             │            │
│   │     🚀      │    │     🛡️      │    │     💰      │            │
│   │             │    │             │    │             │            │
│   │  Lightning  │    │   Brand     │    │  Transparent│            │
│   │    Fast     │    │  Protection │    │   Pricing   │            │
│   │             │    │             │    │             │            │
│   │ Translate   │    │ Your brand  │    │ Know exactly│            │
│   │ 50 products │    │ names stay  │    │ what you    │            │
│   │ in under    │    │ untouched.  │    │ pay. No     │            │
│   │ 5 minutes.  │    │ Always.     │    │ surprises.  │            │
│   │             │    │             │    │             │            │
│   └─────────────┘    └─────────────┘    └─────────────┘            │
│                                                                     │
│   ┌─────────────┐    ┌─────────────┐    ┌─────────────┐            │
│   │             │    │             │    │             │            │
│   │     🎯      │    │     🔄      │    │     💬      │            │
│   │             │    │             │    │             │            │
│   │   Quality   │    │   Auto      │    │   Human     │            │
│   │ Translation │    │   Sync      │    │  Support    │            │
│   │             │    │             │    │             │            │
│   │ E-commerce  │    │ Products    │    │ Real humans │            │
│   │ optimized   │    │ update?     │    │ respond in  │            │
│   │ prompts.    │    │ Auto-sync.  │    │ <4 hours.   │            │
│   │             │    │             │    │             │            │
│   └─────────────┘    └─────────────┘    └─────────────┘            │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘

Specifications:
- 3-column grid (single column on mobile)
- Cards: No border, center-aligned
- Icon: 48px emoji
- Title: H4
- Description: Body Small, Gray 600

Feature List:
1. Lightning Fast - Translate 50 products in under 5 minutes
2. Brand Protection - Your brand names stay untouched. Always.
3. Transparent Pricing - Know exactly what you pay. No surprises.
4. Quality Translation - E-commerce optimized prompts
5. Auto Sync - Products update? Translations sync automatically.
6. Human Support - Real humans respond in under 4 hours.
```

#### 3.3.4 How It Works Section

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                       How it works                                  │
│                                                                     │
│      ①                    ②                    ③                   │
│   Install              Configure             Translate              │
│                                                                     │
│  ┌─────────┐          ┌─────────┐          ┌─────────┐            │
│  │         │          │         │          │         │            │
│  │ [icon]  │   ───▶   │ [icon]  │   ───▶   │ [icon]  │            │
│  │         │          │         │          │         │            │
│  └─────────┘          └─────────┘          └─────────┘            │
│                                                                     │
│  Install the app      Select your          Click translate         │
│  from Shopify         target languages     and you're done!        │
│  App Store            and brand terms                              │
│                                                                     │
│                                                                     │
│                       [Get Started →]                               │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘

Specifications:
- 3-step flow, horizontal layout
- Step numbers: Circle, gradient background (#3b82f6 → #10b981)
- Connecting lines: Arrows or gradient dashed lines
- Icons: Simple illustrations or screenshots
```

#### 3.3.5 Pricing Section (V1.1 Major Update)

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                    Simple, transparent pricing                      │
│                                                                     │
│          No hidden fees. No complicated tiers. Just results.        │
│                                                                     │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐     │
│  │                 │  │  ⭐ BEST VALUE  │  │                 │     │
│  │      Free       │  │                 │  │       Pro       │     │
│  │                 │  │     Basic       │  │                 │     │
│  │     $0/mo       │  │                 │  │     $49/mo      │     │
│  │                 │  │    $19/mo       │  │                 │     │
│  │  Try it out     │  │                 │  │  For growing    │     │
│  │                 │  │  For starting   │  │  stores         │     │
│  │                 │  │  stores         │  │                 │     │
│  │ ──────────────  │  │                 │  │ ──────────────  │     │
│  │                 │  │ ──────────────  │  │                 │     │
│  │ ✓ 1 language    │  │                 │  │ ✓ 5 languages   │     │
│  │ ✓ 200 products  │  │ ✓ 2 languages   │  │ ✓ Unlimited     │     │
│  │ ✓ Basic glossary│  │ ✓ 500 products  │  │   products      │     │
│  │   (10 terms)    │  │ ✓ Full glossary │  │ ✓ Full glossary │     │
│  │ ✓ Email support │  │   (50 terms)    │  │ ✓ Priority queue│     │
│  │                 │  │ ✓ Email support │  │ ✓ Priority      │     │
│  │ ✗ Batch         │  │ ✓ Batch         │  │   support       │     │
│  │   translation   │  │   translation   │  │ ✓ Batch         │     │
│  │                 │  │                 │  │   translation   │     │
│  │                 │  │                 │  │ ✓ API access    │     │
│  │                 │  │                 │  │                 │     │
│  │  [Start Free]   │  │ [Choose Basic]  │  │ [Go Pro]        │     │
│  │                 │  │                 │  │                 │     │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘     │
│                                                                     │
│           All plans include: AI translation, brand protection,      │
│           automatic sync, quality validation, and SEO-friendly      │
│                        hreflang support                             │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘

V1.1 Major Updates:
- Added Basic tier ($19/mo) to bridge Free to Pro gap
- Adjusted tier configurations to create clear upgrade path
- Basic marked as "BEST VALUE" recommended tier

Pricing Strategy Rationale:
┌─────────────────────────────────────────────────────────────────────┐
│ Tier    │ Price  │ Target User              │ Conversion Expectation │
├─────────────────────────────────────────────────────────────────────┤
│ Free    │ $0     │ Trial/micro stores       │ Experience product     │
│ Basic   │ $19    │ Starting stores          │ Main conversion (60%)  │
│ Pro     │ $49    │ Growing stores           │ High-value users (30%) │
└─────────────────────────────────────────────────────────────────────┘

Specifications:
- 3-column card layout
- Basic card: Border #10b981, with "BEST VALUE" badge
- Price: H2, bold
- Feature list: With checkmark/cross icons
- CTA buttons: Free=Ghost, Basic=Primary Evolve Green, Pro=Primary Blue
```

#### 3.3.6 FAQ Section (V1.1 Updated)

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                    Frequently asked questions                       │
│                                                                     │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │ ▸ How does the AI translation work?                         │   │
│   └─────────────────────────────────────────────────────────────┘   │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │ ▸ Will it translate my brand name incorrectly?              │   │
│   └─────────────────────────────────────────────────────────────┘   │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │ ▸ What languages do you support?                            │   │
│   └─────────────────────────────────────────────────────────────┘   │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │ ▾ Will translated pages affect my SEO?  [V1.1 New]          │   │
│   │                                                             │   │
│   │   Great question! Our translations are designed to boost    │   │
│   │   your SEO, not hurt it. Here's how:                        │   │
│   │                                                             │   │
│   │   • We use Shopify's native Markets feature, which          │   │
│   │     automatically generates proper hreflang tags            │   │
│   │   • Search engines like Google will index each language     │   │
│   │     version separately, expanding your reach                │   │
│   │   • Each translated page gets its own URL structure         │   │
│   │     (e.g., /fr/products/... for French)                     │   │
│   │   • Meta titles and descriptions are translated too,        │   │
│   │     helping you rank in local search results                │   │
│   │                                                             │   │
│   │   Result: More visibility in international markets = more   │   │
│   │   organic traffic from non-English speaking customers.      │   │
│   │                                                             │   │
│   └─────────────────────────────────────────────────────────────┘   │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │ ▸ How do I enable the translated languages in my store?     │   │
│   └─────────────────────────────────────────────────────────────┘   │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │ ▸ What if I'm not satisfied?                                │   │
│   └─────────────────────────────────────────────────────────────┘   │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │ ▸ Do you offer refunds?                                     │   │
│   └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘

V1.1 Update: Added SEO-related FAQ

Complete FAQ Content:

1. How does the AI translation work?
   → We use GPT-4o-mini optimized for e-commerce content. Our prompts are 
   specifically designed for product titles, descriptions, and SEO content.

2. Will it translate my brand name incorrectly?
   → No! Our glossary feature protects your brand terms. You can specify 
   which words should never be translated, and we automatically detect 
   brand names from your product vendor field.

3. What languages do you support?
   → We support 11 languages: English, French, German, Spanish, Italian, 
   Portuguese, Dutch, Japanese, Korean, Chinese (Simplified & Traditional).

4. [V1.1 New] Will translated pages affect my SEO?
   → Our translations boost your SEO! We use Shopify's native Markets 
   feature with proper hreflang tags. Each language version gets indexed 
   separately, expanding your reach in international search results.

5. How do I enable translated languages in my store?
   → After translation, you need to enable the language in Shopify Admin → 
   Settings → Markets. We provide step-by-step guidance in the app.

6. What if I'm not satisfied?
   → Contact us at support@pixel-evolve.com. We offer free re-translation 
   and work with you until you're happy.

7. Do you offer refunds?
   → Yes. If you're not satisfied within 30 days, we'll refund your payment. 
   No questions asked.

Specifications:
- Accordion component
- Default: All collapsed, click to expand
- Expand animation: Slide open, 300ms ease
```

#### 3.3.7 Final CTA Section

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │                                                               │  │
│  │              Ready to go global?                              │  │
│  │                                                               │  │
│  │    Join hundreds of merchants who've expanded their           │  │
│  │    reach with AI-powered translations.                        │  │
│  │                                                               │  │
│  │   ┌─────────────────┐  ┌─────────────────┐                    │  │
│  │   │ 🇸🇪 Engineered in│  │ ✓ Built for    │                    │  │
│  │   │   Stockholm     │  │   Shopify       │                    │  │
│  │   └─────────────────┘  └─────────────────┘                    │  │
│  │                                                               │  │
│  │                   [Install Free →]                            │  │
│  │                                                               │  │
│  │             No credit card required                           │  │
│  │                                                               │  │
│  └───────────────────────────────────────────────────────────────┘  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘

Specifications:
- Card background: Gradient (#1e40af → #3b82f6 → #10b981)
- Text: White
- Trust badges: White background, dark text
- Button: White background, Evolve Green text
```

#### 3.3.8 Footer

```
(Same structure as company homepage footer, with product-related links added)

V1.1 Updates:
- Added "🇸🇪 Engineered in Stockholm" badge
- Added "Built for Shopify" badge

Links:
- PixelEvolve → pixel-evolve.com
- Support → mailto:support@pixel-evolve.com
- Privacy Policy → /privacy
- Terms of Service → /terms
```

---

## 4. Legal Pages

### 4.1 Privacy Policy (/privacy)

```
Required Content (GDPR):
1. Introduction - Company identity (PixelEvolve AB, Sweden)
2. Information We Collect - Types of data collected
3. How We Use Information - Purpose of use
4. Data Storage - Storage location (EU servers) and duration
5. Data Sharing - Third-party sharing
6. Your Rights - GDPR user rights (access, rectification, deletion, portability)
7. Cookies - Cookie usage explanation
8. International Transfers - Cross-border data transfer explanation
9. Contact - Contact information
```

### 4.2 Terms of Service (/terms)

```
Required Content:
1. Acceptance of Terms - Terms acceptance
2. Description of Service - Service description
3. User Responsibilities - User obligations
4. Pricing and Payment - Pricing and payment terms
5. Intellectual Property - IP rights
6. Limitation of Liability - Liability limits
7. Termination - Termination clauses
8. Governing Law - Applicable law (Sweden)
9. Changes to Terms - Terms modification
10. Contact - Contact information
```

---

## 5. Technical Implementation

### 5.1 Tech Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | Astro 4.x | Static generation, SEO-friendly, fast |
| Styling | Tailwind CSS 3.x | Rapid development, consistency |
| Components | Astro components | Simple, sufficient, no React needed |
| Deployment | Cloudflare Pages | Existing account, free, global CDN |
| Analytics | None (MVP) | Avoid complex Cookie Banner |
| Cookie Consent | **V1.1 New** Custom lightweight banner | GDPR compliance |

### 5.2 Project Structure (V1.1 Updated)

```
pixelevolve-website/
├── src/
│   ├── layouts/
│   │   ├── BaseLayout.astro      # Base layout
│   │   └── LegalLayout.astro     # Legal pages layout
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Features.astro
│   │   ├── Pricing.astro         # V1.1 Updated: Three-tier pricing
│   │   ├── FAQ.astro
│   │   ├── CTA.astro
│   │   ├── ProductCard.astro
│   │   ├── Logo.astro            # V1.1 Updated: The Morph logo
│   │   ├── TrustBadge.astro      # V1.1 New: Trust badge component
│   │   └── CookieBanner.astro    # V1.1 New: Cookie consent banner
│   ├── pages/
│   │   ├── index.astro           # Company homepage
│   │   ├── privacy.md            # Privacy policy
│   │   └── terms.md              # Terms of service
│   ├── content/
│   │   └── legal/
│   │       ├── privacy.md
│   │       └── terms.md
│   └── styles/
│       └── global.css
├── public/
│   ├── favicon.svg               # V1.1 Updated: The Morph icon
│   ├── logo.svg                  # V1.1 Updated
│   ├── logo-white.svg            # V1.1 Updated
│   ├── og-image.png              # Social sharing image
│   ├── robots.txt                # V1.1 New
│   └── sitemap.xml               # V1.1 New (or auto-generated by Astro)
├── astro.config.mjs
├── tailwind.config.cjs
└── package.json
```

### 5.3 Multi-site Deployment Strategy

```
Recommended Approach: Two separate repositories

1. pixelevolve-main-website       → pixel-evolve.com
2. pixelevolve-translate-website  → translate.pixel-evolve.com

Shared Resources:
- Logo SVG files
- Tailwind configuration
- Base components (via npm package or git submodule)
```

### 5.4 SEO Configuration (V1.1 Major Update)

#### Basic Meta Tags

```html
<!-- Required for every page -->
<head>
  <title>{pageTitle} | PixelEvolve</title>
  <meta name="description" content="{pageDescription}" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="{canonicalUrl}" />
  
  <!-- Open Graph -->
  <meta property="og:title" content="{pageTitle}" />
  <meta property="og:description" content="{pageDescription}" />
  <meta property="og:image" content="/og-image.png" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="{pageUrl}" />
  <meta property="og:site_name" content="PixelEvolve" />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="{pageTitle}" />
  <meta name="twitter:description" content="{pageDescription}" />
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
</head>
```

#### robots.txt (V1.1 New)

```
# robots.txt for pixel-evolve.com

User-agent: *
Allow: /

Sitemap: https://pixel-evolve.com/sitemap.xml
```

#### sitemap.xml (V1.1 New)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://pixel-evolve.com/</loc>
    <lastmod>2025-12-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://pixel-evolve.com/privacy</loc>
    <lastmod>2025-12-01</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://pixel-evolve.com/terms</loc>
    <lastmod>2025-12-01</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>
```

> Note: Use `@astrojs/sitemap` plugin for automatic generation

#### JSON-LD Structured Data (V1.1 New)

**Company Homepage (pixel-evolve.com)**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "PixelEvolve AB",
  "url": "https://pixel-evolve.com",
  "logo": "https://pixel-evolve.com/logo.svg",
  "description": "Building tools that help e-commerce businesses grow globally",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Stockholm",
    "addressCountry": "SE"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "hello@pixel-evolve.com",
    "contactType": "customer service"
  }
}
</script>
```

**Product Page (translate.pixel-evolve.com)**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "SmartLang",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": [
    {
      "@type": "Offer",
      "name": "Free",
      "price": "0",
      "priceCurrency": "USD"
    },
    {
      "@type": "Offer",
      "name": "Basic",
      "price": "19",
      "priceCurrency": "USD",
      "priceValidUntil": "2026-12-31"
    },
    {
      "@type": "Offer",
      "name": "Pro",
      "price": "49",
      "priceCurrency": "USD",
      "priceValidUntil": "2026-12-31"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "50"
  },
  "author": {
    "@type": "Organization",
    "name": "PixelEvolve AB"
  },
  "description": "AI-powered translation app for Shopify stores with smart brand protection"
}
</script>
```

> Note: Add `aggregateRating` only after receiving real reviews

### 5.5 Cookie Banner (V1.1 New)

#### Why It's Needed

- GDPR requirement: As a Swedish company, must comply with EU GDPR
- Even without tracking cookies, a simple notice is recommended

#### Implementation Options

**Option A: No-tracking Declaration (Recommended - MVP Phase)**

```html
<!-- CookieBanner.astro -->
<div id="cookie-banner" class="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 
     bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50 hidden">
  <p class="text-sm text-gray-600 mb-3">
    We use essential cookies only to ensure our website works properly. 
    We don't use tracking cookies or third-party analytics.
  </p>
  <div class="flex gap-2">
    <button onclick="acceptCookies()" 
            class="flex-1 bg-blue-500 text-white px-4 py-2 rounded text-sm hover:bg-blue-600">
      Got it
    </button>
    <a href="/privacy" class="text-sm text-gray-500 hover:text-gray-700 self-center">
      Learn more
    </a>
  </div>
</div>

<script>
  if (!localStorage.getItem('cookies-accepted')) {
    document.getElementById('cookie-banner').classList.remove('hidden');
  }
  function acceptCookies() {
    localStorage.setItem('cookies-accepted', 'true');
    document.getElementById('cookie-banner').classList.add('hidden');
  }
</script>
```

**Option B: Full Consent Management (For Future Analytics Use)**

- Use Osano, CookieScript, or Cookiebot
- Differentiate Essential / Analytics / Marketing cookies
- Allow selective user consent

---

## 6. Logo SVG Code (V1.1 Complete Update)

### 6.1 Primary Logo Icon - The Morph

```svg
<!-- logo-icon.svg -->
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Square - Pixel origin -->
  <rect x="4" y="16" width="16" height="16" rx="0" fill="#1e40af"/>
  
  <!-- Rounded square - Transition -->
  <rect x="16" y="16" width="16" height="16" rx="6" fill="#3b82f6"/>
  
  <!-- Circle - Evolve endpoint -->
  <circle cx="40" cy="24" r="8" fill="#10b981"/>
</svg>
```

### 6.2 Primary Logo (Icon + Text)

```svg
<!-- logo-full.svg -->
<svg width="200" height="48" viewBox="0 0 200 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Icon section -->
  <rect x="4" y="16" width="16" height="16" rx="0" fill="#1e40af"/>
  <rect x="16" y="16" width="16" height="16" rx="6" fill="#3b82f6"/>
  <circle cx="40" cy="24" r="8" fill="#10b981"/>
  
  <!-- Text section -->
  <text x="56" y="30" font-family="Inter, -apple-system, sans-serif" font-size="20" font-weight="700">
    <tspan fill="#1e40af">Pixel</tspan><tspan fill="#10b981">Evolve</tspan>
  </text>
</svg>
```

### 6.3 White Version (For Dark Backgrounds)

```svg
<!-- logo-white.svg -->
<svg width="200" height="48" viewBox="0 0 200 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Icon section - White with opacity gradient -->
  <rect x="4" y="16" width="16" height="16" rx="0" fill="rgba(255,255,255,0.5)"/>
  <rect x="16" y="16" width="16" height="16" rx="6" fill="rgba(255,255,255,0.75)"/>
  <circle cx="40" cy="24" r="8" fill="#ffffff"/>
  
  <!-- Text section -->
  <text x="56" y="30" font-family="Inter, -apple-system, sans-serif" font-size="20" font-weight="700" fill="#ffffff">
    PixelEvolve
  </text>
</svg>
```

### 6.4 Favicon

```svg
<!-- favicon.svg - Simplified version for small sizes -->
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Keep only square and circle, skip transition -->
  <rect x="2" y="10" width="12" height="12" rx="0" fill="#1e40af"/>
  <circle cx="24" cy="16" r="6" fill="#10b981"/>
</svg>
```

### 6.5 Animated Logo (Optional, For Hero)

```html
<!-- Using CSS animation -->
<style>
  .logo-animated .square {
    animation: morph-start 2s ease-in-out infinite;
  }
  .logo-animated .rounded {
    animation: morph-middle 2s ease-in-out infinite;
    animation-delay: 0.3s;
  }
  .logo-animated .circle {
    animation: morph-end 2s ease-in-out infinite;
    animation-delay: 0.6s;
  }
  
  @keyframes morph-start {
    0%, 100% { opacity: 0.3; transform: scale(0.9); }
    50% { opacity: 1; transform: scale(1); }
  }
  @keyframes morph-middle {
    0%, 100% { opacity: 0.3; transform: scale(0.9); }
    50% { opacity: 1; transform: scale(1); }
  }
  @keyframes morph-end {
    0%, 100% { opacity: 0.3; transform: scale(0.9); }
    50% { opacity: 1; transform: scale(1); }
  }
</style>

<svg class="logo-animated" width="120" height="40" viewBox="0 0 120 40">
  <rect class="square" x="10" y="10" width="20" height="20" rx="0" fill="#1e40af"/>
  <rect class="rounded" x="40" y="10" width="20" height="20" rx="6" fill="#3b82f6"/>
  <circle class="circle" cx="80" cy="20" r="10" fill="#10b981"/>
  <path d="M96 20 L102 20 M100 17 L103 20 L100 23" stroke="#10b981" stroke-width="2" stroke-linecap="round"/>
</svg>
```

---

## 7. Implementation Plan

### 7.1 Phase Breakdown

| Phase | Duration | Deliverables |
|-------|----------|--------------|
| Phase 1 | 2-3 hours | Company homepage (pixel-evolve.com) |
| Phase 2 | 3-4 hours | Product page (translate.pixel-evolve.com) |
| Phase 3 | 1 hour | Deployment + domain configuration |
| Phase 4 | 0.5 hours | SEO verification + Cookie Banner |

### 7.2 Phase 1 Checklist

- [ ] Initialize Astro project
- [ ] Configure Tailwind CSS
- [ ] Create The Morph logo SVG files (V1.1)
- [ ] Implement Header component (with new logo)
- [ ] Implement Hero Section (with trust badges)
- [ ] Implement Products Section
- [ ] Implement Footer component (with "Engineered in Stockholm")
- [ ] Create Privacy Policy page
- [ ] Create Terms of Service page
- [ ] Add Cookie Banner (V1.1)
- [ ] Responsive adaptation
- [ ] SEO optimization (sitemap, robots.txt, JSON-LD)

### 7.3 Phase 2 Checklist

- [ ] Implement product page Hero (with three trust badges)
- [ ] Implement Features Section
- [ ] Implement How It Works
- [ ] Implement three-tier Pricing Section (V1.1)
- [ ] Implement FAQ component (with SEO question)
- [ ] Implement Final CTA
- [ ] Product-specific Privacy/Terms
- [ ] Add JSON-LD structured data (SoftwareApplication)
- [ ] Responsive adaptation
- [ ] SEO optimization

### 7.4 Phase 3 Checklist

- [ ] Push code to GitHub
- [ ] Create Cloudflare Pages project
- [ ] Connect GitHub repository
- [ ] Configure pixel-evolve.com domain
- [ ] Configure translate.pixel-evolve.com subdomain
- [ ] Verify SSL certificates
- [ ] Test all pages

### 7.5 Phase 4 Checklist (V1.1 New)

- [ ] Submit sitemap to Google Search Console
- [ ] Validate JSON-LD with Google Rich Results Test
- [ ] Test Cookie Banner functionality
- [ ] Verify all meta tags

---

## 8. Design Asset Checklist

### 8.1 Files to Create

| File | Format | Usage | V1.1 Status |
|------|--------|-------|-------------|
| logo-icon.svg | SVG | Favicon, small icons | **Updated** |
| logo-full.svg | SVG | Header | **Updated** |
| logo-white.svg | SVG | Dark backgrounds | **Updated** |
| favicon.svg | SVG | Browser tab icon | **Updated** |
| og-image.png | PNG 1200x630 | Social sharing | Unchanged |
| og-image-translate.png | PNG 1200x630 | Product page sharing | Unchanged |
| apple-touch-icon.png | PNG 180x180 | iOS home screen icon | **New** |

### 8.2 Optional Enhancements

| Asset | Priority | Description |
|-------|----------|-------------|
| Logo animation (Lottie/CSS) | P2 | For Hero section |
| Product screenshots | P1 | Add after app launch |
| Customer logo wall | P3 | Social proof, add after acquiring customers |
| Demo video | P3 | Product demonstration video |

---

## Appendix: Complete Copy (V1.1 Updated)

### A. Company Homepage Copy

```
Hero:
Title: PixelEvolve
Subtitle: Building tools that help e-commerce businesses grow globally
Badge: 🇸🇪 Engineered in Stockholm
CTA: Explore Our Products

Products:
Section Title: Our Products

Product 1:
- Name: SmartLang
- Description: Translate your Shopify store into multiple languages in minutes, 
  not days. Powered by AI with smart brand term protection.
- Features:
  - AI-powered translation
  - Brand term protection
  - Simple pricing
  - Native Shopify integration
- Badges: "Built for Shopify" + "🇸🇪 Made in Sweden"
- CTA: Learn More

Product 2:
- Name: More coming soon...
- Description: We're working on more tools to help your business grow. Stay tuned!

Footer:
- Tagline: 🇸🇪 Engineered in Stockholm
- Copyright: © 2025 PixelEvolve AB. All rights reserved.
- Company info: Org.nr: 559493-7418 | Stockholm, Sweden
```

### B. Product Page Copy (V1.1 Updated)

```
Hero:
Title: Translate your store in minutes, not days
Subtitle: AI-powered translation with smart brand protection
CTA: Install Free
Trust note: Free plan • No credit card required
Badges: 
  - ✓ Built for Shopify
  - 🇸🇪 Engineered in Stockholm  
  - ⚡ Powered by GPT-4

Features Section:
Title: Why merchants love us

Feature 1-6: (unchanged)

How It Works:
(unchanged)

Pricing: (V1.1 Updated)
Title: Simple, transparent pricing
Subtitle: No hidden fees. No complicated tiers. Just results.

Free Plan:
- Price: $0/mo
- Tagline: Try it out
- Features:
  - ✓ 1 language
  - ✓ 200 products
  - ✓ Basic glossary (10 terms)
  - ✓ Email support
  - ✗ Batch translation

Basic Plan: (V1.1 New)
- Price: $19/mo
- Badge: BEST VALUE
- Tagline: For starting stores
- Features:
  - ✓ 2 languages
  - ✓ 500 products
  - ✓ Full glossary (50 terms)
  - ✓ Email support
  - ✓ Batch translation

Pro Plan:
- Price: $49/mo
- Tagline: For growing stores
- Features:
  - ✓ 5 languages
  - ✓ Unlimited products
  - ✓ Full glossary
  - ✓ Priority queue
  - ✓ Priority support
  - ✓ Batch translation
  - ✓ API access

Note: All plans include: AI translation, brand protection, automatic sync, 
      quality validation, and SEO-friendly hreflang support

FAQ: (V1.1 New SEO question added)
(See section 3.3.6 for complete content)

Final CTA:
Title: Ready to go global?
Subtitle: Join hundreds of merchants who've expanded their reach with AI-powered translations.
Badges: 🇸🇪 Engineered in Stockholm + Built for Shopify
CTA: Install Free
Trust note: No credit card required
```

---

**Document Status**: ✅ V1.1 Design Complete, Ready for Development

**V1.1 Major Improvements Summary**:
1. ✅ Logo upgraded to "The Morph" concept
2. ✅ Added $19 Basic pricing tier
3. ✅ Added trust badges (Engineered in Stockholm, etc.)
4. ✅ Added SEO-related FAQ
5. ✅ Enhanced SEO technical specifications (sitemap, robots.txt, JSON-LD)
6. ✅ Added Cookie Banner component

**Next Steps**:
1. Confirm V1.1 design
2. Generate complete project code
3. Deploy to Cloudflare Pages
