const APIUtil = require('./api_util.js');

class FollowToggle {
  constructor (el) {
    this.$el = $(el);
    this.userID = this.$el.data('user-id');
    this.followState = this.$el.data('initial-follow-state');
    
    this.render();
    this.$el.on('click', this.handleClick.bind(this));
  }
  
  render(){
    if (this.followState === "unfollow") {
      this.$el.text("Follow!");
      this.$el.attr("disabled", false);
    } else if (this.followState === "follow") {
      this.$el.text("Unfollow!");
      this.$el.attr("disabled", false);
    } else if (this.followState === "following") {
      this.$el.attr("disabled", true);
    } else if (this.followState === "unfollowing") {
      this.$el.attr("disabled", true);
    }
  }
  
  handleClick() {
    
    event.preventDefault();
    
    if (this.followState === "unfollow") {
      this.followState = "following";
      this.render();
      APIUtil.followUser(this.userID).then( res => {
        this.followState = "follow";
        this.render();
      });
    } else {
      this.followState = "unfollowing";
      this.render();
      APIUtil.unfollowUser(this.userID).then( res => {
        this.followState = "unfollow";
        this.render();
      });
    }
  }

}

module.exports = FollowToggle;