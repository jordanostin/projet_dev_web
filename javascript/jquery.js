!function(e,t)
{
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports=e.document?t(e,!0):
    function(e)
    {
        if (!e.document) throw new Error ("jQuery requires a window with a document");
        return t(e)
    }:
    t(e)
}
( "undefined" != typeof window ? window:
    this, function(C,e) 
    {
        "use strict";
        let t=[],
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.flat ? function(e)
        {
            return t.flat.call(e)
        }:
        function(e)
        {
            return t.concat.apply ([],e)
        },
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        v = n.hasOwnProperty,
        a = v.toString,
        l = a.call(Object),
        y = {},
        m = function(e)
            {
                return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
            },
        x = function(e)
            {
                return null != e && e === e.window
            },
        E = C.document,
        c = {type:!0,src:!0,nonce:!0,noModule:!0};
        function b (e, t, n)
            {
                let r, i, o = (n = n || E).createElement("script");
                if (o.text=e,t) for (r in c) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r,i);
                n.head.appendChild(o).parentNode.removeChild(o)
            }
        function w(e)
        {
            return null == e ? e + "": "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object": typeof e
        }
        let f = "3.6.0",
        S = function(e,t)
        {
            return new S.fn.init(e,t)
        };
        function p(e)
        {
            let t = !! e && "length" in e && e.length,n = w(e);
            return ! m(e) && !x(e) && ("array"=== n || 0 === t || "number" == typeof t && 0 < t && t-1 in e)
        }
        S.fn=S.prototype = 
            {
                jquery:f, constructor: S, length:0, toArray: 
                function()
                {
                    return s.call(this)
                },
                get: function(e)
                {
                    return null == e ? s.call(this):
                    e < 0 ? this[e + this.length]:
                    this[e]
                },
                pushStack: function(e)
                {
                    let t= S.merge(this.constructor(), e);
                    return t.prevObject = this, t
                },
                each: function(e)
                {
                    return S.each(this,e)
                },
                map: function(n)
                {
                    return this.pushStack (S.map(this,function(e,t)
                                                {
                                                    return n.call(e,t,e)
                                                })
                                          )
                },
                slice: function()
                {
                    return this.pushStack (s.apply(this,arguments))
                },
                first: function()
                {
                    return this.eq(0)
                },
                last: function()
                {
                    return this.eq(-1)
                },
                even: function()
                {
                    return this.pushStack (S.grep(this,function(e,t)
                                                    {return (t+1)%2
                                                    })
                                            )
                },
                odd: function()
                {
                    return this.pushStack (S.grep(this,function(e,t)
                                                    {
                                                        return t%2
                                                    })
                                           )
                },
                eq: function(e)
                {
                    let t=this.length, n=+e+(e<0?t:0);
                    return this.pushStack(0 <= n && n < t ? [this[n]]:[])
                },
                end: function()
                {
                    return this.prevObject || this.constructor()
                },
                push: u, sort: t.sort, splice: t.splice
            },
        S.extend = S.fn.extend = function()
        {
            let e, t, n, r, i, o, a = arguments[0] || {}, s=1, u=arguments.length,l=!1;
            for ("boolean"==typeof a && (l=a, a=arguments[s] || {}, s++), "object" == typeof a || m(a) || (a= {}), s === u && (a= this,s--); s<u; s++)
            if (null != (e=arguments[s]))
                for(t in e) r= e[t], "__proto__" !== t &&a !== r && (l && r && (S.isPlainObject(r) || (i=Array.isArray(r))) ? (n= a[t], o = i && ! Array.isArray(n) ? []:
                    i || S.isPlainObject(n) ? n:{}, i= !1, a[t]= S.extend(l, o, r)):
                    void 0 !== r && (a[t]=r));
            return a
        },
        S.extend(
            {
                expando: "jQuery" + (f+Math.random()).replace(/\D/g,""),
                isReady:!0, error:
                function(e)
                {
                    throw new Error(e)
                },
                noop:function(){},
                isPlainObject: function(e)
                {
                    let t, n;
                    return !(!e || "[object Object]" !== o.call(e)) && (!(t=r(e)) || "function" == typeof(n=v.call(t,"constructor") && t.constructor) && a.call (n) === l)
                },
                isEmptyObject: function(e)
                {
                    let t;
                    for (t in e)
                        return !1;
                    return!0
                },
                globalEval: function(e, t, n)
                {
                    b (e, {nonce:t && t.nonce},n)
                },
                each: function(e, t)
                {
                    let n, r = 0;
                    if (p(e))
                    {
                        for (n = e.length; r < n; r++)
                        if (! 1 === t.call(e[r], r, e[r])) 
                        break
                    }
                    else for (r in e) if (! 1 === t.call(e[r], r, e[r]))
                    break;
                    return e
                },
                makeArray: function(e, t)
                {
                    let n=t || [];
                    return null != e && (p(Object(e)) ? S.merge(n,"string" == typeof e?[e]:e):u.call(n, e)), n
                },
                inArray: function(e, t, n)
                {
                    return null == t ?-1:i.call(t,e,n)
                },
                merge: function(e,t)
                {
                    for (let n =+t.length, r=0, i=e.length; r<n; r++) e[i++] = t[r];
                    return e.length=i,e
                },
                grep: function(e, t, n)
                {
                    for (let r=[], i=0 ,o=e.length, a=!n; i<o; i++) !t(e[i], i) !== a && r.push(e[i]);
                    return r
                },
                map: function(e,t,n)
                {
                    let r, i, o=0, a = []; 
                    if (p(e)) for (r=e.length; o<r; o++) 
                    null != (i=t(e[o],o,n)) && a.push(i);
                    else for (o in e) 
                    null != (i=t(e[o],o,n)) && a.push(i);
                    return g(a)
                },
                guid: 1,support:y
            }),
        "function" == typeof Symbol && (S.fn[Symbol.iterator] = t [Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
        function(e,t)
        {
            n["[object "+t+"]"]=t.toLowerCase()
        });
       
    })
            