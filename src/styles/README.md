# CSS Organization Structure

This directory contains all the CSS styles organized by component, page, and utility type for better maintainability and organization.

## Directory Structure

```
src/styles/
├── components/           # Component-specific styles
│   ├── hero.css         # Hero section styles
│   ├── about.css        # About section styles
│   ├── skills.css       # Skills section styles
│   ├── projects.css     # Projects section styles
│   ├── contact.css      # Contact section styles
│   ├── footer.css       # Footer section styles
│   ├── navigation.css   # Navigation component styles
│   └── ui.css          # Reusable UI component styles
├── pages/               # Page-specific styles
│   ├── home.css        # Home page styles
│   └── projects.css    # Projects page styles
├── layout/              # Layout and base styles
│   ├── base.css        # Base layout styles
│   └── animations.css  # Animation utilities
├── utilities/           # Common utility classes
│   └── common.css      # Reusable utility classes
├── main.css            # Main CSS file that imports all others
└── README.md           # This documentation file
```

## Usage

### Importing Styles
All styles are automatically imported through `src/index.css` which imports `src/styles/main.css`.

### Component Styles
Each component has its own CSS file with classes prefixed by the component name:
- `.hero-section`, `.hero-container`, `.hero-title`
- `.about-section`, `.about-content`, `.about-paragraph`
- `.skills-section`, `.skills-grid`, `.skills-category-card`

### UI Component Styles
Reusable UI components have generic class names:
- `.card`, `.button`, `.form`, `.social-links`

### Animation Classes
Animation utilities are available for common patterns:
- `.animate-slide-up`, `.animate-slide-left`, `.animate-slide-right`
- `.animate-scale`, `.animate-fade`
- Delay classes: `.delay-100`, `.delay-200`, etc.

### Utility Classes
Common utility classes for consistent styling:
- `.gradient-sky-blue`, `.text-gradient`
- `.shadow-soft`, `.hover-scale`
- `.section-padding`, `.container-max`

## Benefits

1. **Organization**: Each component has its own CSS file
2. **Maintainability**: Easy to find and update specific styles
3. **Reusability**: Common patterns are extracted into utilities
4. **Consistency**: Standardized naming conventions
5. **Performance**: Only needed styles are loaded
6. **Scalability**: Easy to add new components and pages

## Naming Conventions

- **Component classes**: `{component}-{element}` (e.g., `.hero-title`)
- **State classes**: `{component}-{element}-{state}` (e.g., `.card-animated`)
- **Utility classes**: `{property}-{value}` (e.g., `.text-gradient`)
- **Animation classes**: `animate-{type}` (e.g., `.animate-slide-up`)

## Adding New Styles

1. **New Component**: Create a new file in `components/` directory
2. **New Page**: Create a new file in `pages/` directory
3. **New Utility**: Add to `utilities/common.css`
4. **New Animation**: Add to `layout/animations.css`
5. **Import**: Add import to `main.css` if needed
