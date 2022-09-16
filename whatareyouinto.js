
function submitAnswers() {

    let
        iAM = document.getElementById("iAM"),
        imINTO = document.getElementById("imINTO"),
        statement = document.getElementById("statement"),
        gay = "<h4 style='color:purple;'> You're GAY/LESBIAN BESTIE! Congratulations! Keep your head held high King/Queen! Growing up will be hard but it gets better.</h4>",
        bisexual = "<h4 style='color:yellow;'> You're bisexual or a variation of bisexual! You get to participate in the best of both worlds! Congrats! C: </h4>",
        asexual = "<h4 style='color:white;'> Welcome to the A-TEAM! You're asexual & thats awesome!</h4>",
        noans = "<h4 style='color:red;'> Hey friend..You've gotta make a choice by selecting what energy you give off & the energy you're into before clicking submit. Try again!.. or dont. C: </h4>",
        straight = "<h4 style='color:blue;'> You're Straight! Congrats! You and other straight baby making people are the reason that the majority of the human population are here! V gratetful for you! </h4>";

    statement.innerHTML = noans;

    if (iAM.value == "Masculine") {
        if (imINTO.value == "Masculine") {
            statement.innerHTML = gay;
        }
        if (imINTO.value == "Feminine") {
            statement.innerHTML = straight;
        }
    }

    if (iAM.value == "Feminine") {
        if (imINTO.value == "Masculine") {
            statement.innerHTML = straight;
        }
        if (imINTO.value == "Feminine") {
            statement.innerHTML = gay;
        }
    }

    if (iAM.value == "Both") {
        if (imINTO.value == "Masculine") {
            statement.innerHTML = gay;
        }
        if (imINTO.value == "Feminine") {
            statement.innerHTML = straight;
        }
    }

    if (imINTO.value == "Nothing") {
        statement.innerHTML = asexual;
    }

}

