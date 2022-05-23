<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment 17</title>
</head>

<body>
    <h2>Rotation of Array</h2>

    <script>

        var arr = [1, 2, 3, 4, 5, 6];
        var k = window.prompt("Enter value of k element: ");

        document.write(" Array is : " + arr + "<br>");

        for (var i = 0; i < k; i++) {

            var j, first;

            first = arr[0];

            for (j = 0; j < arr.length - 1; j++) {
                arr[j] = arr[j + 1];
            }
            arr[j] = first;
        }

        document.write("Rotated Array : " + arr);

    </script>
</body>

</html>
