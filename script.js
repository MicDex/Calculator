let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if (e.target.innerHTML =='=') {
            string = eval(string);
            input.value = string;
            
        } 


        else if (e.target.innerHTML =='AC') {
                string="";
                input.value = string;
            
        } else if (e.target.innerHTML =='DEl') {
            string = string.substring(0, string.length-1);
            input.value = string;
        
        }
         else {
            string += e.target.innerHTML;
            input.value= string;
        }

      



    })
    
});
/*
.equalBtn{
    background: #091921;
    color: #6f6f6f;
    font-size: 30px;
    border-radius: 50%;
    box-shadow: -1px -1px 3px rgba(255,255, 255, 0.1),
                -2px -2px 6px rgba(0,0,0, 0.8);
}
.equalBtn:hover{
    box-shadow: -1px -1px 3px rgba(255,255, 255, 0.1),
                -2px -2px 6px rgba(0,0,0, 0.8),
               inset -2px -2px 10px rgba(255,255, 255, 0.05),
               inset 2px 2px 10px rgba(0,0,0, 0.5);
    color: #00fff1;
    text-shadow: 0 0 5px #00fff1,
                 0 0 20px #00fff1; #215e65

}*/