/*jslint indent: 2, unparam: true*/
/*global $: false, document: false, togglbutton: false*/
'use strict';

togglbutton.render('body.controller-issues.action-show #content h2:not(.toggl)', {}, function (elem) {
  var link, description,
    numElem = $('#content h2'),
    titleElem = $('.subject h3') || "",
    projectElem = $('h1');

  if (!!$('.toggl-button')) {
    return;
  }

  if (!!titleElem) {
    description = titleElem.textContent;
  }

  if (numElem !== null) {
    if (!!description) {
      description = " " + description;
    }
    description = numElem.textContent + description;
  }

  link = togglbutton.createTimerLink({
    className: 'redmine',
    description: description,
    projectName: projectElem && projectElem.textContent
  });

  $('#content h2').appendChild(link);
});
