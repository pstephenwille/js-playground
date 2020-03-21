function isBalanced(node) {
    let leftCount = node.left? countNodes(node.left): 0;
    let rightCount = node.right? countNodes(node.right): 0;

    return Math.abs(rightCount - leftCount) <= 1;
}


function countNodes(node, count = 0) {
    if(node.left) {
        count++;
        return countNodes(node.left, count);
    }
    if(node.right) {
        count++;
        return countNodes(node.right, count);
    }

    return count;
}
