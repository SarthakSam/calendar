function initialize(today,change){
var mon=new Array('January','February','March','April','May','June','July','august','September','October','November','december');
var day=new Array('Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday');
var d=new Array(31,28,31,30,31,30,31,31,30,31,30,31);
var month=document.getElementById('month');
var year=document.getElementById('year');
var dateCount=1;
var flag=0;
var noOfdays=30;
var maxValue=0;

if(change==1||change==-1)
today.setMonth(today.getMonth()+change);
if(change==-2||change==2)
today.setYear((today.getFullYear()+change/2));
noOfdays=d[today.getMonth()];
var y=today.getFullYear();
if(today.getMonth()==1)
{ 
	if (y%400==0||(y%4==0&&y%100!=0)){
	   noOfdays=29;	
	   console.log("leap Year");
	}
    else
    	{
    		noOfdays=28;
    		console.log("not leap");
}}
/*console.log(noOfdays);
*/
month.innerText= mon[today.getMonth()];
year.innerText=today.getFullYear();

today.setDate('1');
dayNo=today.getDay()-1;
if(dayNo==-1)
dayNo=6;
/*console.log(dayNo);
*/for(var i=0;i<7;i++){
flag=0;
if((dayNo+i)>6){
flag=1;
}
dayName=day[(dayNo+i)%7];
/*console.log(dayName);
*/var divSelector=document.getElementById(dayName);
/*console.log(divSelector);*/
var currentDay=divSelector.getElementsByTagName('div');
for(j=1;j<6;j++)
currentDay[j].innerText="";
for(var j=1+flag;j<6;j++){
var value=	dateCount+7*(j-1-flag);
if (value>maxValue) {
	maxValue=value;
}
if(value>noOfdays){
break;
}
currentDay[j].innerText=value;
}
dateCount++;
}
var whichday=0;
if(maxValue==29&&noOfdays>29){
   divSelector=document.getElementById("Monday");
	currentDay=divSelector.getElementsByTagName('div')[1];
	currentDay.innerText=30;
    whichday=1;
    maxValue+=1;
}
if(maxValue==30&&noOfdays>30){
	if(whichday==0)
		divSelector=document.getElementById("Monday");
	else
		divSelector=document.getElementById("Tuesday");
	currentDay=divSelector.getElementsByTagName('div')[1];
	currentDay.innerText=noOfdays;
}
};


bl=document.getElementById('prevMonth');
bll=document.getElementById('prevYear');
br=document.getElementById('nextMonth');
brr=document.getElementById('nextYear');
var today=new Date();
initialize(today,0);

function func(){
if(this.id=='prevYear')
	initialize(today,-2);
else if(this.id=='prevMonth')
	initialize(today,-1);
else if(this.id=='nextYear')
	initialize(today,2);
else
	initialize(today,1);
}

bl.addEventListener('click',func);
bll.addEventListener('click',func);
br.addEventListener('click',func);
brr.addEventListener('click',func);

