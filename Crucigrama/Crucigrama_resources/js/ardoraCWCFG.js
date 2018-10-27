//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime; var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Lo has hecho muy bien"; messageTime=""; messageError="Error! Vuelve a intentarlo"; messageErrorG="Error! Vuelve a intentarlo"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Q3J1Y2lncmFtYQ"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["Og","Og","Og","Vg","Og","Og","Og","Og","Og","Og","Og","Og","Og","Og","Og"],["Og","Og","UA","SQ","Uw","SA","SQ","Tg","Rw","Og","Og","Og","Og","Og","Og"],["Og","Og","Og","Ug","Og","Og","Og","Og","Og","Og","Og","Og","Og","Og","Og"],["Og","Og","Og","VQ","Og","Og","Og","Og","VA","Og","Og","Og","Og","Og","Og"],["Og","Og","Og","Uw","UA","WQ","Vw","QQ","Ug","RQ","Og","Og","Og","Og","Og"],["Og","Og","Og","Og","Og","Og","Og","Og","Tw","Og","Og","Og","Og","Og","Og"],["Og","Og","Og","Og","Og","Og","Og","Og","WQ","Og","Og","Og","Og","Og","Og"],["Og","Og","Og","Og","Og","Og","Uw","UA","QQ","TQ","Og","Og","Og","Og","Og"],["Og","Og","Og","Og","Og","Og","Og","Og","Tg","Og","Og","Og","Og","Og","Og"],["Og","Og","Og","Rw","VQ","Uw","QQ","Tg","Tw","Og","Og","Og","Og","Og","Og"],["Og","Og","Og","Og","Og","Og","RA","Og","Og","Og","Og","Og","Og","Og","Og"],["Og","Og","Og","Og","Og","Og","Vw","Og","Og","Og","Og","Og","Og","Og","Og"],["Og","Og","Og","Og","Og","TQ","QQ","TA","Vw","QQ","Ug","RQ","Og","Og","Og"],["Og","Og","Og","Og","Og","Og","Ug","Og","Og","Og","Og","Og","Og","Og","Og"],["Og","Og","Og","Og","Og","Og","RQ","Og","Og","Og","Og","Og","Og","Og","Og"]];
var x1=[3,4,6,4,7,4,9,7];
var y1=[2,10,13,5,8,1,4,10];
var x2=[9,9,12,10,10,4,9,7];
var y2=[2,10,13,5,8,5,10,15];
var imaCW=["","","","","","","",""];
var audioCW=["","","","","","","",""];
var defCW=["Programa que induce a que los usuarios introduzcan sus datos confidenciales, con preferencia, datos bancarios","Programa independiente que se replica a través de una red","Dícese del software con carácter malicioso","Software que recolecta información sensible del usuario sin su consentimiento","Mensaje no solicitado y de remitente desconocido enviados en cantidades masivas","Programa informático creado para producir daño en el equipo: actúa de forma transparente y se puede reproducir a si mismo.","Código malicioso que no puede reproducirse a si mismo y ataca una vez es activado","Muestra publicidad al usuario y se distribuyen mediante la instalación de software gratuito"];
var colNum=15;
var rowNum=15;
