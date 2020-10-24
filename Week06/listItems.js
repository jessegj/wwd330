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
    var li = document.createElement("input");
    var itemCount = document.getElementById("itemCount");
    var itemCountValue = itemCount.value;
    var label = document.createElement("label");
    var br = document.createElement("br");
    itemCountValue++;
    li.setAttribute("id", "item" + itemCountValue);
    li.setAttribute("type", "checkbox");
    li.setAttribute("name", "item" + itemCountValue);
    li.setAttribute("checked", "false");
    ul.appendChild(li);
    label.setAttribute("for", "item" + itemCountValue);
    label.setAttribute("id", "itemFor" + itemCountValue);
    label.innerHTML = itemList.value;
    ul.appendChild(label);
    ul.appendChild(br);
    itemCount.value = itemCountValue;  

}
function deleteItem() {
    var itemCount = document.getElementById("itemCount").value;
    var itemCountRemoved = 0;
    for (var index = 1; index <= itemCount; index++) {
        var item = document.getElementById("item" + index);
        if (item.checked) {
            var label = document.getElementById("itemFor" + index);
            label.remove();
            item.remove();
            itemCountRemoved++;

        }    

    }
    document.getElementById("itemCount").value = itemCount - itemCountRemoved;
}
 