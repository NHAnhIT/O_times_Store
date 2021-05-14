function xoa_dau(str)
{
	str = str.replace(/à|á|ạ|ả|ã|ằ|ắ|ặ|ẳ|ẵ|ầ|ấ|ậ|ẩ|ẫ/g, "a");
	str = str.replace(/è|é|ẹ|ẻ|ẽ|ề|ế|ể|ễ|ệ/g, "e");
	str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
	str = str.replace(/ò|ó|ọ|ỏ|õ|ờ|ớ|ợ|ở|ỡ|ồ|ố|ộ|ổ|ỗ/g, "o");
	str = str.replace(/ù|ú|ụ|ủ|ũ|ừ|ứ|ự|ử|ữ/g, "u");
	str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
	str = str.replace(/đ/g, "d");
	str = str.replace(/À|Á|Ạ|Ả|Ã|Ằ|Ắ|Ặ|Ẳ|Ẵ|Ầ|Ấ|Ậ|Ẩ|Ẫ/g, "A");
	str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ề|Ế|Ệ|Ể|Ễ/g, "E");
	str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
	str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ờ|Ớ|Ợ|Ở|Ỡ|Ồ|Ố|Ộ|Ổ|Ỗ/g, "o");
	str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
	str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
	str = str.replace(/Đ/g, "D");
	return str;
}
var b=["!","@","#","$","%","^","&","*","(",")","+","-","~","/","?",">","<",",",":",";","`","|","{","}","[","]"]
function timkiem()
{
	var s = document.getElementById("value").value;
	s = xoa_dau(s);
	s = s.toLowerCase();

	var c = ["!","@","#","$","%","^","&","*","(",")","+","-","~","/","?",">","<",",",":",";","`","|","{","}","[","]"]
	{
		var arry = ["ven","ao","ven","ao","ao","ven","ao","ven","ven","ven","ao","ven"];
		
		for(var i=0;i < arry.length ; i++)
		{
			document.getElementById(i + 1).style.display = 'none';
		}
		for( var i=0 ; i<arry.length; i++)
		{
			if(0 <= arry[i].indexOf(s) && arry[i].indexOf(s) <= arry[i].length)
			{
				document.getElementById( i + 1 ).style.display = 'inline-block';
				
			}
			if(s == "")
			{
				for(var i=0 ; i < arry.length; i++)
				{
					document.getElementById( i + 1).style.display = 'none';

				}
				
				
			}
		}
	}
	for(var i=0; i< b.length; i++)
	{
		if(0 <= s.indexOf(b[i]))
		{
			alert("Thông tin không hợp lệ");
			break;
		}
	}
}