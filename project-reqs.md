# Ember.js Project

We've put your soft skills to the test, now we want to see some dope code! For this part of the interview, we would like you to create a small Ember.js app that requests and shows data from the JSONPlaceholder API. We suggest using the addon ember-ajax to talk to this API.

## Requirements

  * Display a paginated list of post titles. The data should be retrieved from the JSONPlaceholder API, and there should be pagination controls to retrieve additional pages of data.
  * Each post should be able to toggle a side sliding panel/modal that is populated with the rest of that post's data. You should also include the data of the user related to that post. Make this look & behave however you want, but it should not trigger a full route transition.
  * We are not providing a mock for this, you will need to figure out a design that you feel represents the best user experience.
  * Do not use a front end framework such as bootstrap, but it's fine to use a utility framework like tailwind or neat.
  * The UI should be fairly responsive.
    Write tests that prove your functionality works.

## Bonus Points

  * Use ember-cli-sass instead of vanilla CSS to style your app.
  * Use ember-test-selectors to isolate how you select elements in tests from your styling code and ember-cli-mirage to isolate your tests from talking to a real API on the internet.
