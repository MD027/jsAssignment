<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment 18</title>
</head>

<body>
    <script>

        var word = window.prompt("Enter Text: ");
        document.write(" String is : " + word + "<br>");

        var result = pigIt(word);
        document.write(" Pig Latin text is : " + result);

        function pigIt(str) {

            let strArr = str.split(' ');
            let pigLatin = [];

            for (let word of strArr) {
                if ((/([a-zA-Z])/).test(word)) {
                    pigLatin.push(word.substring(1) + word[0] + "ay");
                } else {
                    pigLatin.push(word);
                }
            }

            return pigLatin.join(" ");
        }

    </script>
    </script>
</body>

</html>
