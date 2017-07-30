$(document).ready(function () {

    $("#search").on('click', function () {
        $("#pages").each(function(){
             $(this).find("a").remove();
        });

        var search = $("#input>input").val();
        $("#name").animate({
            'margin-top': '5%'
        });

        $("#wiki").each(function() {
            //console.log(this);
            this.animate({
                
            'font-size': '40px'
            });
        });
        //console.log(search);

        $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&gsrlimit=15&generator=search&origin=*&gsrsearch=" + search, function (data) {
            //console.log(data);
            for (var obj in data.query.pages) {
                $("#pages").append('<a id="link" href="https://en.wikipedia.org/?curid=' + data.query.pages[obj].pageid + '"><div id="page">' + data.query.pages[obj].title + '</div></a>');
            };

            
            $("#pages").each(function () {
                //console.log(this);
                $(this).find("div").animate({
                    opacity: 1
                }, 1000);
            });            
        });


    });

    





});