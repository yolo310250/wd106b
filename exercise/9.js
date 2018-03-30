var a = 3;
var b = 7;
var c = 0;
for(j=a;j<=b;j++)
{	
	count= 0;
	for(i=2;i<j;i++)
	{
		if(j%i==0)count++;
	}
    if(count==0)
    {
        console.log("質數為:%d",j);
        c++;console.log("有%d個質數",c);
    }
 
    
}

