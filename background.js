var ctrlDown = false;
var fullDown = false;



document.onkeydown = function(e)
{
	console.log(e.keyCode);
	//e = e || windows.event;
	if(!ctrlDown)
	{
		if(e.keyCode == '17' || e.keyCode == '91')
		{
			console.log('control');
			ctrlDown = true;
		}
	}
	if(ctrlDown && !fullDown)
	{
		if(e.keyCode == '192')
		{
			fullDown = true;
		}
	}
}

document.onkeyup = function(e)
{
	ctrlDown = false;
	fullDown = false;	
}