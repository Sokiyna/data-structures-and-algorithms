
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(root) {
        this.root = null;
    }

    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    preorder(node) {
        if (node !== null) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    postorder(node) {
        if (node !== null) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }
}

class BinarySearchTree extends BinaryTree {
    constructor(root) {
        super(root);
    }
    insert(data) {
        let newNode = new Node(data);

        if (this.root === null)
            this.root = newNode;
        else
            this.insertNode(this.root, newNode);
    }


    insertNode(node, newNode) {

        if (newNode.data < node.data) {
            if (node.left === null)
                node.left = newNode;
            else


                this.insertNode(node.left, newNode);
        }

        else {
            if (node.right === null)
                node.right = newNode;
            else


                this.insertNode(node.right, newNode);
        }
    }

    getRootNode() {
        return this.root;
    }

    search(data) {
        let currNode = this.root;
        while (currNode !== null) {
            if (currNode.data === data) {
                return true;
            } else if (data < currNode.data) {
                currNode = currNode.left;
            } else {
                currNode = currNode.right;
            }
        }
        return false;
    }


}


let BST = new BinarySearchTree();


BST.insert(10);
BST.insert(20);
BST.insert(30);
BST.insert(40);


let root = BST.getRootNode();

let contain = BST.search(12);
console.log(contain);
console.log("inorder traversal");
BST.inorder(root);

console.log("postorder traversal");
BST.postorder(root);
console.log("preorder traversal");
BST.preorder(root);


module.exports = { Node, BinaryTree, BinarySearchTree }