var boughtcost = document.getElementById("boughtcost");
        var quantity = document.getElementById("quantity");
        var currentcost = document.getElementById("currentcost");
        var op = document.getElementById("op");
        function PLgetter(){
            if((boughtcost.value<0) || (quantity.value<0)|| (currentcost.value<0)){
                op.innerText = `Inavlid inputs`;
                return
            }
            var amountWhenBought = boughtcost.value * quantity.value;
            var amountNow = currentcost.value * quantity.value;
            var PL = amountNow - amountWhenBought;
            var perc = (PL/amountWhenBought)*100;
            perc = parseFloat(perc).toFixed(2);
            if(PL<0){
                op.innerText = `Loss of ${(PL)*(-1)} Rs which is ${perc} %`;
            }
            else{op.innerText = `Profit of ${PL} Rs which is ${perc} % !`}
            if(amountNow<=amountWhenBought/2){
                op.classList.add("sad");
            }
        }

