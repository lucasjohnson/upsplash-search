## Upsplash Search

A Create React App that queries the Upsplash API and displays the results as a grid for viewing.

## Installation

__Note__: to run this app you will need a Client Key in an `.env` file placed in the root directory of the project. This has been sent via email.

- Install dependencies: `yarn`
- Run the project: `yarn start`
- Alternatively you can run `netlify dev` to run the project if you have the Netlify CLI installed on your machine.

## Features

- Search the Upsplash image database and view the results.
- View images in a modal built with Reach Portal.
- Infinate scroll to display all the images available to a certain query, rather than using pagination.
- Accessibility with Aria attributes and semantic markup.
- State management with React `useState`.
- Built with React, TypeScript, and SCSS.
- Animations with Motion JS and CSS.
- Deployed to Vercel.

## Features that Could be Added

- __Query the Upsplash API with Netlify server functions__: This would prevent the API Client Key from being exposed to the client. I have done this __[here](https://github.com/lucasjohnson/price-app/tree/main/functions)__.
- __Improve tab indexing__: This currently works as expected because the correct HTML was used, but there needs to be a focus outline, and when the user changes context, for example when the modal is open, the user can still navigate the site with tab index while the modal is open.
- __Introduce Lazy Loading of images__: When scrolling the site quickly new images can take some time to display. Introducing Lazy Loading with a blur effect in place while the images load could be preferable. Using smaller images could also improve this, but Upsplash's thumbnail that it provideds via the API is too low quality for this purpose. Using [Gatsby](https://www.gatsbyjs.com/) for an app like this would be a good option as their `<Image />` is incredible.
- __Introduce React Context__: This is a moot point on a site this small. Currently the state is managed in `App.tsx`. If the app was to get larger React Context can be a simpler way to manage complexity. I have done this __[here](https://github.com/lucasjohnson/gatsby-markdown-blog/blob/master/src/context/ThemeContext.tsx)__ and __[here](https://github.com/lucasjohnson/price-app/blob/main/src/context/ThemeContext.tsx)__.
- __Add SEO with Helmet__: Build a component to make the generation of SEO features, such as, structured data, OG tags, and relative meta data easier and almost effortless for content editors. I have done this here __[here](https://github.com/lucasjohnson/my-gatsby-starter/tree/master/src/components/Head)__.
- __Other features__: Bookmark images, image carousel in modal, filter images by keyword, query images by author or keyword, among many other things.

## Known Issues

- On mobile Safari/Firefox the body element isn't locking, so the website is scrollable when the modal is open. There is also an issue where the modal isn't covering the entire mobile viewport because of the browser UI. This UI is also blocking the close button from displaying when the mobile device is in landscape mode.
- Correctly type cast image data from API call. The data would need to be sorted before it is displayed to remove everything that wasn't needed. Using graphQL in this situation would make this easier.

## Work Projects

- [HP OMEN](https://www.omen.com/us/en.html)
- [HP Possibility City](https://digitalprinting.hp.com/us/en/large-format-printers.html)
- [Universal Studios Sherlock Gnomes](https://vimeo.com/268886553)

## Personal Project Examples

- [Gatsby Markdown Blog](https://github.com/lucasjohnson/gatsby-markdown-blog): Gatsby JS, Helmet SEO, Markdown generated content, and advanced tooling to create a great developer experience.
- [Price App](https://github.com/lucasjohnson/price-app): An app built with Fauna DB, graphQL, TypeScript, and React/Gatsby JS.
