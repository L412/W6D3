const FollowToggle = require('./follow_toggle.js');

$( () => {
  const $buttons = $('button.follow-toggle');
  $buttons.each( (i, button) => {
  new FollowToggle(button);
  });
});