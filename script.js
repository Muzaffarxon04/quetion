function checkAnswer(event){

    event.preventDefault()

    let score = 0;
    let total = 12;

    let q1 = document.forms["quizeForm"]["q1"].value,
        q2 = document.forms["quizeForm"]["q2"].value,
        q3 = document.forms["quizeForm"]["q3"].value,
        q4 = document.forms["quizeForm"]["q4"].value,
        q5 = document.forms["quizeForm"]["q5"].value,
        q6 = document.forms["quizeForm"]["q6"].value,
        q7 = document.forms["quizeForm"]["q7"].value,
        q8 = document.forms["quizeForm"]["q8"].value,
        q9 = document.forms["quizeForm"]["q9"].value,
        q10 = document.forms["quizeForm"]["q10"].value;

    for(let i = 0; i < total; i++){
        if(eval(`q${i}`) == ""){
              alert(`Siz ${i}-savolni belgilamay ketdingiz!`)
        }
    }

    
    for(let i = 0; i <= total; i++){
        let answer =[ "a", "c", "a", "a", "b", "a", "b", "d", "d", "c",];
       
        console.log(eval(`answer[${i -1}]`))
        if(eval(`q${i}`) == answer[i -1]){
            ++score;
        }
    }

    result.textContent = score;
    percent.textContent = `${score * 100 /10} % to'pladingiz`;

    return score
}







