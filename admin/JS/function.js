
var myProducts = [

        {   "productid": "1",
            "productName": "SEIKO SUP857P1",
            "brand": "SEIKO",
            "price": "3.920.000 ₫",
            "movement":  "Quartz (Pin)",
            "img" : "C:\Users\MTC-TTM\Desktop\testWEB\hinh\76_GG-1000GB-1ADR-1-699x699.jpg"
        },
        {   
            "productid": "2",
            "productName": "SEIKO SUP860P1",
            "brand": "SEIKO",
            "price": "4.350.000 ₫",
            "movement":  "Quartz (Pin)",
            
            "img" : "C:\Users\MTC-TTM\Desktop\testWEB\hinh\76_GG-1000GB-1ADR-1-699x699.jpg"
        },
        {   
            "productid": "3",
            "productName": "CASIO MTP-1303D-1AVDF",
            "brand": "CASIO",
            "price": "1.128.000 ₫",
            "movement":  "Quartz (Pin)",
            "img" : "C:\Users\MTC-TTM\Desktop\testWEB\hinh\76_GG-1000GB-1ADR-1-699x699.jpg"
        },
        {   
            
            "productid": "4",
            "productName": " G-Shock GA-110-1BDR",
            "brand": "CASIO",
            "price": "3.549.000 ₫",
            "movement":  "Điện tử",
            "img" : "C:\Users\MTC-TTM\Desktop\testWEB\hinh\76_GG-1000GB-1ADR-1-699x699.jpg"
        },
        {
            "productid": "5",
            "productName": " G-SHOCK GG-1000GB-1ADR",
            "brand": "CASIO",
            "price": "9.071.000 ₫",
            "movement":  "Quartz (Pin) + Điện tử ",
            "img" : "C:\Users\MTC-TTM\Desktop\testWEB\hinh\76_GG-1000GB-1ADR-1-699x699.jpg"
        },
        {
            "productid": "6",
            "productName": "ORIENT SEL09004W0",
            "brand": "ORIENT",
            "price": "13.610.000 ₫",
            "movement":  "Quartz (Pin) ",
            "img" : "C:\Users\MTC-TTM\Desktop\testWEB\hinh\76_GG-1000GB-1ADR-1-699x699.jpg"
        },
        {
            "productid": "7",
            "productName": "CITIZEN  AW1360-04E",
            "brand": "CITIZEN",
            "price": "4.940.000 ₫",
            "movement":  "Quartz (Pin) ",
            "img" : "C:\Users\MTC-TTM\Desktop\testWEB\hinh\76_GG-1000GB-1ADR-1-699x699.jpg"
        },
        {
            "productid": "8",
            "productName": "SEIKO SSA247J1",
            "brand": "SEIKO",
            "price": "10.720.000 ₫",
            "movement":  "Automatic (Tự Động)",
            "img" : "C:\Users\MTC-TTM\Desktop\testWEB\hinh\76_GG-1000GB-1ADR-1-699x699.jpg"
        }
    ]


/*
function sanpham( producId ,productName,brand,img,movement,price)
{
    this.productId = productId;
    this.productName = productName;
    this.brand = brand;
    this.img = img;
    this.movement = movement;
    this.price = price;


}
function DanhSachSanPham ()
{
    this.DSSP = [];
    this.addProDuct = function (spthem )
    {
        this.DSSP.push(spthem);
    }
    
    this.deleteProduct = function (SPxoa )
    {
        
    }
    
    
    this.editProDuct = function (spsua )
    {
        
    }
}
function DomID(id)
{
    var element = document.getElementById(id);
    return element;
}


var DanhSachSanPham = new DanhSachSanPham();
var validate = new testValidation();



function addProDuct()
{
    //lay du lieu nguoi dung nhap
    var productId = DomID("masp").value;
    var productName =DomID("tensp").value;
    var brand = DomID("hangsp").value;
    var img = DomID("hinhsp").value;
    var movement = DomID("maysp").value;
    var price = DomID("giasp").value;
    //check validation
    if(validate.testInput(producid))
    {
        DomID("masp").style.borderColor = "red";
    }
    else
    {
        DomID("masp").style.borderColor = "red";
    }
    
    if(validate.testInput(productName))
    {
        DomID("tensp").style.borderColor = "red";
    }
    else
    {
        DomID("tensp").style.borderColor = "red";
    }
    if(validate.testInput(brand))
    {
        DomID("hangsp").style.borderColor = "red";
    }
    else
    {
        DomID("hangsp").style.borderColor = "red";
    }
    if(validate.testInput(price))
    {
        DomID("giasp").style.borderColor = "red";
    }
    else
    {
        DomID("giasp").style.borderColor = "red";
    }
    
    
}



function testValidation()
{
    this.testInput  = function (value)
    {
        if(value.trim() === "" )
            {
                return true;
            }
        return false;
    }
}


function addTableProducts() {
    var tc = document.getElementsByClassName('product')[0].getElementsByClassName('table-content')[0];
    var s = `<table class="table-outline hideImg">`;

    for (var i = 0; i < myProducts.length; i++) {
        var p = myProducts[i];
        s += `<tr>
            <td style="width: 5%">` + (i+1) + `</td>
            <td style="width: 10%">` + p.productid + `</td>
            <td style="width: 40%">
                <a title="Xem chi tiết" target="_blank" href="chitietsanpham.html?` + p.productName.split(' ').join('-') + `">` + p.productName + `</a>
                <img src="` + p.img + `"></img>
            </td>
            <td style="width: 15%">` + p.price + `</td>
            <td style="width: 15%">` + promoToStringValue(p.promo) + `</td>
            <td style="width: 15%">
                <div class="tooltip">
                    <i class="fa fa-wrench" onclick="addKhungSuaSanPham('` + p.productid + `')"></i>
                    <span class="tooltiptext">Sửa</span>
                </div>
                <div class="tooltip">
                    <i class="fa fa-trash" onclick="xoaSanPham('` + p.productid + `', '`+p.productName+`')"></i>
                    <span class="tooltiptext">Xóa</span>
                </div>
            </td>
        </tr>`;
    }

    s += `</table>`;

    tc.innerHTML = s;
}
-------------------------------------------------------------------------------------------------------------*/
/**
 * A handler function to prevent default submission and run our custom script.
 * @param  {Event} event  the submit event triggered by the user
 * @return {void}
 */
const handleFormSubmit = event => {

    // Stop the form from submitting since we’re handling that with AJAX.
    event.preventDefault();
  
    // TODO: Call our function to get the form data.
    const data = {};
  
    // Demo only: print the form data onscreen as a formatted JSON object.
    const dataContainer = document.getElementsByClassName('results__display')[0];
  
    // Use `JSON.stringify()` to make the output valid, human-readable JSON.
    dataContainer.textContent = JSON.stringify(data, null, "  ");
  
    // ...this is where we’d actually do something with the form data...
  };

  const handleFormSubmit = event => {/* omitted for brevity */};

/*
 * This is where things actually get started. We find the form element using
 * its class name, then attach the `handleFormSubmit()` function to the
 * `submit` event.
 */
const form = document.getElementsByClassName('contact-form')[0];
form.addEventListener('submit', handleFormSubmit);