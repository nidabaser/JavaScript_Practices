//TEMPLATE LITERALS

function write(firstName , lastName){
    
    //console.log("İsim : " + firstName +" " + "Soyisim :" + lastName)
    
    //Template Literals

    console.log(
        `
         İsim : ${firstName} 
         Soyisim: ${lastName}
         `
        )
}

write("Ashoka" , "Tano")

//Example

function getUserById(userId){
    console.log(`http://localhost:8080/users/${userId}`)
}

getUserById(10)
