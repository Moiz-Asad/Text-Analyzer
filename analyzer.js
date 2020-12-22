document.getElementById("displ2").style.display="none";
var BTNlistner = document.getElementById("prop");
var BKlustner = document.getElementById("bk");
var Displayer = document.getElementById("disp1").style;
var ResDisplayer = document.getElementById("displ2").style;
var Head = document.getElementById("analyzer");
var Textfld;

BTNlistner.addEventListener("click", function (){
    Test();
})
BKlustner.addEventListener("click", function () {
    Displayer.display = "block";
    ResDisplayer.display = "none";
    Head.innerHTML = "Text Analyzer";
})

function Test()
{
    Textfld = document.getElementById("TextInp").value;
    if (ValidateText(Textfld)) {
        RunAnalyzer();
    }
    else {
        alert("Text is Emplty! Please Fill Text Area First.");
    }
}
function ValidateText(Txt)
{
    if(Txt == "")
    {
        return false;
    }
    else
    {
        return true;
    }
}

function WordCounter(Txt){
    var WC = 0;
    for(var i=0;i<Txt.length;i++)
    {
        if(Txt[i] == " " || Txt[i] == ".")
        {
            WC++;
        }
    }
    return WC;
}
function SentenceCounter(Txt) {
    var SC = 0;
    var i;
    for (i = 0; i < Txt.length; i++) {
        if (Txt[i] == ".") {
            SC++;
        }
    }
    if(Txt[i-1] != ".")
    {
        SC++;
    }
    return SC;
}
function SpaceCounter(Txt) {
    var SC = 0;
    for (var i = 0; i < Txt.length; i++) {
        if (Txt[i] == " ") {
            SC++;
        }
    }
    return SC;
}
function VowelsCounter(Txt) {
    var VC = 0;
    for (var i = 0; i < Txt.length; i++) {
        if (Txt[i] == "a" || Txt[i] == "e" || Txt[i] == "i" || Txt[i] == "o" || Txt[i] == "u") {
            VC++;
        }
    }
    return VC;
}
function ConsonentCounter(Txt)
{
    var CC = 0;
    for (var i = 0; i < Txt.length; i++) {
        if (Txt[i] != "a" && Txt[i] != "e" && Txt[i] != "i" && Txt[i] != "o" && Txt[i] != "u" && Txt[i] != " " && Txt[i] != ".") {
            CC++;
        }
    }
    return CC;
}
function NSCounter(Txt) {
    var NC = 0;
    for (var i = 0; i < Txt.length; i++) {
        if (Txt[i] != " ") {
            NC++;
        }
    }
    return NC;
}
function RunAnalyzer(){
    
    
    Displayer.display = "none";
    ResDisplayer.display = "block";

    var WC = WordCounter(Textfld);
    var StC = SentenceCounter(Textfld);
    var SC = SpaceCounter(Textfld);
    var VC = VowelsCounter(Textfld);
    var CC = ConsonentCounter(Textfld);
    var NSCharCounter = NSCounter(Textfld);
    Head.innerHTML = "Result";
    document.getElementById("wc").innerHTML = "Total Word Count is " + WC + ".";
    document.getElementById("sntc").innerHTML = "Total Sentence Count is " + StC + ".";
    document.getElementById("spc").innerHTML = "Total Space Count is " + SC + ".";
    document.getElementById("vowc").innerHTML = "Total Vowels Count is " + VC + ".";
    document.getElementById("consc").innerHTML = "Total Consonents Count is " + CC + ".";
    document.getElementById("charcns").innerHTML = "Total Characters Count without Spaces is " + NSCharCounter + ".";
    document.getElementById("charc").innerHTML = "Total Characters Count with Spaces is " + Textfld.length + ".";


}