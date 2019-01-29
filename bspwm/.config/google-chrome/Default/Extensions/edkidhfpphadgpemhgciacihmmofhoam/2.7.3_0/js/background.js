/*
 * copyright 2016 by Forty Foot Designs, LLC
 */
/* global chrome */

chrome.app.runtime.onLaunched.addListener(function () {
    chrome.app.window.create('window.html', {
        'bounds': {
            'width': 1024,
            'height': 646
        },
        'minWidth': 1024,
        'minHeight': 646,
        'maxWidth': 1440,
        'maxHeight': 1050,
        "resizable": true,
        'id': 'mainWindowId'
    });
});
