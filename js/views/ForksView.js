(function() {
  GithubApp.module("GithubApp.Forks", function(Forks) {
    Forks.ForkView = Backbone.Marionette.ItemView.extend({
      template: "#forksTemplate"
    });
    return Forks.ForksListView = Backbone.Marionette.CollectionView.extend({
      el: "#content",
      childView: Forks.ForkView,
      initialize: function() {
        return this.$el.html('');
      }
    });
  });

}).call(this);
