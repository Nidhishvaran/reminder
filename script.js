let i = 0;
function add(){
    
  
    var work = String(document.getElementById("text_input").value)
    if (work === ""){
        alert("please enter your work to remember")
    }
    else{
     
    i = i+1
    let h2 = document.getElementById("work_h")
    h2.innerText = "your work("+i+")"
    
    //var new_tag = document.createElement("h3")  
    var new_tag = document.createElement("h3") 
    var new_text = document.createTextNode(i+")  "+work+"")
    new_tag.value = new_text
    new_tag.appendChild(new_text)
    var element = document.getElementById("new")
    element.appendChild(new_tag)
    document.getElementById("text_input").value = "";
    var new_tag_btn = document.createElement("input")
    var new_btn_text = none;
    new_tag_btn.appendChild(new_btn_text)
    var _element = document.getElementById("c_box")
    _element.appendChild(new_tag_btn)
    console.log(document.getElementById("c_box").type)
    
    
}
}
function remove(){
    if (document.getElementById("new").innerHTML === ""){

    }
    else{
let labelEmail = document.getElementById("new");
    labelEmail.innerHTML = ""
    
    document.getElementById("text_input").value = "";
    i = 0
    window.location.reload(true)
    }
    
}