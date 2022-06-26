var Links = {
     setColor : function(color)
     {
        //     var aTagList = document.querySelectorAll('a');
        //     var i = 0;
        //     while(i<aTagList.length)
        //     {
        //         aTagList[i].style.color=color;
        //         i= i+1;
        //     }

        // 위의 함수에 반복문을 사용하는데 jquery가 제공해주는것을 사용하면 안해도한다.
        // jquery 사이트에서 많이 찾아봐야 된다. 근데 바보되는 지금길이다. 
        $('a').css('color',color);

     }
}   

var Body = {
    setColor : function(color)
    {
        //document.querySelector('body').style.color = color;
        $('body').css('color',color);
    }
    ,
    setBackgroundColor : function(color)
    {
        //document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor',color);
    }   
}

function nightDay_handler(self)
{
    var target = document.querySelector('body');
    
    if(self.value ==='Day')
    {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'Night'; 
        Links.setColor('red');
    }
    else
    {
        Body.setBackgroundColor('black');
        Body.setColor('White');
        self.value = 'Day';
        Links.setColor('yellow');
    }
}
