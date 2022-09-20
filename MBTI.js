
function submitAnswers() {

    let
        iAM = document.getElementById("iAM"),
        theyARE = document.getElementById("theyARE"),
        statement = document.getElementById("statement"),
        noans = "<h1 style='color:red;margin: auto;width: 50%;border: 3px solid #ec858d;padding: 10px;background-color:#C1C1C1;'> Hey friend..You've gotta make a choice by selecting your personality type & the person in questions personality type.</h1>",
        goodCompatibility = "<br/> <h1 style='color:#65FF00;margin: auto;width: 50%;border: 3px solid #ec858d;padding: 10px;background-color:#C1C1C1;'>Good Estimated Compatibility 🙂</h1>",
        mediumCompatibility = "<br/> <h1 style='color:#FF9900;margin: auto;width: 50%;border: 3px solid #ec858d;padding: 10px;background-color:#C1C1C1;'>Medium Estimated Compatibility 😅</h1>",
        lowCompatibility = "<br/> <h1 style='color:#e3242b;margin: auto;width: 50%;border: 3px solid #ec858d;padding: 10px;background-color:#C1C1C1;'>Low Estimated Compatibility 😢</h1>",
        veryGoodCompatibility = "<br/> <h1 style='color:#3D85C6;margin: auto;width: 50%;border: 3px solid #ec858d;padding: 10px;background-color:#C1C1C1;'>Very Good Estimated Compatibility 🥰</h1>",
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
        ISFPxISFP = goodCompatibility,
        ISFPxESTP = lowCompatibility,
        ISFPxESFP = veryGoodCompatibility,
        ISFPxINTJ = goodCompatibility,
        ISFPxINTP = lowCompatibility,
        ISFPxENTJ = goodCompatibility,
        ISFPxENTP = lowCompatibility,
        ISFPxINFJ = mediumCompatibility,
        ISFPxINFP = mediumCompatibility,
        ISFPxENFJ = mediumCompatibility,
        ISFPxENFP = mediumCompatibility,
        ISFPxISTJ = veryGoodCompatibility,
        ISFPxISFJ = mediumCompatibility,
        ISFPxESTJ = veryGoodCompatibility,
        ISFPxESFJ = mediumCompatibility,
        ESTPxESTP = goodCompatibility,
        ESTPxESFP = lowCompatibility,
        ESTPxINTJ = mediumCompatibility,
        ESTPxINTP = mediumCompatibility,
        ESTPxENTJ = mediumCompatibility,
        ESTPxENTP = mediumCompatibility,
        ESTPxINFJ = goodCompatibility,
        ESTPxINFP = lowCompatibility,
        ESTPxENFJ = goodCompatibility,
        ESTPxENFP = lowCompatibility,
        ESTPxISTJ = mediumCompatibility,
        ESTPxISFJ = veryGoodCompatibility,
        ESTPxESTJ = mediumCompatibility,
        ESTPxESFJ = veryGoodCompatibility,
        ESFPxESFP = goodCompatibility,
        ESFPxINTJ = goodCompatibility,
        ESFPxINTP = lowCompatibility,
        ESFPxENTJ = goodCompatibility,
        ESFPxENTP = lowCompatibility,
        ESFPxINFJ = mediumCompatibility,
        ESFPxINFP = mediumCompatibility,
        ESFPxENFJ = mediumCompatibility,
        ESFPxENFP = mediumCompatibility,
        ESFPxISTJ = veryGoodCompatibility,
        ESFPxISFJ = mediumCompatibility,
        ESFPxESTJ = veryGoodCompatibility,
        ESFPxESFJ = mediumCompatibility;




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
        if (theyARE.value == "ENTP") { //done
            statement.innerHTML = ISTPxENTP;
        }
        if (theyARE.value == "INFJ") { //done
            statement.innerHTML = ISTPxINFJ;
        }
        if (theyARE.value == "INFP") { //done
            statement.innerHTML = ISTPxINFP;
        }
        if (theyARE.value == "ENFJ") { //done
            statement.innerHTML = ISTPxENFJ;
        }
        if (theyARE.value == "ENFP") { //done
            statement.innerHTML = ISTPxENFP;
        }
        if (theyARE.value == "ISTJ") { //done
            statement.innerHTML = ISTPxISTJ;
        }
        if (theyARE.value == "ISFJ") { //done
            statement.innerHTML = ISTPxISFJ;
        }
        if (theyARE.value == "ESTJ") { //done
            statement.innerHTML = ISTPxESTJ;
        }
        if (theyARE.value == "ESFJ") { //done
            statement.innerHTML = ISTPxESFJ;
        }
    }


    if (iAM.value == "ISFP") {
        if (theyARE.value == "ISTP") { //done
            statement.innerHTML = ISTPxISFP;
        }
        if (theyARE.value == "ISFP") { //done
            statement.innerHTML = ISFPxISFP;
        }
        if (theyARE.value == "ESTP") { //done
            statement.innerHTML = ISFPxESTP;
        }
        if (theyARE.value == "ESFP") { //done
            statement.innerHTML = ISFPxESFP;
        }
        if (theyARE.value == "INTJ") { //done
            statement.innerHTML = ISFPxINTJ;
        }
        if (theyARE.value == "INTP") { //done
            statement.innerHTML = ISFPxINTP;
        }
        if (theyARE.value == "ENTJ") { //done
            statement.innerHTML = ISFPxENTJ;
        }
        if (theyARE.value == "ENTP") { //done
            statement.innerHTML = ISFPxENTP;
        }
        if (theyARE.value == "INFJ") { //done
            statement.innerHTML = ISFPxINFJ;
        }
        if (theyARE.value == "INFP") { //done
            statement.innerHTML = ISFPxINFP;
        }
        if (theyARE.value == "ENFJ") { //done
            statement.innerHTML = ISFPxENFJ;
        }
        if (theyARE.value == "ENFP") { //done
            statement.innerHTML = ISFPxENFP;
        }
        if (theyARE.value == "ISTJ") { //done
            statement.innerHTML = ISFPxISTJ;
        }
        if (theyARE.value == "ISFJ") { //done
            statement.innerHTML = ISFPxISFJ;
        }
        if (theyARE.value == "ESTJ") { //done
            statement.innerHTML = ISFPxESTJ;
        }
        if (theyARE.value == "ESFJ") { //done
            statement.innerHTML = ISFPxESFJ;
        }
    }





    //ESTP
    if (iAM.value == "ESTP") {
        if (theyARE.value == "ISTP") { //done
            statement.innerHTML = ISTPxESTP;
        }
        if (theyARE.value == "ISFP") { //done
            statement.innerHTML = ISFPxESTP;
        }
        if (theyARE.value == "ESTP") { //done
            statement.innerHTML = ESTPxESTP;
        }
        if (theyARE.value == "ESFP") { //done
            statement.innerHTML = ESTPxESFP;
        }
        if (theyARE.value == "INTJ") { //done
            statement.innerHTML = ESTPxINTJ;
        }
        if (theyARE.value == "INTP") { //done
            statement.innerHTML = ESTPxINTP;
        }
        if (theyARE.value == "ENTJ") { //done
            statement.innerHTML = ESTPxENTJ;
        }
        if (theyARE.value == "ENTP") { //done
            statement.innerHTML = ESTPxENTP;
        }
        if (theyARE.value == "INFJ") { //done
            statement.innerHTML = ESTPxINFJ;
        }
        if (theyARE.value == "INFP") { //done
            statement.innerHTML = ESTPxINFP;
        }
        if (theyARE.value == "ENFJ") { //done
            statement.innerHTML = ESTPxENFJ;
        }
        if (theyARE.value == "ENFP") { //done
            statement.innerHTML = ESTPxENFP;
        }
        if (theyARE.value == "ISTJ") { //done
            statement.innerHTML = ESTPxISTJ;
        }
        if (theyARE.value == "ISFJ") { //done
            statement.innerHTML = ESTPxISFJ;
        }
        if (theyARE.value == "ESTJ") { //done
            statement.innerHTML = ESTPxESTJ;
        }
        if (theyARE.value == "ESFJ") { //done
            statement.innerHTML = ESTPxESFJ;
        }
    }



    //ESFP
    if (iAM.value == "ESFP") {
        if (theyARE.value == "ISTP") { //done
            statement.innerHTML = ISTPxESFP;
        }
        if (theyARE.value == "ISFP") { //done
            statement.innerHTML = ISFPxESFP;
        }
        if (theyARE.value == "ESTP") { //done
            statement.innerHTML = ESTPxESFP;
        }
        if (theyARE.value == "ESFP") { //done
            statement.innerHTML = ESFPxESFP;
        }
        if (theyARE.value == "INTJ") { //done
            statement.innerHTML = ESFPxINTJ;
        }
        if (theyARE.value == "INTP") { //done
            statement.innerHTML = ESFPxINTP;
        }
        if (theyARE.value == "ENTJ") { //done
            statement.innerHTML = ESFPxENTJ;
        }
        if (theyARE.value == "ENTP") { //done
            statement.innerHTML = ESFPxENTP;
        }
        if (theyARE.value == "INFJ") { //done
            statement.innerHTML = ESFPxINFJ;
        }
        if (theyARE.value == "INFP") { //done
            statement.innerHTML = ESFPxINFP;
        }
        if (theyARE.value == "ENFJ") { //done
            statement.innerHTML = ESFPxENFJ;
        }
        if (theyARE.value == "ENFP") { //done
            statement.innerHTML = ESFPxENFP;
        }
        if (theyARE.value == "ISTJ") { //done
            statement.innerHTML = ESFPxISTJ;
        }
        if (theyARE.value == "ISFJ") { //done
            statement.innerHTML = ESFPxISFJ;
        }
        if (theyARE.value == "ESTJ") { //done
            statement.innerHTML = ESFPxESTJ;
        }
        if (theyARE.value == "ESFJ") { //done
            statement.innerHTML = ESFPxESFJ;
        }
    }




    //INTJ
    if (iAM.value == "INTJ") {
        if (theyARE.value == "ISTP") {
            statement.innerHTML = ISTPxINTJ;
        }
        if (theyARE.value == "ISFP") {
            statement.innerHTML = ISFPxINTJ;
        }
        if (theyARE.value == "ESTP") {
            statement.innerHTML = ESTPxINTJ;
        }
        if (theyARE.value == "ESFP") {
            statement.innerHTML = ESFPxINTJ;
        }
        if (theyARE.value == "INTJ") {
            statement.innerHTML = INTJxINTJ;
        }
        if (theyARE.value == "INTP") {
            statement.innerHTML = INTJxINTP;
        }
        if (theyARE.value == "ENTJ") {
            statement.innerHTML = INTJxENTJ;
        }
        if (theyARE.value == "ENTP") {
            statement.innerHTML = INTJxENTP;
        }
        if (theyARE.value == "INFJ") {
            statement.innerHTML = INTJxINFJ;
        }
        if (theyARE.value == "INFP") {
            statement.innerHTML = INTJxINFP;
        }
        if (theyARE.value == "ENFJ") {
            statement.innerHTML = INTJxENFJ;
        }
        if (theyARE.value == "ENFP") {
            statement.innerHTML = INTJxENFP;
        }
        if (theyARE.value == "ISTJ") {
            statement.innerHTML = INTJxISTJ;
        }
        if (theyARE.value == "ISFJ") {
            statement.innerHTML = INTJxISFJ;
        }
        if (theyARE.value == "ESTJ") {
            statement.innerHTML = INTJxESTJ;
        }
        if (theyARE.value == "ESFJ") {
            statement.innerHTML = INTJxESFJ;
        }
    }




    //INTP
    if (iAM.value == "INTP") {
        if (theyARE.value == "ISTP") {
            statement.innerHTML = ISTPxINTP;
        }
        if (theyARE.value == "ISFP") {
            statement.innerHTML = ISFPxINTP;
        }
        if (theyARE.value == "ESTP") {
            statement.innerHTML = ETSPxINTP;
        }
        if (theyARE.value == "ESFP") {
            statement.innerHTML = ESFPxINTP;
        }
        if (theyARE.value == "INTJ") {
            statement.innerHTML = INTJxINTP;
        }
        if (theyARE.value == "INTP") {
            statement.innerHTML = INTPxINTP;
        }
        if (theyARE.value == "ENTJ") {
            statement.innerHTML = INTPxENTJ;
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
            statement.innerHTML = ISTPxENTJ;
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
            statement.innerHTML = ISTPxENTP;
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
            statement.innerHTML = ISTPxINFJ;
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
            statement.innerHTML = ISTPxINFP;
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
            statement.innerHTML = ISTPxENFJ;
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
            statement.innerHTML = ISTPxENFP;
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
            statement.innerHTML = ISTPxISTJ;
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
            statement.innerHTML = ISTPxISFJ
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
            statement.innerHTML = ISTPxESTJ;
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
            statement.innerHTML = ISTPxESFJ;
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

