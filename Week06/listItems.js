/*function addList() {
    let ul = document.getElementById("addList");
    let listItem = document.getElementById("addItem");
    let listItem = document.createElement("li");
    listItem.setAttribute('id', listItem.value);
    listItem.appendChild(document.createTextNode(addItem.value));
    ul.appendChild(li);
}*/

function addItem(){
    var ul = document.getElementById("list");
    var itemList = document.getElementById("itemList");
    var li = document.createElement("li");
    li.setAttribute('id',itemList.value);
    li.appendChild(document.createTextNode(itemList.value));
    ul.appendChild(li);

}
