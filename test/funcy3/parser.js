/* Jison generated parser */
var parser = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"program":3,"statements":4,"eof":5,"block":6,"indent":7,"dedent":8,"while_statement":9,"while":10,"newline":11,"statement":12,"single_statement":13,"block_statement":14,"proc_call":15,"id":16,"args_list":17,"nonempty_args_list":18,"empty_args_list":19,"comma":20,"arg":21,"ID":22,"WHILE":23,"NEWLINE":24,"INDENT":25,"DEDENT":26,"EOF":27,"$accept":0,"$end":1},
terminals_: {2:"error",20:"comma",22:"ID",23:"WHILE",24:"NEWLINE",25:"INDENT",26:"DEDENT",27:"EOF"},
productions_: [0,[3,2],[6,3],[9,3],[4,2],[4,1],[12,2],[12,1],[13,1],[15,2],[17,1],[17,1],[18,3],[18,1],[19,0],[14,1],[16,1],[21,1],[10,1],[11,1],[7,1],[8,1],[5,1]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: return {type: "BLOCK", statements: $$[$0-1]}; 
break;
case 2: this.$ = $$[$0-1]; 
break;
case 3: this.$ = {type: "WHILE", statements: $$[$0]}; 
break;
case 4: this.$.push($$[$0]); 
break;
case 5: this.$ = [$$[$0]];   
break;
case 9: this.$ = {type: "PROC_CALL", name: $$[$0-1], args: $$[$0]}; 
break;
case 12: this.$ = this.$.push($$[$0]); 
break;
case 13: this.$ = [$$[$0]]; 
break;
case 14: this.$ = []; 
break;
case 16: this.$ = $$[$0]; 
break;
}
},
table: [{3:1,4:2,9:7,10:9,12:3,13:4,14:5,15:6,16:8,22:[1,10],23:[1,11]},{1:[3]},{5:12,9:7,10:9,12:13,13:4,14:5,15:6,16:8,22:[1,10],23:[1,11],27:[1,14]},{22:[2,5],23:[2,5],26:[2,5],27:[2,5]},{11:15,24:[1,16]},{22:[2,7],23:[2,7],26:[2,7],27:[2,7]},{24:[2,8]},{22:[2,15],23:[2,15],26:[2,15],27:[2,15]},{16:21,17:17,18:18,19:19,21:20,22:[1,10],24:[2,14]},{11:22,24:[1,16]},{20:[2,16],22:[2,16],24:[2,16]},{24:[2,18]},{1:[2,1]},{22:[2,4],23:[2,4],26:[2,4],27:[2,4]},{1:[2,22]},{22:[2,6],23:[2,6],26:[2,6],27:[2,6]},{22:[2,19],23:[2,19],25:[2,19],26:[2,19],27:[2,19]},{24:[2,9]},{20:[1,23],24:[2,10]},{24:[2,11]},{20:[2,13],24:[2,13]},{20:[2,17],24:[2,17]},{6:24,7:25,25:[1,26]},{16:21,21:27,22:[1,10]},{22:[2,3],23:[2,3],26:[2,3],27:[2,3]},{4:28,9:7,10:9,12:3,13:4,14:5,15:6,16:8,22:[1,10],23:[1,11]},{22:[2,20],23:[2,20]},{20:[2,12],24:[2,12]},{8:29,9:7,10:9,12:13,13:4,14:5,15:6,16:8,22:[1,10],23:[1,11],26:[1,30]},{22:[2,2],23:[2,2],26:[2,2],27:[2,2]},{22:[2,21],23:[2,21],26:[2,21],27:[2,21]}],
defaultActions: {6:[2,8],11:[2,18],12:[2,1],14:[2,22],17:[2,9],19:[2,11]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this,
        stack = [0],
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    //this.reductionCount = this.shiftCount = 0;

    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    if (typeof this.lexer.yylloc == 'undefined')
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);

    if (typeof this.yy.parseError === 'function')
        this.parseError = this.yy.parseError;

    function popStack (n) {
        stack.length = stack.length - 2*n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

    function lex() {
        var token;
        token = self.lexer.lex() || 1; // $end = 1
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval={},p,len,newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length-1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol == null)
                symbol = lex();
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

        // handle parse error
        _handle_error:
        if (typeof action === 'undefined' || !action.length || !action[0]) {

            if (!recovering) {
                // Report error
                expected = [];
                for (p in table[state]) if (this.terminals_[p] && p > 2) {
                    expected.push("'"+this.terminals_[p]+"'");
                }
                var errStr = '';
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + this.terminals_[symbol]+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == 1 /*EOF*/ ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr,
                    {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol == EOF) {
                    throw new Error(errStr || 'Parsing halted.');
                }

                // discard current lookahead and grab another
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            while (1) {
                // check for error recovery rule in this state
                if ((TERROR.toString()) in table[state]) {
                    break;
                }
                if (state == 0) {
                    throw new Error(errStr || 'Parsing halted.');
                }
                popStack(1);
                state = stack[stack.length-1];
            }

            preErrorSymbol = symbol; // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {

            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(this.lexer.yytext);
                lstack.push(this.lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = this.lexer.yyleng;
                    yytext = this.lexer.yytext;
                    yylineno = this.lexer.yylineno;
                    yyloc = this.lexer.yylloc;
                    if (recovering > 0)
                        recovering--;
                } else { // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2: // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3: // accept
                return true;
        }

    }

    return true;
}};


return parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); }
exports.main = function commonjsMain(args) {
    if (!args[1])
        throw new Error('Usage: '+args[0]+' FILE');
    if (typeof process !== 'undefined') {
        var source = require('fs').readFileSync(require('path').join(process.cwd(), args[1]), "utf8");
    } else {
        var cwd = require("file").path(require("file").cwd());
        var source = cwd.join(args[1]).read({charset: "utf-8"});
    }
    return exports.parser.parse(source);
}
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(typeof process !== 'undefined' ? process.argv.slice(1) : require("system").args);
}
}