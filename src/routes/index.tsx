import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

const drkLogo = { url: "/drk-logo.png" };

function Index() {
  return (
    <div className="min-h-screen font-sans" style={{ background: "#0e0e12", color: "#f0ede8" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0e0e12; }
        .font-display { font-family: 'Cormorant Garamond', serif; }
        .font-body { font-family: 'Jost', sans-serif; }
        .gold { color: #c9a96e; }
        .section-divider { border: none; border-top: 1px solid rgba(201,169,110,0.25); margin: 0; }
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; color: #111 !important; }
        }
      `}</style>

      {/* HERO */}
      <section style={{ position: "relative", height: "100vh", minHeight: 600, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&q=75')",
          backgroundSize: "cover", backgroundPosition: "center",
          filter: "brightness(0.35)"
        }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(14,14,18,0.2) 0%, rgba(14,14,18,0.7) 100%)" }} />

        <div style={{ position: "relative", textAlign: "center", padding: "0 24px", maxWidth: 860 }}>
          <img src={drkLogo.url} alt="DRK Viagens" style={{ height: 56, marginBottom: 40, opacity: 0.95 }} />
          <p className="font-body gold" style={{ letterSpacing: "0.35em", fontSize: 11, textTransform: "uppercase", marginBottom: 20 }}>
            Proposta exclusiva · Geovanna
          </p>
          <h1 className="font-display" style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", fontWeight: 500, lineHeight: 1.08, marginBottom: 24 }}>
            Europa<br />
            <em style={{ fontStyle: "italic", color: "#c9a96e" }}>Memorável</em>
          </h1>
          <p className="font-body" style={{ fontSize: 14, color: "rgba(240,237,232,0.7)", letterSpacing: "0.05em", marginBottom: 40, lineHeight: 1.8 }}>
            Toscana · Roma · Veneza · Milão · St. Moritz · Berna · Zurique<br />
            Londres · Bélgica · Amsterdam · Paris
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap" }}>
            {[
              { label: "Início", value: "11 set." },
              { label: "Fim", value: "11 out." },
              { label: "Duração", value: "30 dias" },
              { label: "Passageiros", value: "2 adultos" },
            ].map(({ label, value }) => (
              <div key={label} style={{ textAlign: "center" }}>
                <p className="font-body" style={{ fontSize: 10, letterSpacing: "0.2em", color: "#c9a96e", textTransform: "uppercase", marginBottom: 4 }}>{label}</p>
                <p className="font-display" style={{ fontSize: 22, fontWeight: 500 }}>{value}</p>
              </div>
            ))}
          </div>
        </div>

        <button className="no-print" style={{
          position: "absolute", top: 24, right: 24,
          background: "rgba(201,169,110,0.15)", border: "1px solid rgba(201,169,110,0.4)",
          color: "#c9a96e", padding: "8px 18px", borderRadius: 4,
          fontFamily: "'Jost', sans-serif", fontSize: 12, letterSpacing: "0.1em",
          cursor: "pointer", textTransform: "uppercase"
        }}>
          Salvar PDF
        </button>
      </section>

      {/* DESTINOS */}
      <section style={{ padding: "80px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <p className="font-body gold" style={{ letterSpacing: "0.3em", fontSize: 10, textTransform: "uppercase", textAlign: "center", marginBottom: 12 }}>Roteiro</p>
        <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500, textAlign: "center", marginBottom: 56 }}>
          11 Destinos · 30 Dias
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16 }}>
          {[
            { name: "Toscana", dates: "11–15 set.", nights: "4 noites", img: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=400&q=70", desc: "Casamento de Larissa & Isac. Colinas, vinhedos e a alma da Itália." },
            { name: "Roma & Vaticano", dates: "15–18 set.", nights: "3 noites", img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&q=70", desc: "Coliseu, Vaticano, Fontana di Trevi e a história milenar da Cidade Eterna." },
            { name: "Veneza", dates: "18–20 set.", nights: "2 noites", img: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=400&q=70", desc: "Gôndolas, pontes históricas e a magia única da cidade sobre a água." },
            { name: "Milão", dates: "20–22 set.", nights: "2 noites", img: "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?w=400&q=70", desc: "Capital da moda e do design. Duomo, Galleria Vittorio Emanuele II e porta de entrada para os Alpes." },
            { name: "St. Moritz", dates: "22–24 set.", nights: "2 noites", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=70", desc: "Chegada pela lendária Linha do Bernina. Aldeia alpina a 1.856m, neve, lagos e céu estrelado." },
            { name: "Berna", dates: "24–25 set.", nights: "1 noite", img: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=400&q=70", desc: "Capital suíça medieval, cidade velha com arcadas medievais e relógio astronômico do séc. XIII." },
            { name: "Zurique", dates: "25–28 set.", nights: "3 noites", img: "https://images.unsplash.com/photo-1543872084-c7bd3822856f?w=400&q=70", desc: "Cidade medieval às margens do Limmat. Bahnhofstrasse, Lago de Zurique e day trip a Jungfraujoch, o 'Topo da Europa'." },
            { name: "Londres", dates: "28 set.–02 out.", nights: "4 noites", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&q=70", desc: "Big Ben, Tower Bridge, West End, lojinhas e a vida urbana britânica." },
            { name: "Bélgica", dates: "02–04 out.", nights: "2 noites", img: "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=400&q=70", desc: "Bruxelas com a Grand Place + day trip para Bruges, a cidade medieval dos canais." },
            { name: "Amsterdam", dates: "04–07 out.", nights: "3 noites", img: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=400&q=70", desc: "Canais, Rijksmuseum, Casa de Anne Frank e o charme único da capital holandesa." },
            { name: "Paris", dates: "07–11 out.", nights: "4 noites", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=70", desc: "Torre Eiffel, Louvre, Champs-Élysées e 2 dias de pura magia na Disneyland. Encerramento." },
          ].map(({ name, dates, nights, img, desc }) => (
            <div key={name} style={{ borderRadius: 8, overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)" }}>
              <div style={{ height: 160, overflow: "hidden" }}>
                <img src={img} alt={name} loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
              </div>
              <div style={{ padding: "18px 16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                  <h3 className="font-display" style={{ fontSize: 18, fontWeight: 500 }}>{name}</h3>
                  <span className="font-body gold" style={{ fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap", marginLeft: 8 }}>{nights}</span>
                </div>
                <p className="font-body" style={{ fontSize: 11, color: "#c9a96e", letterSpacing: "0.1em", marginBottom: 6 }}>{dates}</p>
                <p className="font-body" style={{ fontSize: 12, color: "rgba(240,237,232,0.6)", lineHeight: 1.55 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="section-divider" />

      {/* HOSPEDAGEM */}
      <section style={{ padding: "80px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <p className="font-body gold" style={{ letterSpacing: "0.3em", fontSize: 10, textTransform: "uppercase", textAlign: "center", marginBottom: 12 }}>Hospedagem</p>
        <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500, textAlign: "center", marginBottom: 56 }}>
          Hotéis Selecionados
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
          {[
            { dest: "Roma", hotel: "Best Western Premier Hotel Royal Santina", stars: 4, addr: "Via Marsala 22", checkin: "15 set. · 14:00", checkout: "18 set. · 11:00", noites: "3 noites", extras: "Café da manhã incluso" },
            { dest: "Veneza", hotel: "Hotel Aquarius Venice", stars: 4, addr: "Campo San Giacomo dell'Orio 1624", checkin: "18 set. · 15:00", checkout: "20 set. · 11:00", noites: "2 noites", extras: "Café da manhã incluso" },
            { dest: "Milão", hotel: "Hotel Bernina", stars: 3, addr: "Via Napo Torriani 27", checkin: "20 set. · 14:00", checkout: "22 set. · 11:00", noites: "2 noites", extras: "Café da manhã incluso" },
            { dest: "St. Moritz", hotel: "Hotel Reine Victoria", stars: 4, addr: "Via Rosatsch 18", checkin: "22 set. · 15:00", checkout: "24 set. · 07:00", noites: "2 noites", extras: "Café da manhã incluso" },
            { dest: "Berna", hotel: "Hotel Savoy Bern", stars: 4, addr: "Neuengasse 26", checkin: "24 set. · 15:00", checkout: "25 set. · 11:00", noites: "1 noite", extras: "Café da manhã incluso" },
            { dest: "Zurique", hotel: "Mercure Zürich City", stars: 4, addr: "Vulkanstrasse 108b", checkin: "25 set. · 15:00", checkout: "28 set. · 12:00", noites: "3 noites", extras: "Café da manhã incluso" },
            { dest: "Londres", hotel: "Pullman London St Pancras", stars: 4, addr: "100-110 Euston Road", checkin: "28 set. · 15:00", checkout: "02 out. · 12:00", noites: "4 noites", extras: "Café da manhã incluso" },
            { dest: "Bélgica", hotel: "Hotel Le Plaza Brussels", stars: 4, addr: "Bd Adolphe Max Laan 118-126", checkin: "02 out. · 16:00", checkout: "04 out. · 12:00", noites: "2 noites", extras: "Café da manhã incluso" },
            { dest: "Amsterdam", hotel: "NH City Centre Amsterdam", stars: 4, addr: "Spuistraat 288-292", checkin: "04 out. · 15:00", checkout: "07 out. · 12:00", noites: "3 noites", extras: "Buffet de café da manhã incluso" },
            { dest: "Paris", hotel: "Mercure Paris Centre Tour Eiffel", stars: 4, addr: "20 Rue Jean Rey", checkin: "07 out. · 15:00", checkout: "11 out. · 12:00", noites: "4 noites", extras: "Café da manhã incluso" },
          ].map(({ dest, hotel, stars, addr, checkin, checkout, noites, extras }) => (
            <div key={dest} style={{ borderRadius: 8, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)", padding: "20px 18px" }}>
              <p className="font-body gold" style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 6 }}>{dest}</p>
              <h3 className="font-display" style={{ fontSize: 17, fontWeight: 500, marginBottom: 4, lineHeight: 1.3 }}>{hotel}</h3>
              <p style={{ color: "#c9a96e", fontSize: 12, marginBottom: 6 }}>{"★".repeat(stars)}</p>
              <p className="font-body" style={{ fontSize: 11, color: "rgba(240,237,232,0.4)", marginBottom: 14 }}>{addr}</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 10 }}>
                <div>
                  <p className="font-body" style={{ fontSize: 9, color: "#c9a96e", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 2 }}>Check-in</p>
                  <p className="font-body" style={{ fontSize: 12 }}>{checkin}</p>
                </div>
                <div>
                  <p className="font-body" style={{ fontSize: 9, color: "#c9a96e", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 2 }}>Check-out</p>
                  <p className="font-body" style={{ fontSize: 12 }}>{checkout}</p>
                </div>
              </div>
              <p className="font-body" style={{ fontSize: 11, color: "rgba(240,237,232,0.6)", marginBottom: 4 }}>{noites}</p>
              <p className="font-body" style={{ fontSize: 11, color: "rgba(201,169,110,0.7)" }}>{extras}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="section-divider" />

      {/* TRANSPORTE */}
      <section style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto" }}>
        <p className="font-body gold" style={{ letterSpacing: "0.3em", fontSize: 10, textTransform: "uppercase", textAlign: "center", marginBottom: 12 }}>Mobilidade</p>
        <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500, textAlign: "center", marginBottom: 56 }}>
          Aéreo & Ferroviário
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            { tipo: "✈", label: "Voo Internacional", trecho: "GRU → FCO", data: "Sex., 11 set.", horario: "14:15 → 06:50+1", operadora: "ITA Airways · AZ 675 · direto · 12h35min" },
            { tipo: "🚄", label: "Trem Intercity", trecho: "Pisa → Roma", data: "Ter., 15 set.", horario: "11:11 → 14:33", operadora: "Trenitalia · IC 505 · 3h22min" },
            { tipo: "🚄", label: "Trem Alta Velocidade", trecho: "Roma → Veneza", data: "Sex., 18 set.", horario: "12:58 → 16:42", operadora: "Italo · Nº 8916 · Roma Tiburtina → Venice Mestre · 3h44min" },
            { tipo: "🚄", label: "Trem Alta Velocidade", trecho: "Veneza → Milão", data: "Dom., 20 set.", horario: "13:57 → 16:25", operadora: "Italo · Nº 8984 · Venezia S. Lucia → Milano Centrale · 2h28min" },
            { tipo: "🚄", label: "Trem Regional", trecho: "Milão → Tirano", data: "Ter., 22 set.", horario: "06:20 → 08:52", operadora: "Trenord · Nº 2812 · 2h32min" },
            { tipo: "🏔", label: "Bernina Express · UNESCO", trecho: "Tirano → St. Moritz", data: "Ter., 22 set.", horario: "10:06 → 12:35", operadora: "Ferrovia Rética · Nº 972 · travessia alpina a 2.253m · 2h29min" },
            { tipo: "🚄", label: "Trem", trecho: "St. Moritz → Berna", data: "Qui., 24 set.", horario: "13:47 → 17:58", operadora: "SBB · via Landquart + Zurique · 4h11min" },
            { tipo: "🚄", label: "Trem Direto", trecho: "Berna → Zurique", data: "Sex., 25 set.", horario: "13:31 → 14:41", operadora: "SBB · IC 1 · Bern → Zürich HB · direto · 1h10min" },
            { tipo: "🚌🚠", label: "Day Trip", trecho: "Jungfraujoch — Topo da Europa", data: "Sáb., 26 set.", horario: "12 horas · saída de Zurique", operadora: "Zurique → Interlaken → Grindelwald → Eiger Express + trem cremalheira → Jungfraujoch (3.400m) → Lauterbrunnen → Zurique" },
            { tipo: "✈", label: "Voo", trecho: "Zurique → Londres", data: "Seg., 28 set.", horario: "17:10 → 17:50", operadora: "SWISS · LX 432 · ZRH → London Gatwick (LGW) · direto · 1h40min" },
            { tipo: "✈", label: "Voo", trecho: "Londres → Bruxelas", data: "Sex., 02 out.", horario: "13:55 → 16:10", operadora: "British Airways · BA 386 · LHR → BRU · 1h15min" },
            { tipo: "🚄", label: "Eurostar", trecho: "Bruxelas → Amsterdam", data: "Dom., 04 out.", horario: "13:53 → 16:13", operadora: "Eurostar · Nº 9339 · Bruxelles-Midi → Amsterdam Centraal · direto · 2h20min" },
            { tipo: "🚄", label: "Eurostar", trecho: "Amsterdam → Paris", data: "Qua., 07 out.", horario: "13:10 → 16:45", operadora: "Eurostar · Nº 9352 · Amsterdam Centraal → Paris Gare du Nord · direto · 3h35min" },
            { tipo: "✈", label: "Voo Internacional · Retorno (amiga)", trecho: "Paris → São Paulo", data: "Dom., 11 out.", horario: "13:00 → 19:50", operadora: "LATAM · LA 8133 · CDG → GRU · direto · Boeing 787 · 11h50min" },
          ].map(({ tipo, label, trecho, data, horario, operadora }, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "48px 1fr auto",
              gap: 16, alignItems: "center", padding: "18px 20px", borderRadius: 8,
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)"
            }}>
              <div style={{ fontSize: 22, textAlign: "center" }}>{tipo}</div>
              <div>
                <p className="font-body" style={{ fontSize: 10, color: "#c9a96e", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 4 }}>{label}</p>
                <p className="font-display" style={{ fontSize: 18, fontWeight: 500, marginBottom: 4 }}>{trecho}</p>
                <p className="font-body" style={{ fontSize: 12, color: "rgba(240,237,232,0.5)" }}>{operadora}</p>
              </div>
              <div style={{ textAlign: "right" }}>
                <p className="font-body" style={{ fontSize: 12, color: "#c9a96e", marginBottom: 4 }}>{data}</p>
                <p className="font-body" style={{ fontSize: 13, fontWeight: 500 }}>{horario}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="section-divider" />

      {/* ITINERÁRIO DIA A DIA */}
      <section style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto" }}>
        <p className="font-body gold" style={{ letterSpacing: "0.3em", fontSize: 10, textTransform: "uppercase", textAlign: "center", marginBottom: 12 }}>Dia a Dia</p>
        <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500, textAlign: "center", marginBottom: 56 }}>
          Roteiro Completo
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {[
            {
              dest: "Toscana", color: "#7a5c38",
              days: [
                { date: "11–12 set.", title: "Chegada à Toscana", desc: "Voo noturno GRU→FCO · ITA AZ 675. Chegada em Roma pela manhã e traslado para a Toscana. Check-in e descanso." },
                { date: "13–14 set.", title: "Casamento Larissa & Isac", desc: "Dia livre em Florença: Duomo, Galeria Uffizi, Ponte Vecchio. À noite do dia 14, celebração do casamento." },
                { date: "15 set.", title: "Partida para Roma", desc: "Trem IC 505 Trenitalia · Pisa Centrale 11:11 → Roma Termini 14:33. Check-in e primeiros passos pela cidade." },
              ]
            },
            {
              dest: "Roma & Vaticano", color: "#5c3d2e",
              days: [
                { date: "15 set.", title: "Roma Antiga à Tarde", desc: "Fontana di Trevi, Piazza Navona, Campo de' Fiori. Jantar em Trastevere." },
                { date: "16 set.", title: "Vaticano & Coliseu — Tours Semi-Privativos", desc: "Tour Vaticano semi-privativo: Museus Vaticanos, Capela Sistina, Basílica de São Pedro, guia oficial em português. Tour Arena Roma Imperial semi-privativo: entrada rápida no Coliseu, arquibancadas, Fórum Romano e Palatino." },
                { date: "17 set.", title: "Roma Livre", desc: "Villa Borghese, Castelo de Sant'Angelo, bairro Prati. Jantar de despedida romano." },
                { date: "18 set.", title: "Partida para Veneza", desc: "Italo 8916 · Roma Tiburtina 12:58 → Venice Mestre 16:42 (3h44min). Traslado de barco-táxi ao hotel." },
              ]
            },
            {
              dest: "Veneza", color: "#2e3f5c",
              days: [
                { date: "18 set.", title: "Chegada a Veneza", desc: "Veneza: 118 ilhas, 400 pontes, sem carros. Jantar à beira da Piazza San Marco." },
                { date: "19 set.", title: "Veneza Clássica & Ilhas", desc: "Basílica de São Marcos, Palazzo Ducale, gôndola pelos canais. Tarde: Murano (vidro) e Burano (casinhas coloridas)." },
                { date: "20 set.", title: "Partida para Milão", desc: "Italo 8984 · Venezia S. Lucia 13:57 → Milano Centrale 16:25 (2h28min). Passeio noturno no Navigli." },
              ]
            },
            {
              dest: "Milão", color: "#5c4a2e",
              days: [
                { date: "20 set.", title: "Chegada a Milão — Navigli", desc: "Canais históricos do séc. XV, aperitivo milanês com petiscos gratuitos a partir das 18h." },
                { date: "21 set.", title: "Milão Clássico", desc: "Duomo di Milano (135 torres), Galleria Vittorio Emanuele II, Brera, La Scala." },
                { date: "22 set.", title: "Partida pela Linha do Bernina", desc: "Trenord 2812 · Milano Centrale 06:20 → Tirano 08:52. Visita ao Santuário de Tirano. Bernina Express 972 · 10:06 → St. Moritz 12:35." },
              ]
            },
            {
              dest: "St. Moritz · Bernina Express", color: "#4a5c6a",
              days: [
                { date: "22 set.", title: "Bernina Express — Topo dos Alpes", desc: "Patrimônio Mundial UNESCO. O trem sobe a 2.253m entre geleiras e viadutos em espiral. Chegada a St. Moritz. Jantar no resort alpino mais famoso do mundo." },
                { date: "23 set.", title: "St. Moritz Livre", desc: "Lago St. Moritz, Engadin Walking Trail, lojas de grife. A cidade que inventou o turismo de inverno em 1864." },
                { date: "24 set.", title: "Partida para Berna", desc: "SBB RegioExpress 1346 · St. Moritz 13:47 → Berna 17:58 via Landquart e Zurique (4h11min)." },
              ]
            },
            {
              dest: "Berna", color: "#5c5c3a",
              days: [
                { date: "24 set.", title: "Chegada a Berna", desc: "Capital federal da Suíça — Patrimônio UNESCO. Cidade velha com 6km de arcadas medievais do séc. XIII. Check-in e jantar na Altstadt." },
                { date: "25 set.", title: "Berna & Partida para Zurique", desc: "Manhã: Zytglogge (Torre do Relógio de 1218), Bärengraben (fosso dos ursos). Trem SBB IC 1 · Berna 13:31 → Zürich HB 14:41 (direto, 1h10min). Check-in em Zurique." },
              ]
            },
            {
              dest: "Zurique", color: "#4a4a6a",
              days: [
                { date: "25 set.", title: "Zurique — Chegada & Tarde", desc: "Altstadt com o Grossmünster do séc. XII. Bahnhofstrasse: 1,4km de joalherias e relógios exclusivos. Lago de Zurique com vista dos Alpes." },
                { date: "26 set.", title: "Day Trip — Jungfraujoch, o Topo da Europa", desc: "Passeio de 12h saindo de Zurique: ônibus até Interlaken e Grindelwald, teleférico Eiger Express + trem cremalheira até Jungfraujoch (3.400m, a estação ferroviária mais alta da Europa). Patrimônio Mundial UNESCO — vistas dos picos Eiger, Mönch e Jungfrau, Mirante Sphinx, Palácio de Gelo e Glaciar Aletsch. ~2h30 livres no topo. Retorno via Lauterbrunnen." },
                { date: "27 set.", title: "Zurique — Dia Livre", desc: "Museu Nacional Suíço (castelo neogótico), Lindenhügel (vista panorâmica), bairro de Wiedikon. Última noite na Suíça." },
                { date: "28 set.", title: "Partida para Londres", desc: "Voo SWISS LX 432 · Zurique 17:10 → London Gatwick 17:50 (direto, 1h40min). Chegada a Londres e check-in no Pullman London St Pancras." },
              ]
            },
            {
              dest: "Londres", color: "#3a5c3a",
              days: [
                { date: "28 set.", title: "Chegada a Londres", desc: "Desembarque em Gatwick às 17:50 e traslado ao hotel. Noite livre: South Bank e London Eye iluminado às margens do Tâmisa." },
                { date: "29 set.", title: "Londres Clássico", desc: "Big Ben, Casas do Parlamento, Westminster Abbey. Palácio de Buckingham com Troca da Guarda. Tower Bridge e Tower of London com as Joias da Coroa." },
                { date: "30 set.", title: "Compras & Cultura", desc: "Oxford Street, Carnaby Street, Covent Garden. British Museum ou National Gallery (museus gratuitos)." },
                { date: "01 out.", title: "Notting Hill", desc: "Casas pastéis, Portobello Road Market (maior mercado de antiguidades do mundo). Thames Walk ao entardecer. Jantar de despedida britânico." },
                { date: "02 out.", title: "Partida para Bélgica", desc: "Voo British Airways BA 386 · Heathrow 13:55 → Bruxelas 16:10 (1h15min). Check-in em Bruxelas, Grand Place à noite — uma das praças mais belas da Europa." },
              ]
            },
            {
              dest: "Bélgica", color: "#5c3a5c",
              days: [
                { date: "02 out.", title: "Chegada a Bruxelas", desc: "Grand Place: praça gótica do séc. XVII, Patrimônio UNESCO. Manneken Pis. Cervejas belgas e chocolate artesanal nas galerias cobertas." },
                { date: "03 out.", title: "Day Trip — Bruges", desc: "1h de trem. Bruges é a cidade medieval mais preservada da Europa: canais centenários, Igreja de Nossa Senhora (Michelangelo original), Mercado de Bruges, Minnewater (Lago do Amor). Jantar em Bruxelas." },
                { date: "04 out.", title: "Partida para Amsterdam", desc: "Eurostar 9339 · Bruxelles-Midi 13:53 → Amsterdam Centraal 16:13 (direto, 2h20min). Check-in e primeira exploração dos canais holandeses." },
              ]
            },
            {
              dest: "Amsterdam", color: "#2e5c4a",
              days: [
                { date: "04 out.", title: "Chegada a Amsterdam", desc: "Amsterdam tem 165 canais e 1.281 pontes. Passeio de barco ao entardecer e jantar no bairro Jordaan." },
                { date: "05 out.", title: "Museus & Canais", desc: "Rijksmuseum: acervo de Rembrandt e Vermeer. Casa de Anne Frank: o diário mais famoso do mundo. Bicicletada pelos canais." },
                { date: "06 out.", title: "Amsterdam Livre", desc: "Mercado Albert Cuyp (maior mercado ao ar livre da Holanda). Bairro De Pijp com cafés e galerias. Bloemenmarkt — mercado flutuante de flores." },
                { date: "07 out.", title: "Partida para Paris", desc: "Eurostar 9352 · Amsterdam Centraal 13:10 → Paris Gare du Nord 16:45 (direto, 3h35min). Check-in em Paris e Torre Eiffel iluminada à noite." },
              ]
            },
            {
              dest: "Paris", color: "#4a3a5c",
              days: [
                { date: "07 out.", title: "Chegada a Paris", desc: "Check-in no Mercure Paris Centre Tour Eiffel, a poucos passos da Torre. Primeira noite parisiense com vista para o monumento mais icônico do mundo." },
                { date: "08 out.", title: "Disneyland Paris — Dia 1", desc: "Disneyland Park: Castelo da Bela Adormecida, Fantasyland, Adventureland (Pirates of the Caribbean), Big Thunder Mountain. Fantasmic ao anoitecer." },
                { date: "09 out.", title: "Disneyland Paris — Dia 2", desc: "Walt Disney Studios Park: Avengers Campus, Star Wars: Rise of the Resistance, shows noturnos com fogos e projeção mapeada." },
                { date: "10 out.", title: "Paris Clássico & Compras", desc: "Tour guiado 'Primeira Vez em Paris' (4h): Torre Eiffel, Trocadéro, Arco do Triunfo, Champs-Élysées, Pirâmide do Louvre, Jardim das Tulherias e Palais Royal. Louvre (Mona Lisa, Vênus de Milo), Montmartre e Sacré-Cœur à tarde." },
                { date: "11 out.", title: "Encerramento — Paris", desc: "Manhã livre na cidade mais visitada do mundo. Último café parisiense, últimas fotos. Voo de retorno LATAM LA 8133 · CDG 13:00 → GRU 19:50 (direto, 11h50min). Fim de uma jornada inesquecível." },
              ]
            },
          ].map(({ dest, color, days }) => (
            <div key={dest} style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                <div style={{ width: 4, height: 32, background: color, borderRadius: 2 }} />
                <h3 className="font-display" style={{ fontSize: 24, fontWeight: 500 }}>{dest}</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, paddingLeft: 20, borderLeft: `1px solid ${color}40` }}>
                {days.map(({ date, title, desc }) => (
                  <div key={date + title} style={{ padding: "14px 18px", background: "rgba(255,255,255,0.03)", borderRadius: 6, border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div style={{ display: "flex", gap: 16, alignItems: "baseline", flexWrap: "wrap", marginBottom: 4 }}>
                      <span className="font-body" style={{ fontSize: 10, color: "#c9a96e", letterSpacing: "0.15em", textTransform: "uppercase", whiteSpace: "nowrap" }}>{date}</span>
                      <span className="font-display" style={{ fontSize: 16, fontWeight: 500 }}>{title}</span>
                    </div>
                    <p className="font-body" style={{ fontSize: 13, color: "rgba(240,237,232,0.6)", lineHeight: 1.6 }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="section-divider" />

      {/* INGRESSOS */}
      <section style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto" }}>
        <p className="font-body gold" style={{ letterSpacing: "0.3em", fontSize: 10, textTransform: "uppercase", textAlign: "center", marginBottom: 12 }}>Experiências</p>
        <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500, textAlign: "center", marginBottom: 56 }}>
          Tours, Ingressos & Serviços Inclusos
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            { icon: "🏛", label: "Roma", title: "Tour Coliseu Arena — Semi-Privativo", desc: "Arena do Coliseu, arquibancadas, Fórum Romano e Palatino · guia oficial em português · 16 set." },
            { icon: "⛪", label: "Roma", title: "Tour Vaticano — Semi-Privativo", desc: "Museus Vaticanos, Capela Sistina, Basílica de São Pedro · guia oficial em português · 16 set." },
            { icon: "🏰", label: "Disneyland Paris", title: "Ingresso 2 Dias · 2 Parques + Guia Especializada", desc: "Disneyland Park + Walt Disney Studios Park · 08–09 out. · 2 adultos · acompanhamento com guia especializada (roteiro de atrações, otimização de filas, logística do dia)" },
            { icon: "🗼", label: "Paris", title: "Tour Primeira Vez em Paris", desc: "Torre Eiffel, Trocadéro, Arco do Triunfo, Champs-Élysées, Pirâmides do Louvre, Tulherias e Palais Royal · guiado · 4h · 10 out." },
            { icon: "📶", label: "Conectividade", title: "Chip Internacional Global", desc: "12GB de internet · válido por 30 dias · cobertura Europa (53 países) + 70 países no total" },
            { icon: "🛡", label: "Seguro Viagem", title: "Seguro Viagem Internacional · DMH USD 150.000", desc: "Despesas médicas, hospitalares, odontológicas e farmacêuticas · cobre Covid-19, doenças pré-existentes e esportes amadores · perda/atraso/dano de bagagem · cancelamento e atraso de voo · traslado médico e regresso sanitário · assistência jurídica · válido pelos 30 dias da viagem" },
          ].map(({ icon, label, title, desc }) => (
            <div key={title} style={{
              display: "grid", gridTemplateColumns: "64px 1fr auto", gap: 20, alignItems: "center",
              padding: "24px", borderRadius: 10,
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)"
            }}>
              <div style={{ fontSize: 36, textAlign: "center" }}>{icon}</div>
              <div>
                <p className="font-body" style={{ fontSize: 10, color: "#c9a96e", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 4 }}>{label}</p>
                <p className="font-display" style={{ fontSize: 20, fontWeight: 500, marginBottom: 4 }}>{title}</p>
                <p className="font-body" style={{ fontSize: 12, color: "rgba(240,237,232,0.5)" }}>{desc}</p>
              </div>
              <div style={{ textAlign: "right" }}>
                <p className="font-body" style={{ fontSize: 10, color: "#c9a96e", letterSpacing: "0.1em", whiteSpace: "nowrap" }}>incluso no pacote</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="section-divider" />

      {/* INVESTIMENTO */}
      <section style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto" }}>
        <p className="font-body gold" style={{ letterSpacing: "0.3em", fontSize: 10, textTransform: "uppercase", textAlign: "center", marginBottom: 12 }}>Investimento</p>
        <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500, textAlign: "center", marginBottom: 16 }}>
          Valor do Pacote
        </h2>
        <p className="font-body" style={{ textAlign: "center", fontSize: 13, color: "rgba(240,237,232,0.5)", marginBottom: 56 }}>
          Inclui voos, hospedagem, ingressos e seguro viagem · por pessoa
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginBottom: 40 }}>
          <div style={{ padding: "36px 32px", borderRadius: 12, border: "1px solid rgba(201,169,110,0.35)", background: "rgba(201,169,110,0.06)", textAlign: "center" }}>
            <p className="font-body" style={{ fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "#c9a96e", marginBottom: 16 }}>Cartão de crédito</p>
            <p className="font-body" style={{ fontSize: 13, color: "rgba(240,237,232,0.5)", marginBottom: 8 }}>até 12x sem juros</p>
            <p className="font-body" style={{ fontSize: 38, fontWeight: 600, color: "#f0ede8", lineHeight: 1.1, marginBottom: 4, letterSpacing: "-0.02em" }}>
              12x R$ 5.607,19
            </p>
            <p className="font-body" style={{ fontSize: 12, color: "rgba(240,237,232,0.4)" }}>= R$ 67.286,29 por pessoa</p>
          </div>
          <div style={{ padding: "36px 32px", borderRadius: 12, border: "1px solid rgba(201,169,110,0.6)", background: "rgba(201,169,110,0.10)", textAlign: "center", position: "relative" }}>
            <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "#c9a96e", color: "#0e0e12", fontSize: 10, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", padding: "4px 14px", borderRadius: 20, fontFamily: "'Jost', sans-serif", whiteSpace: "nowrap" }}>Melhor opção</div>
            <p className="font-body" style={{ fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "#c9a96e", marginBottom: 16 }}>Pix à vista</p>
            <p className="font-body" style={{ fontSize: 13, color: "rgba(240,237,232,0.5)", marginBottom: 8 }}>desconto exclusivo</p>
            <p className="font-body" style={{ fontSize: 38, fontWeight: 600, color: "#c9a96e", lineHeight: 1.1, marginBottom: 4, letterSpacing: "-0.02em" }}>
              R$ 59.309,20
            </p>
            <p className="font-body" style={{ fontSize: 12, color: "rgba(240,237,232,0.4)" }}>por pessoa · economia de R$ 7.977,09</p>
          </div>
        </div>
        <p className="font-body" style={{ textAlign: "center", fontSize: 11, color: "rgba(240,237,232,0.35)", lineHeight: 1.7 }}>
          Valores por pessoa · Sujeitos a disponibilidade até a emissão
        </p>
      </section>

      <hr className="section-divider" />

      {/* FOOTER */}
      <footer style={{ padding: "60px 24px 40px", textAlign: "center" }}>
        <img src={drkLogo.url} alt="DRK Viagens" style={{ height: 40, marginBottom: 20, opacity: 0.7 }} />
        <p className="font-body" style={{ fontSize: 12, color: "rgba(240,237,232,0.4)", letterSpacing: "0.1em" }}>
          Proposta elaborada exclusivamente para Geovanna · DRK Viagens · 2026
        </p>
      </footer>
    </div>
  );
}
