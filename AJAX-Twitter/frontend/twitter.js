const FollowToggle = require('./follow_toggle.js');
const UsersSearch = require('./users_search.js');

$( () => {
  const $buttons = $('button.follow-toggle');
  $buttons.each( (i, button) => {
  new FollowToggle(button);
  });
  
  const $searchs = $('nav.users-search');
  $searches.each ( (i, search) => {
    new UsersSearch(search);
  } );
});

