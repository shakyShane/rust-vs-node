var input = require('fs').readFileSync('src/bench.html', 'utf8');
var len   = input.length;

for(var i = 0; i < 100; i+=1) run();

function run () {
    var index = 0;
    while (index < len) {
        var c = input.charAt(index);
        // noop
        index++;
    }
}
