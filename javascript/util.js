(function($)
{
    $.fn.navList = function()
    {
        let $this = $(this);
        let $a = $this.find('a');
        let b = [];

        $a.each(function()
        {
            let $this = $(this),
                indent = Math.max(0, $this.parents('li').length - 1),
                href = $this.attr('href'),
                target = $this.attr('target');

            b.push(
                '<a ' +
                    'class="link depth-' + indent + '"' +
                    ( (typeof target !== 'undefined' && target != '') ? ' target="' + target + '"' : '') +
                    ( (typeof href !== 'undefined' && href != '')? ' target=' + target + '"' : '') +
                '>' +
                    '<span class="indent-' + indent + '"></span>' +
                    $this.text() +
                '</a>'  
            );
        });

        return b.join('');
    };

    $.fn.panel = function(userConfig)
    {
        // Pas d'élément.
            if (this.length == 0)
                return $this;
        
        // Multiple élément.
            if (this.length > 1)
            {
                for (let i = 0; i < this.length; i++)
                    $(this[i]).panel(userConfig);
                return $this
            }

        //Vars.
            let $this = $(this),
                $body = $('body'),
                $window = $(window),
                id = $this.attr('id'),
                config;
        
        // Config.
            config = $.extend(
            {
                //delay.
                    delay: 0,

                // hide panel on link click.
                    hideOnClick: false,

                // hide panel on escape keypress.
                    hideOnEscape: false,

                // hide panel on swipe.
                    hideOnSwipe: false,

                // Reset scroll.
                    resetScroll: false,

                // Reset forms.
                    resetForms: false,

                // Side of viewport
                    side: null,

                // Target element.
                    target: $this,

                // Class to toggle.
                    visibleClass: 'visible'
            }, userConfig);

                if (typeof config.target != 'jQuery')
                    config.target = $(config.target);
    }
})