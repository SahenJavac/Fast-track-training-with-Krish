class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

module.exports = class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {

        var newNode = new Node(data);

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


    inOrderPrint(currentNode) {
        if (currentNode !== null) {
            this.inOrderPrint(currentNode.left);
            console.log(currentNode.data);
            this.inOrderPrint(currentNode.right);
        }


    }

    preOrderPrint(currentNode) {

        if (currentNode !== null) {

            console.log(currentNode.data);
            //make recursive call to the left subtree
            this.preOrderPrint(currentNode.left);
            //make recursive call to the right subtree
            this.preOrderPrint(currentNode.right);
        }

    }



}