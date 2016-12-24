$(document).ready(function()
{
    var id;
    var cell;

    // set default color to 'rainbow'
    var color = "rainbow";
    $('button#rainbow').attr('class','selected');
    $('button#grayscale').attr('class','unselected');

    drawGrid(16); //draw grid at default table size

    // color scheme changes when buttons are clicked
    // when Grayscale button is clicked change to grayscale
    $('button#grayscale').click(function() {
        color = "grayscale";
        // change which button appears selected
        $('button#rainbow').attr('class','unselected');
        $('button#grayscale').attr('class','selected');
    })

    // when Rainbow button is clicked change color to random
    $('button#rainbow').click(function() {
        color = "rainbow";
        // change which button appears selected
        $('button#rainbow').attr('class','selected');
        $('button#grayscale').attr('class','unselected');
    })

    // reset button clears colors from the grid
    $('button#reset').click(function() {
        $('div.cell').css('background-color','#f8f8f8');
    })
    // change color of button on click
    $('button#reset').mousedown(function() {
        $(this).attr('class','selected');
    })
    $('button#reset').mouseup(function() {
        $(this).attr('class','unselected');
    })

    // resize button prompts for new size and redraws grid
    $('button#resize').click(function() {
        var newSize = null;
        newSize = prompt("Enter a grid size (2-64):");

        // enforce min and max sizes
        if (newSize > 64) {
            newSize = 64;
        }
        else if (newSize < 2) {
            newSize = 2;
        }

        // if a new size is entered, clear grid and redraw
        if (newSize != null)
        {
            $('div.cell').css('background-color','#f8f8f8');
            $('div#grid').empty();
            drawGrid(newSize);
        }

        // grid squares change color on mouseover
         $('div.cell').mouseenter(function() {
            id = $(this).attr('id');
            cell = "div.cell#" + id;
            // if Rainbow button is selected
            if (color === "rainbow")
            {
            $(cell).css('background-color',randomColor());
            }
            // if Grayscale button is selected
            else if (color === "grayscale")
            {
            var shade = $(cell).css('background-color');
            $(cell).css('background-color',darkerShade(shade));
            }
        })
    })

    // change color of Resize button to show clicking
    $('button#resize').mousedown(function() {
        $(this).attr('class','selected');
    })
    $('button#resize').mouseup(function() {
        $(this).attr('class','unselected');
    })

    // grid squares change color on mouseover
     $('div.cell').mouseenter(function() {
        id = $(this).attr('id');
        cell = "div.cell#" + id;
        // if Rainbow button is selected
        if (color === "rainbow")
        {
        // make cell a random color
        $(cell).css('background-color',randomColor());
        }
        // if Grayscale button is selected
        else if (color === "grayscale")
        {
        // get color of current cell
        var shade = $(cell).css('background-color');
        // make cell one shade darker
        $(cell).css('background-color',darkerShade(shade));
        }
    })
});

// function to draw the grid
var drawGrid = function(tableSize) {
    var position = 0;

     // BEGIN DIV DRAW

    $("#grid").append("<div id='table'>")
    // add rows
    for (i = 1; i <= tableSize; i++)
    {
       $("#grid").append("<div class='row'>");
       // add cells in each row
       for (j = 1; j <= tableSize; j++)
       {
        $("#grid").append("<div id =" + position + " class='cell'></div>");
        position++;
       }
       $("#grid").append("</div>"); // end row
    }
    $("#grid").append("</div>"); // end table

    // END DIV DRAW


    /* // BEGIN TABLE DRAW
    // add table
    $("#grid").append("<table>")
    // add rows
    for (i = 1; i <= tableSize; i++)
    {
       $("#grid").append("<tr>");
       // add cells in each row
       for (j = 1; j <= tableSize; j++)
       {
        $("#grid").append("<td id =" + position + "><div class='cell'></div></td>");
        position++;
       }
       $("#grid").append("</tr>")
    }
    $("#grid").append("</table>");

    // END TABLE DRAW */

    // adjust cell size based on tableSize
    var cellSize = (800 / tableSize) - 3;

    // adjust margins between rows based on table size
    if (tableSize < 50) {
        $('div.row').css('margin-top','-1px');
    }
    else if (tableSize < 60) {
        $('div.row').css('margin-top','-2px');
    }
    // if tableSize < 65
    else {
        $('div.row').css('margin-top','-5px');
    }


    $('div.cell').width(cellSize);
    $('div.cell').height(cellSize);




    return;
}

// function to return shade of gray darker than current shade
var darkerShade = function(shade) {
    var hexCode;

    switch(shade)
    {
        case "rgb(248, 248, 248)":
            hexCode = '#d8d8d8';
            break;
        case "rgb(216, 216, 216)":
            hexCode = '#c0c0c0';
            break;
        case "rgb(192, 192, 192)":
            hexCode = '#a8a8a8';
            break;
        case "rgb(168, 168, 168)":
            hexCode = '#909090';
            break;
        case "rgb(144, 144, 144)":
            hexCode = '#787878';
            break;
        case "rgb(120, 120, 120)":
            hexCode = '#606060';
            break;
        case "rgb(96, 96, 96)":
            hexCode = '#484848';
            break;
        case "rgb(72, 72, 72)":
            hexCode = '#303030';
            break;
        case "rgb(48, 48, 48)":
            hexCode = "#181818";
            break;
        case "rgb(24, 24, 24)":
            hexCode = "#000000";
            break;
        case "rgb(0, 0, 0)":
            break;
        default:
            hexCode = '#d8d8d8';
            break;
    }
    return hexCode;
}

// function to return a random hex code
var randomColor = function()
{
    var hexCode = "#";
    // select a random number for each digit
    for (i = 1; i <= 6; i++) {
        var digit;
        var num = Math.floor(Math.random() * 17);
        // for numbers greater than 9, assign letters
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
        // for numbers 0-8, use the number
        else
        {
            digit = num.toString();
        }
        hexCode = hexCode + digit;
    }
    return hexCode;
}