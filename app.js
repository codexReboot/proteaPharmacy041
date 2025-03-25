const hamburgerBtn = document.querySelector('.hamburgerBtn');

const hamburgerTopBar = document.querySelector(".hamburgerBtn__hamburgerBar--top");
const hamburgerMiddleBar = document.querySelector(".hamburgerBtn__hamburgerBar--middle");
const hamburgerBottomBar = document.querySelector(".hamburgerBtn__hamburgerBar--bottom");

const hamburgerMenu = document.querySelector('.navList');

const navItems = document.querySelectorAll('.navItem');

const navItem1 = document.querySelector('.navItem1');
const navItem2 = document.querySelector('.navItem2');
const navItem3 = document.querySelector('.navItem3');
const navItem4 = document.querySelector('.navItem4');
const navItem5 = document.querySelector('.navItem5');
const navItem6 = document.querySelector('.navItem6');
const navItem7 = document.querySelector('.navItem7');
const navItem8 = document.querySelector('.navItem8');

const profilePhoto = document.querySelector('.profilePhoto');
const logo = document.querySelector('.logo');
const navbar = document.querySelector('.navbarSection');
const navFrame = document.querySelector('.navFrame');

const footer = document.querySelector('.footer');

const hero = document.querySelector('.heroSection');

const copyrightDate = document.querySelector('.footer__copyrightDate');

////////////////////////////////////////////////////////////////////////////////////////
// cardPhoto variables
///////////////////////////////////////////////////////////////////////////////////////

const cardPhotos = document.querySelectorAll(".photoCollage__cardPhoto");

for(let card of cardPhotos) {
  card.addEventListener('click', function(){
    card.classList.toggle("rotateCard");
  })
};


////////////////////////////////////////////////////////////////////////////////////////
// imageSlider variables
///////////////////////////////////////////////////////////////////////////////////////

// const slides = document.querySelectorAll('.imageSlider__slide');
// const index = document.querySelectorAll('.imageSlider__index');
// const leftArrBtn = document.querySelector('.imageSlider__leftArrBtnContainer');
// const rightArrBtn = document.querySelector('.imageSlider__rightArrBtnContainer');

////////////////////////////////////////////////////////////////////////////////////////
// imageSlider animation and navigation logic
////////////////////////////////////////////////////////////////////////////////////////

// let slideIndex = 0

// index[0].style.backgroundColor = "#63d426";
// index[0].style.border = "1px solid #44c300";


// leftArrBtn.addEventListener('click', ()=> {
//     if(slideIndex < 0) {
//         slideIndex = 14;
//     }
//     slides[slideIndex].classList.remove('animateSlideMifL');
//     slides[slideIndex].classList.remove('animateSlideMifR');
//     slides[slideIndex].classList.add('animateSlideMotR');

//     index[slideIndex].style.backgroundColor = "#012e4c";
//     index[slideIndex].style.border = "1px solid #012e4c";

//     setTimeout(() => {
//         slides[slideIndex].classList.add('displayNone');
//         index[slideIndex].style.backgroundColor = "#012e4c";
//         index[slideIndex].style.border = "1px solid #012e4c";
//     }, 1000);
//     setTimeout(() => {
//         if(slideIndex === 0) {
//             slideIndex = 15;
//         }
//         slides[slideIndex - 1].classList.remove('animateSlideMotR');
//         slides[slideIndex - 1].classList.remove('animateSlideMotL');
//         slides[slideIndex - 1].classList.remove('displayNone');
//         slides[slideIndex - 1].classList.add('displayBlock');
//         slides[slideIndex - 1].classList.add('animateSlideMifL');

//         index[slideIndex - 1].style.backgroundColor = "#63d426";
//         index[slideIndex - 1].style.border = "1px solid #44c300";

//         slideIndex -= 1;
//     }, 1001);
// });

// rightArrBtn.addEventListener('click', ()=> {
//     if(slideIndex > 14) {
//         slideIndex = 0;
//     }
//     slides[slideIndex].classList.remove('animateSlideMifL');
//     slides[slideIndex].classList.remove('animateSlideMifR');
//     slides[slideIndex].classList.add('animateSlideMotL');

//     index[slideIndex].style.backgroundColor = "#012e4c";
//     index[slideIndex].style.border = "1px solid #012e4c";

//     setTimeout(() => {
//         slides[slideIndex].classList.add('displayNone');
//         index[slideIndex].style.backgroundColor = "#012e4c";
//         index[slideIndex].style.border = "1px solid #012e4c";
//     }, 1000);
//     setTimeout(() => {
//         if(slideIndex === 14) {
//             slideIndex = -1;
//         }
//         slides[slideIndex + 1].classList.remove('animateSlideMotL');
//         slides[slideIndex + 1].classList.remove('animateSlideMotR');
//         slides[slideIndex + 1].classList.remove('displayNone');
//         slides[slideIndex + 1].classList.add('displayBlock');
//         slides[slideIndex + 1].classList.add('animateSlideMifR');

//         index[slideIndex + 1].style.backgroundColor = "#63d426";
//         index[slideIndex + 1].style.border = "1px solid #44c300"

//         slideIndex += 1;
//     }, 1001);
// });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// product carousel
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const products = document.querySelectorAll('.product');
// let productIndex = 0;

// function animateProducts() {
//   products[productIndex].classList.remove('promotionContainer__displayNone');
//   products[productIndex].classList.add('promotionContainer__displayBlock');
//   products[productIndex].classList.add('animateProduct');
//   productIndex++;
// }

// products[productIndex].classList.remove('promotionContainer__displayNone');
// products[productIndex].classList.add('promotionContainer__displayBlock');
// products[productIndex].classList.add('animateProduct');
// productIndex++;

// setInterval(() => {
//     if(productIndex === 10) {
//         products[productIndex - 1].classList.remove('promotionContainer__displayBlock');
//         products[productIndex - 1].classList.add('promotionContainer__displayNone');
//         products[productIndex - 1].classList.remove('animateProduct');
//         productIndex = 0;
//     }
//     if(productIndex === 0) {
//         products[productIndex].classList.remove('promotionContainer__displayNone');
//         products[productIndex].classList.add('promotionContainer__displayBlock');
//         products[productIndex].classList.add('animateProduct');
//         productIndex++;
//     } else {
//         products[productIndex - 1].classList.remove('promotionContainer__displayBlock');
//         products[productIndex - 1].classList.add('promotionContainer__displayNone');
//         products[productIndex - 1].classList.remove('animateProduct');
//         animateProducts();
//     }
// }, 6000);

//////////////////////////////////////////////////////////////////////////////////////////
// Terms and Conditions pop-up logic
//////////////////////////////////////////////////////////////////////////////////////////

const legal = document.querySelector('.footer__legal');
const legalOpenIcon = document.querySelector('.openAndCloseIcons__openIcon');
const legalCloseIcon = document.querySelector('.openAndCloseIcons__closeIcon');
const termsAndConditions = document.querySelector('.termsAndConditions');

let legalBtnClicked = false;

legal.addEventListener('click', () => {
  footer.style.position = "static";
  termsAndConditions.classList.toggle('termsAndConditions-displayNone');
  legalOpenIcon.classList.toggle('openAndCloseIcons__icon--displayNone');
  legalCloseIcon.classList.toggle('openAndCloseIcons__icon--displayNone');
});

/////////////////////////////////////////////////////////////////////////////////////////

let footerHeight = footer.offsetHeight;
hero.style.minHeight = `${window.innerHeight - footerHeight}px`;
console.log(`${window.innerHeight - footerHeight}px`);

let height = navbar.offsetHeight;
navFrame.style.height = `${height}px`;

visualViewport.addEventListener("resize", () => {
  height = navbar.offsetHeight;
  navFrame.style.height = `${height}px`;

  console.log(`navbar height = ${navbar.offsetHeight}`);
  console.log(`navFrame height = ${navFrame.offsetHeight}`);
});


window.addEventListener('resize', function(){
  footerHeight = footer.offsetHeight;
  hero.style.minHeight = `${window.innerHeight - footerHeight}px`;
});

hamburgerBtn.addEventListener('click', () => {
  
  console.log(`navbar offsetHeight = ${navbar.offsetHeight}`);
  navFrame.style.height = `${height}px`;
  console.log(`navFrame offsetHeight = ${navFrame.offsetHeight}`);
  
  if (!hamburgerTopBar.classList.contains('hamburgerBtn__hamburgerBar--right')) {
    setTimeout(() => {
      hamburgerTopBar.classList.toggle('hamburgerBtn__hamburgerBar--right');
      hamburgerMiddleBar.classList.toggle('hamburgerBtn__hamburgerBar--transparent');
      hamburgerBottomBar.classList.toggle('hamburgerBtn__hamburgerBar--left');
    }, 200);
  } else {
    setTimeout(() => {
      hamburgerTopBar.classList.toggle('hamburgerBtn__hamburgerBar--right');
      hamburgerMiddleBar.classList.toggle('hamburgerBtn__hamburgerBar--transparent');
      hamburgerBottomBar.classList.toggle('hamburgerBtn__hamburgerBar--left');
    }, 500);
    
    if(window.scrollY < 200 && !hamburgerMenu.classList.contains('navList--displayNone')){
      footer.style.position = "fixed";
      navbar.style.visibility = "hidden";
      navbar.style.opacity = "0";
      navbar.classList.remove('navbar--background');
    }
  }
  
  if(hamburgerMenu.classList.contains('navList--displayNone')) {
    hamburgerMenu.classList.remove('navList--displayNone');
    hamburgerMenu.classList.add('navList--display');
    for(let item of navItems) {
      item.style.opacity = "0";
    }
    setTimeout(() => {
      hamburgerMenu.classList.remove('navList--navListMoveOut');
      hamburgerMenu.classList.add('navList--navListMoveIn');
      for(let item of navItems) {
        item.classList.remove('navItem--moveOut');
        item.classList.add('navItem--moveIn');
      }
      navItem1.style.animationDelay = '.70s';
      navItem2.style.animationDelay = '.80s';
      navItem3.style.animationDelay = '.90s';
      navItem4.style.animationDelay = '1.00s';
      navItem5.style.animationDelay = '1.10s';
      navItem6.style.animationDelay = '1.20s';
      navItem7.style.animationDelay = '1.30s';
      navItem8.style.animationDelay = '1.40s';
    }, 20);
  } else {
    hamburgerMenu.classList.remove('navList--navListMoveIn')
    hamburgerMenu.classList.add('navList--navListMoveOut')
    for(let item of navItems) {
      item.style.opacity = "1";
      item.classList.remove('navItem--moveIn');
      item.classList.add('navItem--moveOut');
    }
    navItem1.style.animationDelay = '.10s';
    navItem2.style.animationDelay = '.15s';
    navItem3.style.animationDelay = '.20s';
    navItem4.style.animationDelay = '.25s';
    navItem5.style.animationDelay = '.30s';
    navItem6.style.animationDelay = '.35s';
    navItem7.style.animationDelay = '.40s';
    navItem8.style.animationDelay = '.45s';
    setTimeout(() => {
      hamburgerMenu.classList.remove('navList--display');
      hamburgerMenu.classList.add('navList--displayNone');
    }, 2000);
  }  
});

window.onscroll = () => {
  setTimeout(() => {
    if(window.scrollY > 200) 
    {  
      footer.style.position = "static";
      navbar.style.visibility = "visible";
      navbar.style.opacity = "1";
      navbar.classList.add('navbar--background');
    }

    else if(window.scrollY < 200 && hamburgerMenu.classList.contains('navList--displayNone'))
    {
      footer.style.position = "fixed";
      navbar.style.visibility = "hidden";
      navbar.style.opacity = "0";
      navbar.classList.remove('navbar--background');
      termsAndConditions.classList.add('termsAndConditions-displayNone');
      legalOpenIcon.classList.remove('openAndCloseIcons__icon--displayNone');
      legalCloseIcon.classList.remove('openAndCloseIcons__icon--displayNone');
      legalCloseIcon.classList.add('openAndCloseIcons__icon--displayNone');
      
    }
  }, 500);
   
}

for(let item of navItems) {
  item.addEventListener('click', () => {
    hamburgerMenu.classList.remove('navList--navListMoveIn')
    hamburgerMenu.classList.add('navList--navListMoveOut')
    for(let item of navItems) {
      item.style.opacity = "1";
      item.classList.remove('navItem--moveIn');
      item.classList.add('navItem--moveOut');
    }
    navItem1.style.animationDelay = '.10s';
    navItem2.style.animationDelay = '.15s';
    navItem3.style.animationDelay = '.20s';
    navItem4.style.animationDelay = '.25s';
    navItem5.style.animationDelay = '.30s';
    navItem6.style.animationDelay = '.35s';
    navItem7.style.animationDelay = '.40s';
    navItem8.style.animationDelay = '.45s';
    setTimeout(() => {
      hamburgerMenu.classList.remove('navList--display');
      hamburgerMenu.classList.add('navList--displayNone');
    }, 1200);

    setTimeout(() => {
      hamburgerTopBar.classList.toggle('hamburgerBtn__hamburgerBar--right');
      hamburgerMiddleBar.classList.toggle('hamburgerBtn__hamburgerBar--transparent');
      hamburgerBottomBar.classList.toggle('hamburgerBtn__hamburgerBar--left');
    }, 500);

    setTimeout(() => {
      if(window.scrollY < 200 ){
        footer.style.position = "fixed";
        navbar.style.visibility = "hidden";
        navbar.style.opacity = "0";
        navbar.classList.remove('navbar--background');
      }
    }, 800);
  });
}

///////////////////////////////////////////////////////////////////////
// website notification
// const notification = document.querySelector('.notification');
// const notificationCloseBtn = document.querySelector('.notificationCloseButton');
// notification.classList.remove('displayNone');
// notification.classList.add('displayBlock');
// notificationCloseBtn.addEventListener('click', function(){
//   notification.classList.remove('displayBlock');
//   notification.classList.add('displayNone');
// })

////////////////////////////////////////////////////////////////////////
// copyright date logic

const updatedCopyrightYear = new Date().getFullYear();
copyrightDate.textContent = updatedCopyrightYear;
