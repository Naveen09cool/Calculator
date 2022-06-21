// newFunction();

// function newFunction() {
//     var value1 = 5;
//     var value2 = 55;
//     var opertator = "*"
//     var result = eval(value1+" "+opertator+""+value2);
//     console.log(result);
// }

var buttons = document.getElementsByTagName("button");
var display = document.getElementById("outputDisplay");
var secondDisplay = document.getElementById("inputDisplay");
var value1 = 0;
var value2 = null;
var opertator = null;
var result = 0;

// to handle clicks on all the buttons
for(var i = 0; i<buttons.length; i++){
    buttons[i].addEventListener('click',function(){
        var inputValue = this.getAttribute('data-value');
        if(inputValue == '+'){
            // operator clicked
            opertator = '+';
            value1 = parseFloat(display.textContent);
            secondDisplay.innerText = value1+opertator;
            display.innerText = "";
        }else if(inputValue == '-'){
            // operator clicked
            opertator = '-';
            value1 = parseFloat(display.textContent);
            secondDisplay.innerText = value1+opertator;
            display.innerText = "";
        }else if(inputValue == '*'){
            // operator clicked
            opertator = '*';
            value1 = parseFloat(display.textContent);
            secondDisplay.innerText = value1+opertator;
            display.innerText = "";
        }else if(inputValue == '/'){
            // operator clicked
            opertator = '/';
            value1 = parseFloat(display.textContent);
            secondDisplay.innerText = value1+opertator;
            display.innerText = "";
        }
        // else if(inputValue == 'C'){
        //     opertator = 'C';
        //     value1 = (value1.slice(0,-1));
        //     value1 = parseFloat(display.textContent);
        //     // if(opertator.length==null){
        //         // value1 = value1.slice(0, -2);
        //         // display.innerText = "dei";
        //     // }
        //     // value2 = value2.slice(0, -2);
        //     // display.innerText =  value1;                     
        // }
        else if(inputValue == '%'){
            // operator clicked
            opertator = '/';
            value1 = parseFloat(display.textContent);
            secondDisplay.innerText = value1+'%';
            result = eval(value1+" "+opertator+""+100);
            display.innerText = result;
        }else if(inputValue == 'sq'){
            // operator clicked
            opertator = '*';
            value1 = parseFloat(display.textContent);
            secondDisplay.innerText = value1+'²';
            result = eval(value1+" "+opertator+""+value1);
            display.innerText = result;
        }else if(inputValue == 'AC'){
            value1 = "";
            display.innerText = "";
            secondDisplay.innerText = "";
        }
        else if(inputValue == '='){
            // evaluate result
            value2 = parseFloat(display.textContent);
            secondDisplay.innerHTML += value2;
            result = eval(value1+" "+opertator+""+value2);
            display.innerText = result;            
        }else{
            display.innerText += inputValue;
        }
    })
}