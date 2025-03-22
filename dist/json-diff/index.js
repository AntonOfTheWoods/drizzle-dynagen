var ze = Object.defineProperty;
var De = (A, d, y) => d in A ? ze(A, d, { enumerable: !0, configurable: !0, writable: !0, value: y }) : A[d] = y;
var me = (A, d, y) => De(A, typeof d != "symbol" ? d + "" : d, y);
import { roundObj as Oe, extendedTypeOf as pe } from "./util.js";
function Ae(A) {
  if (Object.prototype.hasOwnProperty.call(A, "__esModule")) return A;
  var d = A.default;
  if (typeof d == "function") {
    var y = function $() {
      return this instanceof $ ? Reflect.construct(d, arguments, this.constructor) : d.apply(this, arguments);
    };
    y.prototype = d.prototype;
  } else y = {};
  return Object.defineProperty(y, "__esModule", { value: !0 }), Object.keys(A).forEach(function($) {
    var q = Object.getOwnPropertyDescriptor(A, $);
    Object.defineProperty(y, $, q.get ? q : {
      enumerable: !0,
      get: function() {
        return A[$];
      }
    });
  }), y;
}
var J = {}, de = { exports: {} }, Ee = de.exports, be;
function Be() {
  return be || (be = 1, function(A, d) {
    (function() {
      var y, $, q, M, v, x, w, b, W, ue, P, te, X, ne, m;
      q = Math.floor, ue = Math.min, $ = function(i, h) {
        return i < h ? -1 : i > h ? 1 : 0;
      }, W = function(i, h, a, _, S) {
        var o;
        if (a == null && (a = 0), S == null && (S = $), a < 0)
          throw new Error("lo must be non-negative");
        for (_ == null && (_ = i.length); a < _; )
          o = q((a + _) / 2), S(h, i[o]) < 0 ? _ = o : a = o + 1;
        return [].splice.apply(i, [a, a - a].concat(h)), h;
      }, x = function(i, h, a) {
        return a == null && (a = $), i.push(h), ne(i, 0, i.length - 1, a);
      }, v = function(i, h) {
        var a, _;
        return h == null && (h = $), a = i.pop(), i.length ? (_ = i[0], i[0] = a, m(i, 0, h)) : _ = a, _;
      }, b = function(i, h, a) {
        var _;
        return a == null && (a = $), _ = i[0], i[0] = h, m(i, 0, a), _;
      }, w = function(i, h, a) {
        var _;
        return a == null && (a = $), i.length && a(i[0], h) < 0 && (_ = [i[0], h], h = _[0], i[0] = _[1], m(i, 0, a)), h;
      }, M = function(i, h) {
        var a, _, S, o, t, e;
        for (h == null && (h = $), o = (function() {
          e = [];
          for (var n = 0, s = q(i.length / 2); 0 <= s ? n < s : n > s; 0 <= s ? n++ : n--)
            e.push(n);
          return e;
        }).apply(this).reverse(), t = [], _ = 0, S = o.length; _ < S; _++)
          a = o[_], t.push(m(i, a, h));
        return t;
      }, X = function(i, h, a) {
        var _;
        if (a == null && (a = $), _ = i.indexOf(h), _ !== -1)
          return ne(i, 0, _, a), m(i, _, a);
      }, P = function(i, h, a) {
        var _, S, o, t, e;
        if (a == null && (a = $), S = i.slice(0, h), !S.length)
          return S;
        for (M(S, a), e = i.slice(h), o = 0, t = e.length; o < t; o++)
          _ = e[o], w(S, _, a);
        return S.sort(a).reverse();
      }, te = function(i, h, a) {
        var _, S, o, t, e, n, s, r, l;
        if (a == null && (a = $), h * 10 <= i.length) {
          if (o = i.slice(0, h).sort(a), !o.length)
            return o;
          for (S = o[o.length - 1], s = i.slice(h), t = 0, n = s.length; t < n; t++)
            _ = s[t], a(_, S) < 0 && (W(o, _, 0, null, a), o.pop(), S = o[o.length - 1]);
          return o;
        }
        for (M(i, a), l = [], e = 0, r = ue(h, i.length); 0 <= r ? e < r : e > r; 0 <= r ? ++e : --e)
          l.push(v(i, a));
        return l;
      }, ne = function(i, h, a, _) {
        var S, o, t;
        for (_ == null && (_ = $), S = i[a]; a > h; ) {
          if (t = a - 1 >> 1, o = i[t], _(S, o) < 0) {
            i[a] = o, a = t;
            continue;
          }
          break;
        }
        return i[a] = S;
      }, m = function(i, h, a) {
        var _, S, o, t, e;
        for (a == null && (a = $), S = i.length, e = h, o = i[h], _ = 2 * h + 1; _ < S; )
          t = _ + 1, t < S && !(a(i[_], i[t]) < 0) && (_ = t), i[h] = i[_], h = _, _ = 2 * h + 1;
        return i[h] = o, ne(i, e, h, a);
      }, y = function() {
        i.push = x, i.pop = v, i.replace = b, i.pushpop = w, i.heapify = M, i.updateItem = X, i.nlargest = P, i.nsmallest = te;
        function i(h) {
          this.cmp = h ?? $, this.nodes = [];
        }
        return i.prototype.push = function(h) {
          return x(this.nodes, h, this.cmp);
        }, i.prototype.pop = function() {
          return v(this.nodes, this.cmp);
        }, i.prototype.peek = function() {
          return this.nodes[0];
        }, i.prototype.contains = function(h) {
          return this.nodes.indexOf(h) !== -1;
        }, i.prototype.replace = function(h) {
          return b(this.nodes, h, this.cmp);
        }, i.prototype.pushpop = function(h) {
          return w(this.nodes, h, this.cmp);
        }, i.prototype.heapify = function() {
          return M(this.nodes, this.cmp);
        }, i.prototype.updateItem = function(h) {
          return X(this.nodes, h, this.cmp);
        }, i.prototype.clear = function() {
          return this.nodes = [];
        }, i.prototype.empty = function() {
          return this.nodes.length === 0;
        }, i.prototype.size = function() {
          return this.nodes.length;
        }, i.prototype.clone = function() {
          var h;
          return h = new i(), h.nodes = this.nodes.slice(0), h;
        }, i.prototype.toArray = function() {
          return this.nodes.slice(0);
        }, i.prototype.insert = i.prototype.push, i.prototype.top = i.prototype.peek, i.prototype.front = i.prototype.peek, i.prototype.has = i.prototype.contains, i.prototype.copy = i.prototype.clone, i;
      }(), function(i, h) {
        return A.exports = h();
      }(this, function() {
        return y;
      });
    }).call(Ee);
  }(de)), de.exports;
}
var je, Se;
function Ce() {
  return Se || (Se = 1, je = Be()), je;
}
const He = {}, Ke = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: He
}, Symbol.toStringTag, { value: "Module" })), Ne = /* @__PURE__ */ Ae(Ke);
var Me;
function Ie() {
  return Me || (Me = 1, (function() {
    var A, d, y, $, q, M, v, x, w, b, W, ue, P, te, X, ne, m, i, h, a, _, S = [].indexOf;
    ({ floor: X, max: m, min: i } = Math), d = Ce(), P = Ne, x = function(o, t) {
      return t ? 2 * o / t : 1;
    }, v = function(o, t) {
      var e, n, s, r, l;
      for ([s, r] = [o.length, t.length], e = n = 0, l = i(s, r); 0 <= l ? n < l : n > l; e = 0 <= l ? ++n : --n) {
        if (o[e] < t[e])
          return -1;
        if (o[e] > t[e])
          return 1;
      }
      return s - r;
    }, ue = function(o, t) {
      return Object.prototype.hasOwnProperty.call(o, t);
    }, M = function(o) {
      var t, e, n;
      for (e = 0, n = o.length; e < n; e++)
        if (t = o[e], t)
          return !0;
      return !1;
    }, q = class {
      /*
      	    SequenceMatcher is a flexible class for comparing pairs of sequences of
      	    any type, so long as the sequence elements are hashable.  The basic
      	    algorithm predates, and is a little fancier than, an algorithm
      	    published in the late 1980's by Ratcliff and Obershelp under the
      	    hyperbolic name "gestalt pattern matching".  The basic idea is to find
      	    the longest contiguous matching subsequence that contains no "junk"
      	    elements (R-O doesn't address junk).  The same idea is then applied
      	    recursively to the pieces of the sequences to the left and to the right
      	    of the matching subsequence.  This does not yield minimal edit
      	    sequences, but does tend to yield matches that "look right" to people.
      
      	    SequenceMatcher tries to compute a "human-friendly diff" between two
      	    sequences.  Unlike e.g. UNIX(tm) diff, the fundamental notion is the
      	    longest *contiguous* & junk-free matching subsequence.  That's what
      	    catches peoples' eyes.  The Windows(tm) windiff has another interesting
      	    notion, pairing up elements that appear uniquely in each sequence.
      	    That, and the method here, appear to yield more intuitive difference
      	    reports than does diff.  This method appears to be the least vulnerable
      	    to synching up on blocks of "junk lines", though (like blank lines in
      	    ordinary text files, or maybe "<P>" lines in HTML files).  That may be
      	    because this is the only method of the 3 that has a *concept* of
      	    "junk" <wink>.
      
      	    Example, comparing two strings, and considering blanks to be "junk":
      
      	    >>> isjunk = (c) -> c is ' '
      	    >>> s = new SequenceMatcher(isjunk,
      	                                'private Thread currentThread;',
      	                                'private volatile Thread currentThread;')
      
      	    .ratio() returns a float in [0, 1], measuring the "similarity" of the
      	    sequences.  As a rule of thumb, a .ratio() value over 0.6 means the
      	    sequences are close matches:
      
      	    >>> s.ratio().toPrecision(3)
      	    '0.866'
      
      	    If you're only interested in where the sequences match,
      	    .getMatchingBlocks() is handy:
      
      	    >>> for [a, b, size] in s.getMatchingBlocks()
      	    ...   console.log("a[#{a}] and b[#{b}] match for #{size} elements");
      	    a[0] and b[0] match for 8 elements
      	    a[8] and b[17] match for 21 elements
      	    a[29] and b[38] match for 0 elements
      
      	    Note that the last tuple returned by .get_matching_blocks() is always a
      	    dummy, (len(a), len(b), 0), and this is the only case in which the last
      	    tuple element (number of elements matched) is 0.
      
      	    If you want to know how to change the first sequence into the second,
      	    use .get_opcodes():
      
      	    >>> for [op, a1, a2, b1, b2] in s.getOpcodes()
      	    ...   console.log "#{op} a[#{a1}:#{a2}] b[#{b1}:#{b2}]"
      	    equal a[0:8] b[0:8]
      	    insert a[8:8] b[8:17]
      	    equal a[8:29] b[17:38]
      
      	    See the Differ class for a fancy human-friendly file differencer, which
      	    uses SequenceMatcher both to compare sequences of lines, and to compare
      	    sequences of characters within similar (near-matching) lines.
      
      	    See also function getCloseMatches() in this module, which shows how
      	    simple code building on SequenceMatcher can be used to do useful work.
      
      	    Timing:  Basic R-O is cubic time worst case and quadratic time expected
      	    case.  SequenceMatcher is quadratic time for the worst case and has
      	    expected-case behavior dependent in a complicated way on how many
      	    elements the sequences have in common; best case time is linear.
      
      	    Methods:
      
      	    constructor(isjunk=null, a='', b='')
      	        Construct a SequenceMatcher.
      
      	    setSeqs(a, b)
      	        Set the two sequences to be compared.
      
      	    setSeq1(a)
      	        Set the first sequence to be compared.
      
      	    setSeq2(b)
      	        Set the second sequence to be compared.
      
      	    findLongestMatch(alo, ahi, blo, bhi)
      	        Find longest matching block in a[alo:ahi] and b[blo:bhi].
      
      	    getMatchingBlocks()
      	        Return list of triples describing matching subsequences.
      
      	    getOpcodes()
      	        Return list of 5-tuples describing how to turn a into b.
      
      	    ratio()
      	        Return a measure of the sequences' similarity (float in [0,1]).
      
      	    quickRatio()
      	        Return an upper bound on .ratio() relatively quickly.
      
      	    realQuickRatio()
      	        Return an upper bound on ratio() very quickly.
      	    */
      constructor(t, e = "", n = "", s = !0) {
        this.isjunk = t, this.autojunk = s, this.a = this.b = null, this.setSeqs(e, n);
      }
      setSeqs(t, e) {
        return this.setSeq1(t), this.setSeq2(e);
      }
      setSeq1(t) {
        if (t !== this.a)
          return this.a = t, this.matchingBlocks = this.opcodes = null;
      }
      setSeq2(t) {
        if (t !== this.b)
          return this.b = t, this.matchingBlocks = this.opcodes = null, this.fullbcount = null, this._chainB();
      }
      // For each element x in b, set b2j[x] to a list of the indices in
      // b where x appears; the indices are in increasing order; note that
      // the number of times x appears in b is b2j[x].length ...
      // when @isjunk is defined, junk elements don't show up in this
      // map at all, which stops the central findLongestMatch method
      // from starting any matching block at a junk element ...
      // also creates the fast isbjunk function ...
      // b2j also does not contain entries for "popular" elements, meaning
      // elements that account for more than 1 + 1% of the total elements, and
      // when the sequence is reasonably large (>= 200 elements); this can
      // be viewed as an adaptive notion of semi-junk, and yields an enormous
      // speedup when, e.g., comparing program files with hundreds of
      // instances of "return null;" ...
      // note that this is only called when b changes; so for cross-product
      // kinds of matches, it's best to call setSeq2 once, then setSeq1
      // repeatedly
      _chainB() {
        var t, e, n, s, r, l, f, u, c, p, j, g;
        for (t = this.b, this.b2j = e = /* @__PURE__ */ new Map(), s = u = 0, c = t.length; u < c; s = ++u)
          n = t[s], e.has(n) || e.set(n, []), r = e.get(n), r.push(s);
        return f = /* @__PURE__ */ new Map(), l = this.isjunk, l && e.forEach(function(k, O) {
          if (l(O))
            return f.set(O, !0), e.delete(O);
        }), g = /* @__PURE__ */ new Map(), p = t.length, this.autojunk && p >= 200 && (j = X(p / 100) + 1, e.forEach(function(k, O) {
          if (k.length > j)
            return g.set(O, !0), e.delete(O);
        })), this.isbjunk = function(k) {
          return f.has(k);
        }, this.isbpopular = function(k) {
          return g.has(k);
        };
      }
      findLongestMatch(t, e, n, s) {
        var r, l, f, u, c, p, j, g, k, O, R, z, K, C, E, D, T, N;
        for ([r, l, f, g] = [this.a, this.b, this.b2j, this.isbjunk], [u, c, p] = [t, n, 0], O = {}, j = K = T = t, N = e; T <= N ? K < N : K > N; j = T <= N ? ++K : --K) {
          for (D = {}, R = [], f.has(r[j]) && (R = f.get(r[j])), E = 0, C = R.length; E < C; E++)
            if (k = R[E], !(k < n)) {
              if (k >= s)
                break;
              z = D[k] = (O[k - 1] || 0) + 1, z > p && ([u, c, p] = [j - z + 1, k - z + 1, z]);
            }
          O = D;
        }
        for (; u > t && c > n && !g(l[c - 1]) && r[u - 1] === l[c - 1]; )
          [u, c, p] = [u - 1, c - 1, p + 1];
        for (; u + p < e && c + p < s && !g(l[c + p]) && r[u + p] === l[c + p]; )
          p++;
        for (; u > t && c > n && g(l[c - 1]) && r[u - 1] === l[c - 1]; )
          [u, c, p] = [u - 1, c - 1, p + 1];
        for (; u + p < e && c + p < s && g(l[c + p]) && r[u + p] === l[c + p]; )
          p++;
        return [u, c, p];
      }
      getMatchingBlocks() {
        var t, e, n, s, r, l, f, u, c, p, j, g, k, O, R, z, K, C, E, D, T;
        if (this.matchingBlocks)
          return this.matchingBlocks;
        for ([R, z] = [this.a.length, this.b.length], D = [[0, R, 0, z]], C = []; D.length; )
          [e, t, s, n] = D.pop(), [r, u, j] = T = this.findLongestMatch(e, t, s, n), j && (C.push(T), e < r && s < u && D.push([e, r, s, u]), r + j < t && u + j < n && D.push([r + j, t, u + j, n]));
        for (C.sort(v), l = c = g = 0, E = [], O = 0, K = C.length; O < K; O++)
          [f, p, k] = C[O], l + g === f && c + g === p ? g += k : (g && E.push([l, c, g]), [l, c, g] = [f, p, k]);
        return g && E.push([l, c, g]), E.push([R, z, 0]), this.matchingBlocks = E;
      }
      getOpcodes() {
        var t, e, n, s, r, l, f, u, c, p;
        if (this.opcodes)
          return this.opcodes;
        for (s = r = 0, this.opcodes = e = [], u = this.getMatchingBlocks(), l = 0, f = u.length; l < f; l++)
          [t, n, c] = u[l], p = "", s < t && r < n ? p = "replace" : s < t ? p = "delete" : r < n && (p = "insert"), p && e.push([p, s, t, r, n]), [s, r] = [t + c, n + c], c && e.push(["equal", t, s, n, r]);
        return e;
      }
      getGroupedOpcodes(t = 3) {
        var e, n, s, r, l, f, u, c, p, j, g;
        for (e = this.getOpcodes(), e.length || (e = [["equal", 0, 1, 0, 1]]), e[0][0] === "equal" && ([g, r, l, f, u] = e[0], e[0] = [g, m(r, l - t), l, m(f, u - t), u]), e[e.length - 1][0] === "equal" && ([g, r, l, f, u] = e[e.length - 1], e[e.length - 1] = [g, r, i(l, r + t), f, i(u, f + t)]), j = t + t, s = [], n = [], c = 0, p = e.length; c < p; c++)
          [g, r, l, f, u] = e[c], g === "equal" && l - r > j && (n.push([g, r, i(l, r + t), f, i(u, f + t)]), s.push(n), n = [], [r, f] = [m(r, l - t), m(f, u - t)]), n.push([g, r, l, f, u]);
        return n.length && !(n.length === 1 && n[0][0] === "equal") && s.push(n), s;
      }
      ratio() {
        var t, e, n, s, r;
        for (s = 0, r = this.getMatchingBlocks(), t = 0, e = r.length; t < e; t++)
          n = r[t], s += n[2];
        return x(s, this.a.length + this.b.length);
      }
      quickRatio() {
        var t, e, n, s, r, l, f, u, c, p, j;
        if (!this.fullbcount)
          for (this.fullbcount = n = {}, p = this.b, s = 0, r = p.length; s < r; s++)
            e = p[s], n[e] = (n[e] || 0) + 1;
        for (n = this.fullbcount, t = {}, u = 0, j = this.a, f = 0, l = j.length; f < l; f++)
          e = j[f], ue(t, e) ? c = t[e] : c = n[e] || 0, t[e] = c - 1, c > 0 && u++;
        return x(u, this.a.length + this.b.length);
      }
      realQuickRatio() {
        var t, e;
        return [t, e] = [this.a.length, this.b.length], x(i(t, e), t + e);
      }
    }, ne = function(o, t, e = 3, n = 0.6) {
      var s, r, l, f, u, c, p, j, g;
      if (!(e > 0))
        throw new Error(`n must be > 0: (${e})`);
      if (!(0 <= n && n <= 1))
        throw new Error(`cutoff must be in [0.0, 1.0]: (${n})`);
      for (u = [], p = new q(), p.setSeq2(o), s = 0, r = t.length; s < r; s++)
        g = t[s], p.setSeq1(g), p.realQuickRatio() >= n && p.quickRatio() >= n && p.ratio() >= n && u.push([p.ratio(), g]);
      for (u = d.nlargest(u, e, v), c = [], f = 0, l = u.length; f < l; f++)
        [j, g] = u[f], c.push(g);
      return c;
    }, w = function(o, t) {
      var e, n;
      for ([e, n] = [0, o.length]; e < n && o[e] === t; )
        e++;
      return e;
    }, A = class {
      /*
      	    Differ is a class for comparing sequences of lines of text, and
      	    producing human-readable differences or deltas.  Differ uses
      	    SequenceMatcher both to compare sequences of lines, and to compare
      	    sequences of characters within similar (near-matching) lines.
      
      	    Each line of a Differ delta begins with a two-letter code:
      
      	        '- '    line unique to sequence 1
      	        '+ '    line unique to sequence 2
      	        '  '    line common to both sequences
      	        '? '    line not present in either input sequence
      
      	    Lines beginning with '? ' attempt to guide the eye to intraline
      	    differences, and were not present in either input sequence.  These lines
      	    can be confusing if the sequences contain tab characters.
      
      	    Note that Differ makes no claim to produce a *minimal* diff.  To the
      	    contrary, minimal diffs are often counter-intuitive, because they synch
      	    up anywhere possible, sometimes accidental matches 100 pages apart.
      	    Restricting synch points to contiguous matches preserves some notion of
      	    locality, at the occasional cost of producing a longer diff.
      
      	    Example: Comparing two texts.
      
      	    >>> text1 = ['1. Beautiful is better than ugly.\n',
      	    ...   '2. Explicit is better than implicit.\n',
      	    ...   '3. Simple is better than complex.\n',
      	    ...   '4. Complex is better than complicated.\n']
      	    >>> text1.length
      	    4
      	    >>> text2 = ['1. Beautiful is better than ugly.\n',
      	    ...   '3.   Simple is better than complex.\n',
      	    ...   '4. Complicated is better than complex.\n',
      	    ...   '5. Flat is better than nested.\n']
      
      	    Next we instantiate a Differ object:
      
      	    >>> d = new Differ()
      
      	    Note that when instantiating a Differ object we may pass functions to
      	    filter out line and character 'junk'.
      
      	    Finally, we compare the two:
      
      	    >>> result = d.compare(text1, text2)
      	    [ '  1. Beautiful is better than ugly.\n',
      	      '- 2. Explicit is better than implicit.\n',
      	      '- 3. Simple is better than complex.\n',
      	      '+ 3.   Simple is better than complex.\n',
      	      '?   ++\n',
      	      '- 4. Complex is better than complicated.\n',
      	      '?          ^                     ---- ^\n',
      	      '+ 4. Complicated is better than complex.\n',
      	      '?         ++++ ^                      ^\n',
      	      '+ 5. Flat is better than nested.\n' ]
      
      	    Methods:
      
      	    constructor(linejunk=null, charjunk=null)
      	        Construct a text differencer, with optional filters.
      	    compare(a, b)
      	        Compare two sequences of lines; generate the resulting delta.
      	    */
      constructor(t, e) {
        this.linejunk = t, this.charjunk = e;
      }
      /*
      	    Construct a text differencer, with optional filters.
      
      	    The two optional keyword parameters are for filter functions:
      
      	    - `linejunk`: A function that should accept a single string argument,
      	      and return true iff the string is junk. The module-level function
      	      `IS_LINE_JUNK` may be used to filter out lines without visible
      	      characters, except for at most one splat ('#').  It is recommended
      	      to leave linejunk null. 
      
      	    - `charjunk`: A function that should accept a string of length 1. The
      	      module-level function `IS_CHARACTER_JUNK` may be used to filter out
      	      whitespace characters (a blank or tab; **note**: bad idea to include
      	      newline in this!).  Use of IS_CHARACTER_JUNK is recommended.
      	    */
      compare(t, e) {
        var n, s, r, l, f, u, c, p, j, g, k, O, R, z;
        for (f = new q(this.linejunk, t, e), k = [], R = f.getOpcodes(), c = 0, p = R.length; c < p; c++) {
          switch ([z, s, n, l, r] = R[c], z) {
            case "replace":
              u = this._fancyReplace(t, s, n, e, l, r);
              break;
            case "delete":
              u = this._dump("-", t, s, n);
              break;
            case "insert":
              u = this._dump("+", e, l, r);
              break;
            case "equal":
              u = this._dump(" ", t, s, n);
              break;
            default:
              throw new Error(`unknow tag (${z})`);
          }
          for (O = 0, j = u.length; O < j; O++)
            g = u[O], k.push(g);
        }
        return k;
      }
      _dump(t, e, n, s) {
        var r, l, f, u, c;
        for (c = [], r = l = f = n, u = s; f <= u ? l < u : l > u; r = f <= u ? ++l : --l)
          c.push(`${t} ${e[r]}`);
        return c;
      }
      _plainReplace(t, e, n, s, r, l) {
        var f, u, c, p, j, g, k, O, R, z;
        for (P(e < n && r < l), l - r < n - e ? (f = this._dump("+", s, r, l), z = this._dump("-", t, e, n)) : (f = this._dump("-", t, e, n), z = this._dump("+", s, r, l)), k = [], R = [f, z], c = 0, p = R.length; c < p; c++)
          for (u = R[c], O = 0, j = u.length; O < j; O++)
            g = u[O], k.push(g);
        return k;
      }
      _fancyReplace(t, e, n, s, r, l) {
        var f, u, c, p, j, g, k, O, R, z, K, C, E, D, T, N, oe, G, I, H, Q, V, Y, ie, ee, re, se, L, U, B, fe, le, F, Z, ge, he, _e, ce, ve, ke, ye, $e, qe, ae, we;
        for ([k, T] = [0.74, 0.75], D = new q(this.charjunk), [N, oe] = [
          null,
          null
          // 1st indices of equal lines (if any)
        ], U = [], I = H = ge = r, he = l; ge <= he ? H < he : H > he; I = ge <= he ? ++H : --H)
          for (z = s[I], D.setSeq2(z), G = B = _e = e, ce = n; _e <= ce ? B < ce : B > ce; G = _e <= ce ? ++B : --B) {
            if (u = t[G], u === z) {
              N === null && ([N, oe] = [G, I]);
              continue;
            }
            D.setSeq1(u), D.realQuickRatio() > k && D.quickRatio() > k && D.ratio() > k && ([k, O, R] = [D.ratio(), G, I]);
          }
        if (k < T) {
          if (N === null) {
            for (ve = this._plainReplace(t, e, n, s, r, l), fe = 0, Y = ve.length; fe < Y; fe++)
              L = ve[fe], U.push(L);
            return U;
          }
          [O, R, k] = [N, oe, 1];
        } else
          N = null;
        for (ke = this._fancyHelper(t, e, O, s, r, R), le = 0, ie = ke.length; le < ie; le++)
          L = ke[le], U.push(L);
        if ([f, g] = [t[O], s[R]], N === null) {
          for (j = E = "", D.setSeqs(f, g), ye = D.getOpcodes(), F = 0, ee = ye.length; F < ee; F++)
            switch ([we, c, p, K, C] = ye[F], [Q, V] = [p - c, C - K], we) {
              case "replace":
                j += Array(Q + 1).join("^"), E += Array(V + 1).join("^");
                break;
              case "delete":
                j += Array(Q + 1).join("-");
                break;
              case "insert":
                E += Array(V + 1).join("+");
                break;
              case "equal":
                j += Array(Q + 1).join(" "), E += Array(V + 1).join(" ");
                break;
              default:
                throw new Error(`unknow tag (${we})`);
            }
          for ($e = this._qformat(f, g, j, E), Z = 0, re = $e.length; Z < re; Z++)
            L = $e[Z], U.push(L);
        } else
          U.push("  " + f);
        for (qe = this._fancyHelper(t, O + 1, n, s, R + 1, l), ae = 0, se = qe.length; ae < se; ae++)
          L = qe[ae], U.push(L);
        return U;
      }
      _fancyHelper(t, e, n, s, r, l) {
        var f;
        return f = [], e < n ? r < l ? f = this._fancyReplace(t, e, n, s, r, l) : f = this._dump("-", t, e, n) : r < l && (f = this._dump("+", s, r, l)), f;
      }
      _qformat(t, e, n, s) {
        var r, l;
        return l = [], r = i(w(t, "	"), w(e, "	")), r = i(r, w(n.slice(0, r), " ")), r = i(r, w(s.slice(0, r), " ")), n = n.slice(r).replace(/\s+$/, ""), s = s.slice(r).replace(/\s+$/, ""), l.push("- " + t), n.length && l.push(`? ${Array(r + 1).join("	")}${n}
`), l.push("+ " + e), s.length && l.push(`? ${Array(r + 1).join("	")}${s}
`), l;
      }
    }, $ = function(o, t = /^\s*#?\s*$/) {
      return t.test(o);
    }, y = function(o, t = " 	") {
      return S.call(t, o) >= 0;
    }, W = function(o, t) {
      var e, n;
      return e = o + 1, n = t - o, n === 1 ? `${e}` : (n || e--, `${e},${n}`);
    }, _ = function(o, t, { fromfile: e, tofile: n, fromfiledate: s, tofiledate: r, n: l, lineterm: f } = {}) {
      var u, c, p, j, g, k, O, R, z, K, C, E, D, T, N, oe, G, I, H, Q, V, Y, ie, ee, re, se, L, U, B;
      for (e == null && (e = ""), n == null && (n = ""), s == null && (s = ""), r == null && (r = ""), l == null && (l = 3), f == null && (f = `
`), I = [], L = !1, ie = new q(null, o, t).getGroupedOpcodes(), K = 0, E = ie.length; K < E; K++)
        for (g = ie[K], L || (L = !0, j = s ? `	${s}` : "", B = r ? `	${r}` : "", I.push(`--- ${e}${j}${f}`), I.push(`+++ ${n}${B}${f}`)), [p, C] = [g[0], g[g.length - 1]], u = W(p[1], C[2]), c = W(p[3], C[4]), I.push(`@@ -${u} +${c} @@${f}`), H = 0, D = g.length; H < D; H++) {
          if ([U, k, O, R, z] = g[H], U === "equal") {
            for (ee = o.slice(k, O), Q = 0, T = ee.length; Q < T; Q++)
              G = ee[Q], I.push(" " + G);
            continue;
          }
          if (U === "replace" || U === "delete")
            for (re = o.slice(k, O), V = 0, N = re.length; V < N; V++)
              G = re[V], I.push("-" + G);
          if (U === "replace" || U === "insert")
            for (se = t.slice(R, z), Y = 0, oe = se.length; Y < oe; Y++)
              G = se[Y], I.push("+" + G);
        }
      return I;
    }, b = function(o, t) {
      var e, n;
      return e = o + 1, n = t - o, n || e--, n <= 1 ? `${e}` : `${e},${e + n - 1}`;
    }, te = function(o, t, { fromfile: e, tofile: n, fromfiledate: s, tofiledate: r, n: l, lineterm: f } = {}) {
      var u, c, p, j, g, k, O, R, z, K, C, E, D, T, N, oe, G, I, H, Q, V, Y, ie, ee, re, se, L, U, B, fe;
      for (e == null && (e = ""), n == null && (n = ""), s == null && (s = ""), r == null && (r = ""), l == null && (l = 3), f == null && (f = `
`), ie = {
        insert: "+ ",
        delete: "- ",
        replace: "! ",
        equal: "  "
      }, U = !1, H = [], re = new q(null, o, t).getGroupedOpcodes(), C = 0, D = re.length; C < D; C++)
        if (k = re[C], !U) {
          if (U = !0, g = s ? `	${s}` : "", fe = r ? `	${r}` : "", H.push(`*** ${e}${g}${f}`), H.push(`--- ${n}${fe}${f}`), [j, E] = [k[0], k[k.length - 1]], H.push("***************" + f), c = b(j[1], E[2]), H.push(`*** ${c} ****${f}`), M(function() {
            var le, F, Z;
            for (Z = [], F = 0, le = k.length; F < le; F++)
              [B, u, u, u, u] = k[F], Z.push(B === "replace" || B === "delete");
            return Z;
          }())) {
            for (Q = 0, T = k.length; Q < T; Q++)
              if ([B, O, R, u, u] = k[Q], B !== "insert")
                for (se = o.slice(O, R), V = 0, N = se.length; V < N; V++)
                  I = se[V], H.push(ie[B] + I);
          }
          if (p = b(j[3], E[4]), H.push(`--- ${p} ----${f}`), M(function() {
            var le, F, Z;
            for (Z = [], F = 0, le = k.length; F < le; F++)
              [B, u, u, u, u] = k[F], Z.push(B === "replace" || B === "insert");
            return Z;
          }())) {
            for (Y = 0, oe = k.length; Y < oe; Y++)
              if ([B, u, u, z, K] = k[Y], B !== "delete")
                for (L = t.slice(z, K), ee = 0, G = L.length; ee < G; ee++)
                  I = L[ee], H.push(ie[B] + I);
          }
        }
      return H;
    }, h = function(o, t, e, n = y) {
      return new A(e, n).compare(o, t);
    }, a = function(o, t) {
      var e, n, s, r, l, f, u;
      if (u = {
        1: "- ",
        2: "+ "
      }[t], !u)
        throw new Error(`unknow delta choice (must be 1 or 2): ${t}`);
      for (l = ["  ", u], r = [], e = 0, n = o.length; e < n; e++)
        s = o[e], f = s.slice(0, 2), S.call(l, f) >= 0 && r.push(s.slice(2));
      return r;
    }, J._arrayCmp = v, J.SequenceMatcher = q, J.getCloseMatches = ne, J._countLeading = w, J.Differ = A, J.IS_LINE_JUNK = $, J.IS_CHARACTER_JUNK = y, J._formatRangeUnified = W, J.unifiedDiff = _, J._formatRangeContext = b, J.contextDiff = te, J.ndiff = h, J.restore = a;
  }).call(J)), J;
}
var xe, Re;
function Ue() {
  return Re || (Re = 1, xe = Ie()), xe;
}
var Le = Ue();
class Je {
  constructor(d) {
    me(this, "options");
    d.outputKeys = d.outputKeys || [], d.excludeKeys = d.excludeKeys || [], this.options = d;
  }
  isScalar(d) {
    return typeof d != "object" || d === null;
  }
  objectDiff(d, y) {
    let $ = {}, q = 0, M = !0;
    for (const [v, x] of Object.entries(d))
      if (!this.options.outputNewOnly) {
        const w = "__deleted";
        !(v in y) && !this.options.excludeKeys.includes(v) && ($[`${v}${w}`] = x, q -= 30, M = !1);
      }
    for (const [v, x] of Object.entries(y)) {
      const w = this.options.outputNewOnly ? "" : "__added";
      !(v in d) && !this.options.excludeKeys.includes(v) && ($[`${v}${w}`] = x, q -= 30, M = !1);
    }
    for (const [v, x] of Object.entries(d))
      if (v in y) {
        if (this.options.excludeKeys.includes(v))
          continue;
        q += 20;
        const w = y[v], b = this.diff(x, w);
        b.equal ? (this.options.full || this.options.outputKeys.includes(v)) && ($[v] = x) : ($[v] = b.result, M = !1), q += Math.min(20, Math.max(-10, b.score / 5));
      }
    return M ? (q = 100 * Math.max(Object.keys(d).length, 0.5), this.options.full || ($ = void 0)) : q = Math.max(0, q), { score: q, result: $, equal: M };
  }
  findMatchingObject(d, y, $) {
    let q = null;
    for (const [M, { item: v, index: x }] of Object.entries($))
      if (M !== "__next") {
        const w = Math.abs(x - y);
        if (pe(d) === pe(v)) {
          const { score: b } = this.diff(d, v);
          (!q || b > q.score || b === q.score && w < q.indexDistance) && (q = { score: b, key: M, indexDistance: w });
        }
      }
    return q;
  }
  scalarize(d, y, $) {
    const q = [];
    if ($) {
      const v = {};
      for (let x = 0; x < d.length; x++) {
        const w = d[x];
        if (this.isScalar(w))
          continue;
        const b = this.findMatchingObject(w, x, $);
        b && (!v[b.key] || b.score > v[b.key].score) && (v[b.key] = { score: b.score, index: x });
      }
      for (const [x, w] of Object.entries(v))
        q[w.index] = x;
    }
    const M = [];
    for (let v = 0; v < d.length; v++) {
      const x = d[v];
      if (this.isScalar(x))
        M.push(x);
      else {
        const w = q[v] || "__$!SCALAR" + y.__next++;
        y[w] = { item: x, index: v }, M.push(w);
      }
    }
    return M;
  }
  isScalarized(d, y) {
    return typeof d == "string" && d in y;
  }
  descalarize(d, y) {
    return this.isScalarized(d, y) ? y[d].item : d;
  }
  arrayDiff(d, y) {
    const $ = { __next: 1 }, q = this.scalarize(d, $), M = { __next: $.__next }, v = this.scalarize(y, M, $);
    this.options.sort && (q.sort(), v.sort());
    const x = new Le.SequenceMatcher(null, q, v).getOpcodes();
    let w = [], b = 0, W = !0;
    for (const [ue, P, te, X, ne] of x) {
      let m, i, h, a, _, S, o, t;
      switch (ue === "equal" || this.options.keysOnly && ue === "replace" || (W = !1), ue) {
        case "equal":
          for (m = P, a = te, h = P <= a; h ? m < a : m > a; h ? m++ : m--) {
            const e = q[m];
            if (this.isScalarized(e, $)) {
              if (!this.isScalarized(e, M))
                throw new Error(
                  `internal bug: isScalarized(item, originals1) != isScalarized(item, originals2) for item ${JSON.stringify(
                    e
                  )}`
                );
              const n = this.descalarize(e, $), s = this.descalarize(e, M), r = this.diff(n, s);
              r.equal ? this.options.full || this.options.keepUnchangedValues ? w.push([" ", n]) : w.push([" "]) : (w.push(["~", r.result]), W = !1);
            } else
              this.options.full || this.options.keepUnchangedValues ? w.push([" ", e]) : w.push([" "]);
            b += 10;
          }
          break;
        case "delete":
          for (m = P, S = te, _ = P <= S; _ ? m < S : m > S; _ ? m++ : m--)
            w.push(["-", this.descalarize(q[m], $)]), b -= 5;
          break;
        case "insert":
          for (i = X, t = ne, o = X <= t; o ? i < t : i > t; o ? i++ : i--)
            w.push(["+", this.descalarize(v[i], M)]), b -= 5;
          break;
        case "replace":
          if (this.options.keysOnly) {
            let e, n;
            for (m = P, n = te, e = P <= n; e ? m < n : m > n; e ? m++ : m--) {
              const s = this.diff(
                this.descalarize(q[m], $),
                this.descalarize(v[m - P + X], M)
              );
              s.equal ? w.push([" "]) : (w.push(["~", s.result]), W = !1);
            }
          } else {
            let e, n, s, r;
            for (m = P, n = te, e = P <= n; e ? m < n : m > n; e ? m++ : m--)
              w.push(["-", this.descalarize(q[m], $)]), b -= 5;
            for (i = X, r = ne, s = X <= r; s ? i < r : i > r; s ? i++ : i--)
              w.push(["+", this.descalarize(v[i], M)]), b -= 5;
          }
          break;
      }
    }
    return W || x.length === 0 ? (this.options.full ? w = d : w = void 0, b = 100) : b = Math.max(0, b), { score: b, result: w, equal: W };
  }
  diff(d, y) {
    const $ = pe(d), q = pe(y);
    if ($ === q)
      switch ($) {
        case "object":
          return this.objectDiff(d, y);
        case "array":
          return this.arrayDiff(d, y);
      }
    let M = 100, v = d, x;
    return this.options.keysOnly ? (x = !0, v = void 0) : ($ === "date" && q === "date" ? x = d.getTime() === y.getTime() : x = d === y, x ? this.options.full || (v = void 0) : (M = 0, this.options.outputNewOnly ? v = y : v = { __old: d, __new: y })), { score: M, result: v, equal: x };
  }
}
function Ve(A, d, y = {}) {
  return y.precision !== void 0 && (A = Oe(A, y.precision), d = Oe(d, y.precision)), new Je(y).diff(A, d).result;
}
export {
  Ve as diff
};
