function LinkedList(){
    this.list = [];
};

LinkedList.prototype.add = function(value){
    this.list.push(value);
};

LinkedList.prototype.remove = function(value){
    const index = this.list.indexOf(value);
    if( index != -1 ){
        this.list.splice(index,1);
    }
};

LinkedList.prototype.print = function (value){
    const list = this.list.join(',');
    console.log(`LinkedList{${list}}`);
};

let linkedlist = new LinkedList();
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print();
linkedlist.remove(2);
linkedlist.print();