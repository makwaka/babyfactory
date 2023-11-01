const man = document.querySelector('.man');
const woman = document.querySelector('.woman');
const love = document.querySelector('.love');
const united = document.querySelector('.united');
const wedding = document.querySelector('.wedding');
const kiss = document.querySelector('.kiss');
const cucumber = document.querySelector('.cucumber');
const water = document.querySelector('.water');
const pregnant = document.querySelector('.pregnant');
const baby = document.querySelector('.baby');


woman.addEventListener('click', () => {
  if(man.classList.contains('man')){
    man.classList.add('active')
    woman.classList.remove('active')
  }
})

man.addEventListener('click', () => {
  if(love.classList.contains('love')){
    love.classList.add('active')
    man.classList.remove('active')
  }
});

love.addEventListener('click', () => {
  if(united.classList.contains('united')){
    united.classList.add('active')
    love.classList.remove('active')
  }
});

united.addEventListener('click', () => {
  if(wedding.classList.contains('wedding')){
    wedding.classList.add('active')
    united.classList.remove('active')
  }
});


wedding.addEventListener('click', () => {
  if(kiss.classList.contains('kiss')){
    kiss.classList.add('active')
    wedding.classList.remove('active')
  }
});

kiss.addEventListener('click', () => {
  if(cucumber.classList.contains('cucumber')){
    cucumber.classList.add('active')
    kiss.classList.remove('active')
  }
});

cucumber.addEventListener('click', () => {
  if(water.classList.contains('water')){
    water.classList.add('active')
    cucumber.classList.remove('active')
  }
});

water.addEventListener('click', () => {
  if(pregnant.classList.contains('pregnant')){
    pregnant.classList.add('active')
    water.classList.remove('active')
  }
});

pregnant.addEventListener('click', () => {
  if(baby.classList.contains('baby')){
    baby.classList.add('active')
    pregnant.classList.remove('active')
  }
});
