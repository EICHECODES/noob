function verificar(){
    //alert("Funcionou!")
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
   if(fano.value.length ==0 || Number(fano.value.length>ano)){
    window.alert("Verifique os dados e tente novamente!")
}else{
    let sexu = document.getElementsByName('radsex')
    let idade= ano - Number(fano.value)
    let genero = ""
    let img = document.createElement("img")
    img.setAttribute('id','foto')
    if(sexu[0].checked){
        genero = "Masculino"
        if(idade>=0 && (idade<10)){
            //CRIANÇA
            img.setAttribute('src', 'x5.png')
        }else if(idade <21){
            //JOVEM
            img.setAttribute('src', 'x1.png')
        }else if(idade <50){
            //ADULTO
            img.setAttribute('src', 'x7.png')
        }else{
            //IDOSO
            img.setAttribute('src', 'x2.png')
        }
    }else if(sexu[1].checked){
        genero = "Feminino"
        if(idade>=0 && (idade<10)){
            //CRIANÇA
            img.setAttribute('src', 'x9.png')
        }else if(idade <21){
            //JOVEM
            img.setAttribute('src', 'x4.png')
        }else if(idade <50){
            //ADULTO
            img.setAttribute('src', 'x3.png')
        }else{
            //IDOSO
            img.setAttribute('src', 'x6.png')
        }
    }
    
    res.style.textAlign ='center'
    res.innerHTML = `Você é do sexo ${genero} e com ${idade} anos!`
    res.appendChild(img)
}
}
