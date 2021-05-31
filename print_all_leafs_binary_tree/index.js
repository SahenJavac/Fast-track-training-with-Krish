const BinarySearchTree = require('./binary_tree');

 function createTree(){
    const tree = new BinarySearchTree();
    tree.insert(20);
    tree.insert(70);
    tree.insert(40);
    tree.insert(260);
    tree.insert(204);
    tree.insert(40);
    tree.insert(340);
    tree.insert(8);
    tree.insert(450);
    tree.insert(74);
    tree.insert(23);
    tree.insert(54);
    tree.insert(2);
    tree.insert(60);
    tree.insert(90);
    tree.insert(12);
    tree.insert(5);
    tree.insert(89);
    
    return tree.printLeaf();
}

console.log(createTree())






