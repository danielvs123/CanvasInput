/**
 * Created by DanielZhang on 2017/9/9.
 */
;(function ( canvasInput, undefined ) {

    //外层div
    var outerDiv,
        //核心input
        input,
        //input这个canvas的ctx
        ctx,
        canvasWidth,
        fontSize;
    var wordRate = {
        Q:56/76,W:1,E:52/76,R:54/76,T:51/76,Y:49/76,U:59/76,I:31/76,O:58/76,P:49/76,
        A:47/64,S:36/64,D:49/64,F:40/64,G:48/64,H:52/64,J:33/64,K:47/64,L:41/64,
        Z:39/63,X:47/65,C:42/65,V:46/65,B:42/65,N:50/65,M:53/60,
        q:64/99,w:83/99,e:63/99,r:44/99,t:39/99,y:53/99,u:56/99,i:28/99,o:49/99,p:56/99,
    };
    canvasInput.init = function(outerDiv,data){
        outerDiv = document.getElementById(outerDiv);
        var backgroundColor = data.hasOwnProperty("backgroundColor")?data["backgroundColor"]:"white";
        fontSize = data.hasOwnProperty("fontSize")?data["fontSize"]:10;
        canvasWidth = data.hasOwnProperty("width")?data["width"]:200;
        input = document.createElement("canvas");
        ctx = input.getContext("2d");
        input.width = canvasWidth;
        input.height = fontSize+16;
        ctx.beginPath();
        ctx.fillStyle = "#99FF33";
        ctx.fillRect(0,0,canvasWidth,input.height);
        ctx.fill();
        outerDiv.appendChild(input);
        ctx.fillStyle = "#99FF33";
        ctx.fillRect(0,0,canvasWidth,input.height);
        ctx.fill();
        //ctx.fillStyle = "#000000";
        //ctx.font=fontSize+"px Georgia";
        //ctx.fillText("qwertyuiop",5,fontSize-10)
    }
    canvasInput.inserWord = function(word){
        var width = 5;
        var wordMaxWidth = parseInt(canvasWidth)-8,
            currentLine = 1,
            lineWord = [""];
        for (wordNum in word){
            wordDetail = word.charAt(wordNum);
            if (wordMaxWidth<width+(wordRate[wordDetail]*fontSize)){
                console.log(width+(wordRate[wordDetail]*fontSize));
                console.log(wordMaxWidth)
                width = 5;
                lineWord[currentLine] = wordDetail;
                currentLine++;
            }else{
                lineWord[currentLine-1] =  lineWord[currentLine-1] + wordDetail;
                width = width+(wordRate[wordDetail]*fontSize);
            }
        }
        input.height = fontSize*currentLine+8;
        ctx.fillStyle = "#99FF33";
        ctx.fillRect(0,0,canvasWidth,input.height);
        ctx.fill();
        ctx.fillStyle = "#000000";
        ctx.font=fontSize+"px Georgia";
        for (var i=0;i<lineWord.length;i++){
            ctx.fillText(lineWord[i],4,fontSize*(i+1)-16);
        }
    }



}( window.canvasInput = window.canvasInput || {} ));