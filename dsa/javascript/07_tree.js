// Tree

// Tree

// binary tree implementation and traversal.
class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTreeBuilder {
  constructor() {
    this.idx = -1;
  }

  buildTree(nodes) {
    this.idx++;

    if (nodes[this.idx] === -1) {
      return null;
    }

    const newNode = new TreeNode(nodes[this.idx]);
    newNode.left = this.buildTree(nodes);
    newNode.right = this.buildTree(nodes);
    return newNode;
  }
}

function preorderTraversal(root, result = []) {
  if (root === null) {
    return result;
  }

  result.push(root.data);
  preorderTraversal(root.left, result);
  preorderTraversal(root.right, result);
  return result;
}

function inorderTraversal(root, result = []) {
  if (root === null) {
    return result;
  }

  inorderTraversal(root.left, result);
  result.push(root.data);
  inorderTraversal(root.right, result);
  return result;
}

function postorderTraversal(root, result = []) {
  if (root === null) {
    return result;
  }

  postorderTraversal(root.left, result);
  postorderTraversal(root.right, result);
  result.push(root.data);
  return result;
}

function levelOrderTraversal(root) {
  const result = [];

  if (root === null) {
    return result;
  }

  const queue = [root];

  while (queue.length !== 0) {
    const size = queue.length;
    const level = [];

    for (let i = 0; i < size; i++) {
      const current = queue.shift();
      level.push(current.data);

      if (current.left !== null) {
        queue.push(current.left);
      }

      if (current.right !== null) {
        queue.push(current.right);
      }
    }

    result.push(level);
  }

  return result;
}

// identical binary trees check.
function isIdentical(root1, root2) {
  if (root1 === null || root2 === null) {
    return root1 === root2;
  }

  return (
    root1.data === root2.data &&
    isIdentical(root1.left, root2.left) &&
    isIdentical(root1.right, root2.right)
  );
}

function treeHeight(root) {
  if (root === null) {
    return 0;
  }

  const leftHeight = treeHeight(root.left);
  if (leftHeight === -1) {
    return -1;
  }

  const rightHeight = treeHeight(root.right);
  if (rightHeight === -1) {
    return -1;
  }

  if (Math.abs(leftHeight - rightHeight) > 1) {
    return -1;
  }

  return Math.max(leftHeight, rightHeight) + 1;
}

// height-balanced binary tree check.
function isBalanced(root) {
  return treeHeight(root) !== -1;
}

// left view of a binary tree.
function leftView(root) {
  const list = [];
  collectLeftView(root, list, 0);
  return list;
}

function collectLeftView(root, list, level) {
  if (root === null) {
    return;
  }

  if (level === list.length) {
    list.push(root.data);
  }

  collectLeftView(root.left, list, level + 1);
  collectLeftView(root.right, list, level + 1);
}

// spiral (zigzag) level order traversal of a binary tree.
function findSpiral(root) {
  const result = [];

  if (root === null) {
    return result;
  }

  const queue = [root];
  let reverse = true;

  while (queue.length > 0) {
    const size = queue.length;
    const level = [];

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      level.push(node.data);

      if (node.left !== null) {
        queue.push(node.left);
      }

      if (node.right !== null) {
        queue.push(node.right);
      }
    }

    if (reverse) {
      result.push(...level.reverse());
    } else {
      result.push(...level);
    }

    reverse = !reverse;
  }

  return result;
}

// valid bst check.
function isValidBST(root) {
  let prev = null;

  function inorder(node) {
    if (node === null) {
      return true;
    }

    if (!inorder(node.left)) {
      return false;
    }

    if (prev !== null && node.data <= prev.data) {
      return false;
    }

    prev = node;
    return inorder(node.right);
  }

  return inorder(root);
}
