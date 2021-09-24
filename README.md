# Welcome to NASA API Shopify Intern Challenge 👋
![Version](https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000)

> A small web app to peruse the NASA Astronomy Photo of the Day API, powered by AlpineJS and TailwindCSS.

### ✨ [Demo](https://kwoka-nasa.netlify.app/)

## Install

```sh
npm install
```

## Usage

```sh
npm run build
```

## Explanation

This web app was a requirement to apply for a position as a Shopify Front End Developer Intern.

I chose to work with AlpineJS as it is a lightweight framework I am familiar with in other projects I am working on. This works well for simple web apps and situations where you just need to lightly extend the markup. This seemed appropriate for this task as the main project requirements were simple.

When calling the NASA APOD API, 10 random images are requested. Before these are displayed, they are checked for being images, with the videos discarded. Additionally, some image links are broken on occasion, and, on the image load error, that item is stripped from the list as well.

I extended AlpineJS with the core `intersect` plugin (for infinite scrolling), as well as a `persistedStore` plugin (to enable persistence of liked items), lightly modified by myself, and a fully custom `rias` plugin (to handle converting single image URLS into a responsive srcset on the fly).

This custom `rias` plugin utilizes Cloudinary to do on-the-fly transformations of NASA's imagery, dramatically decreasing the average image payload, through the use of modern image formats and optimized image widths (no wasted pixels!).

## Author

👤 **Eric Kwoka**

* Github: [@ekwoka](https://github.com/ekwoka)