
var danhsachkh = [
    {
    "hoten": "Nguyen Van A",
    "email": "Ngvna@yaho.com",
    "diachi": "abvcc",
    "sdt": "21413",
    },
    
    {
        "hoten": "Nguyen Van A",
        "email": "Ngvna@yaho.com",
        "diachi": "abvcc",
        "sdt": "21413",
     }
    
]

/* ham trinh bay (render) khachaang*/

function addTableKhachHang() {
    var tc = document.getElementsByClassName('table-content1');
    var s = `<table class="table-outline hideImg">`;

    for (var i = 0; i < danhsachkh.length; i++) {
        var u = danhsachkh[i];
        s += `<tr>
            <td style="width: 5%">` + (i+1) + `</td>
            <td style="width: 15%">` + u.hoten +  `</td>
            <td style="width: 20%">` + u.diachi + `</td>
            <td style="width: 20%">` + u.sdt + `</td>
            <td style="width: 10%">` + u.email + `</td>
            <td style="width: 10%">
                <div class="tooltip">
                    <label class="switch">
                        <input type="checkbox" `+(u.off?'':'checked')+` onclick="voHieuHoaNguoiDung(this, '`+u.username+`')">
                        <span class="slider round"></span>
                    </label>
                    <span class="tooltiptext">`+(u.off?'Mở':'Khóa')+`</span>
                </div>
                <div class="tooltip">
                    <i class="fa fa-remove" onclick="xoaNguoiDung('`+u.username+`')"></i>
                    <span class="tooltiptext">Xóa</span>
                </div>
            </td>
        </tr>`;
    }

    s += `</table>`;
    tc.innerHTML = s;
}
var listUser = [
    {
    "hoten": "Nguyen Van A",
    "email": "Ngvna@yaho.com",
    "diachi": "abvcc",
    "sdt": "21413",
    },
    
    {
        "hoten": "Nguyen Van A",
        "email": "Ngvna@yaho.com",
        "diachi": "abvcc",
        "sdt": "21413",
     }
    
]

function addTableKhachHang() {
    var tc = document.getElementsByClassName('khachhang')[0].getElementsByClassName('table-content')[0];
    var s = `<table class="table-outline hideImg">`;

    

    for (var i = 0; i < listUser.length; i++) {
        
        var u = listUser[i];
        
        s += `<tr>
            <td style="width: 5%">` + (i+1) + `</td>
            <td style="width: 15%">` + u.hoten `</td>
            <td style="width: 20%">` + u.email + `</td>
            <td style="width: 20%">` + u.sdt + `</td>
            <td style="width: 10%">` + u.diachi + `</td>
            <td style="width: 10%">
                <div class="tooltip">
                    <label class="switch">
                        <input type="checkbox" `+(u.off?'':'checked')+` onclick="voHieuHoaNguoiDung(this, '`+u.username+`')">
                        <span class="slider round"></span>
                    </label>
                    <span class="tooltiptext">`+(u.off?'Mở':'Khóa')+`</span>
                </div>
                <div class="tooltip">
                    <i class="fa fa-remove" onclick="xoaNguoiDung('`+u.username+`')"></i>
                    <span class="tooltiptext">Xóa</span>
                </div>
            </td>
        </tr>`; 
    }

    s += `</table>`;
    tc.innerHTML = s;
}

