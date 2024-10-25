const d = document;

export default function countdown(id, limitDate, finalMessage) {
    const $countdown = d.getElementById(id),
     countdownDate = new Date(limitDate).getTime();

    let countdownTempo = setInterval(() => {
        let now = new Date().getTime(),
        limitTime = countdownDate - now,
        segundosEnMS = 1000,
        minutosEnMS = segundosEnMS * 60,
        horasEnMS = minutosEnMS * 60,
        diasEnMS = horasEnMS * 24,
        residuoDias = limitTime % diasEnMS,
        residuoHoras = residuoDias % horasEnMS,
        residuoMinutos = residuoHoras % minutosEnMS,
        days = Math.floor(limitTime / (diasEnMS)),
        hours = ("0" + Math.floor(residuoDias / horasEnMS)).slice(-2),
        minutes = ("0" + Math.floor(residuoHoras / minutosEnMS)).slice(-2),
        seconds = ("0" + Math.floor(residuoMinutos / segundosEnMS)).slice(-2);
        $countdown.innerHTML = `<h3>Faltan: ${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos</h3>`
        let days1 = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
        hours1 = ("0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2),
        minutes1 = ("0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))).slice(-2),
        seconds1 = ("0" + Math.floor((limitTime % (1000 * 60)) / (1000))).slice(-2);
        // console.log(days1,hours1,minutes1,seconds1)
        if (limitTime < 0) {
            clearInterval(countdownTempo);
            $countdown.innerHTML = `<h3>${finalMessage}</h3>`
        }
    }, 1000); 
}