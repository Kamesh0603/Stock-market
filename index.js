var boughtcost = document.getElementById("boughtcost");
        var quantity = document.getElementById("quantity");
        var currentcost = document.getElementById("currentcost");
        var op = document.getElementById("op");
        function PLgetter(){
            
            if((boughtcost.value=="") || (quantity.value=="")|| (currentcost.value=="")){
                op.innerText = "Please give an input";
                return;
            }
            if((boughtcost.value<0) || (quantity.value<0)|| (currentcost.value<0)){
                op.innerText = `Inavlid inputs. Please select a positive number`;
                return;
            }
            var amountWhenBought = boughtcost.value * quantity.value;
            var amountNow = currentcost.value * quantity.value;
            var PL = amountNow - amountWhenBought;
            var perc = (PL/amountWhenBought)*100;
            if(amountWhenBought==0){
                perc = PL*100;
            }
            perc = parseFloat(perc).toFixed(2);
            if(PL<0){
                perc = perc*(-1);
                op.innerText = `Loss of ${(PL)*(-1)} which is ${perc} %`;
            }
            else{op.innerText = `Profit of ${PL} which is ${perc} % !`}
            if(amountNow<=amountWhenBought/2){
                op.classList.add("sad");
            }
        }

