// Final poster — based on the approved sketch layout, with real imagery.
// 1190 × 1684 (A1 vertical scaled).
// Heights tuned so total content fits inside the page with safe bottom margin.

const FinalPoster = ({ lang = "es", showSketch = true, showCotas = true }) => {
  const t = window.COPY[lang];

  const mono = {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase",
    color: "#6c6a64"
  };
  const tag = { ...mono, marginBottom: 10, color: "#56544f" };

  const swatches = [
    { code: "M-01", name: t.m1_name, desc: t.m1_desc, swatch: "linear-gradient(135deg, oklch(0.78 0.07 70), oklch(0.66 0.085 65))" },
    { code: "M-02", name: t.m2_name, desc: t.m2_desc, swatch: "var(--olive)" },
    { code: "M-03", name: t.m3_name, desc: t.m3_desc, swatch: "var(--beige)" },
    { code: "M-04", name: t.m4_name, desc: t.m4_desc, swatch: "linear-gradient(180deg, #fff 50%, #f0eee9 50%)" },
    { code: "M-05", name: t.m5_name, desc: t.m5_desc, swatch: "oklch(0.30 0.005 80)" },
    { code: "M-06", name: lang==="es"?"Iluminación":"Lighting", desc: lang==="es"?"LED COB 3000K":"LED 3000K", swatch: "linear-gradient(180deg, oklch(0.96 0.04 90), oklch(0.84 0.06 90))" }
  ];

  return (
    <div style={{
      width: 1190, height: 1684, background: "var(--paper)", color: "var(--ink)",
      padding: "44px 60px 44px", boxSizing: "border-box",
      fontFamily: "'Manrope', sans-serif",
      position: "relative", overflow: "hidden",
    }} data-screen-label="Final · Póster">
      {/* Top hairline */}
      <div style={{ height: 1, background: "var(--ink)", marginBottom: 12 }} />

      {/* HEADER — h≈170 */}
      <header style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "end", gap: 24, marginBottom: 18 }}>
        <div>
          <div style={mono}>{t.eyebrow} · {t.address}</div>
          <h1 style={{
            fontFamily: "'Manrope', sans-serif", fontWeight: 200,
            fontSize: 100, lineHeight: 0.92, margin: "12px 0 0",
            letterSpacing: "-0.045em"
          }}>
            {lang === "es" ? "Reforma" : "Kitchen"}<br/>
            <span style={{ fontStyle: "italic", fontFamily: "'Fraunces', serif", fontWeight: 300, color: "var(--olive-deep)" }}>
              {lang === "es" ? "de Cocina" : "Renovation"}
            </span>
          </h1>
        </div>
        <div style={{ ...mono, lineHeight: 1.85, textAlign: "right", color: "var(--ink)" }}>
          <div>A1.0 / 01</div>
          <div>{t.date}</div>
          <div>Código postal · {t.ref}</div>
          <div>{t.arch.toUpperCase()}</div>
        </div>
      </header>

      <div style={{ height: 1, background: "var(--ink)", marginBottom: 22 }} />

      {/* HERO grid — render + sketch + intro text · h=380 */}
      <section style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 22, marginBottom: 24 }}>
        <div style={{ position: "relative" }}>
          <img src="img/render-1.png" style={{ width: "100%", height: 380, objectFit: "cover", display: "block", filter: "saturate(1.05)" }} />
          {showCotas && (
            <div style={{
              position: "absolute", left: 12, bottom: 10,
              fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase",
              color: "white", textShadow: "0 1px 2px rgba(0,0,0,0.7)"
            }}>01 · {lang === "es" ? "Vista propuesta" : "Proposal view"}</div>
          )}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, height: 380 }}>
          {showSketch && (
            <img src="img/sketch.png" style={{ width: "100%", height: 170, objectFit: "cover", display: "block" }} />
          )}
          <div style={{ flex: 1, minHeight: 0, overflow: "hidden" }}>
            <div style={tag}>§01 · {t.s_project}</div>
            <p style={{ fontSize: 12, lineHeight: 1.5, textAlign: "justify", margin: 0, hyphens: "auto" }}>
              {t.project_p1}
            </p>
          </div>
        </div>
      </section>

      {/* DATA STRIP — h≈90 */}
      <section style={{
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
        borderTop: "1px solid var(--ink)", borderBottom: "1px solid var(--ink)",
        padding: "18px 0", marginBottom: 24
      }}>
        {[
          [t.typeLabel, t.typeValue],
          [t.surfaceLabel, t.surfaceValue],
          [t.roomsLabel, t.roomsValue],
          [lang === "es" ? "Año" : "Year", "2026"],
        ].map(([k, v], i) => (
          <div key={i} style={{ borderLeft: i ? "1px solid var(--rule)" : "none", paddingLeft: i ? 18 : 0 }}>
            <div style={mono}>{k}</div>
            <div style={{ fontSize: 22, fontWeight: 300, marginTop: 4, letterSpacing: "-0.02em" }}>{v}</div>
          </div>
        ))}
      </section>

      {/* PLAN + MATERIALS — h=310 */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22, marginBottom: 24 }}>
        <div>
          <div style={tag}>§02 · {t.s_plan}</div>
          <div style={{ background: "white", border: "1px solid var(--rule)", padding: 8, height: 250, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src="img/plan.png" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", display: "block" }} />
          </div>
          <div style={{ ...mono, display: "flex", justifyContent: "space-between", marginTop: 6 }}>
            <span>{t.scale} 1:50</span>
            <span>2.50 × 1.46 m</span>
            <span>↑ {t.north}</span>
          </div>
        </div>
        <div>
          <div style={tag}>§03 · {t.s_materials}</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
            {swatches.map(m => (
              <div key={m.code} style={{ border: "1px solid var(--rule)", background: "white" }}>
                <div style={{ height: 64, background: m.swatch, borderBottom: "1px solid var(--rule)" }} />
                <div style={{ padding: "6px 8px" }}>
                  <div style={{ ...mono, fontSize: 8.5 }}>{m.code}</div>
                  <div style={{ fontSize: 11, fontWeight: 500, marginTop: 1 }}>{m.name}</div>
                  <div style={{ whiteSpace: 'pre-line', fontSize: 9, color: "var(--ink-soft)", marginTop: 1, lineHeight: 1.3 }}>{m.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIEWS — h≈170 */}
      <section style={{ marginBottom: 22 }}>
        <div style={tag}>§04 · {t.s_views}</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
          {[1,2,3,4].map(i => (
            <div key={i}>
              <div style={{ background: "white", border: "1px solid var(--rule)", padding: 6, aspectRatio: "1.25 / 1", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src={`img/view-${i}.png`} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", display: "block" }} />
              </div>
              <div style={{ ...mono, marginTop: 5, display: "flex", justifyContent: "space-between" }}>
                <span>{t.view} 1.{i}</span><span>0{i}/04</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECOND RENDER + TIMELINE — h≈190 */}
      <section style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 22, marginBottom: 0 }}>
        <div>
          <div style={tag}>§05 · {t.s_renders}</div>
          <img src="img/render-2.png" style={{ width: "100%", height: 190, objectFit: "cover", display: "block", border: "1px solid var(--ink)", borderBottom: "none" }} />
        </div>
        <div>
          <div style={tag}>{lang === "es" ? "Cronograma" : "Timeline"}</div>
          {[t.t_brief, t.t_design, t.t_materials, t.t_render, t.t_delivery].map((s, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "26px 1fr 44px", gap: 8,
              padding: "5px 0",
              borderBottom: i < 4 ? "1px solid var(--rule)" : "none",
              alignItems: "center"
            }}>
              <div style={{ ...mono, fontSize: 9 }}>0{i+1}</div>
              <div style={{ fontSize: 12 }}>{s}</div>
              {/* <div style={{ ...mono, fontSize: 9, color: "var(--olive-deep)", textAlign: "right" }}>{["JAN","FEB","MAR","APR","APR"][i]}</div> */}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
        <div style={{ height: 1, background: "var(--ink)", marginBottom: 10 }} />
        <footer style={{
          display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr",
          ...mono, color: "var(--ink)"
        }}>
          <div>{t.arch}</div>
          <div>{t.scale} 1:50</div>
          <div>{t.address}</div>
          <div style={{ textAlign: "right" }}>A1.0 — 01 / 01</div>
        </footer>
      </div>
  );
};

window.FinalPoster = FinalPoster;
