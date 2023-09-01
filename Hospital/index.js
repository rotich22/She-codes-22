  let slideIndex = 0;
        showSlide(slideIndex);

    function changeSlide(n) 
    {
        showSlide(slideIndex += n);
    }

    function showSlide(n) 
    {
        const slides = document.getElementsByClassName("slide");
       if (n >= slides.length) 
       {
            slideIndex = 0;
        }
        if (n < 0) 
        {
            slideIndex = slides.length - 1;
        }
        for (let i = 0; i < slides.length; i++) 
        {
            slides[i].style.display = "none";
        }
            slides[slideIndex].style.display = "block";
    }
    function register()
    {
        let name=prompt("Enter your name");
        let email=prompt("Enter your email address");
        
        if(name.length > 0 && email.length>0)
        {
          alert(
            "Thank you, " + name + " We will be in touch via email soon🙂" 
          );
        }
    }
    let registerButton=document.querySelector(".register-button");
    registerButton.addEventListener("click",register);