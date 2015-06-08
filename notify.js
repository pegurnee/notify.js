var notify = (function (document) {
    "use strict";
    var notifySpace, notify, theBackgroundColor;
    
    notify = function (message, type) {
        if (!document.getElementById('notify-location')) {
            notifySpace = document.createElement('div');
            notifySpace.id = 'notify-location';
            notifySpace.style.top = '0px';
            notifySpace.style.right = '0px';
            notifySpace.style.position = 'absolute';

            document.body.appendChild(notifySpace);
        }
        
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
        
        notifySpace.appendChild(inner);
        setTimeout(function () {notifySpace.removeChild(inner); }, 1500);
    };
    return notify;
}(document));