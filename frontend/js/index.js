$(function(){


sendForm()


function sendForm(){
    $('.formContato').submit((e)=>{
    e.preventDefault()

    var name = $('input[name = nome]').val()
    var email = $('input[name = email]').val()
    var telefone = $('input[name = telefone]').val()

    if(authName(name)== false){
        inputInvalid($('input[name = nome]'))
        return false
    }

    if(authEmail(email) == false){
        inputInvalid($('input[name= email]'))
        return false
    }

    if(authTelefone(telefone)== false){
        inputInvalid($('input[name = telefone]'))
        return false
    }

    $.ajax({
        url: 'http://localhost:3000/dadosPost',
        method: 'POST',
        data: {
            name,
            email,
            telefone
        }
    }).done((data)=> console.log(data))


    var name = $('input[name = nome]').val('')
    var email = $('input[name = email]').val('')
    var telefone = $('input[name = telefone]').val('')

    alert('Formulário enviado com sucesso')
    

    })


    


}


function authName(name){
    if(name == '') return false

    if(name.match(/^[a-z-A-Z ]{1,}$/)){
        return true
    }
    else{
        return false
    }
}

function authEmail(email){
    if(email == '') return false

    if(email.match(/\S+@\S+\.\S+/)){
        return true
    }
    else{
        return false
    }

}

function authTelefone(telefone){
    if(telefone == '' || telefone.match(/^[a-zA-Z]{1,}/)) return false

}


function inputInvalid(arg){
    arg.css('border', '2px solid red')
    arg.css('color', 'red')
    arg.val('Campo inválido')
}

function removeInputInvalid(arg){
    arg.css('border', '1px solid black')
    arg.css('color','black')
    arg.val('')
}

$('input[name = nome]').focus(()=>{
    if($('input[name=nome]').val() == 'Campo inválido'){
        removeInputInvalid($('input[name = nome]'))
    }
})
$('input[name = email]').focus(()=>{
    if($('input[name=email]').val() == 'Campo inválido'){
        removeInputInvalid($('input[name = email]'))
    }
})
$('input[name = telefone]').focus(()=>{
    if($('input[name=telefone]').val() == 'Campo inválido'){
        removeInputInvalid($('input[name = telefone]'))
    }
})



















})