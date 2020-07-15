{
    consoleWarn('___---------START---------___');
    consoleWarn('Chapter 1 - ES?Now and Future');

    {
        let title = document.querySelector('#ES6');
        title.innerText = '___---^Let\'s begin!^---___';

        let pre = document.createElement('pre'),
            checked = false,
            initialPreHtml = 'let foo = [1, 2, 3]; <br/>let obj = {foo}; <br/>obj.foo;';
        pre.innerHTML = initialPreHtml;

        let check1 = document.createElement('button');
        check1.innerText = 'Check';
        check1.addEventListener('click', check1Method);

        appendChildElement(pre);
        appendChildElement(check1);

        let h4 = document.createElement('h4');
        h4.innerHTML = 'Shims/Polyfills';

        appendChildElement(h4);

        function shim() {
            if (!Object.is) {
                Object.is = function (v1, v2) {
                    // test for '-0'
                    if (v1 === 0 && v2 === 0) {
                        return 1 / v1 === 1 / v2;
                    }
                    // test for 'NaN'
                    if (v1 !== v1) {
                        return v2 !== v2;
                    }
                    // everything else
                    return v1 === v2;
                };
                return 'Object.is method was created!?' + ' = ' + Object.is();
            } else {
                return 'Object.is method already exists!?' + ' = ' + Object.is();
            }
        };

        h4.innerHTML += '<br>' + '----------------------' + '<br>' + shim() + ';';

        consoleWarn('Chapter 2 - Syntax');

        // let + for

        let funcs = [],
            h4LetFor = document.createElement('h4'),
            prePara = document.createElement('pre'),
            check2 = document.createElement('button'),
            initialPreParaHtml = 'let funcs = []; <br><br>for (let i = 0; i < 5; i++) { <br>    funcs.push(() => i); <br>} <br>',
            checked2 = false;

        check2.innerText = 'Check';
        check2.addEventListener('click', check2Method);

        h4LetFor.innerHTML = 'let + for <br> ------------------------------';
        prePara.innerHTML = initialPreParaHtml;
        appendChildElement(h4LetFor);
        appendChildElement(prePara);
        appendChildElement(check2);

        for (let i = 0; i < 5; i++) {
            funcs.push(() => { prePara.innerHTML += 'funcs[' + i + '](); // ' + i + '<br>' });
        }

        // var + for

        var funcs2 = [],
            h4VarFor = document.createElement('h4')
        prePara2 = document.createElement('pre'),
            check3 = document.createElement('button'),
            initialPreParaHtml2 = 'var funcs = []; <br><br>for (var i = 0; i < 5; i++) { <br>   funcs.push(() => i); <br>} <br>',
            checked3 = false;

        check3.innerText = 'Check';
        check1.style.position = 'sticky';
        check3.addEventListener('click', check3Method);

        h4VarFor.innerHTML = 'var + for <br> ------------------------------';
        prePara2.innerHTML = initialPreParaHtml2;
        appendChildElement(h4VarFor);
        appendChildElement(prePara2);
        appendChildElement(check3);

        for (var i = 0; i < 5; i++) {
            let j = i;
            funcs2.push(() => { prePara2.innerHTML += 'funcs[' + j + '](); // ' + i + '<br>' });
        }

        function check1Method() {
            let foo = [1, 2, 3],
                obj = { foo };
            if (!checked) {
                pre.innerHTML += ' // ' + '[' + obj.foo + ']';
                checked = true;
                check1.innerText = 'Uncheck';
            } else {
                pre.innerHTML = initialPreHtml;
                checked = false;
                check1.innerText = 'Check';
            }
        }

        function check2Method() {
            funcs[3]();
            funcs[4]();
            if (!checked2) {
                checked2 = true;
                check2.innerText = 'Uncheck';
            } else {
                prePara.innerHTML = initialPreParaHtml;
                checked2 = false;
                check2.innerText = 'Check';
            }
        }

        function check3Method() {
            funcs2[3]();
            funcs2[4]();
            if (!checked3) {
                checked3 = true;
                check3.innerText = 'Uncheck';
            } else {
                prePara2.innerHTML = initialPreParaHtml2;
                checked3 = false;
                check3.innerText = 'Check';
            }
        }

        function appendChildElement(el) {
            let content = document.querySelector('.es6');
            content.appendChild(el);
        }
    }

    // const Declarations

    {
        const a = [1, 2, 3];
        a.push(4);
        console.log(a);
        // a = 41; // TypeError!
    }

    consoleWarn('// Spread/Rest');

    {
        consoleWarn('-> ES6');
        const demo = (x, y, z) => console.log(x, y, z);
        demo(...[1, 2, 3]);


        consoleWarn('-> pre-ES6');
        function demoOld(x, y, z) {
            console.log(x, y, z);
        }
        demoOld.apply(null, [1, 2, 3]);

        consoleWarn('-> ES6');
        let a = [2, 3, 4],
            b = [1, ...a, 5];

        console.log(b);

        consoleWarn('-> pre-ES6');
        var c = [1].concat(a, [5]);
        console.log(c);

        consoleWarn('-> ES6');
        let foo = (x, y, ...z) => console.log(x, y, z);
        foo(1, 2, 3, 4, 5);

        let bar = (...args) => console.log(args);
        bar(6, 7, 8, 9, 10, 11);
    }


    consoleWarn('// Default Parameter Values');

    consoleWarn('-> pre-ES6');

    consoleWarn('function foo(text, x, y) { ',
        '  x = x || 11; ',
        '  y = y || 31; ',
        '  console.log(x + y); ',
        '}');

    function foo(text, x, y) {
        x = x || 11;
        y = y || 31;
        console.log(text, x + y);
    }
    foo('foo() //');
    foo('foo(5, 6) //', 5, 6);
    foo('foo(0, 42) //', 0, 42);
    foo('foo(5) //', 5);
    foo('foo(5, undefined) //', 5, undefined);
    foo('foo(5, null) //', 5, null);
    foo('foo(undefined, 6) //', undefined, 6);
    foo('foo(null, 6) //', null, 6);

    consoleWarn('// Default Value Expressions');

    {

        consoleWarn('function bar(val) { ',
            '  console.log(\'bar called!\'); ',
            '  return y + val; ',
            '}');

        consoleWarn('function foo(text, x = y + 3, z = bar(x)) { ',
            '  console.log(text, x, y); ',
            '}');

        function bar(val) {
            console.log('bar called!');
            return y + val;
        }

        function foo(text, x = y + 3, z = bar(x)) {
            console.log(text, x, y);
        }

        consoleWarn('var y = 5;');
        var y = 5;
        foo('foo() //');
        foo('foo(10) //', 10);
        consoleWarn('y = 6;');
        y = 6;
        foo('foo(undefined, 10) //', undefined, 10);

        var w = 1,
            z = 2;

        // function fee(x = w + 1, y = x + 1, z = z + 1) {
        //     console.log(x, y, z);
        // }

        // fee(); // TDZ ReferenceError - Cannot access z before initialization

        function fee(x = w + 1, y = x + 1, z = w + 1) {
            console.log(x, y, z);
        }

        fee();

        function goo(x = (function (v) { return v + 11; })(31)) { console.log(x); }
        goo();
    }


    {
        consoleWarn('// Destructuring');
        consoleWarn('// pre-ES6');

        consoleWarn('function foo() { ',
            '  return [1, 2, 3]',
            '}');

        function foo() {
            return [1, 2, 3];
        }

        consoleWarn('var tmp = foo(),',
            '    a = tmp[0],',
            '    b = tmp[1],',
            '    c = tmp[2];');

        var tmp = foo(),
            a = tmp[0],
            b = tmp[1],
            c = tmp[2];

        consoleWarn('console.log(a, b, c); // ' + a + ' ' + b + ' ' + c);
        // console.log(a, b, c);

        consoleWarn('function bar() { ',
            '  return {',
            '    x: 4, y: 5, z: 6',
            '  }',
            '}');

        function bar() {
            return {
                x: 4, y: 5, z: 6
            };
        }

        function bar2() {
            return {
                u: 4, v: 5, w: 6
            };
        }

        function bar3() {
            return {
                k: 4, l: 5, m: 6
            };
        }

        function bar4() {
            return {
                i: 4, j: 5, o: 6
            };
        }

        consoleWarn('let temp = bar(),',
            'x = temp.x, y = temp.y, z = temp.z;');
        let temp = bar(),
            x = temp.x, y = temp.y, z = temp.z;

        consoleWarn('console.log(x, y, z); // ' + x + ' ' + y + ' ' + z);
        // console.log(x, y, z);

        consoleWarn('// ES6');

        let [d, e, f] = foo(),
            { u, v, w } = bar2();

        consoleWarn('let [d, e, f] = foo(),',
            '   {u: u, v: v, w: w} = bar2();');
        consoleWarn('console.log(d, e, f); // ' + d + ' ' + e + ' ' + f);
        consoleWarn('console.log(u, v, w); // ' + u + ' ' + v + ' ' + w);

        consoleWarn('// ES6 Object property assignment pattern');

        let { k: ba, l: bb, m: bc } = bar3();

        consoleWarn('let {k: ba, l: bb, m: bc} = bar3();    ');
        consoleWarn('console.log(ba, bb, bc); // ' + ba + ' ' + bb + ' ' + bc);
        // consoleWarn('console.log(k, l, m); // ' + k + ' ' + l  + ' ' + m); // expected ReferenceError: k is not defined

        consoleWarn('// ES6 - Not just declarations');

        let t, g, h, i, j, o;
        [t, g, h] = foo();
        ({ i, j, o } = bar4());

        consoleWarn('let t, g, h, i, j, o;', '[t, g, h] = foo();', '({i, j, o} = bar4());');
        consoleWarn('console.log(t, g, h); // ' + t + ' ' + g + ' ' + h);
        consoleWarn('console.log(i, j, o); // ' + i + ' ' + j + ' ' + o);
    }

    consoleWarn('Destructuring Parameters');

    {
        function foo([x, y]) {
            console.log(x, y);
        }

        foo([1, 2]);
        foo([1]);
        foo([]);
        foo([,]);

    }

    {
        function foo({ x, y }) {
            console.log(x, y);
        }

        foo({ y: 1, x: 2 });
        foo({ x: 1, y: 2 });
        foo({ y: 42 });
        foo({ x: 2 / 0, y: -1 / 0 });
        foo({});
    }

    {
        function foo([x, y, ...z], ...w) {
            console.log(x, y, z, w);
        }

        foo([]);
        foo([1, 2, 3, 4], 5, 6);
        foo([9, 8, 7, 6, 5, 4, 3, 2, 1], 1, 2, 3, 4, 5, 6, 7, 8, 9);
    }

    consoleWarn('Destructuring Defaults + Parameter Defaults');

    {
        function foo({ x = 10 } = {}, { y } = { y: 10 }) {
            console.log(x, y);
        }

        foo(); // 10 10
        foo({}, {}); // 10 undefined
        foo({}); // 10 10
        foo({ x: 2 }, { y: 3 }); // 2 3
        foo(2, 3); // 10 undefined
        foo([2, 3]); // 10 10
        foo([2, 2], [3, 3]); // 10 undefined
        foo({}, { y: 'y' }); // 10 "y"
        foo({ x: 'a' }, {}); // a undefined
        foo({}, { y });// 10 6 ????
    }

    consoleWarn('Nested Defaults: Destructured and Restructured');

    {
        consoleWarn('--- > pre ES6');
        var defaults = {
            options: {
                remove: true, enable: false, instance: {}
            },
            log: {
                warn: true, error: true
            }
        },
            config = {
                options: {
                    remove: false, instance: null
                }
            };

        config.options = config.options || {};
        config.options.remove = (config.options.remove !== undefined) ?
            config.options.remove : defaults.options.remove;

        config.options.enable = (config.options.remove !== undefined) ?
            config.options.enable : defaults.options.enable;

        console.log('defaults', defaults);
        console.log('config', config);

        consoleWarn('--- > E6');

        let {
            options: {
                remove = defaults.options.remove,
                enable = defaults.options.enable,
                instance = defaults.options.instance
            } = {},
            log: {
                warn = defaults.log.warn,
                error = defaults.log.error
            } = {}
        } = config;

        console.log('config destructure', config);

        config = {
            options: { remove, enable, instance },
            log: { warn, error }
        };

        console.log('config restructure', config);
    }

    {
        consoleWarn('Object Literal Expresions');
        console.log('Concice Properties');

        console.log('--> pre ES6');

        var x = 2, y = 3, o = { x: x, y: y };
        console.log('var x = 2, y = 3, o = {x: x, y: y};', o);

        console.log('--> ES6');

        {
            let x = 2, y = 3, o = { x, y };
            console.log('let x = 2, y = 3, o = {x, y};', o);
        }

        console.log('Concise Methods');

        // --> pre ES6

        {
            var o = {
                x: function () { },
                y: function () { }
            };
        }

        {
            function runSomething(o) {
                var x = Math.random(),
                    y = Math.random();

                console.log('o.something(' + x + ' ,' + y + ')', o.something(x, y));
                return o.something(x, y);
            }

            runSomething({
                something: function something(x, y) {
                    if (x > y) {
                        return something(y, x);
                    }
                    return y - x;
                }
            });
        }

        // --> ES6

        {
            let o = {
                x() { },
                y() { }
            };
        }

        // --> ES6 Generators

        {
            let o = {
                *foo() { }
            };
        }
    }

    console.log('ES5 Getter/Setter');

    {
        var o = {
            __id: 10,
            get id() {
                return this.__id++;
            },
            set id(v) {
                this.__id = v;
            }
        };
        console.log('o.id', o.id);
        o.id = 20;
        console.log('o.id', o.id);
        console.log('o.__id', o.__id);

        var p = {
            __id: 0,
            get id() {
                return this.__id++;
            },
            set id({ id: v = 11 }) {
                this.__id = v;
            }
        };
        console.log('p.id', p.id);
        p.id = { id: 20 };
        console.log('p.id', p.id);
        console.log('p.__id', p.__id);
        p.id = { id: 33 };
        console.log('p.id', p.id);
        console.log('p.id', p.id);
    }

    consoleWarn('Computed Property Names');

    {
        let prefix = 'user_',
            o = {
                baz: function () { },
                [prefix + 'foo']: function () { },
                [prefix + 'bar']: function () { }
            },
            p = {
                [Symbol.toStringTag]: 'ha ha ha!'
            },
            q = {
                ['f' + 'oo']() { }, // computed concise method
                *['b' + 'ar']() { } // computed concise generator
            };

        console.log('o', o);
        console.log('p', p);
        console.log('q', q);
    }

    consoleWarn('Setting [[Prototype]]');

    {
        let o1 = {
            first: 1
        },
            o2 = {
                __proto__: o1,
                second: 2
            },
            o3 = {
                third: 3
            },
            o4 = {
                fourth: 4
            };
        console.log('o1', o1);
        console.log('o2', o2);
        console.log('o3', o3);
        Object.setPrototypeOf(o4, o3);
        console.log('o4', o4);
    }

    consoleWarn('Object super');

    {
        let o1 = {
            foo() {
                console.log('o1: foo');
            }
        },
            o2 = {
                foo() {
                    super.foo();
                    console.log('o2: foo');
                }
            };

        Object.setPrototypeOf(o2, o1);
        o2.foo();
    }

    consoleWarn('Template Literals'); // pg 51

    {
        console.log('--> pre ES6');

        var name = 'Mihai',
            greetings = 'Hi ' + name + '!';

        console.log('greetings: ', greetings);
        console.log('typeof greeting:', typeof greetings);

        console.log('--> ES6');

        let greets = `Hello ${name}!`;
        console.log('greets: ', greets);
        console.log('typeof greets:', typeof greets);

        let text = `Lorem 
        ipsum... 
        you know it`;

        console.log('text on multiple lines:', text);
    }

    consoleWarn('Interpolated Expressions');

    {
        let who = 'reader',
            text = `A very ${upper('warm')} welcome
            to all of you ${upper(`${who}s`)}!`;
        function upper(s) {
            return s.toUpperCase();
        }

        console.log('text: ', text);
    }

    console.log('Expression Scope');

    {
        function foo(str) {
            let name = 'foo';
            console.log(str);
        }

        function bar() {
            let name = 'bar';
            foo(`Hello from ${name}!`);
        }

        let name = 'global';
        bar();
    }

    consoleWarn('Tagged Template Literals');

    {
        function foo(strings, ...values) {
            console.log('strings:', strings);
            console.log('values: ', values);
        }

        var desc = 'awesome';

        foo`Everything is ${desc}!`;
    }

    {
        function bar() {
            return function foo(strings, ...values) {
                console.log('strings ', values);
            };
        }

        var desc = 'interesting';
        bar()`Everything is ${desc}`;
    }

    {
        let desc = 'awesome',
            text = tag`Everything is ${desc}!`;

        function tag(strings, ...values) {
            return strings.reduce(function (s, v, idx) {
                return s + (idx > 0 ? values[idx - 1] : '') + v;
            }, '');
        }

        console.log('text:', text);
    }

    {

        let amt1 = 11.99,
            amt2 = amt1 * 1.08,
            name = 'Mihai',
            text = dollabillsyall`Thanks for your purchase, ${name}!
                    Your product cost was ${amt1}, 
                    which with tax comes out to ${amt2}.`;

        function dollabillsyall(strings, ...values) {
            return strings.reduce(function (s, v, idx) {
                if (idx > 0) {
                    if (typeof values[idx - 1] === 'number') {
                        s += `$${values[idx - 1].toFixed(2)}`;
                    } else {
                        s += values[idx - 1];
                    }
                }
                return s + v;
            }, '');
        }

        console.log('text:', text);
    }

    consoleWarn('Arrow Functions');

    {
        let f1 = () => 12,
            f2 = x => x * 2,
            f3 = (x, y) => {
                let z = x * 2 + y;
                y++;
                x *= 3;
                return (x + y + z) / 2;
            };
        console.log('f1: ', f1());
        console.log('f2: ', f2(7));
        console.log('f3: ', f3(5, 3));
    }

    {
        let a = [1, 2, 3, 4, 5];
        a = a.map(v => v * 2);
        console.log('a:', a);
    }

    {
        let amt1 = 11.99,
            amt2 = amt1 * 1.08,
            name = 'Mihai',
            dollabillsyall = (strings, ...values) =>
                strings.reduce((s, v, idx) => {
                    if (idx > 0) {
                        if (typeof values[idx - 1] === 'number') {
                            s += `$${values[idx - 1].toFixed(2)}`;
                        } else {
                            s += values[idx - 1];
                        }
                    }
                    return s + v;
                }, ''),
            text = dollabillsyall`Thanks for your purchase, ${name}!
        Your product cost was ${amt1}, 
        which with tax comes out to ${amt2}.`
        console.log('arrow function dollabillsyall:', text);
    }

    consoleWarn('Not Just Shorter Syntax, But this');

    {
        let controller = {
            makeRequest: function () {
                btn.addEventListener('click', () => {
                    this.makeRequest();
                }, false);
            }
        };
        console.log(controller.makeRequest);
    }

    consoleWarn('for..of Loops');

    {
        console.log('for..of vs for..in loop');

        let a = ['a', 'b', 'c', 'd', 'e'];
        console.log('the array: ', a);
        console.log('for..in will return the index/key:');

        for (let idx in a) {
            console.log('idx', idx);
        }

        console.log('for..of will return the value:');

        for (let val of a) {
            console.log('val', val);
        }

        console.log('pre-ES6 for..of version:');

        var b = a,
            k = Object.keys(b);

        for (let val, i = 0; i < k.length; i++) {
            val = a[k[i]];
            // setTimeout(() => {
            console.log('idx ' + i);
            // }, 0);
            console.log('val', val);
        }

        console.log('ES6 non-for..of version:');

        for (
            let val, ret, it = a[Symbol.iterator]();
            !(ret = it.next()) && !ret.done;
        ) {
            val = ret.value;
            setTimeout(() => {
                console.log('idx ' + i);
            }, 0);
            console.log('val', val);
        }

        for (let c of 'Hakuna Matata!') {
            console.log(c);
        }

        let o = {};

        for (o.a of [1, 2, 3]) {
            console.log('the o object: ', o);
        }

        for ({ x: o.a } of [{ x: 1 }, { x: 2 }, { x: 3 }]) {
            console.log('o.a', o.a);
        }
    }

    consoleWarn('Unicode');

    {
        let gclef = '\uD834\uDD1E', gclef2 = '\u{1D11E}', cool = '\u2604', snowman = '\u2603';
        console.log('from 0x0000 to 0xFFFF', 'from', 0x0000, 'to', 0xFFFF)
        console.log('gclef pre-ES6:', gclef);
        console.log('gclef ES6:', gclef2);
        console.log('cool:', cool);
        console.log('gclef.length :', gclef.length);
        console.log('snowman.length :', snowman.length);

        console.log('Character Positioning');

        let s1 = 'abc\u0301d',
            s2 = 'ab\u0107d',
            s3 = 'ab\u{1d49e}d';

        console.log('s1, s2, s3: ', s1 + ', ' + s2 + ', ' + s3);
        console.log('s1.charAt(2)', s1.charAt(2));
        console.log('s2.charAt(2)', s2.charAt(2));
        console.log('s3.charAt(2)', s3.charAt(2));
        console.log('[...s1.normalize()][2]', [...s1.normalize()][2]);
        console.log('[...s2.normalize()][2]', [...s2.normalize()][2]);
        console.log('[...s3.normalize()][2]', [...s3.normalize()][2]);
        console.log('s1.normalize().codePointAt(2)', s1.normalize().codePointAt(2));
        console.log('s2.normalize().codePointAt(2)', s2.normalize().codePointAt(2));
        console.log('s3.normalize().codePointAt(2)', s3.normalize().codePointAt(2));
        console.log('String.fromCodePoint(s1.normalize().codePointAt(2))', String.fromCodePoint(s1.normalize().codePointAt(2)));
        console.log('String.fromCodePoint(s2.normalize().codePointAt(2))', String.fromCodePoint(s2.normalize().codePointAt(2)));
        console.log('String.fromCodePoint(s3.normalize().codePointAt(2))', String.fromCodePoint(s3.normalize().codePointAt(2)));

        console.log('Unicode Identifier Names');

        let \u03A9 = 33, \u{28400} = 33;
        console.log('let \u03A9 =', \u03A9);
        console.log('let \u{28400} =', \u{28400});

        let symbols = Symbol('New primitive type');
        console.log(symbols);

        let sym = Symbol('this is a symbol');
        console.log('let sym =', sym);
        console.log('typeof sym: ', typeof sym);

        console.log('sym instanceof Symbol: ', sym instanceof Symbol);

        let symObj = Object(sym);
        console.log('let symObj = Object(sym);');
        console.log('symObj instanceof Symbol:', symObj instanceof Symbol);
        console.log('symObj.valueOf() === sym:', symObj.valueOf() === sym);

        console.log('Symbols as Object Properties');

        let o = {
            foo: 33,
            [Symbol('bar')]: 'hello world',
            baz: true
        };

        console.log('object with a symbol as a prop', o);
        console.log('Object.getOwnPropertyNames(o)', Object.getOwnPropertyNames(o));
        console.log('Object.getOwnPropertySymbols(o)', Object.getOwnPropertySymbols(o));
    }

    consoleWarn('Chapter 3 - Organization');

    console.log('Iterator');

    {
        let arr = [1, 2, 3],
            it = arr[Symbol.iterator]();

        console.log('it.next()', it.next());
        console.log('it.next()', it.next());
        console.log('it.next()', it.next());
        console.log('it.next()', it.next());
    }

    {
        let greeting = 'hello world',
            it = greeting[Symbol.iterator]();

        console.log('it.next()', it.next());
        console.log('it.next()', it.next());
        console.log('it.next()', it.next());
        console.log('it.next()', it.next());
        console.log('it.next()', it.next());
        console.log('it.next()', it.next());
        console.log('it.next()', it.next());
        console.log('it.next()', it.next());
        console.log('it.next()', it.next());
        console.log('it.next()', it.next());
        console.log('it.next()', it.next());
        console.log('it.next()', it.next());
    }

    {
        let m = new Map();
        m.set('foo', 33);
        m.set({ cool: true }, 'Hello World');
        let it1 = m[Symbol.iterator](),
            it2 = m.entries();

        console.log('it1.next()', it1.next());
        console.log('it1.next()', it1.next());
        console.log('it1.next()', it1.next());
        console.log('it2.next()', it2.next());
        console.log('it2.next()', it2.next());
        console.log('it2.next()', it2.next());
    }

    console.log('Iterator loop')

    {
        let it = {
            [Symbol.iterator]() {
                return this;
            },
            next() {
                return { value: 1, done: true };
            }
        };

        console.log('it[Symbol.iterator]() === it: ', it[Symbol.iterator]() === it);

        for (let v of it) {
            console.log('v:', v);
        }

        for (let v, res; !(res = it.next()) && !res.done;) {
            v = res.value;
            console.log('v: ', v);
        }
    }

    console.log('Custom Iterators');

    {
        let fib = {
            [Symbol.iterator]() {
                let n1 = 1, n2 = 1;
                return {
                    // making the iterator an iterable
                    [Symbol.iterator]() {
                        return this;
                    },
                    next() {
                        let current = n2;
                        n2 = n1;
                        n1 = n1 + current;
                        return { value: current, done: false };
                    },
                    return(v) {
                        console.log('Fibonacci sequence abandoned.');
                        return { value: v, done: true };
                    }
                };
            }
        };

        let fibSeq = [];
        for (let v of fib) {
            fibSeq.push(v);
            if (v > 1000000) break;
        }
        console.log('Fibonacci sequence: ', fibSeq);
    }

    {
        let tasks = {
            [Symbol.iterator]() {
                let steps = this.actions.slice();
                return {
                    [Symbol.iterator]() {
                        return this;
                    },
                    next(...args) {
                        if (steps.length > 0) {
                            let res = steps.shift()(...args);
                            return { value: res, done: false };
                        } else {
                            return { done: true };
                        }
                    },
                    return(v) {
                        steps.length = 0;
                        return { value: v, done: true };
                    }
                };
            },
            actions: []
        };

        tasks.actions.push(
            (x) => {
                console.log('step 1:', x);
                return x * 2;
            },
            (x, y) => {
                console.log('step 2:', x, y);
                return x + (y * 2);
            },
            (x, y, z) => {
                console.log('step 3:', x, y, z);
                return (x * y) + z;
            }
        );
        let it = tasks[Symbol.iterator]();
        it.next(10);
        it.next(20, 50);
        it.next(20, 50, 120);
        it.next();
    }

    consoleWarn('Modules');

    {
        console.log('The Old Way');

        function Hello(name) {
            function greeting() {
                console.log('Hello ' + name + '!');
            }
            return { greeting: greeting };
        }

        var me = Hello('Mihai');
        me.greeting();
    }

    {
        var me = (function Hello(name) {
            function greeting() {
                console.log('Hi ' + name + '!');
            }
            return { greeting: greeting };
        })('Mihai');
        me.greeting();
    }

    console.log('The New Way, import and export');

    consoleLogger('export function foo() {', 'return \'Exported-Imported!\';', '}');
    consoleLogger('export let awesome = 33;', 'let bar = [1, 2, 3];', 'export { bar };');

    // or
    // export { foo as bar };
    // vs
    consoleLogger('function foo() {', 'return \'Exported-Imported!\;', '}');
    consoleLogger('let awesome = 33, bar = [1, 2, 3];');
    consoleLogger('export { foo, awesome, bar };');

    consoleLogger('let awesome = 33;', 'export { awesome };', 'awesome = 100;');
    consoleLogger();
    consoleLogger();
    // even if the module get's imported with awesome value at 33,
    // if later the value get's changed (to 100 for example),
    // 100 will be the value of awesome where the module gets imported
    // the binging with import-export is in essence a reference to/a pointer to awesome

    consoleLogger('function foo() {');
    consoleLogger('console.log(\'Exporting a binding to the function expression value at that moment\');', '}');
    consoleLogger('export default foo;');

    consoleLogger('function foo() {');
    consoleLogger('console.log(\'Exporting a binding to the foo identifier\');');
    consoleLogger('}', 'export { foo as default };');

    consoleLogger('export default {', 'foo() { console.log(\'\//\'); },', 'bar() { console.log(\'//\'); }', '}');

    consoleLogger('import { foo, bar, baz } from \'foo\';');

    consoleLogger('import { foo } from \'foo\'', 'foo();');
    consoleLogger('import { foo as theFooFunc } from \'foo\'', 'theFooFunc();');

    consoleLogger('If the module has just a default export the you want to import and bind:');
    consoleLogger('import foo from \'foo\';', '// or', 'import {defaults as foo} from \'foo\';');

    consoleLogger('Namespace import', 'export function bar() {...}', 'export let x = 33;');
    consoleLogger('export function baz() {...}', 'import * as foo from "foo";', 'foo.bar();', 'foo.x; //33', 'foo.baz();');

    consoleWarn('ES6 classes');

    {
        class Foo {
            constructor(a, b) {
                this.x = a;
                this.y = b;
            }
            gimmeXY() {
                return this.x * this.y;
            }
        };

        consoleLogger('class Foo {', 'constructor(a, b) {', 'this.x = a;', 'this.y = b;', '}');
        consoleLogger('gimmeXY() {', 'return this.x * this.y;', '}', '};')

        console.log('new Foo(2, 3).gimmeXY(); //', new Foo(2, 3).gimmeXY());

        consoleWarn('Extends and Super');

        class Bar extends Foo {
            constructor(a, b, c) {
                super(a, b);
                this.z = c;
            }
            gimmeXY() {
                return super.gimmeXY() * this.z;
            }
        };
        let b = new Bar(5, 15, 25);
        console.log('b.x: ', b.x);
        console.log('b.y: ', b.y);
        console.log('b.z: ', b.z);
        console.log('b.gimmeXY(): ', b.gimmeXY());
    }

    {
        consoleWarn('new.target - a "Meta Property" ');

        class Foo {
            constructor() {
                console.log('Foo (new.target.name): ', new.target.name);
            }
        };

        class Bar extends Foo {
            constructor() {
                super();
                console.log('Bar (new.target.name): ', new.target.name);
            }
            baz() {
                console.log('baz (new.target): ', new.target);
            }
        }

        let a = new Foo(),
            b = new Bar();

        b.baz();
    }

    {
        consoleWarn('static');

        class Foo {
            constructor() {
                console.log('new.target.answer', new.target.answer);
            }
            static answer = 33;
            static cool() {
                console.log('static cool');
            }
        };

        class Bar extends Foo {
            constructor() {
                super();
                console.log('new.target.answer: ', new.target.answer);
            }
        };
        Foo.answer;
        Bar.answer;
        let b = new Bar();
        // b.cool(); // not working!

        consoleLogger('👍 this:')
        Object.getPrototypeOf(b).constructor.cool();
        consoleLogger('👎 vs deprecated:');
        b.__proto__.constructor.__proto__.cool();
        b.answer;
    }

    {
        consoleLogger('Array.of(..) - Static Function');

        let a = Array(3);
        console.log('Array(3)', a);
        console.log('Array.length', a.length);
        console.log('Array[0]', a[0]);

        let b = Array.of(3);
        console.log('Array of (3) length', b.length);
        console.log('Array of [0]', b[0]);

        let c = Array.of(1, 2, 3);
        console.log('Array of (1, 2, 3) length', c.length);
        console.log('Array of [0]', c[0]);
    }

    {
        consoleLogger('Exponentiation Operator');

        let a = 2;
        console.log('a**4', a**4);
        console.log('Math.pow(a, 4)', Math.pow(a, 4));
    }

    {
        consoleLogger('Array#includes');

        let vals = ['foo', 'bar', 42, 'baz'];
        
        if (vals.indexOf(42) !== -1) {
            console.log('vals.indexOf(42)', vals.indexOf(42));
        }

        if (~vals.indexOf(42)) {
            console.log('~vals.indexOf(42)', vals.indexOf(42));
        }
        
    }

    function consoleWarn() {
        for (let i = 0; i < arguments.length; i++) {
            console.warn(arguments[i]);
        }
    }

    function consoleLogger() {
        for (let i = 0; i < arguments.length; i++) {
            console.log(arguments[i]);
        }
    }

    setTimeout(() => {
        consoleWarn('___----------END----------___');
    }, 2000);
}