// Bir cümlede geçen harf sayısı bulma örneği

let text = "I am learning Javascript";

let char = prompt("Please enter character: ");

let result = find(char);

alert("Harf sayısı: " + result);

function find(char){

    let toplam = 0;

    for(let i = 0; i < text.length; i++){

        if(text.charAt(i) === char){
            
            toplam += 1;
        
        };

    }

     return toplam;

}