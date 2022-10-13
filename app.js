$(document).ready(function(){
    $.ajax({
        url:   'https://api.github.com/users',
        type: "GET", 
        beforeSend: function(){
            $('body').addClass('active')
            $('body.active loader').css("display", "flex")
        },
        success: function(response, status){
            $('body').removeClass('active')
            $('body.active loader').css("display", "none")
            response.map(element => {
                console.log(element)
            let content = `
                <div class="main__container">
                    <div class="imgBox">
                        <img src=${element.avatar_url}/>    
                    </div>
                    <h1 class="user_name">${element.login}</h1>
                    <div class="link">
                        <a href=${element.url}>Read More</a>
                        </div>
                    <p class="id">${element.id}</p>
                </div>`
            $('.container').append(content)
            })
        },
        error: function(err){
            console.log("Error Occurs")
        }
    })
})