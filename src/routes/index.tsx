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
        .gold-border { border-color: #c9a96e; }
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
          backgroundImage: "url('https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1600&q=85')",
          backgroundSize: "cover", backgroundPosition: "center",
          filter: "brightness(0.35)"
        }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(14,14,18,0.2) 0%, rgba(14,14,18,0.7) 100%)" }} />

        <div style={{ position: "relative", textAlign: "center", padding: "0 24px", maxWidth: 800 }}>
          <img src={drkLogo.url} alt="DRK Viagens" style={{ height: 56, marginBottom: 40, opacity: 0.95 }} />

          <p className="font-body gold" style={{ letterSpacing: "0.35em", fontSize: 11, textTransform: "uppercase", marginBottom: 20 }}>
            Proposta exclusiva · Geovanna
          </p>

          <h1 className="font-display" style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", fontWeight: 500, lineHeight: 1.08, marginBottom: 24 }}>
            Europa<br />
            <em style={{ fontStyle: "italic", color: "#c9a96e" }}>Memorável</em>
          </h1>

          <p className="font-body" style={{ fontSize: 15, color: "rgba(240,237,232,0.7)", letterSpacing: "0.06em", marginBottom: 40 }}>
            Toscana · Roma · Veneza · Milão · St. Moritz · Berna · Zurique · Paris · Londres
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap" }}>
            {[
              { label: "Início", value: "11 set." },
              { label: "Fim", value: "04 out." },
              { label: "Duração", value: "23 dias" },
              { label: "Passageiros", value: "2 adultos" },
            ].map(({ label, value }) => (
              <div key={label} style={{ textAlign: "center" }}>
                <p className="font-body" style={{ fontSize: 10, letterSpacing: "0.2em", color: "#c9a96e", textTransform: "uppercase", marginBottom: 4 }}>{label}</p>
                <p className="font-display" style={{ fontSize: 22, fontWeight: 500 }}>{value}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          className="no-print"
          onClick={() => window.print()}
          style={{
            position: "absolute", top: 24, right: 24,
            background: "rgba(201,169,110,0.15)", border: "1px solid rgba(201,169,110,0.4)",
            color: "#c9a96e", padding: "8px 18px", borderRadius: 4,
            fontFamily: "'Jost', sans-serif", fontSize: 12, letterSpacing: "0.1em",
            cursor: "pointer", textTransform: "uppercase"
          }}
        >
          Salvar PDF
        </button>
      </section>

      {/* DESTINOS */}
      <section style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <p className="font-body gold" style={{ letterSpacing: "0.3em", fontSize: 10, textTransform: "uppercase", textAlign: "center", marginBottom: 12 }}>Roteiro</p>
        <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500, textAlign: "center", marginBottom: 56 }}>
          9 Destinos · 23 Dias
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
          {[
            {
              name: "Toscana", dates: "11–15 set.", nights: "4 noites",
              img: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=600&q=80",
              desc: "Casamento de Larissa & Isac. Colinas, vinhedos e a alma da Itália."
            },
            {
              name: "Roma & Vaticano", dates: "15–18 set.", nights: "3 noites",
              img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&q=80",
              desc: "Coliseu, Vaticano, Fontana di Trevi e a história milenar da Cidade Eterna."
            },
            {
              name: "Veneza", dates: "18–20 set.", nights: "2 noites",
              img: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=600&q=80",
              desc: "Gôndolas, pontes históricas e a magia única da cidade sobre a água."
            },
            {
              name: "Milão", dates: "20–22 set.", nights: "2 noites",
              img: "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?w=600&q=80",
              desc: "Capital da moda e do design. Duomo, Galleria Vittorio Emanuele II e porta de entrada para os Alpes."
            },
            {
              name: "St. Moritz", dates: "22–24 set.", nights: "2 noites",
              img: "https://images.unsplash.com/photo-1551524163-f1e6b80e2b31?w=600&q=80",
              desc: "Chegada pela lendária Linha do Bernina. Aldeia alpina a 1.856m, neve, lagos e céu estrelado."
            },
            {
              name: "Berna", dates: "24–25 set.", nights: "1 noite",
              img: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=600&q=80",
              desc: "Capital suíça medieval, cidade velha com arcadas medievais, relógio astronômico e base para day trips."
            },
            {
              name: "Zurique", dates: "25–27 set.", nights: "2 noites",
              img: "https://images.unsplash.com/photo-1620976038935-fac0720f98f6?w=600&q=80",
              desc: "Cidade medieval às margens do Limmat. Bahnhofstrasse, Lago de Zurique e elegância suíça antes de Paris."
            },
            {
              name: "Paris", dates: "27 set.–01 out.", nights: "4 noites",
              img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80",
              desc: "Torre Eiffel, Louvre, Champs-Élysées e 2 dias de pura magia na Disneyland."
            },
            {
              name: "Londres", dates: "01–04 out.", nights: "3 noites",
              img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80",
              desc: "Big Ben, Tower Bridge, West End, lojinhas e a vida urbana britânica. Encerramento da viagem."
            },
          ].map(({ name, dates, nights, img, desc }) => (
            <div key={name} style={{ borderRadius: 8, overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)" }}>
              <div style={{ height: 180, backgroundImage: `url('${img}')`, backgroundSize: "cover", backgroundPosition: "center" }} />
              <div style={{ padding: "20px 18px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <h3 className="font-display" style={{ fontSize: 20, fontWeight: 500 }}>{name}</h3>
                  <span className="font-body gold" style={{ fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap", marginLeft: 8 }}>{nights}</span>
                </div>
                <p className="font-body" style={{ fontSize: 11, color: "#c9a96e", letterSpacing: "0.1em", marginBottom: 8 }}>{dates}</p>
                <p className="font-body" style={{ fontSize: 13, color: "rgba(240,237,232,0.6)", lineHeight: 1.55 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="section-divider" />

      {/* LOGÍSTICA DE TRANSPORTE */}
      <section style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto" }}>
        <p className="font-body gold" style={{ letterSpacing: "0.3em", fontSize: 10, textTransform: "uppercase", textAlign: "center", marginBottom: 12 }}>Mobilidade</p>
        <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500, textAlign: "center", marginBottom: 56 }}>
          Aéreo & Ferroviário
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            { tipo: "✈", label: "Voo Internacional", trecho: "GRU → FCO", data: "Sex., 11 set.", horario: "14:15 → 06:50+1", operadora: "ITA Airways · AZ 675 · Airbus A330-900neo" },
            { tipo: "🚄", label: "Trem Intercity", trecho: "Pisa → Roma", data: "Ter., 15 set.", horario: "11:11 → 14:33", operadora: "Trenitalia · IC 505 · Pisa Centrale → Roma Termini · 3h22min" },
            { tipo: "🚄", label: "Trem Alta Velocidade", trecho: "Roma → Veneza", data: "Sex., 18 set.", horario: "12:58 → 16:42", operadora: "Italo · Nº 8916 · Roma Tiburtina → Venice Mestre · 3h44min" },
            { tipo: "🚄", label: "Trem Alta Velocidade", trecho: "Veneza → Milão", data: "Dom., 20 set.", horario: "13:57 → 16:25", operadora: "Italo · Nº 8984 · Venezia S. Lucia → Milano Centrale · 2h28min" },
            { tipo: "🚄", label: "Trem Regional", trecho: "Milão → Tirano", data: "Ter., 22 set.", horario: "06:20 → 08:52", operadora: "Trenord · Nº 2812 · Milano Centrale → Tirano · 2h32min" },
            { tipo: "🏔", label: "Bernina Express · UNESCO", trecho: "Tirano → St. Moritz", data: "Ter., 22 set.", horario: "10:06 → 12:35", operadora: "Ferrovia Rética · Nº 972 · travessia alpina a 2.253m · 2h29min" },
            { tipo: "🚄", label: "Trem", trecho: "St. Moritz → Berna", data: "Qui., 24 set.", horario: "13:47 → 17:58", operadora: "SBB · via Landquart + Zurique · 3 trens · 4h11min" },
            { tipo: "🚄", label: "Trem Direto", trecho: "Berna → Zurique", data: "Sex., 25 set.", horario: "13:02 → 13:58", operadora: "SBB · IC Nº 819 · Bern → Zürich HB · 56min" },
            { tipo: "✈", label: "Voo", trecho: "Zurique → Paris", data: "Dom., 27 set.", horario: "12:40 → 14:00", operadora: "SWISS · LX 638 · ZRH → CDG · Airbus A220-300 · 1h20min" },
            { tipo: "🚄", label: "Eurostar", trecho: "Paris → Londres", data: "Qui., 01 out.", horario: "14:30 → 16:05", operadora: "Eurostar · Nº 9037 · Paris Gare du Nord → London St Pancras · 2h35min" },
            { tipo: "✈", label: "Voo", trecho: "Londres → Lisboa", data: "Dom., 04 out.", horario: "16:35 → 19:25", operadora: "TAP Air Portugal · TP 1361 · LHR → LIS · Airbus A320neo · 2h50min" },
          ].map(({ tipo, label, trecho, data, horario, operadora }, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "48px 1fr auto",
              gap: 16, alignItems: "center",
              padding: "18px 20px", borderRadius: 8,
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)"
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

      {/* HOSPEDAGEM */}
      <section style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <p className="font-body gold" style={{ letterSpacing: "0.3em", fontSize: 10, textTransform: "uppercase", textAlign: "center", marginBottom: 12 }}>Hospedagem</p>
        <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500, textAlign: "center", marginBottom: 56 }}>
          Hotéis Selecionados
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
          {[
            {
              dest: "Roma", hotel: "Camplus Hotel Roma Centro", stars: 3,
              addr: "Via Montebello 8", checkin: "15 set. · 14:00", checkout: "18 set. · 10:30",
              noites: "3 noites", quarto: "Double Standard", extras: "Café da manhã incluso"
            },
            {
              dest: "Veneza", hotel: "Hotel Aquarius Venice", stars: 4,
              addr: "Campo San Giacomo dell'Orio 1624", checkin: "18 set. · 15:00", checkout: "20 set. · 11:00",
              noites: "2 noites", quarto: "Double King Comfort", extras: "Café da manhã incluso"
            },
            {
              dest: "Milão", hotel: "Hotel Bernina", stars: 3,
              addr: "Via Napo Torriani 27", checkin: "20 set. · 14:00", checkout: "22 set. · 11:00",
              noites: "2 noites", quarto: "Twin Standard", extras: "Café da manhã incluso"
            },
            {
              dest: "St. Moritz", hotel: "Hotel Reine Victoria", stars: 4,
              addr: "Via Rosatsch 18", checkin: "22 set. · 15:00", checkout: "24 set. · 07:00",
              noites: "2 noites", quarto: "Quarto Casal Superior", extras: "Café da manhã incluso · Cancelamento grátis até 15/09"
            },
            {
              dest: "Berna", hotel: "Hotel Savoy Bern", stars: 4,
              addr: "Neuengasse 26", checkin: "24 set. · 15:00", checkout: "25 set. · 11:00",
              noites: "1 noite", quarto: "Quarto Casal Conforto", extras: "Café da manhã incluso"
            },
            {
              dest: "Zurique", hotel: "Mercure Zürich City", stars: 4,
              addr: "Vulkanstrasse 108b", checkin: "25 set. · 15:00", checkout: "27 set. · 12:00",
              noites: "2 noites", quarto: "Comfort Room (2 camas)", extras: "Café da manhã incluso"
            },
            {
              dest: "Paris", hotel: "Mercure Paris Centre Tour Eiffel", stars: 4,
              addr: "20 Rue Jean Rey", checkin: "27 set. · 15:00", checkout: "01 out. · 12:00",
              noites: "4 noites", quarto: "Classic Room · 1 cama de casal", extras: "Café da manhã incluso"
            },
            {
              dest: "Londres", hotel: "Park Plaza County Hall London", stars: 4,
              addr: "1 Addington Street", checkin: "01 out. · 15:00", checkout: "04 out. · 12:00",
              noites: "3 noites", quarto: "Superior Room · 1 cama de casal", extras: "Café da manhã incluso"
            },
          ].map(({ dest, hotel, stars, addr, checkin, checkout, noites, quarto, extras }) => (
            <div key={dest} style={{ borderRadius: 8, overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)", padding: "22px 20px" }}>
              <p className="font-body gold" style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 6 }}>{dest}</p>
              <h3 className="font-display" style={{ fontSize: 18, fontWeight: 500, marginBottom: 4, lineHeight: 1.3 }}>{hotel}</h3>
              <p style={{ color: "#c9a96e", fontSize: 13, marginBottom: 6 }}>{"★".repeat(stars)}</p>
              <p className="font-body" style={{ fontSize: 11, color: "rgba(240,237,232,0.45)", marginBottom: 14 }}>{addr}</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 12 }}>
                <div>
                  <p className="font-body" style={{ fontSize: 9, color: "#c9a96e", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 2 }}>Check-in</p>
                  <p className="font-body" style={{ fontSize: 12 }}>{checkin}</p>
                </div>
                <div>
                  <p className="font-body" style={{ fontSize: 9, color: "#c9a96e", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 2 }}>Check-out</p>
                  <p className="font-body" style={{ fontSize: 12 }}>{checkout}</p>
                </div>
              </div>
              <p className="font-body" style={{ fontSize: 11, color: "rgba(240,237,232,0.6)", marginBottom: 4 }}>{noites} · {quarto}</p>
              <p className="font-body" style={{ fontSize: 11, color: "rgba(201,169,110,0.7)" }}>{extras}</p>
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
                { date: "11–12 set.", title: "Chegada à Toscana", desc: "Voo noturno GRU→FCO. Chegada em Roma pela manhã e traslado para a Toscana — região central da Itália famosa pelas colinas onduladas, ciprestes, vinhedos do Chianti e cidades medievais como Siena e San Gimignano. Check-in e descanso." },
                { date: "13–14 set.", title: "Casamento Larissa & Isac", desc: "Dia livre para explorar a região: Florença, capital da Toscana, guarda o Duomo (maior catedral de cúpula do mundo na época da construção), a Galeria Uffizi com obras de Botticelli e Michelangelo, e a Ponte Vecchio sobre o rio Arno. À tarde/noite do dia 14, celebração do casamento." },
                { date: "15 set.", title: "Partida para Roma", desc: "Manhã livre na Toscana. Trem Intercity Nº 505 da Trenitalia saindo de Pisa Centrale — cidade da famosa Torre Inclinada — às 11:11, chegando em Roma Termini às 14:33. Check-in e primeiros passos pela cidade." },
              ]
            },
            {
              dest: "Roma & Vaticano", color: "#5c3d2e",
              days: [
                { date: "15 set.", title: "Roma Antiga à Tarde", desc: "Fontana di Trevi: a maior fonte barroca do mundo, tradição de jogar moeda para garantir o retorno. Piazza Navona: praça oval construída sobre um estádio romano, com fontes do Bernini. Campo de' Fiori: praça animada com mercado e bares. Jantar em Trastevere, o bairro boêmio e autêntico de Roma." },
                { date: "16 set.", title: "Vaticano & Coliseu", desc: "Museus Vaticanos: coleção de arte de 2.000 anos, encerrada na Capela Sistina com o teto pintado por Michelangelo. Basílica de São Pedro: maior igreja do mundo cristão. Coliseu: anfiteatro romano do século I d.C., palco de gladiadores, com capacidade para 80.000 espectadores. Foro Romano: coração político da Roma Antiga." },
                { date: "17 set.", title: "Roma Livre", desc: "Villa Borghese: galeria de arte com esculturas de Bernini em meio a um parque arborizado. Bairro Prati para almoço. Castelo de Sant'Angelo às margens do Tibre — fortaleza do século II que serviu de mausoléu imperial, castelo medieval e prisão papal. Jantar de despedida com cacio e pepe e tiramisu autêntico." },
                { date: "18 set.", title: "Partida para Veneza", desc: "Trem Italo Nº 8916 saindo de Roma Tiburtina às 12:58, chegando em Venice Mestre às 16:42 (3h44min). Traslado de barco-táxi pelo Grande Canal ao hotel em Veneza." },
              ]
            },
            {
              dest: "Veneza", color: "#2e3f5c",
              days: [
                { date: "18 set.", title: "Chegada a Veneza", desc: "Veneza é uma cidade construída sobre 118 ilhas ligadas por 400 pontes — sem carros, com barcos como transporte. Traslado de barco-táxi pelo Grande Canal ao hotel. Jantar à beira da água e primeiros passos pela Piazza San Marco." },
                { date: "19 set.", title: "Veneza Clássica & Ilhas", desc: "Basílica de São Marcos: catedral de estilo bizantino coberta por mosaicos dourados. Palazzo Ducale: palácio gótico, centro do poder da República de Veneza por 1.000 anos. Gôndola pelos canais. Tarde: vaporetto para Murano (vidro soprado artesanal) e Burano (casinhas coloridas e renda feita à mão)." },
                { date: "20 set.", title: "Partida para Milão", desc: "Trem Italo Nº 8984 saindo de Venezia S. Lucia às 13:57, chegando em Milano Centrale às 16:25 (2h28min). Check-in e passeio noturno pelo bairro Navigli." },
              ]
            },
            {
              dest: "Milão", color: "#5c4a2e",
              days: [
                { date: "20 set.", title: "Chegada a Milão — Navigli", desc: "Milão é a capital mundial da moda e do design. Tarde no bairro Navigli — canais históricos do séc. XV, bares e restaurantes com aperitivo milanês, tradição única da cidade com petiscos gratuitos servidos com as bebidas a partir das 18h." },
                { date: "21 set.", title: "Milão Clássico", desc: "Duomo di Milano: catedral gótica com 135 torres e capacidade para 40.000 pessoas — a maior da Itália. Galleria Vittorio Emanuele II: galeria coberta de 1877, com mosaicos e as lojas mais exclusivas do mundo (Prada, Gucci, Louis Vuitton). Brera: bairro artístico com galerias e ateliês. La Scala: o teatro de ópera mais famoso do mundo (fachada e museu)." },
                { date: "22 set.", title: "Partida pela Linha do Bernina", desc: "Cedo: trem Trenord Nº 2812 saindo de Milano Centrale às 06:20, chegando em Tirano às 08:52. Em Tirano, janela de 1h14min: visita ao Santuário della Madonna di Tirano, ao lado da estação. Às 10:06, embarque no Bernina Express Nº 972 — a viagem de trem mais espetacular da Europa." },
              ]
            },
            {
              dest: "St. Moritz · Bernina Express", color: "#4a5c6a",
              days: [
                { date: "22 set.", title: "Bernina Express — Topo dos Alpes", desc: "A Linha do Bernina (Ferrovia Rética) é Patrimônio Mundial da UNESCO. O trem sobe sem cremalheira e sem túnel de base até 2.253m no Ospizio Bernina — entre geleiras azuis e viadutos em espiral sobre vales profundos. Chegada a St. Moritz às 12:35. Check-in e jantar no resort alpino mais famoso do mundo." },
                { date: "23 set.", title: "St. Moritz Livre", desc: "Dia completo em St. Moritz a 1.856m de altitude: Lago St. Moritz, Engadin Walking Trail, lojas de grife nas ruas cobertas de neve. A cidade que inventou o turismo de inverno em 1864. Almoço com vista para os Alpes e tarde de exploração livre." },
                { date: "24 set.", title: "Partida para Berna", desc: "Trem SBB RegioExpress Nº 1346 saindo de St. Moritz às 13:47, com conexão em Landquart e Zurique, chegando em Berna às 17:58 (4h11min). Check-in na capital suíça medieval." },
              ]
            },
            {
              dest: "Berna", color: "#5c5c3a",
              days: [
                { date: "24 set.", title: "Chegada a Berna", desc: "Berna é a capital federal da Suíça — uma das cidades medievais mais bem preservadas da Europa, inscrita na UNESCO. A cidade velha (Altstadt) tem 6km de arcadas cobertas do séc. XIII, onde se anda protegido da chuva e da neve. Check-in e jantar na Altstadt." },
                { date: "25 set.", title: "Berna & Partida para Zurique", desc: "Zytglogge: a Torre do Relógio de 1218, com relógio astronômico que anima figuras mecânicas a cada hora. Bärengraben: o fosso dos ursos — símbolo heráldico da cidade, com ursos vivendo à beira do rio Aare. Ao meio-dia, trem direto SBB IC Nº 819 (13:02→13:58) para Zurique — 56min de viagem." },
              ]
            },
            {
              dest: "Zurique", color: "#4a4a6a",
              days: [
                { date: "25 set.", title: "Zurique — Tarde & Noite", desc: "Zurique é a maior cidade da Suíça. Altstadt com o Grossmünster do séc. XII. Bahnhofstrasse: 1,4km de joalherias, relógios e marcas suíças exclusivas. Lago de Zurique com vista dos Alpes. Langstrasse à noite — o bairro mais animado da cidade." },
                { date: "26 set.", title: "Zurique — Dia Livre", desc: "Museu Nacional Suíço (Landesmuseum): história e cultura da Suíça em um castelo neogótico. Lindenhügel: colina com vista panorâmica da cidade e dos Alpes. Tarde para compras ou visita ao bairro de Wiedikon. Última noite na Suíça." },
                { date: "27 set.", title: "Partida para Paris", desc: "Voo SWISS LX 638 saindo do Aeroporto de Zurique (ZRH) às 12:40, chegando em Paris Charles de Gaulle (CDG) às 14:00 (1h20min). Traslado ao centro e check-in. Noite à beira da Torre Eiffel iluminada." },
              ]
            },
            {
              dest: "Paris", color: "#4a3a5c",
              days: [
                { date: "27 set.", title: "Chegada a Paris", desc: "Check-in e exploração do bairro. À noite, Torre Eiffel iluminada — o monumento mais visitado do mundo, construído em 1889 como estrutura temporária para a Exposição Universal e que se tornou o símbolo eterno da França." },
                { date: "28 set.", title: "Disneyland Paris — Dia 1", desc: "Parque Disneyland: Castelo da Bela Adormecida, Fantasyland (Peter Pan, It's a Small World), Adventureland (Pirates of the Caribbean), Frontierland (Big Thunder Mountain Railroad) e o Fantasmic à noite." },
                { date: "29 set.", title: "Disneyland Paris — Dia 2", desc: "Walt Disney Studios Park: Avengers Campus com experiências imersivas no universo Marvel. Moteurs… Action!: show de acrobacias. Star Wars: Rise of the Resistance. Shows noturnos com fogos e projeção mapeada na fachada do parque." },
                { date: "30 set.", title: "Paris Clássico & Compras", desc: "Torre Eiffel de dia. Champs-Élysées e Arco do Triunfo. Louvre: o maior museu do mundo, Mona Lisa e Vênus de Milo. Montmartre e Sacré-Cœur com vista panorâmica de 360°. Galeries Lafayette e perfumarias." },
                { date: "01 out.", title: "Partida para Londres", desc: "Eurostar Nº 9037 saindo da Gare du Nord às 14:30, chegando em London St Pancras às 16:05 (2h35min). O trem atravessa o Canal da Mancha pelo Eurotúnel — 50km de túnel submarino a 38m abaixo do mar." },
              ]
            },
            {
              dest: "Londres", color: "#3a5c3a",
              days: [
                { date: "01 out.", title: "Chegada a Londres", desc: "Check-in. Tower Bridge: a ponte vitoriana de 1894 com passarela de vidro sobre o Tâmisa. Tower of London: fortaleza de 900 anos que guarda as Joias da Coroa. Borough Market: mercado de alimentos desde 1014." },
                { date: "02 out.", title: "Londres Clássico & Compras", desc: "Big Ben e Casas do Parlamento. Palácio de Buckingham com Troca da Guarda. Westminster Abbey: catedral onde reis são coroados há 1.000 anos. Oxford Street e Carnaby Street — epicentro da moda britânica. Covent Garden com artistas de rua." },
                { date: "03 out.", title: "Notting Hill & Museus", desc: "Notting Hill: casas pastéis, Portobello Road Market (maior mercado de antiguidades do mundo). British Museum ou National Gallery — museus gratuitos de classe mundial. Thames Walk ao entardecer. Jantar de despedida britânico." },
                { date: "04 out.", title: "Encerramento — Partida para Portugal", desc: "Manhã livre em Londres. Voo TAP TP 1361 saindo de Heathrow (LHR) às 16:35, chegando em Lisboa (LIS) às 19:25. Fim de uma viagem memorável pela Europa." },
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
