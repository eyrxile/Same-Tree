function TreeNode(val){
    this.val = val;
    this.left = this.right = null;
}

var isSameTree = function(p, q) {
    if(!p && !q){
        return true;
    }

    if(!p || !q || p.val !== q.val){
        return false;
    }

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

//Example usage:

const p1 = new TreeNode(1);
p1.left = new TreeNode(2);
p1.right = new TreeNode(3);

const q1 = new  TreeNode(1);
q1.left = new TreeNode(2);
q1.right = new TreeNode(3);

console.log(isSameTree(p1, q1));

const p2 = new TreeNode(1);
p2.left = new TreeNode(2);

const q2 = new TreeNode(1);
q2.right = new TreeNode(2);

console.log(isSameTree(p2, q2));

const p3 = new TreeNode(1);
p3.left = new TreeNode(2);
p3.right = new TreeNode(1);

const q3 = new TreeNode(1);
q3.left = new TreeNode(1);
q3.right = new TreeNode(2);

console.log(isSameTree(p3,q3));