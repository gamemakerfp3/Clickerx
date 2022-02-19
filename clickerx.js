var points = 0;

function points()
{
	points = 0;
}

function addpoints()
{

	points = points+1;
}

            
function hundred()
{
	
 if(points >= 50)
	{
	
	points = points - 50
	points = points + 100
	alert("Complete");
	}
	else
	{
	alert("You dont have 50");
	}
	 
}




function showpoints()
{
	if(points==1)
	{
	alert("You have 1 point");
	}
	else
	{
	alert("You have "+ points +" points");
	}
}
