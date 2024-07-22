import { useEffect } from 'react';

const Scroller = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll('.scroller-text');

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute('data-animated', 'true');

        const scrollerInner = scroller.querySelector('.scroller__inner');
        if (scrollerInner) {
          const scrollerContent = Array.from(scrollerInner.children);

          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            if (duplicatedItem instanceof Element) {
              duplicatedItem.setAttribute('aria-hidden', 'true');
              scrollerInner.appendChild(duplicatedItem);
            }
          });
        }
      });
    }
  }, []);

  return (
    <div
      className="scroller-text overflow-hidden max-w-96 w-full h-80 flex flex-col"
      data-speed="fast"
    >
      <div className="max-w-96 text-xl text-center font-semibold tag-list scroller__inner">
        <div className="bg-white/10 max-w-96 w-full h-4 mb-[52px]"></div>
        <p className="select-none text-sm lg:text-base">
          Una voz dijo: «¡Grita!».<br />
          Y yo pregunté: «¿Qué debo gritar?».<br />
          «Grita que los seres humanos son como la hierba.<br />
          Su belleza se desvanece tan rápido como las flores en un campo.<br />
          La hierba se seca y las flores se marchitan bajo el aliento del Señor.<br />
          Y así sucede también con los seres humanos.<br />
          La hierba se seca y las flores se marchitan, pero la palabra de nuestro Dios
          permanece para siempre».<br />
          ¡Oh Sion, mensajera de buenas noticias, grita desde las cimas de los montes!
          Grítalo más fuerte, oh Jerusalén.<br />
          Grita y no tengas miedo.<br />
          Diles a las ciudades de Judá: «¡Aquí viene su Dios!».
        </p>
        <div className="bg-white/10 max-w-96 w-full h-4 mt-[52px]"></div>
      </div>
    </div>
  );
};

export default Scroller;
