
function submitAnswers() {

    let
        iAM = document.getElementById("iAM"),
        imINTO = document.getElementById("imINTO"),
        statement = document.getElementById("statement"),
        gay = "<h4 style='color:purple;'> You're GAY/LESBIAN BESTIE! Keep your head held high King/Queen! +(+), -(-)</h4>",
        bisexual = "<h4 style='color:yellow;'> You're bisexual or a variation of bisexual! You get to participate in the best(& sometimes unfortunatly the worst) of both worlds! Congrats! C: +(+,-), -(+,-) </h4>",
        asexual = "<h4 style='color:white;'> Welcome to the A-TEAM! You're asexual meaning you dont feel sexual attraction to Masculinity or Femininity & thats 100% Valid & I'm proud of you for living your truth! ( , )</h4>",
        Fluid = "<h4 style='color:#D60270;'> Your 'sexuality' is situational dependant on who you're with and what/if you classify yourself as a particular gender. Your non-conformity is inspiring! x(x,+,-) </h4>",
        noans = "<h4 style='color:red;'> Hey friend..You've gotta make a choice by selecting what energy you give off & the energy you're into before clicking submit. Try again!.. or dont. C: </h4>",
        straight = "<h4 style='color:blue;'> You're Straight! Congrats! You and other straight baby making people are the reason that the majority of the human population are here! V gratetful for you! +(-) , -(+) </h4>";



    statement.innerHTML = noans;

    if (iAM.value == "Masculine") {
        if (imINTO.value == "Masculine") {
            statement.innerHTML = gay;
        }
        if (imINTO.value == "Feminine") {
            statement.innerHTML = straight;
        }
        if (imINTO.value == "Both") {
            statement.innerHTML = bisexual;
        }
    }

    if (iAM.value == "Feminine") {
        if (imINTO.value == "Masculine") {
            statement.innerHTML = straight;
        }
        if (imINTO.value == "Feminine") {
            statement.innerHTML = gay;
        }
        if (imINTO.value == "Both") {
            statement.innerHTML = bisexual;
        }
    }

    if (iAM.value == "Both") {
        if (imINTO.value == "Masculine") {
            statement.innerHTML = Fluid;
        }
        if (imINTO.value == "Feminine") {
            statement.innerHTML = Fluid;
        }
        if (imINTO.value == "Both") {
            statement.innerHTML = Fluid;
        }
    }

    if (imINTO.value == "Nothing") {
        statement.innerHTML = asexual;
    }

}

