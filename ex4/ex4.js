alert("עבודה מספר 4 ")//רציתי לעשות התראה לכל שאלה אבל לא כתוב במטלה ולא רוצה לשגע אותך
document.write("פתרון שאלה 1")
document.write("<br>"); 
let x=10,y=20;
document.write("my numbers is:"+x,","+y)
document.write("<br>");
if(x>y){
    document.write("the biggest number is:"+x)
    
}
else{
    document.write("the biggest number is:"+y)
    
}
document.write("<br>"); 
document.write("<br>");


//כאן מסתיים תרגיל 1 ומתחיל תרגיל 2 

document.write("פתרון שאלה 2")
document.write("<br>"); 
function myFunction(a=20, b=65, c=-17 ) {
    document.write("my numbers is:"+a,","+b,","+c)
    document.write("<br>");
    d=a+b+c
    if(d>0)
    document.write("the sum is:"+ "+")
    else {
        document.write("the sum is:"+ "")
    if(d==0)
    document.write("the sum is:"+ "")
    }
    return d
}
let FuncResult=myFunction();
document.write(FuncResult);


//כאן מסתיים תרגיל 2 ומתחיל תרגיל 3 
document.write("<br>"); 
document.write("<br>");
document.write("פתרון שאלה 3")
document.write("<br>"); 
let MyArray= [num1=1,num2=2,num3=3];
document.write("my array is;"+MyArray);
document.write("<br>");
/*MyArray.sort(); הייתי יכול לפתור את התרגיל בשתי השורות האלו אבל כתוב במטלה צריך להשתמש בתנאי אם
document.write("my new array"+MyArray)*/
if(num1>num2&&num3&&num2>num3)
    document.write("the new array is:"+ num3+",",num2+",",num1);
else if(num1>num2&&num3&&num3>num2)
    document.write("the new array is:"+ num2+",",num3+",",num1);
else if(num2>num1&&num3&&num1>num3)
    document.write("the new array is:"+ num3+",",num1+",",num2);
else if(num2>num1&&num3&&num3>num1)
    document.write("the new array is:"+ num1+",",num3+",",num2);
else if(num3>num1&&num2&&num1>num2)
    document.write("the new array is:"+ num2+",",num1+",",num3);
else if(num3>num1&&num2&&num2>num1)
    document.write("the new array is:"+num1+",",num2+",",num3);

//כאן מסתיים תרגיל 3 ומתחיל תרגיל 4 
document.write("<br>"); 
document.write("<br>");
document.write("פתרון שאלה 4")
document.write("<br>"); 

let Arr=[10,20,30,40,50,]
document.write("my array numbers is:"+Arr)
document.write("<br>");
let biggest= 0;
for (i=0; i<=Arr.length;i++){
    if (Arr[i]>biggest) 
        biggest=Arr[i];}
document.write("the maximum number is:"+biggest)
//כאן מסתיים תרגיל 4 ומתחיל תרגיל 5 

document.write("<br>"); 
document.write("<br>");
document.write("פתרון שאלה 5")
document.write("<br>"); 

let NumArr=[10,13,30,37,55]
document.write("my array numbers is:"+NumArr)
document.write("<br>")
document.write("<br>")
document.write("התוצאות משמאל לימין")
document.write("<br>")
document.write("<br>")
for (i=0; i<NumArr.length;i++){
    if(NumArr[i]%2==0)
    
    
    document.write("המספר הוא זוגי <br>")
    else {
        document.write("המספר הוא אי זוגי <br>")

    }

}

