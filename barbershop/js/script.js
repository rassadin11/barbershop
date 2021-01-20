const animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);

	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if (!animItem.classList.contains('prove')) {
				if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
					animItem.classList.add('active');
					animItem.classList.add('prove');
				} else {
					animItem.classList.remove("active");
				}
			}
		}
	}

	function offset(el) {
		const rect = el.getBoundingClientRect(),
			  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, 
			  scrollTop = window.pageYOffset || document.documentElement.scrollTop;

		return {
			top: rect.top + scrollTop,
			left: rect.left + scrollLeft,
		}
	}

	animOnScroll();
};
new Swiper('.image-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

let burger = document.getElementById('icon-menu');

burger.addEventListener('click', () => {
	burger.classList.toggle('active');
	let menuList = document.querySelector('.menu__list');
		headerItem = document.querySelector('.main-advantages');

	document.body.classList.toggle('overflow')
	menuList.classList.toggle('active')
	headerItem.classList.toggle('display')
})

let advantages = document.querySelectorAll('.advantages__item');

if (document.body.clientWidth < 850 && document.body.clientWidth > 550) {
	if (advantages.length % 2 != 0) {
		advantages[advantages.length - 1].classList.add('last');
		let lastNode = advantages[advantages.length - 1].cloneNode(true);
			advantagesLogo = document.getElementById('advantages__logo');

		advantages[advantages.length - 1].remove();
		advantagesLogo.append(lastNode);
	}
}

let i = 0;

for (let elem of advantages) {
	if (elem.clientHeight > i) {
		i = elem.clientHeight;
	}
}

for (let elem of advantages) {
	elem.style.minHeight = i + 'px';
}

let footer = document.querySelector('#footer-flex').children;

let j = 0;

for (let elem of footer) {
	if (elem.clientHeight > j) {
		j = elem.clientHeight;
	}
}

for (let elem of footer) {
	elem.style.minHeight = j + 'px';
}

let tel = document.getElementById('tel');
	array = tel.toString().split('');
	count = 0;

while (count < 5) {
	array.shift()
	count++
}

tel.addEventListener('click', (event) => {
	let data = confirm('Вы уверены, что хотите позвонить по номеру ' + array.join('') + ' ?');

	if (!data) {
		event.preventDefault();
	}
})

let marginFooter = document.querySelectorAll('.margin-footer');

if (document.body.clientWidth < 768) {
	for (let elem of marginFooter) {
		elem.style.paddingTop = '20px';
	}
}