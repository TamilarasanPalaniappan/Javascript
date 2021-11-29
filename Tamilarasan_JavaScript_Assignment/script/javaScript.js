function Validate()
{
var nameid=document.getElementById("name");
var fathername=document.getElementById("fathername");
var mail=document.getElementById("emailid");
var DOB=document.getElementById("dateofBirth");
var mobileno=document.getElementById("mobilNo");
var addr1=document.getElementById("addressline1");
var city=document.getElementById("city");
var zip=document.getElementById("pincode");
var photo=document.getElementById("Uphoto");

    if(nameid.value.trim() =="")
    {
        nameid.style.border="2px solid red";
        document.getElementById("namevalid1").style.visibility="visible";
        return false;     
    }
    else if(fathername.value.trim() =="")
    {
        fathername.style.border="2px solid red";
        document.getElementById("namevalid2").style.visibility="visible";
        return false;
    }
    else if(mail.value.trim() =="")
    {
        mail.style.border="2px solid red";
        document.getElementById("namevalid3").style.visibility="visible";
        return false;
        
    }
    else if( mail.id == "emailid")
    {
        return mailvalidate(mail);
    }
   
    else if(DOB.value.trim() =="")
    {
        DOB.style.border="2px solid red";
        document.getElementById("namevalid4").style.visibility="visible";
        return false;
    }
    else if( mail.id == "emailid")
    {
        return dobvalidate(mail);
    }
    
     else if(mobileno.value.trim() =="")
    {
        mobileno.style.border="2px solid red";
        document.getElementById("namevalid5").style.visibility="visible";
        return false;
    }
     else if(addr1.value.trim() =="")
    {
        addr1.style.border="2px solid red";
        document.getElementById("namevalid6").style.visibility="visible";
        return false;
    }
     else if(city.value.trim() == "")
    {
        city.style.border="2px solid red";
        document.getElementById("namevalid7").style.visibility="visible";
        return false;
    }
     else if(zip.value.trim() == "")
    {
        zip.style.border="2px solid red";
        document.getElementById("namevalid8").style.visibility="visible";
        return false;
    }
    else if(photo.value.trim() == "")
    {
        photo.style.border="2px solid red";
        document.getElementById("namevalid9").style.visibility="visible";
        return false;
    }
    else{
        return true;
    }
}
function mailvalidate(mail)
{
    var rxmail=/^([a-z0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
    if(rxmail.test(mail.value)){
        return true;
        
    }
    else{
        mail.style.border="2px solid red";
        document.getElementById("valid2").style.visibility="visible";
        return false;

    }
    function mailvalidate(mail)
{
    var rxdate=/([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
    if(rxmail.test(DOB.value)){
        return true;
    }
    else{
        mail.style.border="2px solid red";
        document.getElementById("valid2").style.visibility="visible";
        return false;

    }
}
}