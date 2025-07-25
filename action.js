
document.getElementById("btn-Sub").addEventListener("click", function(e) {
    e.preventDefault();

    const fullName = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const templateParams = {
      from_name: fullName,
      from_email: email,
      message: message,
    };

    emailjs.send("service_cja4ly8", "template_3n97msk", templateParams)
      .then(function(response) {

        setTimeout(() =>{
          const show = document.getElementById("success-show");
          show.style.display = "block";

           setTimeout(() =>{
           const show = document.getElementById("success-show");
          show.style.display = "none";
        }, 5000)
        }, 3000);

       
        

        document.getElementById("fullname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
      }, function(error) {
        alert("Failed to send email. Please try again.");
        console.log(error);
      });
  });


  window.addEventListener('scroll', () =>{
    const navScroll = document.getElementById('nav-container');
    if(scrollY > 50){
      navScroll.classList.add('blur-nav');
    }
    else{
      navScroll.classList.remove('blur-nav');
    }
  })


  function showMenu(){
    const sideBar = document.getElementById("side-bar")
    sideBar.style.display = "block";
  }

  function hideSideBar(){
     const sideBar = document.getElementById("side-bar")
    sideBar.style.display = "none";
  }

  const links = document.querySelectorAll('.links');
  links.forEach(link =>{
    link.addEventListener('click', () =>{
      document.querySelector('.active')?. classList.remove('active');
      link.classList.add('active');
    })
  })
