"use strict";
function require( path ){ return $node[ path ] };
"use strict"

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var $ = ( typeof module === 'object' ) ? ( module['export'+'s'] = globalThis ) : globalThis
$.$$ = $

;

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "../" ) ] }; 
;
"use strict";
Error.stackTraceLimit = 50;
var $;
(function ($) {
})($ || ($ = {}));
module.exports = $;
//mam.ts
;

$node[ "../mam.ts" ] = $node[ "../mam.ts" ] = module.exports }.call( {} , {} )
;
"use strict";
var $;
(function ($) {
    $.$mol_ambient_ref = Symbol('$mol_ambient_ref');
    function $mol_ambient(overrides) {
        return Object.setPrototypeOf(overrides, this || $);
    }
    $.$mol_ambient = $mol_ambient;
})($ || ($ = {}));
//mol/ambient/ambient.ts
;
"use strict";
var $;
(function ($) {
    const instances = new WeakSet();
    function $mol_delegate(proto, target) {
        const proxy = new Proxy(proto, {
            get: (_, field) => {
                const obj = target();
                let val = Reflect.get(obj, field);
                if (typeof val === 'function') {
                    val = val.bind(obj);
                }
                return val;
            },
            has: (_, field) => Reflect.has(target(), field),
            set: (_, field, value) => Reflect.set(target(), field, value),
            getOwnPropertyDescriptor: (_, field) => Reflect.getOwnPropertyDescriptor(target(), field),
            ownKeys: () => Reflect.ownKeys(target()),
            getPrototypeOf: () => Reflect.getPrototypeOf(target()),
            setPrototypeOf: (_, donor) => Reflect.setPrototypeOf(target(), donor),
            isExtensible: () => Reflect.isExtensible(target()),
            preventExtensions: () => Reflect.preventExtensions(target()),
            apply: (_, self, args) => Reflect.apply(target(), self, args),
            construct: (_, args, retarget) => Reflect.construct(target(), args, retarget),
            defineProperty: (_, field, descr) => Reflect.defineProperty(target(), field, descr),
            deleteProperty: (_, field) => Reflect.deleteProperty(target(), field),
        });
        instances.add(proxy);
        return proxy;
    }
    $.$mol_delegate = $mol_delegate;
    Reflect.defineProperty($mol_delegate, Symbol.hasInstance, {
        value: (obj) => instances.has(obj),
    });
})($ || ($ = {}));
//mol/delegate/delegate.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_owning_map = new WeakMap();
    function $mol_owning_allow(having) {
        try {
            if (!having)
                return false;
            if (typeof having !== 'object')
                return false;
            if (having instanceof $mol_delegate)
                return false;
            if (typeof having['destructor'] !== 'function')
                return false;
            return true;
        }
        catch {
            return false;
        }
    }
    $.$mol_owning_allow = $mol_owning_allow;
    function $mol_owning_get(having, Owner) {
        if (!$mol_owning_allow(having))
            return null;
        while (true) {
            const owner = $.$mol_owning_map.get(having);
            if (!owner)
                return owner;
            if (!Owner)
                return owner;
            if (owner instanceof Owner)
                return owner;
            having = owner;
        }
    }
    $.$mol_owning_get = $mol_owning_get;
    function $mol_owning_check(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having) !== owner)
            return false;
        return true;
    }
    $.$mol_owning_check = $mol_owning_check;
    function $mol_owning_catch(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having))
            return false;
        $.$mol_owning_map.set(having, owner);
        return true;
    }
    $.$mol_owning_catch = $mol_owning_catch;
})($ || ($ = {}));
//mol/owning/owning.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail(error) {
        throw error;
    }
    $.$mol_fail = $mol_fail;
})($ || ($ = {}));
//mol/fail/fail.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail_hidden(error) {
        throw error;
    }
    $.$mol_fail_hidden = $mol_fail_hidden;
})($ || ($ = {}));
//mol/fail/hidden/hidden.ts
;
"use strict";
//mol/type/writable/writable.ts
;
"use strict";
var $;
(function ($) {
    class $mol_object2 {
        static $ = $;
        [Symbol.toStringTag];
        [$mol_ambient_ref] = null;
        get $() {
            if (this[$mol_ambient_ref])
                return this[$mol_ambient_ref];
            const owner = $mol_owning_get(this);
            return this[$mol_ambient_ref] = owner?.$ || $mol_object2.$;
        }
        set $(next) {
            if (this[$mol_ambient_ref])
                $mol_fail_hidden(new Error('Context already defined'));
            this[$mol_ambient_ref] = next;
        }
        static create(init) {
            const obj = new this;
            if (init)
                init(obj);
            return obj;
        }
        static [Symbol.toPrimitive]() {
            return this.toString();
        }
        static toString() {
            if (Symbol.toStringTag in this)
                return this[Symbol.toStringTag];
            return this.name;
        }
        destructor() { }
        toString() {
            return this[Symbol.toStringTag] || this.constructor.name + '()';
        }
        toJSON() {
            return this.toString();
        }
    }
    $.$mol_object2 = $mol_object2;
})($ || ($ = {}));
//mol/object2/object2.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_tick extends $mol_object2 {
        task;
        promise;
        cancelled = false;
        constructor(task) {
            super();
            this.task = task;
            this.promise = Promise.resolve().then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_tick = $mol_after_tick;
})($ || ($ = {}));
//mol/after/tick/tick.ts
;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));
//mol/dom/context/context.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = self;
})($ || ($ = {}));
//mol/dom/context/context.web.ts
;
"use strict";
var $;
(function ($) {
    let all = [];
    let el = null;
    let timer = null;
    function $mol_style_attach(id, text) {
        all.push(`/* ${id} */\n\n${text}`);
        if (timer)
            return el;
        const doc = $mol_dom_context.document;
        if (!doc)
            return null;
        el = doc.createElement('style');
        el.id = `$mol_style_attach`;
        doc.head.appendChild(el);
        timer = new $mol_after_tick(() => {
            el.innerHTML = '\n' + all.join('\n\n');
            all = [];
            el = null;
            timer = null;
        });
        return el;
    }
    $.$mol_style_attach = $mol_style_attach;
})($ || ($ = {}));
//mol/style/attach/attach.ts
;
"use strict";
var $;
(function ($) {
    class $mol_decor {
        value;
        constructor(value) {
            this.value = value;
        }
        prefix() { return ''; }
        valueOf() { return this.value; }
        postfix() { return ''; }
        toString() {
            return `${this.prefix()}${this.valueOf()}${this.postfix()}`;
        }
    }
    $.$mol_decor = $mol_decor;
})($ || ($ = {}));
//mol/decor/decor.ts
;
"use strict";
var $;
(function ($) {
    class $mol_style_unit extends $mol_decor {
        literal;
        constructor(value, literal) {
            super(value);
            this.literal = literal;
        }
        postfix() {
            return this.literal;
        }
        static per(value) { return new $mol_style_unit(value, '%'); }
        static px(value) { return new $mol_style_unit(value, 'px'); }
        static mm(value) { return new $mol_style_unit(value, 'mm'); }
        static cm(value) { return new $mol_style_unit(value, 'cm'); }
        static Q(value) { return new $mol_style_unit(value, 'Q'); }
        static in(value) { return new $mol_style_unit(value, 'in'); }
        static pc(value) { return new $mol_style_unit(value, 'pc'); }
        static pt(value) { return new $mol_style_unit(value, 'pt'); }
        static cap(value) { return new $mol_style_unit(value, 'cap'); }
        static ch(value) { return new $mol_style_unit(value, 'ch'); }
        static em(value) { return new $mol_style_unit(value, 'em'); }
        static rem(value) { return new $mol_style_unit(value, 'rem'); }
        static ex(value) { return new $mol_style_unit(value, 'ex'); }
        static ic(value) { return new $mol_style_unit(value, 'ic'); }
        static lh(value) { return new $mol_style_unit(value, 'lh'); }
        static rlh(value) { return new $mol_style_unit(value, 'rlh'); }
        static vh(value) { return new $mol_style_unit(value, 'vh'); }
        static vw(value) { return new $mol_style_unit(value, 'vw'); }
        static vi(value) { return new $mol_style_unit(value, 'vi'); }
        static vb(value) { return new $mol_style_unit(value, 'vb'); }
        static vmin(value) { return new $mol_style_unit(value, 'vmin'); }
        static vmax(value) { return new $mol_style_unit(value, 'vmax'); }
        static deg(value) { return new $mol_style_unit(value, 'deg'); }
        static rad(value) { return new $mol_style_unit(value, 'rad'); }
        static grad(value) { return new $mol_style_unit(value, 'grad'); }
        static turn(value) { return new $mol_style_unit(value, 'turn'); }
        static s(value) { return new $mol_style_unit(value, 's'); }
        static ms(value) { return new $mol_style_unit(value, 'ms'); }
    }
    $.$mol_style_unit = $mol_style_unit;
})($ || ($ = {}));
//mol/style/unit/unit.ts
;
"use strict";
var $;
(function ($) {
    const { per } = $mol_style_unit;
    class $mol_style_func extends $mol_decor {
        name;
        constructor(name, value) {
            super(value);
            this.name = name;
        }
        prefix() { return this.name + '('; }
        postfix() { return ')'; }
        static calc(value) {
            return new $mol_style_func('calc', value);
        }
        static vary(name) {
            return new $mol_style_func('var', name);
        }
        static url(href) {
            return new $mol_style_func('url', JSON.stringify(href));
        }
        static hsla(hue, saturation, lightness, alpha) {
            return new $mol_style_func('hsla', [hue, per(saturation), per(lightness), alpha]);
        }
        static clamp(min, mid, max) {
            return new $mol_style_func('clamp', [min, mid, max]);
        }
        static rgba(red, green, blue, alpha) {
            return new $mol_style_func('rgba', [red, green, blue, alpha]);
        }
        static scale(zoom) {
            return new $mol_style_func('scale', [zoom]);
        }
        static cubic_bezier(x1, y1, x2, y2) {
            return new $mol_style_func('cubic-bezier', [x1, y1, x2, y2]);
        }
    }
    $.$mol_style_func = $mol_style_func;
})($ || ($ = {}));
//mol/style/func/func.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/theme/theme.css", ":root {\n\t--mol_theme_hue: 210deg;\n\t--mol_theme_luma: -1;\n\t--mol_theme_satur: 1;\n\t--mol_theme_image: none;\n}\n\n[mol_theme] {\n\tcolor: var(--mol_theme_text);\n\tfill: var(--mol_theme_text);\n}\n:where([mol_theme]) {\n\tbackground-color: var(--mol_theme_back);\n}\n\t\n:root, [mol_theme] {\n\t--mol_theme_back: hsl( var(--mol_theme_hue), calc( var(--mol_theme_satur) * 20% ), calc( 55% + 45% * var(--mol_theme_luma) ) );\n\t--mol_theme_text: hsl( var(--mol_theme_hue), 0%, calc( 40% - 40% * var(--mol_theme_luma) ) );\n\t--mol_theme_field: hsl( var(--mol_theme_hue), calc( var(--mol_theme_satur) * 50% ), calc( 54% + 46% * var(--mol_theme_luma) ), .25 );\n\t\n\t--mol_theme_card: hsl( var(--mol_theme_hue), calc( var(--mol_theme_satur) * 50% ), calc( 55% + 35% * var(--mol_theme_luma) ), .25 );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 0%, 50%, .1 );\n\t--mol_theme_line: hsl( var(--mol_theme_hue), 0%, 50%, .2 );\n\t--mol_theme_shade: hsl( var(--mol_theme_hue), 0%, 50%, 1 );\n\t\n\t--mol_theme_control: hsl( var(--mol_theme_hue), 50%, calc( 50% - 10% * var(--mol_theme_luma) ) );\n\t--mol_theme_current: hsl( calc( var(--mol_theme_hue) - 90deg ), 50%, calc( 50% - 10% * var(--mol_theme_luma) ) );\n\t--mol_theme_special: hsl( calc( var(--mol_theme_hue) + 90deg ), 50%, calc( 50% - 10% * var(--mol_theme_luma) ) );\n\t--mol_theme_focus: hsl( calc( var(--mol_theme_hue) + 180deg ), 100%, calc( 55% - 10% * var(--mol_theme_luma) ) );\n\t\n}\n\n[mol_theme=\"$mol_theme_light\"] {\n\t--mol_theme_luma: 1;\n\t--mol_theme_image: none;\n}\n\n[mol_theme=\"$mol_theme_dark\"] {\n\t--mol_theme_luma: -1;\n\t--mol_theme_image: invert(1) hue-rotate( 180deg );\n}\n\n[mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_luma: -2;\n\t--mol_theme_back: hsl( var(--mol_theme_hue), 50%, 40% );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 60%, 30% );\n\t--mol_theme_current: hsl( var(--mol_theme_hue), 100%, 20% );\n}\n\n[mol_theme=\"$mol_theme_current\"] {\n\tbackground-color: var(--mol_theme_back);\n\t--mol_theme_back: hsl( calc( var(--mol_theme_hue) - 90deg ), 50%, calc( 50% + 30% * var(--mol_theme_luma) ) );\n}\n\n[mol_theme=\"$mol_theme_special\"] {\n\t--mol_theme_card: hsl( calc( var(--mol_theme_hue) + 90deg ), 50%, calc( 55% + 35% * var(--mol_theme_luma) ), .25 );\n}\n\n[mol_theme=\"$mol_theme_accent\"] {\n\tbackground-color: var(--mol_theme_back);\n\t--mol_theme_luma: -2;\n\t--mol_theme_back: hsl( calc( var(--mol_theme_hue) + 180deg ), 90%, 50% );\n\t--mol_theme_hover: hsl( calc( var(--mol_theme_hue) + 180deg ), 80%, 35% );\n}\n\n[mol_theme=\"$mol_theme_accent\"] [mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: black;\n}\n");
})($ || ($ = {}));
//mol/theme/-css/theme.css.ts
;
"use strict";
var $;
(function ($) {
    const { vary } = $mol_style_func;
    $.$mol_theme = {
        back: vary('--mol_theme_back'),
        hover: vary('--mol_theme_hover'),
        card: vary('--mol_theme_card'),
        current: vary('--mol_theme_current'),
        special: vary('--mol_theme_special'),
        text: vary('--mol_theme_text'),
        control: vary('--mol_theme_control'),
        shade: vary('--mol_theme_shade'),
        line: vary('--mol_theme_line'),
        focus: vary('--mol_theme_focus'),
        field: vary('--mol_theme_field'),
        image: vary('--mol_theme_image'),
    };
})($ || ($ = {}));
//mol/theme/theme.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/gap/gap.css", ":root {\n\t--mol_gap_block: .75rem;\n\t--mol_gap_text: .5rem .75rem;\n\t--mol_gap_round: .25rem;\n\t--mol_gap_space: .25rem;\n\t--mol_gap_blur: .5rem;\n}\n");
})($ || ($ = {}));
//mol/gap/-css/gap.css.ts
;
"use strict";
var $;
(function ($) {
    const { vary } = $mol_style_func;
    $.$mol_gap = {
        block: vary('--mol_gap_block'),
        text: vary('--mol_gap_text'),
        round: vary('--mol_gap_round'),
        space: vary('--mol_gap_space'),
        blur: vary('--mol_gap_blur'),
    };
})($ || ($ = {}));
//mol/gap/gap.ts
;
"use strict";
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    $_1.$mol_object_field = Symbol('$mol_object_field');
    class $mol_object extends $mol_object2 {
        static make(config) {
            return super.create(obj => {
                for (let key in config)
                    obj[key] = config[key];
            });
        }
    }
    $_1.$mol_object = $mol_object;
})($ || ($ = {}));
//mol/object/object.ts
;
"use strict";
var $;
(function ($) {
    let $mol_wire_cursor;
    (function ($mol_wire_cursor) {
        $mol_wire_cursor[$mol_wire_cursor["stale"] = -1] = "stale";
        $mol_wire_cursor[$mol_wire_cursor["doubt"] = -2] = "doubt";
        $mol_wire_cursor[$mol_wire_cursor["fresh"] = -3] = "fresh";
        $mol_wire_cursor[$mol_wire_cursor["final"] = -4] = "final";
    })($mol_wire_cursor = $.$mol_wire_cursor || ($.$mol_wire_cursor = {}));
})($ || ($ = {}));
//mol/wire/cursor/cursor.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub extends Object {
        data = [];
        static get [Symbol.species]() {
            return Array;
        }
        sub_from = 0;
        get sub_list() {
            const res = [];
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                res.push(this.data[i]);
            }
            return res;
        }
        get sub_empty() {
            return this.sub_from === this.data.length;
        }
        sub_on(sub, pub_pos) {
            const pos = this.data.length;
            this.data.push(sub, pub_pos);
            return pos;
        }
        sub_off(sub_pos) {
            if (!(sub_pos < this.data.length)) {
                $mol_fail(new Error(`Wrong pos ${sub_pos}`));
            }
            const end = this.data.length - 2;
            if (sub_pos !== end) {
                this.peer_move(end, sub_pos);
            }
            this.data.pop();
            this.data.pop();
            if (this.data.length === this.sub_from)
                this.reap();
        }
        reap() { }
        promote() {
            $mol_wire_auto()?.track_next(this);
        }
        fresh() { }
        complete() { }
        emit(quant = $mol_wire_cursor.stale) {
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                ;
                this.data[i].absorb(quant);
            }
        }
        peer_move(from_pos, to_pos) {
            const peer = this.data[from_pos];
            const self_pos = this.data[from_pos + 1];
            this.data[to_pos] = peer;
            this.data[to_pos + 1] = self_pos;
            peer.peer_repos(self_pos, to_pos);
        }
        peer_repos(peer_pos, self_pos) {
            this.data[peer_pos + 1] = self_pos;
        }
    }
    $.$mol_wire_pub = $mol_wire_pub;
})($ || ($ = {}));
//mol/wire/pub/pub.ts
;
"use strict";
//mol/wire/sub/sub.ts
;
"use strict";
var $;
(function ($) {
    let auto = null;
    function $mol_wire_auto(next = auto) {
        return auto = next;
    }
    $.$mol_wire_auto = $mol_wire_auto;
    $.$mol_wire_affected = [];
})($ || ($ = {}));
//mol/wire/wire.ts
;
"use strict";
var $;
(function ($) {
    $['devtoolsFormatters'] ||= [];
    function $mol_dev_format_register(config) {
        $['devtoolsFormatters'].push(config);
    }
    $.$mol_dev_format_register = $mol_dev_format_register;
    $.$mol_dev_format_head = Symbol('$mol_dev_format_head');
    $.$mol_dev_format_body = Symbol('$mol_dev_format_body');
    $mol_dev_format_register({
        header: (val, config = false) => {
            if (config)
                return null;
            if (!val)
                return null;
            if ($.$mol_dev_format_head in val) {
                return val[$.$mol_dev_format_head]();
            }
            if (typeof val === 'function') {
                return $mol_dev_format_native(val);
            }
            return null;
        },
        hasBody: val => val[$.$mol_dev_format_body],
        body: val => val[$.$mol_dev_format_body](),
    });
    function $mol_dev_format_native(obj) {
        if (typeof obj === 'undefined')
            return $.$mol_dev_format_shade('undefined');
        if (typeof obj !== 'object' && typeof obj !== 'function')
            return obj;
        return [
            'object',
            {
                object: obj,
                config: true,
            },
        ];
    }
    $.$mol_dev_format_native = $mol_dev_format_native;
    function $mol_dev_format_auto(obj) {
        if (obj == null)
            return $.$mol_dev_format_shade(String(obj));
        if (typeof obj === 'object' && $.$mol_dev_format_head in obj) {
            return obj[$.$mol_dev_format_head]();
        }
        return [
            'object',
            {
                object: obj,
                config: false,
            },
        ];
    }
    $.$mol_dev_format_auto = $mol_dev_format_auto;
    function $mol_dev_format_element(element, style, ...content) {
        const styles = [];
        for (let key in style)
            styles.push(`${key} : ${style[key]}`);
        return [
            element,
            {
                style: styles.join(' ; '),
            },
            ...content,
        ];
    }
    $.$mol_dev_format_element = $mol_dev_format_element;
    function $mol_dev_format_span(style, ...content) {
        return $mol_dev_format_element('span', {
            'vertical-align': '8%',
            ...style,
        }, ...content);
    }
    $.$mol_dev_format_span = $mol_dev_format_span;
    $.$mol_dev_format_div = $mol_dev_format_element.bind(null, 'div');
    $.$mol_dev_format_ol = $mol_dev_format_element.bind(null, 'ol');
    $.$mol_dev_format_li = $mol_dev_format_element.bind(null, 'li');
    $.$mol_dev_format_table = $mol_dev_format_element.bind(null, 'table');
    $.$mol_dev_format_tr = $mol_dev_format_element.bind(null, 'tr');
    $.$mol_dev_format_td = $mol_dev_format_element.bind(null, 'td');
    $.$mol_dev_format_accent = $mol_dev_format_span.bind(null, {
        'color': 'magenta',
    });
    $.$mol_dev_format_strong = $mol_dev_format_span.bind(null, {
        'font-weight': 'bold',
    });
    $.$mol_dev_format_string = $mol_dev_format_span.bind(null, {
        'color': 'green',
    });
    $.$mol_dev_format_shade = $mol_dev_format_span.bind(null, {
        'color': 'gray',
    });
    $.$mol_dev_format_indent = $.$mol_dev_format_div.bind(null, {
        'margin-left': '13px'
    });
})($ || ($ = {}));
//mol/dev/format/format.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub_sub extends $mol_wire_pub {
        pub_from = 0;
        cursor = $mol_wire_cursor.stale;
        get pub_list() {
            const res = [];
            const max = this.cursor >= 0 ? this.cursor : this.sub_from;
            for (let i = this.pub_from; i < max; i += 2) {
                if (this.data[i])
                    res.push(this.data[i]);
            }
            return res;
        }
        track_on() {
            this.cursor = this.pub_from;
            const sub = $mol_wire_auto();
            $mol_wire_auto(this);
            return sub;
        }
        promote() {
            if (this.cursor >= this.pub_from) {
                $mol_fail(new Error('Circular subscription'));
            }
            super.promote();
        }
        track_next(pub) {
            if (this.cursor < 0)
                $mol_fail(new Error('Promo to non begun sub'));
            if (this.cursor < this.sub_from) {
                const next = this.data[this.cursor];
                if (pub === undefined)
                    return next ?? null;
                if (next === pub) {
                    this.cursor += 2;
                    return next;
                }
                if (next) {
                    if (this.sub_from < this.data.length) {
                        this.peer_move(this.sub_from, this.data.length);
                    }
                    this.peer_move(this.cursor, this.sub_from);
                    this.sub_from += 2;
                }
            }
            else {
                if (pub === undefined)
                    return null;
                if (this.sub_from < this.data.length) {
                    this.peer_move(this.sub_from, this.data.length);
                }
                this.sub_from += 2;
            }
            this.data[this.cursor] = pub;
            this.data[this.cursor + 1] = pub.sub_on(this, this.cursor);
            this.cursor += 2;
            return pub;
        }
        track_off(sub) {
            $mol_wire_auto(sub);
            if (this.cursor < 0) {
                $mol_fail(new Error('End of non begun sub'));
            }
            for (let cursor = this.pub_from; cursor < this.cursor; cursor += 2) {
                const pub = this.data[cursor];
                pub.fresh();
            }
            this.cursor = $mol_wire_cursor.fresh;
        }
        pub_off(sub_pos) {
            this.data[sub_pos] = undefined;
            this.data[sub_pos + 1] = undefined;
        }
        destructor() {
            for (let cursor = this.data.length - 2; cursor >= this.sub_from; cursor -= 2) {
                const sub = this.data[cursor];
                const pos = this.data[cursor + 1];
                sub.pub_off(pos);
                this.data.pop();
                this.data.pop();
            }
            this.cursor = this.pub_from;
            this.track_cut();
            this.cursor = $mol_wire_cursor.final;
        }
        track_cut() {
            if (this.cursor < this.pub_from) {
                $mol_fail(new Error('Cut of non begun sub'));
            }
            let tail = 0;
            for (let cursor = this.cursor; cursor < this.sub_from; cursor += 2) {
                const pub = this.data[cursor];
                pub?.sub_off(this.data[cursor + 1]);
                if (this.sub_from < this.data.length) {
                    this.peer_move(this.data.length - 2, cursor);
                    this.data.pop();
                    this.data.pop();
                }
                else {
                    ++tail;
                }
            }
            for (; tail; --tail) {
                this.data.pop();
                this.data.pop();
            }
            this.sub_from = this.cursor;
        }
        complete() { }
        complete_pubs() {
            const limit = this.cursor < 0 ? this.sub_from : this.cursor;
            for (let cursor = this.pub_from; cursor < limit; cursor += 2) {
                const pub = this.data[cursor];
                pub?.complete();
            }
        }
        absorb(quant = $mol_wire_cursor.stale) {
            if (this.cursor === $mol_wire_cursor.final)
                return;
            if (this.cursor >= quant)
                return;
            this.cursor = quant;
            this.emit($mol_wire_cursor.doubt);
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_native(this);
        }
        get pub_empty() {
            return this.sub_from === this.pub_from;
        }
    }
    $.$mol_wire_pub_sub = $mol_wire_pub_sub;
})($ || ($ = {}));
//mol/wire/pub/sub/sub.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_frame extends $mol_object2 {
        task;
        static _promise = null;
        static get promise() {
            if (this._promise)
                return this._promise;
            return this._promise = new Promise(done => {
                const complete = () => {
                    this._promise = null;
                    done();
                };
                if (typeof requestAnimationFrame === 'function') {
                    requestAnimationFrame(complete);
                }
                else {
                    setTimeout(complete, 16);
                }
            });
        }
        cancelled = false;
        promise;
        constructor(task) {
            super();
            this.task = task;
            this.promise = $mol_after_frame.promise.then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_frame = $mol_after_frame;
})($ || ($ = {}));
//mol/after/frame/frame.web.ts
;
"use strict";
var $;
(function ($) {
    function $mol_promise_like(val) {
        return val && typeof val.then === 'function';
    }
    $.$mol_promise_like = $mol_promise_like;
})($ || ($ = {}));
//mol/promise/like/like.ts
;
"use strict";
var $;
(function ($) {
    const handled = new WeakSet();
    class $mol_wire_fiber extends $mol_wire_pub_sub {
        task;
        host;
        static warm = true;
        static planning = new Set();
        static reaping = new Set();
        static plan_task = null;
        static plan() {
            if (this.plan_task)
                return;
            this.plan_task = new $mol_after_frame(() => {
                try {
                    this.sync();
                }
                finally {
                    $mol_wire_fiber.plan_task = null;
                }
            });
        }
        static sync() {
            while (this.planning.size) {
                for (const fiber of this.planning) {
                    this.planning.delete(fiber);
                    if (fiber.cursor >= 0)
                        continue;
                    if (fiber.cursor === $mol_wire_cursor.final)
                        continue;
                    fiber.fresh();
                }
            }
            while (this.reaping.size) {
                const fibers = this.reaping;
                this.reaping = new Set;
                for (const fiber of fibers) {
                    if (!fiber.sub_empty)
                        continue;
                    fiber.destructor();
                }
            }
        }
        [Symbol.toStringTag];
        cache = undefined;
        get args() {
            return this.data.slice(0, this.pub_from);
        }
        result() {
            if ($mol_promise_like(this.cache))
                return;
            if (this.cache instanceof Error)
                return;
            return this.cache;
        }
        field() {
            return this.task.name + '()';
        }
        constructor(id, task, host, args) {
            super();
            this.task = task;
            this.host = host;
            if (args)
                this.data.push(...args);
            this.pub_from = this.sub_from = args?.length ?? 0;
            this[Symbol.toStringTag] = id;
        }
        plan() {
            $mol_wire_fiber.planning.add(this);
            $mol_wire_fiber.plan();
        }
        reap() {
            $mol_wire_fiber.reaping.add(this);
            $mol_wire_fiber.plan();
        }
        toString() {
            return this[Symbol.toStringTag];
        }
        toJSON() {
            return this[Symbol.toStringTag];
        }
        [$mol_dev_format_head]() {
            const cursor = {
                [$mol_wire_cursor.stale]: '🔴',
                [$mol_wire_cursor.doubt]: '🟡',
                [$mol_wire_cursor.fresh]: '🟢',
                [$mol_wire_cursor.final]: '🔵',
            }[this.cursor] ?? this.cursor.toString();
            return $mol_dev_format_div({}, $mol_dev_format_native(this), $mol_dev_format_shade(cursor + ' '), $mol_dev_format_auto(this.cache));
        }
        get $() {
            return (this.host ?? this.task)['$'];
        }
        emit(quant = $mol_wire_cursor.stale) {
            if (this.sub_empty)
                this.plan();
            else
                super.emit(quant);
        }
        fresh() {
            if (this.cursor === $mol_wire_cursor.fresh)
                return;
            if (this.cursor === $mol_wire_cursor.final)
                return;
            check: if (this.cursor === $mol_wire_cursor.doubt) {
                for (let i = this.pub_from; i < this.sub_from; i += 2) {
                    ;
                    this.data[i]?.fresh();
                    if (this.cursor !== $mol_wire_cursor.doubt)
                        break check;
                }
                this.cursor = $mol_wire_cursor.fresh;
                return;
            }
            const bu = this.track_on();
            let result;
            try {
                switch (this.pub_from) {
                    case 0:
                        result = this.task.call(this.host);
                        break;
                    case 1:
                        result = this.task.call(this.host, this.data[0]);
                        break;
                    default:
                        result = this.task.call(this.host, ...this.args);
                        break;
                }
                if ($mol_promise_like(result)) {
                    const put = (res) => {
                        if (this.cache === result)
                            this.put(res);
                        return res;
                    };
                    result = Object.assign(result.then(put, put), {
                        destructor: result['destructor'] ?? (() => { })
                    });
                    handled.add(result);
                }
            }
            catch (error) {
                if (error instanceof Error || $mol_promise_like(error)) {
                    result = error;
                }
                else {
                    result = new Error(String(error), { cause: error });
                }
                if ($mol_promise_like(result) && !handled.has(result)) {
                    result = Object.assign(result.finally(() => {
                        if (this.cache === result)
                            this.absorb();
                    }), {
                        destructor: result['destructor'] ?? (() => { })
                    });
                    handled.add(result);
                }
            }
            if (!$mol_promise_like(result)) {
                this.track_cut();
            }
            this.track_off(bu);
            this.put(result);
        }
        refresh() {
            this.cursor = $mol_wire_cursor.stale;
            this.fresh();
        }
        sync() {
            if (!$mol_wire_fiber.warm) {
                return this.result();
            }
            this.promote();
            this.fresh();
            if (this.cache instanceof Error) {
                return $mol_fail_hidden(this.cache);
            }
            if ($mol_promise_like(this.cache)) {
                return $mol_fail_hidden(this.cache);
            }
            return this.cache;
        }
        async async() {
            while (true) {
                this.fresh();
                if (this.cache instanceof Error) {
                    $mol_fail_hidden(this.cache);
                }
                if (!$mol_promise_like(this.cache))
                    return this.cache;
                await this.cache;
                if (this.cursor === $mol_wire_cursor.final) {
                    await new Promise(() => { });
                }
            }
        }
    }
    $.$mol_wire_fiber = $mol_wire_fiber;
})($ || ($ = {}));
//mol/wire/fiber/fiber.ts
;
"use strict";
var $;
(function ($) {
    const named = new WeakSet();
    function $mol_func_name(func) {
        let name = func.name;
        if (name?.length > 1)
            return name;
        if (named.has(func))
            return name;
        for (let key in this) {
            try {
                if (this[key] !== func)
                    continue;
                name = key;
                Object.defineProperty(func, 'name', { value: name });
                break;
            }
            catch { }
        }
        named.add(func);
        return name;
    }
    $.$mol_func_name = $mol_func_name;
    function $mol_func_name_from(target, source) {
        Object.defineProperty(target, 'name', { value: source.name });
        return target;
    }
    $.$mol_func_name_from = $mol_func_name_from;
})($ || ($ = {}));
//mol/func/name/name.ts
;
"use strict";
var $;
(function ($) {
    function $mol_guid(length = 8, exists = () => false) {
        for (;;) {
            let id = Math.random().toString(36).substring(2, length + 2).toUpperCase();
            if (exists(id))
                continue;
            return id;
        }
    }
    $.$mol_guid = $mol_guid;
})($ || ($ = {}));
//mol/guid/guid.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_key_store = new WeakMap();
    function $mol_key(value) {
        if (!value)
            return JSON.stringify(value);
        if (typeof value !== 'object' && typeof value !== 'function')
            return JSON.stringify(value);
        return JSON.stringify(value, (field, value) => {
            if (!value)
                return value;
            if (typeof value !== 'object' && typeof value !== 'function')
                return value;
            if (Array.isArray(value))
                return value;
            const proto = Reflect.getPrototypeOf(value);
            if (!proto)
                return value;
            if (Reflect.getPrototypeOf(proto) === null)
                return value;
            if ('toJSON' in value)
                return value;
            if (value instanceof RegExp)
                return value.toString();
            let key = $.$mol_key_store.get(value);
            if (key)
                return key;
            key = $mol_guid();
            $.$mol_key_store.set(value, key);
            return key;
        });
    }
    $.$mol_key = $mol_key;
})($ || ($ = {}));
//mol/key/key.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_compare_deep_cache = new WeakMap();
    function $mol_compare_deep(left, right) {
        if (Object.is(left, right))
            return true;
        if (left === null)
            return false;
        if (right === null)
            return false;
        if (typeof left !== 'object')
            return false;
        if (typeof right !== 'object')
            return false;
        const left_proto = Reflect.getPrototypeOf(left);
        const right_proto = Reflect.getPrototypeOf(right);
        if (left_proto !== right_proto)
            return false;
        if (left instanceof Boolean)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Number)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof String)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Date)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof RegExp)
            return left.source === right.source && left.flags === right.flags;
        if (left instanceof Error)
            return left.message === right.message && left.stack === right.stack;
        let left_cache = $.$mol_compare_deep_cache.get(left);
        if (left_cache) {
            const right_cache = left_cache.get(right);
            if (typeof right_cache === 'boolean')
                return right_cache;
        }
        else {
            left_cache = new WeakMap([[right, true]]);
            $.$mol_compare_deep_cache.set(left, left_cache);
        }
        let result;
        try {
            if (!left_proto)
                result = compare_pojo(left, right);
            else if (!Reflect.getPrototypeOf(left_proto))
                result = compare_pojo(left, right);
            else if (Array.isArray(left))
                result = compare_array(left, right);
            else if (left instanceof Set)
                result = compare_set(left, right);
            else if (left instanceof Map)
                result = compare_map(left, right);
            else if (ArrayBuffer.isView(left))
                result = compare_buffer(left, right);
            else if (Symbol.toPrimitive in left)
                result = compare_primitive(left, right);
            else
                result = false;
        }
        finally {
            left_cache.set(right, result);
        }
        return result;
    }
    $.$mol_compare_deep = $mol_compare_deep;
    function compare_array(left, right) {
        const len = left.length;
        if (len !== right.length)
            return false;
        for (let i = 0; i < len; ++i) {
            if (!$mol_compare_deep(left[i], right[i]))
                return false;
        }
        return true;
    }
    function compare_buffer(left, right) {
        const len = left.byteLength;
        if (len !== right.byteLength)
            return false;
        for (let i = 0; i < len; ++i) {
            if (left[i] !== right[i])
                return false;
        }
        return true;
    }
    function compare_iterator(left, right) {
        while (true) {
            const left_next = left.next();
            const right_next = right.next();
            if (left_next.done !== right_next.done)
                return false;
            if (left_next.done)
                break;
            if (!$mol_compare_deep(left_next.value, right_next.value))
                return false;
        }
        return true;
    }
    function compare_set(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.values(), right.values());
    }
    function compare_map(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.keys(), right.keys())
            && compare_iterator(left.values(), right.values());
    }
    function compare_pojo(left, right) {
        const left_keys = Object.getOwnPropertyNames(left);
        const right_keys = Object.getOwnPropertyNames(right);
        if (!compare_array(left_keys, right_keys))
            return false;
        for (let key of left_keys) {
            if (!$mol_compare_deep(left[key], right[key]))
                return false;
        }
        const left_syms = Object.getOwnPropertySymbols(left);
        const right_syms = Object.getOwnPropertySymbols(right);
        if (!compare_array(left_syms, right_syms))
            return false;
        for (let key of left_syms) {
            if (!$mol_compare_deep(left[key], right[key]))
                return false;
        }
        return true;
    }
    function compare_primitive(left, right) {
        return Object.is(left[Symbol.toPrimitive]('default'), right[Symbol.toPrimitive]('default'));
    }
})($ || ($ = {}));
//mol/compare/deep/deep.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_task extends $mol_wire_fiber {
        static getter(task) {
            return function $mol_wire_task_get(host, args) {
                const sub = $mol_wire_auto();
                const existen = sub?.track_next();
                reuse: if (existen) {
                    if (!(existen instanceof $mol_wire_task))
                        break reuse;
                    if (existen.host !== host)
                        break reuse;
                    if (existen.task !== task)
                        break reuse;
                    if (!$mol_compare_deep(existen.args, args))
                        break reuse;
                    return existen;
                }
                return new $mol_wire_task(`${host?.[Symbol.toStringTag] ?? host}.${task.name}(#)`, task, host, args);
            };
        }
        complete() {
            if ($mol_promise_like(this.cache))
                return;
            this.destructor();
        }
        put(next) {
            const prev = this.cache;
            this.cache = next;
            if ($mol_promise_like(next)) {
                this.cursor = $mol_wire_cursor.fresh;
                if (next !== prev)
                    this.emit();
                return next;
            }
            this.cursor = $mol_wire_cursor.final;
            if (this.sub_empty)
                this.destructor();
            else if (next !== prev)
                this.emit();
            return next;
        }
    }
    $.$mol_wire_task = $mol_wire_task;
})($ || ($ = {}));
//mol/wire/task/task.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_method(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const temp = $mol_wire_task.getter(orig);
        const value = function (...args) {
            const fiber = temp(this ?? null, args);
            return fiber.sync();
        };
        Object.defineProperty(value, 'name', { value: orig.name + ' ' });
        Object.assign(value, { orig });
        const descr2 = { ...descr, value };
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_method = $mol_wire_method;
})($ || ($ = {}));
//mol/wire/method/method.ts
;
"use strict";
//mol/type/tail/tail.ts
;
"use strict";
//mol/type/foot/foot.ts
;
"use strict";
var $;
(function ($) {
    const catched = new WeakMap();
    function $mol_fail_catch(error) {
        if (typeof error !== 'object')
            return false;
        if ($mol_promise_like(error))
            $mol_fail_hidden(error);
        if (catched.get(error))
            return false;
        catched.set(error, true);
        return true;
    }
    $.$mol_fail_catch = $mol_fail_catch;
})($ || ($ = {}));
//mol/fail/catch/catch.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail_log(error) {
        if ($mol_promise_like(error))
            return false;
        if (!$mol_fail_catch(error))
            return false;
        console.error(error);
        return true;
    }
    $.$mol_fail_log = $mol_fail_log;
})($ || ($ = {}));
//mol/fail/log/log.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_atom extends $mol_wire_fiber {
        static solo(host, task) {
            const field = task.name + '()';
            const existen = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            if (existen)
                return existen;
            const prefix = host?.[Symbol.toStringTag] ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
            const key = `${prefix}.${field}`;
            const fiber = new $mol_wire_atom(key, task, host, []);
            (host ?? task)[field] = fiber;
            return fiber;
        }
        static plex(host, task, key) {
            const field = task.name + '()';
            let dict = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            const prefix = host?.[Symbol.toStringTag] ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
            const id = `${prefix}.${task.name}(${$mol_key(key)})`;
            if (dict) {
                const existen = dict.get(id);
                if (existen)
                    return existen;
            }
            else {
                dict = (host ?? task)[field] = new Map();
            }
            const fiber = new $mol_wire_atom(id, task, host, [key]);
            dict.set(id, fiber);
            return fiber;
        }
        static watching = new Set();
        static watcher = null;
        static watch() {
            $mol_wire_atom.watcher = new $mol_after_frame($mol_wire_atom.watch);
            for (const atom of $mol_wire_atom.watching) {
                if (atom.cursor === $mol_wire_cursor.final) {
                    $mol_wire_atom.watching.delete(atom);
                }
                else {
                    atom.cursor = $mol_wire_cursor.stale;
                    atom.fresh();
                }
            }
        }
        watch() {
            if (!$mol_wire_atom.watcher) {
                $mol_wire_atom.watcher = new $mol_after_frame($mol_wire_atom.watch);
            }
            $mol_wire_atom.watching.add(this);
        }
        resync(args) {
            return this.put(this.task.call(this.host, ...args));
        }
        once() {
            return this.sync();
        }
        channel() {
            return Object.assign((next) => {
                if (next !== undefined)
                    return this.resync([...this.args, next]);
                if (!$mol_wire_fiber.warm)
                    return this.result();
                if ($mol_wire_auto() instanceof $mol_wire_task) {
                    return this.once();
                }
                else {
                    return this.sync();
                }
            }, { atom: this });
        }
        destructor() {
            super.destructor();
            const prev = this.cache;
            if ($mol_owning_check(this, prev)) {
                prev.destructor();
            }
            if (this.pub_from === 0) {
                ;
                (this.host ?? this.task)[this.field()] = null;
            }
            else {
                ;
                (this.host ?? this.task)[this.field()].delete(this[Symbol.toStringTag]);
            }
        }
        put(next) {
            const prev = this.cache;
            update: if (next !== prev) {
                try {
                    if ($mol_compare_deep(prev, next))
                        break update;
                }
                catch (error) {
                    $mol_fail_log(error);
                }
                if ($mol_owning_check(this, prev)) {
                    prev.destructor();
                }
                if ($mol_owning_catch(this, next)) {
                    try {
                        next[Symbol.toStringTag] = this[Symbol.toStringTag];
                    }
                    catch {
                        Object.defineProperty(next, Symbol.toStringTag, { value: this[Symbol.toStringTag] });
                    }
                }
                if (!this.sub_empty)
                    this.emit();
            }
            this.cache = next;
            this.cursor = $mol_wire_cursor.fresh;
            if ($mol_promise_like(next))
                return next;
            this.complete_pubs();
            return next;
        }
    }
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "resync", null);
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "once", null);
    $.$mol_wire_atom = $mol_wire_atom;
})($ || ($ = {}));
//mol/wire/atom/atom.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_solo(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.solo(this, orig);
                if ((args.length === 0) || (args[0] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto() instanceof $mol_wire_task) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_solo = $mol_wire_solo;
})($ || ($ = {}));
//mol/wire/solo/solo.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_plex(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.plex(this, orig, args[0]);
                if ((args.length === 1) || (args[1] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto() instanceof $mol_wire_task) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_plex = $mol_wire_plex;
})($ || ($ = {}));
//mol/wire/plex/plex.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_mem = $mol_wire_solo;
    $.$mol_mem_key = $mol_wire_plex;
})($ || ($ = {}));
//mol/mem/mem.ts
;
"use strict";
var $;
(function ($) {
    class $mol_window extends $mol_object {
        static size() {
            this.resizes();
            return {
                width: self.innerWidth,
                height: self.innerHeight,
            };
        }
        static resizes(next) { return next; }
    }
    __decorate([
        $mol_mem
    ], $mol_window, "size", null);
    __decorate([
        $mol_mem
    ], $mol_window, "resizes", null);
    $.$mol_window = $mol_window;
    self.addEventListener('resize', event => $mol_window.resizes(event));
})($ || ($ = {}));
//mol/window/window.web.ts
;
"use strict";
var $;
(function ($) {
    class $mol_view_selection extends $mol_object {
        static focused(next, notify) {
            const parents = [];
            let element = next?.[0] ?? $mol_dom_context.document.activeElement;
            while (element) {
                parents.push(element);
                element = element.parentNode;
            }
            if (!next || notify)
                return parents;
            new $mol_after_tick(() => {
                const element = this.focused()[0];
                if (element)
                    element.focus();
                else
                    $mol_dom_context.blur();
            });
            return parents;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view_selection, "focused", null);
    $.$mol_view_selection = $mol_view_selection;
})($ || ($ = {}));
//mol/view/selection/selection.ts
;
"use strict";
var $;
(function ($) {
    function $mol_maybe(value) {
        return (value == null) ? [] : [value];
    }
    $.$mol_maybe = $mol_maybe;
})($ || ($ = {}));
//mol/maybe/maybe.ts
;
"use strict";
var $;
(function ($) {
    if ($mol_dom_context.document) {
        $mol_dom_context.document.documentElement.addEventListener('focus', (event) => {
            $mol_view_selection.focused($mol_maybe($mol_dom_context.document.activeElement), 'notify');
        }, true);
    }
})($ || ($ = {}));
//mol/view/selection/selection.web.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wrapper extends $mol_object2 {
        static wrap;
        static run(task) {
            return this.func(task)();
        }
        static func(func) {
            return this.wrap(func);
        }
        static get class() {
            return (Class) => {
                const construct = (target, args) => new Class(...args);
                const handler = {
                    construct: this.func(construct)
                };
                handler[Symbol.toStringTag] = Class.name + '#';
                return new Proxy(Class, handler);
            };
        }
        static get method() {
            return (obj, name, descr) => {
                descr.value = this.func(descr.value);
                return descr;
            };
        }
        static get field() {
            return (obj, name, descr) => {
                descr.get = descr.set = this.func(descr.get);
                return descr;
            };
        }
    }
    $.$mol_wrapper = $mol_wrapper;
})($ || ($ = {}));
//mol/wrapper/wrapper.ts
;
"use strict";
var $;
(function ($) {
    class $mol_memo extends $mol_wrapper {
        static wrap(task) {
            const store = new WeakMap();
            return function (next) {
                if (next === undefined && store.has(this))
                    return store.get(this);
                const val = task.call(this, next) ?? next;
                store.set(this, val);
                return val;
            };
        }
    }
    $.$mol_memo = $mol_memo;
})($ || ($ = {}));
//mol/memo/memo.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_qname(name) {
        return name.replace(/\W/g, '').replace(/^(?=\d+)/, '_');
    }
    $.$mol_dom_qname = $mol_dom_qname;
})($ || ($ = {}));
//mol/dom/qname/qname.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_probe(task, next) {
        const warm = $mol_wire_fiber.warm;
        try {
            $mol_wire_fiber.warm = false;
            return task();
        }
        finally {
            $mol_wire_fiber.warm = warm;
        }
    }
    $.$mol_wire_probe = $mol_wire_probe;
})($ || ($ = {}));
//mol/wire/probe/probe.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_watch() {
        const atom = $mol_wire_auto();
        if (atom instanceof $mol_wire_atom) {
            atom.watch();
        }
        else {
            $mol_fail(new Error('Atom is required for watching'));
        }
    }
    $.$mol_wire_watch = $mol_wire_watch;
})($ || ($ = {}));
//mol/wire/watch/watch.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_solid() {
        const current = $mol_wire_auto();
        if (current.reap !== nothing) {
            current?.sub_on(sub, sub.data.length);
        }
        current.reap = nothing;
    }
    $.$mol_wire_solid = $mol_wire_solid;
    const nothing = () => { };
    const sub = new $mol_wire_pub_sub;
})($ || ($ = {}));
//mol/wire/solid/solid.ts
;
"use strict";
var $;
(function ($) {
    function $mol_const(value) {
        const getter = (() => value);
        getter['()'] = value;
        getter[Symbol.toStringTag] = value;
        return getter;
    }
    $.$mol_const = $mol_const;
})($ || ($ = {}));
//mol/const/const.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_attributes(el, attrs) {
        for (let name in attrs) {
            let val = attrs[name];
            if (val === null || val === false) {
                if (!el.hasAttribute(name))
                    continue;
                el.removeAttribute(name);
            }
            else {
                const str = String(val);
                if (el.getAttribute(name) === str)
                    continue;
                el.setAttribute(name, str);
            }
        }
    }
    $.$mol_dom_render_attributes = $mol_dom_render_attributes;
})($ || ($ = {}));
//mol/dom/render/attributes/attributes.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_async(obj) {
        let fiber;
        const temp = $mol_wire_task.getter(obj);
        return new Proxy(obj, {
            get(obj, field) {
                const val = obj[field];
                if (typeof val !== 'function')
                    return val;
                let fiber;
                const temp = $mol_wire_task.getter(val);
                return function $mol_wire_async(...args) {
                    fiber?.destructor();
                    fiber = temp(obj, args);
                    return fiber.async();
                };
            },
            apply(obj, self, args) {
                fiber?.destructor();
                fiber = temp(self, args);
                return fiber.async();
            },
        });
    }
    $.$mol_wire_async = $mol_wire_async;
})($ || ($ = {}));
//mol/wire/async/async.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_events(el, events, passive = false) {
        for (let name in events) {
            el.addEventListener(name, events[name], { passive });
        }
    }
    $.$mol_dom_render_events = $mol_dom_render_events;
})($ || ($ = {}));
//mol/dom/render/events/events.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_styles(el, styles) {
        for (let name in styles) {
            let val = styles[name];
            const style = el.style;
            const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
            if (typeof val === 'number') {
                style.setProperty(kebab(name), `${val}px`);
            }
            else {
                style.setProperty(kebab(name), val);
            }
        }
    }
    $.$mol_dom_render_styles = $mol_dom_render_styles;
})($ || ($ = {}));
//mol/dom/render/styles/styles.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_children(el, childNodes) {
        const node_set = new Set(childNodes);
        let nextNode = el.firstChild;
        for (let view of childNodes) {
            if (view == null)
                continue;
            if (view instanceof $mol_dom_context.Node) {
                while (true) {
                    if (!nextNode) {
                        el.appendChild(view);
                        break;
                    }
                    if (nextNode == view) {
                        nextNode = nextNode.nextSibling;
                        break;
                    }
                    else {
                        if (node_set.has(nextNode)) {
                            el.insertBefore(view, nextNode);
                            break;
                        }
                        else {
                            const nn = nextNode.nextSibling;
                            el.removeChild(nextNode);
                            nextNode = nn;
                        }
                    }
                }
            }
            else {
                if (nextNode && nextNode.nodeName === '#text') {
                    const str = String(view);
                    if (nextNode.nodeValue !== str)
                        nextNode.nodeValue = str;
                    nextNode = nextNode.nextSibling;
                }
                else {
                    const textNode = $mol_dom_context.document.createTextNode(String(view));
                    el.insertBefore(textNode, nextNode);
                }
            }
        }
        while (nextNode) {
            const currNode = nextNode;
            nextNode = currNode.nextSibling;
            el.removeChild(currNode);
        }
    }
    $.$mol_dom_render_children = $mol_dom_render_children;
})($ || ($ = {}));
//mol/dom/render/children/children.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_fields(el, fields) {
        for (let key in fields) {
            const val = fields[key];
            if (val === undefined)
                continue;
            el[key] = val;
        }
    }
    $.$mol_dom_render_fields = $mol_dom_render_fields;
})($ || ($ = {}));
//mol/dom/render/fields/fields.ts
;
"use strict";
//mol/type/keys/extract/extract.ts
;
"use strict";
//mol/type/pick/pick.ts
;
"use strict";
var $;
(function ($) {
    function $mol_view_visible_width() {
        return $mol_window.size().width;
    }
    $.$mol_view_visible_width = $mol_view_visible_width;
    function $mol_view_visible_height() {
        return $mol_window.size().height;
    }
    $.$mol_view_visible_height = $mol_view_visible_height;
    function $mol_view_state_key(suffix) {
        return suffix;
    }
    $.$mol_view_state_key = $mol_view_state_key;
    const error_showed = new WeakMap();
    class $mol_view extends $mol_object {
        static Root(id) {
            return new this;
        }
        autorun() {
            try {
                this.dom_tree();
                document.title = this.title();
            }
            catch (error) {
                $mol_fail_log(error);
            }
        }
        static autobind() {
            const nodes = $mol_dom_context.document.querySelectorAll('[mol_view_root]:not([mol_view_root=""])');
            for (let i = nodes.length - 1; i >= 0; --i) {
                const name = nodes.item(i).getAttribute('mol_view_root');
                const View = $[name];
                if (!View) {
                    console.error(`Can not attach view. Class not found: ${name}`);
                    continue;
                }
                const view = View.Root(i);
                view.dom_node(nodes.item(i));
                view.autorun();
            }
        }
        title() {
            return this.toString().match(/.*\.(\w+)/)?.[1] ?? this.toString();
        }
        focused(next) {
            let node = this.dom_node();
            const value = $mol_view_selection.focused(next === undefined ? undefined : (next ? [node] : []));
            return value.indexOf(node) !== -1;
        }
        state_key(suffix = '') {
            return this.$.$mol_view_state_key(suffix);
        }
        dom_name() {
            return $mol_dom_qname(this.constructor.toString()) || 'div';
        }
        dom_name_space() { return 'http://www.w3.org/1999/xhtml'; }
        sub() {
            return [];
        }
        sub_visible() {
            return this.sub();
        }
        minimal_width() {
            let min = 0;
            try {
                const sub = this.sub();
                if (!sub)
                    return 0;
                sub.forEach(view => {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_width());
                    }
                });
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        maximal_width() {
            return this.minimal_width();
        }
        minimal_height() {
            let min = 0;
            try {
                for (const view of this.sub() ?? []) {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_height());
                    }
                }
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        static watchers = new Set();
        view_rect() {
            if ($mol_wire_probe(() => this.view_rect()) === undefined) {
                $mol_wire_watch();
                return null;
            }
            else {
                const { width, height, left, right, top, bottom } = this.dom_node().getBoundingClientRect();
                return { width, height, left, right, top, bottom };
            }
        }
        dom_id() {
            return this.toString();
        }
        dom_node(next) {
            $mol_wire_solid();
            const node = next || $mol_dom_context.document.createElementNS(this.dom_name_space(), this.dom_name());
            const id = this.dom_id();
            node.setAttribute('id', id);
            node.toString = $mol_const('<#' + id + '>');
            $mol_dom_render_attributes(node, this.attr_static());
            const events = $mol_wire_async(this.event());
            $mol_dom_render_events(node, events);
            return node;
        }
        dom_final() {
            this.render();
            const sub = this.sub_visible();
            if (!sub)
                return;
            for (const el of sub) {
                if (el && typeof el === 'object' && 'dom_final' in el) {
                    el['dom_final']();
                }
            }
            return this.dom_node();
        }
        dom_tree(next) {
            const node = this.dom_node(next);
            render: try {
                $mol_dom_render_attributes(node, { mol_view_error: null });
                try {
                    this.render();
                }
                finally {
                    for (let plugin of this.plugins()) {
                        if (plugin instanceof $mol_plugin) {
                            plugin.dom_tree();
                        }
                    }
                }
            }
            catch (error) {
                $mol_fail_log(error);
                $mol_dom_render_attributes(node, { mol_view_error: error.name || error.constructor.name });
                if ($mol_promise_like(error))
                    break render;
                if ((error_showed.get(error) ?? this) !== this)
                    break render;
                try {
                    const message = error.message || error;
                    node.innerText = message.replace(/^|$/mg, '\xA0\xA0');
                }
                catch { }
                error_showed.set(error, this);
            }
            try {
                this.auto();
            }
            catch (error) {
                $mol_fail_log(error);
            }
            return node;
        }
        dom_node_actual() {
            const node = this.dom_node();
            $mol_dom_render_styles(node, this.style_size());
            const attr = this.attr();
            const style = this.style();
            const fields = this.field();
            $mol_dom_render_attributes(node, attr);
            $mol_dom_render_styles(node, style);
            return node;
        }
        auto() {
            return null;
        }
        render() {
            const node = this.dom_node_actual();
            const sub = this.sub_visible();
            if (!sub)
                return;
            const nodes = sub.map(child => {
                if (child == null)
                    return null;
                return (child instanceof $mol_view)
                    ? child.dom_node()
                    : child instanceof $mol_dom_context.Node
                        ? child
                        : String(child);
            });
            $mol_dom_render_children(node, nodes);
            for (const el of sub)
                if (el && typeof el === 'object' && 'dom_tree' in el)
                    el['dom_tree']();
            $mol_dom_render_fields(node, this.field());
        }
        static view_classes() {
            const proto = this.prototype;
            let current = proto;
            const classes = [];
            while (current) {
                if (current.constructor.name !== classes.at(-1)?.name) {
                    classes.push(current.constructor);
                }
                if (!(current instanceof $mol_view))
                    break;
                current = Object.getPrototypeOf(current);
            }
            return classes;
        }
        static _view_names;
        static view_names(suffix) {
            let cache = Reflect.getOwnPropertyDescriptor(this, '_view_names')?.value;
            if (!cache)
                cache = this._view_names = new Map;
            const cached = cache.get(suffix);
            if (cached)
                return cached;
            const names = [];
            const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
            for (const Class of this.view_classes()) {
                if (suffix in Class.prototype)
                    names.push(this.$.$mol_func_name(Class) + suffix2);
                else
                    break;
            }
            cache.set(suffix, names);
            return names;
        }
        view_names_owned() {
            const names = [];
            let owner = $mol_owning_get(this);
            if (!(owner?.host instanceof $mol_view))
                return names;
            const suffix = owner.task.name.trim();
            const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
            names.push(...owner.host.constructor.view_names(suffix));
            for (let prefix of owner.host.view_names_owned()) {
                names.push(prefix + suffix2);
            }
            return names;
        }
        view_names() {
            const names = new Set();
            for (let name of this.view_names_owned())
                names.add(name);
            for (let Class of this.constructor.view_classes()) {
                const name = this.$.$mol_func_name(Class);
                if (name)
                    names.add(name);
            }
            return names;
        }
        attr_static() {
            let attrs = {};
            for (let name of this.view_names())
                attrs[name.replace(/\$/g, '').replace(/^(?=\d)/, '_').toLowerCase()] = '';
            return attrs;
        }
        attr() {
            return {};
        }
        style_size() {
            return {
                minHeight: this.minimal_height(),
                minWidth: this.minimal_width(),
            };
        }
        style() {
            return {};
        }
        field() {
            return {};
        }
        event() {
            return {};
        }
        plugins() {
            return [];
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this));
        }
        *view_find(check, path = []) {
            if (check(this))
                return yield [...path, this];
            try {
                for (const item of this.sub()) {
                    if (item instanceof $mol_view) {
                        yield* item.view_find(check, [...path, this]);
                    }
                }
            }
            catch (error) {
                if ($mol_promise_like(error))
                    $mol_fail_hidden(error);
                $mol_fail_log(error);
            }
        }
        force_render(path) {
            const kids = this.sub();
            const index = kids.findIndex(item => {
                if (item instanceof $mol_view) {
                    return path.has(item);
                }
                else {
                    return false;
                }
            });
            if (index >= 0) {
                kids[index].force_render(path);
            }
        }
        ensure_visible(view, align = "start") {
            const path = this.view_find(v => v === view).next().value;
            this.force_render(new Set(path));
            this.dom_final();
            view.dom_node().scrollIntoView({ block: align });
        }
        bring() {
            const win = this.$.$mol_dom_context;
            if (win.parent !== win.self && !win.document.hasFocus())
                return;
            new this.$.$mol_after_frame(() => {
                this.dom_node().scrollIntoView({ block: 'start', inline: 'end' });
                this.focused(true);
            });
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "autorun", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "title", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "focused", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "dom_name", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_width", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_height", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "view_rect", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_final", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_tree", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node_actual", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "render", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names_owned", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names", null);
    __decorate([
        $mol_mem_key
    ], $mol_view, "Root", null);
    __decorate([
        $mol_mem
    ], $mol_view, "autobind", null);
    __decorate([
        $mol_memo.method
    ], $mol_view, "view_classes", null);
    $.$mol_view = $mol_view;
})($ || ($ = {}));
//mol/view/view/view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/view/view/view.css", "[mol_view] {\n\ttransition-property: height, width, min-height, min-width, max-width, max-height, transform;\n\ttransition-duration: .2s;\n\ttransition-timing-function: ease-out;\n\t-webkit-appearance: none;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-shrink: 0;\n\tcontain: style;\n\tscrollbar-color: var(--mol_theme_line) transparent;\n\tscrollbar-width: thin;\n}\t\n\n[mol_view]::selection {\n\tbackground: var(--mol_theme_line);\n}\t\n\n[mol_view]::-webkit-scrollbar {\n\twidth: .25rem;\n\theight: .25rem;\n}\n\n[mol_view]::-webkit-scrollbar-corner {\n\tbackground-color: var(--mol_theme_line);\n}\n\n[mol_view]::-webkit-scrollbar-track {\n\tbackground-color: transparent;\n}\n\n[mol_view]::-webkit-scrollbar-thumb {\n\tbackground-color: var(--mol_theme_line);\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_view] > * {\n\tword-break: inherit;\n}\n\n[mol_view_root] {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tfont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n\tfont-size: 1rem;\n\tline-height: 1.5rem;\n\tbackground: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n\tcontain: unset; /** Fixes bg ignoring when applied to body on Chrome */\n\ttab-size: 4;\n}\n\n@media print {\n\t[mol_view_root] {\n\t\theight: auto;\n\t}\n}\n\n[mol_view][mol_view_error]:not([mol_view_error=\"Promise\"]) {\n\tbackground-image: repeating-linear-gradient(\n\t\t-45deg,\n\t\t#f92323,\n\t\t#f92323 .5rem,\n\t\t#ff3d3d .5rem,\n\t\t#ff3d3d 1.5rem\n\t);\n\tcolor: black;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n@keyframes mol_view_wait {\n\tfrom {\n\t\topacity: .75;\n\t}\n\t80% {\n\t\topacity: .5;\n\t}\n\tto {\n\t\topacity: .75;\n\t}\n}\n\n:where([mol_view][mol_view_error=\"Promise\"]) {\n\tbackground: var(--mol_theme_hover);\n}\n\n[mol_view][mol_view_error=\"Promise\"] {\n\tanimation: mol_view_wait 1s steps( 10, end ) infinite;\n}\n");
})($ || ($ = {}));
//mol/view/view/-css/view.css.ts
;
"use strict";
var $;
(function ($) {
    $mol_dom_context.document?.addEventListener('DOMContentLoaded', () => $mol_view.autobind(), { once: true });
})($ || ($ = {}));
//mol/view/view/view.web.ts
;
"use strict";
//mol/type/override/override.ts
;
"use strict";
//mol/style/properties/properties.ts
;
"use strict";
//mol/style/pseudo/class.ts
;
"use strict";
//mol/style/pseudo/element.ts
;
"use strict";
//mol/type/error/error.ts
;
"use strict";
//mol/style/guard/guard.ts
;
"use strict";
var $;
(function ($) {
    function $mol_style_sheet(Component, config0) {
        let rules = [];
        const block = $mol_dom_qname($mol_ambient({}).$mol_func_name(Component));
        const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
        const make_class = (prefix, path, config) => {
            const props = [];
            const selector = (prefix, path) => {
                if (path.length === 0)
                    return prefix || `[${block}]`;
                let res = `[${block}_${path.join('_')}]`;
                if (prefix)
                    res = prefix + ' :where(' + res + ')';
                return res;
            };
            for (const key of Object.keys(config).reverse()) {
                if (/^(--)?[a-z]/.test(key)) {
                    const addProp = (keys, val) => {
                        if (Array.isArray(val)) {
                            if (val[0] && [Array, Object].includes(val[0].constructor)) {
                                val = val.map(v => {
                                    return Object.entries(v).map(([n, a]) => {
                                        if (a === true)
                                            return kebab(n);
                                        if (a === false)
                                            return null;
                                        return String(a);
                                    }).filter(Boolean).join(' ');
                                }).join(',');
                            }
                            else {
                                val = val.join(' ');
                            }
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                        else if (val.constructor === Object) {
                            for (let suffix in val) {
                                addProp([...keys, kebab(suffix)], val[suffix]);
                            }
                        }
                        else {
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                    };
                    addProp([kebab(key)], config[key]);
                }
                else if (/^[A-Z]/.test(key)) {
                    make_class(prefix, [...path, key.toLowerCase()], config[key]);
                }
                else if (key[0] === '$') {
                    make_class(selector(prefix, path) + ' :where([' + $mol_dom_qname(key) + '])', [], config[key]);
                }
                else if (key === '>') {
                    const types = config[key];
                    for (let type in types) {
                        make_class(selector(prefix, path) + ' > :where([' + $mol_dom_qname(type) + '])', [], types[type]);
                    }
                }
                else if (key === '@') {
                    const attrs = config[key];
                    for (let name in attrs) {
                        for (let val in attrs[name]) {
                            make_class(selector(prefix, path) + ':where([' + name + '=' + JSON.stringify(val) + '])', [], attrs[name][val]);
                        }
                    }
                }
                else if (key === '@media') {
                    const media = config[key];
                    for (let query in media) {
                        rules.push('}\n');
                        make_class(prefix, path, media[query]);
                        rules.push(`${key} ${query} {\n`);
                    }
                }
                else {
                    make_class(selector(prefix, path) + key, [], config[key]);
                }
            }
            if (props.length) {
                rules.push(`${selector(prefix, path)} {\n${props.reverse().join('')}}\n`);
            }
        };
        make_class('', [], config0);
        return rules.reverse().join('');
    }
    $.$mol_style_sheet = $mol_style_sheet;
})($ || ($ = {}));
//mol/style/sheet/sheet.ts
;
"use strict";
var $;
(function ($) {
    class $mol_plugin extends $mol_view {
        dom_node(next) {
            const node = next || $mol_owning_get(this).host.dom_node();
            $mol_dom_render_attributes(node, this.attr_static());
            const events = $mol_wire_async(this.event());
            for (let event_name in events) {
                node.addEventListener(event_name, events[event_name], { passive: false });
            }
            return node;
        }
        attr_static() {
            return {};
        }
        event() {
            return {};
        }
        render() {
            this.dom_node_actual();
        }
    }
    __decorate([
        $mol_mem
    ], $mol_plugin.prototype, "dom_node", null);
    $.$mol_plugin = $mol_plugin;
})($ || ($ = {}));
//mol/plugin/plugin.ts
;
"use strict";
var $;
(function ($) {
    function $mol_style_define(Component, config) {
        return $mol_style_attach(Component.name, $mol_style_sheet(Component, config));
    }
    $.$mol_style_define = $mol_style_define;
})($ || ($ = {}));
//mol/style/define/define.ts
;
"use strict";
var $;
(function ($) {
    class $mol_scroll extends $mol_view {
        scroll_top(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        scroll_left(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        field() {
            return {
                ...super.field(),
                tabIndex: this.tabindex()
            };
        }
        event() {
            return {
                ...super.event(),
                scroll: (event) => this.event_scroll(event)
            };
        }
        tabindex() {
            return -1;
        }
        event_scroll(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_scroll.prototype, "scroll_top", null);
    __decorate([
        $mol_mem
    ], $mol_scroll.prototype, "scroll_left", null);
    __decorate([
        $mol_mem
    ], $mol_scroll.prototype, "event_scroll", null);
    $.$mol_scroll = $mol_scroll;
})($ || ($ = {}));
//mol/scroll/-view.tree/scroll.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_dom_listener extends $mol_object {
        _node;
        _event;
        _handler;
        _config;
        constructor(_node, _event, _handler, _config = { passive: true }) {
            super();
            this._node = _node;
            this._event = _event;
            this._handler = _handler;
            this._config = _config;
            this._node.addEventListener(this._event, this._handler, this._config);
        }
        destructor() {
            this._node.removeEventListener(this._event, this._handler, this._config);
            super.destructor();
        }
    }
    $.$mol_dom_listener = $mol_dom_listener;
})($ || ($ = {}));
//mol/dom/listener/listener.ts
;
"use strict";
var $;
(function ($) {
    class $mol_print extends $mol_object {
        static before() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'beforeprint', () => {
                this.active(true);
            });
        }
        static after() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'afterprint', () => {
                this.active(false);
            });
        }
        static active(next) {
            this.before();
            this.after();
            return next || false;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_print, "before", null);
    __decorate([
        $mol_mem
    ], $mol_print, "after", null);
    __decorate([
        $mol_mem
    ], $mol_print, "active", null);
    $.$mol_print = $mol_print;
})($ || ($ = {}));
//mol/print/print.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem, px } = $mol_style_unit;
        $mol_style_define($mol_scroll, {
            overflow: 'auto',
        });
        $mol_style_define($mol_scroll, {
            display: 'flex',
            overflow: 'overlay',
            flex: {
                direction: 'column',
                grow: 1,
                shrink: 1,
            },
            outline: 'none',
            alignSelf: 'stretch',
            boxSizing: 'border-box',
            willChange: 'scroll-position',
            scroll: {
                padding: [rem(.75), 0],
            },
            maxHeight: per(100),
            maxWidth: per(100),
            webkitOverflowScrolling: 'touch',
            contain: 'content',
            '>': {
                $mol_view: {
                    transform: 'translateZ(0)',
                },
            },
            '::before': {
                display: 'none',
            },
            '::after': {
                display: 'none',
            },
            '::-webkit-scrollbar': {
                width: rem(.25),
                height: rem(.25),
            },
            ':hover': {
                '::-webkit-scrollbar': {
                    width: rem(.5),
                    height: rem(.5),
                },
            },
            '@media': {
                'print': {
                    overflow: 'visible',
                    contain: 'none',
                    maxHeight: 'unset',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/scroll/scroll.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_scroll extends $.$mol_scroll {
            scroll_top(next, cache) {
                const el = this.dom_node();
                if (next !== undefined && !cache)
                    el.scrollTop = next;
                return el.scrollTop;
            }
            scroll_left(next, cache) {
                const el = this.dom_node();
                if (next !== undefined && !cache)
                    el.scrollLeft = next;
                return el.scrollLeft;
            }
            event_scroll(next) {
                const el = this.dom_node();
                this.scroll_left(el.scrollLeft, 'cache');
                this.scroll_top(el.scrollTop, 'cache');
            }
            minimal_height() {
                return this.$.$mol_print.active() ? null : 0;
            }
            minimal_width() {
                return this.$.$mol_print.active() ? null : 0;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_scroll.prototype, "scroll_top", null);
        __decorate([
            $mol_mem
        ], $mol_scroll.prototype, "scroll_left", null);
        $$.$mol_scroll = $mol_scroll;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/scroll/scroll.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_book2 extends $mol_scroll {
        menu_title() {
            return "";
        }
        sub() {
            return this.pages();
        }
        minimal_width() {
            return 0;
        }
        Placeholder() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        Gap(id) {
            const obj = new this.$.$mol_view();
            obj.title = () => "";
            return obj;
        }
        pages() {
            return [];
        }
    }
    __decorate([
        $mol_mem
    ], $mol_book2.prototype, "Placeholder", null);
    __decorate([
        $mol_mem_key
    ], $mol_book2.prototype, "Gap", null);
    $.$mol_book2 = $mol_book2;
})($ || ($ = {}));
//mol/book2/-view.tree/book2.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_mem_cached = $mol_wire_probe;
})($ || ($ = {}));
//mol/mem/cached/cached.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/book2/book2.view.css", "[mol_book2] {\n\tdisplay: flex;\n\tflex-flow: row nowrap;\n\talign-items: stretch;\n\tflex: 1 1 auto;\n\talign-self: stretch;\n\tmargin: 0;\n\t/* box-shadow: 0 0 0 1px var(--mol_theme_line); */\n\t/* transform: translateZ(0); */\n\ttransition: none;\n\toverflow: overlay;\n\tscroll-snap-type: x mandatory;\n\tpadding: 0 1px;\n\tscroll-padding: 0 1px;\n\tgap: 1px;\n}\n\n[mol_book2] > * {\n/* \tflex: none; */\n\tscroll-snap-stop: always;\n\tscroll-snap-align: end;\n\tposition: relative;\n\tmin-height: 100%;\n\tmax-height: 100%;\n\tmax-width: 100%;\n\tflex-shrink: 0;\n}\n\n[mol_book2] > *:not(:first-of-type):before,\n[mol_book2] > *:not(:last-of-type)::after {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 1.5rem;\n\twidth: 1px;\n\theight: 1rem;\n\tbackground: var(--mol_theme_special);\n\tborder-radius: var(--mol_gap_round);\n\topacity: .5;\n}\n[mol_book2] > *:not(:first-of-type):before {\n\tleft: -1px;\n}\n[mol_book2] > *:not(:last-of-type)::after {\n\tright: -1px;\n}\n\n:where([mol_book2]) > * {\n\tbackground-color: var(--mol_theme_card);\n\t/* box-shadow: 0 0 0 1px var(--mol_theme_back); */\n}\n\n[mol_book2] > [mol_book2] {\n\tdisplay: contents;\n}\n\n[mol_book2] > *:first-child {\n\tscroll-snap-align: start;\n}\n\n[mol_book2] > [mol_view] {\n\ttransform: none; /* prevent content clipping */\n}\n\n[mol_book2_placeholder] {\n\tflex: 1 1 0;\n\tbackground: none;\n}\n\n[mol_book2_gap] {\n\tbackground: none;\n\tflex-grow: 1;\n\tscroll-snap-align: none;\n\tmargin-right: -1px;\n\tbox-shadow: none;\n}\n\n[mol_book2_gap]::before,\n[mol_book2_gap]::after {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));
//mol/book2/-css/book2.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_book2 extends $.$mol_book2 {
            title() {
                return this.pages().map(page => {
                    try {
                        return page?.title();
                    }
                    catch (error) {
                        $mol_fail_log(error);
                    }
                }).reverse().filter(Boolean).join(' | ');
            }
            menu_title() {
                return this.pages()[0]?.title() || this.title();
            }
            sub() {
                const next = [...this.pages(), this.Placeholder()];
                const prev = $mol_mem_cached(() => this.sub()) ?? [];
                for (let i = 1; i++;) {
                    const p = prev[prev.length - i];
                    const n = next[next.length - i];
                    if (!n)
                        break;
                    if (p === n)
                        continue;
                    n.bring();
                    break;
                }
                return next;
            }
            bring() {
                const pages = this.pages();
                if (pages.length)
                    pages[pages.length - 1].bring();
                else
                    super.bring();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_book2.prototype, "sub", null);
        $$.$mol_book2 = $mol_book2;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/book2/book2.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_link extends $mol_view {
        uri() {
            return "";
        }
        dom_name() {
            return "a";
        }
        attr() {
            return {
                ...super.attr(),
                href: this.uri_toggle(),
                title: this.hint_safe(),
                target: this.target(),
                download: this.file_name(),
                mol_link_current: this.current()
            };
        }
        sub() {
            return [
                this.title()
            ];
        }
        arg() {
            return {};
        }
        event() {
            return {
                ...super.event(),
                click: (event) => this.click(event)
            };
        }
        uri_toggle() {
            return "";
        }
        hint() {
            return "";
        }
        hint_safe() {
            return this.hint();
        }
        target() {
            return "_self";
        }
        file_name() {
            return "";
        }
        current() {
            return false;
        }
        event_click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        click(event) {
            return this.event_click(event);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_link.prototype, "event_click", null);
    $.$mol_link = $mol_link;
})($ || ($ = {}));
//mol/link/-view.tree/link.view.tree.ts
;
"use strict";
//mol/state/arg/arg.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_action = $mol_wire_method;
})($ || ($ = {}));
//mol/action/action.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_arg extends $mol_object {
        prefix;
        static href(next) {
            if (next === undefined) {
                next = $mol_dom_context.location.href;
            }
            else if (!/^about:srcdoc/.test(next)) {
                new $mol_after_frame(() => {
                    const next = this.href();
                    const prev = $mol_dom_context.location.href;
                    if (next === prev)
                        return;
                    const history = $mol_dom_context.history;
                    history.replaceState(history.state, $mol_dom_context.document.title, next);
                });
            }
            if ($mol_dom_context.parent !== $mol_dom_context.self) {
                $mol_dom_context.parent.postMessage(['hashchange', next], '*');
            }
            return next;
        }
        static href_normal() {
            return this.link({});
        }
        static href_absolute() {
            return new URL(this.href(), $mol_dom_context.location.href).toString();
        }
        static dict(next) {
            var href = this.href(next && this.make_link(next)).split(/#!?/)[1] || '';
            var chunks = href.split(this.separator);
            var params = {};
            chunks.forEach(chunk => {
                if (!chunk)
                    return;
                var vals = chunk.split('=').map(decodeURIComponent);
                params[vals.shift()] = vals.join('=');
            });
            return params;
        }
        static dict_cut(except) {
            const dict = this.dict();
            const cut = {};
            for (const key in dict) {
                if (except.indexOf(key) >= 0)
                    break;
                cut[key] = dict[key];
            }
            return cut;
        }
        static value(key, next) {
            const nextDict = (next === void 0) ? void 0 : { ...this.dict(), [key]: next };
            const next2 = this.dict(nextDict)[key];
            return (next2 == null) ? null : next2;
        }
        static link(next) {
            return this.make_link({
                ...this.dict_cut(Object.keys(next)),
                ...next,
            });
        }
        static prolog = '!';
        static separator = '/';
        static make_link(next) {
            const chunks = [];
            for (let key in next) {
                if (null == next[key])
                    continue;
                const val = next[key];
                chunks.push([key].concat(val ? [val] : []).map(this.encode).join('='));
            }
            return new URL('#' + this.prolog + chunks.join(this.separator), this.href_absolute()).toString();
        }
        static go(next) {
            $mol_dom_context.location.href = this.make_link(next);
        }
        static encode(str) {
            return encodeURIComponent(str).replace(/\(/g, '%28').replace(/\)/g, '%29');
        }
        constructor(prefix = '') {
            super();
            this.prefix = prefix;
        }
        value(key, next) {
            return this.constructor.value(this.prefix + key, next);
        }
        sub(postfix) {
            return new this.constructor(this.prefix + postfix + '.');
        }
        link(next) {
            var prefix = this.prefix;
            var dict = {};
            for (var key in next) {
                dict[prefix + key] = next[key];
            }
            return this.constructor.link(dict);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href_normal", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href_absolute", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "dict", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "dict_cut", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "value", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "make_link", null);
    __decorate([
        $mol_action
    ], $mol_state_arg, "go", null);
    $.$mol_state_arg = $mol_state_arg;
    const $mol_state_arg_change = (event) => {
        $mol_state_arg.href($mol_dom_context.location.href);
    };
    self.addEventListener('hashchange', $mol_state_arg_change);
})($ || ($ = {}));
//mol/state/arg/arg.web.ts
;
"use strict";
var $;
(function ($) {
    const { rem } = $mol_style_unit;
    const { scale } = $mol_style_func;
    $mol_style_define($mol_link, {
        textDecoration: 'none',
        color: $mol_theme.control,
        stroke: 'currentcolor',
        cursor: 'pointer',
        padding: $mol_gap.text,
        boxSizing: 'border-box',
        position: 'relative',
        minWidth: rem(2.5),
        gap: $mol_gap.space,
        border: {
            radius: $mol_gap.round,
        },
        ':hover': {
            background: {
                color: $mol_theme.hover,
            },
        },
        ':focus': {
            outline: 'none',
            background: {
                color: $mol_theme.hover,
            },
        },
        ':focus-within': {
            outline: 'none',
            background: {
                color: $mol_theme.hover,
            }
        },
        ':active': {
            color: $mol_theme.focus,
        },
        '@': {
            mol_link_current: {
                'true': {
                    color: $mol_theme.current,
                    textShadow: '0 0',
                }
            }
        },
    });
})($ || ($ = {}));
//mol/link/link.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link extends $.$mol_link {
            uri_toggle() {
                return this.current() ? this.uri_off() : this.uri();
            }
            uri() {
                return new this.$.$mol_state_arg(this.state_key()).link(this.arg());
            }
            uri_off() {
                const arg2 = {};
                for (let i in this.arg())
                    arg2[i] = null;
                return new this.$.$mol_state_arg(this.state_key()).link(arg2);
            }
            uri_native() {
                const base = this.$.$mol_state_arg.href();
                return new URL(this.uri(), base);
            }
            current() {
                const base = this.$.$mol_state_arg.href_normal();
                const target = this.uri_native().toString();
                if (base === target)
                    return true;
                const args = this.arg();
                const keys = Object.keys(args).filter(key => args[key] != null);
                if (keys.length === 0)
                    return false;
                for (const key of keys) {
                    if (this.$.$mol_state_arg.value(key) != args[key])
                        return false;
                }
                return true;
            }
            file_name() {
                return null;
            }
            minimal_height() {
                return Math.max(super.minimal_height(), 24);
            }
            external() {
                return this.uri_native().origin !== $mol_dom_context.location.origin;
            }
            target() {
                return this.external() ? '_blank' : '_self';
            }
            hint_safe() {
                try {
                    return this.hint();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return '';
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_toggle", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_off", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_native", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "current", null);
        $$.$mol_link = $mol_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/link/link.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_pop extends $mol_view {
        showed(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        align_vert() {
            return "";
        }
        align_hor() {
            return "";
        }
        prefer() {
            return "vert";
        }
        sub() {
            return [
                this.Anchor()
            ];
        }
        sub_visible() {
            return [
                this.Anchor(),
                this.Bubble()
            ];
        }
        Anchor() {
            return null;
        }
        align() {
            return "bottom_center";
        }
        bubble_content() {
            return [];
        }
        height_max() {
            return 9999;
        }
        Bubble() {
            const obj = new this.$.$mol_pop_bubble();
            obj.align = () => this.align();
            obj.content = () => this.bubble_content();
            obj.height_max = () => this.height_max();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_pop.prototype, "showed", null);
    __decorate([
        $mol_mem
    ], $mol_pop.prototype, "Bubble", null);
    $.$mol_pop = $mol_pop;
    class $mol_pop_bubble extends $mol_view {
        sub() {
            return this.content();
        }
        style() {
            return {
                ...super.style(),
                maxHeight: this.height_max()
            };
        }
        attr() {
            return {
                ...super.attr(),
                mol_pop_align: this.align(),
                tabindex: 0
            };
        }
        content() {
            return [];
        }
        height_max() {
            return 9999;
        }
        align() {
            return "";
        }
    }
    $.$mol_pop_bubble = $mol_pop_bubble;
})($ || ($ = {}));
//mol/pop/-view.tree/pop.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/layer/layer.css", ":root {\n\t--mol_layer_hover: 1;\n\t--mol_layer_focus: 2;\n\t--mol_layer_speck: 3;\n\t--mol_layer_float: 4;\n\t--mol_layer_popup: 5;\n}\n");
})($ || ($ = {}));
//mol/layer/-css/layer.css.ts
;
"use strict";
var $;
(function ($) {
    const { vary } = $mol_style_func;
    $.$mol_layer = {
        hover: vary('--mol_layer_hover'),
        focus: vary('--mol_layer_focus'),
        speck: vary('--mol_layer_speck'),
        float: vary('--mol_layer_float'),
        popup: vary('--mol_layer_popup'),
    };
})($ || ($ = {}));
//mol/layer/layer.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/pop/pop.view.css", "[mol_pop] {\n\tposition: relative;\n\tdisplay: inline-flex;\n}\n\n[mol_pop_bubble] {\n\tbox-shadow: 0 0 1rem hsla(0,0%,0%,.5);\n\tborder-radius: var(--mol_gap_round);\n\tposition: absolute;\n\tz-index: var(--mol_layer_popup);\n\tbackground: var(--mol_theme_back);\n\tmax-width: none;\n\tmax-height: none;\n\t/* overflow: hidden;\n\toverflow-y: scroll;\n\toverflow-y: overlay; */\n\tword-break: normal;\n\twidth: max-content;\n\theight: max-content;\n\tflex-direction: column;\n\tmax-width: 80vw;\n\tmax-height: 80vw;\n}\n\n:where( [mol_pop_bubble] > * ) {\n\tbackground: var(--mol_theme_card);\n}\n\n[mol_pop_bubble][mol_scroll] {\n\tbackground: var(--mol_theme_back);\n}\n\n[mol_pop_bubble]:focus {\n\toutline: none;\n}\n\n[mol_pop_align=\"suspense_suspense\"] {\n\topacity: 0;\n}\n\n[mol_pop_align=\"left_top\"] {\n\ttransform: translate(-100%);\n\tleft: 0;\n\tbottom: 0;\n}\n\n[mol_pop_align=\"left_center\"] {\n\ttransform: translate(-100%, -50%);\n\tleft: 0;\n\ttop: 50%;\n}\n\n[mol_pop_align=\"left_bottom\"] {\n\ttransform: translate(-100%);\n\tleft: 0;\n\ttop: 0;\n}\n\n[mol_pop_align=\"right_top\"] {\n\ttransform: translate(100%);\n\tright: 0;\n\tbottom: 0;\n}\n\n[mol_pop_align=\"right_center\"] {\n\ttransform: translate(100%, -50%);\n\tright: 0;\n\ttop: 50%;\n}\n\n[mol_pop_align=\"right_bottom\"] {\n\ttransform: translate(100%);\n\tright: 0;\n\ttop: 0;\n}\n\n[mol_pop_align=\"center\"] {\n\tleft: 50%;\n\ttop: 50%;\n\ttransform: translate(-50%, -50%);\n}\n\n[mol_pop_align=\"top_left\"] {\n\tright: 0;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"top_center\"] {\n\ttransform: translate(-50%);\n\tleft: 50%;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"top_right\"] {\n\tleft: 0;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"bottom_left\"] {\n\tright: 0;\n\ttop: 100%;\n}\n\n[mol_pop_align=\"bottom_center\"] {\n\ttransform: translate(-50%);\n\tleft: 50%;\n\ttop: 100%;\n}\n\n[mol_pop_align=\"bottom_right\"] {\n\tleft: 0;\n\ttop: 100%;\n}\n");
})($ || ($ = {}));
//mol/pop/-css/pop.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_pop extends $.$mol_pop {
            showed(next = false) {
                this.focused();
                return next;
            }
            sub_visible() {
                return [
                    this.Anchor(),
                    ...this.showed() ? [this.Bubble()] : [],
                ];
            }
            height_max() {
                const viewport = this.$.$mol_window.size();
                const rect_bubble = this.view_rect();
                const align = this.align_vert();
                if (align === 'bottom')
                    return (viewport.height - rect_bubble.bottom) * .66;
                if (align === 'top')
                    return rect_bubble.top * .66;
                return 0;
            }
            align() {
                switch (this.prefer()) {
                    case 'hor': return `${this.align_hor()}_${this.align_vert()}`;
                    case 'vert': return `${this.align_vert()}_${this.align_hor()}`;
                    default: return this.prefer();
                }
            }
            align_vert() {
                const viewport = this.view_port();
                const rect_pop = this.view_rect();
                if (!rect_pop)
                    return 'suspense';
                return rect_pop.top > (viewport.top + viewport.height / 2) ? 'top' : 'bottom';
            }
            align_hor() {
                const viewport = this.view_port();
                const rect_pop = this.view_rect();
                if (!rect_pop)
                    return 'suspense';
                return rect_pop.left > (viewport.left + viewport.width / 2) ? 'left' : 'right';
            }
            View_port() {
                const view = new $mol_view;
                view.dom_node = () => {
                    let node = this.dom_node();
                    while (node = node.offsetParent) {
                        if (this.$.$mol_dom_context.getComputedStyle(node).overflow !== 'visible')
                            return node;
                    }
                    return this.$.$mol_dom_context.document.documentElement;
                };
                return view;
            }
            view_port() {
                return this.View_port().view_rect() ?? { ...this.$.$mol_window.size(), left: 0, top: 0 };
            }
        }
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "showed", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "sub_visible", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "height_max", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align_vert", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align_hor", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "View_port", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "view_port", null);
        $$.$mol_pop = $mol_pop;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/pop/pop.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_speck extends $mol_view {
        attr() {
            return {
                ...super.attr(),
                mol_theme: this.theme()
            };
        }
        style() {
            return {
                ...super.style(),
                minHeight: "1em"
            };
        }
        sub() {
            return [
                this.value()
            ];
        }
        theme() {
            return "$mol_theme_accent";
        }
        value() {
            return null;
        }
    }
    $.$mol_speck = $mol_speck;
})($ || ($ = {}));
//mol/speck/-view.tree/speck.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/speck/speck.view.css", "[mol_speck] {\n\tfont-size: .625rem;\n\tborder-radius: 1rem;\n\tmargin: -0.5rem -0.25rem;\n\talign-self: flex-start;\n\tmin-height: 1em;\n\tmin-width: .5em;\n\tvertical-align: sub;\n\tpadding: .25em .5em;\n\tposition: absolute;\n\tz-index: var(--mol_layer_speck);\n\ttext-align: center;\n\tline-height: 1;\n\tdisplay: inline-block;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\tuser-select: none;\n}\n");
})($ || ($ = {}));
//mol/speck/-css/speck.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button extends $mol_view {
        enabled() {
            return true;
        }
        click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event() {
            return {
                ...super.event(),
                click: (event) => this.event_activate(event),
                dblclick: (event) => this.clicks(event),
                keydown: (event) => this.event_key_press(event)
            };
        }
        attr() {
            return {
                ...super.attr(),
                disabled: this.disabled(),
                role: "button",
                tabindex: this.tab_index(),
                title: this.hint_safe()
            };
        }
        sub() {
            return [
                this.title()
            ];
        }
        Speck() {
            const obj = new this.$.$mol_speck();
            obj.value = () => this.error();
            return obj;
        }
        event_activate(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        clicks(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_key_press(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        disabled() {
            return false;
        }
        tab_index() {
            return 0;
        }
        hint() {
            return "";
        }
        hint_safe() {
            return this.hint();
        }
        error() {
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "click", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "event_click", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "Speck", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "event_activate", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "clicks", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "event_key_press", null);
    $.$mol_button = $mol_button;
})($ || ($ = {}));
//mol/button/-view.tree/button.view.tree.ts
;
"use strict";
var $;
(function ($) {
    let $mol_keyboard_code;
    (function ($mol_keyboard_code) {
        $mol_keyboard_code[$mol_keyboard_code["backspace"] = 8] = "backspace";
        $mol_keyboard_code[$mol_keyboard_code["tab"] = 9] = "tab";
        $mol_keyboard_code[$mol_keyboard_code["enter"] = 13] = "enter";
        $mol_keyboard_code[$mol_keyboard_code["shift"] = 16] = "shift";
        $mol_keyboard_code[$mol_keyboard_code["ctrl"] = 17] = "ctrl";
        $mol_keyboard_code[$mol_keyboard_code["alt"] = 18] = "alt";
        $mol_keyboard_code[$mol_keyboard_code["pause"] = 19] = "pause";
        $mol_keyboard_code[$mol_keyboard_code["capsLock"] = 20] = "capsLock";
        $mol_keyboard_code[$mol_keyboard_code["escape"] = 27] = "escape";
        $mol_keyboard_code[$mol_keyboard_code["space"] = 32] = "space";
        $mol_keyboard_code[$mol_keyboard_code["pageUp"] = 33] = "pageUp";
        $mol_keyboard_code[$mol_keyboard_code["pageDown"] = 34] = "pageDown";
        $mol_keyboard_code[$mol_keyboard_code["end"] = 35] = "end";
        $mol_keyboard_code[$mol_keyboard_code["home"] = 36] = "home";
        $mol_keyboard_code[$mol_keyboard_code["left"] = 37] = "left";
        $mol_keyboard_code[$mol_keyboard_code["up"] = 38] = "up";
        $mol_keyboard_code[$mol_keyboard_code["right"] = 39] = "right";
        $mol_keyboard_code[$mol_keyboard_code["down"] = 40] = "down";
        $mol_keyboard_code[$mol_keyboard_code["insert"] = 45] = "insert";
        $mol_keyboard_code[$mol_keyboard_code["delete"] = 46] = "delete";
        $mol_keyboard_code[$mol_keyboard_code["key0"] = 48] = "key0";
        $mol_keyboard_code[$mol_keyboard_code["key1"] = 49] = "key1";
        $mol_keyboard_code[$mol_keyboard_code["key2"] = 50] = "key2";
        $mol_keyboard_code[$mol_keyboard_code["key3"] = 51] = "key3";
        $mol_keyboard_code[$mol_keyboard_code["key4"] = 52] = "key4";
        $mol_keyboard_code[$mol_keyboard_code["key5"] = 53] = "key5";
        $mol_keyboard_code[$mol_keyboard_code["key6"] = 54] = "key6";
        $mol_keyboard_code[$mol_keyboard_code["key7"] = 55] = "key7";
        $mol_keyboard_code[$mol_keyboard_code["key8"] = 56] = "key8";
        $mol_keyboard_code[$mol_keyboard_code["key9"] = 57] = "key9";
        $mol_keyboard_code[$mol_keyboard_code["A"] = 65] = "A";
        $mol_keyboard_code[$mol_keyboard_code["B"] = 66] = "B";
        $mol_keyboard_code[$mol_keyboard_code["C"] = 67] = "C";
        $mol_keyboard_code[$mol_keyboard_code["D"] = 68] = "D";
        $mol_keyboard_code[$mol_keyboard_code["E"] = 69] = "E";
        $mol_keyboard_code[$mol_keyboard_code["F"] = 70] = "F";
        $mol_keyboard_code[$mol_keyboard_code["G"] = 71] = "G";
        $mol_keyboard_code[$mol_keyboard_code["H"] = 72] = "H";
        $mol_keyboard_code[$mol_keyboard_code["I"] = 73] = "I";
        $mol_keyboard_code[$mol_keyboard_code["J"] = 74] = "J";
        $mol_keyboard_code[$mol_keyboard_code["K"] = 75] = "K";
        $mol_keyboard_code[$mol_keyboard_code["L"] = 76] = "L";
        $mol_keyboard_code[$mol_keyboard_code["M"] = 77] = "M";
        $mol_keyboard_code[$mol_keyboard_code["N"] = 78] = "N";
        $mol_keyboard_code[$mol_keyboard_code["O"] = 79] = "O";
        $mol_keyboard_code[$mol_keyboard_code["P"] = 80] = "P";
        $mol_keyboard_code[$mol_keyboard_code["Q"] = 81] = "Q";
        $mol_keyboard_code[$mol_keyboard_code["R"] = 82] = "R";
        $mol_keyboard_code[$mol_keyboard_code["S"] = 83] = "S";
        $mol_keyboard_code[$mol_keyboard_code["T"] = 84] = "T";
        $mol_keyboard_code[$mol_keyboard_code["U"] = 85] = "U";
        $mol_keyboard_code[$mol_keyboard_code["V"] = 86] = "V";
        $mol_keyboard_code[$mol_keyboard_code["W"] = 87] = "W";
        $mol_keyboard_code[$mol_keyboard_code["X"] = 88] = "X";
        $mol_keyboard_code[$mol_keyboard_code["Y"] = 89] = "Y";
        $mol_keyboard_code[$mol_keyboard_code["Z"] = 90] = "Z";
        $mol_keyboard_code[$mol_keyboard_code["metaLeft"] = 91] = "metaLeft";
        $mol_keyboard_code[$mol_keyboard_code["metaRight"] = 92] = "metaRight";
        $mol_keyboard_code[$mol_keyboard_code["select"] = 93] = "select";
        $mol_keyboard_code[$mol_keyboard_code["numpad0"] = 96] = "numpad0";
        $mol_keyboard_code[$mol_keyboard_code["numpad1"] = 97] = "numpad1";
        $mol_keyboard_code[$mol_keyboard_code["numpad2"] = 98] = "numpad2";
        $mol_keyboard_code[$mol_keyboard_code["numpad3"] = 99] = "numpad3";
        $mol_keyboard_code[$mol_keyboard_code["numpad4"] = 100] = "numpad4";
        $mol_keyboard_code[$mol_keyboard_code["numpad5"] = 101] = "numpad5";
        $mol_keyboard_code[$mol_keyboard_code["numpad6"] = 102] = "numpad6";
        $mol_keyboard_code[$mol_keyboard_code["numpad7"] = 103] = "numpad7";
        $mol_keyboard_code[$mol_keyboard_code["numpad8"] = 104] = "numpad8";
        $mol_keyboard_code[$mol_keyboard_code["numpad9"] = 105] = "numpad9";
        $mol_keyboard_code[$mol_keyboard_code["multiply"] = 106] = "multiply";
        $mol_keyboard_code[$mol_keyboard_code["add"] = 107] = "add";
        $mol_keyboard_code[$mol_keyboard_code["subtract"] = 109] = "subtract";
        $mol_keyboard_code[$mol_keyboard_code["decimal"] = 110] = "decimal";
        $mol_keyboard_code[$mol_keyboard_code["divide"] = 111] = "divide";
        $mol_keyboard_code[$mol_keyboard_code["F1"] = 112] = "F1";
        $mol_keyboard_code[$mol_keyboard_code["F2"] = 113] = "F2";
        $mol_keyboard_code[$mol_keyboard_code["F3"] = 114] = "F3";
        $mol_keyboard_code[$mol_keyboard_code["F4"] = 115] = "F4";
        $mol_keyboard_code[$mol_keyboard_code["F5"] = 116] = "F5";
        $mol_keyboard_code[$mol_keyboard_code["F6"] = 117] = "F6";
        $mol_keyboard_code[$mol_keyboard_code["F7"] = 118] = "F7";
        $mol_keyboard_code[$mol_keyboard_code["F8"] = 119] = "F8";
        $mol_keyboard_code[$mol_keyboard_code["F9"] = 120] = "F9";
        $mol_keyboard_code[$mol_keyboard_code["F10"] = 121] = "F10";
        $mol_keyboard_code[$mol_keyboard_code["F11"] = 122] = "F11";
        $mol_keyboard_code[$mol_keyboard_code["F12"] = 123] = "F12";
        $mol_keyboard_code[$mol_keyboard_code["numLock"] = 144] = "numLock";
        $mol_keyboard_code[$mol_keyboard_code["scrollLock"] = 145] = "scrollLock";
        $mol_keyboard_code[$mol_keyboard_code["semicolon"] = 186] = "semicolon";
        $mol_keyboard_code[$mol_keyboard_code["equals"] = 187] = "equals";
        $mol_keyboard_code[$mol_keyboard_code["comma"] = 188] = "comma";
        $mol_keyboard_code[$mol_keyboard_code["dash"] = 189] = "dash";
        $mol_keyboard_code[$mol_keyboard_code["period"] = 190] = "period";
        $mol_keyboard_code[$mol_keyboard_code["forwardSlash"] = 191] = "forwardSlash";
        $mol_keyboard_code[$mol_keyboard_code["graveAccent"] = 192] = "graveAccent";
        $mol_keyboard_code[$mol_keyboard_code["bracketOpen"] = 219] = "bracketOpen";
        $mol_keyboard_code[$mol_keyboard_code["slashBack"] = 220] = "slashBack";
        $mol_keyboard_code[$mol_keyboard_code["slashBackLeft"] = 226] = "slashBackLeft";
        $mol_keyboard_code[$mol_keyboard_code["bracketClose"] = 221] = "bracketClose";
        $mol_keyboard_code[$mol_keyboard_code["quoteSingle"] = 222] = "quoteSingle";
    })($mol_keyboard_code = $.$mol_keyboard_code || ($.$mol_keyboard_code = {}));
})($ || ($ = {}));
//mol/keyboard/code/code.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/button.view.css", "[mol_button] {\n\tborder: none;\n\tfont: inherit;\n\tdisplay: inline-flex;\n\tflex-shrink: 0;\n\ttext-decoration: inherit;\n\tcursor: inherit;\n\tposition: relative;\n\tbox-sizing: border-box;\n\tword-break: normal;\n\tcursor: default;\n\tuser-select: none;\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_button]:where(:not(:disabled)):hover {\n\tz-index: var(--mol_layer_hover);\n}\n\n[mol_button]:focus {\n\toutline: none;\n\tz-index: var(--mol_layer_focus);\n}\n");
})($ || ($ = {}));
//mol/button/-css/button.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button extends $.$mol_button {
            status(next = [null]) { return next; }
            disabled() {
                return !this.enabled();
            }
            event_activate(next) {
                if (!next)
                    return;
                if (!this.enabled())
                    return;
                try {
                    this.event_click(next);
                    this.click(next);
                    this.status([null]);
                }
                catch (error) {
                    this.status([error]);
                    $mol_fail_hidden(error);
                }
            }
            event_key_press(event) {
                if (event.keyCode === $mol_keyboard_code.enter) {
                    return this.event_activate(event);
                }
            }
            tab_index() {
                return this.enabled() ? super.tab_index() : -1;
            }
            error() {
                const [error] = this.status();
                if (!error)
                    return '';
                if (error instanceof Promise) {
                    return $mol_fail_hidden(error);
                }
                return String(error.message ?? error);
            }
            hint_safe() {
                try {
                    return this.hint();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return '';
                }
            }
            sub_visible() {
                return [
                    ...this.error() ? [this.Speck()] : [],
                    ...this.sub(),
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_button.prototype, "status", null);
        $$.$mol_button = $mol_button;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/button/button.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_typed extends $mol_button {
        minimal_height() {
            return 40;
        }
        minimal_width() {
            return 40;
        }
    }
    $.$mol_button_typed = $mol_button_typed;
})($ || ($ = {}));
//mol/button/typed/-view.tree/typed.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/typed/typed.view.css", "[mol_button_typed] {\n\talign-content: center;\n\talign-items: center;\n\tpadding: var(--mol_gap_text);\n\tborder-radius: var(--mol_gap_round);\n\tgap: var(--mol_gap_space);\n\tuser-select: none;\n\tcursor: pointer;\n}\n\n[mol_button_typed][disabled] {\n\tpointer-events: none;\n}\n\n[mol_button_typed]:hover ,\n[mol_button_typed]:focus {\n\tbackground-color: var(--mol_theme_hover);\n}\n\n[mol_button_typed]:active {\n\tcolor: var(--mol_theme_focus);\n}\n\n");
})($ || ($ = {}));
//mol/button/typed/-css/typed.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_minor extends $mol_button_typed {
    }
    $.$mol_button_minor = $mol_button_minor;
})($ || ($ = {}));
//mol/button/minor/-view.tree/minor.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/minor/minor.view.css", "[mol_button_minor] {\n\tcolor: var(--mol_theme_control);\n}\n\n[mol_button_minor][disabled] {\n\tcolor: var(--mol_theme_shade);\n}\n");
})($ || ($ = {}));
//mol/button/minor/-css/minor.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_hotkey extends $mol_plugin {
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.keydown(event)
            };
        }
        key() {
            return {};
        }
        mod_ctrl() {
            return false;
        }
        mod_alt() {
            return false;
        }
        mod_shift() {
            return false;
        }
        keydown(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_hotkey.prototype, "keydown", null);
    $.$mol_hotkey = $mol_hotkey;
})($ || ($ = {}));
//mol/hotkey/-view.tree/hotkey.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_hotkey extends $.$mol_hotkey {
            key() {
                return super.key();
            }
            keydown(event) {
                if (!event)
                    return;
                if (event.defaultPrevented)
                    return;
                let name = $mol_keyboard_code[event.keyCode];
                if (this.mod_ctrl() !== (event.ctrlKey || event.metaKey))
                    return;
                if (this.mod_alt() !== event.altKey)
                    return;
                if (this.mod_shift() !== event.shiftKey)
                    return;
                const handle = this.key()[name];
                if (handle)
                    handle(event);
            }
        }
        $$.$mol_hotkey = $mol_hotkey;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/hotkey/hotkey.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_nav extends $mol_plugin {
        cycle(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        mod_ctrl() {
            return false;
        }
        mod_shift() {
            return false;
        }
        mod_alt() {
            return false;
        }
        keys_x(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        keys_y(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        current_x(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        current_y(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        event_up(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_down(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_left(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_right(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.event_key(event)
            };
        }
        event_key(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "cycle", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "keys_x", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "keys_y", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "current_x", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "current_y", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_up", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_down", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_left", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_right", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_key", null);
    $.$mol_nav = $mol_nav;
})($ || ($ = {}));
//mol/nav/-view.tree/nav.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_nav extends $.$mol_nav {
            event_key(event) {
                if (!event)
                    return event;
                if (event.defaultPrevented)
                    return;
                if (this.mod_ctrl() && !event.ctrlKey)
                    return;
                if (this.mod_shift() && !event.shiftKey)
                    return;
                if (this.mod_alt() && !event.altKey)
                    return;
                switch (event.keyCode) {
                    case $mol_keyboard_code.up: return this.event_up(event);
                    case $mol_keyboard_code.down: return this.event_down(event);
                    case $mol_keyboard_code.left: return this.event_left(event);
                    case $mol_keyboard_code.right: return this.event_right(event);
                }
            }
            event_up(event) {
                if (!event)
                    return event;
                const keys = this.keys_y();
                if (keys.length < 1)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? 0 : index_y;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_down(event) {
                if (!event)
                    return event;
                const keys = this.keys_y();
                if (keys.length < 1)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? keys.length - 1 : index_y;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_left(event) {
                if (!event)
                    return event;
                const keys = this.keys_x();
                if (keys.length < 1)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? 0 : index_x;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            event_right(event) {
                if (!event)
                    return event;
                const keys = this.keys_x();
                if (keys.length < 1)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? keys.length - 1 : index_x;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            index_y() {
                let index = this.keys_y().indexOf(this.current_y());
                if (index < 0)
                    return null;
                return index;
            }
            index_x() {
                let index = this.keys_x().indexOf(this.current_x());
                if (index < 0)
                    return null;
                return index;
            }
        }
        $$.$mol_nav = $mol_nav;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/nav/nav.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_local extends $mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $mol_dom_context.localStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static changes(next) { return next; }
        static value(key, next) {
            this.changes();
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_local.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_local, "changes", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_local, "value", null);
    $.$mol_state_local = $mol_state_local;
})($ || ($ = {}));
//mol/state/local/local.ts
;
"use strict";
var $;
(function ($) {
    self.addEventListener('storage', event => $.$mol_state_local.changes(event));
})($ || ($ = {}));
//mol/state/local/local.web.ts
;
"use strict";
//mol/charset/encoding/encoding.ts
;
"use strict";
var $;
(function ($) {
    const decoders = {};
    function $mol_charset_decode(buffer, encoding = 'utf8') {
        let decoder = decoders[encoding];
        if (!decoder)
            decoder = decoders[encoding] = new TextDecoder(encoding);
        return decoder.decode(buffer);
    }
    $.$mol_charset_decode = $mol_charset_decode;
})($ || ($ = {}));
//mol/charset/decode/decode.ts
;
"use strict";
//node/node.ts
;
"use strict";
var $node = $node || {};
//node/node.web.ts
;
"use strict";
var $;
(function ($) {
    const TextEncoder = globalThis.TextEncoder ?? $node.util.TextEncoder;
    const encoder = new TextEncoder();
    function $mol_charset_encode(value) {
        return encoder.encode(value);
    }
    $.$mol_charset_encode = $mol_charset_encode;
})($ || ($ = {}));
//mol/charset/encode/encode.ts
;
"use strict";
var $;
(function ($) {
    class $mol_file_not_found extends Error {
    }
    $.$mol_file_not_found = $mol_file_not_found;
    class $mol_file extends $mol_object {
        static absolute(path) {
            throw new Error('Not implemented yet');
        }
        static relative(path) {
            throw new Error('Not implemented yet');
        }
        static base = '';
        path() {
            return '.';
        }
        parent() {
            return this.resolve('..');
        }
        reset() {
            try {
                this.stat(null);
            }
            catch (error) {
                if (error instanceof $mol_file_not_found)
                    return;
                return $mol_fail_hidden(error);
            }
        }
        version() {
            return this.stat()?.mtime.getTime().toString(36).toUpperCase() ?? '';
        }
        watcher() {
            console.warn('$mol_file_web.watcher() not implemented');
            return {
                destructor() { }
            };
        }
        exists(next) {
            let exists = Boolean(this.stat());
            if (next === undefined)
                return exists;
            if (next === exists)
                return exists;
            if (next)
                this.parent().exists(true);
            this.ensure();
            this.reset();
            return next;
        }
        type() {
            return this.stat()?.type ?? '';
        }
        name() {
            return this.path().replace(/^.*\//, '');
        }
        ext() {
            const match = /((?:\.\w+)+)$/.exec(this.path());
            return match ? match[1].substring(1) : '';
        }
        text(next, virt) {
            if (virt) {
                const now = new Date;
                this.stat({
                    type: 'file',
                    size: 0,
                    atime: now,
                    mtime: now,
                    ctime: now,
                }, 'virt');
                return next;
            }
            if (next === undefined) {
                return $mol_charset_decode(this.buffer(undefined));
            }
            else {
                const buffer = next === undefined ? undefined : $mol_charset_encode(next);
                this.buffer(buffer);
                return next;
            }
        }
        find(include, exclude) {
            const found = [];
            const sub = this.sub();
            for (const child of sub) {
                const child_path = child.path();
                if (exclude && child_path.match(exclude))
                    continue;
                if (!include || child_path.match(include))
                    found.push(child);
                if (child.type() === 'dir') {
                    const sub_child = child.find(include, exclude);
                    for (const child of sub_child)
                        found.push(child);
                }
            }
            return found;
        }
        size() {
            switch (this.type()) {
                case 'file': return this.stat()?.size ?? 0;
                default: return 0;
            }
        }
    }
    __decorate([
        $mol_mem
    ], $mol_file.prototype, "exists", null);
    __decorate([
        $mol_mem
    ], $mol_file.prototype, "text", null);
    __decorate([
        $mol_mem_key
    ], $mol_file, "absolute", null);
    $.$mol_file = $mol_file;
})($ || ($ = {}));
//mol/file/file.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_sync(obj) {
        return new Proxy(obj, {
            get(obj, field) {
                const val = obj[field];
                if (typeof val !== 'function')
                    return val;
                const temp = $mol_wire_task.getter(val);
                return function $mol_wire_sync(...args) {
                    const fiber = temp(obj, args);
                    return fiber.sync();
                };
            },
            apply(obj, self, args) {
                const temp = $mol_wire_task.getter(obj);
                const fiber = temp(self, args);
                return fiber.sync();
            },
        });
    }
    $.$mol_wire_sync = $mol_wire_sync;
})($ || ($ = {}));
//mol/wire/sync/sync.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_parse(text, type = 'application/xhtml+xml') {
        const parser = new $mol_dom_context.DOMParser();
        const doc = parser.parseFromString(text, type);
        const error = doc.getElementsByTagName('parsererror');
        if (error.length)
            throw new Error(error[0].textContent);
        return doc;
    }
    $.$mol_dom_parse = $mol_dom_parse;
})($ || ($ = {}));
//mol/dom/parse/parse.ts
;
"use strict";
var $;
(function ($) {
    class $mol_fetch_response extends $mol_object2 {
        native;
        constructor(native) {
            super();
            this.native = native;
        }
        status() {
            const types = ['unknown', 'inform', 'success', 'redirect', 'wrong', 'failed'];
            return types[Math.floor(this.native.status / 100)];
        }
        code() {
            return this.native.status;
        }
        message() {
            return this.native.statusText || `HTTP Error ${this.code()}`;
        }
        headers() {
            return this.native.headers;
        }
        mime() {
            return this.headers().get('content-type');
        }
        stream() {
            return this.native.body;
        }
        text() {
            const buffer = this.buffer();
            const native = this.native;
            const mime = native.headers.get('content-type') || '';
            const [, charset] = /charset=(.*)/.exec(mime) || [, 'utf-8'];
            const decoder = new TextDecoder(charset);
            return decoder.decode(buffer);
        }
        json() {
            return $mol_wire_sync(this.native).json();
        }
        buffer() {
            return $mol_wire_sync(this.native).arrayBuffer();
        }
        xml() {
            return $mol_dom_parse(this.text(), 'application/xml');
        }
        xhtml() {
            return $mol_dom_parse(this.text(), 'application/xhtml+xml');
        }
        html() {
            return $mol_dom_parse(this.text(), 'text/html');
        }
    }
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "stream", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "text", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "buffer", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "xml", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "xhtml", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "html", null);
    $.$mol_fetch_response = $mol_fetch_response;
    class $mol_fetch extends $mol_object2 {
        static request(input, init = {}) {
            const native = globalThis.fetch ?? $node['undici'].fetch;
            const controller = new AbortController();
            let done = false;
            const promise = native(input, {
                ...init,
                signal: controller.signal,
            }).finally(() => {
                done = true;
            });
            return Object.assign(promise, {
                destructor: () => {
                    if (!done && !controller.signal.aborted)
                        controller.abort();
                },
            });
        }
        static response(input, init) {
            return new $mol_fetch_response($mol_wire_sync(this).request(input, init));
        }
        static success(input, init) {
            const response = this.response(input, init);
            if (response.status() === 'success')
                return response;
            throw new Error(response.message());
        }
        static stream(input, init) {
            return this.success(input, init).stream();
        }
        static text(input, init) {
            return this.success(input, init).text();
        }
        static json(input, init) {
            return this.success(input, init).json();
        }
        static buffer(input, init) {
            return this.success(input, init).buffer();
        }
        static xml(input, init) {
            return this.success(input, init).xml();
        }
        static xhtml(input, init) {
            return this.success(input, init).xhtml();
        }
        static html(input, init) {
            return this.success(input, init).html();
        }
    }
    __decorate([
        $mol_action
    ], $mol_fetch, "response", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "success", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "stream", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "text", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "json", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "buffer", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "xml", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "xhtml", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "html", null);
    $.$mol_fetch = $mol_fetch;
})($ || ($ = {}));
//mol/fetch/fetch.ts
;
"use strict";
var $;
(function ($) {
    class $mol_file_web extends $mol_file {
        static absolute(path) {
            return this.make({
                path: $mol_const(path)
            });
        }
        static relative(path) {
            return this.absolute(new URL(path, this.base).toString());
        }
        static base = $mol_dom_context.document
            ? new URL('.', $mol_dom_context.document.currentScript['src']).toString()
            : '';
        buffer(next) {
            if (next !== undefined)
                throw new Error(`Saving content not supported: ${this.path}`);
            const response = $mol_fetch.response(this.path());
            if (response.native.status === 404)
                throw new $mol_file_not_found(`File not found: ${this.path()}`);
            return new Uint8Array(response.buffer());
        }
        stat(next, virt) {
            let stat = next;
            if (next === undefined) {
                const content = this.text();
                const ctime = new Date();
                stat = {
                    type: 'file',
                    size: content.length,
                    ctime,
                    atime: ctime,
                    mtime: ctime
                };
            }
            this.parent().watcher();
            return stat;
        }
        resolve(path) {
            let res = this.path() + '/' + path;
            while (true) {
                let prev = res;
                res = res.replace(/\/[^\/.]+\/\.\.\//, '/');
                if (prev === res)
                    break;
            }
            return this.constructor.absolute(res);
        }
        ensure() {
            throw new Error('$mol_file_web.ensure() not implemented');
        }
        sub() {
            throw new Error('$mol_file_web.sub() not implemented');
        }
        relate(base = this.constructor.relative('.')) {
            throw new Error('$mol_file_web.relate() not implemented');
        }
        append(next) {
            throw new Error('$mol_file_web.append() not implemented');
        }
    }
    __decorate([
        $mol_mem
    ], $mol_file_web.prototype, "buffer", null);
    __decorate([
        $mol_mem
    ], $mol_file_web.prototype, "stat", null);
    __decorate([
        $mol_mem
    ], $mol_file_web.prototype, "sub", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_web, "absolute", null);
    $.$mol_file_web = $mol_file_web;
    $.$mol_file = $mol_file_web;
})($ || ($ = {}));
//mol/file/file.web.ts
;
"use strict";
//hyoo/hyoo.ts
;
"use strict";
var $;
(function ($) {
    class $mol_locale extends $mol_object {
        static lang_default() {
            return 'en';
        }
        static lang(next) {
            return this.$.$mol_state_local.value('locale', next) || $mol_dom_context.navigator.language.replace(/-.*/, '') || this.lang_default();
        }
        static source(lang) {
            return JSON.parse(this.$.$mol_file.relative(`web.locale=${lang}.json`).text().toString());
        }
        static texts(lang, next) {
            if (next)
                return next;
            try {
                return this.source(lang).valueOf();
            }
            catch (error) {
                if ($mol_fail_catch(error)) {
                    const def = this.lang_default();
                    if (lang === def)
                        throw error;
                    return {};
                }
            }
        }
        static text(key) {
            const lang = this.lang();
            const target = this.texts(lang)[key];
            if (target)
                return target;
            this.warn(key);
            const en = this.texts('en')[key];
            if (!en)
                return key;
            try {
                return $mol_wire_sync($hyoo_lingua_translate).call(this.$, lang, en);
            }
            catch (error) {
                $mol_fail_log(error);
            }
            return en;
        }
        static warn(key) {
            console.warn(`Not translated to "${this.lang()}": ${key}`);
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_locale, "lang_default", null);
    __decorate([
        $mol_mem
    ], $mol_locale, "lang", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "source", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "texts", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "text", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "warn", null);
    $.$mol_locale = $mol_locale;
})($ || ($ = {}));
//mol/locale/locale.ts
;
"use strict";
var $;
(function ($) {
    class $mol_string extends $mol_view {
        dom_name() {
            return "input";
        }
        enabled() {
            return true;
        }
        minimal_height() {
            return 40;
        }
        autocomplete() {
            return false;
        }
        selection(val) {
            if (val !== undefined)
                return val;
            return [
                0,
                0
            ];
        }
        auto() {
            return [
                this.selection_watcher()
            ];
        }
        field() {
            return {
                ...super.field(),
                disabled: this.disabled(),
                value: this.value_changed(),
                placeholder: this.hint_visible(),
                spellcheck: this.spellcheck(),
                autocomplete: this.autocomplete_native(),
                selectionEnd: this.selection_end(),
                selectionStart: this.selection_start(),
                inputMode: this.keyboard(),
                enterkeyhint: this.enter()
            };
        }
        attr() {
            return {
                ...super.attr(),
                maxlength: this.length_max(),
                type: this.type()
            };
        }
        event() {
            return {
                ...super.event(),
                input: (event) => this.event_change(event)
            };
        }
        plugins() {
            return [
                this.Submit()
            ];
        }
        selection_watcher() {
            return null;
        }
        disabled() {
            return false;
        }
        value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        value_changed(val) {
            return this.value(val);
        }
        hint() {
            return "";
        }
        hint_visible() {
            return this.hint();
        }
        spellcheck() {
            return true;
        }
        autocomplete_native() {
            return "";
        }
        selection_end() {
            return 0;
        }
        selection_start() {
            return 0;
        }
        keyboard() {
            return "text";
        }
        enter() {
            return "go";
        }
        length_max() {
            return +Infinity;
        }
        type(val) {
            if (val !== undefined)
                return val;
            return "text";
        }
        event_change(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        submit_with_ctrl() {
            return false;
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Submit() {
            const obj = new this.$.$mol_hotkey();
            obj.mod_ctrl = () => this.submit_with_ctrl();
            obj.key = () => ({
                enter: (event) => this.submit(event)
            });
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "selection", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "value", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "type", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "event_change", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "submit", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "Submit", null);
    $.$mol_string = $mol_string;
})($ || ($ = {}));
//mol/string/-view.tree/string.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/string/string.view.css", "[mol_string] {\n\tbox-sizing: border-box;\n\toutline-offset: 0;\n\tborder: none;\n\tborder-radius: var(--mol_gap_round);\n\twhite-space: pre-line;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tposition: relative;\n\tfont: inherit;\n\tflex: 1 1 auto;\n\tbackground: transparent;\n\tmin-width: 0;\n\tcolor: inherit;\n\tbackground: var(--mol_theme_field);\n}\n\n[mol_string]:disabled:not(:placeholder-shown) {\n\tbackground-color: transparent;\n\tcolor: var(--mol_theme_text);\n}\n\n[mol_string]:where(:not(:disabled)) {\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_line);\n}\n\n[mol_string]:where(:not(:disabled)):hover {\n\tbox-shadow: inset 0 0 0 2px var(--mol_theme_line);\n\tz-index: var(--mol_layer_hover);\n}\n\n[mol_string]:focus {\n\toutline: none;\n\tz-index: var(--mol_layer_focus);\n\tcolor: var(--mol_theme_text);\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_focus);\n}\n\n[mol_string]::placeholder {\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_string]::-ms-clear {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));
//mol/string/-css/string.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_string extends $.$mol_string {
            event_change(next) {
                if (!next)
                    return;
                const el = next.target;
                const from = el.selectionStart;
                const to = el.selectionEnd;
                el.value = this.value_changed(el.value);
                if (to === null)
                    return;
                el.selectionEnd = to;
                el.selectionStart = from;
                this.selection_change(next);
            }
            hint_visible() {
                return (this.enabled() ? this.hint() : '') || ' ';
            }
            disabled() {
                return !this.enabled();
            }
            autocomplete_native() {
                return this.autocomplete() ? 'on' : 'off';
            }
            selection_watcher() {
                return new $mol_dom_listener(this.$.$mol_dom_context.document, 'selectionchange', $mol_wire_async(event => this.selection_change(event)));
            }
            selection_change(event) {
                const el = this.dom_node();
                if (el !== this.$.$mol_dom_context.document.activeElement)
                    return;
                const [from, to] = this.selection([
                    el.selectionStart,
                    el.selectionEnd,
                ]);
                el.selectionEnd = to;
                el.selectionStart = from;
            }
            selection_start() {
                const el = this.dom_node();
                if (el.selectionStart === null)
                    return undefined;
                return this.selection()[0];
            }
            selection_end() {
                const el = this.dom_node();
                if (el.selectionEnd === null)
                    return undefined;
                return this.selection()[1];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_string.prototype, "selection_watcher", null);
        $$.$mol_string = $mol_string;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/string/string.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg extends $mol_view {
        dom_name() {
            return "svg";
        }
        dom_name_space() {
            return "http://www.w3.org/2000/svg";
        }
        font_size() {
            return 16;
        }
        font_family() {
            return "";
        }
        style_size() {
            return {};
        }
    }
    $.$mol_svg = $mol_svg;
})($ || ($ = {}));
//mol/svg/-view.tree/svg.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_timeout extends $mol_object2 {
        delay;
        task;
        id;
        constructor(delay, task) {
            super();
            this.delay = delay;
            this.task = task;
            this.id = setTimeout(task, delay);
        }
        destructor() {
            clearTimeout(this.id);
        }
    }
    $.$mol_after_timeout = $mol_after_timeout;
})($ || ($ = {}));
//mol/after/timeout/timeout.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_time extends $mol_object {
        static task(precision, reset) {
            if (precision) {
                return new $mol_after_timeout(precision, () => this.task(precision, null));
            }
            else {
                return new $mol_after_frame(() => this.task(precision, null));
            }
        }
        static now(precision) {
            this.task(precision);
            return Date.now();
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "task", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "now", null);
    $.$mol_state_time = $mol_state_time;
})($ || ($ = {}));
//mol/state/time/time.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_svg extends $.$mol_svg {
            computed_style() {
                const win = this.$.$mol_dom_context;
                const style = win.getComputedStyle(this.dom_node());
                if (!style['font-size'])
                    $mol_state_time.now(0);
                return style;
            }
            font_size() {
                return parseInt(this.computed_style()['font-size']) || 16;
            }
            font_family() {
                return this.computed_style()['font-family'];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "computed_style", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_size", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_family", null);
        $$.$mol_svg = $mol_svg;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/svg/svg.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg_root extends $mol_svg {
        dom_name() {
            return "svg";
        }
        attr() {
            return {
                ...super.attr(),
                viewBox: this.view_box(),
                preserveAspectRatio: this.aspect()
            };
        }
        view_box() {
            return "0 0 100 100";
        }
        aspect() {
            return "xMidYMid";
        }
    }
    $.$mol_svg_root = $mol_svg_root;
})($ || ($ = {}));
//mol/svg/root/-view.tree/root.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/svg/root/root.view.css", "[mol_svg_root] {\n\toverflow: hidden;\n}\n");
})($ || ($ = {}));
//mol/svg/root/-css/root.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg_path extends $mol_svg {
        dom_name() {
            return "path";
        }
        attr() {
            return {
                ...super.attr(),
                d: this.geometry()
            };
        }
        geometry() {
            return "";
        }
    }
    $.$mol_svg_path = $mol_svg_path;
})($ || ($ = {}));
//mol/svg/path/-view.tree/path.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon extends $mol_svg_root {
        view_box() {
            return "0 0 24 24";
        }
        minimal_width() {
            return 16;
        }
        minimal_height() {
            return 16;
        }
        sub() {
            return [
                this.Path()
            ];
        }
        path() {
            return "";
        }
        Path() {
            const obj = new this.$.$mol_svg_path();
            obj.geometry = () => this.path();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_icon.prototype, "Path", null);
    $.$mol_icon = $mol_icon;
})($ || ($ = {}));
//mol/icon/-view.tree/icon.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/icon/icon.view.css", "[mol_icon] {\n\tfill: currentColor;\n\tstroke: none;\n\twidth: 1rem;\n\theight: 1rem;\n\tflex: 0 0 auto;\n\tvertical-align: top;\n\tmargin: .25rem 0;\n\tdisplay: inline-block;\n\tfilter: drop-shadow(0px 1px 1px var(--mol_theme_back));\n\ttransform-origin: center;\n}\n\n[mol_icon_path] {\n\ttransform-origin: center;\n}\n");
})($ || ($ = {}));
//mol/icon/-css/icon.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_cross extends $mol_icon {
        path() {
            return "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z";
        }
    }
    $.$mol_icon_cross = $mol_icon_cross;
})($ || ($ = {}));
//mol/icon/cross/-view.tree/cross.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_list extends $mol_view {
        render_visible_only() {
            return true;
        }
        render_over() {
            return 0;
        }
        sub() {
            return this.rows();
        }
        Empty() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        Gap_before() {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                paddingTop: this.gap_before()
            });
            return obj;
        }
        Gap_after() {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                paddingTop: this.gap_after()
            });
            return obj;
        }
        view_window() {
            return [
                0,
                0
            ];
        }
        rows() {
            return [];
        }
        gap_before() {
            return 0;
        }
        gap_after() {
            return 0;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_list.prototype, "Empty", null);
    __decorate([
        $mol_mem
    ], $mol_list.prototype, "Gap_before", null);
    __decorate([
        $mol_mem
    ], $mol_list.prototype, "Gap_after", null);
    $.$mol_list = $mol_list;
})($ || ($ = {}));
//mol/list/-view.tree/list.view.tree.ts
;
"use strict";
var $;
(function ($) {
    let cache = null;
    function $mol_support_css_overflow_anchor() {
        return cache ?? (cache = (!/Gecko\//.test(navigator.userAgent)
            && this.$mol_dom_context.CSS?.supports('overflow-anchor:auto')) ?? false);
    }
    $.$mol_support_css_overflow_anchor = $mol_support_css_overflow_anchor;
})($ || ($ = {}));
//mol/support/css/css.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/list/list.view.css", "[mol_list] {\n\twill-change: contents;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-shrink: 0;\n\tmax-width: 100%;\n\t/* display: flex;\n\talign-items: stretch;\n\talign-content: stretch; */\n\ttransition: none;\n\tmin-height: .5rem;\n}\n\n[mol_list_gap_before] ,\n[mol_list_gap_after] {\n\tdisplay: block !important;\n\tflex: none;\n\ttransition: none;\n\toverflow-anchor: none;\n}\n");
})($ || ($ = {}));
//mol/list/-css/list.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_list extends $.$mol_list {
            sub() {
                const rows = this.rows();
                return (rows.length === 0) ? [this.Empty()] : rows;
            }
            render_visible_only() {
                return this.$.$mol_support_css_overflow_anchor();
            }
            view_window(next) {
                const kids = this.sub();
                if (kids.length < 3)
                    return [0, kids.length];
                if (this.$.$mol_print.active())
                    return [0, kids.length];
                const rect = this.view_rect();
                if (next)
                    return next;
                let [min, max] = $mol_mem_cached(() => this.view_window()) ?? [0, 0];
                let max2 = max = Math.min(max, kids.length);
                let min2 = min = Math.max(0, Math.min(min, max - 1));
                const anchoring = this.render_visible_only();
                const window_height = this.$.$mol_window.size().height + 40;
                const over = Math.ceil(window_height * this.render_over());
                const limit_top = -over;
                const limit_bottom = window_height + over;
                const gap_before = $mol_mem_cached(() => this.gap_before()) ?? 0;
                const gap_after = $mol_mem_cached(() => this.gap_after()) ?? 0;
                let top = Math.ceil(rect?.top ?? 0) + gap_before;
                let bottom = Math.ceil(rect?.bottom ?? 0) - gap_after;
                if (top <= limit_top && bottom >= limit_bottom) {
                    return [min2, max2];
                }
                if (anchoring && ((bottom < limit_top) || (top > limit_bottom))) {
                    min = 0;
                    top = Math.ceil(rect?.top ?? 0);
                    while (min < (kids.length - 1)) {
                        const height = kids[min].minimal_height();
                        if (top + height >= limit_top)
                            break;
                        top += height;
                        ++min;
                    }
                    min2 = min;
                    max2 = max = min;
                    bottom = top;
                }
                let top2 = top;
                let bottom2 = bottom;
                if (anchoring && (top <= limit_top) && (bottom2 < limit_bottom)) {
                    min2 = Math.max(0, max - 1);
                    top2 = bottom;
                }
                if ((bottom >= limit_bottom) && (top2 >= limit_top)) {
                    max2 = Math.min(min + 1, kids.length);
                    bottom2 = top;
                }
                while (bottom2 < limit_bottom && max2 < kids.length) {
                    bottom2 += kids[max2].minimal_height();
                    ++max2;
                }
                while (anchoring && ((top2 >= limit_top) && (min2 > 0))) {
                    --min2;
                    top2 -= kids[min2].minimal_height();
                }
                return [min2, max2];
            }
            gap_before() {
                const skipped = this.sub().slice(0, this.view_window()[0]);
                return Math.max(0, skipped.reduce((sum, view) => sum + view.minimal_height(), 0));
            }
            gap_after() {
                const skipped = this.sub().slice(this.view_window()[1]);
                return Math.max(0, skipped.reduce((sum, view) => sum + view.minimal_height(), 0));
            }
            sub_visible() {
                return [
                    ...this.gap_before() ? [this.Gap_before()] : [],
                    ...this.sub().slice(...this.view_window()),
                    ...this.gap_after() ? [this.Gap_after()] : [],
                ];
            }
            minimal_height() {
                return this.sub().reduce((sum, view) => {
                    try {
                        return sum + view.minimal_height();
                    }
                    catch (error) {
                        $mol_fail_log(error);
                        return sum;
                    }
                }, 0);
            }
            force_render(path) {
                const kids = this.rows();
                const index = kids.findIndex(item => path.has(item));
                if (index >= 0) {
                    const win = this.view_window();
                    if (index < win[0] || index >= win[1]) {
                        this.view_window([this.render_visible_only() ? index : 0, index + 1]);
                    }
                    kids[index].force_render(path);
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "sub", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "view_window", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "gap_before", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "gap_after", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "sub_visible", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "minimal_height", null);
        $$.$mol_list = $mol_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/list/list.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_paragraph extends $mol_view {
        line_height() {
            return 24;
        }
        letter_width() {
            return 7;
        }
        width_limit() {
            return +Infinity;
        }
        row_width() {
            return 0;
        }
        sub() {
            return [
                this.title()
            ];
        }
    }
    $.$mol_paragraph = $mol_paragraph;
})($ || ($ = {}));
//mol/paragraph/-view.tree/paragraph.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/paragraph/paragraph.view.css", ":where([mol_paragraph]) {\n\tmargin: 0;\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));
//mol/paragraph/-css/paragraph.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_paragraph extends $.$mol_paragraph {
            maximal_width() {
                let width = 0;
                const letter = this.letter_width();
                for (const kid of this.sub()) {
                    if (!kid)
                        continue;
                    if (kid instanceof $mol_view) {
                        width += kid.maximal_width();
                    }
                    else if (typeof kid !== 'object') {
                        width += String(kid).length * letter;
                    }
                }
                return width;
            }
            width_limit() {
                return this.$.$mol_window.size().width;
            }
            minimal_width() {
                return this.letter_width();
            }
            row_width() {
                return Math.max(Math.min(this.width_limit(), this.maximal_width()), this.letter_width());
            }
            minimal_height() {
                return Math.max(1, Math.ceil(this.maximal_width() / this.row_width())) * this.line_height();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "maximal_width", null);
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "row_width", null);
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "minimal_height", null);
        $$.$mol_paragraph = $mol_paragraph;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/paragraph/paragraph.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_dimmer extends $mol_paragraph {
        haystack() {
            return "";
        }
        needle() {
            return "";
        }
        sub() {
            return this.parts();
        }
        Low(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => [
                this.string(id)
            ];
            return obj;
        }
        High(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => [
                this.string(id)
            ];
            return obj;
        }
        parts() {
            return [];
        }
        string(id) {
            return "";
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_dimmer.prototype, "Low", null);
    __decorate([
        $mol_mem_key
    ], $mol_dimmer.prototype, "High", null);
    $.$mol_dimmer = $mol_dimmer;
})($ || ($ = {}));
//mol/dimmer/-view.tree/dimmer.view.tree.ts
;
"use strict";
//mol/type/equals/equals.ts
;
"use strict";
//mol/type/merge/merge.ts
;
"use strict";
//mol/type/intersect/intersect.ts
;
"use strict";
//mol/unicode/unicode.ts
;
"use strict";
var $;
(function ($) {
    class $mol_regexp extends RegExp {
        groups;
        constructor(source, flags = 'gsu', groups = []) {
            super(source, flags);
            this.groups = groups;
        }
        *[Symbol.matchAll](str) {
            const index = this.lastIndex;
            this.lastIndex = 0;
            try {
                while (this.lastIndex < str.length) {
                    const found = this.exec(str);
                    if (!found)
                        break;
                    yield found;
                }
            }
            finally {
                this.lastIndex = index;
            }
        }
        [Symbol.match](str) {
            const res = [...this[Symbol.matchAll](str)].filter(r => r.groups).map(r => r[0]);
            if (!res.length)
                return null;
            return res;
        }
        [Symbol.split](str) {
            const res = [];
            let token_last = null;
            for (let token of this[Symbol.matchAll](str)) {
                if (token.groups && (token_last ? token_last.groups : true))
                    res.push('');
                res.push(token[0]);
                token_last = token;
            }
            if (!res.length)
                res.push('');
            return res;
        }
        test(str) {
            return Boolean(str.match(this));
        }
        exec(str) {
            const from = this.lastIndex;
            if (from >= str.length)
                return null;
            const res = super.exec(str);
            if (res === null) {
                this.lastIndex = str.length;
                if (!str)
                    return null;
                return Object.assign([str.slice(from)], {
                    index: from,
                    input: str,
                });
            }
            if (from === this.lastIndex) {
                $mol_fail(new Error('Captured empty substring'));
            }
            const groups = {};
            const skipped = str.slice(from, this.lastIndex - res[0].length);
            if (skipped) {
                this.lastIndex = this.lastIndex - res[0].length;
                return Object.assign([skipped], {
                    index: from,
                    input: res.input,
                });
            }
            for (let i = 0; i < this.groups.length; ++i) {
                const group = this.groups[i];
                groups[group] = groups[group] || res[i + 1] || '';
            }
            return Object.assign(res, { groups });
        }
        generate(params) {
            return null;
        }
        get native() {
            return new RegExp(this.source, this.flags);
        }
        static repeat(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            const str = `(?:${regexp.source}){${min},${upper}}?`;
            const regexp2 = new $mol_regexp(str, regexp.flags, regexp.groups);
            regexp2.generate = params => {
                const res = regexp.generate(params);
                if (res)
                    return res;
                if (min > 0)
                    return res;
                return '';
            };
            return regexp2;
        }
        static repeat_greedy(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            const str = `(?:${regexp.source}){${min},${upper}}`;
            const regexp2 = new $mol_regexp(str, regexp.flags, regexp.groups);
            regexp2.generate = params => {
                const res = regexp.generate(params);
                if (res)
                    return res;
                if (min > 0)
                    return res;
                return '';
            };
            return regexp2;
        }
        static vary(sources) {
            const groups = [];
            const chunks = sources.map(source => {
                const regexp = $mol_regexp.from(source);
                groups.push(...regexp.groups);
                return regexp.source;
            });
            return new $mol_regexp(`(?:${chunks.join('|')})`, '', groups);
        }
        static optional(source) {
            return $mol_regexp.repeat_greedy(source, 0, 1);
        }
        static force_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?=${regexp.source})`, regexp.flags, regexp.groups);
        }
        static forbid_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?!${regexp.source})`, regexp.flags, regexp.groups);
        }
        static from(source, { ignoreCase, multiline } = {
            ignoreCase: false,
            multiline: false,
        }) {
            let flags = 'gsu';
            if (multiline)
                flags += 'm';
            if (ignoreCase)
                flags += 'i';
            if (typeof source === 'number') {
                const src = `\\u{${source.toString(16)}}`;
                const regexp = new $mol_regexp(src, flags);
                regexp.generate = () => src;
                return regexp;
            }
            if (typeof source === 'string') {
                const src = source.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const regexp = new $mol_regexp(src, flags);
                regexp.generate = () => source;
                return regexp;
            }
            else if (source instanceof $mol_regexp) {
                const regexp = new $mol_regexp(source.source, flags, source.groups);
                regexp.generate = params => source.generate(params);
                return regexp;
            }
            if (source instanceof RegExp) {
                const test = new RegExp('|' + source.source);
                const groups = Array.from({ length: test.exec('').length - 1 }, (_, i) => String(i + 1));
                const regexp = new $mol_regexp(source.source, source.flags, groups);
                regexp.generate = () => '';
                return regexp;
            }
            if (Array.isArray(source)) {
                const patterns = source.map(src => Array.isArray(src)
                    ? $mol_regexp.optional(src)
                    : $mol_regexp.from(src));
                const chunks = patterns.map(pattern => pattern.source);
                const groups = [];
                let index = 0;
                for (const pattern of patterns) {
                    for (let group of pattern.groups) {
                        if (Number(group) >= 0) {
                            groups.push(String(index++));
                        }
                        else {
                            groups.push(group);
                        }
                    }
                }
                const regexp = new $mol_regexp(chunks.join(''), flags, groups);
                regexp.generate = params => {
                    let res = '';
                    for (const pattern of patterns) {
                        let sub = pattern.generate(params);
                        if (sub === null)
                            return '';
                        res += sub;
                    }
                    return res;
                };
                return regexp;
            }
            else {
                const groups = [];
                const chunks = Object.keys(source).map(name => {
                    groups.push(name);
                    const regexp = $mol_regexp.from(source[name]);
                    groups.push(...regexp.groups);
                    return `(${regexp.source})`;
                });
                const regexp = new $mol_regexp(`(?:${chunks.join('|')})`, flags, groups);
                const validator = new RegExp('^' + regexp.source + '$', flags);
                regexp.generate = params => {
                    for (let option in source) {
                        if (option in params) {
                            if (typeof params[option] === 'boolean') {
                                if (!params[option])
                                    continue;
                            }
                            else {
                                const str = String(params[option]);
                                if (str.match(validator))
                                    return str;
                                $mol_fail(new Error(`Wrong param: ${option}=${str}`));
                            }
                        }
                        else {
                            if (typeof source[option] !== 'object')
                                continue;
                        }
                        const res = $mol_regexp.from(source[option]).generate(params);
                        if (res)
                            return res;
                    }
                    return null;
                };
                return regexp;
            }
        }
        static unicode_only(...category) {
            return new $mol_regexp(`\\p{${category.join('=')}}`);
        }
        static unicode_except(...category) {
            return new $mol_regexp(`\\P{${category.join('=')}}`);
        }
        static char_range(from, to) {
            return new $mol_regexp(`${$mol_regexp.from(from).source}-${$mol_regexp.from(to).source}`);
        }
        static char_only(...allowed) {
            const regexp = allowed.map(f => $mol_regexp.from(f).source).join('');
            return new $mol_regexp(`[${regexp}]`);
        }
        static char_except(...forbidden) {
            const regexp = forbidden.map(f => $mol_regexp.from(f).source).join('');
            return new $mol_regexp(`[^${regexp}]`);
        }
        static decimal_only = $mol_regexp.from(/\d/gsu);
        static decimal_except = $mol_regexp.from(/\D/gsu);
        static latin_only = $mol_regexp.from(/\w/gsu);
        static latin_except = $mol_regexp.from(/\W/gsu);
        static space_only = $mol_regexp.from(/\s/gsu);
        static space_except = $mol_regexp.from(/\S/gsu);
        static word_break_only = $mol_regexp.from(/\b/gsu);
        static word_break_except = $mol_regexp.from(/\B/gsu);
        static tab = $mol_regexp.from(/\t/gsu);
        static slash_back = $mol_regexp.from(/\\/gsu);
        static nul = $mol_regexp.from(/\0/gsu);
        static char_any = $mol_regexp.from(/./gsu);
        static begin = $mol_regexp.from(/^/gsu);
        static end = $mol_regexp.from(/$/gsu);
        static or = $mol_regexp.from(/|/gsu);
        static line_end = $mol_regexp.from({
            win_end: [['\r'], '\n'],
            mac_end: '\r',
        });
    }
    $.$mol_regexp = $mol_regexp;
})($ || ($ = {}));
//mol/regexp/regexp.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/dimmer/dimmer.view.css", "[mol_dimmer] {\n\tdisplay: block;\n\tmax-width: 100%;\n}\n\n[mol_dimmer_low] {\n\tdisplay: inline;\n\topacity: 0.8;\n}\n\n[mol_dimmer_high] {\n\tdisplay: inline;\n\tcolor: var(--mol_theme_focus);\n\ttext-shadow: 0 0;\n}\n");
})($ || ($ = {}));
//mol/dimmer/-css/dimmer.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_dimmer extends $.$mol_dimmer {
            parts() {
                const needle = this.needle();
                if (needle.length < 2)
                    return [this.haystack()];
                let chunks = [];
                let strings = this.strings();
                for (let index = 0; index < strings.length; index++) {
                    if (strings[index] === '')
                        continue;
                    chunks.push((index % 2) ? this.High(index) : this.Low(index));
                }
                return chunks;
            }
            strings() {
                const options = this.needle().split(/\s+/g).filter(Boolean);
                if (!options.length)
                    return [this.haystack()];
                const variants = { ...options };
                const regexp = $mol_regexp.from({ needle: variants }, { ignoreCase: true });
                return this.haystack().split(regexp);
            }
            string(index) {
                return this.strings()[index];
            }
            *view_find(check, path = []) {
                if (check(this, this.haystack())) {
                    yield [...path, this];
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_dimmer.prototype, "strings", null);
        $$.$mol_dimmer = $mol_dimmer;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/dimmer/dimmer.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_search extends $mol_pop {
        query(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        suggests() {
            return [];
        }
        plugins() {
            return [
                ...super.plugins(),
                this.Hotkey(),
                this.Nav()
            ];
        }
        showed(val) {
            return this.suggests_showed(val);
        }
        align_hor() {
            return "right";
        }
        Anchor() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.anchor_content();
            return obj;
        }
        bubble_content() {
            return [
                this.Menu()
            ];
        }
        Suggest(id) {
            const obj = new this.$.$mol_button_minor();
            obj.click = (event) => this.suggest_select(id, event);
            obj.sub = () => this.suggest_content(id);
            return obj;
        }
        clear(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        Hotkey() {
            const obj = new this.$.$mol_hotkey();
            obj.key = () => ({
                escape: (val) => this.clear(val)
            });
            return obj;
        }
        nav_components() {
            return [];
        }
        nav_focused(component) {
            if (component !== undefined)
                return component;
            return null;
        }
        Nav() {
            const obj = new this.$.$mol_nav();
            obj.keys_y = () => this.nav_components();
            obj.current_y = (component) => this.nav_focused(component);
            return obj;
        }
        suggests_showed(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        hint() {
            return this.$.$mol_locale.text('$mol_search_hint');
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        enabled() {
            return true;
        }
        keyboard() {
            return "search";
        }
        enter() {
            return "search";
        }
        bring() {
            return this.Query().bring();
        }
        Query() {
            const obj = new this.$.$mol_string();
            obj.value = (val) => this.query(val);
            obj.hint = () => this.hint();
            obj.submit = (event) => this.submit(event);
            obj.enabled = () => this.enabled();
            obj.keyboard = () => this.keyboard();
            obj.enter = () => this.enter();
            return obj;
        }
        Clear_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Clear() {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.$.$mol_locale.text('$mol_search_Clear_hint');
            obj.click = (event) => this.clear(event);
            obj.sub = () => [
                this.Clear_icon()
            ];
            return obj;
        }
        anchor_content() {
            return [
                this.Query(),
                this.Clear()
            ];
        }
        menu_items() {
            return [];
        }
        Menu() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.menu_items();
            return obj;
        }
        suggest_select(id, event) {
            if (event !== undefined)
                return event;
            return null;
        }
        suggest_label(id) {
            return "";
        }
        Suggest_label(id) {
            const obj = new this.$.$mol_dimmer();
            obj.haystack = () => this.suggest_label(id);
            obj.needle = () => this.query();
            return obj;
        }
        suggest_content(id) {
            return [
                this.Suggest_label(id)
            ];
        }
    }
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "query", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Anchor", null);
    __decorate([
        $mol_mem_key
    ], $mol_search.prototype, "Suggest", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "clear", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Hotkey", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "nav_focused", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Nav", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "suggests_showed", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "submit", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Query", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Clear_icon", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Clear", null);
    __decorate([
        $mol_mem
    ], $mol_search.prototype, "Menu", null);
    __decorate([
        $mol_mem_key
    ], $mol_search.prototype, "suggest_select", null);
    __decorate([
        $mol_mem_key
    ], $mol_search.prototype, "Suggest_label", null);
    $.$mol_search = $mol_search;
})($ || ($ = {}));
//mol/search/-view.tree/search.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/search/search.view.css", "[mol_search] {\n\talign-self: flex-start;\n\tflex: auto;\n}\n\n[mol_search_anchor] {\n\tflex: 1 1 auto;\n}\n\n[mol_search_query] {\n\tflex-grow: 1;\n}\n\n[mol_search_menu] {\n\tmin-height: .75rem;\n\tdisplay: flex;\n}\n\n[mol_search_suggest] {\n\ttext-align: left;\n}\n\n[mol_search_suggest_label_high] {\n\tcolor: var(--mol_theme_shade);\n\ttext-shadow: none;\n}\n");
})($ || ($ = {}));
//mol/search/-css/search.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_search extends $.$mol_search {
            anchor_content() {
                return [
                    this.Query(),
                    ...this.query() ? [this.Clear()] : [],
                ];
            }
            suggests_showed(next = true) {
                this.query();
                if (!this.focused())
                    return false;
                return next;
            }
            suggest_selected(next) {
                if (next === undefined)
                    return;
                this.query(next);
                this.Query().focused(true);
            }
            nav_components() {
                return [
                    this.Query(),
                    ...this.menu_items(),
                ];
            }
            nav_focused(component) {
                if (!this.focused())
                    return null;
                if (component == null) {
                    for (let comp of this.nav_components()) {
                        if (comp && comp.focused())
                            return comp;
                    }
                    return null;
                }
                if (this.suggests_showed()) {
                    this.ensure_visible(component, "center");
                    component.focused(true);
                }
                return component;
            }
            suggest_label(key) {
                return key;
            }
            menu_items() {
                return this.suggests().map((suggest) => this.Suggest(suggest));
            }
            suggest_select(id, event) {
                this.query(id);
                this.Query().selection([id.length, id.length]);
                this.Query().focused(true);
            }
            clear(event) {
                this.query('');
            }
        }
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "anchor_content", null);
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "suggests_showed", null);
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "nav_focused", null);
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "menu_items", null);
        $$.$mol_search = $mol_search;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/search/search.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_page extends $mol_view {
        dom_name() {
            return "article";
        }
        field() {
            return {
                ...super.field(),
                tabIndex: this.tabindex()
            };
        }
        sub() {
            return [
                this.Head(),
                this.Body(),
                this.Foot()
            ];
        }
        tabindex() {
            return -1;
        }
        Logo() {
            return null;
        }
        title_content() {
            return [
                this.Logo(),
                this.title()
            ];
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.dom_name = () => "h1";
            obj.sub = () => this.title_content();
            return obj;
        }
        tools() {
            return [];
        }
        Tools() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.tools();
            return obj;
        }
        head() {
            return [
                this.Title(),
                this.Tools()
            ];
        }
        Head() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 64;
            obj.dom_name = () => "header";
            obj.sub = () => this.head();
            return obj;
        }
        body() {
            return [];
        }
        body_scroll_top(val) {
            return this.Body().scroll_top(val);
        }
        Body() {
            const obj = new this.$.$mol_scroll();
            obj.sub = () => this.body();
            return obj;
        }
        foot() {
            return [];
        }
        Foot() {
            const obj = new this.$.$mol_view();
            obj.dom_name = () => "footer";
            obj.sub = () => this.foot();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Title", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Tools", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Head", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Body", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Foot", null);
    $.$mol_page = $mol_page;
})($ || ($ = {}));
//mol/page/-view.tree/page.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem } = $mol_style_unit;
        const { calc } = $mol_style_func;
        $mol_style_define($mol_page, {
            display: 'flex',
            flex: {
                basis: 'auto',
                direction: 'column',
            },
            position: 'relative',
            alignSelf: 'stretch',
            maxWidth: per(100),
            maxHeight: per(100),
            boxSizing: 'border-box',
            color: $mol_theme.text,
            ':focus': {
                outline: 'none',
            },
            Head: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'flex-end',
                flex: 'none',
                position: 'relative',
                margin: 0,
                minHeight: rem(4),
                padding: $mol_gap.block,
                background: {
                    color: $mol_theme.card,
                },
                border: {
                    radius: $mol_gap.round,
                },
                boxShadow: `0 0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25)`,
                zIndex: 2,
            },
            Title: {
                minHeight: rem(2),
                margin: 0,
                padding: $mol_gap.text,
                gap: $mol_gap.text,
                wordBreak: 'normal',
                textShadow: '0 0',
                font: {
                    size: 'inherit',
                    weight: 'normal',
                },
                flex: {
                    grow: 1,
                    shrink: 1,
                    basis: 'auto',
                },
            },
            Tools: {
                flex: {
                    basis: 'auto',
                    grow: 1000,
                    shrink: 1,
                },
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
            },
            Body: {
                flex: {
                    grow: 1000,
                    shrink: 1,
                    basis: per(100),
                },
                padding: $mol_gap.block,
            },
            Foot: {
                display: 'flex',
                justifyContent: 'space-between',
                flex: 'none',
                margin: 0,
                background: {
                    color: $mol_theme.card,
                },
                border: {
                    radius: $mol_gap.round,
                },
                boxShadow: `0 -0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25)`,
                zIndex: 1,
                padding: $mol_gap.block,
                ':empty': {
                    display: 'none',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/page/page.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_book2_catalog extends $mol_book2 {
        param() {
            return "";
        }
        spread(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        spreads() {
            return {};
        }
        Spread() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        pages() {
            return [
                this.Menu()
            ];
        }
        Spread_close() {
            const obj = new this.$.$mol_link();
            obj.arg = () => this.spread_close_arg();
            obj.sub = () => [
                this.Spread_close_icon()
            ];
            return obj;
        }
        menu_title() {
            return "";
        }
        menu_tools() {
            return [];
        }
        menu_head() {
            return [
                this.Menu_title(),
                this.Menu_tools()
            ];
        }
        menu_filter(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Menu_filter() {
            const obj = new this.$.$mol_search();
            obj.query = (next) => this.menu_filter(next);
            return obj;
        }
        arg(id) {
            return {};
        }
        spread_title(id) {
            return "";
        }
        Menu_link_title(id) {
            const obj = new this.$.$mol_dimmer();
            obj.needle = () => this.menu_filter();
            obj.haystack = () => this.spread_title(id);
            return obj;
        }
        menu_link_content(id) {
            return [
                this.Menu_link_title(id)
            ];
        }
        Menu_link(id) {
            const obj = new this.$.$mol_link();
            obj.arg = () => this.arg(id);
            obj.sub = () => this.menu_link_content(id);
            return obj;
        }
        menu_links() {
            return [
                this.Menu_link("0")
            ];
        }
        Menu_links() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.menu_links();
            return obj;
        }
        menu_body() {
            return [
                this.Menu_filter(),
                this.Menu_links()
            ];
        }
        menu_foot() {
            return [];
        }
        Menu_title() {
            return this.Menu().Title();
        }
        Menu_tools() {
            return this.Menu().Tools();
        }
        Menu() {
            const obj = new this.$.$mol_page();
            obj.title = () => this.menu_title();
            obj.tools = () => this.menu_tools();
            obj.head = () => this.menu_head();
            obj.body = () => this.menu_body();
            obj.foot = () => this.menu_foot();
            return obj;
        }
        spread_close_arg() {
            return {};
        }
        Spread_close_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_book2_catalog.prototype, "spread", null);
    __decorate([
        $mol_mem
    ], $mol_book2_catalog.prototype, "Spread", null);
    __decorate([
        $mol_mem
    ], $mol_book2_catalog.prototype, "Spread_close", null);
    __decorate([
        $mol_mem
    ], $mol_book2_catalog.prototype, "menu_filter", null);
    __decorate([
        $mol_mem
    ], $mol_book2_catalog.prototype, "Menu_filter", null);
    __decorate([
        $mol_mem_key
    ], $mol_book2_catalog.prototype, "Menu_link_title", null);
    __decorate([
        $mol_mem_key
    ], $mol_book2_catalog.prototype, "Menu_link", null);
    __decorate([
        $mol_mem
    ], $mol_book2_catalog.prototype, "Menu_links", null);
    __decorate([
        $mol_mem
    ], $mol_book2_catalog.prototype, "Menu", null);
    __decorate([
        $mol_mem
    ], $mol_book2_catalog.prototype, "Spread_close_icon", null);
    $.$mol_book2_catalog = $mol_book2_catalog;
})($ || ($ = {}));
//mol/book2/catalog/-view.tree/catalog.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_match_text(query, values) {
        const tags = query.toLowerCase().trim().split(/\s+/).filter(tag => tag);
        if (tags.length === 0)
            return () => true;
        return (variant) => {
            const vals = values(variant);
            return tags.every(tag => vals.some(val => val.toLowerCase().indexOf(tag) >= 0));
        };
    }
    $.$mol_match_text = $mol_match_text;
})($ || ($ = {}));
//mol/match/text.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/book2/catalog/catalog.view.css", "[mol_book2_catalog_menu_filter] {\n\tflex-shrink: 0;\n\tflex-grow: 0;\n\talign-self: stretch;\n}\n\n");
})($ || ($ = {}));
//mol/book2/catalog/-css/catalog.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_book2_catalog extends $.$mol_book2_catalog {
            pages() {
                const spread = this.Spread();
                return [
                    this.Menu(),
                    ...spread
                        ? spread instanceof $mol_book2
                            ? spread.pages()
                            : [spread]
                        : [],
                ];
            }
            menu_body() {
                return [
                    ...Object.keys(this.spreads()).length >= 10 ? [this.Menu_filter()] : [],
                    this.Menu_links(),
                ];
            }
            menu_links() {
                return Object.keys(this.spreads())
                    .filter($mol_match_text(this.menu_filter(), spread => [this.spread_title(spread)]))
                    .map(spread => this.Menu_link(spread));
            }
            Spread() {
                return this.spreads()[this.spread()];
            }
            spread(next) {
                return this.$.$mol_state_arg.value(this.param(), next) ?? '';
            }
            arg(spread) {
                return { [this.param()]: spread || null };
            }
            spread_close_arg() {
                return { [this.param()]: null };
            }
            spread_title(spread) {
                const page = this.spreads()[spread];
                return page instanceof $mol_book2
                    && page.menu_title()
                    || page.title();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_book2_catalog.prototype, "pages", null);
        __decorate([
            $mol_mem
        ], $mol_book2_catalog.prototype, "menu_body", null);
        __decorate([
            $mol_mem
        ], $mol_book2_catalog.prototype, "menu_links", null);
        __decorate([
            $mol_mem
        ], $mol_book2_catalog.prototype, "spread", null);
        $$.$mol_book2_catalog = $mol_book2_catalog;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/book2/catalog/catalog.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_theme_auto extends $mol_plugin {
        attr() {
            return {
                mol_theme: this.theme()
            };
        }
        theme() {
            return "";
        }
    }
    $.$mol_theme_auto = $mol_theme_auto;
})($ || ($ = {}));
//mol/theme/auto/-view.tree/auto.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function parse(theme) {
        if (theme === 'true')
            return true;
        if (theme === 'false')
            return false;
        return null;
    }
    function $mol_lights(next) {
        const arg = parse(this.$mol_state_arg.value('mol_lights'));
        const base = false;
        if (next === undefined) {
            return arg ?? this.$mol_state_local.value('$mol_lights') ?? base;
        }
        else {
            if (arg === null) {
                this.$mol_state_local.value('$mol_lights', next === base ? null : next);
            }
            else {
                this.$mol_state_arg.value('mol_lights', String(next));
            }
            return next;
        }
    }
    $.$mol_lights = $mol_lights;
})($ || ($ = {}));
//mol/lights/lights.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_theme_auto extends $.$mol_theme_auto {
            theme() {
                return this.$.$mol_lights() ? '$mol_theme_light' : '$mol_theme_dark';
            }
        }
        $$.$mol_theme_auto = $mol_theme_auto;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/theme/auto/auto.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_check extends $mol_button_minor {
        attr() {
            return {
                ...super.attr(),
                mol_check_checked: this.checked(),
                "aria-checked": this.aria_checked(),
                role: this.aria_role()
            };
        }
        sub() {
            return [
                this.Icon(),
                this.label()
            ];
        }
        checked(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        aria_checked() {
            return "false";
        }
        aria_role() {
            return "checkbox";
        }
        Icon() {
            return null;
        }
        title() {
            return "";
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        label() {
            return [
                this.Title()
            ];
        }
    }
    __decorate([
        $mol_mem
    ], $mol_check.prototype, "checked", null);
    __decorate([
        $mol_mem
    ], $mol_check.prototype, "Title", null);
    $.$mol_check = $mol_check;
})($ || ($ = {}));
//mol/check/-view.tree/check.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/check.css", "[mol_check] {\n\tflex: 0 0 auto;\n\tjustify-content: flex-start;\n\talign-content: center;\n\talign-items: flex-start;\n\tborder: none;\n\tfont-weight: inherit;\n\tbox-shadow: none;\n\ttext-align: left;\n\tdisplay: inline-flex;\n\tflex-wrap: nowrap;\n}\n\n[mol_check_title] {\n\tflex-shrink: 1;\n}\n\n[mol_check_checked] {\n\tcolor: var(--mol_theme_current);\n}\n");
})($ || ($ = {}));
//mol/check/-css/check.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check extends $.$mol_check {
            click(next) {
                if (next?.defaultPrevented)
                    return;
                this.checked(!this.checked());
                if (next)
                    next.preventDefault();
            }
            sub() {
                return [
                    ...$mol_maybe(this.Icon()),
                    ...this.label(),
                ];
            }
            label() {
                return this.title() ? super.label() : [];
            }
            aria_checked() {
                return String(this.checked());
            }
        }
        $$.$mol_check = $mol_check;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/check/check.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_check_icon extends $mol_check {
    }
    $.$mol_check_icon = $mol_check_icon;
})($ || ($ = {}));
//mol/check/icon/-view.tree/icon.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/icon/icon.view.css", "");
})($ || ($ = {}));
//mol/check/icon/-css/icon.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_brightness_6 extends $mol_icon {
        path() {
            return "M12,18V6C15.31,6 18,8.69 18,12C18,15.31 15.31,18 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z";
        }
    }
    $.$mol_icon_brightness_6 = $mol_icon_brightness_6;
})($ || ($ = {}));
//mol/icon/brightness/6/-view.tree/6.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_lights_toggle extends $mol_check_icon {
        Icon() {
            return this.Lights_icon();
        }
        hint() {
            return this.$.$mol_locale.text('$mol_lights_toggle_hint');
        }
        checked(val) {
            return this.lights(val);
        }
        Lights_icon() {
            const obj = new this.$.$mol_icon_brightness_6();
            return obj;
        }
        lights(val) {
            if (val !== undefined)
                return val;
            return false;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_lights_toggle.prototype, "Lights_icon", null);
    __decorate([
        $mol_mem
    ], $mol_lights_toggle.prototype, "lights", null);
    $.$mol_lights_toggle = $mol_lights_toggle;
})($ || ($ = {}));
//mol/lights/toggle/-view.tree/toggle.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_lights_toggle extends $.$mol_lights_toggle {
            lights(next) {
                return this.$.$mol_lights(next);
            }
        }
        $$.$mol_lights_toggle = $mol_lights_toggle;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/lights/toggle/toggle.view.ts
;
"use strict";
var $;
(function ($) {
    class $scale_centrifuge extends $mol_view {
        sub() {
            return [];
        }
        attr() {
            return {
                ...super.attr(),
                weight: this.weight_channel(),
                autoNumber_IN: this.autoNumber_channel_IN(),
                autoNumber_OUT: this.autoNumber_channel_OUT(),
                client_state: this.state()
            };
        }
        weight_channel() {
            return null;
        }
        autoNumber_channel_IN() {
            return null;
        }
        autoNumber_channel_OUT() {
            return null;
        }
        state() {
            return null;
        }
    }
    $.$scale_centrifuge = $scale_centrifuge;
})($ || ($ = {}));
//scale/centrifuge/-view.tree/centrifuge.view.tree.ts
;

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "centrifuge/dist/" ) ] }; 
;
"use strict";(()=>{var fe=Object.create;var J=Object.defineProperty;var de=Object.getOwnPropertyDescriptor;var pe=Object.getOwnPropertyNames,G=Object.getOwnPropertySymbols,_e=Object.getPrototypeOf,V=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable;var Q=(o,s,e)=>s in o?J(o,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[s]=e,q=(o,s)=>{for(var e in s||={})V.call(s,e)&&Q(o,e,s[e]);if(G)for(var e of G(s))be.call(s,e)&&Q(o,e,s[e]);return o};var me=(o,s)=>()=>(s||o((s={exports:{}}).exports,s),s.exports);var ge=(o,s,e,t)=>{if(s&&typeof s=="object"||typeof s=="function")for(let n of pe(s))!V.call(o,n)&&n!==e&&J(o,n,{get:()=>s[n],enumerable:!(t=de(s,n))||t.enumerable});return o};var X=(o,s,e)=>(e=o!=null?fe(_e(o)):{},ge(s||!o||!o.__esModule?J(e,"default",{value:o,enumerable:!0}):e,o));var C=(o,s,e)=>new Promise((t,n)=>{var i=c=>{try{a(e.next(c))}catch(u){n(u)}},r=c=>{try{a(e.throw(c))}catch(u){n(u)}},a=c=>c.done?t(c.value):Promise.resolve(c.value).then(i,r);a((e=e.apply(o,s)).next())});var H=me((Re,F)=>{"use strict";var y=typeof Reflect=="object"?Reflect:null,Y=y&&typeof y.apply=="function"?y.apply:function(s,e,t){return Function.prototype.apply.call(s,e,t)},R;y&&typeof y.ownKeys=="function"?R=y.ownKeys:Object.getOwnPropertySymbols?R=function(s){return Object.getOwnPropertyNames(s).concat(Object.getOwnPropertySymbols(s))}:R=function(s){return Object.getOwnPropertyNames(s)};function ve(o){console&&console.warn&&console.warn(o)}var $=Number.isNaN||function(s){return s!==s};function l(){l.init.call(this)}F.exports=l;F.exports.once=Te;l.EventEmitter=l;l.prototype._events=void 0;l.prototype._eventsCount=0;l.prototype._maxListeners=void 0;var Z=10;function k(o){if(typeof o!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof o)}Object.defineProperty(l,"defaultMaxListeners",{enumerable:!0,get:function(){return Z},set:function(o){if(typeof o!="number"||o<0||$(o))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+o+".");Z=o}});l.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};l.prototype.setMaxListeners=function(s){if(typeof s!="number"||s<0||$(s))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+s+".");return this._maxListeners=s,this};function ee(o){return o._maxListeners===void 0?l.defaultMaxListeners:o._maxListeners}l.prototype.getMaxListeners=function(){return ee(this)};l.prototype.emit=function(s){for(var e=[],t=1;t<arguments.length;t++)e.push(arguments[t]);var n=s==="error",i=this._events;if(i!==void 0)n=n&&i.error===void 0;else if(!n)return!1;if(n){var r;if(e.length>0&&(r=e[0]),r instanceof Error)throw r;var a=new Error("Unhandled error."+(r?" ("+r.message+")":""));throw a.context=r,a}var c=i[s];if(c===void 0)return!1;if(typeof c=="function")Y(c,this,e);else for(var u=c.length,b=re(c,u),t=0;t<u;++t)Y(b[t],this,e);return!0};function te(o,s,e,t){var n,i,r;if(k(e),i=o._events,i===void 0?(i=o._events=Object.create(null),o._eventsCount=0):(i.newListener!==void 0&&(o.emit("newListener",s,e.listener?e.listener:e),i=o._events),r=i[s]),r===void 0)r=i[s]=e,++o._eventsCount;else if(typeof r=="function"?r=i[s]=t?[e,r]:[r,e]:t?r.unshift(e):r.push(e),n=ee(o),n>0&&r.length>n&&!r.warned){r.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+r.length+" "+String(s)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=o,a.type=s,a.count=r.length,ve(a)}return o}l.prototype.addListener=function(s,e){return te(this,s,e,!1)};l.prototype.on=l.prototype.addListener;l.prototype.prependListener=function(s,e){return te(this,s,e,!0)};function ye(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function ne(o,s,e){var t={fired:!1,wrapFn:void 0,target:o,type:s,listener:e},n=ye.bind(t);return n.listener=e,t.wrapFn=n,n}l.prototype.once=function(s,e){return k(e),this.on(s,ne(this,s,e)),this};l.prototype.prependOnceListener=function(s,e){return k(e),this.prependListener(s,ne(this,s,e)),this};l.prototype.removeListener=function(s,e){var t,n,i,r,a;if(k(e),n=this._events,n===void 0)return this;if(t=n[s],t===void 0)return this;if(t===e||t.listener===e)--this._eventsCount===0?this._events=Object.create(null):(delete n[s],n.removeListener&&this.emit("removeListener",s,t.listener||e));else if(typeof t!="function"){for(i=-1,r=t.length-1;r>=0;r--)if(t[r]===e||t[r].listener===e){a=t[r].listener,i=r;break}if(i<0)return this;i===0?t.shift():Se(t,i),t.length===1&&(n[s]=t[0]),n.removeListener!==void 0&&this.emit("removeListener",s,a||e)}return this};l.prototype.off=l.prototype.removeListener;l.prototype.removeAllListeners=function(s){var e,t,n;if(t=this._events,t===void 0)return this;if(t.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):t[s]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete t[s]),this;if(arguments.length===0){var i=Object.keys(t),r;for(n=0;n<i.length;++n)r=i[n],r!=="removeListener"&&this.removeAllListeners(r);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(e=t[s],typeof e=="function")this.removeListener(s,e);else if(e!==void 0)for(n=e.length-1;n>=0;n--)this.removeListener(s,e[n]);return this};function se(o,s,e){var t=o._events;if(t===void 0)return[];var n=t[s];return n===void 0?[]:typeof n=="function"?e?[n.listener||n]:[n]:e?xe(n):re(n,n.length)}l.prototype.listeners=function(s){return se(this,s,!0)};l.prototype.rawListeners=function(s){return se(this,s,!1)};l.listenerCount=function(o,s){return typeof o.listenerCount=="function"?o.listenerCount(s):ie.call(o,s)};l.prototype.listenerCount=ie;function ie(o){var s=this._events;if(s!==void 0){var e=s[o];if(typeof e=="function")return 1;if(e!==void 0)return e.length}return 0}l.prototype.eventNames=function(){return this._eventsCount>0?R(this._events):[]};function re(o,s){for(var e=new Array(s),t=0;t<s;++t)e[t]=o[t];return e}function Se(o,s){for(;s+1<o.length;s++)o[s]=o[s+1];o.pop()}function xe(o){for(var s=new Array(o.length),e=0;e<s.length;++e)s[e]=o[e].listener||o[e];return s}function Te(o,s){return new Promise(function(e,t){function n(r){o.removeListener(s,i),t(r)}function i(){typeof o.removeListener=="function"&&o.removeListener("error",n),e([].slice.call(arguments))}oe(o,s,i,{once:!0}),s!=="error"&&Ce(o,n,{once:!0})})}function Ce(o,s,e){typeof o.on=="function"&&oe(o,"error",s,e)}function oe(o,s,e,t){if(typeof o.on=="function")t.once?o.once(s,e):o.on(s,e);else if(typeof o.addEventListener=="function")o.addEventListener(s,function n(i){t.once&&o.removeEventListener(s,n),e(i)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof o)}});var le=X(H());var d={timeout:1,transportClosed:2,clientDisconnected:3,clientClosed:4,clientConnectToken:5,clientRefreshToken:6,subscriptionUnsubscribed:7,subscriptionSubscribeToken:8,subscriptionRefreshToken:9,transportWriteError:10,connectionClosed:11},v={connectCalled:0,transportClosed:1,noPing:2,subscribeTimeout:3,unsubscribeError:4},O={disconnectCalled:0,unauthorized:1,badProtocol:2,messageSizeLimit:3},L={subscribeCalled:0,transportClosed:1},B={unsubscribeCalled:0,unauthorized:1,clientClosed:2};var j=(t=>(t.Disconnected="disconnected",t.Connecting="connecting",t.Connected="connected",t))(j||{}),D=(t=>(t.Unsubscribed="unsubscribed",t.Subscribing="subscribing",t.Subscribed="subscribed",t))(D||{});function ae(o,s){return o.lastIndexOf(s,0)===0}function K(o){return o==null?!1:typeof o=="function"}function ce(o,s){if(globalThis.console){let e=globalThis.console[o];K(e)&&e.apply(globalThis.console,s)}}function Ee(o,s){return Math.floor(Math.random()*(s-o+1)+o)}function S(o,s,e){o>31&&(o=31);let t=Ee(0,Math.min(e,s*Math.pow(2,o)));return Math.min(e,s+t)}function ue(o){return"error"in o&&o.error!==null}function x(o){return Math.min(o*1e3,2147483647)}var I=class extends le.default{constructor(e,t,n){super();this._resubscribeTimeout=null;this._refreshTimeout=null;this.channel=t,this.state="unsubscribed",this._centrifuge=e,this._token=null,this._getToken=null,this._data=null,this._recover=!1,this._offset=null,this._epoch=null,this._recoverable=!1,this._positioned=!1,this._joinLeave=!1,this._minResubscribeDelay=500,this._maxResubscribeDelay=2e4,this._resubscribeTimeout=null,this._resubscribeAttempts=0,this._promises={},this._promiseId=0,this._inflight=!1,this._refreshTimeout=null,this._setOptions(n),this._centrifuge._debugEnabled?(this.on("state",i=>{this._centrifuge._debug("subscription state",t,i.oldState,"->",i.newState)}),this.on("error",i=>{this._centrifuge._debug("subscription error",t,i)})):this.on("error",function(){Function.prototype()})}ready(e){return this.state==="unsubscribed"?Promise.reject({code:d.subscriptionUnsubscribed,message:this.state}):this.state==="subscribed"?Promise.resolve():new Promise((t,n)=>{let i={resolve:t,reject:n};e&&(i.timeout=setTimeout(function(){n({code:d.timeout,message:"timeout"})},e)),this._promises[this._nextPromiseId()]=i})}subscribe(){this._isSubscribed()||(this._resubscribeAttempts=0,this._setSubscribing(L.subscribeCalled,"subscribe called"))}unsubscribe(){this._setUnsubscribed(B.unsubscribeCalled,"unsubscribe called",!0)}publish(e){let t=this;return this._methodCall().then(function(){return t._centrifuge.publish(t.channel,e)})}presence(){let e=this;return this._methodCall().then(function(){return e._centrifuge.presence(e.channel)})}presenceStats(){let e=this;return this._methodCall().then(function(){return e._centrifuge.presenceStats(e.channel)})}history(e){let t=this;return this._methodCall().then(function(){return t._centrifuge.history(t.channel,e)})}_methodCall(){return this._isSubscribed()?Promise.resolve():this._isUnsubscribed()?Promise.reject({code:d.subscriptionUnsubscribed,message:this.state}):new Promise((e,t)=>{let n=setTimeout(function(){t({code:d.timeout,message:"timeout"})},this._centrifuge._config.timeout);this._promises[this._nextPromiseId()]={timeout:n,resolve:e,reject:t}})}_nextPromiseId(){return++this._promiseId}_needRecover(){return this._recover===!0}_isUnsubscribed(){return this.state==="unsubscribed"}_isSubscribing(){return this.state==="subscribing"}_isSubscribed(){return this.state==="subscribed"}_setState(e){if(this.state!==e){let t=this.state;return this.state=e,this.emit("state",{newState:e,oldState:t,channel:this.channel}),!0}return!1}_usesToken(){return this._token!==null||this._getToken!==null}_clearSubscribingState(){this._resubscribeAttempts=0,this._clearResubscribeTimeout()}_clearSubscribedState(){this._clearRefreshTimeout()}_setSubscribed(e){if(!this._isSubscribing())return;this._clearSubscribingState(),e.recoverable&&(this._recover=!0,this._offset=e.offset||0,this._epoch=e.epoch||""),this._setState("subscribed");let t=this._centrifuge._getSubscribeContext(this.channel,e);this.emit("subscribed",t),this._resolvePromises();let n=e.publications;if(n&&n.length>0)for(let i in n)!n.hasOwnProperty(i)||this._handlePublication(n[i]);e.expires===!0&&(this._refreshTimeout=setTimeout(()=>this._refresh(),x(e.ttl)))}_setSubscribing(e,t){this._isSubscribing()||(this._isSubscribed()&&this._clearSubscribedState(),this._setState("subscribing")&&this.emit("subscribing",{channel:this.channel,code:e,reason:t}),this._subscribe(!1,!1))}_subscribe(e,t){if(this._centrifuge._debug("subscribing on",this.channel),this._centrifuge.state!=="connected"&&!e)return this._centrifuge._debug("delay subscribe on",this.channel,"till connected"),null;if(this._usesToken()){if(this._token)return this._sendSubscribe(this._token,t);{if(e)return null;let n=this;return this._getSubscriptionToken().then(function(i){if(!!n._isSubscribing()){if(!i){n._failUnauthorized();return}n._token=i,n._sendSubscribe(i,!1)}}).catch(function(i){!n._isSubscribing()||(n.emit("error",{type:"subscribeToken",channel:n.channel,error:{code:d.subscriptionSubscribeToken,message:i!==void 0?i.toString():""}}),n._scheduleResubscribe())}),null}}else return this._sendSubscribe("",t)}_sendSubscribe(e,t){let i={channel:this.channel};if(e&&(i.token=e),this._data&&(i.data=this._data),this._positioned&&(i.positioned=!0),this._recoverable&&(i.recoverable=!0),this._joinLeave&&(i.join_leave=!0),this._needRecover()){i.recover=!0;let a=this._getOffset();a&&(i.offset=a);let c=this._getEpoch();c&&(i.epoch=c)}let r={subscribe:i};return this._inflight=!0,this._centrifuge._call(r,t).then(a=>{this._inflight=!1;let c=a.reply.subscribe;this._handleSubscribeResponse(c),a.next&&a.next()},a=>{this._inflight=!1,this._handleSubscribeError(a.error),a.next&&a.next()}),r}_handleSubscribeError(e){if(!!this._isSubscribing()){if(e.code===d.timeout){this._centrifuge._disconnect(v.subscribeTimeout,"subscribe timeout",!0);return}this._subscribeError(e)}}_handleSubscribeResponse(e){!this._isSubscribing()||this._setSubscribed(e)}_setUnsubscribed(e,t,n){this._isUnsubscribed()||(this._isSubscribed()&&(n&&this._centrifuge._unsubscribe(this),this._clearSubscribedState()),this._isSubscribing()&&this._clearSubscribingState(),this._setState("unsubscribed")&&this.emit("unsubscribed",{channel:this.channel,code:e,reason:t}),this._rejectPromises({code:d.subscriptionUnsubscribed,message:this.state}))}_handlePublication(e){let t=this._centrifuge._getPublicationContext(this.channel,e);this.emit("publication",t),e.offset&&(this._offset=e.offset)}_handleJoin(e){let t=this._centrifuge._getJoinLeaveContext(e.info);this.emit("join",{channel:this.channel,info:t})}_handleLeave(e){let t=this._centrifuge._getJoinLeaveContext(e.info);this.emit("leave",{channel:this.channel,info:t})}_resolvePromises(){for(let e in this._promises)this._promises[e].timeout&&clearTimeout(this._promises[e].timeout),this._promises[e].resolve(),delete this._promises[e]}_rejectPromises(e){for(let t in this._promises)this._promises[t].timeout&&clearTimeout(this._promises[t].timeout),this._promises[t].reject(e),delete this._promises[t]}_scheduleResubscribe(){let e=this,t=this._getResubscribeDelay();this._resubscribeTimeout=setTimeout(function(){e._isSubscribing()&&e._subscribe(!1,!1)},t)}_subscribeError(e){if(!!this._isSubscribing())if(e.code<100||e.code===109||e.temporary===!0){e.code===109&&(this._token=null);let t={channel:this.channel,type:"subscribe",error:e};this._centrifuge.state==="connected"&&this.emit("error",t),this._scheduleResubscribe()}else this._setUnsubscribed(e.code,e.message,!1)}_getResubscribeDelay(){let e=S(this._resubscribeAttempts,this._minResubscribeDelay,this._maxResubscribeDelay);return this._resubscribeAttempts++,e}_setOptions(e){!e||(e.since&&(this._offset=e.since.offset,this._epoch=e.since.epoch,this._recover=!0),e.data&&(this._data=e.data),e.minResubscribeDelay!==void 0&&(this._minResubscribeDelay=e.minResubscribeDelay),e.maxResubscribeDelay!==void 0&&(this._maxResubscribeDelay=e.maxResubscribeDelay),e.token&&(this._token=e.token),e.getToken&&(this._getToken=e.getToken),e.positioned===!0&&(this._positioned=!0),e.recoverable===!0&&(this._recoverable=!0),e.joinLeave===!0&&(this._joinLeave=!0))}_getOffset(){let e=this._offset;return e!==null?e:0}_getEpoch(){let e=this._epoch;return e!==null?e:""}_clearRefreshTimeout(){this._refreshTimeout!==null&&(clearTimeout(this._refreshTimeout),this._refreshTimeout=null)}_clearResubscribeTimeout(){this._resubscribeTimeout!==null&&(clearTimeout(this._resubscribeTimeout),this._resubscribeTimeout=null)}_getSubscriptionToken(){this._centrifuge._debug("get subscription token for channel",this.channel);let e={channel:this.channel},t=this._getToken;if(t===null)throw new Error("provide a function to get channel subscription token");return t(e)}_refresh(){this._clearRefreshTimeout();let e=this;this._getSubscriptionToken().then(function(t){if(!e._isSubscribed())return;if(!t){e._failUnauthorized();return}e._token=t;let i={sub_refresh:{channel:e.channel,token:t}};e._centrifuge._call(i).then(r=>{let a=r.reply.sub_refresh;e._refreshResponse(a),r.next&&r.next()},r=>{e._refreshError(r.error),r.next&&r.next()})}).catch(function(t){e.emit("error",{type:"refreshToken",channel:e.channel,error:{code:d.subscriptionRefreshToken,message:t!==void 0?t.toString():""}}),e._refreshTimeout=setTimeout(()=>e._refresh(),e._getRefreshRetryDelay())})}_refreshResponse(e){!this._isSubscribed()||(this._centrifuge._debug("subscription token refreshed, channel",this.channel),this._clearRefreshTimeout(),e.expires===!0&&(this._refreshTimeout=setTimeout(()=>this._refresh(),x(e.ttl))))}_refreshError(e){!this._isSubscribed()||(e.code<100||e.temporary===!0?(this.emit("error",{type:"refresh",channel:this.channel,error:e}),this._refreshTimeout=setTimeout(()=>this._refresh(),this._getRefreshRetryDelay())):this._setUnsubscribed(e.code,e.message,!0))}_getRefreshRetryDelay(){return S(0,1e4,2e4)}_failUnauthorized(){this._setUnsubscribed(B.unauthorized,"unauthorized",!0)}};var U=class{constructor(s,e){this.endpoint=s,this.options=e,this._transport=null}name(){return"sockjs"}subName(){return"sockjs-"+this._transport.transport}emulation(){return!1}supported(){return this.options.sockjs!==null}initialize(s,e){this._transport=new this.options.sockjs(this.endpoint,null,this.options.sockjsOptions),this._transport.onopen=()=>{e.onOpen()},this._transport.onerror=t=>{e.onError(t)},this._transport.onclose=t=>{e.onClose(t)},this._transport.onmessage=t=>{e.onMessage(t.data)}}close(){this._transport.close()}send(s){this._transport.send(s)}};var E=class{constructor(s,e){this.endpoint=s,this.options=e,this._transport=null}name(){return"websocket"}subName(){return"websocket"}emulation(){return!1}supported(){return this.options.websocket!==void 0&&this.options.websocket!==null}initialize(s,e){let t="";s==="protobuf"&&(t="centrifuge-protobuf"),t!==""?this._transport=new this.options.websocket(this.endpoint,t):this._transport=new this.options.websocket(this.endpoint),s==="protobuf"&&(this._transport.binaryType="arraybuffer"),this._transport.onopen=()=>{e.onOpen()},this._transport.onerror=n=>{e.onError(n)},this._transport.onclose=n=>{e.onClose(n)},this._transport.onmessage=n=>{e.onMessage(n.data)}}close(){this._transport.close()}send(s){this._transport.send(s)}};var A=class{constructor(s,e){this.endpoint=s,this.options=e,this._abortController=null,this._utf8decoder=new TextDecoder,this._protocol="json"}name(){return"http_stream"}subName(){return"http_stream"}emulation(){return!0}_handleErrors(s){if(!s.ok)throw new Error(s.status);return s}_fetchEventTarget(s,e,t){let n=new EventTarget,i=s.options.fetch;return i(e,t).then(s._handleErrors).then(r=>{n.dispatchEvent(new Event("open"));let a="",c=0,u=new Uint8Array,b=r.body.getReader();return new s.options.readableStream({start(m){function w(){return b.read().then(({done:h,value:_})=>{if(h){n.dispatchEvent(new Event("close")),m.close();return}try{if(s._protocol==="json")for(a+=s._utf8decoder.decode(_);c<a.length;)if(a[c]===`
`){let f=a.substring(0,c);n.dispatchEvent(new MessageEvent("message",{data:f})),a=a.substring(c+1),c=0}else++c;else{let f=new Uint8Array(u.length+_.length);for(f.set(u),f.set(_,u.length),u=f;;){let p=s.options.decoder.decodeReply(u);if(p.ok){let P=u.slice(0,p.pos);n.dispatchEvent(new MessageEvent("message",{data:P})),u=u.slice(p.pos);continue}break}}}catch(f){n.dispatchEvent(new Event("error",{detail:f})),n.dispatchEvent(new Event("close")),m.close();return}w()}).catch(function(h){n.dispatchEvent(new Event("error",{detail:h})),n.dispatchEvent(new Event("close")),m.close()})}return w()}})}).catch(r=>{n.dispatchEvent(new Event("error",{detail:r})),n.dispatchEvent(new Event("close"))}),n}supported(){return this.options.fetch!==null&&this.options.readableStream!==null&&typeof TextDecoder!="undefined"&&typeof AbortController!="undefined"&&typeof EventTarget!="undefined"&&typeof Event!="undefined"&&typeof MessageEvent!="undefined"&&typeof Error!="undefined"}initialize(s,e,t){this._protocol=s,this._abortController=new AbortController;let n,i;s==="json"?(n={Accept:"application/json","Content-Type":"application/json"},i=t):(n={Accept:"application/octet-stream","Content-Type":"application/octet-stream"},i=t);let r={method:"POST",headers:n,body:i,mode:"cors",credentials:"same-origin",cache:"no-cache",signal:this._abortController.signal},a=this._fetchEventTarget(this,this.endpoint,r);a.addEventListener("open",()=>{e.onOpen()}),a.addEventListener("error",c=>{this._abortController.abort(),e.onError(c)}),a.addEventListener("close",()=>{this._abortController.abort(),e.onClose({code:4,reason:"connection closed"})}),a.addEventListener("message",c=>{e.onMessage(c.data)})}close(){this._abortController.abort()}send(s,e,t){let n,i,r={session:e,node:t,data:s};this._protocol==="json"?(n={"Content-Type":"application/json"},i=JSON.stringify(r)):(n={"Content-Type":"application/octet-stream"},i=this.options.encoder.encodeEmulationRequest(r));let a=this.options.fetch,c={method:"POST",headers:n,body:i,mode:"cors",credentials:"same-origin",cache:"no-cache"};a(this.options.emulationEndpoint,c)}};var M=class{constructor(s,e){this.endpoint=s,this.options=e,this._protocol="json",this._transport=null,this._onClose=null}name(){return"sse"}subName(){return"sse"}emulation(){return!0}supported(){return this.options.eventsource!==null&&this.options.fetch!==null}initialize(s,e,t){let n;globalThis&&globalThis.document&&globalThis.document.baseURI?n=new URL(this.endpoint,globalThis.document.baseURI):n=new URL(this.endpoint),n.searchParams.append("cf_connect",t);let i={},r=new this.options.eventsource(n.toString(),i);this._transport=r;let a=this;r.onopen=function(){e.onOpen()},r.onerror=function(c){r.close(),e.onError(c),e.onClose({code:4,reason:"connection closed"})},r.onmessage=function(c){e.onMessage(c.data)},a._onClose=function(){e.onClose({code:4,reason:"connection closed"})}}close(){this._transport.close(),this._onClose!==null&&this._onClose()}send(s,e,t){let n={session:e,node:t,data:s},i={"Content-Type":"application/json"},r=JSON.stringify(n),a=this.options.fetch,c={method:"POST",headers:i,body:r,mode:"cors",credentials:"same-origin",cache:"no-cache"};a(this.options.emulationEndpoint,c)}};var N=class{constructor(s,e){this.endpoint=s,this.options=e,this._transport=null,this._stream=null,this._writer=null,this._utf8decoder=new TextDecoder,this._protocol="json"}name(){return"webtransport"}subName(){return"webtransport"}emulation(){return!1}supported(){return this.options.webtransport!==void 0&&this.options.webtransport!==null}initialize(s,e){return C(this,null,function*(){let t;globalThis&&globalThis.document&&globalThis.document.baseURI?t=new URL(this.endpoint,globalThis.document.baseURI):t=new URL(this.endpoint),s==="protobuf"&&t.searchParams.append("cf_protocol","protobuf"),this._protocol=s;let n=new EventTarget;this._transport=new this.options.webtransport(t.toString()),this._transport.closed.then(()=>{e.onClose({code:4,reason:"connection closed"})}).catch(()=>{e.onClose({code:4,reason:"connection closed"})});try{yield this._transport.ready}catch(r){this.close();return}let i;try{i=yield this._transport.createBidirectionalStream()}catch(r){this.close();return}this._stream=i,this._writer=this._stream.writable.getWriter(),n.addEventListener("close",()=>{e.onClose({code:4,reason:"connection closed"})}),n.addEventListener("message",r=>{e.onMessage(r.data)}),this._startReading(n),e.onOpen()})}_startReading(s){return C(this,null,function*(){let e=this._stream.readable.getReader(),t="",n=0,i=new Uint8Array;try{for(;;){let{done:r,value:a}=yield e.read();if(a.length>0)if(this._protocol==="json")for(t+=this._utf8decoder.decode(a);n<t.length;)if(t[n]===`
`){let c=t.substring(0,n);s.dispatchEvent(new MessageEvent("message",{data:c})),t=t.substring(n+1),n=0}else++n;else{let c=new Uint8Array(i.length+a.length);for(c.set(i),c.set(a,i.length),i=c;;){let u=this.options.decoder.decodeReply(i);if(u.ok){let b=i.slice(0,u.pos);s.dispatchEvent(new MessageEvent("message",{data:b})),i=i.slice(u.pos);continue}break}}if(r)break}}catch(r){s.dispatchEvent(new Event("close"))}})}close(){return C(this,null,function*(){try{this._writer&&(yield this._writer.close()),this._transport.close()}catch(s){}})}send(s){return C(this,null,function*(){let e;this._protocol==="json"?e=new TextEncoder().encode(s+`
`):e=s;try{yield this._writer.write(e)}catch(t){this.close()}})}};var z=class{encodeCommands(s){return s.map(e=>JSON.stringify(e)).join(`
`)}},W=class{decodeReplies(s){return s.trim().split(`
`).map(e=>JSON.parse(e))}};var he=X(H());var we={protocol:"json",token:null,getToken:null,data:null,debug:!1,name:"js",version:"",fetch:null,readableStream:null,websocket:null,eventsource:null,sockjs:null,sockjsOptions:{},emulationEndpoint:"/emulation",minReconnectDelay:500,maxReconnectDelay:2e4,timeout:5e3,maxServerPingDelay:1e4,networkEventTarget:null},T=class extends he.default{constructor(e,t){super();this._reconnectTimeout=null;this._refreshTimeout=null;this._serverPingTimeout=null;this.state="disconnected",this._endpoint=e,this._emulation=!1,this._transports=[],this._currentTransportIndex=0,this._triedAllTransports=!1,this._transportWasOpen=!1,this._transport=null,this._transportClosed=!0,this._encoder=null,this._decoder=null,this._reconnecting=!1,this._reconnectTimeout=null,this._reconnectAttempts=0,this._client=null,this._session="",this._node="",this._subs={},this._serverSubs={},this._commandId=0,this._commands=[],this._batching=!1,this._refreshRequired=!1,this._refreshTimeout=null,this._callbacks={},this._token=void 0,this._dispatchPromise=Promise.resolve(),this._serverPing=0,this._serverPingTimeout=null,this._sendPong=!1,this._promises={},this._promiseId=0,this._debugEnabled=!1,this._config=q(q({},we),t),this._configure(),this._debugEnabled?(this.on("state",n=>{this._debug("client state",n.oldState,"->",n.newState)}),this.on("error",n=>{this._debug("client error",n)})):this.on("error",function(){Function.prototype()})}newSubscription(e,t){if(this.getSubscription(e)!==null)throw new Error("Subscription to the channel "+e+" already exists");let n=new I(this,e,t);return this._subs[e]=n,n}getSubscription(e){return this._getSub(e)}removeSubscription(e){!e||(e.state!=="unsubscribed"&&e.unsubscribe(),this._removeSubscription(e))}subscriptions(){return this._subs}ready(e){return this.state==="disconnected"?Promise.reject({code:d.clientDisconnected,message:"client disconnected"}):this.state==="connected"?Promise.resolve():new Promise((t,n)=>{let i={resolve:t,reject:n};e&&(i.timeout=setTimeout(function(){n({code:d.timeout,message:"timeout"})},e)),this._promises[this._nextPromiseId()]=i})}connect(){if(this._isConnected()){this._debug("connect called when already connected");return}if(this._isConnecting()){this._debug("connect called when already connecting");return}this._reconnectAttempts=0,this._startConnecting()}disconnect(){this._disconnect(O.disconnectCalled,"disconnect called",!1)}send(e){let t={send:{data:e}},n=this;return this._methodCall().then(function(){return n._transportSendCommands([t])?Promise.resolve():Promise.reject(n._createErrorObject(d.transportWriteError,"transport write error"))})}rpc(e,t){let n={rpc:{method:e,data:t}},i=this;return this._methodCall().then(function(){return i._callPromise(n,function(r){return{data:r.rpc.data}})})}publish(e,t){let n={publish:{channel:e,data:t}},i=this;return this._methodCall().then(function(){return i._callPromise(n,function(){return{}})})}history(e,t){let n={history:this._getHistoryRequest(e,t)},i=this;return this._methodCall().then(function(){return i._callPromise(n,function(r){let a=r.history,c=[];if(a.publications)for(let u=0;u<a.publications.length;u++)c.push(i._getPublicationContext(e,a.publications[u]));return{publications:c,epoch:a.epoch||"",offset:a.offset||0}})})}presence(e){let t={presence:{channel:e}},n=this;return this._methodCall().then(function(){return n._callPromise(t,function(i){let r=i.presence.presence;for(let a in r)if(r.hasOwnProperty(a)){let c=r[a].conn_info,u=r[a].chan_info;c&&(r[a].connInfo=c),u&&(r[a].chanInfo=u)}return{clients:r}})})}presenceStats(e){let t={presence_stats:{channel:e}},n=this;return this._methodCall().then(function(){return n._callPromise(t,function(i){let r=i.presence_stats;return{numUsers:r.num_users,numClients:r.num_clients}})})}startBatching(){this._batching=!0}stopBatching(){let e=this;Promise.resolve().then(function(){Promise.resolve().then(function(){e._batching=!1,e._flush()})})}_debug(...e){!this._debugEnabled||ce("debug",e)}_setFormat(e){if(!this._formatOverride(e)){if(e==="protobuf")throw new Error("not implemented by JSON-only Centrifuge client, use client with Protobuf support");this._encoder=new z,this._decoder=new W}}_formatOverride(e){return!1}_configure(){if(!("Promise"in globalThis))throw new Error("Promise polyfill required");if(!this._endpoint)throw new Error("endpoint configuration required");if(this._config.protocol!=="json"&&this._config.protocol!=="protobuf")throw new Error("unsupported protocol "+this._config.protocol);if(this._config.token!==null&&(this._token=this._config.token),this._setFormat("json"),this._config.protocol==="protobuf"&&this._setFormat("protobuf"),(this._config.debug===!0||typeof localStorage!="undefined"&&localStorage.getItem("centrifuge.debug"))&&(this._debugEnabled=!0),this._debug("config",this._config),typeof this._endpoint!="string")if(typeof this._endpoint=="object"&&this._endpoint instanceof Array){this._transports=this._endpoint,this._emulation=!0;for(let e in this._transports){let t=this._transports[e];if(!t.endpoint||!t.transport)throw new Error("malformed transport configuration");let n=t.transport;if(["websocket","http_stream","sse","sockjs","webtransport"].indexOf(n)<0)throw new Error("unsupported transport name: "+n)}}else throw new Error("unsupported url configuration type: only string or array of objects are supported")}_setState(e){if(this.state!==e){this._reconnecting=!1;let t=this.state;return this.state=e,this.emit("state",{newState:e,oldState:t}),!0}return!1}_isDisconnected(){return this.state==="disconnected"}_isConnecting(){return this.state==="connecting"}_isConnected(){return this.state==="connected"}_nextCommandId(){return++this._commandId}_setNetworkEvents(){let e=null;this._config.networkEventTarget!==null?e=this._config.networkEventTarget:typeof globalThis.addEventListener!="undefined"&&(e=globalThis),e&&(e.addEventListener("offline",()=>{this._debug("offline event triggered"),this.state==="connected"&&this._transport&&!this._transportClosed&&(this._transportClosed=!0,this._transport.close())}),e.addEventListener("online",()=>{this._debug("online event triggered"),this.state==="connecting"&&(this._clearReconnectTimeout(),this._startReconnecting())}))}_getReconnectDelay(){let e=S(this._reconnectAttempts,this._config.minReconnectDelay,this._config.maxReconnectDelay);return this._reconnectAttempts+=1,e}_clearOutgoingRequests(){for(let e in this._callbacks)if(this._callbacks.hasOwnProperty(e)){let t=this._callbacks[e];clearTimeout(t.timeout);let n=t.errback;if(!n)continue;n({error:this._createErrorObject(d.connectionClosed,"connection closed")})}this._callbacks={}}_clearConnectedState(){this._client=null,this._clearServerPingTimeout(),this._clearRefreshTimeout();for(let e in this._subs){if(!this._subs.hasOwnProperty(e))continue;let t=this._subs[e];t.state==="subscribed"&&t._setSubscribing(L.transportClosed,"transport closed")}for(let e in this._serverSubs)this._serverSubs.hasOwnProperty(e)&&this.emit("subscribing",{channel:e})}_handleWriteError(e){for(let t of e){let n=t.id;if(!(n in this._callbacks))continue;let i=this._callbacks[n];clearTimeout(this._callbacks[n].timeout),delete this._callbacks[n];let r=i.errback;r({error:this._createErrorObject(d.transportWriteError,"transport write error")})}}_transportSendCommands(e){if(!e.length)return!0;if(!this._transport)return!1;try{this._transport.send(this._encoder.encodeCommands(e),this._session,this._node)}catch(t){return this._debug("error writing commands",t),this._handleWriteError(e),!1}return!0}_initializeTransport(){let e;this._config.websocket!==null?e=this._config.websocket:typeof globalThis.WebSocket!="function"&&typeof globalThis.WebSocket!="object"||(e=globalThis.WebSocket);let t=null;this._config.sockjs!==null?t=this._config.sockjs:typeof globalThis.SockJS!="undefined"&&(t=globalThis.SockJS);let n=null;this._config.eventsource!==null?n=this._config.eventsource:typeof globalThis.EventSource!="undefined"&&(n=globalThis.EventSource);let i=null;this._config.fetch!==null?i=this._config.fetch:typeof globalThis.fetch!="undefined"&&(i=globalThis.fetch);let r=null;if(this._config.readableStream!==null?r=this._config.readableStream:typeof globalThis.ReadableStream!="undefined"&&(r=globalThis.ReadableStream),this._emulation){this._currentTransportIndex>=this._transports.length&&(this._triedAllTransports=!0,this._currentTransportIndex=0);let h=0;for(;;){if(h>=this._transports.length)throw new Error("no supported transport found");let _=this._transports[this._currentTransportIndex],f=_.transport,p=_.endpoint;if(f==="websocket"){if(this._debug("trying websocket transport"),this._transport=new E(p,{websocket:e}),!this._transport.supported()){this._debug("websocket transport not available"),this._currentTransportIndex++,h++;continue}}else if(f==="webtransport"){if(this._debug("trying webtransport transport"),this._transport=new N(p,{webtransport:globalThis.WebTransport,decoder:this._decoder,encoder:this._encoder}),!this._transport.supported()){this._debug("webtransport transport not available"),this._currentTransportIndex++,h++;continue}}else if(f==="http_stream"){if(this._debug("trying http_stream transport"),this._transport=new A(p,{fetch:i,readableStream:r,emulationEndpoint:this._config.emulationEndpoint,decoder:this._decoder,encoder:this._encoder}),!this._transport.supported()){this._debug("http_stream transport not available"),this._currentTransportIndex++,h++;continue}}else if(f==="sse"){if(this._debug("trying sse transport"),this._transport=new M(p,{eventsource:n,fetch:i,emulationEndpoint:this._config.emulationEndpoint}),!this._transport.supported()){this._debug("sse transport not available"),this._currentTransportIndex++,h++;continue}}else if(f==="sockjs"){if(this._debug("trying sockjs"),this._transport=new U(p,{sockjs:t,sockjsOptions:this._config.sockjsOptions}),!this._transport.supported()){this._debug("sockjs transport not available"),this._currentTransportIndex++,h++;continue}}else throw new Error("unknown transport "+f);break}}else{if(ae(this._endpoint,"http"))throw new Error("Provide explicit transport endpoints configuration in case of using HTTP (i.e. using array of TransportEndpoint instead of a single string), or use ws(s):// scheme in an endpoint if you aimed using WebSocket transport");if(this._debug("client will use websocket"),this._transport=new E(this._endpoint,{websocket:e}),!this._transport.supported())throw new Error("WebSocket not available")}let a=this,c,u=!1,b=!0;this._transport.name()==="sse"&&(b=!1);let m=[];if(this._transport.emulation()){let h=a._sendConnect(!0);if(m.push(h),b){let _=a._sendSubscribeCommands(!0,!0);for(let f in _)m.push(_[f])}}let w=this._encoder.encodeCommands(m);this._transport.initialize(this._config.protocol,{onOpen:function(){u=!0,c=a._transport.subName(),a._debug(c,"transport open"),a._transportWasOpen=!0,a._transportClosed=!1,!a._transport.emulation()&&(a.startBatching(),a._sendConnect(!1),b&&a._sendSubscribeCommands(!0,!1),a.stopBatching())},onError:function(h){a._debug("transport level error",h)},onClose:function(h){a._debug(a._transport.name(),"transport closed"),a._transportClosed=!0;let _="connection closed",f=!0,p=0;if(h&&"code"in h&&h.code&&(p=h.code),h&&h.reason)try{let g=JSON.parse(h.reason);_=g.reason,f=g.reconnect}catch(g){_=h.reason,(p>=3500&&p<4e3||p>=4500&&p<5e3)&&(f=!1)}p<3e3?(p===1009?(p=O.messageSizeLimit,_="message size limit exceeded",f=!1):(p=v.transportClosed,_="transport closed"),a._emulation&&!a._transportWasOpen&&(a._currentTransportIndex++,a._currentTransportIndex>=a._transports.length&&(a._triedAllTransports=!0,a._currentTransportIndex=0))):a._transportWasOpen=!0;let P=!1;if(a._emulation&&!a._transportWasOpen&&!a._triedAllTransports&&(P=!0),a._isConnecting()&&!u&&a.emit("error",{type:"transport",error:{code:d.transportClosed,message:"transport closed"},transport:a._transport.name()}),a._disconnect(p,_,f),a._isConnecting()){let g=a._getReconnectDelay();P&&(g=0),a._debug("reconnect after "+g+" milliseconds"),a._reconnecting=!1,a._reconnectTimeout=setTimeout(()=>{a._startReconnecting()},g)}},onMessage:function(h){a._dataReceived(h)}},w)}_sendConnect(e){let t=this._constructConnectCommand(),n=this;return this._call(t,e).then(i=>{let r=i.reply.connect;n._connectResponse(r),i.next&&i.next()},i=>{n._connectError(i.error),i.next&&i.next()}),t}_startReconnecting(){if(!this._isConnecting()||this._reconnecting)return;if(this._reconnecting=!0,!(this._refreshRequired||!this._token&&this._config.getToken!==null)){this._initializeTransport();return}let t=this;this._getToken().then(function(n){if(!!t._isConnecting()){if(!n){t._failUnauthorized();return}t._token=n,t._debug("connection token refreshed"),t._initializeTransport()}}).catch(function(n){if(!t._isConnecting())return;t.emit("error",{type:"connectToken",error:{code:d.clientConnectToken,message:n!==void 0?n.toString():""}});let i=t._getReconnectDelay();t._debug("error on connection token refresh, reconnect after "+i+" milliseconds",n),t._reconnecting=!1,t._reconnectTimeout=setTimeout(()=>{t._startReconnecting()},i)})}_connectError(e){this.state==="connecting"&&(e.code===109&&(this._refreshRequired=!0),e.code<100||e.temporary===!0||e.code===109?(this.emit("error",{type:"connect",error:e}),this._transport&&!this._transportClosed&&(this._transportClosed=!0,this._transport.close())):this._disconnect(e.code,e.message,!1))}_constructConnectCommand(){let e={};this._token&&(e.token=this._token),this._config.data&&(e.data=this._config.data),this._config.name&&(e.name=this._config.name),this._config.version&&(e.version=this._config.version);let t={},n=!1;for(let i in this._serverSubs)if(this._serverSubs.hasOwnProperty(i)&&this._serverSubs[i].recoverable){n=!0;let r={recover:!0};this._serverSubs[i].offset&&(r.offset=this._serverSubs[i].offset),this._serverSubs[i].epoch&&(r.epoch=this._serverSubs[i].epoch),t[i]=r}return n&&(e.subs=t),{connect:e}}_getHistoryRequest(e,t){let n={channel:e};return t!==void 0&&(t.since&&(n.since={offset:t.since.offset},t.since.epoch&&(n.since.epoch=t.since.epoch)),t.limit!==void 0&&(n.limit=t.limit),t.reverse===!0&&(n.reverse=!0)),n}_methodCall(){return this._isConnected()?Promise.resolve():new Promise((e,t)=>{let n=setTimeout(function(){t({code:d.timeout,message:"timeout"})},this._config.timeout);this._promises[this._nextPromiseId()]={timeout:n,resolve:e,reject:t}})}_callPromise(e,t){return new Promise((n,i)=>{this._call(e,!1).then(r=>{n(t(r.reply)),r.next&&r.next()},r=>{i(r.error),r.next&&r.next()})})}_dataReceived(e){this._serverPing>0&&this._waitServerPing();let t=this._decoder.decodeReplies(e);this._dispatchPromise=this._dispatchPromise.then(()=>{let n;this._dispatchPromise=new Promise(i=>{n=i}),this._dispatchSynchronized(t,n)})}_dispatchSynchronized(e,t){let n=Promise.resolve();for(let i in e)e.hasOwnProperty(i)&&(n=n.then(()=>this._dispatchReply(e[i])));n=n.then(()=>{t()})}_dispatchReply(e){let t,n=new Promise(r=>{t=r});if(e==null)return this._debug("dispatch: got undefined or null reply"),t(),n;let i=e.id;return i&&i>0?this._handleReply(e,t):e.push?this._handlePush(e.push,t):this._handleServerPing(t),n}_call(e,t){return new Promise((n,i)=>{e.id=this._nextCommandId(),this._registerCall(e.id,n,i),t||this._addCommand(e)})}_startConnecting(){this._debug("start connecting"),this._setState("connecting")&&this.emit("connecting",{code:v.connectCalled,reason:"connect called"}),this._client=null,this._startReconnecting()}_disconnect(e,t,n){if(this._isDisconnected())return;let i=this.state,r={code:e,reason:t},a=!1;n?a=this._setState("connecting"):(a=this._setState("disconnected"),this._rejectPromises({code:d.clientDisconnected,message:"disconnected"})),this._clearOutgoingRequests(),i==="connecting"&&this._clearReconnectTimeout(),i==="connected"&&this._clearConnectedState(),a&&(this._isConnecting()?this.emit("connecting",r):this.emit("disconnected",r)),this._transport&&!this._transportClosed&&(this._transportClosed=!0,this._transport.close())}_failUnauthorized(){this._disconnect(O.unauthorized,"unauthorized",!1)}_getToken(){if(this._debug("get connection token"),!this._config.getToken)throw new Error("provide a function to get connection token");return this._config.getToken({})}_refresh(){let e=this._client,t=this;this._getToken().then(function(n){if(e!==t._client)return;if(!n){t._failUnauthorized();return}if(t._token=n,t._debug("connection token refreshed"),!t._isConnected())return;let i={refresh:{token:t._token}};t._call(i,!1).then(r=>{let a=r.reply.refresh;t._refreshResponse(a),r.next&&r.next()},r=>{t._refreshError(r.error),r.next&&r.next()})}).catch(function(n){t.emit("error",{type:"refreshToken",error:{code:d.clientRefreshToken,message:n!==void 0?n.toString():""}}),t._refreshTimeout=setTimeout(()=>t._refresh(),t._getRefreshRetryDelay())})}_refreshError(e){e.code<100||e.temporary===!0?(this.emit("error",{type:"refresh",error:e}),this._refreshTimeout=setTimeout(()=>this._refresh(),this._getRefreshRetryDelay())):this._disconnect(e.code,e.message,!1)}_getRefreshRetryDelay(){return S(0,5e3,1e4)}_refreshResponse(e){this._refreshTimeout&&(clearTimeout(this._refreshTimeout),this._refreshTimeout=null),e.expires&&(this._client=e.client,this._refreshTimeout=setTimeout(()=>this._refresh(),x(e.ttl)))}_removeSubscription(e){e!==null&&delete this._subs[e.channel]}_unsubscribe(e){if(!this._isConnected())return;let n={unsubscribe:{channel:e.channel}},i=this;this._call(n,!1).then(r=>{r.next&&r.next()},r=>{r.next&&r.next(),i._disconnect(v.unsubscribeError,"unsubscribe error",!0)})}_getSub(e){let t=this._subs[e];return t||null}_isServerSub(e){return this._serverSubs[e]!==void 0}_sendSubscribeCommands(e,t){let n=[];for(let i in this._subs){if(!this._subs.hasOwnProperty(i))continue;let r=this._subs[i];if(r._inflight!==!0&&r.state==="subscribing"){let a=r._subscribe(e,t);a&&n.push(a)}}return n}_connectResponse(e){if(this._transportWasOpen=!0,this._reconnectAttempts=0,this._refreshRequired=!1,this._isConnected())return;this._client=e.client,this._setState("connected"),this._setNetworkEvents(),this._refreshTimeout&&clearTimeout(this._refreshTimeout),e.expires&&(this._refreshTimeout=setTimeout(()=>this._refresh(),x(e.ttl))),this._session=e.session,this._node=e.node,this.startBatching(),this._sendSubscribeCommands(!1,!1),this.stopBatching();let t={client:e.client,transport:this._transport.subName()};e.data&&(t.data=e.data),this.emit("connected",t),this._resolvePromises(),this._processServerSubs(e.subs||{}),e.ping&&e.ping>0?(this._serverPing=e.ping*1e3,this._sendPong=e.pong===!0,this._waitServerPing()):this._serverPing=0}_processServerSubs(e){for(let t in e){if(!e.hasOwnProperty(t))continue;let n=e[t];this._serverSubs[t]={offset:n.offset,epoch:n.epoch,recoverable:n.recoverable||!1};let i=this._getSubscribeContext(t,n);this.emit("subscribed",i)}for(let t in e){if(!e.hasOwnProperty(t))continue;let n=e[t];if(n.recovered){let i=n.publications;if(i&&i.length>0)for(let r in i)i.hasOwnProperty(r)&&this._handlePublication(t,i[r])}}for(let t in this._serverSubs)!this._serverSubs.hasOwnProperty(t)||e[t]||(this.emit("unsubscribed",{channel:t}),delete this._serverSubs[t])}_clearRefreshTimeout(){this._refreshTimeout!==null&&(clearTimeout(this._refreshTimeout),this._refreshTimeout=null)}_clearReconnectTimeout(){this._reconnectTimeout!==null&&(clearTimeout(this._reconnectTimeout),this._reconnectTimeout=null)}_clearServerPingTimeout(){this._serverPingTimeout!==null&&(clearTimeout(this._serverPingTimeout),this._serverPingTimeout=null)}_waitServerPing(){this._config.maxServerPingDelay!==0&&(!this._isConnected()||(this._clearServerPingTimeout(),this._serverPingTimeout=setTimeout(()=>{!this._isConnected()||this._disconnect(v.noPing,"no ping",!0)},this._serverPing+this._config.maxServerPingDelay)))}_getSubscribeContext(e,t){let n={channel:e,positioned:!1,recoverable:!1,wasRecovering:!1,recovered:!1};t.recovered&&(n.recovered=!0),t.positioned&&(n.positioned=!0),t.recoverable&&(n.recoverable=!0),t.was_recovering&&(n.wasRecovering=!0);let i="";"epoch"in t&&(i=t.epoch);let r=0;return"offset"in t&&(r=t.offset),(n.positioned||n.recoverable)&&(n.streamPosition={offset:r,epoch:i}),t.data&&(n.data=t.data),n}_handleReply(e,t){let n=e.id;if(!(n in this._callbacks)){t();return}let i=this._callbacks[n];if(clearTimeout(this._callbacks[n].timeout),delete this._callbacks[n],ue(e)){let r=i.errback;if(!r){t();return}let a=e.error;r({error:a,next:t})}else{let r=i.callback;if(!r)return;r({reply:e,next:t})}}_handleJoin(e,t){let n=this._getSub(e);if(!n){if(this._isServerSub(e)){let i={channel:e,info:this._getJoinLeaveContext(t.info)};this.emit("join",i)}return}n._handleJoin(t)}_handleLeave(e,t){let n=this._getSub(e);if(!n){if(this._isServerSub(e)){let i={channel:e,info:this._getJoinLeaveContext(t.info)};this.emit("leave",i)}return}n._handleLeave(t)}_handleUnsubscribe(e,t){let n=this._getSub(e);if(!n){this._isServerSub(e)&&(delete this._serverSubs[e],this.emit("unsubscribed",{channel:e}));return}t.code<2500?n._setUnsubscribed(t.code,t.reason,!1):n._setSubscribing(t.code,t.reason)}_handleSubscribe(e,t){this._serverSubs[e]={offset:t.offset,epoch:t.epoch,recoverable:t.recoverable||!1},this.emit("subscribed",this._getSubscribeContext(e,t))}_handleDisconnect(e){let t=e.code,n=!0;(t>=3500&&t<4e3||t>=4500&&t<5e3)&&(n=!1),this._disconnect(t,e.reason,n)}_getPublicationContext(e,t){let n={channel:e,data:t.data};return t.offset&&(n.offset=t.offset),t.info&&(n.info=this._getJoinLeaveContext(t.info)),t.tags&&(n.tags=t.tags),n}_getJoinLeaveContext(e){let t={client:e.client,user:e.user};return e.conn_info&&(t.connInfo=e.conn_info),e.chan_info&&(t.chanInfo=e.chan_info),t}_handlePublication(e,t){let n=this._getSub(e);if(!n){if(this._isServerSub(e)){let i=this._getPublicationContext(e,t);this.emit("publication",i),t.offset!==void 0&&(this._serverSubs[e].offset=t.offset)}return}n._handlePublication(t)}_handleMessage(e){this.emit("message",{data:e.data})}_handleServerPing(e){if(this._sendPong){let t={};this._transportSendCommands([t])}e()}_handlePush(e,t){let n=e.channel;e.pub?this._handlePublication(n,e.pub):e.message?this._handleMessage(e.message):e.join?this._handleJoin(n,e.join):e.leave?this._handleLeave(n,e.leave):e.unsubscribe?this._handleUnsubscribe(n,e.unsubscribe):e.subscribe?this._handleSubscribe(n,e.subscribe):e.disconnect&&this._handleDisconnect(e.disconnect),t()}_flush(){let e=this._commands.slice(0);this._commands=[],this._transportSendCommands(e)}_createErrorObject(e,t,n){let i={code:e,message:t};return n&&(i.temporary=!0),i}_registerCall(e,t,n){this._callbacks[e]={callback:t,errback:n,timeout:null},this._callbacks[e].timeout=setTimeout(()=>{delete this._callbacks[e],K(n)&&n({error:this._createErrorObject(d.timeout,"timeout")})},this._config.timeout)}_addCommand(e){this._batching?this._commands.push(e):this._transportSendCommands([e])}_nextPromiseId(){return++this._promiseId}_resolvePromises(){for(let e in this._promises)this._promises[e].timeout&&clearTimeout(this._promises[e].timeout),this._promises[e].resolve(),delete this._promises[e]}_rejectPromises(e){for(let t in this._promises)this._promises[t].timeout&&clearTimeout(this._promises[t].timeout),this._promises[t].reject(e),delete this._promises[t]}};T.SubscriptionState=D;T.State=j;window.Centrifuge=T;})();
//centrifuge.js.map

;

$node[ "centrifuge/dist/centrifuge" ] = $node[ "centrifuge/dist/centrifuge.js" ] = module.exports }.call( {} , {} )
;
"use strict";
var $;
(function ($) {
    require("centrifuge/dist/centrifuge.js");
    $.$scale_centrifuge_lib = window.Centrifuge;
})($ || ($ = {}));
//scale/centrifuge/lib/lib.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $scale_centrifuge extends $.$scale_centrifuge {
            client() {
                return new $scale_centrifuge_lib("ws://192.168.88.67:8877/connection/websocket");
            }
            state(next) {
                return next;
            }
            weight_channel(next) {
                return $mol_state_local.value("centrifuge_weight_data", next);
            }
            autoNumber_channel_IN(next) {
                return $mol_state_local.value("centrifuge_autoNumber_IN_data", next);
            }
            autoNumber_channel_OUT(next) {
                return $mol_state_local.value("centrifuge_autoNumber_OUT_data", next);
            }
            subscribe() {
                const weightChannel = this.client().newSubscription("channel");
                weightChannel.on("publication", (ctx) => {
                    this.weight_channel(ctx.data.value);
                });
                weightChannel.subscribe();
                const autoNumberChannel = this.client().newSubscription("autoNumber");
                autoNumberChannel.on("publication", (ctx) => {
                    console.log("autoNumber sub", ctx.data);
                    if (ctx.data.direction === "IN") {
                        this.autoNumber_channel_IN(ctx.data.value);
                    }
                    else if (ctx.data.direction === "OUT") {
                        this.autoNumber_channel_OUT(ctx.data.value);
                    }
                });
                autoNumberChannel.subscribe();
                this.client().connect();
            }
            auto() {
                this.client();
                this.subscribe();
                this.client().on("connected", (ctx) => {
                    this.state(JSON.stringify(ctx.data));
                });
            }
        }
        __decorate([
            $mol_mem
        ], $scale_centrifuge.prototype, "client", null);
        __decorate([
            $mol_mem
        ], $scale_centrifuge.prototype, "state", null);
        __decorate([
            $mol_mem
        ], $scale_centrifuge.prototype, "weight_channel", null);
        __decorate([
            $mol_mem
        ], $scale_centrifuge.prototype, "autoNumber_channel_IN", null);
        __decorate([
            $mol_mem
        ], $scale_centrifuge.prototype, "autoNumber_channel_OUT", null);
        __decorate([
            $mol_action
        ], $scale_centrifuge.prototype, "subscribe", null);
        $$.$scale_centrifuge = $scale_centrifuge;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//scale/centrifuge/centrifuge.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_pick extends $mol_pop {
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.keydown(event)
            };
        }
        Anchor() {
            return this.Trigger();
        }
        keydown(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        trigger_enabled() {
            return true;
        }
        trigger_content() {
            return [
                this.title()
            ];
        }
        hint() {
            return "";
        }
        Trigger() {
            const obj = new this.$.$mol_check();
            obj.minimal_width = () => 40;
            obj.minimal_height = () => 40;
            obj.enabled = () => this.trigger_enabled();
            obj.checked = (val) => this.showed(val);
            obj.sub = () => this.trigger_content();
            obj.hint = () => this.hint();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_pick.prototype, "keydown", null);
    __decorate([
        $mol_mem
    ], $mol_pick.prototype, "Trigger", null);
    $.$mol_pick = $mol_pick;
})($ || ($ = {}));
//mol/pick/-view.tree/pick.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/pick/pick.view.css", "[mol_pick_trigger] {\n\talign-items: center;\n\tflex-grow: 1;\n}\n");
})($ || ($ = {}));
//mol/pick/-css/pick.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_pick extends $.$mol_pick {
            keydown(event) {
                if (!this.trigger_enabled())
                    return;
                if (event.defaultPrevented)
                    return;
                if (event.keyCode === $mol_keyboard_code.escape) {
                    if (!this.showed())
                        return;
                    event.preventDefault();
                    this.showed(false);
                }
            }
        }
        $$.$mol_pick = $mol_pick;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/pick/pick.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_menu extends $mol_icon {
        path() {
            return "M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z";
        }
    }
    $.$mol_icon_menu = $mol_icon_menu;
})($ || ($ = {}));
//mol/icon/menu/-view.tree/menu.view.tree.ts
;
"use strict";
var $;
(function ($) {
    let $scale_modelActStatus;
    (function ($scale_modelActStatus) {
        $scale_modelActStatus["ACTIVE"] = "STATUS_ACTIVE";
        $scale_modelActStatus["ON_TERRITORY"] = "STATUS_ON_TERRITORY";
        $scale_modelActStatus["COMPLETED"] = "STATUS_COMPLETED";
    })($scale_modelActStatus = $.$scale_modelActStatus || ($.$scale_modelActStatus = {}));
    let $scale_modelOrganizationRole;
    (function ($scale_modelOrganizationRole) {
        $scale_modelOrganizationRole["TRANSPORTER"] = "ROLE_TRANSPORTER";
        $scale_modelOrganizationRole["PAYER"] = "ROLE_PAYER";
    })($scale_modelOrganizationRole = $.$scale_modelOrganizationRole || ($.$scale_modelOrganizationRole = {}));
    let $scale_modelOrganizationStatus;
    (function ($scale_modelOrganizationStatus) {
        $scale_modelOrganizationStatus["ACTIVE"] = "STATUS_ACTIVE";
    })($scale_modelOrganizationStatus = $.$scale_modelOrganizationStatus || ($.$scale_modelOrganizationStatus = {}));
})($ || ($ = {}));
//scale/model/model.ts
;
"use strict";
var $;
(function ($) {
    class $scale_api extends $mol_object {
        getActs(filter = {
            status: $scale_modelActStatus.ACTIVE,
            cargoType: null,
            wasteCategory: null,
            payerPublicId: null,
            transporterPublicId: null,
            autoNumber: null,
        }) {
            const BASE_URL = $scale_env_BASE_URL;
            const response = $mol_fetch.json(`${BASE_URL}/getActs${Object.keys(filter).length
                ? `?${Object.keys(filter)
                    .filter((key) => filter[key] !== null)
                    .map((key) => `${key}=${filter[key]}`)
                    .join("&")}`
                : ""}`, {
                method: "GET",
            });
            if (response.status !== "success") {
                throw new Error(`Response failed with status ${response.status}`);
            }
            return response.data;
        }
        getAutoRelations(number) {
            const BASE_URL = $scale_env_BASE_URL;
            const response = $mol_fetch.json(`${BASE_URL}/getAutoRelations`, {
                method: "POST",
                body: JSON.stringify({ number }),
            });
            if (response.status !== "success") {
                throw new Error(`Response failed with status ${response.status}`);
            }
            return response.data;
        }
        createAct(payload) {
            const BASE_URL = $scale_env_BASE_URL;
            const response = $mol_fetch.request(`${BASE_URL}/createAct`, {
                method: "POST",
                body: JSON.stringify(payload),
            });
            return response;
        }
        closeAct(payload) {
            const BASE_URL = $scale_env_BASE_URL;
            const response = $mol_fetch.json(`${BASE_URL}/closeAct`, {
                method: "POST",
                body: JSON.stringify(payload),
            });
            if (response.status !== "success") {
                throw new Error(`Response failed with status ${response.status}`);
            }
            return response.data;
        }
        gateOpenEntry() {
            const BASE_URL = $scale_env_BASE_URL;
            const response = $mol_fetch.json(`${BASE_URL}/openEntryGate`, {
                method: "GET",
            });
            if (response.status !== "success") {
                throw new Error(`Response failed with status ${response.status}`);
            }
            return response.data;
        }
        gateCloseEntry() {
            const BASE_URL = $scale_env_BASE_URL;
            const response = $mol_fetch.json(`${BASE_URL}/closeEntryGate`, {
                method: "GET",
            });
            if (response.status !== "success") {
                throw new Error(`Response failed with status ${response.status}`);
            }
            return response.data;
        }
        gateOpenExit() {
            const BASE_URL = $scale_env_BASE_URL;
            const response = $mol_fetch.json(`${BASE_URL}/openExitGate`, {
                method: "GET",
            });
            if (response.status !== "success") {
                throw new Error(`Response failed with status ${response.status}`);
            }
            return response.data;
        }
        gateCloseExit() {
            const BASE_URL = $scale_env_BASE_URL;
            const response = $mol_fetch.json(`${BASE_URL}/closeExitGate`, {
                method: "GET",
            });
            if (response.status !== "success") {
                throw new Error(`Response failed with status ${response.status}`);
            }
            return response.data;
        }
        getOrganizations(filter = {
            status: $scale_modelOrganizationStatus.ACTIVE,
        }) {
            const BASE_URL = $scale_env_BASE_URL;
            const response = $mol_fetch.json(`${BASE_URL}/getUsers?status=${filter.status}${filter.role ? `&role=${filter.role}` : ""}`, {
                method: "GET",
            });
            if (response.status !== "success") {
                throw new Error(`Response failed with status ${response.status}`);
            }
            return response.data;
        }
        getCargoTypes() {
            const BASE_URL = $scale_env_BASE_URL;
            const response = $mol_fetch.json(`${BASE_URL}/getCargoTypes`, {
                method: "GET",
            });
            if (response.status !== "success") {
                throw new Error(`Response failed with status ${response.status}`);
            }
            return response.data;
        }
        getCargoCategories() {
            const BASE_URL = $scale_env_BASE_URL;
            const response = $mol_fetch.json(`${BASE_URL}/getWasteCategories`, {
                method: "GET",
            });
            if (response.status !== "success") {
                throw new Error(`Response failed with status ${response.status}`);
            }
            return response.data;
        }
    }
    $.$scale_api = $scale_api;
})($ || ($ = {}));
//scale/api/api.ts
;
"use strict";
var $;
(function ($) {
    $.$scale_env_BASE_URL = "http://192.168.88.67:888/api/v1";
})($ || ($ = {}));
//scale/api/env.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_pin extends $mol_icon {
        path() {
            return "M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z";
        }
    }
    $.$mol_icon_pin = $mol_icon_pin;
})($ || ($ = {}));
//mol/icon/pin/-view.tree/pin.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_pin_outline extends $mol_icon {
        path() {
            return "M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12M8.8,14L10,12.8V4H14V12.8L15.2,14H8.8Z";
        }
    }
    $.$mol_icon_pin_outline = $mol_icon_pin_outline;
})($ || ($ = {}));
//mol/icon/pin/outline/-view.tree/outline.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_arrow_expand extends $mol_icon {
        path() {
            return "M10,21V19H6.41L10.91,14.5L9.5,13.09L5,17.59V14H3V21H10M14.5,10.91L19,6.41V10H21V3H14V5H17.59L13.09,9.5L14.5,10.91Z";
        }
    }
    $.$mol_icon_arrow_expand = $mol_icon_arrow_expand;
})($ || ($ = {}));
//mol/icon/arrow/expand/-view.tree/expand.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_chevron extends $mol_icon {
        path() {
            return "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z";
        }
    }
    $.$mol_icon_chevron = $mol_icon_chevron;
})($ || ($ = {}));
//mol/icon/chevron/-view.tree/chevron.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_chevron_left extends $mol_icon {
        path() {
            return "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z";
        }
    }
    $.$mol_icon_chevron_left = $mol_icon_chevron_left;
})($ || ($ = {}));
//mol/icon/chevron/left/-view.tree/left.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_chevron_left_box extends $mol_icon {
        path() {
            return "M19,3H5C3.9,3 3,3.9 3,5V19C3,20.11 3.9,21 5,21H19C20.11,21 21,20.11 21,19V5C21,3.9 20.1,3 19,3M15.71,16.59L14.29,18L8.29,12L14.29,6L15.71,7.41L11.12,12L15.71,16.59Z";
        }
    }
    $.$mol_icon_chevron_left_box = $mol_icon_chevron_left_box;
})($ || ($ = {}));
//mol/icon/chevron/left/box/-view.tree/box.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_major extends $mol_button_typed {
        attr() {
            return {
                ...super.attr(),
                mol_theme: "$mol_theme_accent"
            };
        }
    }
    $.$mol_button_major = $mol_button_major;
})($ || ($ = {}));
//mol/button/major/-view.tree/major.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/major/major.view.css", "[mol_button_major][disabled] {\n\topacity: .5;\n\tfilter: grayscale();\n}\n");
})($ || ($ = {}));
//mol/button/major/-css/major.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_chevron_right extends $mol_icon {
        path() {
            return "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z";
        }
    }
    $.$mol_icon_chevron_right = $mol_icon_chevron_right;
})($ || ($ = {}));
//mol/icon/chevron/right/-view.tree/right.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_chevron_right_box extends $mol_icon {
        path() {
            return "M19,3H5C3.9,3 3,3.9 3,5V19C3,20.11 3.9,21 5,21H19C20.11,21 21,20.11 21,19V5C21,3.9 20.1,3 19,3M9.71,18L8.29,16.59L12.88,12L8.29,7.41L9.71,6L15.71,12L9.71,18Z";
        }
    }
    $.$mol_icon_chevron_right_box = $mol_icon_chevron_right_box;
})($ || ($ = {}));
//mol/icon/chevron/right/box/-view.tree/box.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_row extends $mol_view {
    }
    $.$mol_row = $mol_row;
})($ || ($ = {}));
//mol/row/-view.tree/row.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/row/row.view.css", "[mol_row] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: flex-start;\n\talign-content: flex-start;\n\tjustify-content: flex-start;\n\tpadding: var(--mol_gap_block);\n\tgap: var(--mol_gap_block);\n\tflex: 0 0 auto;\n\tbox-sizing: border-box;\n\tmax-width: 100%;\n}\n\n[mol_row] > * {\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));
//mol/row/-css/row.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $scale_dash_gate extends $mol_list {
        rows() {
            return [
                this.Row()
            ];
        }
        open_submit(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        Gate_left_icon() {
            const obj = new this.$.$mol_icon_chevron_left_box();
            return obj;
        }
        Gate_left() {
            const obj = new this.$.$mol_button_major();
            obj.click = (val) => this.open_submit(val);
            obj.sub = () => [
                this.Gate_left_icon()
            ];
            return obj;
        }
        title() {
            return "Шлагбаум №1";
        }
        Gate_text() {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => this.title();
            return obj;
        }
        close_submit(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        Gate_right_icon() {
            const obj = new this.$.$mol_icon_chevron_right_box();
            return obj;
        }
        Gate_right() {
            const obj = new this.$.$mol_button_major();
            obj.click = (val) => this.close_submit(val);
            obj.sub = () => [
                this.Gate_right_icon()
            ];
            return obj;
        }
        Row() {
            const obj = new this.$.$mol_row();
            obj.sub = () => [
                this.Gate_left(),
                this.Gate_text(),
                this.Gate_right()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $scale_dash_gate.prototype, "open_submit", null);
    __decorate([
        $mol_mem
    ], $scale_dash_gate.prototype, "Gate_left_icon", null);
    __decorate([
        $mol_mem
    ], $scale_dash_gate.prototype, "Gate_left", null);
    __decorate([
        $mol_mem
    ], $scale_dash_gate.prototype, "Gate_text", null);
    __decorate([
        $mol_mem
    ], $scale_dash_gate.prototype, "close_submit", null);
    __decorate([
        $mol_mem
    ], $scale_dash_gate.prototype, "Gate_right_icon", null);
    __decorate([
        $mol_mem
    ], $scale_dash_gate.prototype, "Gate_right", null);
    __decorate([
        $mol_mem
    ], $scale_dash_gate.prototype, "Row", null);
    $.$scale_dash_gate = $scale_dash_gate;
})($ || ($ = {}));
//scale/dash/gate/-view.tree/gate.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($scale_dash_gate, {
            Row: { alignItems: "center", padding: 0 },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//scale/dash/gate/gate.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_labeler extends $mol_list {
        rows() {
            return [
                this.Label(),
                this.Content()
            ];
        }
        label() {
            return [
                this.title()
            ];
        }
        Label() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 32;
            obj.sub = () => this.label();
            return obj;
        }
        content() {
            return [];
        }
        Content() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 24;
            obj.sub = () => this.content();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_labeler.prototype, "Label", null);
    __decorate([
        $mol_mem
    ], $mol_labeler.prototype, "Content", null);
    $.$mol_labeler = $mol_labeler;
})($ || ($ = {}));
//mol/labeler/-view.tree/labeler.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/labeler/labeler.view.css", "[mol_labeler] {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: stretch;\n\tcursor: inherit;\n}\n\n[mol_labeler_label] {\n\tmin-height: 2rem;\n\tcolor: var(--mol_theme_shade);\n\tpadding: .5rem .75rem 0;\n\tgap: 0 var(--mol_gap_block);\n\tflex-wrap: wrap;\n}\n\n[mol_labeler_content] {\n\tdisplay: flex;\n\tpadding: var(--mol_gap_text);\n}\n");
})($ || ($ = {}));
//mol/labeler/-css/labeler.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_form_field extends $mol_labeler {
        bids() {
            return [];
        }
        label() {
            return [
                this.name(),
                this.Bid()
            ];
        }
        content() {
            return [
                this.control()
            ];
        }
        name() {
            return "";
        }
        bid() {
            return "";
        }
        Bid() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.bid()
            ];
            return obj;
        }
        control() {
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_form_field.prototype, "Bid", null);
    $.$mol_form_field = $mol_form_field;
})($ || ($ = {}));
//mol/form/field/-view.tree/field.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/form/field/field.view.css", "[mol_form_field] {\n\talign-items: stretch;\n}\n\n[mol_form_field_bid] {\n\tcolor: var(--mol_theme_focus);\n\tdisplay: inline-block;\n\ttext-shadow: 0 0;\n}\n\n[mol_form_field_content] {\n\tborder-radius: var(--mol_gap_round);\n}\n");
})($ || ($ = {}));
//mol/form/field/-css/field.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_form_field extends $.$mol_form_field {
            bid() {
                return this.bids().filter(Boolean)[0] ?? '';
            }
        }
        __decorate([
            $mol_mem
        ], $mol_form_field.prototype, "bid", null);
        $$.$mol_form_field = $mol_form_field;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/form/field/field.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_form extends $mol_list {
        submit_allowed() {
            return true;
        }
        submit_blocked() {
            return false;
        }
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.keydown(event)
            };
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        rows() {
            return [
                this.Body(),
                this.Foot()
            ];
        }
        keydown(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        form_fields() {
            return [];
        }
        body() {
            return this.form_fields();
        }
        Body() {
            const obj = new this.$.$mol_list();
            obj.sub = () => this.body();
            return obj;
        }
        buttons() {
            return [];
        }
        foot() {
            return this.buttons();
        }
        Foot() {
            const obj = new this.$.$mol_row();
            obj.sub = () => this.foot();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_form.prototype, "submit", null);
    __decorate([
        $mol_mem
    ], $mol_form.prototype, "keydown", null);
    __decorate([
        $mol_mem
    ], $mol_form.prototype, "Body", null);
    __decorate([
        $mol_mem
    ], $mol_form.prototype, "Foot", null);
    $.$mol_form = $mol_form;
})($ || ($ = {}));
//mol/form/-view.tree/form.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/form/form.view.css", "[mol_form] {\r\n\tgap: var(--mol_gap_block);\r\n}\r\n\r\n[mol_form_body] {\r\n\tgap: var(--mol_gap_block);\r\n}");
})($ || ($ = {}));
//mol/form/-css/form.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_form extends $.$mol_form {
            form_fields() {
                return [...this.view_find(view => view instanceof $mol_form_field)]
                    .map(path => path[path.length - 1]);
            }
            submit_allowed() {
                return this.form_fields().every(field => !field.bid());
            }
            submit_blocked() {
                return !this.submit_allowed();
            }
            keydown(next) {
                if (next.ctrlKey && next.keyCode === $mol_keyboard_code.enter && !this.submit_blocked())
                    this.submit(event);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_form.prototype, "form_fields", null);
        __decorate([
            $mol_mem
        ], $mol_form.prototype, "submit_allowed", null);
        $$.$mol_form = $mol_form;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/form/form.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_section extends $mol_list {
        level() {
            return 1;
        }
        rows() {
            return [
                this.Head(),
                this.Content()
            ];
        }
        title_dom_name() {
            return "h1";
        }
        Title() {
            const obj = new this.$.$mol_paragraph();
            obj.dom_name = () => this.title_dom_name();
            obj.title = () => this.title();
            return obj;
        }
        tools() {
            return [];
        }
        Tools() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.tools();
            return obj;
        }
        head() {
            return [
                this.Title(),
                this.Tools()
            ];
        }
        Head() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.head();
            return obj;
        }
        content() {
            return [];
        }
        Content() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.content();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_section.prototype, "Title", null);
    __decorate([
        $mol_mem
    ], $mol_section.prototype, "Tools", null);
    __decorate([
        $mol_mem
    ], $mol_section.prototype, "Head", null);
    __decorate([
        $mol_mem
    ], $mol_section.prototype, "Content", null);
    $.$mol_section = $mol_section;
})($ || ($ = {}));
//mol/section/-view.tree/section.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/section/section.view.css", "[mol_section_head] {\n\tjustify-content: space-between;\n\talign-items: flex-end;\n\tflex-wrap: wrap;\n}\n\n[mol_section_title] {\n\tpadding: var(--mol_gap_text);\n\ttext-shadow: 0 0;\n\tfont-weight: normal;\n}\n\nh1[mol_section_title] {\n\tfont-size: 1.5rem;\n}\n\nh2[mol_section_title] {\n\tfont-size: 1.5rem;\n\tfont-style: italic;\n}\n\nh3[mol_section_title] {\n\tfont-size: 1.25rem;\n}\n\nh4[mol_section_title] {\n\tfont-size: 1.25rem;\n\tfont-style: italic;\n}\n\nh5[mol_section_title] {\n\tfont-size: 1rem;\n}\n\nh6[mol_section_title] {\n\tfont-size: 1rem;\n\tfont-style: italic;\n}\n");
})($ || ($ = {}));
//mol/section/-css/section.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_section extends $.$mol_section {
            title_dom_name() {
                return 'h' + this.level();
            }
        }
        $$.$mol_section = $mol_section;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/section/section.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_video_player extends $mol_view {
        dom_name() {
            return "video";
        }
        playing(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        volume(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        time(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        duration() {
            return 0;
        }
        attr() {
            return {
                src: this.uri(),
                controls: this.controls(),
                autoplay: this.autoplay(),
                loop: this.loop(),
                poster: this.poster()
            };
        }
        event() {
            return {
                volumechange: (event) => this.revolume(event),
                timeupdate: (event) => this.retime(event),
                durationchange: (event) => this.redurate(event),
                playing: (event) => this.play_started(event),
                play: (event) => this.play(event),
                pause: (event) => this.pause(event)
            };
        }
        uri() {
            return "";
        }
        controls() {
            return true;
        }
        autoplay() {
            return true;
        }
        loop() {
            return false;
        }
        poster() {
            return "";
        }
        revolume(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        retime(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        redurate(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        play_started(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        play(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        pause(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_video_player.prototype, "playing", null);
    __decorate([
        $mol_mem
    ], $mol_video_player.prototype, "volume", null);
    __decorate([
        $mol_mem
    ], $mol_video_player.prototype, "time", null);
    __decorate([
        $mol_mem
    ], $mol_video_player.prototype, "revolume", null);
    __decorate([
        $mol_mem
    ], $mol_video_player.prototype, "retime", null);
    __decorate([
        $mol_mem
    ], $mol_video_player.prototype, "redurate", null);
    __decorate([
        $mol_mem
    ], $mol_video_player.prototype, "play_started", null);
    __decorate([
        $mol_mem
    ], $mol_video_player.prototype, "play", null);
    __decorate([
        $mol_mem
    ], $mol_video_player.prototype, "pause", null);
    $.$mol_video_player = $mol_video_player;
})($ || ($ = {}));
//mol/video/player/-view.tree/player.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/video/player/player.view.css", "[mol_video_player] {\n\tflex: 1 1 auto;\n}\n");
})($ || ($ = {}));
//mol/video/player/-css/player.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_video_player extends $.$mol_video_player {
            dom_node() {
                return super.dom_node();
            }
            volume(next) {
                this.revolume();
                if (next === undefined) {
                    return this.dom_node().volume;
                }
                else {
                    return this.dom_node().volume = Math.max(0, Math.min(next, 1));
                }
            }
            time(next) {
                this.retime();
                if (next === undefined) {
                    return this.dom_node().currentTime;
                }
                else {
                    return this.dom_node().currentTime = Math.max(0, Math.min(next, this.duration()));
                }
            }
            duration() {
                this.redurate();
                return this.dom_node().duration;
            }
            playing(next) {
                if (next === undefined) {
                    return false;
                }
                else {
                    if (next) {
                        this.dom_node().play();
                    }
                    else {
                        this.dom_node().pause();
                    }
                    return next;
                }
            }
            play() {
                this.playing(true);
            }
            pause() {
                this.playing(false);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_video_player.prototype, "volume", null);
        __decorate([
            $mol_mem
        ], $mol_video_player.prototype, "time", null);
        __decorate([
            $mol_mem
        ], $mol_video_player.prototype, "duration", null);
        __decorate([
            $mol_mem
        ], $mol_video_player.prototype, "playing", null);
        $$.$mol_video_player = $mol_video_player;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/video/player/player.view.ts
;
"use strict";
var $;
(function ($) {
    class $scale_dash_camera extends $mol_video_player {
        sub() {
            return [
                this.error_text()
            ];
        }
        attr() {
            return {
                ...super.attr(),
                controls: this.controls_enabled(),
                mol_view_error: this.error_type(),
                id: this.id(),
                pc: this.pc(),
                stream: this.stream()
            };
        }
        error_text() {
            return null;
        }
        controls_enabled() {
            return true;
        }
        error_type() {
            return null;
        }
        id() {
            return null;
        }
        pc() {
            return null;
        }
        stream() {
            return null;
        }
    }
    $.$scale_dash_camera = $scale_dash_camera;
})($ || ($ = {}));
//scale/dash/camera/-view.tree/camera.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($scale_dash_camera, {
            height: "100%",
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//scale/dash/camera/camera.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $scale_dash_camera extends $.$scale_dash_camera {
            config() {
                return {
                    iceServers: [
                        {
                            urls: ["stun:stun.l.google.com:19302"],
                        },
                    ],
                };
            }
            stream() {
                return $mol_wire_sync(new MediaStream());
            }
            init_remote_sdp(pc) {
                const formData = new FormData();
                formData.append("suuid", this.id());
                formData.append("data", btoa(pc?.localDescription?.sdp));
            }
            init_codec_info(pc) {
                pc.addTransceiver("video", {
                    direction: "sendrecv",
                });
            }
            handle_negotiation_needed(event) {
                const pc = $mol_wire_sync(event.target);
                const offer = pc.createOffer();
                console.log("offer", offer);
                pc.setLocalDescription(offer);
                console.log("sdp", pc.localDescription);
                this.init_remote_sdp.call(this, pc);
            }
            error(next = null) {
                return next;
            }
            error_text() {
                return this.error()?.text ?? null;
            }
            error_type() {
                return this.error()?.type ?? null;
            }
            controls_enabled() {
                return this.error() === null;
            }
            dom_name() {
                return this.controls_enabled() ? super.dom_name() : "div";
            }
            pc() {
                const pc = new RTCPeerConnection(this.config());
                this.init_codec_info(pc);
                pc.onnegotiationneeded = (event) => $mol_wire_async(this.handle_negotiation_needed).call(this, event);
                pc.onconnectionstatechange = (state) => console.log("state changed", state);
                pc.ontrack = (event) => {
                    console.log("track event", event);
                    this.stream().addTrack(event.track);
                    this.dom_node().srcObject = this.stream();
                    console.log(event.streams.length + " track is delivered");
                };
                pc.oniceconnectionstatechange = (e) => console.log(pc.iceConnectionState);
                return pc;
            }
        }
        __decorate([
            $mol_mem
        ], $scale_dash_camera.prototype, "config", null);
        __decorate([
            $mol_mem
        ], $scale_dash_camera.prototype, "stream", null);
        __decorate([
            $mol_action
        ], $scale_dash_camera.prototype, "init_remote_sdp", null);
        __decorate([
            $mol_action
        ], $scale_dash_camera.prototype, "init_codec_info", null);
        __decorate([
            $mol_action
        ], $scale_dash_camera.prototype, "handle_negotiation_needed", null);
        __decorate([
            $mol_mem
        ], $scale_dash_camera.prototype, "error", null);
        __decorate([
            $mol_mem
        ], $scale_dash_camera.prototype, "error_text", null);
        __decorate([
            $mol_mem
        ], $scale_dash_camera.prototype, "error_type", null);
        __decorate([
            $mol_mem
        ], $scale_dash_camera.prototype, "controls_enabled", null);
        __decorate([
            $mol_mem
        ], $scale_dash_camera.prototype, "dom_name", null);
        __decorate([
            $mol_mem
        ], $scale_dash_camera.prototype, "pc", null);
        $$.$scale_dash_camera = $scale_dash_camera;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//scale/dash/camera/camera.view.ts
;
"use strict";
var $;
(function ($) {
    class $scale_dash_table_pick extends $mol_pick {
        align() {
            return "bottom_right";
        }
        hint() {
            return this.act_options_out();
        }
        trigger_content() {
            return [
                this.Options_trigger_icon()
            ];
        }
        bubble_content(id) {
            return [
                this.Options_content(id)
            ];
        }
        act_options_out() {
            return "Создать запись на выезд для";
        }
        Options_trigger_icon() {
            const obj = new this.$.$mol_icon_menu();
            return obj;
        }
        open_exit_form_current(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        act_exit_text() {
            return "Создать запись на выезд для";
        }
        Menu_item_copy(id) {
            const obj = new this.$.$mol_button_minor();
            obj.click = (next) => this.open_exit_form_current(id, next);
            obj.sub = () => [
                this.act_exit_text()
            ];
            return obj;
        }
        Options_content(id) {
            const obj = new this.$.$mol_list();
            obj.rows = () => [
                this.Menu_item_copy(id)
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $scale_dash_table_pick.prototype, "Options_trigger_icon", null);
    __decorate([
        $mol_mem_key
    ], $scale_dash_table_pick.prototype, "open_exit_form_current", null);
    __decorate([
        $mol_mem_key
    ], $scale_dash_table_pick.prototype, "Menu_item_copy", null);
    __decorate([
        $mol_mem_key
    ], $scale_dash_table_pick.prototype, "Options_content", null);
    $.$scale_dash_table_pick = $scale_dash_table_pick;
    class $scale_dash extends $mol_list {
        open_entry_gate() {
            return this.api().gateOpenEntry();
        }
        close_entry_gate() {
            return this.api().gateCloseEntry();
        }
        open_exit_gate() {
            return this.api().gateOpenExit();
        }
        close_exit_gate() {
            return this.api().gateCloseExit();
        }
        api() {
            const obj = new this.$.$scale_api();
            return obj;
        }
        rows() {
            return [
                this.Top_row(),
                this.Bottom_row()
            ];
        }
        pin_controls(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        Top_row_pin_icon() {
            const obj = new this.$.$mol_icon_pin_outline();
            return obj;
        }
        Top_row__pin() {
            const obj = new this.$.$mol_button_minor();
            obj.click = (val) => this.pin_controls(val);
            obj.sub = () => [
                this.Top_row_pin_icon()
            ];
            return obj;
        }
        expand_controls(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        Top_row_expand_icon() {
            const obj = new this.$.$mol_icon_arrow_expand();
            return obj;
        }
        Top_row_expand() {
            const obj = new this.$.$mol_button_minor();
            obj.click = (val) => this.expand_controls(val);
            obj.sub = () => [
                this.Top_row_expand_icon()
            ];
            return obj;
        }
        Top_row_tools() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Top_row__pin(),
                this.Top_row_expand()
            ];
            return obj;
        }
        Gate_entry() {
            const obj = new this.$.$scale_dash_gate();
            obj.title = () => "Шлагбаум №1";
            obj.open_submit = () => this.open_entry_gate();
            obj.close_submit = () => this.close_entry_gate();
            return obj;
        }
        Gate_exit() {
            const obj = new this.$.$scale_dash_gate();
            obj.title = () => "Шлагбаум №2";
            obj.open_submit = () => this.open_entry_gate();
            obj.close_submit = () => this.close_entry_gate();
            return obj;
        }
        open_enter_form(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        Enter_button() {
            const obj = new this.$.$mol_button_major();
            obj.title = () => "Создать запись на въезд";
            obj.click = (val) => this.open_enter_form(val);
            return obj;
        }
        open_exit_form(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        Exit_button() {
            const obj = new this.$.$mol_button_major();
            obj.title = () => "Создать запись на выезд";
            obj.click = (val) => this.open_exit_form(val);
            return obj;
        }
        Btn_row() {
            const obj = new this.$.$mol_row();
            obj.sub = () => [
                this.Enter_button(),
                this.Exit_button()
            ];
            return obj;
        }
        Control_form() {
            const obj = new this.$.$mol_form();
            obj.form_fields = () => [];
            obj.buttons = () => [
                this.Gate_entry(),
                this.Gate_exit(),
                this.Btn_row()
            ];
            return obj;
        }
        Control() {
            const obj = new this.$.$mol_section();
            obj.title = () => "Управление";
            obj.content = () => [
                this.Control_form()
            ];
            return obj;
        }
        Camera_1() {
            const obj = new this.$.$scale_dash_camera();
            obj.id = () => "CAMERA_1";
            return obj;
        }
        Camera_2() {
            const obj = new this.$.$scale_dash_camera();
            obj.id = () => "CAMERA_1";
            return obj;
        }
        Camera_row() {
            const obj = new this.$.$mol_row();
            obj.sub = () => [
                this.Camera_1(),
                this.Camera_2()
            ];
            return obj;
        }
        Camera_list() {
            const obj = new this.$.$mol_section();
            obj.title = () => "Камеры";
            obj.content = () => [
                this.Camera_row()
            ];
            return obj;
        }
        Top_row_body() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Control(),
                this.Camera_list()
            ];
            return obj;
        }
        Top_row() {
            const obj = new this.$.$mol_list();
            obj.rows = () => [
                this.Top_row_tools(),
                this.Top_row_body()
            ];
            return obj;
        }
        act_table_title() {
            return "На территории";
        }
        act_autoNumber(id, next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Number_content(id) {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => this.act_autoNumber(id);
            return obj;
        }
        Number_labeler(id) {
            const obj = new this.$.$mol_labeler();
            obj.title = () => "Гос. номер";
            obj.Content = () => this.Number_content(id);
            return obj;
        }
        act_transporter(id, next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Transporter_content(id) {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => this.act_transporter(id);
            return obj;
        }
        Transporter_labeler(id) {
            const obj = new this.$.$mol_labeler();
            obj.title = () => "Перевозчик";
            obj.Content = () => this.Transporter_content(id);
            return obj;
        }
        act_payer(id, next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Payer_content(id) {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => this.act_payer(id);
            return obj;
        }
        Payer_labeler(id) {
            const obj = new this.$.$mol_labeler();
            obj.title = () => "Оператор";
            obj.Content = () => this.Payer_content(id);
            return obj;
        }
        act_weightGross(id, next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Weight_gross_content(id) {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => this.act_weightGross(id);
            return obj;
        }
        Weight_gross_labeler(id) {
            const obj = new this.$.$mol_labeler();
            obj.title = () => "Брутто (кг)";
            obj.Content = () => this.Weight_gross_content(id);
            return obj;
        }
        act_cargoType(id, next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Cargo_type_content(id) {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => this.act_cargoType(id);
            return obj;
        }
        Cargo_type_labeler(id) {
            const obj = new this.$.$mol_labeler();
            obj.title = () => "Вид груза";
            obj.Content = () => this.Cargo_type_content(id);
            return obj;
        }
        act_cargoCategory(id, next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Cargo_category_content(id) {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => this.act_cargoCategory(id);
            return obj;
        }
        Cargo_category_labeler(id) {
            const obj = new this.$.$mol_labeler();
            obj.title = () => "Категория груза";
            obj.Content = () => this.Cargo_category_content(id);
            return obj;
        }
        act_enteredMoment(id, next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Date_enter_content(id) {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => this.act_enteredMoment(id);
            return obj;
        }
        Date_enter_labeler(id) {
            const obj = new this.$.$mol_labeler();
            obj.title = () => "Дата и время въезда";
            obj.Content = () => this.Date_enter_content(id);
            return obj;
        }
        open_exit_form_current(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        act_exit_text(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Act_options_pop(id) {
            const obj = new this.$.$scale_dash_table_pick();
            obj.open_exit_form_current = (next) => this.open_exit_form_current(id, next);
            obj.act_exit_text = (next) => this.act_exit_text(id);
            return obj;
        }
        Act_row(id) {
            const obj = new this.$.$mol_row();
            obj.minimal_height = () => 100;
            obj.minimal_width = () => 200;
            obj.sub = () => [
                this.Number_labeler(id),
                this.Transporter_labeler(id),
                this.Payer_labeler(id),
                this.Weight_gross_labeler(id),
                this.Cargo_type_labeler(id),
                this.Cargo_category_labeler(id),
                this.Date_enter_labeler(id),
                this.Act_options_pop(id)
            ];
            return obj;
        }
        act_list() {
            return [
                this.Act_row("0")
            ];
        }
        Act_list() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.act_list();
            return obj;
        }
        Auto_list() {
            const obj = new this.$.$mol_section();
            obj.title = () => this.act_table_title();
            obj.content = () => [
                this.Act_list()
            ];
            return obj;
        }
        Bottom_row() {
            const obj = new this.$.$mol_row();
            obj.sub = () => [
                this.Auto_list()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $scale_dash.prototype, "api", null);
    __decorate([
        $mol_mem
    ], $scale_dash.prototype, "pin_controls", null);
    __decorate([
        $mol_mem
    ], $scale_dash.prototype, "Top_row_pin_icon", null);
    __decorate([
        $mol_mem
    ], $scale_dash.prototype, "Top_row__pin", null);
    __decorate([
        $mol_mem
    ], $scale_dash.prototype, "expand_controls", null);
    __decorate([
        $mol_mem
    ], $scale_dash.prototype, "Top_row_expand_icon", null);
    __decorate([
        $mol_mem
    ], $scale_dash.prototype, "Top_row_expand", null);
    __decorate([
        $mol_mem
    ], $scale_dash.prototype, "Top_row_tools", null);
    __decorate([
        $mol_mem
    ], $scale_dash.prototype, "Gate_entry", null);
    __decorate([
        $mol_mem
    ], $scale_dash.prototype, "Gate_exit", null);
    __decorate([
        $mol_mem
    ], $scale_dash.prototype, "open_enter_form", null);
    __decorate([
        $mol_mem
    ], $scale_dash.prototype, "Enter_button", null);
    __decorate([
        $mol_mem
    ], $scale_dash.prototype, "open_exit_form", null);
    __decorate([
        $mol_mem
    ], $scale_dash.prototype, "Exit_button", null);
    __decorate([
        $mol_mem
    ], $scale_dash.prototype, "Btn_row", null);
    __decorate([
        $mol_mem
    ], $scale_dash.prototype, "Control_form", null);
    __decorate([
        $mol_mem
    ], $scale_dash.prototype, "Control", null);
    __decorate([
        $mol_mem
    ], $scale_dash.prototype, "Camera_1", null);
    __decorate([
        $mol_mem
    ], $scale_dash.prototype, "Camera_2", null);
    __decorate([
        $mol_mem
    ], $scale_dash.prototype, "Camera_row", null);
    __decorate([
        $mol_mem
    ], $scale_dash.prototype, "Camera_list", null);
    __decorate([
        $mol_mem
    ], $scale_dash.prototype, "Top_row_body", null);
    __decorate([
        $mol_mem
    ], $scale_dash.prototype, "Top_row", null);
    __decorate([
        $mol_mem_key
    ], $scale_dash.prototype, "act_autoNumber", null);
    __decorate([
        $mol_mem_key
    ], $scale_dash.prototype, "Number_content", null);
    __decorate([
        $mol_mem_key
    ], $scale_dash.prototype, "Number_labeler", null);
    __decorate([
        $mol_mem_key
    ], $scale_dash.prototype, "act_transporter", null);
    __decorate([
        $mol_mem_key
    ], $scale_dash.prototype, "Transporter_content", null);
    __decorate([
        $mol_mem_key
    ], $scale_dash.prototype, "Transporter_labeler", null);
    __decorate([
        $mol_mem_key
    ], $scale_dash.prototype, "act_payer", null);
    __decorate([
        $mol_mem_key
    ], $scale_dash.prototype, "Payer_content", null);
    __decorate([
        $mol_mem_key
    ], $scale_dash.prototype, "Payer_labeler", null);
    __decorate([
        $mol_mem_key
    ], $scale_dash.prototype, "act_weightGross", null);
    __decorate([
        $mol_mem_key
    ], $scale_dash.prototype, "Weight_gross_content", null);
    __decorate([
        $mol_mem_key
    ], $scale_dash.prototype, "Weight_gross_labeler", null);
    __decorate([
        $mol_mem_key
    ], $scale_dash.prototype, "act_cargoType", null);
    __decorate([
        $mol_mem_key
    ], $scale_dash.prototype, "Cargo_type_content", null);
    __decorate([
        $mol_mem_key
    ], $scale_dash.prototype, "Cargo_type_labeler", null);
    __decorate([
        $mol_mem_key
    ], $scale_dash.prototype, "act_cargoCategory", null);
    __decorate([
        $mol_mem_key
    ], $scale_dash.prototype, "Cargo_category_content", null);
    __decorate([
        $mol_mem_key
    ], $scale_dash.prototype, "Cargo_category_labeler", null);
    __decorate([
        $mol_mem_key
    ], $scale_dash.prototype, "act_enteredMoment", null);
    __decorate([
        $mol_mem_key
    ], $scale_dash.prototype, "Date_enter_content", null);
    __decorate([
        $mol_mem_key
    ], $scale_dash.prototype, "Date_enter_labeler", null);
    __decorate([
        $mol_mem_key
    ], $scale_dash.prototype, "open_exit_form_current", null);
    __decorate([
        $mol_mem_key
    ], $scale_dash.prototype, "act_exit_text", null);
    __decorate([
        $mol_mem_key
    ], $scale_dash.prototype, "Act_options_pop", null);
    __decorate([
        $mol_mem_key
    ], $scale_dash.prototype, "Act_row", null);
    __decorate([
        $mol_mem
    ], $scale_dash.prototype, "Act_list", null);
    __decorate([
        $mol_mem
    ], $scale_dash.prototype, "Auto_list", null);
    __decorate([
        $mol_mem
    ], $scale_dash.prototype, "Bottom_row", null);
    $.$scale_dash = $scale_dash;
})($ || ($ = {}));
//scale/dash/-view.tree/dash.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const {} = $mol_style_func;
        $mol_style_define($scale_dash, {
            display: "flex",
            flexDirection: "column",
            flexGrow: "1",
            flexBasis: "40rem",
            Number_labeler: { padding: 0 },
            Control: { width: "50%" },
            Camera_list: { width: "50%" },
            Top_row_tools: {
                display: "flex",
                justifyContent: "flex-end",
                padding: "0 1rem",
            },
            Top_row_body: { display: "flex", flexWrap: "nowrap" },
            Btn_row: { padding: 0, marginTop: "1rem" },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//scale/dash/dash.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $scale_dash extends $.$scale_dash {
            expand_controls() {
                this.Top_row_body().dom_node().classList.toggle("_row_expanded");
            }
            expanded_controls(next) {
                return next;
            }
            pin_controls() {
                this.Top_row().dom_node().classList.toggle("_pinned");
            }
            open_enter_form() {
                $mol_state_arg.dict({ "": "dash", dash: "form_enter" });
            }
            open_exit_form(obj) {
                $mol_state_arg.dict({
                    "": "dash",
                    dash: "form_exit",
                });
            }
            open_exit_form_current(obj) {
                $mol_state_arg.dict({
                    "": "dash",
                    dash: "form_exit",
                    form_data: JSON.stringify({ act_id: obj.publicId }),
                });
            }
            act_list(reset) {
                return this.api()
                    .getActs({ status: $scale_modelActStatus.ON_TERRITORY })
                    .map((obj) => this.Act_row(obj));
            }
            act_id(obj) {
                return obj.publicId;
            }
            act_autoNumber(obj) {
                return obj.auto.number;
            }
            act_transporter(obj) {
                return obj.transporter.title;
            }
            act_payer(obj) {
                return obj.payer.title;
            }
            act_weightGross(obj) {
                return obj.weight.gross.toString();
            }
            act_cargoType(obj) {
                return obj.cargoType.title;
            }
            act_cargoCategory(obj) {
                return obj.wasteCategory.title;
            }
            act_enteredMoment(obj) {
                return obj.entryDateTime;
            }
            count() {
                return this.act_list().length;
            }
            act_table_title() {
                return `Авто на территории (${this.count()})`;
            }
            act_exit_text(obj) {
                return `Создать запись на выезд для ${obj.auto.number}`;
            }
        }
        __decorate([
            $mol_action
        ], $scale_dash.prototype, "expand_controls", null);
        __decorate([
            $mol_mem
        ], $scale_dash.prototype, "expanded_controls", null);
        __decorate([
            $mol_action
        ], $scale_dash.prototype, "pin_controls", null);
        __decorate([
            $mol_action
        ], $scale_dash.prototype, "open_enter_form", null);
        __decorate([
            $mol_action
        ], $scale_dash.prototype, "open_exit_form", null);
        __decorate([
            $mol_action
        ], $scale_dash.prototype, "open_exit_form_current", null);
        __decorate([
            $mol_mem
        ], $scale_dash.prototype, "act_list", null);
        __decorate([
            $mol_mem
        ], $scale_dash.prototype, "act_table_title", null);
        __decorate([
            $mol_mem_key
        ], $scale_dash.prototype, "act_exit_text", null);
        $$.$scale_dash = $scale_dash;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//scale/dash/dash.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_format extends $mol_string {
        allow() {
            return "0123456789";
        }
        hint() {
            return this.mask("0");
        }
        keyboard() {
            return "numeric";
        }
        mask(id) {
            return "";
        }
    }
    $.$mol_format = $mol_format;
})($ || ($ = {}));
//mol/format/-view.tree/format.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/format/format.view.css", "[mol_format] {\n\tfont-family: monospace;\n}\n");
})($ || ($ = {}));
//mol/format/-css/format.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_format extends $.$mol_format {
            selection([from, to] = [0, 0]) {
                const prev = $mol_wire_probe(() => this.selection());
                if (!prev)
                    return [0, 100];
                if (from !== to)
                    return [from, to];
                const allow = this.allow();
                const value = this.value_changed();
                const filtered = [...value].filter(letter => allow.includes(letter)).join('');
                const mask = this.mask(filtered);
                if ((prev?.[0] ?? 0) >= from)
                    return [from, to];
                const lastAllow = (value.length - [...value].reverse().findIndex(letter => allow.includes(letter))) % (value.length + 1);
                if (lastAllow < from) {
                    from = to = lastAllow;
                }
                while (mask[from] && mask[from] !== '_') {
                    ++from;
                    ++to;
                }
                return [from, to];
            }
            value_changed(next) {
                const allow = this.allow();
                const normalize = (val) => {
                    val = [...val].filter(letter => allow.includes(letter)).join('');
                    const letters = [...val].reverse();
                    return this.mask(val).replace(/_/gu, () => letters.pop() ?? '_') + letters.reverse().join('');
                };
                if (next !== undefined) {
                    next = normalize(next);
                    if ([...next].filter(letter => allow.includes(letter)).join('')) {
                        if (next.includes('_'))
                            return next;
                    }
                    else {
                        next = '';
                    }
                }
                return normalize(this.value(next));
            }
        }
        __decorate([
            $mol_mem
        ], $mol_format.prototype, "selection", null);
        __decorate([
            $mol_mem
        ], $mol_format.prototype, "value_changed", null);
        $$.$mol_format = $mol_format;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/format/format.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_dots_vertical extends $mol_icon {
        path() {
            return "M12,16C13.1,16 14,16.9 14,18C14,19.1 13.1,20 12,20C10.9,20 10,19.1 10,18C10,16.9 10.9,16 12,16M12,10C13.1,10 14,10.9 14,12C14,13.1 13.1,14 12,14C10.9,14 10,13.1 10,12C10,10.9 10.9,10 12,10M12,4C13.1,4 14,4.9 14,6C14,7.1 13.1,8 12,8C10.9,8 10,7.1 10,6C10,4.9 10.9,4 12,4Z";
        }
    }
    $.$mol_icon_dots_vertical = $mol_icon_dots_vertical;
})($ || ($ = {}));
//mol/icon/dots/vertical/-view.tree/vertical.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_select extends $mol_pick {
        dictionary(val) {
            if (val !== undefined)
                return val;
            return {};
        }
        options() {
            return [];
        }
        value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        option_label_default() {
            return "";
        }
        Option_row(id) {
            const obj = new this.$.$mol_button_minor();
            obj.event_click = (event) => this.event_select(id, event);
            obj.sub = () => this.option_content(id);
            return obj;
        }
        No_options() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.no_options_message()
            ];
            return obj;
        }
        plugins() {
            return [
                ...super.plugins(),
                this.Nav()
            ];
        }
        hint() {
            return this.$.$mol_locale.text('$mol_select_hint');
        }
        bubble_content() {
            return [
                this.Filter(),
                this.Bubble_pane()
            ];
        }
        Filter() {
            const obj = new this.$.$mol_string();
            obj.value = (val) => this.filter_pattern(val);
            obj.hint = () => this.$.$mol_locale.text('$mol_select_Filter_hint');
            obj.submit = (event) => this.submit(event);
            obj.enabled = () => this.enabled();
            return obj;
        }
        Trigger_icon() {
            const obj = new this.$.$mol_icon_dots_vertical();
            return obj;
        }
        event_select(id, event) {
            if (event !== undefined)
                return event;
            return null;
        }
        option_label(id) {
            return "";
        }
        filter_pattern(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Option_label(id) {
            const obj = new this.$.$mol_dimmer();
            obj.haystack = () => this.option_label(id);
            obj.needle = () => this.filter_pattern();
            return obj;
        }
        option_content(id) {
            return [
                this.Option_label(id)
            ];
        }
        no_options_message() {
            return this.$.$mol_locale.text('$mol_select_no_options_message');
        }
        nav_components() {
            return [];
        }
        option_focused(component) {
            if (component !== undefined)
                return component;
            return null;
        }
        nav_cycle(val) {
            if (val !== undefined)
                return val;
            return true;
        }
        Nav() {
            const obj = new this.$.$mol_nav();
            obj.keys_y = () => this.nav_components();
            obj.current_y = (component) => this.option_focused(component);
            obj.cycle = (val) => this.nav_cycle(val);
            return obj;
        }
        menu_content() {
            return [];
        }
        Menu() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.menu_content();
            return obj;
        }
        Bubble_pane() {
            const obj = new this.$.$mol_scroll();
            obj.sub = () => [
                this.Menu()
            ];
            return obj;
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        enabled() {
            return true;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "dictionary", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "value", null);
    __decorate([
        $mol_mem_key
    ], $mol_select.prototype, "Option_row", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "No_options", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "Filter", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "Trigger_icon", null);
    __decorate([
        $mol_mem_key
    ], $mol_select.prototype, "event_select", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "filter_pattern", null);
    __decorate([
        $mol_mem_key
    ], $mol_select.prototype, "Option_label", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "option_focused", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "nav_cycle", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "Nav", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "Menu", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "Bubble_pane", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "submit", null);
    $.$mol_select = $mol_select;
})($ || ($ = {}));
//mol/select/-view.tree/select.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/select/select.view.css", "[mol_select] {\n\tdisplay: flex;\n\tword-break: normal;\n\talign-self: flex-start;\n}\n\n[mol_select_option_row] {\n\tmin-width: 100%;\n\tpadding: 0;\n\tjustify-content: flex-start;\n}\n\n[mol_select_bubble] {\n\tmin-width: 100%;\n}\n\n[mol_select_filter] {\n\tflex: 1 0 auto;\n\talign-self: stretch;\n}\n\n[mol_select_option_label] {\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tmin-height: 1.5em;\n\tdisplay: block;\n\twhite-space: nowrap;\n}\n\n[mol_select_clear_option_content] {\n\tpadding: .5em 1rem .5rem 0;\n\ttext-align: left;\n\tbox-shadow: var(--mol_theme_line);\n\tflex: 1 0 auto;\n}\n\n[mol_select_no_options] {\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tdisplay: block;\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_select_trigger] {\n\tpadding: 0;\n\tflex: 1 1 auto;\n\tdisplay: flex;\n}\n\n[mol_select_trigger] > * {\n\tmargin-right: -1rem;\n}\n\n[mol_select_trigger] > *:last-child {\n\tmargin-right: 0;\n}\n\n[mol_select_menu] {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n");
})($ || ($ = {}));
//mol/select/-css/select.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_select extends $.$mol_select {
            filter_pattern(next) {
                this.focused();
                return next || '';
            }
            open() {
                this.showed(true);
            }
            options() {
                return Object.keys(this.dictionary());
            }
            options_filtered() {
                let options = this.options();
                options = options.filter($mol_match_text(this.filter_pattern(), (id) => [this.option_label(id)]));
                const index = options.indexOf(this.value());
                if (index >= 0)
                    options = [...options.slice(0, index), ...options.slice(index + 1)];
                return options;
            }
            option_label(id) {
                const value = this.dictionary()[id];
                return (value == null ? id : value) || this.option_label_default();
            }
            option_rows() {
                return this.options_filtered().map((option) => this.Option_row(option));
            }
            option_focused(component) {
                if (component == null) {
                    for (let comp of this.nav_components()) {
                        if (comp && comp.focused())
                            return comp;
                    }
                    return null;
                }
                if (this.showed()) {
                    component.focused(true);
                }
                return component;
            }
            event_select(id, event) {
                this.value(id);
                this.showed(false);
                event?.preventDefault();
            }
            nav_components() {
                if (this.options().length > 1 && this.Filter()) {
                    return [this.Filter(), ...this.option_rows()];
                }
                else {
                    return this.option_rows();
                }
            }
            trigger_content() {
                return [
                    ...this.option_content(this.value()),
                    this.Trigger_icon(),
                ];
            }
            menu_content() {
                return [
                    ...this.option_rows(),
                    ...(this.options_filtered().length === 0) ? [this.No_options()] : []
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "filter_pattern", null);
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "options", null);
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "options_filtered", null);
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "option_focused", null);
        $$.$mol_select = $mol_select;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/select/select.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_form_group extends $mol_view {
    }
    $.$mol_form_group = $mol_form_group;
})($ || ($ = {}));
//mol/form/group/-view.tree/group.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/form/group/group.view.css", "[mol_form_group] {\n\tflex-wrap: wrap;\n\tgap: var(--mol_gap_block);\n}\n\n[mol_form_group] > * {\n\tflex: 1 1 18rem;\n}\n");
})($ || ($ = {}));
//mol/form/group/-css/group.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_status extends $mol_view {
        status() {
            return this.title();
        }
        minimal_height() {
            return 24;
        }
        minimal_width() {
            return 0;
        }
        sub() {
            return [
                this.message()
            ];
        }
        message() {
            return "";
        }
    }
    $.$mol_status = $mol_status;
})($ || ($ = {}));
//mol/status/-view.tree/status.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/status/status.view.css", "[mol_status] {\n\tpadding: var(--mol_gap_text);\n\tborder-radius: var(--mol_gap_round);\n\tdisplay: block;\n}\n\n[mol_status]:not([mol_view_error=\"Promise\"]) {\n\tcolor: var(--mol_theme_focus);\n}\n\n[mol_status]:not([mol_view_error=\"Promise\"]):empty {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));
//mol/status/-css/status.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_status extends $.$mol_status {
            message() {
                try {
                    return this.status() ?? null;
                }
                catch (error) {
                    if (error instanceof Promise)
                        $mol_fail_hidden(error);
                    return error.message;
                }
            }
        }
        $$.$mol_status = $mol_status;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/status/status.view.ts
;
"use strict";
var $;
(function ($) {
    class $scale_form_enter extends $mol_list {
        default_values() {
            return {
                payer: "Выберите оператора",
                transporter: "Выберите перевозчика",
                cargo_type: "Выберите вид груза",
                cargo_category: "Выберите категорию груза"
            };
        }
        api() {
            const obj = new this.$.$scale_api();
            return obj;
        }
        dash() {
            const obj = new this.$.$scale_dash();
            return obj;
        }
        attr() {
            return {
                ...super.attr(),
                auto_relations: this.auto_relations(),
                auto_related: this.auto_related()
            };
        }
        rows() {
            return [
                this.Form()
            ];
        }
        auto_relations() {
            return null;
        }
        auto_related() {
            return null;
        }
        weight() {
            return this.Centrifuge().weight_channel();
        }
        autoNumber_IN() {
            return this.Centrifuge().autoNumber_channel_IN();
        }
        Centrifuge() {
            const obj = new this.$.$scale_centrifuge();
            return obj;
        }
        weight_bid() {
            return "";
        }
        weight_formatted() {
            return "";
        }
        Weight_control() {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => this.weight_formatted();
            return obj;
        }
        Weight_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Текущий вес";
            obj.bid = () => this.weight_bid();
            obj.Content = () => this.Weight_control();
            return obj;
        }
        auto_number_bid() {
            return "";
        }
        Auto_number_control() {
            const obj = new this.$.$mol_format();
            obj.allow = () => "авсденкмортхуАВСДЕНКМОРТХУ01234567890";
            obj.mask = () => "|_|___|__|___|";
            obj.value = (val) => this.auto_number(val);
            return obj;
        }
        Auto_number_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Гос. номер";
            obj.bid = () => this.auto_number_bid();
            obj.Content = () => this.Auto_number_control();
            return obj;
        }
        payer_bid() {
            return "";
        }
        payer(val) {
            if (val !== undefined)
                return val;
            return "Выберите оператора";
        }
        payers_options() {
            return {};
        }
        Payer_control() {
            const obj = new this.$.$mol_select();
            obj.value = (val) => this.payer(val);
            obj.dictionary = () => this.payers_options();
            obj.hint = () => "Выберите";
            return obj;
        }
        Payer_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Оператор";
            obj.bid = () => this.payer_bid();
            obj.Content = () => this.Payer_control();
            return obj;
        }
        transporter_bid() {
            return "";
        }
        transporter(val) {
            if (val !== undefined)
                return val;
            return "Выберите перевозчика";
        }
        transporters_options() {
            return {};
        }
        Transporter_control() {
            const obj = new this.$.$mol_select();
            obj.value = (val) => this.transporter(val);
            obj.dictionary = () => this.transporters_options();
            return obj;
        }
        Transporter_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Перевозчик";
            obj.bid = () => this.transporter_bid();
            obj.Content = () => this.Transporter_control();
            return obj;
        }
        cargo_type_bid() {
            return "";
        }
        cargo_type(val) {
            if (val !== undefined)
                return val;
            return "Выберите вид груза";
        }
        cargoTypes_options() {
            return {};
        }
        Cargo_type_control() {
            const obj = new this.$.$mol_select();
            obj.value = (val) => this.cargo_type(val);
            obj.dictionary = () => this.cargoTypes_options();
            return obj;
        }
        Cargo_type_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Вид груза";
            obj.bid = () => this.cargo_type_bid();
            obj.Content = () => this.Cargo_type_control();
            return obj;
        }
        cargo_category_bid() {
            return "";
        }
        cargo_category(val) {
            if (val !== undefined)
                return val;
            return "Выберите категорию груза";
        }
        cargoCategories_options() {
            return {};
        }
        Color() {
            const obj = new this.$.$mol_select();
            obj.value = (val) => this.cargo_category(val);
            obj.dictionary = () => this.cargoCategories_options();
            return obj;
        }
        Category_cargo_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Категория груза";
            obj.bid = () => this.cargo_category_bid();
            obj.Content = () => this.Color();
            return obj;
        }
        Names() {
            const obj = new this.$.$mol_form_group();
            obj.sub = () => [
                this.Weight_field(),
                this.Auto_number_field(),
                this.Payer_field(),
                this.Transporter_field(),
                this.Cargo_type_field(),
                this.Category_cargo_field()
            ];
            return obj;
        }
        enter_submit(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        Submit() {
            const obj = new this.$.$mol_button_major();
            obj.title = () => "Создать запись на въезд";
            obj.click = (val) => this.enter_submit(val);
            obj.enabled = () => this.submit_allowed();
            return obj;
        }
        result(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Result() {
            const obj = new this.$.$mol_status();
            obj.message = () => this.result();
            return obj;
        }
        submit_allowed() {
            return this.Form().submit_allowed();
        }
        Form() {
            const obj = new this.$.$mol_form();
            obj.body = () => [
                this.Centrifuge(),
                this.Names()
            ];
            obj.submit = (val) => this.enter_submit(val);
            obj.buttons = () => [
                this.Submit(),
                this.Result()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $scale_form_enter.prototype, "api", null);
    __decorate([
        $mol_mem
    ], $scale_form_enter.prototype, "dash", null);
    __decorate([
        $mol_mem
    ], $scale_form_enter.prototype, "Centrifuge", null);
    __decorate([
        $mol_mem
    ], $scale_form_enter.prototype, "Weight_control", null);
    __decorate([
        $mol_mem
    ], $scale_form_enter.prototype, "Weight_field", null);
    __decorate([
        $mol_mem
    ], $scale_form_enter.prototype, "Auto_number_control", null);
    __decorate([
        $mol_mem
    ], $scale_form_enter.prototype, "Auto_number_field", null);
    __decorate([
        $mol_mem
    ], $scale_form_enter.prototype, "payer", null);
    __decorate([
        $mol_mem
    ], $scale_form_enter.prototype, "Payer_control", null);
    __decorate([
        $mol_mem
    ], $scale_form_enter.prototype, "Payer_field", null);
    __decorate([
        $mol_mem
    ], $scale_form_enter.prototype, "transporter", null);
    __decorate([
        $mol_mem
    ], $scale_form_enter.prototype, "Transporter_control", null);
    __decorate([
        $mol_mem
    ], $scale_form_enter.prototype, "Transporter_field", null);
    __decorate([
        $mol_mem
    ], $scale_form_enter.prototype, "cargo_type", null);
    __decorate([
        $mol_mem
    ], $scale_form_enter.prototype, "Cargo_type_control", null);
    __decorate([
        $mol_mem
    ], $scale_form_enter.prototype, "Cargo_type_field", null);
    __decorate([
        $mol_mem
    ], $scale_form_enter.prototype, "cargo_category", null);
    __decorate([
        $mol_mem
    ], $scale_form_enter.prototype, "Color", null);
    __decorate([
        $mol_mem
    ], $scale_form_enter.prototype, "Category_cargo_field", null);
    __decorate([
        $mol_mem
    ], $scale_form_enter.prototype, "Names", null);
    __decorate([
        $mol_mem
    ], $scale_form_enter.prototype, "enter_submit", null);
    __decorate([
        $mol_mem
    ], $scale_form_enter.prototype, "Submit", null);
    __decorate([
        $mol_mem
    ], $scale_form_enter.prototype, "result", null);
    __decorate([
        $mol_mem
    ], $scale_form_enter.prototype, "Result", null);
    __decorate([
        $mol_mem
    ], $scale_form_enter.prototype, "Form", null);
    $.$scale_form_enter = $scale_form_enter;
})($ || ($ = {}));
//scale/form/enter/-view.tree/enter.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($scale_form_enter, {
            Auto_number_control: {
                textTransform: "uppercase",
                "::placeholder": {
                    textTransform: "initial",
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//scale/form/enter/enter.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $scale_form_enter extends $.$scale_form_enter {
            payers_options() {
                if (this.auto_related() === true && this.auto_relations()?.payers) {
                    return this.auto_relations()?.payers;
                }
                else if (this.auto_related() === false) {
                    const data = this.api().getOrganizations({
                        status: $scale_modelOrganizationStatus.ACTIVE,
                        role: $scale_modelOrganizationRole.PAYER,
                    });
                    const result = data.reduce((acc, curr) => ((acc[curr.public_id] = curr.title), acc), {});
                    return result;
                }
                return {};
            }
            payer(next) {
                if (next)
                    return next;
                if (this.auto_related() &&
                    this.auto_relations() &&
                    Object.keys(this.auto_relations()?.payers).length) {
                    return Object.keys(this.auto_relations()?.payers)[0];
                }
                return "Выберите оператора";
            }
            transporter(next) {
                if (next)
                    return next;
                if (this.auto_related() &&
                    this.auto_relations() &&
                    Object.keys(this.auto_relations()?.transporters).length) {
                    return Object.keys(this.auto_relations()?.transporters)[0];
                }
                return "Выберите перевозчика";
            }
            transporters_options() {
                if (this.auto_related() === true && this.auto_relations()?.transporters) {
                    return this.auto_relations()?.transporters;
                }
                else if (this.auto_related() === false) {
                    const data = this.api().getOrganizations({
                        status: $scale_modelOrganizationStatus.ACTIVE,
                        role: $scale_modelOrganizationRole.TRANSPORTER,
                    });
                    const result = data.reduce((acc, curr) => ((acc[curr.public_id] = curr.title), acc), {});
                    return result;
                }
                return {};
            }
            cargoTypes_options() {
                const data = this.api().getCargoTypes();
                const result = data.reduce((acc, curr) => ((acc[curr.publicId] = curr.title), acc), {});
                return result;
            }
            cargoCategories_options() {
                const data = this.api().getCargoCategories();
                const result = data.reduce((acc, curr) => ((acc[curr.publicId] = curr.title), acc), {});
                return result;
            }
            auto_relations() {
                const number = this.auto_number();
                if (number && this.auto_number_bid() === "") {
                    try {
                        const relations = this.api().getAutoRelations(number.replaceAll("|", ""));
                        this.auto_related(true);
                        const data = {
                            payers: relations.payers.map((p) => ({
                                ...p,
                            })),
                            transporters: relations.transporters.map((t) => ({
                                ...t,
                                public_id: t.publicId,
                            })),
                        };
                        const result = {
                            payers: data.payers.reduce((acc, curr) => ((acc[curr.public_id] = curr.title), acc), {}),
                            transporters: data.transporters.reduce((acc, curr) => ((acc[curr.public_id] = curr.title), acc), {}),
                        };
                        return result;
                    }
                    catch (err) {
                        this.auto_related(false);
                    }
                }
            }
            auto_related(next) {
                return next ?? false;
            }
            weight_formatted() {
                return `${this.weight() || 0} кг`;
            }
            auto_number_bid(next) {
                if (next !== undefined)
                    return next;
                if (!this.auto_number() || !this.auto_number().trim().length) {
                    return "*";
                }
                else if (!/^[А-Я]{1}[0-9]{3}[А-Я]{2}[0-9]{2,3}$/.test(this.auto_number().trim().replaceAll("|", ""))) {
                    return "Неверный формат номера";
                }
                return "";
            }
            payer_bid(next) {
                if (next !== undefined)
                    return next;
                if (!this.payer() || this.payer() === this.default_values().payer) {
                    return "*";
                }
                return "";
            }
            transporter_bid(next) {
                if (next !== undefined)
                    return next;
                if (!this.transporter() ||
                    this.transporter() === this.default_values().transporter) {
                    return "*";
                }
                return "";
            }
            cargo_type_bid(next) {
                if (next !== undefined)
                    return next;
                if (!this.cargo_type() ||
                    this.cargo_type() === this.default_values().cargo_type) {
                    return "*";
                }
                return "";
            }
            cargo_category_bid(next) {
                if (next !== undefined)
                    return next;
                if (!this.cargo_category() ||
                    this.cargo_category() === this.default_values().cargo_category) {
                    return "*";
                }
                return "";
            }
            enter_submit() {
                const response = this.api().createAct({
                    autoNumber: this.auto_number().trim().replaceAll("|", ""),
                    payerPublicId: this.payer(),
                    transporterPublicId: this.transporter(),
                    cargoTypePublicId: this.cargo_type(),
                    wasteCategoryPublicId: this.cargo_category(),
                    comment: "",
                    weight: this.weight(),
                    apiClientSecretKey: "123456",
                });
                this.dash().act_list("reset");
                console.log("resss", response);
                $mol_state_arg.dict({ "": "dash" });
                new $mol_after_timeout(200, () => window.location.reload());
            }
            count() {
                return this.dash().act_list().length;
            }
            auto_number(next) {
                console.log("aaaa", next);
                return next?.toUpperCase() ?? this.autoNumber_IN() ?? "";
            }
            weight() {
                return $mol_state_local.value("centrifuge_weight_data");
            }
            autoNumber_IN() {
                return $mol_state_local.value("centrifuge_autoNumber_IN_data");
            }
        }
        __decorate([
            $mol_mem
        ], $scale_form_enter.prototype, "payers_options", null);
        __decorate([
            $mol_mem
        ], $scale_form_enter.prototype, "payer", null);
        __decorate([
            $mol_mem
        ], $scale_form_enter.prototype, "transporter", null);
        __decorate([
            $mol_mem
        ], $scale_form_enter.prototype, "transporters_options", null);
        __decorate([
            $mol_mem
        ], $scale_form_enter.prototype, "cargoTypes_options", null);
        __decorate([
            $mol_mem
        ], $scale_form_enter.prototype, "cargoCategories_options", null);
        __decorate([
            $mol_mem
        ], $scale_form_enter.prototype, "auto_relations", null);
        __decorate([
            $mol_mem
        ], $scale_form_enter.prototype, "auto_related", null);
        __decorate([
            $mol_mem
        ], $scale_form_enter.prototype, "weight_formatted", null);
        __decorate([
            $mol_mem
        ], $scale_form_enter.prototype, "auto_number_bid", null);
        __decorate([
            $mol_mem
        ], $scale_form_enter.prototype, "payer_bid", null);
        __decorate([
            $mol_mem
        ], $scale_form_enter.prototype, "transporter_bid", null);
        __decorate([
            $mol_mem
        ], $scale_form_enter.prototype, "cargo_type_bid", null);
        __decorate([
            $mol_mem
        ], $scale_form_enter.prototype, "cargo_category_bid", null);
        __decorate([
            $mol_action
        ], $scale_form_enter.prototype, "enter_submit", null);
        __decorate([
            $mol_mem
        ], $scale_form_enter.prototype, "auto_number", null);
        $$.$scale_form_enter = $scale_form_enter;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//scale/form/enter/enter.view.ts
;
"use strict";
var $;
(function ($) {
    class $scale_form_exit extends $mol_list {
        default_values() {
            return {
                act: "Выберите гос. номер"
            };
        }
        api() {
            const obj = new this.$.$scale_api();
            return obj;
        }
        rows() {
            return [
                this.Form()
            ];
        }
        weight() {
            return this.Centrifuge().weight_channel();
        }
        Centrifuge() {
            const obj = new this.$.$scale_centrifuge();
            return obj;
        }
        weight_bid() {
            return "";
        }
        weight_formatted() {
            return "0";
        }
        Weight_control() {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => this.weight_formatted();
            return obj;
        }
        Weight_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Текущий вес";
            obj.bid = () => this.weight_bid();
            obj.Content = () => this.Weight_control();
            return obj;
        }
        act_bid() {
            return "";
        }
        act(val) {
            if (val !== undefined)
                return val;
            return "Выберите гос. номер";
        }
        acts_options() {
            return {};
        }
        Act_control() {
            const obj = new this.$.$mol_select();
            obj.value = (val) => this.act(val);
            obj.dictionary = () => this.acts_options();
            obj.hint = () => "Выберите";
            obj.no_options_message = () => "Нет авто на территории";
            return obj;
        }
        Auto_number_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => "Гос. номер";
            obj.bid = () => this.act_bid();
            obj.Content = () => this.Act_control();
            return obj;
        }
        Names() {
            const obj = new this.$.$mol_form_group();
            obj.sub = () => [
                this.Weight_field(),
                this.Auto_number_field()
            ];
            return obj;
        }
        exit_submit(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        Submit() {
            const obj = new this.$.$mol_button_major();
            obj.title = () => "Создать запись на выезд";
            obj.click = (val) => this.exit_submit(val);
            obj.enabled = () => this.submit_allowed();
            return obj;
        }
        result(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Result() {
            const obj = new this.$.$mol_status();
            obj.message = () => this.result();
            return obj;
        }
        submit_allowed() {
            return this.Form().submit_allowed();
        }
        Form() {
            const obj = new this.$.$mol_form();
            obj.body = () => [
                this.Centrifuge(),
                this.Names()
            ];
            obj.submit = (val) => this.exit_submit(val);
            obj.buttons = () => [
                this.Submit(),
                this.Result()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $scale_form_exit.prototype, "api", null);
    __decorate([
        $mol_mem
    ], $scale_form_exit.prototype, "Centrifuge", null);
    __decorate([
        $mol_mem
    ], $scale_form_exit.prototype, "Weight_control", null);
    __decorate([
        $mol_mem
    ], $scale_form_exit.prototype, "Weight_field", null);
    __decorate([
        $mol_mem
    ], $scale_form_exit.prototype, "act", null);
    __decorate([
        $mol_mem
    ], $scale_form_exit.prototype, "Act_control", null);
    __decorate([
        $mol_mem
    ], $scale_form_exit.prototype, "Auto_number_field", null);
    __decorate([
        $mol_mem
    ], $scale_form_exit.prototype, "Names", null);
    __decorate([
        $mol_mem
    ], $scale_form_exit.prototype, "exit_submit", null);
    __decorate([
        $mol_mem
    ], $scale_form_exit.prototype, "Submit", null);
    __decorate([
        $mol_mem
    ], $scale_form_exit.prototype, "result", null);
    __decorate([
        $mol_mem
    ], $scale_form_exit.prototype, "Result", null);
    __decorate([
        $mol_mem
    ], $scale_form_exit.prototype, "Form", null);
    $.$scale_form_exit = $scale_form_exit;
})($ || ($ = {}));
//scale/form/exit/-view.tree/exit.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $scale_form_exit extends $.$scale_form_exit {
            weight_formatted() {
                return `${this.weight() || 0} кг`;
            }
            act_bid(next) {
                if (next !== undefined)
                    return next;
                if (!this.act() || this.act() === this.default_values().act) {
                    return "*";
                }
                return "";
            }
            act(next) {
                if (next)
                    return next?.toUpperCase();
                if (this.autoNumber_OUT()) {
                    const index = Object.values(this.acts_options()).indexOf(this.autoNumber_OUT());
                    if (index) {
                        return Object.values(this.acts_options())[index];
                    }
                }
                return "";
            }
            acts_options() {
                const data = this.api().getActs({
                    status: $scale_modelActStatus.ON_TERRITORY,
                });
                const result = data.reduce((acc, curr) => ((acc[curr.publicId] = curr.auto.number), acc), {});
                return result;
            }
            exit_submit() {
                this.api().closeAct({
                    publicId: this.act(),
                    comment: "",
                    weight: this.weight(),
                    apiClientSecretKey: "123456",
                });
                $mol_state_arg.dict({ "": "dash" });
                new $mol_after_timeout(200, () => window.location.reload());
            }
            autoNumber_OUT() {
                return $mol_state_local.value("centrifuge_autoNumber_OUT_data");
            }
            auto() {
                const initialFormData = JSON.parse($mol_state_arg.value("form_data"));
                if (initialFormData?.act_id) {
                    this.act(initialFormData?.act_id);
                }
            }
        }
        __decorate([
            $mol_mem
        ], $scale_form_exit.prototype, "weight_formatted", null);
        __decorate([
            $mol_mem
        ], $scale_form_exit.prototype, "act_bid", null);
        __decorate([
            $mol_mem
        ], $scale_form_exit.prototype, "act", null);
        $$.$scale_form_exit = $scale_form_exit;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//scale/form/exit/exit.view.ts
;
"use strict";
var $;
(function ($) {
    class $scale_stats extends $mol_list {
        default_values() {
            return {
                payer: "Все операторы",
                transporter: "Все перевозчики",
                cargo_type: "Все виды груза",
                cargo_category: "Все категории груза"
            };
        }
        api() {
            const obj = new this.$.$scale_api();
            return obj;
        }
        rows() {
            return [
                this.Filter(),
                this.Acts()
            ];
        }
        number_bid() {
            return "";
        }
        auto_number(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Number_control() {
            const obj = new this.$.$mol_string();
            obj.value = (val) => this.auto_number(val);
            obj.hint = () => "Введите гос. номер";
            return obj;
        }
        Number_field() {
            const obj = new this.$.$mol_form_field();
            obj.bid = () => this.number_bid();
            obj.Content = () => this.Number_control();
            return obj;
        }
        payer_bid() {
            return "";
        }
        payer(val) {
            if (val !== undefined)
                return val;
            return "Все операторы";
        }
        payers_options() {
            return {};
        }
        Payer_control() {
            const obj = new this.$.$mol_select();
            obj.value = (val) => this.payer(val);
            obj.dictionary = () => this.payers_options();
            obj.hint = () => "Выберите";
            return obj;
        }
        Payer_field() {
            const obj = new this.$.$mol_form_field();
            obj.bid = () => this.payer_bid();
            obj.Content = () => this.Payer_control();
            return obj;
        }
        transporter_bid() {
            return "";
        }
        transporter(val) {
            if (val !== undefined)
                return val;
            return "Все перевозчики";
        }
        transporters_options() {
            return {};
        }
        Transporter_control() {
            const obj = new this.$.$mol_select();
            obj.value = (val) => this.transporter(val);
            obj.dictionary = () => this.transporters_options();
            return obj;
        }
        Transporter_field() {
            const obj = new this.$.$mol_form_field();
            obj.bid = () => this.transporter_bid();
            obj.Content = () => this.Transporter_control();
            return obj;
        }
        cargo_type_bid() {
            return "";
        }
        cargo_type(val) {
            if (val !== undefined)
                return val;
            return "Все виды груза";
        }
        cargoTypes_options() {
            return {};
        }
        Cargo_type_control() {
            const obj = new this.$.$mol_select();
            obj.value = (val) => this.cargo_type(val);
            obj.dictionary = () => this.cargoTypes_options();
            return obj;
        }
        Cargo_type_field() {
            const obj = new this.$.$mol_form_field();
            obj.bid = () => this.cargo_type_bid();
            obj.Content = () => this.Cargo_type_control();
            return obj;
        }
        cargo_category_bid() {
            return "";
        }
        cargo_category(val) {
            if (val !== undefined)
                return val;
            return "Все категории груза";
        }
        cargoCategories_options() {
            return {};
        }
        Color() {
            const obj = new this.$.$mol_select();
            obj.value = (val) => this.cargo_category(val);
            obj.dictionary = () => this.cargoCategories_options();
            return obj;
        }
        Category_cargo_field() {
            const obj = new this.$.$mol_form_field();
            obj.bid = () => this.cargo_category_bid();
            obj.Content = () => this.Color();
            return obj;
        }
        Names() {
            const obj = new this.$.$mol_form_group();
            obj.sub = () => [
                this.Number_field(),
                this.Payer_field(),
                this.Transporter_field(),
                this.Cargo_type_field(),
                this.Category_cargo_field()
            ];
            return obj;
        }
        Filter_form() {
            const obj = new this.$.$mol_form();
            obj.body = () => [
                this.Names()
            ];
            return obj;
        }
        Filter() {
            const obj = new this.$.$mol_section();
            obj.title = () => "Фильтры";
            obj.content = () => [
                this.Filter_form()
            ];
            return obj;
        }
        act_table_title() {
            return "Список актов";
        }
        act_autoNumber(id, next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Number_content(id) {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => this.act_autoNumber(id);
            return obj;
        }
        Number_labeler(id) {
            const obj = new this.$.$mol_labeler();
            obj.title = () => "Гос. номер";
            obj.Content = () => this.Number_content(id);
            return obj;
        }
        act_transporter(id, next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Transporter_content(id) {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => this.act_transporter(id);
            return obj;
        }
        Transporter_labeler(id) {
            const obj = new this.$.$mol_labeler();
            obj.title = () => "Перевозчик";
            obj.Content = () => this.Transporter_content(id);
            return obj;
        }
        act_weightGross(id, next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Weight_gross_content(id) {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => this.act_weightGross(id);
            return obj;
        }
        Weight_gross_labeler(id) {
            const obj = new this.$.$mol_labeler();
            obj.title = () => "Брутто (кг)";
            obj.Content = () => this.Weight_gross_content(id);
            return obj;
        }
        act_cargoType(id, next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Cargo_type_content(id) {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => this.act_cargoType(id);
            return obj;
        }
        Cargo_type_labeler(id) {
            const obj = new this.$.$mol_labeler();
            obj.title = () => "Вид груза";
            obj.Content = () => this.Cargo_type_content(id);
            return obj;
        }
        act_cargoCategory(id, next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Cargo_category_content(id) {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => this.act_cargoCategory(id);
            return obj;
        }
        Cargo_category_labeler(id) {
            const obj = new this.$.$mol_labeler();
            obj.title = () => "Категория";
            obj.Content = () => this.Cargo_category_content(id);
            return obj;
        }
        act_enteredMoment(id, next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Date_enter_content(id) {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => this.act_enteredMoment(id);
            return obj;
        }
        Date_enter_labeler(id) {
            const obj = new this.$.$mol_labeler();
            obj.title = () => "Дата и время въезда";
            obj.Content = () => this.Date_enter_content(id);
            return obj;
        }
        act_exitedMoment(id, next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Date_exit_content(id) {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => this.act_exitedMoment(id);
            return obj;
        }
        Date_exit_labeler(id) {
            const obj = new this.$.$mol_labeler();
            obj.title = () => "Дата и время выезда";
            obj.Content = () => this.Date_exit_content(id);
            return obj;
        }
        Act_row(id) {
            const obj = new this.$.$mol_row();
            obj.minimal_height = () => 100;
            obj.minimal_width = () => 200;
            obj.sub = () => [
                this.Number_labeler(id),
                this.Transporter_labeler(id),
                this.Weight_gross_labeler(id),
                this.Cargo_type_labeler(id),
                this.Cargo_category_labeler(id),
                this.Date_enter_labeler(id),
                this.Date_exit_labeler(id)
            ];
            return obj;
        }
        act_list() {
            return [
                this.Act_row("0")
            ];
        }
        Act_list() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.act_list();
            return obj;
        }
        Acts() {
            const obj = new this.$.$mol_section();
            obj.title = () => this.act_table_title();
            obj.content = () => [
                this.Act_list()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $scale_stats.prototype, "api", null);
    __decorate([
        $mol_mem
    ], $scale_stats.prototype, "auto_number", null);
    __decorate([
        $mol_mem
    ], $scale_stats.prototype, "Number_control", null);
    __decorate([
        $mol_mem
    ], $scale_stats.prototype, "Number_field", null);
    __decorate([
        $mol_mem
    ], $scale_stats.prototype, "payer", null);
    __decorate([
        $mol_mem
    ], $scale_stats.prototype, "Payer_control", null);
    __decorate([
        $mol_mem
    ], $scale_stats.prototype, "Payer_field", null);
    __decorate([
        $mol_mem
    ], $scale_stats.prototype, "transporter", null);
    __decorate([
        $mol_mem
    ], $scale_stats.prototype, "Transporter_control", null);
    __decorate([
        $mol_mem
    ], $scale_stats.prototype, "Transporter_field", null);
    __decorate([
        $mol_mem
    ], $scale_stats.prototype, "cargo_type", null);
    __decorate([
        $mol_mem
    ], $scale_stats.prototype, "Cargo_type_control", null);
    __decorate([
        $mol_mem
    ], $scale_stats.prototype, "Cargo_type_field", null);
    __decorate([
        $mol_mem
    ], $scale_stats.prototype, "cargo_category", null);
    __decorate([
        $mol_mem
    ], $scale_stats.prototype, "Color", null);
    __decorate([
        $mol_mem
    ], $scale_stats.prototype, "Category_cargo_field", null);
    __decorate([
        $mol_mem
    ], $scale_stats.prototype, "Names", null);
    __decorate([
        $mol_mem
    ], $scale_stats.prototype, "Filter_form", null);
    __decorate([
        $mol_mem
    ], $scale_stats.prototype, "Filter", null);
    __decorate([
        $mol_mem_key
    ], $scale_stats.prototype, "act_autoNumber", null);
    __decorate([
        $mol_mem_key
    ], $scale_stats.prototype, "Number_content", null);
    __decorate([
        $mol_mem_key
    ], $scale_stats.prototype, "Number_labeler", null);
    __decorate([
        $mol_mem_key
    ], $scale_stats.prototype, "act_transporter", null);
    __decorate([
        $mol_mem_key
    ], $scale_stats.prototype, "Transporter_content", null);
    __decorate([
        $mol_mem_key
    ], $scale_stats.prototype, "Transporter_labeler", null);
    __decorate([
        $mol_mem_key
    ], $scale_stats.prototype, "act_weightGross", null);
    __decorate([
        $mol_mem_key
    ], $scale_stats.prototype, "Weight_gross_content", null);
    __decorate([
        $mol_mem_key
    ], $scale_stats.prototype, "Weight_gross_labeler", null);
    __decorate([
        $mol_mem_key
    ], $scale_stats.prototype, "act_cargoType", null);
    __decorate([
        $mol_mem_key
    ], $scale_stats.prototype, "Cargo_type_content", null);
    __decorate([
        $mol_mem_key
    ], $scale_stats.prototype, "Cargo_type_labeler", null);
    __decorate([
        $mol_mem_key
    ], $scale_stats.prototype, "act_cargoCategory", null);
    __decorate([
        $mol_mem_key
    ], $scale_stats.prototype, "Cargo_category_content", null);
    __decorate([
        $mol_mem_key
    ], $scale_stats.prototype, "Cargo_category_labeler", null);
    __decorate([
        $mol_mem_key
    ], $scale_stats.prototype, "act_enteredMoment", null);
    __decorate([
        $mol_mem_key
    ], $scale_stats.prototype, "Date_enter_content", null);
    __decorate([
        $mol_mem_key
    ], $scale_stats.prototype, "Date_enter_labeler", null);
    __decorate([
        $mol_mem_key
    ], $scale_stats.prototype, "act_exitedMoment", null);
    __decorate([
        $mol_mem_key
    ], $scale_stats.prototype, "Date_exit_content", null);
    __decorate([
        $mol_mem_key
    ], $scale_stats.prototype, "Date_exit_labeler", null);
    __decorate([
        $mol_mem_key
    ], $scale_stats.prototype, "Act_row", null);
    __decorate([
        $mol_mem
    ], $scale_stats.prototype, "Act_list", null);
    __decorate([
        $mol_mem
    ], $scale_stats.prototype, "Acts", null);
    $.$scale_stats = $scale_stats;
})($ || ($ = {}));
//scale/stats/-view.tree/stats.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const {} = $mol_style_func;
        $mol_style_define($scale_stats, {
            Filter_form: { marginTop: "0.5rem" },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//scale/stats/stats.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $scale_stats extends $.$scale_stats {
            act_list(reset) {
                return this.api()
                    .getActs({
                    status: $scale_modelActStatus.COMPLETED,
                    cargoType: this.cargo_type() === this.default_values().cargo_type
                        ? null
                        : this.cargo_type(),
                    wasteCategory: this.cargo_category() === this.default_values().cargo_category
                        ? null
                        : this.cargo_category(),
                    autoNumber: this.auto_number().trim().length
                        ? this.auto_number()
                        : null,
                    payerPublicId: this.payer() === this.default_values().payer ? null : this.payer(),
                    transporterPublicId: this.transporter() === this.default_values().transporter
                        ? null
                        : this.transporter(),
                })
                    .map((obj) => this.Act_row(obj));
            }
            act_id(obj) {
                return obj.publicId;
            }
            act_autoNumber(obj) {
                return obj.auto.number;
            }
            act_transporter(obj) {
                return obj.transporter.title;
            }
            act_weightGross(obj) {
                return obj.weight.gross.toString();
            }
            act_cargoType(obj) {
                return obj.cargoType.title;
            }
            act_cargoCategory(obj) {
                return obj.wasteCategory.title;
            }
            act_enteredMoment(obj) {
                return obj.entryDateTime;
            }
            act_exitedMoment(obj) {
                return obj.checkOutDateTime;
            }
            count() {
                return this.act_list().length;
            }
            act_table_title() {
                return `Список актов (${this.count()})`;
            }
            payers_options() {
                const data = this.api().getOrganizations({
                    status: $scale_modelOrganizationStatus.ACTIVE,
                    role: $scale_modelOrganizationRole.PAYER,
                });
                const result = data.reduce((acc, curr) => ((acc[curr.public_id] = curr.title), acc), {});
                return result;
            }
            transporters_options() {
                const data = this.api().getOrganizations({
                    status: $scale_modelOrganizationStatus.ACTIVE,
                    role: $scale_modelOrganizationRole.TRANSPORTER,
                });
                const result = data.reduce((acc, curr) => ((acc[curr.public_id] = curr.title), acc), {});
                return result;
            }
            cargoTypes_options() {
                const data = this.api().getCargoTypes();
                const result = data.reduce((acc, curr) => ((acc[curr.publicId] = curr.title), acc), {});
                return result;
            }
            cargoCategories_options() {
                const data = this.api().getCargoCategories();
                const result = data.reduce((acc, curr) => ((acc[curr.publicId] = curr.title), acc), {});
                return result;
            }
        }
        __decorate([
            $mol_mem
        ], $scale_stats.prototype, "act_list", null);
        __decorate([
            $mol_mem
        ], $scale_stats.prototype, "payers_options", null);
        __decorate([
            $mol_mem
        ], $scale_stats.prototype, "transporters_options", null);
        __decorate([
            $mol_mem
        ], $scale_stats.prototype, "cargoTypes_options", null);
        __decorate([
            $mol_mem
        ], $scale_stats.prototype, "cargoCategories_options", null);
        $$.$scale_stats = $scale_stats;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//scale/stats/stats.view.ts
;
"use strict";
var $;
(function ($) {
    class $scale_app extends $mol_book2_catalog {
        Placeholder() {
            return null;
        }
        plugins() {
            return [
                this.Theme()
            ];
        }
        menu_foot() {
            return [
                this.Lights(),
                this.Centrifuge()
            ];
        }
        menu_title() {
            return "Scale Client 2.0";
        }
        spreads() {
            return {
                dash: this.Dash(),
                stats: this.Stats()
            };
        }
        Theme() {
            const obj = new this.$.$mol_theme_auto();
            return obj;
        }
        Lights() {
            const obj = new this.$.$mol_lights_toggle();
            return obj;
        }
        autoNumber_IN() {
            return this.Centrifuge().autoNumber_channel_IN();
        }
        Centrifuge() {
            const obj = new this.$.$scale_centrifuge();
            return obj;
        }
        Dash_body() {
            const obj = new this.$.$scale_dash();
            return obj;
        }
        Form_enter_body() {
            const obj = new this.$.$scale_form_enter();
            return obj;
        }
        Form_enter_close() {
            return this.Form_enter().Spread_close();
        }
        Form_enter() {
            const obj = new this.$.$mol_book2_catalog();
            obj.menu_body = () => [
                this.Form_enter_body()
            ];
            obj.param = () => "form_enter";
            obj.menu_title = () => "Создать запись на въезд";
            obj.menu_tools = () => [
                this.Spread_close()
            ];
            return obj;
        }
        Form_exit_body() {
            const obj = new this.$.$scale_form_exit();
            return obj;
        }
        Form_exit_close() {
            return this.Form_exit().Spread_close();
        }
        Form_exit() {
            const obj = new this.$.$mol_book2_catalog();
            obj.menu_body = () => [
                this.Form_exit_body()
            ];
            obj.param = () => "form_exit";
            obj.menu_title = () => "Создать запись на выезд";
            obj.menu_tools = () => [
                this.Spread_close()
            ];
            return obj;
        }
        Spread_close() {
            return this.Dash().Spread_close();
        }
        Dash() {
            const obj = new this.$.$mol_book2_catalog();
            obj.menu_body = () => [
                this.Dash_body()
            ];
            obj.param = () => "dash";
            obj.menu_title = () => "Панель управления";
            obj.spreads = () => ({
                form_enter: this.Form_enter(),
                form_exit: this.Form_exit()
            });
            return obj;
        }
        Stats_body() {
            const obj = new this.$.$scale_stats();
            return obj;
        }
        Stats() {
            const obj = new this.$.$mol_book2_catalog();
            obj.menu_body = () => [
                this.Stats_body()
            ];
            obj.param = () => "stats";
            obj.menu_title = () => "Статистика";
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $scale_app.prototype, "Theme", null);
    __decorate([
        $mol_mem
    ], $scale_app.prototype, "Lights", null);
    __decorate([
        $mol_mem
    ], $scale_app.prototype, "Centrifuge", null);
    __decorate([
        $mol_mem
    ], $scale_app.prototype, "Dash_body", null);
    __decorate([
        $mol_mem
    ], $scale_app.prototype, "Form_enter_body", null);
    __decorate([
        $mol_mem
    ], $scale_app.prototype, "Form_enter", null);
    __decorate([
        $mol_mem
    ], $scale_app.prototype, "Form_exit_body", null);
    __decorate([
        $mol_mem
    ], $scale_app.prototype, "Form_exit", null);
    __decorate([
        $mol_mem
    ], $scale_app.prototype, "Dash", null);
    __decorate([
        $mol_mem
    ], $scale_app.prototype, "Stats_body", null);
    __decorate([
        $mol_mem
    ], $scale_app.prototype, "Stats", null);
    $.$scale_app = $scale_app;
})($ || ($ = {}));
//scale/app/-view.tree/app.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("scale/app/app.view.css", "[mol_form_field] {\n\tflex-direction: row;\n\talign-items: center;\n\tmin-height: auto !important;\n}\n\n[scale_app_dash_body_act_row]  [mol_labeler_label]{\n\tpadding: 0;\n}\n\n[scale_app_stats_body_act_row]  [mol_labeler_label]{\n\tpadding: 0;\n}\n\n[scale_stats_filter_form_foot] {\n\tdisplay: none;\n}\n\n[scale_stats_filter_form_body] [mol_form_field] {\n\theight: fit-content;\n\tflex:initial\n}\n\n._row_expanded {\n\twidth: 100%;\n\tflex-direction: column;\n}\n\n._row_expanded [scale_dash_control], ._row_expanded [scale_dash_camera_list] {\n\twidth: 100%;\n}\n\n._row_expanded [scale_dash_btn_row] {\n\tmargin-top: 0;\n}\n\n._pinned {\n\tposition: sticky;\n    top: 0;\n    left: 0;\n    z-index: var(--mol_layer_float);\n    opacity: 1;\n    transition: opacity .25s ease-in;\n    display: block;\n    background: linear-gradient( var(--mol_theme_card), var(--mol_theme_card) ), var(--mol_theme_back);\n    box-shadow: 0 0 0.5rem hsla(0,0%,0%,.25);\n}\n");
})($ || ($ = {}));
//scale/app/-css/app.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($scale_app, {
            Dash: {
                Menu: {
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: "1",
                    flexBasis: "50rem",
                    Body: {
                        paddingTop: "0",
                    },
                },
            },
            Stats: {
                Menu: {
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: "1",
                    flexBasis: "50rem",
                },
            },
            Form_enter: {
                Menu: {
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: "1",
                    flexBasis: "30rem",
                },
            },
            Form_exit: {
                Menu: {
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: "1",
                    flexBasis: "30rem",
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//scale/app/app.view.css.ts

//# sourceMappingURL=web.js.map
