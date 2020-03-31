
Zepto(function($){
    var list = $('.course-list').on('click','span',function(e){
            var e = e || e.event;
            var node = e.target || e.srcElement;
            node.classList.toggle('course-checked');
        })
})

