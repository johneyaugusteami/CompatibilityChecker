
function submitAnswers() {
    let theyMasc = document.getElementById("theyMasc"),
        theyFem = document.getElementById("theyFem"),
        theyMascFem = document.getElementById("theyMascFem"),
        iMasc = document.getElementById("iMasc"),
        iFem = document.getElementById("iFem"),
        iMascFem = document.getElementById("iMascFem"),
        iAM = document.getElementById("iAM"),
        imINTO = document.getElementById("imINTO"),
        nothing = document.getElementById("nothing"),
        statement = document.getElementById("statement"),
        gay = "<h4 style='color:purple;'> You're GAY BESTIE! Congratulations!  Step 1:Eyebrows MATTER. They shape the face and will change your whole look. Please keep them clean friend. Growing up will be hard but it gets better. You code is (++) or (--). </h4>",
        bisexual = "<h4 style='color:yellow;'> You're bisexual or a variation of bisexual! You get to participate in the best of both worlds! Lucky you! C: Your code is x(+-). </h4>",
        asexual = "<h4 style='color:white;'> Welcome to the A-TEAM! You're asexual & thats awesome! Your code is x(,)</h4>",
        noans = "<h4 style='color:red;'> Hey friend..You've gotta make a choice by selecting what energy you give off & the energy you're into before clicking submit. Try again!.. or dont. C: </h4>",
        straight = "<h4 style='color:blue;'> You're straight! Congrats! Your people are the reason that the majority of the human population are here! Your code is (+-). </h4>";


    if ((iAM === iMasc && imINTO === theyFem) || (iAM === iFem && imINTO === theyMasc)) {
        // statement.innerHTML("<h4 style='color:blue;'> You're straight! Congrats! Your people are the reason that the majority of the human population are here! Your code is (+-). </h4>")
        statement.insertAdjacentHTML("afterbegin", straight);
    }
    else if ((iAM === iMasc && imINTO === theyMasc) || (iAM === iFem && imINTO === theyFem)) {
        //statement.innerHTML("<h4 style='color:purple;'> You're GAY BESTIE! Congratulations!  Step 1:Eyebrows MATTER. They shape the face and will change your whole look. Please keep them clean friend. Growing up will be hard but it gets better. You code is (++) or (--). </h4>")
        statement.insertAdjacentHTML("afterbegin", gay);
    }
    else if ((iAM === iMasc && imINTO === theyMascFem) || (iAM === iFem && imINTO === theyMascFem) || (iAM === iMascFem && imINTO === theyMascFem)) {
        // statement.innerHTML("<h4 style='color:yellow;'> You're bisexual or a variation of bisexual! You get to participate in the best of both worlds! Lucky you! C: Your code is x(+-). </h4>")
        statement.insertAdjacentHTML("afterbegin", bisexual);
    }
    else if ((iAM === iFem || iMasc || iMascFem) && (imINTO === nothing)) {
        // statement.innerHTML("<h4 style='color:white;'> Welcome to the A-TEAM! You're asexual & thats awesome! Your code is x(,)</h4>")
        statement.insertAdjacentHTML("afterbegin", asexual);
    }
    else {
        //  statement.innerHTML("<h4 style='color:red;'> Hey friend..You've gotta make a choice by selecting what energy you give off & the energy you're into before clicking submit. Try again!.. or dont. C: </h4>")
        statement.insertAdjacentHTML("afterbegin", noans);
    }
}
