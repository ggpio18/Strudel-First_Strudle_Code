// Tron-inspired synthwave – 110 BPM (working version)
cps(110/60)

$: stack(
  // Drums – TR‑909
  s("[bd ~] [~ sn] [hh hh hh hh] [~ ~ ch ~]")
    .bank("tr909")
    .dec(0.3)
    .gain(0.7),

  // Bass – square wave, filtered
  s("square")
    .note("c2 g2 d3 a2")
    .slow(4)
    .gain(0.6)
    .filter("lowpass", 300),

  // Arpeggio – bright square, fast
  s("square")
    .note("[c3,e3,g3] [g2,b2,d3] [e3,g3,b3] [a2,c3,e3]")
    .slow(4)
    .fast(4)
    .gain(0.2)
    .filter("lowpass", 4000),

  // Pad – sawtooth for warmth, with a gentle echo
  s("sawtooth")
    .note("[c3,e3,g3,b3] [g2,b2,d3,f3] [e3,g3,b3,d4] [a2,c3,e3,g3]")
    .slow(8)
    .gain(0.3)
    .off(0.5, p => p.add("c5")),

  // Lead melody – square with echo
  s("square")
    .note("c4 e4 g4 a4 g4 e4 c4 ~")
    .slow(2)
    .gain(0.35)
    .off(0.5, p => p.add("g4")),

  // Texture – vinyl crackle
  noise()
    .gain(0.02)
    .filter("lowpass", 200)
)
