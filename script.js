
            function changeBg(color){
                document.body.style.backgroundColor = color;

                let txt = document.getElementsByClassName('text');

                if(color == '#000000'){
                    document.body.style.color = "#ffffff";
                    document.body.style.transition = '0.5s';
                    // document.body.style.b = "1px solid #ffffff";
                }else{
                    document.body.style.color = "#000000";
                }
            }