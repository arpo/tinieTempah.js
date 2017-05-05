tinieTempah.js
=================

A tiny template engine. About 277 bytes gzipped in size.

Basic usage:

    var html = tTemp.render('<h1>{{heading}}</h1>', {heading: 'Hello World'});

Or put the template in a script tag.

    <script id="templ-HelloWorld" type="text/html">
        <h1>{{heading}}</h1>
    </script>

    var html = tTemp.render('HelloWorld', {heading: 'Hello World'});

Input data can also be an array.

    var html = tTemp.render('HelloWorld', [{heading: 'Hello World'}, {heading: 'Hola  Mundi'}]);