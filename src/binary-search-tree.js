const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.rootM = null
  }
  root() {
    return this.rootM
  }

  add(data) {
    const newNode = new Node(data)
    if(!this.rootM){
      this.rootM = newNode;
      return
    }

    let currentNode = this.rootM

    while(currentNode){
      if(newNode.data < currentNode.data){
        if(!currentNode.left){
          currentNode.left = newNode
          return
        }
        currentNode = currentNode.left
      }else{
        if(!currentNode.right){
          currentNode.right = newNode
          return
        }
        currentNode = currentNode.right
      }
    }
  }

  has(data) {
    let currentNode = this.rootM
    if(currentNode.data == data){
      return true
    }
    while(currentNode.data != data){
      if(data < currentNode.data){
        if(!currentNode.left){
          return false
        }
        currentNode = currentNode.left
        if(currentNode.data == data){
          return true
        }
      }else{
        if(!currentNode.right){
          return false
        }
        currentNode = currentNode.right
        if(currentNode.data == data){
          return true
        }
      }
    }
  }

  find(data) {
    let currentNode = this.rootM
    if(currentNode.data == data){
      return currentNode
    }
    while(currentNode.data != data){
      if(data < currentNode.data){
        if(!currentNode.left){
          return null
        }
        currentNode = currentNode.left
        if(currentNode.data == data){
          return currentNode
        }
      }else{
        if(!currentNode.right){
          return null
        }
        currentNode = currentNode.right
        if(currentNode.data == data){
          return currentNode
        }
      }
    }
  }

  remove(data) {
    this.rootM = removeNode(this.rootM, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
    
  }

  min() {
    let currentNode = this.rootM
    while(currentNode.left != null){
      currentNode = currentNode.left
    }
    return currentNode.data
  }

  max() {
    let currentNode = this.rootM
    while(currentNode.right != null){
      currentNode = currentNode.right
    }
    return currentNode.data
  }
}
const tree = new BinarySearchTree();
tree.add(2);
      tree.add(7);
      tree.add(1);
      tree.add(8);
      tree.add(4);
      tree.add(32);
      tree.add(12);
      tree.add(14);
console.log(tree.find(2))
module.exports = {
  BinarySearchTree
};