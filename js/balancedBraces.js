isBalancedBraces = function(str) {
    let braces = [],
        pass = true;
    Array.prototype
        .slice
        .call(str)
        .forEach(char => {
            switch (char) {
                case '(':
                    braces.push(')');
                    break;
                case '[':
                    braces.push(']');
                    break;
                case '{':
                    braces.push('}');
                    break;
                default:
                    if (braces.length == 0 || char != braces[ braces.length - 1 ]) {
                        return pass = false;
                    }
                    braces.pop();
            }
        });
    pass = braces.length > 0 ? false : pass;
    return pass;
};
