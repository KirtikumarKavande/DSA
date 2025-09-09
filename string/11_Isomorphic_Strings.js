var isIsomorphic = function (s, t) {
    if (s.length !== t.length) return false
    let characterMap = {}
    const alreadyTaken = new Set()
    for (let i = 0; i < s.length; i++) {
        if (characterMap[s[i]]) {
            if (characterMap[s[i]] !== t[i]) return false
        } else {
            if (alreadyTaken.has(t[i])) return false
            characterMap[s[i]] = t[i]
            alreadyTaken.add(t[i])
        }
    }
    return true
};


// approch2 

var isIsomorphic = function(s, t) {
    const charIndexS = {};
    const charIndexT = {};

    for (let i = 0; i < s.length; i++) {
        if (!(s[i] in charIndexS)) {
            charIndexS[s[i]] = i;
        }

        if (!(t[i] in charIndexT)) {
            charIndexT[t[i]] = i;
        }

        if (charIndexS[s[i]] !== charIndexT[t[i]]) {
            return false;
        }
    }

    return true;    
};