var dangnhapne=document.getElementById("dangnhap");
var dangnhapbang=document.getElementById("bang-dangnhap");
var dangxuatne=document.getElementById("dangxuat");
dangnhapne.onclick=function bandangnhap(){
    document.getElementById("bang-dangnhap").style.display="block";
    
};
document.getElementById("dangnhap").onclick = function(e){
    if(e.target !== document.querySelector('.x-dangnhap')){
        dangnhapbang.style.display = 'block'
        document.getElementById('bang-dangky').style.display='none';

    }
    else{
        dangnhapbang.style.display = 'none';
        document.getElementById('bang-dangnhap-user-input').value='';
        document.getElementById('bang-dangnhap-pass-input').value='';
        document.getElementById("mat-mo").style.display="none";
        document.getElementById("mat-dong").style.display="block";
    }
};


document.getElementById("mat-dong").onclick = function (){
    document.getElementById("bang-dangnhap-pass-input").type="text";
    document.getElementById("mat-dong").style.display="none";
    document.getElementById("mat-mo").style.display="block";
};
document.getElementById("mat-mo").onclick = function (){
    document.getElementById("bang-dangnhap-pass-input").type="password";
    document.getElementById("mat-mo").style.display="none";
    document.getElementById("mat-dong").style.display="block";
};
// document.getElementById("dau-x-dang").onclick = function (){
//     document.getElementById("dangnhap").style.display="block";
//     document.getElementById("bang-dangnhap").style.display="none";
// };
document.getElementById("dangxuat").onclick = function (){
    if(confirm("Bạn có thật sự muốn đăng xuất!")==true){
        document.getElementById("dangxuat").style.display="none";
        document.getElementById("dangnhap").style.display="block";
        dangnhapbang.style.display = 'none';


    }else{
        document.getElementById("dangxuat").style.display="block";
        document.getElementById("dangnhap").style.display="none";
    }
    

};
document.getElementById("bang-dangnhap-sup").onclick = function (){
    if(document.getElementById("bang-dangnhap-user-input").value=="" || document.getElementById("bang-dangnhap-pass-input").value==""){
        alert('Bạn đã nhập sai số điện thoại, email hoặc mật khẩu.')
        
    } 
    else{
        document.getElementById("dangnhap").style.display="none";
        document.getElementById("dangxuat").style.display="block";
        document.getElementById("bang-dangnhap-user-input").value="";
        document.getElementById("bang-dangnhap-pass-input").value="";
        document.getElementById("mat-mo").style.display="none";
        document.getElementById("mat-dong").style.display="block";


    }

};
var i = 0;
document.querySelector('.next-movie').onclick = function(){
    i=i + (document.querySelectorAll('.tap-phimhot-a')[0].offsetWidth * 3)
    if(i > document.querySelectorAll('.tap-phimhot-a')[0].offsetWidth * 25){
        i = document.querySelectorAll('.tap-phimhot-a')[0].offsetWidth * 25
        document.querySelector('.next-movie').style.opacity = '0'
    }
    if(i > 0)
        document.querySelector('.prev-movie').style.opacity = '1'
    document.querySelector('.tap-phimhot-ul').style.transform = `translateX(-${i}px)`;
}

document.querySelector('.prev-movie').onclick = function(){
    i=i - (document.querySelectorAll('.tap-phimhot-a')[0].offsetWidth * 3)
    if(i <= 0){
        i = 0
        document.querySelector('.prev-movie').style.opacity = '0'
    }
    if(i < document.querySelectorAll('.tap-phimhot-a')[0].offsetWidth * 24)
        document.querySelector('.next-movie').style.opacity = '1'
    document.querySelector('.tap-phimhot-ul').style.transform = `translateX(-${i}px)`;
}

// confirm(document.querySelectorAll('.tap-phimhot-ul .tap-phimhot-a').length)


document.querySelector('.next-movie2').onclick = function(){
    i=i + (document.querySelectorAll('.tap-phimhot-a')[0].offsetWidth * 3)
    if(i > document.querySelectorAll('.tap-phimhot-a')[0].offsetWidth * 25){
        i = document.querySelectorAll('.tap-phimhot-a')[0].offsetWidth * 25
        document.querySelector('.next-movie2').style.opacity = '0'
    }
    if(i > 0)
        document.querySelector('.prev-movie2').style.opacity = '1'
    document.querySelector('.tap-ul-2').style.transform = `translateX(-${i}px)`;
}

document.querySelector('.prev-movie2').onclick = function(){
    i=i - (document.querySelectorAll('.tap-phimhot-a')[0].offsetWidth * 3)
    if(i <= 0){
        i = 0
        document.querySelector('.prev-movie2').style.opacity = '0'
    }
    if(i < document.querySelectorAll('.tap-phimhot-a')[0].offsetWidth * 24)
        document.querySelector('.next-movie2').style.opacity = '1'
    document.querySelector('.tap-ul-2').style.transform = `translateX(-${i}px)`;
}
///////////////////////////////////////
document.querySelector('.next-movie3').onclick = function(){
    i=i + (document.querySelectorAll('.tap-phimhot-a')[0].offsetWidth * 3)
    if(i > document.querySelectorAll('.tap-phimhot-a')[0].offsetWidth * 10){
        i = document.querySelectorAll('.tap-phimhot-a')[0].offsetWidth * 10
        document.querySelector('.next-movie3').style.opacity = '0'
    }
    if(i > 0)
        document.querySelector('.prev-movie3').style.opacity = '1'
    document.querySelector('.tap-ul-3').style.transform = `translateX(-${i}px)`;
}

document.querySelector('.prev-movie3').onclick = function(){
    i=i - (document.querySelectorAll('.tap-phimhot-a')[0].offsetWidth * 3)
    if(i <= 0){
        i = 0
        document.querySelector('.prev-movie3').style.opacity = '0'
    }
    if(i < document.querySelectorAll('.tap-phimhot-a')[0].offsetWidth * 10)
        document.querySelector('.next-movie3').style.opacity = '1'
    document.querySelector('.tap-ul-3').style.transform = `translateX(-${i}px)`;
}
document.getElementById("quen-mk").onclick = function(e){
    document.getElementById('bang-dangnhap-pass-input2').value='';
    document.getElementById('bang-dangnhap-pass-input3').value='';
    document.getElementById("bang-dangnhap").style.display='none'
    document.getElementById("bang-quen-mk").style.display='block'
    document.getElementById("matkhau-ip2").style.display='none';
    document.getElementById("o-pass1").style.display='none';
    document.getElementById("o-pass2").style.display='none';
    document.getElementById("quen-matkhau-but2").style.display='none';
    document.getElementById("quen-matkhau-but3").style.display='none';
    document.getElementById("quen-matkhau-but").style.display='block'
    document.getElementById("matkhau-ip1").style.display='block'

};
document.getElementById("bang-quen-mk").onclick = function(a){
    if(a.target !== document.querySelector('.x-quen-mk') && a.target !== document.getElementById('quen-matkhau-but4')){

        document.getElementById("bang-quen-mk").style.display='block'
        
    }   
    else
        document.getElementById("bang-quen-mk").style.display='none';
        document.getElementById("bang-dangnhap-user-input").value="";
        document.getElementById("bang-dangnhap-pass-input").value="";



};

var matkhau1=document.getElementById('bang-dangnhap-pass-input2');
var matkhau2=document.getElementById('bang-dangnhap-pass-input3');

document.getElementById('quen-matkhau-but').onclick=function(){
    if(document.getElementById('matkhau-ip1').value==""){
        alert('Bạn nhập sai số điện thoại hoặc email');
    }
    else{
        document.getElementById('quen-matkhau-but').style.display='none';
        document.getElementById('quen-matkhau-but2').style.display='block';
        document.getElementById('matkhau-ip1').style.display='none';
        document.getElementById('matkhau-ip2').style.display='block';
        document.getElementById('matkhau-ip1').value='';

    }
}
document.getElementById('quen-matkhau-but2').onclick=function(){
    if(document.getElementById('matkhau-ip2').value==""){
        alert('Bạn đã nhập sai mã xác nhận');
    }
    else{
    document.getElementById('quen-matkhau-but2').style.display='none';
    document.getElementById('matkhau-ip2').style.display='none';
    document.getElementById('o-pass1').style.display='flex';
    document.getElementById('o-pass2').style.display='flex';
    document.getElementById('quen-matkhau-but3').style.display='block';
    document.getElementById('matkhau-ip2').value='';

    }
}

document.getElementById("mat-dong2").onclick = function (){
    document.getElementById("bang-dangnhap-pass-input2").type="text";
    document.getElementById("mat-dong2").style.display="none";
    document.getElementById("mat-mo2").style.display="block";
};
document.getElementById("mat-mo2").onclick = function (){
    document.getElementById("bang-dangnhap-pass-input2").type="password";
    document.getElementById("mat-mo2").style.display="none";
    document.getElementById("mat-dong2").style.display="block";
};
document.getElementById("mat-dong3").onclick = function (){
    document.getElementById("bang-dangnhap-pass-input3").type="text";
    document.getElementById("mat-dong3").style.display="none";
    document.getElementById("mat-mo3").style.display="block";
};
document.getElementById("mat-mo3").onclick = function (){
    document.getElementById("bang-dangnhap-pass-input3").type="password";
    document.getElementById("mat-mo3").style.display="none";
    document.getElementById("mat-dong3").style.display="block";
};

document.getElementById('quen-matkhau-but3').onclick=function(){
    if(matkhau1.value==""){
         alert('Bạn chưa nhập mật khẩu');
    }else{
        if(matkhau2.value==""){
            alert('Bạn chưa nhập lại mật khẩu');
        }else{
            if(matkhau2.value!=matkhau1.value){
                alert('Bạn vừa nhập sai mật khẩu');

            }else{
                document.getElementById('hoanthanh-mk').style.display='block';
                matkhau1.value='';
                matkhau2.value='';
                document.getElementById("o-pass1").style.display='none';
                document.getElementById("o-pass2").style.display='none';
                document.getElementById("quen-matkhau-but3").style.display='none';
                document.getElementById("quen-matkhau-but4").style.display='block';
                document.getElementById("mat-mo3").style.display="none";
                document.getElementById("mat-dong3").style.display="block";
                document.getElementById("mat-mo2").style.display="none";
                document.getElementById("mat-dong2").style.display="block";

            }
        }
    }
}
document.getElementById("quen-matkhau-but4").onclick=function(){
    document.getElementById("hoanthanh-mk").style.display='none';
    document.getElementById("quen-matkhau-but4").style.display='none'
}
///////////////////////////
document.getElementById('nut-dangky').onclick=function(){
    document.getElementById('bang-dangnhap').style.display='none';
    document.getElementById('bang-dangky').style.display='block';
    document.getElementById('bang-quen-mk').style.display='none';
    document.getElementById('bang-dangnhap-user-input').value='';
    document.getElementById('bang-dangnhap-pass-input').value='';
    document.getElementById('bang-dangky-user-input').value='';
    document.getElementById('bang-dangky-pass-input').value='';
    document.getElementById('bang-dangky-pass-input2').value='';
    document.getElementById("mat-mo").style.display="none";
    document.getElementById("mat-dong").style.display="block";
    document.getElementById("mat-mo4").style.display="none";
    document.getElementById("mat-dong4").style.display="block";
    document.getElementById("mat-mo5").style.display="none";
    document.getElementById("mat-dong5").style.display="block";
}
var matkhau3=document.getElementById('bang-dangky-pass-input');
var matkhau4=document.getElementById('bang-dangky-pass-input2');
var user=document.getElementById('bang-dangky-user-input');

document.getElementById('dau-x-dangky').onclick=function(){
    document.getElementById('bang-dangky').style.display='none';
    matkhau3.value='';
    matkhau4.value='';
    user.value='';

}
document.getElementById('bang-dangky-sup').onclick=function(){
    if(user.value==''){
        alert('Bạn chưa nhập số điện thoại hoặc email');
    }else{
        if(matkhau3.value==''){
            alert('Bạn chưa nhập mật khẩu');
        }else{
            if(matkhau4.value==''){
                alert('Bạn chưa nhập lại mật khẩu');
            }else{
                if(matkhau3.value!=matkhau4.value){
                    alert('Bạn vừa nhập lại sai mật khẩu');
                }else{
                    document.getElementById('bang-dangky').style.display='none';
                    matkhau3.value='';
                    matkhau4.value='';
                    user.value='';
                    document.getElementById("mat-mo4").style.display="none";
                    document.getElementById("mat-dong4").style.display="block";
                    document.getElementById("mat-mo5").style.display="none";
                    document.getElementById("mat-dong5").style.display="block";
                }
            }
        }
    }
}
document.getElementById("mat-dong4").onclick = function (){
    document.getElementById("bang-dangky-pass-input").type="text";
    document.getElementById("mat-dong4").style.display="none";
    document.getElementById("mat-mo4").style.display="block";
};
document.getElementById("mat-mo4").onclick = function (){
    document.getElementById("bang-dangky-pass-input").type="password";
    document.getElementById("mat-mo4").style.display="none";
    document.getElementById("mat-dong4").style.display="block";
};
document.getElementById("mat-dong5").onclick = function (){
    document.getElementById("bang-dangky-pass-input2").type="text";
    document.getElementById("mat-dong5").style.display="none";
    document.getElementById("mat-mo5").style.display="block";
};
document.getElementById("mat-mo5").onclick = function (){
    document.getElementById("bang-dangky-pass-input2").type="password";
    document.getElementById("mat-mo5").style.display="none";
    document.getElementById("mat-dong5").style.display="block";
};
/////////////////////
// if(document.getElementById("nut-menu").style.display=='none'){
//     document.getElementById('menu-phai').style.display='none';
//     return true;
// }
// else{
//     document.getElementById('menu-phai').style.display='block';
//     return true;
// }
let demne=1;
document.getElementById('nut-menu').onclick=function(){
    if(demne==1){
        document.getElementById('bang-menu').style.display='block';
        document.getElementById('menu-phai').style.display='block';
        document.getElementById('hr-rev2').style.display='none';
        document.getElementById('theloai-bang2').style.display='none';
        document.getElementById('hr-rev').style.display='none';
        document.getElementById('theloai-bang').style.display='none';
        demne=2;
        return true;
    }else{

        document.getElementById('bang-menu').style.display='none';
        document.getElementById('menu-phai').style.display='none';
        document.getElementById('hr-rev2').style.display='none';
        document.getElementById('theloai-bang2').style.display='none';
        document.getElementById('hr-rev').style.display='none';
        document.getElementById('theloai-bang').style.display='none';
        demne=1;
    }
    
}
let demne2=1;
document.getElementById("theloai-nut").onclick=function(){
    if(demne2==1){
        document.getElementById('theloai-bang').style.display='block';
        document.getElementById('hr-rev').style.display='block';
        demne2=2;
        return true;
    }else{
        document.getElementById('hr-rev').style.display='none';
        document.getElementById('theloai-bang').style.display='none';
        demne2=1;
    }
}
let demne3=1;
document.getElementById("quocgia-bang").onclick=function(){
    if(demne3==1){
        document.getElementById('theloai-bang2').style.display='block';
        document.getElementById('hr-rev2').style.display='block';
        demne3=2;
        return true;
    }else{
        document.getElementById('hr-rev2').style.display='none';
        document.getElementById('theloai-bang2').style.display='none';
        demne3=1;
    }
}
document.getElementById('bang-menu').onclick=function(b){
//     if(b.target == document.getElementById('menu-phai')){
        // document.getElementById('bang-menu').style.display='block';
//     }else{
        document.getElementById('bang-menu').style.display='none';
        document.getElementById('menu-phai').style.display='none';
        document.getElementById('hr-rev2').style.display='none';
        document.getElementById('theloai-bang2').style.display='none';
        document.getElementById('hr-rev').style.display='none';
        document.getElementById('theloai-bang').style.display='none';
        document.getElementById('bang-dangnhap-rev').style.display='none';
        document.getElementById('bang-dangky-rev').style.display='none';

}


/////////////////////////////////
//////////////////////////////
///////////////////////////////////////
////////////////////////////////////////
///////////////////////////////////////
///var dangnhapne=document.getElementById("dangnhap");
var dangnhapbangrev=document.getElementById("bang-dangnhap-rev");
//var dangxuatne=document.getElementById("dangxuat");
// dangnhapne.onclick=function bandangnhap(){
//     document.getElementById("bang-dangnhap").style.display="block";
    
// };

document.getElementById("dangnhap-repon").onclick = function(){
    
        dangnhapbangrev.style.display = 'block';
        document.getElementById('bang-dangky-rev').style.display='none';
        document.getElementById('bang-dangnhap-user-input-rev').value='';
        document.getElementById('bang-dangnhap-pass-input-rev').value='';
        document.getElementById("mat-mo-rev").style.display="none";
        document.getElementById("mat-dong-re").style.display="block";
    
    
};
document.getElementById('dau-x-dang-rev').onclick=function(){
    document.getElementById("bang-dangnhap-rev").style.display='none';
    
}

document.getElementById("mat-dong-rev").onclick = function (){
    document.getElementById("bang-dangnhap-pass-input-rev").type="text";
    document.getElementById("mat-dong-rev").style.display="none";
    document.getElementById("mat-mo-rev").style.display="block";
};
document.getElementById("mat-mo-rev").onclick = function (){
    document.getElementById("bang-dangnhap-pass-input-rev").type="password";
    document.getElementById("mat-mo-rev").style.display="none";
    document.getElementById("mat-dong-rev").style.display="block";
};
// document.getElementById("dau-x-dang").onclick = function (){
//     document.getElementById("dangnhap").style.display="block";
//     document.getElementById("bang-dangnhap").style.display="none";
// };
document.getElementById("dangxuat-rev").onclick = function (){
    if(confirm("Bạn có thật sự muốn đăng xuất!")==true){
        document.getElementById("dangxuat-rev").style.display="none";
        document.getElementById("dangnhap-repon").style.display="block";
        dangnhapbangrev.style.display = 'none';


    }else{
        document.getElementById("dangxuat-rev").style.display="block";
        document.getElementById("dangnhap-rev").style.display="none";
    }
    

};
document.getElementById("bang-dangnhap-sup-rev").onclick = function (){
    if(document.getElementById("bang-dangnhap-user-input-rev").value=="" || document.getElementById("bang-dangnhap-pass-input-rev").value==""){
        alert('Bạn đã nhập sai số điện thoại, email hoặc mật khẩu.')
        
    } 
    else{
        document.getElementById("dangnhap-repon").style.display="none";
        document.getElementById("bang-dangnhap-rev").style.display="none";
        document.getElementById("dangxuat-rev").style.display="block";
        document.getElementById("bang-dangnhap-user-input-rev").value="";
        document.getElementById("bang-dangnhap-pass-input-rev").value="";
        document.getElementById("mat-mo-rev").style.display="none";
        document.getElementById("mat-dong-rev").style.display="block";


    }

};
////////////////////////////////
document.getElementById("quen-mk-rev").onclick = function(){
    document.getElementById("bang-quen-mk-rev").style.display='block'
    document.getElementById("matkhau-ip2-rev").style.display='none';
    document.getElementById("o-pass1-rev").style.display='none';
    document.getElementById("o-pass2-rev").style.display='none';
    document.getElementById("quen-matkhau-but2-rev").style.display='none';
    document.getElementById("quen-matkhau-but3-rev").style.display='none';
    document.getElementById("quen-matkhau-but-rev").style.display='block'
    document.getElementById("matkhau-ip1-rev").style.display='block';
    document.getElementById('bang-dangnhap-pass-input2-rev').value='';
    document.getElementById('bang-dangnhap-pass-input3-rev').value='';
  

};
document.getElementById("dau-x-quen-mk-rev").onclick = function(){
// //     if(a.target !== document.querySelector('.x-quen-mk') && a.target !== document.getElementById('quen-matkhau-but4')){

          document.getElementById("bang-quen-mk-rev").style.display='none';
          document.getElementById("bang-quen-mk-rev").value='';
          document.getElementById("bang-dangnhap-user-input-rev").value="";
        document.getElementById("bang-dangnhap-pass-input-rev").value="";

        
// //     }   
// //     else
// //         document.getElementById("bang-quen-mk").style.display='none';


 };

var matkhau1rev=document.getElementById('bang-dangnhap-pass-input2-rev');
var matkhau2rev=document.getElementById('bang-dangnhap-pass-input3-rev');

document.getElementById('quen-matkhau-but-rev').onclick=function(){
    if(document.getElementById('matkhau-ip1-rev').value==""){
        alert('Bạn nhập sai số điện thoại hoặc email');
    }
    else{
        document.getElementById('quen-matkhau-but-rev').style.display='none';
        document.getElementById('quen-matkhau-but2-rev').style.display='block';
        document.getElementById('matkhau-ip1-rev').style.display='none';
        document.getElementById('matkhau-ip2-rev').style.display='block';
        document.getElementById('matkhau-ip1-rev').value='';

    }
}
document.getElementById('quen-matkhau-but2-rev').onclick=function(){
    if(document.getElementById('matkhau-ip2-rev').value==""){
        alert('Ban nhập sai mã xác nhận');
    }
    else{
    document.getElementById('quen-matkhau-but2-rev').style.display='none';
    document.getElementById('matkhau-ip2-rev').style.display='none';
    document.getElementById('o-pass1-rev').style.display='flex';
    document.getElementById('o-pass2-rev').style.display='flex';
    document.getElementById('quen-matkhau-but3-rev').style.display='block';
    document.getElementById('matkhau-ip2-rev').value='';

    }
}

document.getElementById("mat-dong2-rev").onclick = function (){
    document.getElementById("bang-dangnhap-pass-input2-rev").type="text";
    document.getElementById("mat-dong2-rev").style.display="none";
    document.getElementById("mat-mo2-rev").style.display="block";
};
document.getElementById("mat-mo2-rev").onclick = function (){
    document.getElementById("bang-dangnhap-pass-input2-rev").type="password";
    document.getElementById("mat-mo2-rev").style.display="none";
    document.getElementById("mat-dong2-rev").style.display="block";
};
document.getElementById("mat-dong3-rev").onclick = function (){
    document.getElementById("bang-dangnhap-pass-input3-rev").type="text";
    document.getElementById("mat-dong3-rev").style.display="none";
    document.getElementById("mat-mo3-rev").style.display="block";
};
document.getElementById("mat-mo3-rev").onclick = function (){
    document.getElementById("bang-dangnhap-pass-input3-rev").type="password";
    document.getElementById("mat-mo3-rev").style.display="none";
    document.getElementById("mat-dong3-rev").style.display="block";
};

document.getElementById('quen-matkhau-but3-rev').onclick=function(){
    if(matkhau1rev.value==""){
         alert('Bạn chưa nhập mật khẩu');
    }else{
        if(matkhau2rev.value==""){
            alert('Bạn chưa nhập lại mật khẩu');
        }else{
            if(matkhau2rev.value!=matkhau1rev.value){
                alert('Bạn vừa nhập lại sai mật khẩu');

            }else{
                document.getElementById('bang-dangnhap-pass-input2-rev').value='';
                document.getElementById('bang-dangnhap-pass-input3-rev').value='';
                document.getElementById('hoanthanh-mk-rev').style.display='block';
                
                document.getElementById("o-pass1-rev").style.display='none';
                document.getElementById("o-pass2-rev").style.display='none';
                document.getElementById("quen-matkhau-but3-rev").style.display='none';
                document.getElementById("quen-matkhau-but4-rev").style.display='block';
                document.getElementById("mat-mo3-rev").style.display="none";
                document.getElementById("mat-dong3-rev").style.display="block";
                document.getElementById("mat-mo2-rev").style.display="none";
                document.getElementById("mat-dong2-rev").style.display="block";

            }
        }
    }
}
document.getElementById("quen-matkhau-but4-rev").onclick=function(){
    document.getElementById("hoanthanh-mk-rev").style.display='none';
    document.getElementById("quen-matkhau-but4-rev").style.display='none'
}
///////////////////////////
document.getElementById('dangky-repon').onclick=function(){
    document.getElementById('bang-dangnhap-rev').style.display='none';
    document.getElementById('bang-dangky-rev').style.display='block';
    document.getElementById('bang-quen-mk-rev').style.display='none';
    document.getElementById('bang-dangnhap-user-input-rev').value='';
    document.getElementById('bang-dangnhap-pass-input-rev').value='';
    document.getElementById('bang-dangky-user-input-rev').value='';
    document.getElementById('bang-dangky-pass-input-rev').value='';
    document.getElementById('bang-dangky-pass-input2-rev').value='';
    document.getElementById("mat-mo-rev").style.display="none";
    document.getElementById("mat-dong-rev").style.display="block";
    document.getElementById("mat-mo4-rev").style.display="none";
    document.getElementById("mat-dong4-rev").style.display="block";
    document.getElementById("mat-mo5-rev").style.display="none";
    document.getElementById("mat-dong5-rev").style.display="block";
}
var matkhau3rev=document.getElementById('bang-dangky-pass-input-rev');
var matkhau4rev=document.getElementById('bang-dangky-pass-input2-rev');
var userrev=document.getElementById('bang-dangky-user-input-rev');

document.getElementById('dau-x-dangky-rev').onclick=function(){
    document.getElementById('bang-dangky-rev').style.display='none';
    matkhau3rev.value='';
    matkhau4rev.value='';
    userrev.value='';

}
document.getElementById('bang-dangky-sup-rev').onclick=function(){
    if(userrev.value==''){
        alert('Bạn chưa nhập số điện thoại hoặc email');
    }else{
        if(matkhau3rev.value==''){
            alert('Bạn chưa nhập mật khẩu');
        }else{
            if(matkhau4rev.value==''){
                alert('Bạn chưa nhập lại mật khẩu');
            }else{
                if(document.getElementById('bang-dangky-pass-input-rev').value!=document.getElementById('bang-dangky-pass-input2-rev').value){
                    alert('Bạn vừa nhập lại sai mật khẩu');
                }else{
                    document.getElementById('bang-dangky-rev').style.display='none';
                    matkhau3rev.value='';
                    matkhau4rev.value='';
                    userrev.value='';
                    document.getElementById("mat-mo4-rev").style.display="none";
                    document.getElementById("mat-dong4-rev").style.display="block";
                    document.getElementById("mat-mo5-rev").style.display="none";
                    document.getElementById("mat-dong5-rev").style.display="block";
                }
            }
        }
    }
}
document.getElementById("mat-dong4-rev").onclick = function (){
    document.getElementById("bang-dangky-pass-input-rev").type="text";
    document.getElementById("mat-dong4-rev").style.display="none";
    document.getElementById("mat-mo4-rev").style.display="block";
};
document.getElementById("mat-mo4-rev").onclick = function (){
    document.getElementById("bang-dangky-pass-input-rev").type="password";
    document.getElementById("mat-mo4-rev").style.display="none";
    document.getElementById("mat-dong4-rev").style.display="block";
};
document.getElementById("mat-dong5-rev").onclick = function (){
    document.getElementById("bang-dangky-pass-input2-rev").type="text";
    document.getElementById("mat-dong5-rev").style.display="none";
    document.getElementById("mat-mo5-rev").style.display="block";
};
document.getElementById("mat-mo5-rev").onclick = function (){
    document.getElementById("bang-dangky-pass-input2-rev").type="password";
    document.getElementById("mat-mo5-rev").style.display="none";
    document.getElementById("mat-dong5-rev").style.display="block";
};
/////////////////////
