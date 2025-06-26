//navbar

    const menuToggle = document.getElementById('menuToggle');
    const navbar = document.getElementById('navbar');
    const menuIcon = document.getElementById('menuIcon');

    let isOpen = false;

    menuToggle.addEventListener('click', () => {
      isOpen = !isOpen;
      navbar.classList.toggle('show');
      menuIcon.classList.toggle('fa-bars');
      menuIcon.classList.toggle('fa-times');
    });
  



  const links = document.querySelectorAll(".nav-link");
  const underline = document.getElementById("underline");
  const sections = document.querySelectorAll("section");

  function moveUnderline(activeLink) {
    
    underline.style.left = activeLink.offsetLeft + "px";
    underline.style.width = '2rem';
  }

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 430;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    links.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
        moveUnderline(link);
      }
    });
  });

 

 //skills

 const observer =  new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      document.querySelectorAll('.progress').forEach(bar=>{
        const percentage = parseInt(bar.getAttribute('data-percentage'));
        let current = 0;
        //const percentageLabel = bar.nextElementSibling;

        const interval = setInterval(()=>{
          if(current<= percentage){
            bar.style.width= current + '%';
            //percentageLabel.textContent = current+'%';
            current++;
          }else{
            clearInterval(interval)
          }
        },20);
      });
      observer.disconnect();
    }
  })
 })
 observer.observe(document.querySelector('.skill-grid'))


 //internship

 function openModel(id){
    document.getElementById(id).style.display='block';
 }
 function closeModel(id){
  document.getElementById(id).style.display ='none'
 }




 //projects

 const tabButtons = document.querySelectorAll('.tab-button');
 const tabContents = document.querySelectorAll('.tab-content');

 tabButtons.forEach(but=>{

  but.addEventListener('click',()=>{
    tabButtons.forEach(b=> b.classList.remove('active'));
    tabContents.forEach(tc => tc.classList.remove('active'));

    but.classList.add('active');
    document.getElementById(but.dataset.tab).classList.add('active')
  })

 })


 document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = {
    name: this.name.value,
    number: this.number.value,
    email: this.email.value,
    message: this.message.value
  };

  fetch("https://script.google.com/macros/s/AKfycbynX_kB1Etu-mwKhLtdJU3b79_i7TblsfX6GzVVYAnDHQRwCgR1Pf-oS-kVG5GaNX4b/exec", {
    method: "POST",
    body: JSON.stringify(formData)
  })
  .then(response => response.text())
  .then(data => {
    alert("Form submitted successfully!");
    document.getElementById("myForm").reset();
  })
  .catch(error => {
    alert("Error submitting form");
    console.error(error);
  });
});