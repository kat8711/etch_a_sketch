console.log("Hello!");

$(document).ready(function()
{
    var tableSize = 16;

    $("#grid").append("<table>")

    for (i = 1; i <= tableSize; i++)
    {
       $("#grid").append("<tr>");

       for (j = 1; j <= tableSize; j++)
       {
        $("#grid").append("<td></td>");
       }

       $("#grid").append("</tr>")
    }

    $("#grid").append("</table>");

    console.log(randomColor());
});

var randomColor = function()
{
    var hexCode = "#";

    for (i = 1; i <= 6; i++) {
        var num = Math.floor(Math.random() * 17);

        if (num > 9)
        {
            switch(num)
            {
                case 10:
                    digit = "a";
                    break;
                case 11:
                    digit = "b";
                    break;
                case 12:
                    digit = "c";
                    break;
                case 13:
                    digit = "d";
                    break;
                case 14:
                    digit = "e";
                    break;
                case 15:
                    digit = "f";
                    break;
                default:
                    break;
            }
        }
        else
        {
            digit = num.toString();
        }

        hexCode = hexCode + digit;
    }

    return hexCode;
}