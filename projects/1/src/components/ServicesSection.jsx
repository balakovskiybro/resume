import Reactangle7 from './img/Reactangle7'

export default function ServicesSection(){
    <section class="services">
         <img src={Reactangle7} alt="" class="services__image" aria-hidden="true"/>
         <div class="container">
            <ul class="services__list">
               <li class="services-item grid">
                  <div class="services-item__col">
                     <h3 class="services-item__title">Branding</h3>
                  </div>
                  <div class="services-item__col">
                     <p class="services-item__descr">
                        Quam, tortor, interdum consectetur eleifend integer et. Accumsan vulputate efficitur in amet,
                        vestibulum ornare morbi accumsan leo, est. Consectetur ultricies.
                     </p>
                  </div>
               </li>
               <li class="services-item grid">
                  <div class="services-item__col">
                     <h3 class="services-item__title">Web-apps</h3>
                  </div>
                  <div class="services-item__col">
                     <p class="services-item__descr">
                        Malesuada efficitur mattis id mattis aenean interdum lectus quam, dapibus nec augue vulputate
                        leo,
                        ornare elit. Pulvinar sed quam, arcu pulvinar nisi ipsum quis, sodales molestie ex.
                     </p>
                  </div>
               </li>
               <li class="services-item grid">
                  <div class="services-item__col">
                     <h3 class="services-item__title">Design</h3>
                  </div>
                  <div class="services-item__col">
                     <p class="services-item__descr">
                        Cras amet, sed sapien orci, leo, sit ornare risus tortor, ex. Mauris non orci, sed elit. Cursus
                        ex.
                        Aenean ipsum dolor augue tempus et molestie ipsum adipiscing leo, sit interdum venenatis odio.
                     </p>
                  </div>
               </li>
               <li class="services-item grid">
                  <div class="services-item__col">
                     <h3 class="services-item__title">Strategy</h3>
                  </div>
                  <div class="services-item__col">
                     <p class="services-item__descr">
                        Quam, tortor, interdum consectetur eleifend integer et. Accumsan vulputate efficitur in amet,
                        vestibulum ornare morbi accumsan leo, est. Consectetur ultricies.
                     </p>
                  </div>
               </li>
            </ul>
         </div>
      </section>
}