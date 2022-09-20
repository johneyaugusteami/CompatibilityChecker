
function submitAnswers() {

    let
        iAM = document.getElementById("iAM"),
        theyARE = document.getElementById("theyARE"),
        statement = document.getElementById("statement"),
        goodCompatibility = "<br/> <p style='color:#65FF00;'>Good Estimated Compatibility.</p>",
        mediumCompatibility = "<br/> <p style='color:#FF9900;'>Medium Estimated Compatibility</p>",
        lowCompatibility = "<br/> <p style='color:#FF3333;'>Low Estimated Compatibility</p>",
        veryGoodCompatibility = "<br/> <p style='color:#3D85C6;'>Very Good Estimated Compatibility</p>",
        ISTPxISTP = goodCompatibility,
        ISTPxISFP = lowCompatibility,
        ISTPxESTP = veryGoodCompatibility,
        ISTPxESFP = lowCompatibility,
        ISTPxINTJ = mediumCompatibility,
        ISTPxINTP = mediumCompatibility,
        ISTPxENTJ = mediumCompatibility,
        ISTPxENTP = mediumCompatibility,
        ISTPxINFJ = goodCompatibility,
        ISTPxINFP = lowCompatibility,
        ISTPxENFJ = goodCompatibility,
        ISTPxENFP = lowCompatibility,
        ISTPxISTJ = mediumCompatibility,
        ISTPxISFJ = veryGoodCompatibility,
        ISTPxESTJ = mediumCompatibility,
        ISTPxESFJ = veryGoodCompatibility,
        noans = "<h4 style='color:red;'> Hey friend..You've gotta make a choice by selecting your personality type & the person in questions personality type.</h4>";




    statement.innerHTML = noans;






    //ISTP
    if (iAM.value == "ISTP") {
        if (theyARE.value == "ISTP") { //done
            statement.innerHTML = ISTPxISTP;
        }
        if (theyARE.value == "ISFP") { //done
            statement.innerHTML = ISTPxISFP;
        }
        if (theyARE.value == "ESTP") { //done
            statement.innerHTML = ISTPxESTP;
        }
        if (theyARE.value == "ESFP") { //done
            statement.innerHTML = ISTPxESFP;
        }
        if (theyARE.value == "INTJ") { //done
            statement.innerHTML = ISTPxINTJ;
        }
        if (theyARE.value == "INTP") { //done
            statement.innerHTML = ISTPxINTP;
        }
        if (theyARE.value == "ENTJ") { //done
            statement.innerHTML = ISTPxENTJ;
        }
        if (theyARE.value == "ENTP") { //
            statement.innerHTML = ISTPxENTP;
        }
        if (theyARE.value == "INFJ") { //
            statement.innerHTML = ISTPxINFJ;
        }
        if (theyARE.value == "INFP") { //
            statement.innerHTML = ISTPxINFP;
        }
        if (theyARE.value == "ENFJ") { //
            statement.innerHTML = ISTPxENFJ;
        }
        if (theyARE.value == "ENFP") { //
            statement.innerHTML = ISTPxENFP;
        }
        if (theyARE.value == "ISTJ") { //
            statement.innerHTML = ISTPxISTJ;
        }
        if (theyARE.value == "ISFJ") { //
            statement.innerHTML = ISTPxISFJ;
        }
        if (theyARE.value == "ESTJ") { //
            statement.innerHTML = ISTPxESTJ;
        }
        if (theyARE.value == "ESFJ") { //
            statement.innerHTML = ISTPxESFJ;
        }
    }





    //ISFP
    if (iAM.value == "ISFP") {
        if (theyARE.value == "ISTP") {
            statement.innerHTML = ISTPxISFP;
        }
        if (theyARE.value == "ISFP") {
            statement.innerHTML = ISFPxISFP;
        }
        if (theyARE.value == "ESTP") {
            statement.innerHTML = ISFPxESTP;
        }
        if (theyARE.value == "ESFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INFJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENFJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ISTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ISFJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESFJ") {
            statement.innerHTML = variableforcouple;
        }
    }




    //ESTP
    if (iAM.value == "ESTP") {
        if (theyARE.value == "ISTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ISFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INFJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENFJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ISTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ISFJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESFJ") {
            statement.innerHTML = variableforcouple;
        }
    }



    //ESFP
    if (iAM.value == "ESFP") {
        if (theyARE.value == "ISTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ISFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INFJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENFJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ISTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ISFJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESFJ") {
            statement.innerHTML = variableforcouple;
        }
    }




    //INTJ
    if (iAM.value == "INTJ") {
        if (theyARE.value == "ISTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ISFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INFJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENFJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ISTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ISFJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESFJ") {
            statement.innerHTML = variableforcouple;
        }
    }




    //INTP
    if (iAM.value == "INTP") {
        if (theyARE.value == "ISTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ISFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INFJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENFJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ISTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ISFJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESFJ") {
            statement.innerHTML = variableforcouple;
        }
    }




    //ENTJ
    if (iAM.value == "ENTJ") {
        if (theyARE.value == "ISTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ISFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INFJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENFJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ISTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ISFJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESFJ") {
            statement.innerHTML = variableforcouple;
        }
    }




    //ENTP
    if (iAM.value == "ENTP") {
        if (theyARE.value == "ISTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ISFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INFJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENFJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ISTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ISFJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESFJ") {
            statement.innerHTML = variableforcouple;
        }
    }



    //INFJ
    if (iAM.value == "INFJ") {
        if (theyARE.value == "ISTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ISFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INFJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENFJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ISTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ISFJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESFJ") {
            statement.innerHTML = variableforcouple;
        }
    }




    //INFP
    if (iAM.value == "INFP") {
        if (theyARE.value == "ISTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ISFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INFJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENFJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ISTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ISFJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESFJ") {
            statement.innerHTML = variableforcouple;
        }
    }




    //ENFJ
    if (iAM.value == "ENFJ") {
        if (theyARE.value == "ISTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ISFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INFJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENFJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ISTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ISFJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESFJ") {
            statement.innerHTML = variableforcouple;
        }
    }




    //ENFP
    if (iAM.value == "ENFP") {
        if (theyARE.value == "ISTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ISFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INFJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENFJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ISTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ISFJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESFJ") {
            statement.innerHTML = variableforcouple;
        }
    }



    //ISTJ
    if (iAM.value == "ISTJ") {
        if (theyARE.value == "ISTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ISFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INFJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENFJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ISTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ISFJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESFJ") {
            statement.innerHTML = variableforcouple;
        }
    }




    //ISFJ
    if (iAM.value == "ISFJ") {
        if (theyARE.value == "ISTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ISFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INFJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENFJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ISTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ISFJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESFJ") {
            statement.innerHTML = variableforcouple;
        }
    }




    //ESTJ
    if (iAM.value == "ESTJ") {
        if (theyARE.value == "ISTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ISFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INFJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENFJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ISTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ISFJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESFJ") {
            statement.innerHTML = variableforcouple;
        }
    }




    //ESFJ
    if (iAM.value == "ESFJ") {
        if (theyARE.value == "ISTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ISFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENTP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INFJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "INFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENFJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ENFP") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ISTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ISFJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESTJ") {
            statement.innerHTML = variableforcouple;
        }
        if (theyARE.value == "ESFJ") {
            statement.innerHTML = variableforcouple;
        }
    }
}

