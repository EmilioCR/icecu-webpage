var domIsReady = (function(domIsReady) {  
  var isBrowserIeOrNot = function() {
    return (!document.attachEvent || typeof document.attachEvent === "undefined" ? 'not-ie' : 'ie');
  }
  
  domIsReady = function(callback) {
    if(callback && typeof callback === 'function'){
      if(isBrowserIeOrNot() !== 'ie') {
        document.addEventListener("DOMContentLoaded", function() {          
            return callback();
        });
      } else {
        document.attachEvent("onreadystatechange", function() {
          if(document.readyState === "complete") {
            return callback();
          }
        });
      }
    } else {
      console.error('The callback is not a function!');
    }
  }
  
  return domIsReady;
})(domIsReady || {});

(function(document, window, domIsReady, undefined) {
  domIsReady(function() {

    var boxPhone = document.getElementById('box-phone');
    var inputPhone = document.getElementById('input-phone');
    var phoneRequired = document.getElementById('phone-required');

    boxPhone.addEventListener('click', function () {
      if (boxPhone.checked) {
        inputPhone.classList.toggle('input-show');
        phoneRequired.setAttribute('required', 'yes');

      } else {
        var classes = inputPhone.className.split(' ');
        var existingIndex = classes.indexOf('input-show');
        phoneRequired.removeAttribute('required');

        if (existingIndex >= 0)
        classes.splice(existingIndex, 1);
        else
        classes.push('input-show');

        inputPhone.className = classes.join(' ');
      }
    });

    var boxMail = document.getElementById('box-mail');
    var inputMail = document.getElementById('input-mail');
    var mailRequired = document.getElementById('mail-required');

    boxMail.addEventListener('click', function () {
      if (boxMail.checked) {
        inputMail.classList.toggle('input-show');
        mailRequired.setAttribute('required', 'yes');

      } else {
        var classes = inputMail.className.split(' ');
        var existingIndex = classes.indexOf('input-show');
        mailRequired.removeAttribute('required');

        if (existingIndex >= 0)
        classes.splice(existingIndex, 1);
        else
        classes.push('input-show');

        inputMail.className = classes.join(' ');
      }
    });
    
    var boxLetter = document.getElementById('box-letter');
    var inputLetter = document.getElementById('input-letter');
    var letterRequired = document.getElementById('letter-required');

    boxLetter.addEventListener('click', function () {
      if (boxLetter.checked) {
        inputLetter.classList.toggle('input-show');
        letterRequired.setAttribute('required', 'yes');

      } else {
        var classes = inputLetter.className.split(' ');
        var existingIndex = classes.indexOf('input-show');
        letterRequired.removeAttribute('required');

        if (existingIndex >= 0)
        classes.splice(existingIndex, 1);
        else
        classes.push('input-show');

        inputLetter.className = classes.join(' ');
      }
    });

    var btnAbout = document.getElementById('btn-about-section');
    var btnRadio = document.getElementById('btn-radio-section');
    var btnHistory = document.getElementById('btn-history-section');

    var aboutPost = document.getElementById('about-post');
    var radioPost = document.getElementById('radio-post');
    var historyPost = document.getElementById('history-post');

    btnAbout.addEventListener('click', function () {
      if (btnAbout.classList) {
        btnAbout.classList.toggle('btn-section-selected')
        aboutPost.classList.toggle('open-post');
        radioPost.className = 'hidden-post';
        historyPost.className = 'hidden-post';
        btnRadio.className = 'btn-section';
        btnHistory.className = 'btn-section';
      }
    })

    btnRadio.addEventListener('click', function () {
      if (btnRadio.classList) {
        btnRadio.classList.toggle('btn-section-selected')
        radioPost.classList.toggle('open-post');
        aboutPost.className = 'hidden-post';
        historyPost.className = 'hidden-post';
        btnAbout.className = 'btn-section';
        btnHistory.className = 'btn-section';
      }
    })

    btnHistory.addEventListener('click', function () {
      if (btnHistory.classList) {
        btnHistory.classList.toggle('btn-section-selected')
        historyPost.classList.toggle('open-post');
        aboutPost.className = 'hidden-post';
        radioPost.className = 'hidden-post';
        btnAbout.className = 'btn-section';
        btnRadio.className = 'btn-section';
      }
    })

  });
})(document, window, domIsReady);