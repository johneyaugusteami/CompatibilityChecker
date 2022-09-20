
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
        ESFPxESFJ = mediumCompatibility,
        INTJxINTJ = goodCompatibility,
        INTJxINTP = mediumCompatibility,
        INTJxENTJ = veryGoodCompatibility,
        INTJxENTP = mediumCompatibility,
        INTJxINFJ = lowCompatibility,
        INTJxINFP = veryGoodCompatibility,
        INTJxENFJ = lowCompatibility,
        INTJxENFP = veryGoodCompatibility,
        INTJxISTJ = mediumCompatibility,
        INTJxISFJ = lowCompatibility,
        INTJxESTJ = mediumCompatibility,
        INTJxESFJ = lowCompatibility,
        INTPxINTP = goodCompatibility,
        INTPxENTJ = mediumCompatibility,
        INTPxENTP = veryGoodCompatibility,
        INTPxINFJ = veryGoodCompatibility,
        INTPxINFP = lowCompatibility,
        INTPxENFJ = veryGoodCompatibility,
        INTPxENFP = lowCompatibility,
        INTPxISTJ = mediumCompatibility,
        INTPxISFJ = goodCompatibility,
        INTPxESTJ = mediumCompatibility,
        INTPxESFJ = goodCompatibility,
        ENTJxENTJ = goodCompatibility,
        ENTJxENTP = mediumCompatibility,
        ENTJxINFJ = lowCompatibility,
        ENTJxINFP = veryGoodCompatibility,
        ENTJxENFJ = lowCompatibility,
        ENTJxENFP = veryGoodCompatibility,
        ENTJxISTJ = mediumCompatibility,
        ENTJxISFJ = lowCompatibility,
        ENTJxESTJ = mediumCompatibility,
        ENTJxESFJ = lowCompatibility,
        ENTPxENTP = goodCompatibility,
        ENTPxINFJ = veryGoodCompatibility,
        ENTPxINFP = lowCompatibility,
        ENTPxENFJ = veryGoodCompatibility,
        ENTPxENFP = lowCompatibility,
        ENTPxISTJ = mediumCompatibility,
        ENTPxISFJ = goodCompatibility,
        ENTPxESTJ = mediumCompatibility,
        ENTPxESFJ = goodCompatibility,
        INFJxINFJ = goodCompatibility,
        INFJxINFP = mediumCompatibility,
        INFJxENFJ = veryGoodCompatibility,
        INFJxENFP = mediumCompatibility,
        INFJxISTJ = lowCompatibility,
        INFJxISFJ = mediumCompatibility,
        INFJxESTJ = lowCompatibility,
        INFJxESFJ = mediumCompatibility,
        INFPxINFP = goodCompatibility,
        INFPxENFJ = mediumCompatibility,
        INFPxENFP = veryGoodCompatibility,
        INFPxISTJ = goodCompatibility,
        INFPxISFJ = mediumCompatibility,
        INFPxESTJ = goodCompatibility,
        INFPxESFJ = mediumCompatibility,
        ENFJxENFJ = goodCompatibility,
        ENFJxENFP = mediumCompatibility,
        ENFJxISTJ = lowCompatibility,
        ENFJxISFJ = mediumCompatibility,
        ENFJxESTJ = lowCompatibility,
        ENFJxESFJ = mediumCompatibility,
        ENFPxENFP = goodCompatibility,
        ENFPxISTJ = goodCompatibility,
        ENFPxISFJ = mediumCompatibility,
        ENFPxESTJ = goodCompatibility,
        ENFPxESFJ = mediumCompatibility,
        ISTJxISTJ = goodCompatibility,
        ISTJxISFJ = lowCompatibility,
        ISTJxESTJ = veryGoodCompatibility,
        ISTJxESFJ = lowCompatibility,
        ISFJxISFJ = goodCompatibility,
        ISFJxESTJ = lowCompatibility,
        ISFJxESFJ = veryGoodCompatibility,
        ESTJxESTJ = goodCompatibility,
        ESTJxESFJ = lowCompatibility,
        ESFJxESFJ = goodCompatibility;



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
        if (theyARE.value == "ISTP") { //done
            statement.innerHTML = ISTPxINTJ;
        }
        if (theyARE.value == "ISFP") { //done
            statement.innerHTML = ISFPxINTJ;
        }
        if (theyARE.value == "ESTP") { //done
            statement.innerHTML = ESTPxINTJ;
        }
        if (theyARE.value == "ESFP") { //done
            statement.innerHTML = ESFPxINTJ;
        }
        if (theyARE.value == "INTJ") { //done
            statement.innerHTML = INTJxINTJ;
        }
        if (theyARE.value == "INTP") { //done
            statement.innerHTML = INTJxINTP;
        }
        if (theyARE.value == "ENTJ") { //done
            statement.innerHTML = INTJxENTJ;
        }
        if (theyARE.value == "ENTP") { //done
            statement.innerHTML = INTJxENTP;
        }
        if (theyARE.value == "INFJ") { //done
            statement.innerHTML = INTJxINFJ;
        }
        if (theyARE.value == "INFP") { //done
            statement.innerHTML = INTJxINFP;
        }
        if (theyARE.value == "ENFJ") { //done
            statement.innerHTML = INTJxENFJ;
        }
        if (theyARE.value == "ENFP") { //done
            statement.innerHTML = INTJxENFP;
        }
        if (theyARE.value == "ISTJ") { //done
            statement.innerHTML = INTJxISTJ;
        }
        if (theyARE.value == "ISFJ") { //done
            statement.innerHTML = INTJxISFJ;
        }
        if (theyARE.value == "ESTJ") { //done
            statement.innerHTML = INTJxESTJ;
        }
        if (theyARE.value == "ESFJ") { //done
            statement.innerHTML = INTJxESFJ;
        }
    }




    //INTP
    if (iAM.value == "INTP") {
        if (theyARE.value == "ISTP") { //done
            statement.innerHTML = ISTPxINTP;
        }
        if (theyARE.value == "ISFP") { //done
            statement.innerHTML = ISFPxINTP;
        }
        if (theyARE.value == "ESTP") { //done
            statement.innerHTML = ETSPxINTP;
        }
        if (theyARE.value == "ESFP") { //done
            statement.innerHTML = ESFPxINTP;
        }
        if (theyARE.value == "INTJ") { //done
            statement.innerHTML = INTJxINTP;
        }
        if (theyARE.value == "INTP") { //done
            statement.innerHTML = INTPxINTP;
        }
        if (theyARE.value == "ENTJ") { //done
            statement.innerHTML = INTPxENTJ;
        }
        if (theyARE.value == "ENTP") { //done
            statement.innerHTML = INTPxENTP;
        }
        if (theyARE.value == "INFJ") { //done
            statement.innerHTML = INTPxINFJ;
        }
        if (theyARE.value == "INFP") { //done
            statement.innerHTML = INTPxINFP;
        }
        if (theyARE.value == "ENFJ") { //done
            statement.innerHTML = INTPxENFJ;
        }
        if (theyARE.value == "ENFP") { //done
            statement.innerHTML = INTPxENFP;
        }
        if (theyARE.value == "ISTJ") { //done
            statement.innerHTML = INTPxISTJ;
        }
        if (theyARE.value == "ISFJ") { //done
            statement.innerHTML = INTPxISFJ;
        }
        if (theyARE.value == "ESTJ") { //done
            statement.innerHTML = INTPxESTJ;
        }
        if (theyARE.value == "ESFJ") { //done
            statement.innerHTML = INTPxESFJ;
        }
    }




    //ENTJ
    if (iAM.value == "ENTJ") {
        if (theyARE.value == "ISTP") { //done
            statement.innerHTML = ISTPxENTJ;
        }
        if (theyARE.value == "ISFP") { //done
            statement.innerHTML = ISFPxENTJ;
        }
        if (theyARE.value == "ESTP") { //done
            statement.innerHTML = ESTPxENTJ;
        }
        if (theyARE.value == "ESFP") { //done
            statement.innerHTML = ESFPxENTJ;
        }
        if (theyARE.value == "INTJ") { //done
            statement.innerHTML = INTJxENTJ;
        }
        if (theyARE.value == "INTP") { //done
            statement.innerHTML = INTPxENTJ;
        }
        if (theyARE.value == "ENTJ") { //done
            statement.innerHTML = ENTJxENTJ;
        }
        if (theyARE.value == "ENTP") { //done
            statement.innerHTML = ENTJxENTP;
        }
        if (theyARE.value == "INFJ") { //done
            statement.innerHTML = ENTJxINFJ;
        }
        if (theyARE.value == "INFP") { //done
            statement.innerHTML = ENTJxINFP;
        }
        if (theyARE.value == "ENFJ") { //done
            statement.innerHTML = ENTJxENFJ;
        }
        if (theyARE.value == "ENFP") { //done
            statement.innerHTML = ENTJxENFP;
        }
        if (theyARE.value == "ISTJ") { //done
            statement.innerHTML = ENTJxISTJ;
        }
        if (theyARE.value == "ISFJ") { //done
            statement.innerHTML = ENTJxISFJ;
        }
        if (theyARE.value == "ESTJ") { //done
            statement.innerHTML = ENTJxESTJ;
        }
        if (theyARE.value == "ESFJ") { //done
            statement.innerHTML = ENTJxESFJ;
        }
    }




    //ENTP
    if (iAM.value == "ENTP") {
        if (theyARE.value == "ISTP") { //done
            statement.innerHTML = ISTPxENTP;
        }
        if (theyARE.value == "ISFP") { //done
            statement.innerHTML = ISFPxENTP;
        }
        if (theyARE.value == "ESTP") { //done
            statement.innerHTML = ESTPxENTP;
        }
        if (theyARE.value == "ESFP") { //done
            statement.innerHTML = ESFPxENTP;
        }
        if (theyARE.value == "INTJ") { //done
            statement.innerHTML = INTJxENTP;
        }
        if (theyARE.value == "INTP") { //done
            statement.innerHTML = INTPxENTP;
        }
        if (theyARE.value == "ENTJ") { //done
            statement.innerHTML = ENTJxENTP;
        }
        if (theyARE.value == "ENTP") { //done
            statement.innerHTML = ENTPxENTP;
        }
        if (theyARE.value == "INFJ") { //done
            statement.innerHTML = ENTPxINFJ;
        }
        if (theyARE.value == "INFP") { //done
            statement.innerHTML = ENTPxINFP;
        }
        if (theyARE.value == "ENFJ") { //done
            statement.innerHTML = ENTPxENFJ
        }
        if (theyARE.value == "ENFP") { //done
            statement.innerHTML = ENTPxENFP
        }
        if (theyARE.value == "ISTJ") { //done
            statement.innerHTML = ENTPxISTJ;
        }
        if (theyARE.value == "ISFJ") { //done
            statement.innerHTML = ENTPxISFJ;
        }
        if (theyARE.value == "ESTJ") { //done
            statement.innerHTML = ENTPxESTJ;
        }
        if (theyARE.value == "ESFJ") { //done
            statement.innerHTML = ENTPxESFJ;
        }
    }



    //INFJ
    if (iAM.value == "INFJ") {
        if (theyARE.value == "ISTP") { //done
            statement.innerHTML = ISTPxINFJ;
        }
        if (theyARE.value == "ISFP") { //done
            statement.innerHTML = ISFPxINFJ;
        }
        if (theyARE.value == "ESTP") { //done
            statement.innerHTML = ESTPxINFJ;
        }
        if (theyARE.value == "ESFP") { //done
            statement.innerHTML = ESPFxINFJ;
        }
        if (theyARE.value == "INTJ") { //done
            statement.innerHTML = INTJxINFJ;
        }
        if (theyARE.value == "INTP") { //done
            statement.innerHTML = INTPxINFJ;
        }
        if (theyARE.value == "ENTJ") { //done
            statement.innerHTML = ENTJxINFJ;
        }
        if (theyARE.value == "ENTP") { //done
            statement.innerHTML = ENTPxINFJ;
        }
        if (theyARE.value == "INFJ") { //done
            statement.innerHTML = INFJxINFJ;
        }
        if (theyARE.value == "INFP") { //done
            statement.innerHTML = INFJxINFP;
        }
        if (theyARE.value == "ENFJ") { //done
            statement.innerHTML = INFJxENFJ;
        }
        if (theyARE.value == "ENFP") { //done
            statement.innerHTML = INFJxENFP;
        }
        if (theyARE.value == "ISTJ") { //done
            statement.innerHTML = INFJxISTJ;
        }
        if (theyARE.value == "ISFJ") { //done
            statement.innerHTML = INFJxISFJ;
        }
        if (theyARE.value == "ESTJ") { //done
            statement.innerHTML = INFJxESTJ;
        }
        if (theyARE.value == "ESFJ") { //done
            statement.innerHTML = INFJxESFJ;
        }
    }




    //INFP
    if (iAM.value == "INFP") {
        if (theyARE.value == "ISTP") { //done
            statement.innerHTML = ISTPxINFP;
        }
        if (theyARE.value == "ISFP") { //done
            statement.innerHTML = ISFPxINFP;
        }
        if (theyARE.value == "ESTP") { //done
            statement.innerHTML = ESTPxINFP;
        }
        if (theyARE.value == "ESFP") { //done
            statement.innerHTML = ESFPxINFP;
        }
        if (theyARE.value == "INTJ") { //done
            statement.innerHTML = INTJxINFP;
        }
        if (theyARE.value == "INTP") { //done
            statement.innerHTML = INTPxINFP;
        }
        if (theyARE.value == "ENTJ") { //done
            statement.innerHTML = ENTJxINFP;
        }
        if (theyARE.value == "ENTP") { //done
            statement.innerHTML = ENTPxINFP;
        }
        if (theyARE.value == "INFJ") { //done
            statement.innerHTML = INFJxINFP;
        }
        if (theyARE.value == "INFP") { //done
            statement.innerHTML = INFPxINFP;
        }
        if (theyARE.value == "ENFJ") { //done
            statement.innerHTML = INFPxENFJ;
        }
        if (theyARE.value == "ENFP") { //done
            statement.innerHTML = INFPxENFP;
        }
        if (theyARE.value == "ISTJ") { //done
            statement.innerHTML = INFPxISTJ;
        }
        if (theyARE.value == "ISFJ") { //done
            statement.innerHTML = INFPxISFJ;
        }
        if (theyARE.value == "ESTJ") { //done
            statement.innerHTML = INFPxESTJ;
        }
        if (theyARE.value == "ESFJ") { //done
            statement.innerHTML = INFPxESFJ;
        }
    }




    //ENFJ
    if (iAM.value == "ENFJ") {
        if (theyARE.value == "ISTP") { //done
            statement.innerHTML = ISTPxENFJ;
        }
        if (theyARE.value == "ISFP") { //done
            statement.innerHTML = ISFPxENFJ;
        }
        if (theyARE.value == "ESTP") { //done
            statement.innerHTML = ESTPxENFJ;
        }
        if (theyARE.value == "ESFP") { //done
            statement.innerHTML = ESFPxENFJ;
        }
        if (theyARE.value == "INTJ") { //done
            statement.innerHTML = INTJxENFJ;
        }
        if (theyARE.value == "INTP") { //done
            statement.innerHTML = INTPxENFJ;
        }
        if (theyARE.value == "ENTJ") { //done
            statement.innerHTML = ENTJxENFJ;
        }
        if (theyARE.value == "ENTP") { //done
            statement.innerHTML = ENTPxENFJ;
        }
        if (theyARE.value == "INFJ") { //done
            statement.innerHTML = INFJxENFJ;
        }
        if (theyARE.value == "INFP") { //done
            statement.innerHTML = INFPxENFJ;
        }
        if (theyARE.value == "ENFJ") { //done
            statement.innerHTML = ENFJxENFJ;
        }
        if (theyARE.value == "ENFP") { //done
            statement.innerHTML = ENFJxENFP;
        }
        if (theyARE.value == "ISTJ") { //done
            statement.innerHTML = ENFJxISTJ;
        }
        if (theyARE.value == "ISFJ") { //done
            statement.innerHTML = ENFJxISFJ;
        }
        if (theyARE.value == "ESTJ") { //done
            statement.innerHTML = ENFJxESTJ;
        }
        if (theyARE.value == "ESFJ") { //done
            statement.innerHTML = ENFJxESFJ;
        }
    }




    //ENFP
    if (iAM.value == "ENFP") {
        if (theyARE.value == "ISTP") { //done
            statement.innerHTML = ISTPxENFP;
        }
        if (theyARE.value == "ISFP") { //done
            statement.innerHTML = ISFPxENFP;
        }
        if (theyARE.value == "ESTP") { //done
            statement.innerHTML = ESTPxENFP;
        }
        if (theyARE.value == "ESFP") { //done
            statement.innerHTML = ESFPxENFP;
        }
        if (theyARE.value == "INTJ") { //done
            statement.innerHTML = INTJxENFP;
        }
        if (theyARE.value == "INTP") { //done
            statement.innerHTML = INTPxENFP;
        }
        if (theyARE.value == "ENTJ") { //done
            statement.innerHTML = ENTJxENFP;
        }
        if (theyARE.value == "ENTP") { //done
            statement.innerHTML = ENTPxENFP;
        }
        if (theyARE.value == "INFJ") { //done
            statement.innerHTML = INFJxENFP;
        }
        if (theyARE.value == "INFP") { //done
            statement.innerHTML = INFPxENFP;
        }
        if (theyARE.value == "ENFJ") { //done
            statement.innerHTML = ENFJxENFP;
        }
        if (theyARE.value == "ENFP") { //done
            statement.innerHTML = ENFPxENFP;
        }
        if (theyARE.value == "ISTJ") { //done
            statement.innerHTML = ENFPxISTJ;
        }
        if (theyARE.value == "ISFJ") { //done
            statement.innerHTML = ENFPxISFJ;
        }
        if (theyARE.value == "ESTJ") { //done
            statement.innerHTML = ENFPxESTJ;
        }
        if (theyARE.value == "ESFJ") { //done
            statement.innerHTML = ENFPxESFJ;
        }
    }



    //ISTJ
    if (iAM.value == "ISTJ") {
        if (theyARE.value == "ISTP") { //done
            statement.innerHTML = ISTPxISTJ;
        }
        if (theyARE.value == "ISFP") { //done
            statement.innerHTML = ISFPxISTJ;
        }
        if (theyARE.value == "ESTP") { //done
            statement.innerHTML = ESTPxISTJ;
        }
        if (theyARE.value == "ESFP") { //done
            statement.innerHTML = ESFPxISTJ;
        }
        if (theyARE.value == "INTJ") { //done
            statement.innerHTML = INTJxISTJ;
        }
        if (theyARE.value == "INTP") { //done
            statement.innerHTML = INTPxISTJ;
        }
        if (theyARE.value == "ENTJ") { //done
            statement.innerHTML = ENTJxISTJ;
        }
        if (theyARE.value == "ENTP") { //done
            statement.innerHTML = ENTPxISTJ;
        }
        if (theyARE.value == "INFJ") { //done
            statement.innerHTML = INFJxISTJ;
        }
        if (theyARE.value == "INFP") { //done
            statement.innerHTML = INFPxISTJ;
        }
        if (theyARE.value == "ENFJ") { //done
            statement.innerHTML = ENFJxISTJ;
        }
        if (theyARE.value == "ENFP") { //done
            statement.innerHTML = ENFPxISTJ;
        }
        if (theyARE.value == "ISTJ") { //done
            statement.innerHTML = ISTJxISTJ;
        }
        if (theyARE.value == "ISFJ") { //done
            statement.innerHTML = ISTJxISFJ;
        }
        if (theyARE.value == "ESTJ") { //done
            statement.innerHTML = ISTJxESTJ;
        }
        if (theyARE.value == "ESFJ") { //done
            statement.innerHTML = ISTJxESFJ;
        }
    }




    //ISFJ
    if (iAM.value == "ISFJ") {
        if (theyARE.value == "ISTP") { //done
            statement.innerHTML = ISTPxISFJ
        }
        if (theyARE.value == "ISFP") { //done
            statement.innerHTML = ISFPxISFJ;
        }
        if (theyARE.value == "ESTP") { //done
            statement.innerHTML = ESTPxISFJ;
        }
        if (theyARE.value == "ESFP") { //done
            statement.innerHTML = ESFPxISFJ;
        }
        if (theyARE.value == "INTJ") { //done
            statement.innerHTML = INTJxISFJ;
        }
        if (theyARE.value == "INTP") { //done
            statement.innerHTML = INTPxISFJ;
        }
        if (theyARE.value == "ENTJ") { //done
            statement.innerHTML = ENTJxISFJ;
        }
        if (theyARE.value == "ENTP") { //done
            statement.innerHTML = ENTPxISFJ;
        }
        if (theyARE.value == "INFJ") { //done
            statement.innerHTML = INFJxISFJ;
        }
        if (theyARE.value == "INFP") { //done
            statement.innerHTML = INFPxISFJ;
        }
        if (theyARE.value == "ENFJ") { //done
            statement.innerHTML = ENFJxISFJ;
        }
        if (theyARE.value == "ENFP") { //done
            statement.innerHTML = ENFPxISFJ;
        }
        if (theyARE.value == "ISTJ") { //done
            statement.innerHTML = ISTJxISFJ;
        }
        if (theyARE.value == "ISFJ") { //done
            statement.innerHTML = ISFJxISFJ;
        }
        if (theyARE.value == "ESTJ") { //done
            statement.innerHTML = ISFJxESTJ;
        }
        if (theyARE.value == "ESFJ") { //done
            statement.innerHTML = ISFJxESFJ;
        }
    }




    //ESTJ
    if (iAM.value == "ESTJ") {
        if (theyARE.value == "ISTP") {
            statement.innerHTML = ISTPxESTJ;
        }
        if (theyARE.value == "ISFP") {
            statement.innerHTML = ISFPxESTJ;
        }
        if (theyARE.value == "ESTP") {
            statement.innerHTML = ESTPxESTJ;
        }
        if (theyARE.value == "ESFP") {
            statement.innerHTML = ESFPxESTJ;
        }
        if (theyARE.value == "INTJ") {
            statement.innerHTML = INTJxESTJ;
        }
        if (theyARE.value == "INTP") {
            statement.innerHTML = INTPxESTJ;
        }
        if (theyARE.value == "ENTJ") {
            statement.innerHTML = ENTJxESTJ;
        }
        if (theyARE.value == "ENTP") {
            statement.innerHTML = ENTPxESTJ;
        }
        if (theyARE.value == "INFJ") {
            statement.innerHTML = INFJxESTJ;
        }
        if (theyARE.value == "INFP") {
            statement.innerHTML = INFPxESTJ;
        }
        if (theyARE.value == "ENFJ") {
            statement.innerHTML = ENFJxESTJ;
        }
        if (theyARE.value == "ENFP") {
            statement.innerHTML = ENFPxESTJ;
        }
        if (theyARE.value == "ISTJ") {
            statement.innerHTML = ISTJxESTJ;
        }
        if (theyARE.value == "ISFJ") {
            statement.innerHTML = ISFJxESTJ;
        }
        if (theyARE.value == "ESTJ") {
            statement.innerHTML = ESTJxESTJ;
        }
        if (theyARE.value == "ESFJ") {
            statement.innerHTML = ESTJxESFJ;
        }
    }




    //ESFJ
    if (iAM.value == "ESFJ") {
        if (theyARE.value == "ISTP") {
            statement.innerHTML = ISTPxESFJ;
        }
        if (theyARE.value == "ISFP") {
            statement.innerHTML = ISFPxESFJ;
        }
        if (theyARE.value == "ESTP") {
            statement.innerHTML = ESTPxESFJ;
        }
        if (theyARE.value == "ESFP") {
            statement.innerHTML = ESFPxESFJ;
        }
        if (theyARE.value == "INTJ") {
            statement.innerHTML = INTJxESFJ;
        }
        if (theyARE.value == "INTP") {
            statement.innerHTML = INTPxESFJ;
        }
        if (theyARE.value == "ENTJ") {
            statement.innerHTML = ENTJx; ESFJ
        }
        if (theyARE.value == "ENTP") {
            statement.innerHTML = ENTPxESFJ;
        }
        if (theyARE.value == "INFJ") {
            statement.innerHTML = INFJxESFJ;
        }
        if (theyARE.value == "INFP") {
            statement.innerHTML = INFPxESFJ;
        }
        if (theyARE.value == "ENFJ") {
            statement.innerHTML = ENFJxESFJ;
        }
        if (theyARE.value == "ENFP") {
            statement.innerHTML = ENFPxESFJ;
        }
        if (theyARE.value == "ISTJ") {
            statement.innerHTML = ISTJxESFJ;
        }
        if (theyARE.value == "ISFJ") {
            statement.innerHTML = ISFJxESFJ;
        }
        if (theyARE.value == "ESTJ") {
            statement.innerHTML = ESTJxESFJ;
        }
        if (theyARE.value == "ESFJ") {
            statement.innerHTML = ESFJxESFJ;
        }
    }
}

