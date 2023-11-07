setInterval(Shadow, 3500);



function Shadow() {
    const ferebi = [ '#FFA07A', '#FFD700', '#ADFF2F', '#00FFFF', '#FF69B4', '#FFC0CB', '#9370DB', '#1E90FF', '#FA8072', '#FF8C00', ];
        let shadow_feri_indeqsi = Math.floor(Math.random() * ferebi.length);
            let shadow_feri = ferebi[shadow_feri_indeqsi];
        document.body.style.boxShadow = "0 0 20px 1px inset" + shadow_feri;    
}

function calulator_size(){

    let calculator_border = document.getElementById('calculator_border');
     calculator_border.style.transition = "ease-in-out 1.5s";
    let width = document.body.offsetWidth;
    let height = document.body.offsetHeight;
    let calculat_width = width*0.6;
    let calculat_height = calculat_width*1.5;
    console.log(calculat_width)
    console.log(calculat_height)

    calculator_border.style.width = calculat_width + "px";
    calculator_border.style.height = calculat_height + "px";
    calculator_border.style.maxHeight = "80%";
    calculator_border.style.maxWidth = height * 0.5 +"px";
    }




        
function calulator(){
    Shadow(); calulator_size();



let input = document.getElementById("input");
let btns = document.querySelectorAll(".btns");
let wiladi = document.querySelector(".decimal");
let operaciebi = document.querySelectorAll(".operacia");
let toloba = document.getElementById("toloba");
let clear = document.getElementById('clear');
let back_btn = document.getElementById('back_btn');
let left =document.getElementById('left');
let view = document.getElementById('view');


var viwe_loc_x = left.offsetWidth + 65;

view.style.left = viwe_loc_x +"px";
view.style.top = "21%";

window.addEventListener('resize', () =>{
    var viwe_loc_x = left.offsetWidth + 65;
    view.style.left = viwe_loc_x +"px";
    calulator_size();
    })

let sawyisi_mnishvneloba = "";
let shesasrulebeli_operacia = "";
let saboloo_mnishvneloba = "";

    btns.forEach(button => {
    button.addEventListener("click", () => {
        sawyisi_mnishvneloba += button.value;
        input.value = sawyisi_mnishvneloba;
    });
    });

    wiladi.addEventListener("click", () => {
        if (!sawyisi_mnishvneloba.includes(".")) {
            sawyisi_mnishvneloba += ".";
            input.value = sawyisi_mnishvneloba;
        }
        });

        operaciebi.forEach(button => {
            button.addEventListener("click", () => {
                saboloo_mnishvneloba = input.value;
                shesasrulebeli_operacia = button.value;
                sawyisi_mnishvneloba = "";

                view.textContent = saboloo_mnishvneloba +" " + shesasrulebeli_operacia;

            });
            });

            toloba.addEventListener("click", () => {
                const result = eval(saboloo_mnishvneloba + shesasrulebeli_operacia + sawyisi_mnishvneloba);
                input.value = result;
                sawyisi_mnishvneloba = result;
                saboloo_mnishvneloba = "";
                shesasrulebeli_operacia = "";
                view.textContent = "";

                });

                clear.addEventListener("click", () => {
                    input.value = "";
                    sawyisi_mnishvneloba = "";
                    shesasrulebeli_operacia = "";
                    saboloo_mnishvneloba = "";
                    view.textContent = "";
                })

                back_btn.addEventListener("click", () => {
                    input.value = input.value.slice(0, -1);
                    sawyisi_mnishvneloba = input.value;
            

                })



                let calculator_border = document.getElementById('calculator_border');
                let history = document.getElementById('history');

                
                let calculator_border_width = calculator_border.offsetWidth - 20;
                let calculator_border_height = calculator_border.offsetHeight - 12;
                history.style.width = calculator_border_width +"px";
                history.style.height = calculator_border_height +"px";


}