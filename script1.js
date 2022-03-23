(function($)
{
    let $window = $(window);
    let $body = $(body);
    let $sidebar = $(sidebar);

    //breakpoints.
        breakpoints(
            {
                xlarge: ['1281px', '1680px'],
                large:  [ '981px', '1280px'],
			    medium: [ '737px', '980px' ],
			    small:  [ '481px', '736px' ],
			    xsmall: [ null,    '480px' ]
            }
        );

    // felxbox.
    if (browser.name == 'ie')
    $body.addClass('is-ie')

    // animation initiale.
    $window.on('load', function()
    {
        window.setTimeout(function()
        {
            $body.removeClass('is-preload');
        }, 100);
    });

    // sidebar.
    if ($sidebar.length > 0)
    {
        let $sidebar_a = $sidebar.find('a');

        $sidebar_a.addClass('scrolly').on('click', function()
        {
            
            let $this = $(this);

            //lien externe.
                if ($this.attr('href').charAt(0) != '#')
                    return;

            //désactiver tous les liens.
                $sidebar_a.removeClass('active');

            //activer lien "et" bloquer
                $this.addClass('active');
                $this.addClass('active-locked')
        })

        $sidebar_a.each(function()
        {
            let $this = $(this);
            let id = $this.attr('href');
            let $section = $(id);

            // pas de section pour ce lien.
                if ($section.length < 1)
                    return;

            // scroll.
                $section.scrollex(
                {
                   mode: 'middle',
                   top: '-20vh',
                   bottom: '-20vh',
                   initialize: function()
                   {    
                        // désactiver la section.
                        $section.addClass('inactive');
                   },
                   enter: function()
                   {
                       // activer la section.
                       $section.removeClass('inactive');

                   }
                })
        })

    }

    // Scrolly
        $('.scrolly').scrolly(
        {
                speed: 1000,
                offset: function()
                {
                    if (breakpoints.active('<=large')
                    && !breakpoints.active('<=small')
                    && $sidebar.length > 0)
                    return $sidebar.height();

                    return 0;
                }
        });

    // Spotlights.
        $('.spotlights > section').scrollex(
        {
            mode: 'middle',
            top: '-10vh',
            bottom: '-10vh',
            initialize: function()
            {
                // désactiver la section.
                    $(this).addClass('inactive');
            },
            enter: function() 
            {
                // activer la section.
                    $(this).removeClass('inactive');    
            }
        })
        
})