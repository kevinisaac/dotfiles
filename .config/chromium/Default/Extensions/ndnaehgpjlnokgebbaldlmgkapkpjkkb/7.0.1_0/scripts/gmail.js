/* El código a continuación es propiedad intelectual de The Mail Track Company S.L. de Barcelona, España,
y solo debe ser utilizado y manejado bajo estos Términos: https://mailtrack.io/es/terms

The code hereafter is the intellectual property of The Mail Track Company S.L. of Barcelona, Spain
and must be used and handled only according to these Terms: https://mailtrack.io/en/terms */

(function () {
    'use strict';

    var inject = document.createElement('script');

    inject.src = chrome.extension.getURL('scripts/bundles/gmail.inject.bundle.js');
    inject.onload = function() {
        this.remove();
    };

    document.documentElement.appendChild(inject);
}());
