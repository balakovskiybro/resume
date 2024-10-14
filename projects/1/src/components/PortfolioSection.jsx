import Rectangle5 from "./img/Rectangle 5.jpg"
import Rectangle6 from "./img/Rectangle 6.jpg"

export default function PortfolioSection(){
    <section class="portfolio">
         <div class="container">
            <ul class="portfolio__list">
               <li class="portfolio-item grid">
                  <div class="portfolio-item__col">
                     <h3 class="portfolio-item__title">Et odio</h3>
                     <p class="portfolio-item__descr">
                        Mauris eget nec nulla dolor ex. Sodales luctus pellentesque cras ornare lorem luctus lectus sed
                        consectetur quam, est. Libero, odi
                     </p>
                     <button class="btn btn--dark">Button</button>
                  </div>
                  <div class="portfolio-item__col">
                     <img src={Rectangle5} alt="Portfolio Et odio" class="portfolio-item__image"/>
                  </div>
               </li>
               <li class="portfolio-item portfolio-item--reverse grid">
                  <div class="portfolio-item__col">
                     <h3 class="portfolio-item__title">Integer dapibus dictum</h3>
                     <p class="portfolio-item__descr">
                        it pulvinar tempus amet dolor dui vulputate tortor, luctus lorem in nunc eleifend ipsum justo et
                        venenatis dictumst.
                     </p>
                     <button class="btn btn--dark">Button</button>
                  </div>
                  <div class="portfolio-item__col">
                     <img src={Rectangle6} alt="Portfolio Et odio" class="portfolio-item__image"/>
                  </div>
               </li>
            </ul>
         </div>
      </section>
}