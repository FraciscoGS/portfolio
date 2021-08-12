const sectionfilter = document.getElementById("portfoliofilter");


sectionfilter.ready(function(){
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if(value == 'ALL'){
            $('.margin2').show('1000');
            $('.margin22').show('1000');
            $('.tarjet').show('1000');
        }else{
            $('.tarjet').not('.'+value).hide('1000');
            $('.margin2').not('.'+value).hide('1000');
            $('.margin22').not('.'+value).hide('1000');
            $('.tarjet').filter('.'+value).show('1000');
            $('.margin2').filter('.'+value).show('1000');
            $('.margin22').filter('.'+value).show('1000');
        }
    })
})

$('.list').click(function(){

    $(this).addClass('active').siblings().removeClass('active');

});
