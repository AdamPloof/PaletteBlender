# PaletteBlender

Palette Blender is a tool for efficiently designing color palettes for use in web development. It allows you to assess colors immediately in the context of common site components and export your palette directly to CSS/SASS variables for use in your project.

Check it out at [paletteblender.com](https://www.paletteblender.com/)

![PaletteBlender screenshot of main page](./images/PaletteBlender%20Screenshot.png)

## Structure
This app is effectively a single page [React](https://react.dev/) app with a backend built on the [Django web framework](https://www.djangoproject.com/). It makes use of [React JSS](https://cssinjs.org/react-jss/?v=v10.3.0) for providing dynamic stylesheets. This what allows the app to modify its own color palette in real time.

[React Router](https://reactrouter.com/en/main) is used for navigating between pages.

## Future plans
PaletteBlender was developed as a tool for quickly designing color palettes for personal projects. There are a handful of bugs to fix, but in general I still use it as quick way to work up designs for new applications to this day.

Goals for improving this in the future are:

- **Bug fix:** Explode color feature affects locked shades in some cases
- **Feature:** Support for toggling Dark/Light mode
- **Feature:** Additional widgets and layouts
- **Feature:** Save palettes in the app (would require adding authentication)
