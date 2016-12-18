console.log("Hello!");

$(document).ready(function()
{
    var tableSize = 16;
    var position = 0;
    var id;
    var cell;

    // set default color to 'rainbow'
    var color = "rainbow";
    $('button#rainbow').attr('class','selected');
    $('button#black').attr('class','unselected');

    // draw the grid
    $("#grid").append("<table>")
    for (i = 1; i <= tableSize; i++)
    {
       $("#grid").append("<tr>");
       for (j = 1; j <= tableSize; j++)
       {
        $("#grid").append("<td id =" + position + "></td>");
        position++;
       }
       $("#grid").append("</tr>")
    }
    $("#grid").append("</table>");


    // color scheme changes when buttons are clicked
    $('button#black').click(function() {
        color = "black";
        $('button#rainbow').attr('class','unselected');
        $('button#black').attr('class','selected');
    })

    $('button#rainbow').click(function() {
        color = "rainbow";
        $('button#rainbow').attr('class','selected');
        $('button#black').attr('class','unselected');
    })

    // grid squares change color on mouseover
    $('td').mouseenter(function() {
        id = $(this).attr('id');
        cell = "td#" + id;
        if (color === "rainbow")
        {
        $(cell).css('background-color',randomColor());
        }
        else if (color === "black") {
        $(cell).css('background-color','#000');
        }
    })

    // reset button clears colors from the grid
    $('button#reset').click(function() {
        $('td').css('background-color','#ddd');
    })
    $('button#reset').mousedown(function() {
        $(this).attr('class','selected');
    })
    $('button#reset').mouseup(function() {
        $(this).attr('class','unselected');
    })


});

var randomColor = function()
{
    var hexCode = "#";

    for (i = 1; i <= 6; i++) {
        var digit;
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