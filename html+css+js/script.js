/**
 * javascript 有6中基本类型
 *  Number、String、
 * 
 * prompt() 输入值
 *  prompt('What is your first name')
 */

// Do not repeat yourself DRY
function go(name, age){
    alert(name);
    alert(age);
}

/**
 * document 操作
 *  document.getElementsByTagName('tagName')
 *  document.getElementsByClassName('tagClassName')
 *  document.getElementsById('tagId')
 *  document.querySelector('.className') || document.querySelector('#id')
 *  document.querySelectorAll('p')
 * 
 * 改变标签中的内容
 *  tag.innerHTML = "content"
 * 
 * 改变标签的类名
 *  tag.className = ""
 * 
 * 改变标签的其中一个类名(会留下空格)
 *  tag.className = tag.className.replacce("oneName", "")
 * 
 * 标签类名集合
 *  tag.classList
 * 
 * 父元素
 *  tag.parentElement
 */

/**
 * 事件
 *  click
 *  mouseenter
 *  mouseleave
 *  mousedown 鼠标按下
 *  mouseup 鼠标释放
 *  mousemove
 *  keydown
 *  keyup
 *  focus 聚焦
 *  blur 失焦
 * 
 * tag.addEventListener("event", fn)
 * 
 * function fn() {
 *  console.log(this)
 *  this.["attributes"]["data-img"] // 获取data-img属性值
 *  this.attributes["data-img"].value // 获取data-img属性值
 * }
 */  

var numOne = document.getElementById("num-one")
var numTwo = document.getElementById("num-two")
var addSum = document.getElementById("add-sum")

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

function add() {
    // null NaN undefined
    var one = parseFloat(numOne.value) || 0;
    var two = parseFloat(numTwo.value) || 0;
    addSum.innerHTML = one+two
}


var checklist = document.getElementById("checklist");

var items = checklist.querySelectorAll("li");
var inputs = checklist.querySelectorAll("input");

items.forEach((item, index) => {
    item.addEventListener("click", editItem);
    inputs[index].addEventListener("blur", updateItem);
    inputs[index].addEventListener("keypress", itemKeypress);
})

function editItem() {
    this.className = "edit"
    var input = this.querySelector("input")
    input.focus(); // 聚焦
    input.setSelectionRange(0, input.value.length) // 选中一个范围
}

function updateItem() {
    // 前一个兄弟节点的HTML文本
    this.previousElementSibling.innerHTML = this.value
    // 父节点
    this.parentNode.className = ""
}

function itemKeypress(event) {
    if (event.which === 13) {
        updateItem.call(this) // 用call 那边不需要手动接收
    }
}