let countDownDate = new Date("Mar 04, 2024 00:00:00").getTime();
        let x = setInterval(function(){
            let now = new Date().getTime();
            const distancia = countDownDate - now;
            // console.log(distancia, "é a distancia")
            const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
            const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

            document.getElementById("dias").innerHTML = dias;
            document.getElementById("horas").innerHTML = horas;
            document.getElementById("minutos").innerHTML = minutos;
            document.getElementById("segundos").innerHTML = segundos;

            if(distancia < 0){
                clearInterval(x)
                document.getElementById("dias").innerHTML = "00";
                document.getElementById("horas").innerHTML = "00";
                document.getElementById("minutos").innerHTML = "00";
                document.getElementById("segundos").innerHTML = "00";

            }



            // console.log(days, "é a distancia")

        },1000);