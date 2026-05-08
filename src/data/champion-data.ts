// ============================================================
// MOBA SAGE — Champion Data (ability names, skins, rune trees)
// ============================================================

import { Swords, Flame, AlertTriangle, Shield, Lightbulb } from 'lucide-react';

// ============================================================
// Ability Name Mappings
// ============================================================

export const SKILL_NAMES: Record<string, Record<'Q'|'W'|'E'|'R', string>> = {
  'Master Yi':    { Q: 'Alpha Strike', W: 'Wuju Style', E: 'Meditate', R: 'Highlander' },
  'Jinx':         { Q: 'Switcheroo!', W: 'Zap!', E: 'Flame Chompers!', R: 'Super Mega Death Rocket!' },
  'Lee Sin':      { Q: 'Sonic Wave', W: 'Safeguard', E: 'Iron Will', R: "Dragon's Rage" },
  'Katarina':     { Q: 'Bouncing Blade', W: 'Preparation', E: 'Shunpo', R: 'Death Lotus' },
  'Ahri':         { Q: 'Orb of Deception', W: 'Fox-Fire', E: 'Charm', R: 'Spirit Rush' },
  'Darius':       { Q: 'Decimate', W: 'Crippling Strike', E: 'Apprehend', R: 'Noxian Guillotine' },
  'Thresh':       { Q: 'Death Sentence', W: 'Dark Passage', E: 'Flay', R: 'The Box' },
  'Malphite':     { Q: 'Seismic Shard', W: 'Thunderclap', E: 'Ground Slam', R: 'Unstoppable Force' },
  'Nautilus':     { Q: 'Anchor Drag', W: "Titan's Wrath", E: 'Riptide', R: 'Depth Charge' },
  'Brand':        { Q: "Brand's Blaze", W: 'Pillar of Flame', E: 'Conflagration', R: 'Pyroclasm' },
  'Garen':        { Q: 'Decisive Strike', W: 'Courage', E: 'Judgment', R: 'Demacian Justice' },
  'Diana':        { Q: 'Crescent Strike', W: 'Pale Cascade', E: 'Moonfall', R: 'Lunar Rush' },
  'Ashe':         { Q: 'Frost Shot', W: "Ranger's Focus", E: 'Volley', R: 'Enchanted Crystal Arrow' },
  'Ezreal':       { Q: 'Mystic Shot', W: 'Essence Flux', E: 'Arcane Shift', R: 'Trueshot Barrage' },
  'Zed':          { Q: 'Razor Shuriken', W: 'Living Shadow', E: 'Shadow Slash', R: 'Death Mark' },
  'Vayne':        { Q: 'Tumble', W: 'Silver Bolts', E: 'Condemn', R: 'Final Hour' },
  'Caitlyn':      { Q: 'Piltover Peacemaker', W: 'Yordle Snap Trap', E: '90 Caliber Net', R: 'Ace in the Hole' },
  'Morgana':      { Q: 'Dark Binding', W: 'Black Shield', E: 'Tormented Shadow', R: 'Soul Shackles' },
  'Jhin':         { Q: 'Dancing Grenade', W: 'Deadly Flourish', E: 'Captive Audience', R: 'Curtain Call' },
  'Vi':           { Q: 'Vault Breaker', W: 'Denting Blows', E: 'Relentless Force', R: 'Cease and Desist' },
  'Yasuo':        { Q: 'Steel Tempest', W: 'Wind Wall', E: 'Sweeping Blade', R: 'Last Breath' },
  'Ornn':         { Q: 'Volcanic Rite', W: 'Bellows Breath', E: 'Searing Charge', R: 'Call of the Forge God' },
  'Briar':        { Q: 'Chilling Scream', W: 'Failed Experiment', E: 'Snatch and Stash', R: 'Certain Death' },
  'Aurelion Sol': { Q: 'Center of the Universe', W: 'Astral Flight', E: 'Celestial Expansion', R: 'The Skies Descend' },
  'Veigar':       { Q: 'Baleful Strike', W: 'Dark Matter', E: 'Event Horizon', R: 'Primordial Burst' },
  'Nilah':        { Q: 'Joyous Unleashing', W: 'Jubilant Veil', E: 'Apex Bliss', R: 'Apotheosis' },
  'Soraka':       { Q: 'Starcall', W: 'Astral Infusion', E: 'Equinox', R: 'Wish' },
  'Zyra':         { Q: 'Deadly Spines', W: 'Rampant Growth', E: 'Grasping Roots', R: 'Stranglethorns' },
  'Kennen':       { Q: 'Thundering Shuriken', W: 'Electrical Surge', E: 'Lightning Rush', R: 'Slicing Maelstrom' },
  'Syndra':       { Q: 'Dark Sphere', W: 'Force of Will', E: 'Scatter the Weak', R: 'Unleashed Power' },
  'Orianna':      { Q: 'Command: Attack', W: 'Command: Dissonance', E: 'Command: Protect', R: 'Command: Shockwave' },
  'Akali':        { Q: 'Five Point Strike', W: 'Twilight Shroud', E: 'Shuriken Flip', R: 'Perfect Execution' },
  'Ekko':         { Q: 'Timewinder', W: 'Parallel Convergence', E: 'Phase Dive', R: 'Chronobreak' },
  'LeBlanc':      { Q: 'Shatter Orb', W: 'Distortion', E: 'Ethereal Chains', R: 'Mimic' },
  'Annie':        { Q: 'Disintegrate', W: 'Incinerate', E: 'Molten Shield', R: 'Summon: Tibbers' },
  'Lux':          { Q: 'Light Binding', W: 'Prismatic Barrier', E: 'Lucent Singularity', R: 'Final Spark' },
  'Viktor':       { Q: 'Siphon Power', W: 'Gravity Field', E: 'Death Ray', R: 'Chaos Storm' },
  'Azir':         { Q: 'Conquering Sands', W: 'Arise!', E: 'Shifting Sands', R: "Emperor's Divide" },
  'Corki':        { Q: 'Phosphorus Bomb', W: 'Valkyrie', E: 'Missile Barrage', R: 'Special Delivery' },
  'Ziggs':        { Q: 'Bouncing Bomb', W: 'Satchel Charge', E: 'Hexplosive Minefield', R: 'Mega Inferno Bomb' },
  'Xerath':       { Q: 'Arcanopulse', W: 'Eye of Destruction', E: 'Shocking Orb', R: 'Rite of the Arcane' },
  "Vel'Koz":      { Q: 'Plasma Fission', W: 'Void Rift', E: 'Tectonic Disruption', R: 'Life Form Disintegration Ray' },
  'Fizz':         { Q: 'Urchin Strike', W: 'Seastone Trident', E: 'Playful / Trickster', R: 'Chum the Waters' },
  'Talon':        { Q: 'Noxian Diplomacy', W: 'Rake', E: 'Cutthroat', R: 'Shadow Assault' },
  'Kassadin':     { Q: 'Null Sphere', W: 'Nether Blade', E: 'Force Pulse', R: 'Riftwalk' },
  'Malzahar':     { Q: 'Call of the Void', W: 'Malefic Visions', E: 'Null Zone', R: 'Nether Grasp' },
  'Twisted Fate': { Q: 'Wild Cards', W: 'Pick a Card', E: 'Stacked Deck', R: 'Destiny' },
  'Lucian':       { Q: 'Piercing Light', W: 'Ardent Blaze', E: 'Relentless Pursuit', R: 'The Culling' },
  'Varus':        { Q: 'Piercing Arrow', W: 'Hail of Arrows', E: 'Contaminate', R: 'Chain of Corruption' },
  'Draven':       { Q: 'Spinning Axe', W: 'Blood Rush', E: 'Stand Aside', R: 'Whirling Death' },
  'Samira':       { Q: 'Flair', W: 'Blade Whirl', E: 'Wild Rush', R: 'Inferno Trigger' },
  "Kai'Sa":       { Q: 'Icathian Rain', W: 'Void Seeker', E: 'Supercharge', R: 'Killer Instinct' },
  'Miss Fortune': { Q: 'Double Up', W: 'Strut', E: 'Make It Rain', R: 'Bullet Time' },
  'Aphelios':     { Q: 'Moonshot', W: 'The Severum', E: 'The Calibrum', R: 'Moonlight Vigil' },
  'Riven':        { Q: 'Broken Wings', W: 'Ki Burst', E: 'Valor', R: 'Blade of the Exile' },
  'Renekton':     { Q: 'Cull the Meek', W: 'Ruthless Predator', E: 'Slice and Dice', R: 'Dominus' },
  'Camille':      { Q: 'Precision Protocol', W: 'Tactical Sweep', E: 'Hookshot', R: 'The Hextech Ultimatum' },
  'Fiora':        { Q: 'Lunge', W: 'Riposte', E: 'Bladework', R: 'Grand Challenge' },
  'Irelia':       { Q: 'Bladesurge', W: 'Defiant Dance', E: 'Flawless Duet', R: "Vanguard's Edge" },
  'Yone':         { Q: 'Mortal Steel', W: 'Soul Unbound', E: 'Spirit Cleave', R: 'Fate Sealed' },
  'Sett':         { Q: 'Knuckle Down', W: 'Haymaker', E: 'Facebreaker', R: 'The Show Stopper' },
  'Volibear':     { Q: 'Thundering Smash', W: 'Frenzied Maul', E: 'Sky Splitter', R: 'Stormbringer' },
  'Mordekaiser':  { Q: 'Obliterate', W: 'Indestructible', E: "Death's Grasp", R: 'Realm of Death' },
  // --- Ralph Loop #13 additions ---
  'Nasus':        { Q: 'Siphoning Strike', W: 'Wither', E: 'Spirit Fire', R: 'Fury of the Sands' },
  'Karthus':      { Q: 'Lay Waste', W: 'Wall of Pain', E: 'Defile', R: 'Requiem' },
  'Taliyah':      { Q: 'Threaded Volley', W: 'Seismic Shove', E: 'Unraveled Earth', R: "Weaver's Wall" },
  'Viego':        { Q: 'Blade of the Ruined King', W: 'Spectral Maw', E: 'Harrowed Path', R: 'Heartbreaker' },
  'Nami':         { Q: 'Aqua Prison', W: 'Ebb and Flow', E: "Tidecaller's Blessing", R: 'Tidal Wave' },
  "Kha'Zix":      { Q: 'Taste Their Fear', W: 'Void Spike', E: 'Leap', R: 'Void Assault' },
  // --- Slot 09 Tick #24 additions (27 champions, 66->93) ---
  'Amumu':        { Q: 'Bandage Toss', W: 'Despair', E: 'Tantrum', R: 'Curse of the Sad Mummy' },
  'Bard':         { Q: 'Cosmic Binding', W: "Caretaker's Shrine", E: 'Magical Journey', R: 'Tempered Fate' },
  'Blitzcrank':   { Q: 'Rocket Grab', W: 'Overdrive', E: 'Power Fist', R: 'Static Field' },
  'Braum':        { Q: "Winter's Bite", W: 'Stand Behind Me', E: 'Unbreakable', R: 'Glacial Fissure' },
  'Elise':        { Q: 'Neurotoxin', W: 'Volatile Spiderling', E: 'Cocoon', R: 'Spider Form' },
  'Gragas':       { Q: 'Barrel Roll', W: 'Drunken Rage', E: 'Body Slam', R: 'Explosive Cask' },
  'Graves':       { Q: 'End of the Line', W: 'Smoke Screen', E: 'Quickdraw', R: 'Collateral Damage' },
  'Ivern':        { Q: 'Rootcaller', W: 'Brushmaker', E: 'Triggerseed', R: 'Daisy!' },
  'Kalista':      { Q: 'Pierce', W: 'Martial Poise', E: 'Rend', R: "Fate's Call" },
  'Leona':        { Q: 'Shield of Daybreak', W: 'Eclipse', E: 'Zenith Blade', R: 'Solar Flare' },
  'Lulu':         { Q: 'Glitterlance', W: 'Whimsy', E: 'Help, Pix!', R: 'Wild Growth' },
  'Nidalee':      { Q: 'Javelin Toss', W: 'Bushwhack', E: 'Primal Surge', R: 'Aspect of the Cougar' },
  'Nocturne':     { Q: 'Duskbringer', W: 'Shroud of Darkness', E: 'Unspeakable Horror', R: 'Paranoia' },
  'Rakan':        { Q: 'Gleaming Quill', W: 'Grand Entrance', E: 'Battle Dance', R: 'The Quickness' },
  'Senna':        { Q: 'Piercing Darkness', W: 'Last Embrace', E: 'Cursethief', R: 'Dawning Shadow' },
  'Shen':         { Q: 'Twilight Assault', W: 'Spirit Refuge', E: 'Shadow Dash', R: 'Stand United' },
  'Sion':         { Q: 'Decimating Smash', W: 'Soul Furnace', E: 'Roar of the Slayer', R: 'Unstoppable Onslaught' },
  'Skarner':      { Q: 'Crystal Slash', W: 'Crystalline Exoskeleton', E: 'Fracture', R: 'Impale' },
  'Tahm Kench':   { Q: 'Tongue Lash', W: 'Devour', E: 'Thick Skin', R: 'Abyssal Voyage' },
  'Teemo':        { Q: 'Blinding Dart', W: 'Move Quick', E: 'Toxic Shot', R: 'Noxious Trap' },
  'Tristana':     { Q: 'Rapid Fire', W: 'Rocket Jump', E: 'Explosive Charge', R: 'Buster Shot' },
  'Urgot':        { Q: 'Corrosive Charge', W: 'Purge', E: 'Disdain', R: 'Fear Beyond Death' },
  'Warwick':      { Q: 'Jaws of the Beast', W: 'Blood Hunt', E: 'Primal Howl', R: 'Infinite Duress' },
  'Wukong':       { Q: 'Crushing Blow', W: 'Decoy', E: 'Nimbus Strike', R: 'Cyclone' },
  'Xin Zhao':     { Q: 'Three Talon Strike', W: 'Battle Cry', E: 'Audacious Charge', R: 'Crescent Guard' },
  'Yorick':       { Q: 'Last Rites', W: 'Dark Procession', E: 'Mourning Mist', R: 'Eulogy of the Isles' },
  'Zaahen':       { Q: 'Ethereal Strike', W: 'Aether Shield', E: 'Aether Dash', R: 'Aether Metamorphosis' },
};

export function getAbilityName(championName: string, skill: 'Q'|'W'|'E'|'R'): string {
  const names = SKILL_NAMES[championName];
  if (names && names[skill]) return names[skill];
  return `${championName} ${skill}`;
}

// ============================================================
// Generic Ability Descriptions (fallback)
// ============================================================

export const GENERIC_ABILITY_DESCRIPTIONS: Record<'Q'|'W'|'E'|'R', string> = {
  Q: 'Habilidad principal — principal fuente de daño',
  W: 'Habilidad secundaria — utilidad o control',
  E: 'Habilidad de movimiento — escape o enganche',
  R: 'Ultimate — define el power spike del campeón',
};

// ============================================================
// Skin Variants & Names
// ============================================================

export const SKIN_VARIANTS = [0, 1, 2, 3, 4];

export const SKIN_NAMES: Record<string, Record<number, string>> = {
  'Jinx':          { 0: 'Clásica', 1: 'Crimson Delirium', 2: 'Zombie Slayer', 3: 'Star Guardian', 4: 'Mafia', 5: 'Firecracker', 6: 'Battlecast', 7: 'Lux', 8: 'Arcane', 9: 'Spirit Blossom' },
  'Ahri':          { 0: 'Clásica', 1: 'Dinámica', 2: 'Foxfire', 3: 'Popstar', 4: 'Academy', 5: 'Challenger', 6: 'Midnight', 7: 'Dawnbringer', 8: 'Elderwood', 9: 'K/DA', 10: 'K/DA ALL OUT', 11: 'Arcade', 12: 'Empyrean' },
  'Master Yi':     { 0: 'Clásica', 1: 'Chosen', 2: 'Ionia', 3: 'Samurai', 4: 'Assassin', 5: 'Headhunter', 6: 'PROJECT:', 7: 'Cosmic', 8: 'Gun Goddess', 9: 'True Damage', 10: 'Midnight' },
  'Lee Sin':       { 0: 'Clásica', 1: 'Traditional', 2: 'Martial Arts', 3: 'Dragon Fist', 4: 'Pool Party', 5: 'Muay Thai', 6: 'SKT T1', 7: 'God Fist', 8: 'Prestige' },
  'Yasuo':         { 0: 'Clásica', 1: 'High Noon', 2: 'PROJECT:', 3: 'Blood Moon', 4: 'Nightblade', 5: 'True Damage', 6: 'Spirit Blossom', 7: 'Battle Bunny', 8: 'Yone' },
  'Thresh':        { 0: 'Clásica', 1: 'Deep Terror', 2: 'Championship', 3: 'Blood Moon', 4: 'SSW', 5: 'Lancer', 6: 'High Noon', 7: 'Pulsefire', 8: 'Elderwood' },
  'Darius':        { 0: 'Clásica', 1: 'Bioforge', 2: 'Lord', 3: 'Woad King', 4: 'Nova', 5: 'Dunkmaster', 6: 'Academy', 7: 'God-King', 8: 'Beast Hunter' },
  'Caitlyn':       { 0: 'Clásica', 1: 'Resistance', 2: 'Sheriff', 3: 'Safari', 4: 'Arctic Ops', 5: 'Headmistress', 6: 'Pulsefire', 7: 'Arcade', 8: 'Prestige Arcade', 9: 'Battle Academia', 10: 'Star Guardian' },
  'Katarina':      { 0: 'Clásica', 1: 'Mercenary', 2: 'Kitty Cat', 3: 'High Command', 4: 'Bilgewater', 5: 'Red Card', 6: 'Warring Kingdoms', 7: 'PROJECT:', 8: 'Battle Queen', 9: 'K/DA', 10: 'K/DA ALL OUT' },
  'Malphite':      { 0: 'Clásica', 1: 'Shamrock', 2: 'Coral Reef', 3: 'Obsidian', 4: 'Marble', 5: 'Ironside', 6: 'Glacial', 7: 'Lava Worn', 8: 'Mecha', 9: 'Dark Star' },
  'Nautilus':      { 0: 'Clásica', 1: 'Abyssal', 2: 'Subterranean', 3: 'Astronaut', 4: 'World Breaker', 5: 'Warden', 6: 'Pool Party', 7: 'Oceanus' },
  'Diana':         { 0: 'Clásica', 1: 'Dark Valkyrie', 2: 'Lunar Goddess', 3: 'Infernal', 4: 'Blood Moon', 5: 'Elderwood', 6: 'Battle Queen', 7: 'Prestige Lunar Goddess' },
  'Brand':         { 0: 'Clásica', 1: 'Apocalyptic', 2: 'Vandal', 3: 'Cryocore', 4: 'Zombie', 5: 'Spirit Fire', 6: 'KINDRED', 7: 'Elderwood' },
  'Garen':         { 0: 'Clásica', 1: 'Sanguine', 2: 'Dreadknight', 3: 'Commando', 4: 'Mecha', 5: 'Rugged', 6: 'Demacia Vice', 7: 'God-King', 8: 'Battlecast', 9: 'Prestige' },
  'Ashe':          { 0: 'Clásica', 1: 'Freljord', 2: 'Sherwood Forest', 3: 'Queen', 4: 'Amethyst', 5: 'Heartseeker', 6: 'Project', 7: 'Wildfire', 8: 'Prestige', 9: 'Elementalist' },
  'Ornn':          { 0: 'Clásica', 1: 'Thunder Lord', 2: 'Elderwood', 3: 'Badlands' },
  'Briar':         { 0: 'Clásica', 1: 'Bewitching', 2: 'Heartbreaker' },
  'Aurelion Sol':  { 0: 'Clásica', 1: 'Ashen Lord', 2: 'Prestige Ashen Lord' },
  'Veigar':        { 0: 'Clásica', 1: 'White Mage', 2: 'Curling', 3: 'Superb Villain', 4: 'Lunar Revel', 5: 'Battle Boss', 6: 'Star Guardian', 7: 'Arclight', 8: 'Prestige FX' },
  'Nilah':         { 0: 'Clásica', 1: 'Sea Glass', 2: 'BEYOND THE WAVE' },
  'Soraka':        { 0: 'Clásica', 1: 'Dryad', 2: 'Divine', 3: 'Teacher', 4: 'Celestine', 5: 'Order of the Banana', 6: 'Program', 7: 'Star Guardian', 8: 'Prestige' },
  'Zyra':          { 0: 'Clásica', 1: 'Wildfire', 2: 'Haunted', 3: 'SKT T1', 4: 'Battlecast', 5: 'Dragon Sorceress', 6: 'Psi Ops' },
  'Kennen':        { 0: 'Clásica', 1: 'Deadly Kennen', 2: 'Karan', 3: 'Swamp Master', 4: 'Ninja', 5: 'Arctic', 6: 'Giant', 7: 'PROJECT:' },
  // --- Ralph Loop #13 additions ---
  'Zaahen':        { 0: 'Clásica', 1: 'Prestige' },
  'Sion':          { 0: 'Clásica', 1: 'Lumberjack', 2: 'Hextech', 3: 'Mecha', 4: 'Worldbreaker', 5: 'Cultist', 6: 'Battlecast', 7: 'Arclight' },
  'Gragas':        { 0: 'Clásica', 1: 'Gragas, Ok', 2: 'Eggnog', 3: 'Caskmaster', 4: 'Marquis', 5: 'Vandal', 6: 'Pool Party', 7: 'Mecha', 8: 'Arctic Ops', 9: 'Beekeeper', 10: 'Lancer' },
  'Malzahar':      { 0: 'Clásica', 1: 'Vizier', 2: 'Shadow Prince', 3: 'Overlord', 4: 'Firelord', 5: 'DJ', 6: 'Control', 7: 'Elderwood', 8: 'Riftwalker', 9: 'Lunar Revel' },
  'Tahm Kench':    { 0: 'Clásica', 1: 'Master Chef', 2: 'Urf', 3: 'Coast Guard', 4: 'Eternals', 5: 'Conqueror' },
  'Teemo':         { 0: 'Clásica', 1: 'Happy Elf', 2: 'Bad Santa', 3: 'Astronaut', 4: 'Cottontail', 5: 'Super Hero', 6: 'Recon', 7: 'Omega Squad', 8: 'Beemo', 9: 'Spirit Blossom', 10: 'Bee Keeper' },
  'Warwick':       { 0: 'Clásica', 1: 'Urf the Manatee', 2: 'Big Bad', 3: 'Tundra', 4: 'Firefang', 5: 'Feral', 6: 'Blood Moon', 7: 'Project', 8: 'Lunar Revel', 9: 'Eternal Dreamer' },
  'Ezreal':        { 0: 'Clásica', 1: 'Nottingham', 2: 'Frost', 3: 'Striker', 4: 'Explorer', 5: 'Pulsefire', 6: 'Debonair', 7: 'Star Guardian', 8: 'Arcade', 9: 'Battle Academia', 10: 'PsyOps' },
  'Elise':         { 0: 'Clásica', 1: 'Death Blossom', 2: 'Victorious', 3: 'Blood Moon', 4: 'SKT T1', 5: 'Program', 6: 'Battlecast', 7: 'Coven' },
  'Syndra':        { 0: 'Clásica', 1: 'Justicar', 2: 'Atlantean', 3: 'SKT T1', 4: 'Star Guardian', 5: 'Dark Cosmic', 6: 'Prestige', 7: 'Immortal Journey', 8: 'Coven', 9: 'PsyOps' },
  'Orianna':       { 0: 'Clásica', 1: 'Blade Mistress', 2: 'Sewn Chaos', 3: 'Gothic', 4: 'TPA', 5: 'Winter Wonder', 6: 'Battlecast', 7: 'Ethereal' },
  'Miss Fortune':  { 0: 'Clásica', 1: 'Cowgirl', 2: 'Secret Agent', 3: 'Lady of Fortune', 4: 'Arcade', 5: 'Captain Fortune', 6: 'Pool Party', 7: 'Gun Goddess', 8: 'Star Guardian', 9: 'Mafia', 10: 'Prestige' },
  'Kassadin':      { 0: 'Clásica', 1: 'Harbinger', 2: 'Fleet Admiral', 3: 'Deep Sea', 4: 'Pre-Void', 5: 'Mecha', 6: 'Cosmic Reaver' },
  'Lux':           { 0: 'Clásica', 1: 'Sorceress', 2: 'Spellthief', 3: 'Imperial', 4: 'Steel Legion', 5: 'Star Guardian', 6: 'Elementalist', 7: 'Cosmic', 8: 'Battle Academia', 9: 'Prestige Battle Academia', 10: 'Porcelain' },
  'Xerath':        { 0: 'Clásica', 1: 'Battlecast', 2: 'Runeborn', 3: 'Scarab', 4: 'Star Guardian', 5: 'Dark Star', 6: 'PsyOps' },
  'Corki':         { 0: 'Clásica', 1: 'Urfrider', 2: 'Ice Toboggan', 3: 'Phantom', 4: 'Arcane', 5: 'Battlecast', 6: 'Arcade', 7: 'Lunar Revel', 8: 'Arclight' },
};

export function getSkinLabel(championName: string, skinNum: number): string {
  if (skinNum === 0) return 'Clásica';
  const champSkins = SKIN_NAMES[championName];
  if (champSkins && champSkins[skinNum]) return champSkins[skinNum];
  return `Skin ${skinNum}`;
}

// ============================================================
// Rune Tree Types & Config
// ============================================================

export const RUNE_TREE_CONFIG: Record<string, { color: string; label: string; esLabel: string; icon: string }> = {
  'Precision': { color: '#c8aa6e', label: 'Precision', esLabel: 'Precisión', icon: 'sword' },
  'Precisión': { color: '#c8aa6e', label: 'Precision', esLabel: 'Precisión', icon: 'sword' },
  'Sorcery': { color: '#7b4dff', label: 'Sorcery', esLabel: 'Brujería', icon: 'orb' },
  'Brujería': { color: '#7b4dff', label: 'Sorcery', esLabel: 'Brujería', icon: 'orb' },
  'Domination': { color: '#d44444', label: 'Domination', esLabel: 'Dominación', icon: 'claw' },
  'Dominación': { color: '#d44444', label: 'Domination', esLabel: 'Dominación', icon: 'claw' },
  'Resolve': { color: '#1b998b', label: 'Resolve', esLabel: 'Valor', icon: 'shield' },
  'Valor': { color: '#1b998b', label: 'Resolve', esLabel: 'Valor', icon: 'shield' },
  'Inspiration': { color: '#14b8a6', label: 'Inspiration', esLabel: 'Inspiración', icon: 'gear' },
  'Inspiración': { color: '#14b8a6', label: 'Inspiration', esLabel: 'Inspiración', icon: 'gear' },
};

// Re-export Lucide icon mapping for RuneTreeIcon component
export const RUNE_TREE_ICON_MAP: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties; strokeWidth?: number }>> = {
  sword: Swords,
  orb: Flame,
  claw: AlertTriangle,
  shield: Shield,
  gear: Lightbulb,
};

export function getRuneTreeColor(treeName: string): string {
  for (const [key, val] of Object.entries(RUNE_TREE_CONFIG)) {
    if (treeName.toLowerCase().includes(key.toLowerCase())) return val.color;
  }
  return '#c8aa6e';
}

export function getRuneTreeEsLabel(treeName: string): string {
  for (const [key, val] of Object.entries(RUNE_TREE_CONFIG)) {
    if (treeName.toLowerCase().includes(key.toLowerCase())) return val.esLabel;
  }
  return treeName;
}
