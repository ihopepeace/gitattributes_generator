function gitattributesGenerator(obj){
    /*
     * binaryFiles git will not try to modify them
     * crlfFiles git will convert line endings to CRLF on checkout
     * lfFiles git will convert line endings to LF on checkout
     * textFiles git will normalize line endings while writing into the repository
     *     & convert them to native line endings on checkout
     */
    var binaryFiles = obj.binary || [], //eg: ['jpeg', 'png']
        crlfFiles   = obj.crlf   || [], //eg: ['vproj', 'sln', 'bat']
        lfFiles     = obj.lf     || [], //eg:['cpp']
        textFiles   = obj.text   || []; //eg: ['js', 'c']
    var header= '# This file has been generated using \'.gitattributes Generator\'.\n# You can generate yours at http://ihopepeace.github.io/gitattributes_generator/\n\n* text=auto\n',
        buf_b = '# Declare files that are truly binary and shouldn\'t be modified.\n',
        buf_c = '# Declare files that should have CRLF line endings on checkout.\n',
        buf_l = '# Declare files that should have LF line endings on checkout.\n',
        buf_t = '# Explicitly declare text files that should be normalized and converted\n# to native line endings on checkout.\n';
    var i,length;
    length = binaryFiles.length;
    for(i = 0; i < length; ++i){
        buf_b += ('*.' + binaryFiles[i] + ' binary\n');
    }
    length = crlfFiles.length;
    for(i = 0; i < length; ++i){
        buf_c += ('*.' + crlfFiles[i] + ' eol=crlf\n');
    }
    length = lfFiles.length;
    for(i = 0; i < length; ++i){
        buf_l += ('*.' + lfFiles[i] + ' eol=lf\n');
    }
    length = textFiles.length;
    for(i = 0; i < length; ++i){
        buf_t += ('*.' + textFiles[i] + ' text\n');
    }
    console.log(header + '\n' + buf_t + '\n' + buf_c + '\n' + buf_l + '\n' + buf_b + '\n'); 
}
