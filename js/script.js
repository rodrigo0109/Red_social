//------------- STORIES ---------------------------------

let stories = document.querySelectorAll(".stories__container button");
stories.forEach((story, index) => {
  story.addEventListener("click", (e) => {
    if (story.querySelector(".profile").classList.contains("empty")) {
      cleanHis();
    } else {
      let time = setInterval(() => {
        cleanHis();
        renderHis(index++);
        let empty = document.querySelectorAll(".profile");
        empty[index - 1].classList.add("empty");
      }, 2000);
      setInterval(() => {
        let closes = document.querySelectorAll(".close");
        closes.forEach((close) => {
          close.addEventListener("click", (e) => {
            e.preventDefault();
            cleanHis();
            clearInterval(time);
          });
        });
      }, 2000);
      /* setInterval(() => {
            let backs = document.querySelectorAll(".back");
            backs.forEach((back) => {
              back.addEventListener("click", (e) => {
                e.preventDefault();
                console.log("click");
                cleanHis();
                renderHis(index - 2);
                clearInterval(time)
              });
            });
        },2000) */
      /* setInterval(()=> {
            let forwards = document.querySelectorAll(".forward");
            forwards.forEach((f) => {
                f.addEventListener('click', e => {
                    e.preventDefault()
                     renderHis(index+1);
                     clearInterval(time);
                })
            })
        })*/
      story.classList.add("active");
      setTimeout(() => {
        story.querySelector(".profile").classList.add("empty");
      }, 2000);
    }
  });
});

const nombres = document.querySelectorAll(".title");

function cleanHis() {
  window.container.innerHTML = "";
}

function renderHis(index) {
  const element = his(index);
  window.container.append(element);
}

function his(index) {
  const template = `
         <div class="storyactive" id="storyactive">
        <div class="line-time">
          <div class="time" id="time"></div>
        </div>
        <div class="profile-story">
          <img src="img/profile${index}.jpeg" alt="" class="story-foto" />
          <h3>${nombres[index].innerText}</h3>
        </div>
        <button class="close" id="close"><i class="fas fa-window-close"></i></button>
        <div class="story-section">
          <img src="img/img${index}.jpeg" alt="" />
        </div>
      </div>
      `;
  let historia = document.createElement("div");
  historia.innerHTML = template;
  return historia.firstElementChild;
}

//------------- COMENTS ---------------------------------

let forms = document.querySelectorAll(".form");
let messages = document.querySelectorAll(".message");
let cont = document.querySelectorAll(".coments");
let btnSee = document.querySelectorAll(".btn__ver");
let btnCloses = document.querySelectorAll(".close");
forms.forEach((f, index) => {
  f.addEventListener("submit", (e) => {
    e.preventDefault();
    let comentario = e.target.elements.coment.value;
    renderComent(comentario, index);
    renderComentCard(comentario, index);
    f.reset();
    cont.forEach((c, index) => {
      if (c.children.length > 2) {
        cont[index].classList.add("show");
        btnSee[index].classList.add("show");
        btnSee.forEach((b, index) => {
          b.addEventListener("click", (e) => {
            e.preventDefault();
            messages[index].classList.add("see");
          });
        });
      }
    });
    btnCloses.forEach((bc, index) => {
      bc.addEventListener("click", (e) => {
        e.preventDefault();
        closeComentCard(index);
      });
    });
  });
});
function closeComentCard(index) {
  messages[index].classList.remove("see");
}
function renderComent(comentario, index) {
  const element = coment(comentario, index);
  cont[index].append(element);
}
function renderComentCard(comentario, index) {
  const element = coment(comentario, index);
  messages[index].append(element);
}
function coment(comentario) {
  const templateComent = `
        <div class="coments__text">
            <p>${comentario}</p>
        </div>
    `;
  let com = document.createElement("div");
  com.innerHTML = templateComent;
  return com.firstElementChild;
}

//------------- LIKES ---------------------------------

let likes = document.querySelectorAll(".likes");
let btnLike = document.querySelectorAll(".like");
let touchLike = document.querySelectorAll(".image__card");

/* touchLike.forEach((t,index) => {
    t.addEventListener('touchstart',e => {
        e.stopPropagation()
         let value = likes[index].innerText;
         let newVal = value.slice(0, 4);
         let newNum = newVal * 1;
         const templateLikes2 = `
        <p>${newNum + 1} Me gusta</p>
    `;
        likes[index].innerHTML = templateLikes2;
        btnLike[index].style.color = "red";
    })
  
}) */

likes.forEach((l, index) => {
  let num = Math.round(Math.random() * 10 + Math.random() * 1000);
  const templateLikes = `
        <p>${num} Me gusta</p>
    `;
  l.innerHTML = templateLikes;
});

btnLike.forEach((b, index) => {
  b.addEventListener("click", () => {
    let value = likes[index].innerText;
    let newVal = value.slice(0, 4);
    let newNum = newVal * 1;
    const templateLikes2 = `
        <p>${newNum + 1} Me gusta</p>
    `;
    likes[index].innerHTML = templateLikes2;
    b.style.color = "red";
  });
});

//------------- FOLLOW SECTION ---------------------------------

let popup = document.getElementById("popup");
let btn_si = document.getElementById("btnsi");
let btn_no = document.getElementById("btnno");

let botones = document.querySelectorAll(".aside__button");

botones.forEach((b) => {
  b.addEventListener("click", (e) => {
    e.preventDefault();
    if (b.innerText == "Seguir") {
      b.innerText = "Siguiendo";
      b.classList.replace("aside__button", "aside__btn");
    } else if (b.innerText == "Siguiendo") {
      popup.style.display = "flex";
      btn_si.addEventListener("click", (e) => {
        e.preventDefault();
        popup.style.display = "none";
        b.innerText = "Seguir";
        b.classList.replace("aside__btn", "aside__button");
      });
      btn_no.addEventListener("click", (e) => {
        e.preventDefault();
        popup.style.display = "none";
      });
    }
    setTimeout(() => {
      if (b.innerText == "Siguiendo") {
        b.parentElement.style.transform = "scale(0)";
        setTimeout(() => {
          b.parentElement.style.display = "none";
        }, 1000);
      }
    }, 10000);
  });
});

//-------------- DATE ----------------------------

let date = document.querySelectorAll(".date");
date.forEach((d) => {
  setInterval(() => {
    let time = new Date();
    d.innerText = "Hace " + time.getMinutes() + " minutos";
  }, 1000);
});

//-------------- NEWPOST ----------------------------

let post = document.querySelectorAll(".card");
let postNew = document.querySelectorAll(".cardnew");
let btnPost = document.getElementById("btn-posts");
let atDay = document.querySelector(".atday");

setTimeout(() => {
  btnPost.style.transform = "scaleZ(1)";
}, 20000);

btnPost.addEventListener("click", () => {
  btnPost.style.transform = "scaleZ(0)";
  atDay.style.display = "flex";
  postNew.forEach((n) => {
    n.classList.replace("cardnew", "card");
  });
});
btnPost.addEventListener("click", scrollUp);
function scrollUp() {
  var currentScroll = document.documentElement.scrollTop;
  if (currentScroll > 0) {
    /*  window.requestAnimationFrame(scrollUp); */
    window.scrollTo(0, currentScroll - currentScroll);
  }
}

//----------- DARK MODE -------------------

let theme = document.getElementById("theme");
let header = document.querySelector(".Header");
let storyDark = document.querySelectorAll(".title");
let storyCont = document.querySelector(".stories__container");
let navCont = document.querySelector(".Nav_container");
let switchChecked = document.getElementById("switch");
let body = document.querySelector("body");
let main = document.querySelector(".main");
let secRigth = document.querySelector(".section__right");
let titleCont = document.querySelector(".aside-text");
let titleSugest = document.querySelectorAll(".aside-follow");
let cardNew = document.querySelectorAll(".cardnew");
let card = document.querySelectorAll(".card");
let titleCard = document.querySelectorAll(".header__card");
let cardButtons = document.querySelectorAll(".buttons__card");

theme.addEventListener("click", (e) => {
  e.preventDefault();
  switchChecked.classList.toggle("mdc-switch--checked");
  cardNew.forEach((c) => {
    c.classList.toggle("dark");
  });
  card.forEach((ca) => {
    ca.classList.toggle("dark");
  });
  titleCard.forEach((t) => {
    t.classList.toggle("dark");
  });
  cardButtons.forEach((c) => {
    c.classList.toggle("dark");
  });
  likes.forEach((l) => {
    l.classList.toggle("dark");
  });
  btnSee.forEach((b) => {
    b.classList.toggle("dark");
  });
  cont.forEach((c) => {
    c.classList.toggle("dark");
  });
  forms.forEach((f) => {
    f.classList.toggle("dark");
  });
  header.classList.toggle("dark");
  storyDark.forEach((s) => {
    s.classList.toggle("dark");
  });
  titleSugest.forEach((t) => {
    t.classList.toggle("dark");
  });
  storyCont.classList.toggle("dark");
  navCont.classList.toggle("dark");
  main.classList.toggle("dark");
  if (main.classList.contains("dark")) {
    body.style.background = "#000";
  }
  else{body.style.background = "#fff"}
  secRigth.classList.toggle("dark");
  titleCont.classList.toggle('dark')
  btnPost.classList.toggle('dark')
});
