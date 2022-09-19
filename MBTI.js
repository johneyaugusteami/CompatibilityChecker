
function submitAnswers() {

    let
        iAM = document.getElementById("iAM"),
        theyARE = document.getElementById("theyARE"),
        statement = document.getElementById("statement"),
        goodCompatibility = "<br/> <span style='color:#65FF00;'>Good Estimated Compatibility.</span>",
        mediumCompatibility = "<br/> <span style='color:#FF9900;'>Medium Estimated Compatibility</span>",
        lowCompatibility = "<br/> <span style='color:#FF3333;'>Low Estimated Compatibility</span>",
        veryGoodCompatibility = "<br/> <span style='color:#3D85C6;'>Very Good Estimated Compatibility</span>",




        ISTPxISTP = goodCompatibility + "<p>One of the most valuable aspects of the ISTJ-ISTJ relationship is the ability to share and compare notes about human experiences. <br/> An ISTP to ISTP relationship is simply a supreme friendship between two people who 'understand' each other and feel a deep connection. Additionally, they often agree on how they should handle life's challenges and what their priorities should be. They may be too similar in the wrong way because they share the same weaknesses. As a result, instead of focusing on growth, they tend to reinforce each other's vulnerabilities and rampant behaviors.</p> <br/>",
        ISTPxISFP = lowCompatibility + "<p>ISFPs and ISTPs draw on each other's logic and pragmatism. It is a relationship of low emotion and low passion. They can teach each other interesting things, but they cannot help each other solve problems. Both seem stubborn to their partner because they both maintain their own point of view and do not budge. Ultimately, these relationships are better when the two are more developed and share common interests. The ISFP and ISTP relationship can be beneficial for self-development as they learn to work together.</p> <br/>",
        ISTPxESTP = veryGoodCompatibility + "<p>ESTP and ISTP couples tend to see the best in each other. They are proud of their partner's accomplishments and comfort them when they are depressed. Being in a relationship with your reflective type can be difficult. Getting to know your partner on such a deep level may seem like fun, but it can lead to some problems for these two. ESTP and ISTP partners can be unenthusiastic and try to control and impose their opinions rather than learn from each other. As a result, they can get on each other's nerves. Fortunately, any tension that may arise between an ESTP and ISTP partner can often be quickly resolved by simply putting some distance between them.</p> <br/>",
        ISTPxESFP = lowCompatibility + "<p>Relationships between ESFPs and ISTPs, especially as spouses and siblings, can be seriously damaging! It can work with sufficient distance, but living together drains each other's energy. One dominates the other's weakest areas, leaving no chance for the other to shine. As a result, this relationship pairing is holding ESFP back. They fail to recognize their strengths and spend their lives overcompensating for their failures after years of criticism.</p> <br/>",
        ISTPxINTJ = mediumCompatibility + "<p>In an INTJ-ISTP relationship, the (ISTP) benefactor (INTJ) sees the beneficiary as someone who needs their help to improve themselves. They feel that their beneficiaries need them to function, are not well adjusted to real-life, and that without them they would be lost. ISTP Spends a lot of time teaching and explaining. Some people compare this relationship to that between older and younger brother or sister. Others compare supervision to the parent-child relationship. However, Benefactor's primary and secondary functions complement each other, resulting in a relationship that is more caring and less competitive.</p> <br/>",
        ISTPxINTP = mediumCompatibility + "<p>ISTPs and INTPs are surprisingly similar at first glance and easy to connect with. In a way, they are very similar because of their common interests and worldview. While they find it easy to strike up a conversation, their relationship hasn't gone far beyond that point. They enjoy arguing about the same topics, but they think about them very differently and cannot influence each other's opinions. Up to There seems to be a difference in the philosophy of almost every approach.</p> <br/>",
        ISTPxENTJ = mediumCompatibility + "<p>ENTJs and ISTPs have a moderate amount of emotional distance and comfort in their relationship. From afar, they look similar and compatible in their attitudes to life. However, this is only an initial illusion. As the distance grows closer, the two find themselves disagreeing on some fundamental points, such as their worldview. Additionally, the two struggle to agree on priorities and take action. Usually, the closer they get, the more strained the relationship. ENTJ and ISTP relationships have a range of things that work well together, determined by emotional intimacy, how the relationship is initiated, and who is leading. Set your tone. They are never compatible, but they may be able to live together in harmony and accept their differences.</p> <br/>",
        ISTPxENTP = mediumCompatibility + "<p></p> <br/>",
        ISTPxINFJ = goodCompatibility + "<p></p> <br/>",
        ISTPxINFP = lowCompatibility + "<p></p> <br/>",
        ISTPxENFJ = goodCompatibility + "<p></p> <br/>",
        ISTPxENFP = lowCompatibility + "<p></p> <br/>",
        ISTPxISTJ = mediumCompatibility + "<p></p> <br/>",
        ISTPxISFJ = veryGoodCompatibility + "<p></p> <br/>",
        ISTPxESTJ = mediumCompatibility + "<p></p> <br/>",
        ISTPxESFJ = veryGoodCompatibility + "<p></p> <br/>";

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

