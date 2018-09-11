
function ValidateNumber(objInput)
{
	var dblValue,strValue;
	try
	{
		//get value
		
		strValue = objInput.value;
			
		if(strValue !="")
		{
			//replace , with .
			strValue = strValue.replace(",",".");
			dblValue = parseFloat(strValue);
			if(isNaN(dblValue))
			{
				alert(g_scNumberBadInput);
				return false;
			}
		}
	}
	catch(e)
	{
	//alert(e.Description);
	}
	return true;
}	


	    function openWindow(strURL)
	    {
	    window.open(strURL,null,
    "height=600,width=800,status=no,toolbar=no,menubar=no,location=no,resizable=yes,scrollbars=yes");
	    }

