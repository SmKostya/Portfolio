/*jshint esversion: 6 */
import "./index.scss";
let footer = document.getElementsByTagName('footer')[0];
let scrollTopButton = document.getElementsByClassName("scrollTop")[0];

let arrow = document.getElementsByClassName("arrow")[0].getElementsByTagName("span")[0];
let button = document.getElementsByClassName("button")[0];
addClassOnHover(button, "rotate", arrow);

button.addEventListener("click", ScrollFromHeader);
scrollTopButton.addEventListener("click", ScrollTop);

let heightPage = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);
window.onscroll = function() {
  
  let scrollHeight = getScroll();
  let windowHeight = document.documentElement.clientHeight;
  
  if (scrollHeight + windowHeight > heightPage-1) {
    footer.classList.add("Open");
    ShowFooter();
  } else{
    if (footer.classList.contains("Open")) {
      footer.classList.remove("Open");
      HideFooter();
    }
  }

};

function ScrollFromHeader(){
  let windowHeight = document.documentElement.clientHeight;
  window.scrollBy({top: windowHeight, behavior: 'smooth'});
}

function ScrollTop(){
  window.scrollBy({top: -heightPage, behavior: 'smooth'});
}

function ShowFooter() {


  var ShowFooter = [{
    transform: 'translateY(100px)',
    opacity: 0
  },
  {
    offset: 0.8,
    transform: 'translateY(20px)',
    opacity: 0.8
  },
  {
    transform: 'translateY(0px)',
    opacity: 1
  }
];

footer.animate(ShowFooter, {
  duration: 400,
  fill: 'forwards'
});
}
function HideFooter() {
  
  let HideFooter = [{
    transform: 'translateY(0px)',
    opacity: 1
  },
  {
    offset: 0.2,
    transform: 'translateY(20px)',
    opacity: 0.2
  },
  {
    transform: 'translateY(100px)',
    opacity: 0
  }
  ];

  footer.animate(HideFooter, {
    duration: 400,
    fill: 'forwards'
  });
}


function addClassOnHover(hoverElement, className, ElementToAddClass = hoverElement) {
  hoverElement.addEventListener('mouseenter', function () {
    ElementToAddClass.classList.add(className);
  });
  hoverElement.addEventListener('mouseout', function () {
    ElementToAddClass.classList.remove(className);
  });
}

function getScroll() {
  return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
}


// CalncleDblClickSelectionByClass(["icon", "button"]);

// function CalncleDblClickSelectionByClass(elements) {
//   for (let element in elements) {
//     console.log(elements[element]);
//     ArrByClass = document.getElementsByClassName(""+elements[element]);
//     console.log(ArrByClass);
//     for (let i = 0; i < ArrByClass.length; i++) {
//       ArrByClass[i].onmousedown = function (event) {
//         event.stopPropagation();
//       };
//       ArrByClass[i].onselectstart = function (event) {
//         event.stopPropagation();
//       };
//     }
//   }
// }