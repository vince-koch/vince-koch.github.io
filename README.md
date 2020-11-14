# Cookie Crumbs

* Bootstrapped with Create Snowpack App (CSA). https://www.snowpack.dev/
* Published with gh-pages https://www.npmjs.com/package/gh-pages
* https://github.com/rafgraph/spa-github-pages


## Links
* [View](https://vince-koch.github.io/index.html)
* [Source Code](https://github.com/vince-koch/vince-koch.github.io)
* [Published Source](https://github.com/vince-koch/vince-koch.github.io/tree/gh-pages)
* [Old Site Source Code](https://github.com/vince-koch/vince-koch.github.io/tree/old)


## Scripts
* > npm run start

    Runs the app in the development mode.
    Open http://localhost:8080 to view it in the browser.

    The page will reload if you make edits.
    You will also see any lint errors in the console.

* > npm run build

    Builds a static copy of your site to the `build/` folder.
    Your app is ready to be deployed!

    `--clean` Clean _build_ folder before building

    `--watch` Watch the _src_ folder for changes

    _For the best production performance_:  Add a build bundler plugin like "@snowpack/plugin-webpack" to your `snowpack.config.js` config file.

* > npm run test

    Launches the application test runner.

    `--watch` To run in interactive watch mode.

* > npm run deploy

    Rebuilds the app (`npm run build`) and then publishes to the _gh-pages_ branch.  See [gh-pages](https://www.npmjs.com/package/gh-pages) for more information)

## Other notes
 
 * By default, github pages will disregard directories that begin with an underscore ( _ ) as part of its jekyll processing. You can bypass that by putting an empty
   `.nojekyll` file in the top level of your repository.  [This](https://github.blog/2009-12-29-bypassing-jekyll-on-github-pages/) blog entry was the one that help me understand.
   
        It is now possible to completely bypass Jekyll processing on GitHub Pages by creating a file named .nojekyll in the root of your pages repo and pushing it to GitHub. 
        This should only be necessary if your site uses files or directories that start with underscores since Jekyll considers these to be special resources and does not
        copy them to the final site.  