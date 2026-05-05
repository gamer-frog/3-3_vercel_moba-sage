// ============================================================
// MOBA SAGE — Combos / Pro Comp Data
// ============================================================

export interface CompEntry {
  name: string;
  champions: string[];
  playstyle: string;
  description: string;
}

export const proComps: CompEntry[] = [
  { name: 'Engage y Teamfight', champions: ['Malphite', 'Jarvan IV', 'Orianna', 'Jinx', 'Thresh'], playstyle: 'Engage brutal + follow-up', description: 'Malphite R + Jarvan EQ + Orianna R = team wipe. Jinx limpiando. Thresh protege y engancha stragglers. Comp muy fuerte en el meta actual por la cantidad de AP bruisers.' },
  { name: 'Poke & Siege', champions: ['Jayce', 'Zoe', 'Varus', 'Lulu', 'Karma'], playstyle: 'Dolor a distancia + disengage', description: 'Jayce y Zoe pokean desde fuera de rango. Varus R + Lulu R = pelea forzada a tu favor. Karma shield + speedboost para kiting. Excelente en objective setups.' },
  { name: 'Split Push', champions: ['Fiora', 'Nidalee', 'Trundle', 'Sivir', 'Shen'], playstyle: 'Presión lateral + respuesta global', description: 'Fiora/Trundle splitanean. Shen R + Sivir R para responder a 4v4. Nidalee controla jungle y objetivos. Funciona con comunicación de team.' },
  { name: 'Pick Comp', champions: ['Blitzcrank', 'Elise', 'LeBlanc', 'Ezreal', 'Nautilus'], playstyle: 'Catchear y eliminar', description: 'Blitz/Nautilus hook + Elise/LB burst = muerte instantánea. Ezreal limpia desde lejos. Excelente en ranked donde un catch = Baron/Nexus.' },
  { name: 'Proteger al ADC', champions: ['Ornn', 'Lee Sin', 'Orianna', 'Jinx', 'Yuumi'], playstyle: 'Peel intenso + hiper carry', description: 'Todo el team protege a Jinx. Ornn items para todo el team. Yuumi unbound a Jinx = inmortal en late game. Lee Sin kick para peel.' },

  // --- NUEVAS COMPOSICIONES ---

  { name: 'Proteger al Hypercarry', champions: ['KogMaw', 'Lulu', 'Janna', 'Ornn', 'Lee Sin'], playstyle: 'Peel masivo + escudos + exhaust', description: 'KogMaw escala hasta ser daño infinito en late game con W activo. Lulu y Janna lo mantienen vivo con escudos, speedboost y polimorfia. Ornn mejora items defensivos y Lee Sin kicka a cualquiera que se acerque. La clave es sobrevivir hasta minuto 30+.' },

  { name: 'Wombo Combo', champions: ['Amumu', 'Miss Fortune', 'Galio', 'Malphite'], playstyle: 'CC en cadena + AoE devastador', description: 'Amumu R o Malphite R inicia el caos con CC grupal. Galio R sigue para más CC y daño mágico masivo. Miss Fortune R sobre el equipo enraizado = delete completo. Una sola buena R de los cuatro y la teamfight termina en 3 segundos.' },

  { name: 'Dive Comp', champions: ['Camille', 'Jarvan IV', 'Diana', 'Leona'], playstyle: 'Zerg rush a carries enemigos', description: 'Camille y Diana saltan directamente a los carries más peligrosos sin importar el frontline. Jarvan IV atrapa con su cataclysm y Leona lockea al objetivo con CC infinito. No hay escape para el ADC enemigo. Ideal contra comps de poke sin dash.' },

  { name: 'Double AP', champions: ['Syndra', 'LeBlanc', 'Viego', 'Thresh'], playstyle: 'Burst mágico + reset de melee', description: 'Syndra y LeBlanc eliminan objetivos con combo burst de un solo ciclo. Viego aprovecha los resets tras cada kill para snowballar la teamfight. Thresh aporta pick potencial con hook y lantern para repositioning. Débil contra MR stacking pero letal si pilotean bien.' },

  { name: 'ARAM Poke', champions: ['Xerath', 'Ziggs', 'Lux', 'Brand', 'Nami'], playstyle: 'Dolor a larga distancia sin compromiso', description: 'Xerath y Ziggs bombardean desde fuera de rango de visión. Lux root + Brand R = combo instantáneo sobre objetivos atontados. Nami heal mantiene al equipo sano mientras reciben poke. En ARAM esta comp es una pesadilla porque no hay flanqueo posible.' },

  { name: 'Front to Back', champions: ['Nautilus', 'Orianna', 'Jinx', 'Lulu', 'Braum'], playstyle: 'Teamfight estándar + línea de frente sólida', description: 'Nautilus y Braum forman un muro infranqueable protegiendo a Jinx. Orianna usa la ball en el frontline para AoE y speedboost. Lulu pelea con wild growth y polymorph. Jinx dispara desde atrás mientras el frontline absorbe todo. Comp clásica que nunca falla en late game.' },

  { name: 'Assassin Burst', champions: ['Zed', 'Talon', 'Pyke', 'Nocturne', 'Galio'], playstyle: 'Eliminar carries en segundos', description: 'Zed y Talon flanquean y burstean al ADC y mage enemigos antes de que reaccionen. Pyke ejecuta objetivos bajos con su ultimate y da oro al team. Nocturne R proporciona visión cero para engañar. Galio R counter-engages si algo sale mal. Win condition: eliminar 2 carries antes de minuto 1 de pelea.' },

  { name: 'Tank AoE', champions: ['Malphite', 'Wukong', 'Kennen', 'Amumu'], playstyle: 'CC masivo + daño AoE desde el frente', description: 'Cuatro champions con CC en área que pueden wipear un team entero con sus ultimates encadenados. Malphite R + Wukong R + Kennen R + Amumu R = 16 segundos de CC combinado. El daño adicional de Sunfire y demonic embrace escala con cada tanque. Funciona mejor con un ADC que limpie tras el CC.' },

  { name: 'Lethality', champions: ['Samira', 'Varus', 'Zyra', 'Blitzcrank'], playstyle: 'Armor pen stacking + daño físico puro', description: 'Samira y Varus buildan lethality items para ignorar la armadura enemiga. Zyra y Blitzcrank aportan CC y daño extra desde support. Varus R engancha multiples objetivos y Samira R follow-up para el reset infinito. Débil contra Randuin Omen pero brutal en early-mid game.' },

  { name: 'Enchanter', champions: ['Soraka', 'Nami', 'Nilah', 'Jax', 'Ornn'], playstyle: 'Heal/shield intenso + hiper carry melee', description: 'Soraka y Nami mantienen al equipo curado y con escudos constantes. Nilah y Jax se benefician de los buffs de ataque y speed de las enchanters. Ornn mejora items para que el soporte escudado sea aún más fuerte. El enfoque es sobrevivir y dejar que los carries escalen sin morir nunca.' },

  { name: 'Utility Caster', champions: ['Morgana', 'Lux', 'Senna', 'Thresh'], playstyle: 'Pick + escudo + poke versátil', description: 'Morgana Q y Lux Q son skillshots devastadores que guaranteean kills si conectan. Senna cura y escala infinitamente con souls mientras aporta poke. Thresh ofrece engage con hook y peel con lantern. Esta comp controla el mapa con visión y pick potential constante.' },

  { name: 'Bruiser Ball', champions: ['Darius', 'Mordekaiser', 'Sett', 'Yone', 'Yuumi'], playstyle: 'Melee pesado + press R to win', description: 'Darius, Mordekaiser y Sett son tanques de daño masivo que no necesitan miedo al frontline enemigo. Yone aporta damage burst y mobility con su E + R. Yuumi se une al bruiser más fuerte para curarlo mientras causa caos. Ganar por pura fuerza bruta en skirmishes.' },
];
