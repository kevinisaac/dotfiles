/* El código a continuación es propiedad intelectual de The Mail Track Company S.L. de Barcelona, España,
y solo debe ser utilizado y manejado bajo estos Términos: https://mailtrack.io/es/terms

The code hereafter is the intellectual property of The Mail Track Company S.L. of Barcelona, Spain
and must be used and handled only according to these Terms: https://mailtrack.io/en/terms */
// https://github.com/snowplow/snowplow/wiki/integrating-javascript-tags-onto-your-website#pageview
(function() {
    'use strict';

    const path = `${chrome.runtime.getURL('').slice(0, -1)}/scripts/lib/snowplow.js`;
    const snowplow = document.createElement('script');

    snowplow.textContent = `;(function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[];
p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments)
};p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1;
n.src=w;g.parentNode.insertBefore(n,g)}}(window,document,"script","${path}","snowplow"));
`;

    document.documentElement.appendChild(snowplow);
})();
