# izea-assignment
[![Netlify Status](https://api.netlify.com/api/v1/badges/a0a4b40d-f3fb-47ab-9007-e12d55e23d5e/deploy-status)](https://app.netlify.com/sites/paginated-posts/deploys)

This web app retrieves and displays a list of paginated post titles from [JSON Placeholder API](https://jsonplaceholder.typicode.com/). 

This ember app uses [ember-cli-sass](https://github.com/aexmachina/ember-cli-sass) to create its styling modules and rules.

All acceptance tests to prove functionality were written with ember standard test library QUnit.

Pagination controls are located at both the top of the page and the bottom of the page. 
Each post title can be clicked to display additional information from the post and user who created the post.

Live link for this web app is located at [Post It](https://paginated-posts.netlify.com/)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd izea-assignment`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
