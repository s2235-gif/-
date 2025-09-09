'use strict';
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function() {
document.body.classList.toggle('light-theme');

document.body.classList.toggle('dark-theme');



const className = document.body.className;

if(className=="light-theme"){

    this.textContent="Dark";

}else{

    this.textContent = "Light";

}



console.log('current class name: '+className);

});
const routes={
'/': 'home',

'/s':'s',

'/m':'m',

'/e':'e',

'/c':'c',

'/s/test':'stest',

'/s/free':'sfree',

'/m/test':'mtest',

'/m/free':'mfree',

'/e/free':'efree',

'/e/test':'etest',

'/c/test':'ctest',

'/c/free':'cfree'

};
function getPosts(page){
return JSON.parse(localStorage.getItem(`posts-${page}`) ||'[]');

}

async function addPost(page) {
    const input = document.getElementById(page + '-input');
    const text = input.value.trim();
    if (text === '') return;

    await addDoc(collection(db, page), {
        text,
        date: new Date().toLocaleString()
    });

    posts.unshift({text,date: new Date().toLocaleString()});
    

    input.value = '';
    renderPosts(page);
}

async function renderPosts(page) {
    const container = document.getElementById(page + '-posts');
    if (!container) return;

    const q = query(collection(db, "home"), orderBy("time", "desc"));
    const snapshot = await getDocs(q);

    container.innerHTML = '';
    snapshot.forEach(doc => {
        const data = doc.data();

        // 🔹 Firestoreに保存したミリ秒をDateに変換
        const date = new Date(data.time);
        const formatted = date.toLocaleString("ja-JP", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit"
        });

        const div = document.createElement("div");
        div.innerHTML = `<strong>${post.date}</strong><br>${post.text}`;
        div.textContent = `[${formatted}] ${data.text}`;
        container.appendChild(div);
    });
}


function router(){
const path=location.hash.slice(1) || '/';

document.querySelectorAll('.page').forEach(el=>el.classList.remove('active'));

const pageId = routes[path];

if(pageId) {

    document.getElementById(pageId).classList.add('active');

    renderPosts(pageId);

}

}
window.addEventListener('load', router);
window.addEventListener('hashchange', router);
