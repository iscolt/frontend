$(function() {

    $('.tab-panels .tabs li').on('click', function() {
        var $panel = $(this).closest('.tab-panels');

        $panel.find('.tabs li.active').removeClass('active')
        $(this).addClass('active')

        // figure out which panel to show
        // 找出要显示的面板
        var panelToShow = $(this).attr('rel');
        
        // hide current panel
        // 隐藏当前面板
        $panel.find('.panel.active').slideUp(300, showNextPanel);

        function showNextPanel() {
            $(this).removeClass('active')
            // show new panel
            // 显示新的面板
            $('#'+panelToShow).slideDown(300, function() {
                $(this).addClass('active')
            });
        }
    });
});