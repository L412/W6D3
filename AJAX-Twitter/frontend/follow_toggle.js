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
    } else if (this.followState === "follow") {
      this.$el.text("Unfollow!");
    }
  }
  
  handleClick() {
    
    event.preventDefault();
    
    if (this.followState === "unfollow") {
      $.ajax ({
        url: `/users/${this.userID}/follow`,
        method: "POST",
        dataType: "json"
      }).then( res => {
        this.followState = "follow";
        this.render();
      });
    } else {
      $.ajax ({
        url: `/users/${this.userID}/follow`,
        method: "DELETE",
        dataType: "json"
      }).then( res => {
        this.followState = "unfollow";
        this.render();
      });
    }
  }

}

module.exports = FollowToggle;