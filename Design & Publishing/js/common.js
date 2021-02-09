function slide(){
    count = 0;
    setInterval(play, 2000)

    function play(){
        count = (count+1)%3
        $(".slide").animate({
            marginTop: -300*count+"px"
        }, 600)
    }
}

function loginToggle () {
    $('#login')
    .toggle()
}

function joinToggle () {
    $('#join')
    .toggle()
}

$(document)
.on('ready', slide)
.on('click', '.login li:eq(0) a, .join_close span', joinToggle )
.on('click', '.login li:eq(1) a, .login_close span', loginToggle )