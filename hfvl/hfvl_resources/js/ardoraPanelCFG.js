//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=30;
var successes=0; successesMax=9; attempts=0; attemptsMax=3;
var score=0; scoreMax=9; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicidades, este es un acierto"; messageTime="Lo siento el tiempo llegó a su fin"; messageError="Te has equivocado"; messageAttempts="Lo siento te quedaste sin intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var texSel=0; var doneA=["0","0","0","0","0","0","0","0","0"];
var posX=[239,387,527,168,181,325,491,599,587]; var posY=[75,35,89,199,270,298,249,193,355];
var coorx=["MjM0", "Mzgy", "NTIy", "MTYz", "MTc2", "MzIw", "NDg2", "NTk0", "NTgy"]; var coory=["NzU", "MzU", "ODk", "MTk5", "Mjcw", "Mjk4", "MjQ5", "MTkz", "MzU1"]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var al1=["", "", "", "", "", "", "", "", ""]; var al2=["", "", "", "", "", "", "", "", ""]; var al3=["", "", "", "", "", "", "", "", ""]; var al4=["", "", "", "", "", "", "", "", ""]; answers=["Keylogger", "Bot", "Ramsomware", "Spyware", "Exploit", "Gusano", "Pishing", "Troyano", "virus"];indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="aGZ2bA"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
