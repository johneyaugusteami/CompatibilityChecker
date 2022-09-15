
function submitAnswers() {
    let theyMasc = document.getElementById("theyMasc"),
        theyFem = document.getElementById("theyFem"),
        theyMascFem = document.getElementById("theyMascFem"),
        iMasc = document.getElementById("iMasc"),
        iFem = document.getElementById("iFem"),
        iMascFem = document.getElementById("iMascFem"),
        iAM = document.getElementById("iAM"),
        imINTO = document.getElementById("imINTO"),
        statement = document.getElementById("statement");

    if ((iAM === iMasc && imINTO === theyFem) || (iAM === iFem && imINTO === theyMasc)) {
        statement.innerHTML("<h4 style='color:blue;'>You're straight! Your people are the reason that 100% of the population are here!</h4>")
    }
    else if ((iAM === iMasc && imINTO === theyMasc) || (iAM === iFem && imINTO === theyFem) || (iAM === iMascFem && imINTO === theyMasc || theyFem)) {
        statement.innerHTML("<h4 style='color:purple;'>You're GAY BESTIE! Congratulations, because you're automatically just a funner person. Growing up will be hard but it gets better.</h4>")
    }
    else if ((iAM === iMasc && imINTO === theyMascFem) || (iAM === iFem && imINTO === theyMascFem) || (iAM === iMascFem && imINTO === theyMascFem)) { }
    else {
        statement.innerHTML("<h4 style='color:red;'>Hey friend..You've gotta make a choice before clicking submit. Try again!.. or dont. C:</h4>")
    }
}
