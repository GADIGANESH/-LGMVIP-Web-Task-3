let submit = document.querySelector(".submit");

submit.addEventListener('click', () => {
    var output = document.querySelector(".output");
    let imageurl = document.querySelector("#img").value;
    var generatedurl = `https://drive.google.com/uc?id=${imageurl}`;
    const data={
        name: document.getElementById("name").value,
        img: generatedurl,
        email: document.getElementById("email").value,
        skills: document.getElementById("skills").value
    };
    console.log(data);
    let newlist=document.createElement('div');
    newlist.classList.add('addData');
    newlist.innerHTML=`
      <div class="NameContainer">${data.name}</div>
      <a href="ganeshgadi4422@gmail.com">${data.email}</a><br>
      <img src="${generatedurl}" alt="image">
      <div class="SkillContainer">${data.skills}</div>
    `
    console.log(newlist);
    output.appendChild(newlist);    
    let input=document.querySelectorAll('input');
    input.forEach(input => {
        input.value = '';
      });

})
