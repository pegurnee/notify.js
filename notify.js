var NotificationHandler = (function () {
    "use strict";
    var notifySpace, notify, theBackgroundColor;
    NotificationHandler = function(opacity) {
      this.opacity = opacity;

      if (!document.getElementById('notify-location')) {
          this.notifySpace = document.createElement('div');
          this.notifySpace.id = 'notify-location';

          document.body.appendChild(this.notifySpace);
      } else {
        this.notifySpace = document.getElementById('notify-location');
      }
      this.notifySpace.style.top = '10px';
      this.notifySpace.style.right = '10px';
      this.notifySpace.style.position = 'fixed';
    };

    NotificationHandler.prototype.notify = function (message, type) {

        switch (type) {
        case 'failure':
            theBackgroundColor = 'rgba(200, 0, 25, .3)';
            break;
        case 'success':
            theBackgroundColor = 'rgba(0, 200, 25, .3)';
            break;
        default:
            theBackgroundColor = 'rgba(100, 100, 25, .3)';
        }

        var inner = document.createElement('div');
        inner.innerHTML = message;

        inner.style.backgroundColor =  theBackgroundColor;
        inner.style.padding = '2px';
        inner.style.border = '1px black solid';
        inner.style.borderRadius = '3px';
        inner.style.margin = '2px';

        this.notifySpace.appendChild(inner);

        var destroyCurrent = (function(){
          this.notifySpace.removeChild(inner);
        }).bind(this);

        setTimeout(destroyCurrent, 1500);
    };

    return NotificationHandler;
})();
