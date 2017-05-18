'use strict';

describe("Fixtures", function() {
  before(function(done) {
    // NetworkStatusView checks this method every five seconds while showing
    window.getSocketStatus = function() { return WebSocket.OPEN; };

    Whisper.Fixtures.saveAll().then(function() {
      done();
    });
  });

  it('renders', function(done) {
    ConversationController.updateInbox().then(function() {
      var view = new Whisper.InboxView({window: window});
      view.$el.prependTo($('#render-android'));

      var view = new Whisper.InboxView({window: window});
      view.$el.removeClass('android').addClass('ios');
      view.$el.prependTo($('#render-ios'));

      var view = new Whisper.InboxView({window: window});
      view.$el.removeClass('android').addClass('android-dark');
      view.$el.prependTo($('#render-android-dark'));
    }).then(done, done);
  });
});
