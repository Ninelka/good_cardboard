var map_loaded = false;
    var map_block = document.getElementById('map');
    var options_map = {
        once: true,//once start, thereafter destroy listener
        passive: true,
        capture: true
    };
    map_block.addEventListener('click', start_lazy_map, options_map);
    map_block.addEventListener('mouseover', start_lazy_map, options_map);
    map_block.addEventListener('touchstart', start_lazy_map, options_map);
    map_block.addEventListener('touchmove', start_lazy_map, options_map);
    function start_lazy_map() {
        if (!map_loaded) {
            map_loaded = true;
            $('#ymap_lazy').attr('src', $('#ymap_lazy').attr('data-src'));
            console.log('ymap_loaded');
        }
    }