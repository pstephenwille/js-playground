longestCommonPrefix = (strs) => {
    let prefix = '';
    let ltr = 0;

    while (ltr < strs[0].length) {
        prefix += strs[0][ltr];//using first word as reference string

        for (let word = 0; word < strs.length; word++) {

            if (prefix.charAt(ltr) !== strs[word][ltr]) {
                //no match, remove last prefix char and return
                prefix = prefix.substr(0, ltr);
                return prefix;
            }

        }
        ltr++;
    }

    return prefix;
};

const data = ["flower", "flow", "flower", "flowowowo", 'flox'];
console.log('longestCommonPrefix ', longestCommonPrefix(data));