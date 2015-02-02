function main(){
    var gitattributesGenerator = function gitattributesGenerator(obj){
        /*
        * binaryFiles git will not try to modify them
        * crlfFiles git will convert line endings to CRLF on checkout
        * lfFiles git will convert line endings to LF on checkout
        * textFiles git will normalize line endings while writing into the repository
        *     & convert them to native line endings on checkout
        */
        var binaryFiles = obj.binary || [],
            crlfFiles   = obj.crlf   || [],
            lfFiles     = obj.lf     || [],
            textFiles   = obj.text   || [];
        var header= '# This file has been generated using \'.gitattributes Generator\'.\n# You can generate yours at http://ihopepeace.github.io/gitattributes_generator\n\n* text=auto\n',
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
        var blob = new Blob([header + '\n' + buf_t + '\n' + buf_c + '\n' + buf_l + '\n' + buf_b + '\n'], {
                            type: "text/plain;charset=utf-8;",
                            });
        saveAs(blob, "my.gitattributes");
        //document.write(header + '\n' + buf_t + '\n' + buf_c + '\n' + buf_l + '\n' + buf_b + '\n'); 
    };
    var genClkd = function genClkd(){
        var obj = {};
        var pattern = /\s*,\s*/;
        
        obj.text =  document.getElementById('text').value.split(pattern)[0] ? document.getElementById('text').value.split(pattern) : null;
        document.getElementById('text').value = '';
        obj.binary = document.getElementById('binary').value.split(pattern)[0] ? document.getElementById('binary').value.split(pattern) : null;
        document.getElementById('binary').value = '';
        obj.crlf = document.getElementById('crlf').value.split(pattern)[0] ? document.getElementById('crlf').value.split(pattern) : null;
        document.getElementById('crlf').value = '';
        obj.lf = document.getElementById('lf').value.split(pattern)[0] ? document.getElementById('lf').value.split(pattern) : null;
        document.getElementById('lf').value = '';
        gitattributesGenerator(obj);
    };
    (function(){
        document.getElementById('gen').onclick = genClkd; 
    })();
    
};
