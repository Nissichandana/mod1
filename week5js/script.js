// Menu data structure
var menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  {
    text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  {
    text: 'account', href: '#', subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
];

// week5-day1
const mainEl = document.querySelector('main');
console.log(mainEl);

mainEl.style.backgroundColor = 'var(--main-bg)'

mainEl.innerHTML = '<h1> SEI Rocks! </h1>'

mainEl.classList.add("flex-ctr");

const topMenuEl = document.getElementById('top-menu');
console.log(topMenuEl);
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var( --top-menu-bg)";
topMenuEl.classList.add("flex-around");



// for (let i = 0; i < menuLinks.length; i++) {
//   let aTag = document.createElement('a');
  
//   console.log("menuLinks[i].subLinks ", menuLinks[i].subLinks)
//   if (typeof menuLinks[i].subLinks != 'undefined') {
//     console.log("array inside", i)
//     for (let j = 0; j < menuLinks[i].subLinks.length; j++) {
//       console.log("Sublinks ", menuLinks[1].text, " Text ", menuLinks[i].subLinks[j].text);
//       console.log("Sublinks ", menuLinks[1].text, " HREF ", menuLinks[i].subLinks[j].href);
//       aTag.textContent = menuLinks[i].subLinks[j].text;
//       aTag.setAttribute('href', menuLinks[i].subLinks[j].href);
//     }
//   }
//   else {
//     console.log("array outside", i);
//     aTag.textContent = menuLinks[i].text;
//     aTag.setAttribute('href', menuLinks[i].href);
//   }
//   console.log(aTag);
//   topMenuEl.appendChild(aTag);
// }

for (let links of menuLinks){
  let aTag = document.createElement('a');
  aTag.textContent = links.text;
  aTag.setAttribute('href',links.href);
  topMenuEl.appendChild(aTag);
}

//week5-day2

const subMenuEl = document.getElementById('sub-menu');
//console.log(subMenuEl);
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var( --sub-menu-bg)';
subMenuEl.classList.add('flex-around');

subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';

/* 5.1 */
const topMenuLinks = topMenuEl.querySelectorAll('a')
//const topMenuLinks = document.getElementById('top-menu').querySelectorAll('a')
let showingSubMenu = false;

/* 5.2 */
topMenuEl.addEventListener('click', function (event) {
  event.preventDefault();
  console.log("Event is : ", event.target.tagName);

  if (event.target.tagName !== 'A') {
    console.log("Not Clicked Hyperlink");
    return;
  }
  console.log("Clicked on hyperlink  : ", event.target.textContent);

  /* 5.3 */
  if (event.target.classList.contains('active')) {
    console.log("1...")
    event.target.classList.remove('active');
    console.log("2...")
    showingSubMenu = false;
    subMenuEl.style.top = 0;
    console.log("3...")
    return;
  }
  console.log("4...")


  /* 5.4 */
  for (let i = 0; i < topMenuLinks.length; i++) {
    topMenuLinks[i].classList.remove("active");
  }

console.log("5...")

   /* 5.5 */
  event.target.classList.add("active");
  console.log("6...")
  /* 5.6 */
  const hyperLinkName = event.target.textContent;
  console.log("7...", hyperLinkName)

  if(event.target.textContent == 'about'){
    console.log('99')
    mainEl.innerHTML = `<h1>about</h1>`;
  }

  const menuLink = menuLinks.find((link) => {
    //find is like map, goes through everything in the array
    return link.text === hyperLinkName; // returns boolean
  });
  

  
  if (menuLink === undefined) {
    return;
  }
  
  if (menuLink.subLinks) {
    showingSubMenu = true;
  } else {
    showingSubMenu = false;
  }

  if (showingSubMenu) {
    buildSubMenu(menuLink.subLinks);
    subMenuEl.style.top = "100%";
  } else {
    subMenuEl.style.top = "0";
  }
  

});

function buildSubMenu(subLinks){
  subMenuEl.innerHTML = '';
  for(i=0; i < subLinks.length; i++)
  {
    const innerAnchor = document.createElement("a");
    innerAnchor.setAttribute("href", subLinks[i].href);
    innerAnchor.textContent = subLinks[i].text;
    subMenuEl.append(innerAnchor);
  }
}

// task 6.0

subMenuEl.addEventListener('click', function(event){
event.preventDefault()
if (event.target.tagName !== 'A'){
  return;
}
console.log(event.target.textContent);


// task 6.1

showingSubMenu = false;
subMenuEl.style.top = 0;

// task 6.2

for(let i= 0; i<topMenuLinks.length; i++){
  topMenuLinks[i].classList.remove("active");
}

// task 6.3

mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;

})