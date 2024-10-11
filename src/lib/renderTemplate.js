require("@babel/register");

const React = require("react");
const ReactDOMServer = require("react-dom/server");

function renderTemplate(component, props, res, map = false) {
  const yandexMetrikaScript = `
<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(98555160, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/98555160" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->`;

  const reactEl = React.createElement(component, props);
  const html = ReactDOMServer.renderToStaticMarkup(reactEl);
  if (map) {
    const yandexMapScript = `<script defer>
        initMap();

        async function initMap() {
            await ymaps3.ready;
const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker} = ymaps3;

            const map = new YMap(
                document.getElementById('map'),
                {
                    location: {
                        center: [37.508867, 55.882414],
                        zoom: 15
                    }
                },
                          [
            // Add a map scheme layer
            new YMapDefaultSchemeLayer({}),
            // Add a layer of geo objects to display the markers
            new YMapDefaultFeaturesLayer({})
          ]
            );
            const markerElement = document.createElement('img');
            markerElement.className = 'icon-marker';
            markerElement.src = 'https://premiumbeef.ru/image/map_placeholder.png'
            map.addChild(new YMapMarker({coordinates: [37.508867, 55.882414]}, markerElement));            
            map.addChild(new YMapDefaultSchemeLayer());
        }
    </script>`;
    const finalHtml = html
      .replace('<script src="yandexmap"></script>', yandexMapScript)
      .replace('<script src="yandexmetrika"></script>', yandexMetrikaScript);
    res.send(`<!DOCTYPE html>${finalHtml}`);
    //   .replace('<script src="google"></script>', googleAnaliticsScript);
  } else {
    const finalHtml = html
      .replace('<script src="yandexmap"></script>', "")
      .replace('<script src="yandexmetrika"></script>', yandexMetrikaScript);
    res.send(`<!DOCTYPE html>${finalHtml}`);
  }

  res.end();
}

module.exports = renderTemplate;
