/*
Handlebars 

Handlebars were made for reusability and extensibility for HTML elements.
There are some steps to use handlebars in a project:
1. Add the Handlebars library to your project. — one option is to use a Content Delivery Network (CDN)
2. Create a Handlebars script in your HTML file.
3. In your JavaScript file, grab the HTML stored in the Handlebars script.
4. Use Handlebars.compile() to return a templating function.
5. Pass in a context object to the templating function to get a compiled template.
6. Render the compiled template onto the web page.

For example, if we use the following script:

<script id="foo" type="text/x-handlebars-template">
  <p>{{bar}}</p>
</script>

The JavaScript file should be like this:
*/

const source = document.getElementById('foo').innerHTML;

const template = Handlebars.compile(source);

const context = {
  bar: 'Text of the paragraph element'
};

const compiledHtml = template(context);

/*
After running our code, the expression, {{bar}} is replaced with the value of context.bar in our JavaScript file. 
In other words, compiledHtml will contain a string of '<p> Text of the paragraph element </p>'.
*/