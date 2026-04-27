// App — single final poster with tweaks panel.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "lang": "es",
  "paper": "#f6f4ef",
  "olive": "#7a8568",
  "oliveDeep": "#5a6450",
  "wood": "#c8a978",
  "ink": "#2b2a26",
  "showSketch": true,
  "showCotas": true
}/*EDITMODE-END*/;

const App = () => {
  const [tweaks, setTweak] = window.useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--paper', tweaks.paper);
    root.style.setProperty('--ink', tweaks.ink);
    root.style.setProperty('--olive', tweaks.olive);
    root.style.setProperty('--olive-deep', tweaks.oliveDeep);
    root.style.setProperty('--wood', tweaks.wood);
  }, [tweaks.paper, tweaks.ink, tweaks.olive, tweaks.oliveDeep, tweaks.wood]);

  const lang = tweaks.lang;

  return (
    <>
      <div style={{
        minHeight: "100vh",
        background: "#2a2a28",
        padding: "40px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start"
      }}>
        <div style={{
          boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
          background: tweaks.paper
        }}>
          <window.FinalPoster lang={lang} showSketch={tweaks.showSketch} showCotas={tweaks.showCotas} />
        </div>
      </div>

      <window.TweaksPanel title="Tweaks" defaultOpen={false}>
        <window.TweakSection title={lang === "es" ? "Idioma" : "Language"}>
          <window.TweakRadio
            label={lang === "es" ? "Idioma del póster" : "Poster language"}
            value={tweaks.lang}
            onChange={v => setTweak('lang', v)}
            options={[{ value: "es", label: "Español" }, { value: "en", label: "English" }]}
          />
        </window.TweakSection>

        <window.TweakSection title={lang === "es" ? "Paleta" : "Palette"}>
          <window.TweakColor label={lang === "es" ? "Papel (fondo)" : "Paper"} value={tweaks.paper} onChange={v => setTweak('paper', v)} />
          <window.TweakColor label={lang === "es" ? "Tinta" : "Ink"} value={tweaks.ink} onChange={v => setTweak('ink', v)} />
          <window.TweakColor label={lang === "es" ? "Verde oliva" : "Olive"} value={tweaks.olive} onChange={v => setTweak('olive', v)} />
          <window.TweakColor label={lang === "es" ? "Oliva oscuro" : "Deep olive"} value={tweaks.oliveDeep} onChange={v => setTweak('oliveDeep', v)} />
          <window.TweakColor label={lang === "es" ? "Madera" : "Wood"} value={tweaks.wood} onChange={v => setTweak('wood', v)} />
        </window.TweakSection>

        <window.TweakSection title={lang === "es" ? "Visibilidad" : "Visibility"}>
          <window.TweakToggle label={lang === "es" ? "Mostrar boceto" : "Show sketch"} value={tweaks.showSketch} onChange={v => setTweak('showSketch', v)} />
          <window.TweakToggle label={lang === "es" ? "Mostrar etiquetas" : "Show callouts"} value={tweaks.showCotas} onChange={v => setTweak('showCotas', v)} />
        </window.TweakSection>
      </window.TweaksPanel>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
