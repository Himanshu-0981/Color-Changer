
        let output = document.getElementById("output-box");
        let colorOutputName = document.getElementById("color-output-name");
        let colorOutputCode = document.getElementById("color-output-code");

        function colorChange(color) {
            output.style.backgroundColor = color;

            if (color == "#fffdd0") {
                colorOutputName.innerHTML = "you choosen cream color";
                colorOutputCode.innerHTML = "#FFFDD0";
            } else if (color == "#00ff00") {
                colorOutputName.innerHTML = "you choosen green color ";
                colorOutputCode.innerHTML = "#00FF00";
            } else if (color == "#FFFF00") {
                colorOutputName.innerHTML = "you choosen yellow color";
                colorOutputCode.innerHTML = "#FFFF00";
            } else if (color == "#00FFFF") {
                colorOutputName.innerHTML = "you choosen aqua color";
                colorOutputCode.innerHTML = "#00FFFF";
            } else {
                colorOutputName.innerHTML = "you choosen black color";
                colorOutputCode.innerHTML = "#000000";
            }
        }