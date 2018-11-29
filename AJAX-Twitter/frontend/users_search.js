class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.input = this.$el.find('input[name = username]');
    this.ul = this.$el.find('.users');
    
    // this.input.on('______', this.handleInput.bind(this));
  }
  
  handleinput() {
    
  }
}

module.exports = UsersSearch;