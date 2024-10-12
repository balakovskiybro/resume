export default function AboutSection(){
    <section class="about">
         <div class="container">
            <div class="about__top grid">
               <div class="about__col">
                  <ul class="about__list">
                     <li class="about__item">
                        <div class="completed">
                           <div class="completed__value">20,000</div>
                           <div class="completed__descr">completed projects</div>
                        </div>
                     </li>
                     <li class="about__item">
                        <div class="completed">
                           <div class="completed__value">10,000</div>
                           <div class="completed__descr">prototypes</div>
                        </div>
                     </li>
                     <li class="about__item">
                        <div class="completed">
                           <div class="completed__value">347</div>
                           <div class="completed__descr">completed projects</div>
                        </div>
                     </li>
                  </ul>
               </div>
               <div class="about__col">
                  <h2 class="about__title">
                     Amet, mattis dapibus malesuada arcu dapibus nec efficitur et dictum. In sit odio. Tempus leo,
                     dictum.
                  </h2>
                  <div class="about__text">
                     <p class="about__descr">Amet, mattis dapibus malesuada arcu dapibus nec efficitur et dictum. In sit
                        odio. Tempus leo, dictum. Sit mattis mattis lorem cursus velit sit sed et vitae quam, sed nulla
                        dapibus venenatis odio.</p>
                     <p class="about__descr">Venenatis sapien aenean adipiscing lacinia nec lacinia lacinia et quam,
                        ultricies. Dictum. Ipsum sodales sit id nec sed sodales mattis mollis quis, pellentesque
                        habitasse ex.</p>
                  </div>
               </div>
            </div>
            <div class="about__video">
               <video src="video/video1.mp4" preload="metadata" muted poster="img/Rectangle 4.jpg"></video>
               <button class="about__play" aria-label="Play video">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                     <circle cx="50" cy="50" r="50" />
                     <path d="M63 50L44.25 62.9904L44.25 37.0096L63 50Z" fill="#1D1D1F" />
                  </svg>
               </button>
            </div>
         </div>
      </section>
}