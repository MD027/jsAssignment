<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8">
    <title> Assignment 19</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <h1>Calculator</h1>
    <table class="calculator">
        <tr>
            <td colspan="3"> <input class="display-box" type="text" id="result" disabled /> </td>

            <td> <input class="button" type="button" value="C" onclick="clearScreen()"
                    style="background-color: #fb0066;" /> </td>
        </tr>
        <tr>

            <td> <input class="button" type="button" value="1" onclick="display('1')" /> </td>
            <td> <input class="button" type="button" value="2" onclick="display('2')" /> </td>
            <td> <input class="button" type="button" value="3" onclick="display('3')" /> </td>
            <td> <input class="button" type="button" value="/" onclick="display('/')" /> </td>
        </tr>
        <tr>
            <td> <input class="button" type="button" value="4" onclick="display('4')" /> </td>
            <td> <input class="button" type="button" value="5" onclick="display('5')" /> </td>
            <td> <input class="button" type="button" value="6" onclick="display('6')" /> </td>
            <td> <input class="button" type="button" value="-" onclick="display('-')" /> </td>
        </tr>
        <tr>
            <td> <input class="button" type="button" value="7" onclick="display('7')" /> </td>
            <td> <input class="button" type="button" value="8" onclick="display('8')" /> </td>
            <td> <input class="button" type="button" value="9" onclick="display('9')" /> </td>
            <td> <input class="button" type="button" value="+" onclick="display('+')" /> </td>
        </tr>
        <tr>
            <td> <input class="button" type="button" value="." onclick="display('.')" /> </td>
            <td> <input class="button" type="button" value="0" onclick="display('0')" /> </td>

            <td> <input class="button" type="button" value="=" onclick="calculate()"
                    style="background-color: #fb0066;" /> </td>
            <td> <input class="button" type="button" value="*" onclick="display('*')" /> </td>
        </tr>
    </table>
    <script>
        // This function clear all the values
        function clearScreen() {
            document.getElementById("result").value = "";
        }

        // This function display values
        function display(value) {
            document.getElementById("result").value += value;
        }
        // This function evaluates the expression and return result
        function calculate() {
            var p = document.getElementById("result").value;
            var q = eval(p);
            document.getElementById("result").value = q;
        }
    </script>
</body>

</html>
