Welcome to '.gitattributes Generator'
===================


It generates gitattributes file exclusively for your project. Go ahead and generate yours at http://ihopepeace.github.io/gitattributes_generator/. You don't have to read further for generating.

----------


Why this?
-------------

Every time you press return on your keyboard you're actually inserting an invisible character called a line ending. Historically, different operating systems have handled line endings differently.

When you view changes in a file, Git handles line endings in its own way. Since you're collaborating on projects with Git and GitHub, Git might produce unexpected results if, for example, you're working on a Windows machine, and your collaborator has made a change in OS X.

**Using** .gitattributes file you can overcome this problem most effectively. You can read more here https://help.github.com/articles/dealing-with-line-endings/



Please Contribute
-------------------


The project is not even in its beta. You are highly encouraged to contribute to it. 

The heart of this generator is *gitattributes_generator.js*. It contains a function which accepts an object.  The code is well documented. Please let me know if you aren't able to understand any portion. I will end this with an example usage...


> var obj = {
> text: ['c', 'js', 'json',],
> binary:['jpeg'],
> lf:[ ],
> crlf: ['vproj', 'sln']
> };
> gitattributesGenerator(obj);

