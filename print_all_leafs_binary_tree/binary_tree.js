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


    //to print all the leaf nodes of the tree
    printLeaf() {
        let currentNode = this.root;
        let leafValues = [];

        const traversal = (node) => {
            //go left if left exists
            if (node.left) {
                traversal(node.left);
                if (node.left.left === null && node.left.right === null) {

                    leafValues.push(node.left.data);
                }
            }
            //Go right if  right exists
            if (node.right) {
                traversal(node.right);
                if (node.right.left === null && node.right.right === null) {

                    leafValues.push(node.right.data);
                }
            }
        }

        traversal(currentNode);

        return leafValues;
    }

}


