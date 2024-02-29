# SASS Folder Structure

## What Does Each Folder Contain?

- Abstracts are for stuffs that aren't compiled to css
- Base is used for styles that affect everything e.g. typography (defining font sizes etc), resets (changing an elements default style)
- Components are used for reusable components
- Layouts are for page related layouts
- Pages are for styles with respect to each page
- Utilities are for utility classes (the tailwind css approach)

## Order In Which Each Section Is Imported Into style.scss

### (Preferably use the @use for imports and not @import)

- absracts
- base
- components
- utilities
- layout
- pages
