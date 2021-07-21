function calc() {
    let type_design = document.getElementById("type_design");
    let is_html = document.getElementById("is_html");
    let count = document.getElementById("count");
    let result = document.getElementById("result"); 
    let price = 0;
   
       price += parseInt(type_design.options[type_design.selectedIndex].value);
       price += (is_html.checked == true) ? parseInt(is_html.value) : 0;
       price = parseInt(count.value) * price;
       result.innerHTML = price;

        if (count.value == '' ||  count.value == null) {
            result.innerHTML = 0;
        } 
}

console.log(type_design.options[type_design.selectedIndex]);
