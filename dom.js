

window.onload=specialsDomInicial;


function specialsDom() {
    let specialsDatos = document.getElementById("row-specials-datos");

    let specialsImg = document.getElementById("row-specials-img");

    let tab = parseInt(this.name)
    let urlImagen = "";
    let htmlDinamico = "";

    switch (tab) {
        case 1:
            urlImagen = "assets/img/specials-1.png";
            htmlDinamico += " <h3>Architecto ut aperiam autem id</h3>"
            htmlDinamico += "<p class='fst - italic'>Qui laudantium consequatur laborum sit qui ad sapientedila parde sonata raqer a videna mareta paulona marka</p>"
            htmlDinamico += "<p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint.Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Estrepellat minima eveniet eius et quis magni nihil. Consequatur doloremquaerat quos qui similique accusamus nostrum rem vero</p>"
            break;
        case 2:
            urlImagen = "assets/img/specials-2.png";
            htmlDinamico += "  <h3>Et blanditiis nemo veritatis excepturi</h3>"
            htmlDinamico += "<p class='fst-italic'>Ea ipsum voluptatem consequatur quis est. Illum errorullam omnis quia etreiciendis sunt sunt est</p>"
            htmlDinamico += "<p>Qui laudantium consequatur laborum sit qui ad sapientedila parde sonata raqer a videna mareta paulona marka. Non aliquidrepellendus itaque accusamus eius etvelit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode paktomadirna desera vafle de nideran pal</p>"
            break;
        case 3:
            urlImagen = "assets/img/specials-3.png";
            htmlDinamico += " <h3>Impedit facilis occaecati odio neque aperiam sit</h3>"
            htmlDinamico += " <p class='fst-italic'>Eos voluptatibus quo. Odio similique illum id quidem nonenim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaeratperferendis aut</p>"
            htmlDinamico += " <p>Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatisquisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minimamolestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam.Soluta et harum voluptatem optio quae</p>"
            break;
        case 4:
            urlImagen = "assets/img/specials-4.png";
            htmlDinamico += " <h3>Architecto ut aperiam autem id</h3>"
            htmlDinamico += "<p class='fst - italic'>Qui laudantium consequatur laborum sit qui ad sapientedila parde sonata raqer a videna mareta paulona marka</p>"
            htmlDinamico += "<p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint.Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Estrepellat minima eveniet eius et quis magni nihil. Consequatur doloremquaerat quos qui similique accusamus nostrum rem vero</p>"
            break;
        case 5:
            urlImagen = "assets/img/specials-5.png";
            htmlDinamico += " <h3>Architecto ut aperiam autem id</h3>"
            htmlDinamico += "<p class='fst - italic'>Qui laudantium consequatur laborum sit qui ad sapientedila parde sonata raqer a videna mareta paulona marka</p>"
            htmlDinamico += "<p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint.Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Estrepellat minima eveniet eius et quis magni nihil. Consequatur doloremquaerat quos qui similique accusamus nostrum rem vero</p>"
            break;


    }

    specialsDatos.innerHTML="";
    specialsDatos.innerHTML=htmlDinamico;
    specialsImg.src="";
    specialsImg.src=urlImagen;






}


function  agragarEventos(l){
 let listItems =document.getElementsByClassName("specialsPer-listItem");
   for (const item in listItems) {
       if(listItems[item].nodeName==="A"){
           listItems[item].onclick=specialsDom;
       }
   }

}


function specialsDomInicial() {
    let specialsDatos = document.getElementById("row-specials-datos");

    let specialsImg = document.getElementById("row-specials-img");

    let urlImagen = "";
    let htmlDinamico = "";
    
    
    urlImagen = "assets/img/specials-1.png";
    htmlDinamico += " <h3>Architecto ut aperiam autem id</h3>"
    htmlDinamico += "<p class='fst - italic'>Qui laudantium consequatur laborum sit qui ad sapientedila parde sonata raqer a videna mareta paulona marka</p>"
    htmlDinamico += "<p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint.Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Estrepellat minima eveniet eius et quis magni nihil. Consequatur doloremquaerat quos qui similique accusamus nostrum rem vero</p>"
    
    specialsDatos.innerHTML="";
    specialsDatos.innerHTML=htmlDinamico;
    specialsImg.src="";
    specialsImg.src=urlImagen;

    agragarEventos();
    
}