# My personal portfolio

Created based in a [ThemeForest template in React](https://themeforest.net/item/simone-personal-portfolio-react-template/42757507) and deployed to GitHub Pages.

## Requirements
- Node JS (v18.0+)

## Run local and edit

Clone the repo, then navigate to its root folder.

Execute `npm install` to download the modules.

To run locally,  go to the end of the `package.json` file, and delete the lines:

```json
//... rest of the file
}, // only delete the comma
"homepage": "http://afr2903.github.io/portfolio" // delete this entire line
```

Save the edited file, and run `npm run start`.

This will display the webpage at `localhost:3000`

Due to **skill issue**, some links may be broken at local runtime, for example, the link to the resume.

## Deploy

After the modifications have been made, restore the deleted lines at the end of `package.json` file.

Commit and push your changes to the `main` branch.

Then run, `npm run deploy`.

This will build the app, and deploy the updated site to GitHub pages.