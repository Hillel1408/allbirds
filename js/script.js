$(document).ready(function(){

	$('.slick').slick({
		slidesToShow:3,
		infinite: false,
		responsive:[
			{
				breakpoint: 840,
				settings:{
					slidesToShow:2
				}
			},
			{
				breakpoint: 420,
				settings:{
					slidesToShow:1
				}
			}
		]
	});

	$('.tab__item').on('click', function(){
		var $this = $(this);
		if (!$this.is('.tab_active'))
		{
			$('.tab__item').removeClass('tab_active');
			$this.addClass('tab_active');
			$('.favorites__list').removeClass('flex');
			$('.favorites__list[data-id='+$this.data('id')+']').addClass('flex');
		}
		return false;
	});
});