/*
 * Copyright 2016 by Forty Foot Designs, LLC.  All rights reserved.
 *
 */
onmessage=function(a){submit(a.data)};
function submit(a){var c=null,c=new XMLHttpRequest;c.onreadystatechange=function(){4==c.readyState&&200==c.status?postMessage(c.responseText):4==c.readyState&&200!=c.status&&postMessage("not 200. status = "+c.status)};a=JSON.parse(a);var d=new FormData,b;for(b in a)a.hasOwnProperty(b)&&"spaceSeparator"!=b&&"newLineSeparator"!=b&&"url"!=b&&(-1<a[b].indexOf(a.spaceSeparator)&&(a[b]=a[b].replace(new RegExp(a.spaceSeparator,"g")," ")),-1<a[b].indexOf(a.newLineSeparator)&&(a[b]=a[b].replace(new RegExp(a.newLineSeparator,
"g"),"\n")),0<b.length&&d.append(b,a[b]));c.open("POST",a.url,!0);c.send(d);d=a=null};