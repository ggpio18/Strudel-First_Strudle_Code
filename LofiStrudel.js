// First Strudle Code 6/23/2026
cps(100/60)

$: stack(

  s("[bd ~] [~ sn] [hh ~ hh ~] [~ ~ oh ~]")
    .bank("tr909")
    .dec(0.4)
    .gain(0.6),

  note("f2 a2 c3 g2")
    .slow(4)          
    .gain(0.5),

  note("[f3,a3,c4] [a3,c4,e4] [c4,e4,g4] [g3,b3,d4]")
    .slow(4)          
    .gain(0.25)
    .fast(2),         

  note("f3 a3 c4 e4 g4 a4 g4 f4")
    .slow(2)             
    .gain(0.3)
)


/*
note("[c3,e3,g3]"): The [] groups multiple notes together to play at the same time. 
C3, E3, and G3 form a C Major chord. 

.gain(0.3): Keeps it quiet (30%) so it sits gently in the background like a warm synth pad.

.slow(4): This stretches the chord over 4 cycles. So, it plays once every 4 bars.

*/
