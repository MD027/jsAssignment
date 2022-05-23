var str = window.prompt("Enter String: ");
        document.write("Given String is:" + str + "<br>");

        var newStr = str.replace(/[a,b]/g, '');

        document.write("New String is: " + newStr);
