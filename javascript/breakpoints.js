let breakpoints = function ()
{
    "use strict"; 
    function e(e)
    {
        t.init(e)
    }

    let t= 
    {
        list: null,
        media:{},
        events: [],
        init: function(e)
        {
            t.list = e,
            window.addEventListener("orientationchange", t.poll),
            window.addEventListener("load", t.poll),
            window.addEventListener("fullscreenchange", t.poll)
        },

        active: function(e)
        {
            let n,a,s,i,r,d,c;
            if (!(e in t.media))
            {
                if (">=" == e.substr(0,2) ? (a = "gte", n=e.substr(2)):
                "<=" == e.substr(0,2) ? (a = "lte", n=e.substr(2)):
                "<=" == e.substr(0,2) ? (a = "lte", n=e.substr(2)):
                ">" == e.substr(0,1) ? (a = "get", n=e.substr(1)):
                "<" == e.substr(0,1) ? (a = "lt", n=e.substr(0,1)):
                "!" == e.substr(0,1) ? (a = "not", n=e.substr(1)):
                (a = "eq", n=e),
                n&&n in t.list);
            }
        }
    }
}