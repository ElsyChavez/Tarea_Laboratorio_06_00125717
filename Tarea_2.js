var convertor = {
    metros_cm: 100,
    kilometros_m: 1000,
    pies_m: 0.3048,
    celsius_fa: 32,
    kelvin_fa: -459.67,
    kelvin_c: -273.15,

    convertir: (medida, uni_ant, uni_nueva, tipo) => {
        if( (uni_ant == 'm') && (tipo == 'L' || tipo=='l')){
            let met_cen = medida * 100;
            console.log(medida+"m equivale a "+met_cen+"cm.");
        }
        else if( (uni_ant == 'km') && (tipo == 'L' || tipo=='l')){
            let km_met = medida * 1000;
            console.log(medida+"km equivale a "+km_met+"m.");
        }
        else if( (uni_ant == 'p') && (tipo == 'L' || tipo=='l')){
            let p_met = medida * 0.3048;
            console.log(medida+"pie equivale a "+p_met+"m.");
        }
        else if( (uni_ant == 'c' || uni_ant == 'C') && (tipo == 'T' || tipo=='t')){
            let ce_fa = (medida * (9/5)) + 32;
            console.log(medida+"C equivale a "+ce_fa+"F.");
        }
        else if( (uni_ant == 'k' || uni_ant == 'K') && (tipo == 'T' || tipo=='t')){
            let ke_fa = ((9*(medida - 273.35))/5) + 32;
            console.log(medida+"K equivale a "+ke_fa+"F.");
        }
        else if( (uni_ant == 'k' || uni_ant == 'K') && (tipo == 'T' || tipo=='t')){
            let ke_ce = medida - 273.35;
            console.log(medida+"K equivale a "+ke_ce+"C.");
        }
        else{
            console.log("Alguno de los datos del parametro no son correctos\no no se puede convertir de temperatura a longitud y viceversa.");
        }
        //probarlo asi: convertor.convertir(100,'m','cm','L');
    }
}
