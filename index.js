const btn = document.querySelectorAll('.propuestas__btn')
const li  = document.querySelectorAll('.propuestas__li')

btn.forEach( ( v , i )=>{
    btn[i].addEventListener( 'click', ()=>{
        if(  li[i].classList.contains('activo') ){
             li[i].classList.remove('activo')
        }else{
            li.forEach( ( v , i ) => { li[i].classList.remove('activo') }) 
            li[i].classList.add('activo')
        }
    })
})

// CARROUSEL 

window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
	});
});

// POPUP PRINCIPAL

const openModal = document.querySelector('.talleres__popup');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');

openModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('modal--show');
});

// POPUP SECUNDARIA

const openModalSecundaria = document.querySelector('.talleres__popupsecundario');
const modalSecundaria = document.querySelector('.modalsec');
const closeModalSecundaria = document.querySelector('.modalsec__close');

openModalSecundaria.addEventListener('click', (e)=>{
    e.preventDefault();
    modalSecundaria.classList.add('modalsec--show');
});

closeModalSecundaria.addEventListener('click', (e)=>{
    e.preventDefault();
    modalSecundaria.classList.remove('modalsec--show');
});

