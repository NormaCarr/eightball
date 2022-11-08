
/* This function is called in Eightball.js to set the dinamic style */

function cirStyle(color,texC)
{
    return({
        padding:100,
        margin:20,
        display:"inline-block",
        color:texC,
        backgroundColor:color,
        borderRadius: "50%",
        width:120,
        height:120,
    });
}

export default cirStyle;