var studentarray=[]
function submit(){
    var name1=document.getElementById("name1").value 
    var name2=document.getElementById("name2").value 
    var name3=document.getElementById("name3").value 
    var name4=document.getElementById("name4").value
    studentarray.push(name1) 
    studentarray.push(name2)
    studentarray.push(name3)
    studentarray.push(name4)
    document.getElementById("displayname").innerHTML=studentarray
    document.getElementById("submit_button").style.display="none"
    document.getElementById("sort_button").style.display="inline-block"
}
function sorting(){
    studentarray.sort()
    console.log(studentarray)
    document.getElementById("displayname").innerHTML=studentarray
}