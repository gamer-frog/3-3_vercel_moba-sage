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
  'Morgana':      { Q: 'Dark Binding', W: 'Tormented Shadow', E: 'Black Shield', R: 'Soul Shackles' },
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
  'Nasus':        { Q: 'Siphoning Strike', W: 'Wither', E: 'Spirit Fire', R: 'Fury of the Sands' },
  'Karthus':      { Q: 'Lay Waste', W: 'Wall of Pain', E: 'Defile', R: 'Requiem' },
  'Taliyah':      { Q: 'Threaded Volley', W: 'Seismic Shove', E: 'Unraveled Earth', R: "Weaver's Wall" },
  'Viego':        { Q: 'Blade of the Ruined King', W: 'Spectral Maw', E: 'Harrowed Path', R: 'Heartbreaker' },
  'Nami':         { Q: 'Aqua Prison', W: 'Ebb and Flow', E: "Tidecaller's Blessing", R: 'Tidal Wave' },
  "Kha'Zix":      { Q: 'Taste Their Fear', W: 'Void Spike', E: 'Leap', R: 'Void Assault' },
  'Renata Glasc':  { Q: 'Bailout', W: 'Rebel Missiles', E: 'Loyalty Program', R: 'Hostile Takeover' },
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
  'Karthus':       { 0: 'Clásica', 1: 'Phantom', 2: 'Frost Lord', 3: 'Pentakill', 4: 'Karthus=Zero', 5: 'Master Arcanist', 6: 'Bilgewater', 7: 'Mecha', 8: 'True Damage', 9: 'PsyOps' },
  'Nasus':         { 0: 'Clásica', 1: 'Galactic', 2: 'Pharaoh', 3: 'Infernal', 4: 'Archduke', 5: 'Dreadknight', 6: 'Worldbreaker', 7: 'Mythmaker', 8: 'Mecha Kingdoms' },
  'Taliyah':       { 0: 'Clásica', 1: 'Freljord', 2: 'SSG', 3: 'Pool Party', 4: 'Elderwood', 5: 'Lunar Revel', 6: 'PsyOps', 7: 'Battle Academia' },
  'Fiora':         { 0: 'Clásica', 1: 'Nightraven', 2: 'Royal Guard', 3: 'Headmistress', 4: 'Pool Party', 5: 'PROJECT:', 6: 'Heartpiercer', 7: 'Spirit Blossom', 8: 'PsyOps' },
  'Camille':       { 0: 'Clásica', 1: 'Program', 2: 'Coven', 3: 'Prestige', 4: 'Lunar Revel', 5: 'PsyOps' },
  'Viego':         { 0: 'Clásica', 1: 'Ruined King', 2: 'Crystal Rose', 3: 'Heartbreaker', 4: 'Lunar Revel', 5: 'Emerald' },
  'Nami':          { 0: 'Clásica', 1: 'Koi', 2: 'River Spirit', 3: 'Urf', 4: 'Deep Sea', 5: 'Super Galaxy', 6: 'Elderwood', 7: 'Coven', 8: 'PsyOps', 9: 'Bewitching' },
  'Mordekaiser':   { 0: 'Clásica', 1: 'Dragon Knight', 2: 'Infernal', 3: 'Pentakill', 4: 'Lord', 5: 'Dark Star', 6: 'King of Clubs', 7: 'Nightbringer', 8: 'Mecha Kingdoms' },
  'Sett':          { 0: 'Clásica', 1: 'Mecha Kingdoms', 2: 'Spirit Blossom', 3: 'Debonair', 4: 'Cafe Cuties', 5: 'Lunar Revel' },
  'Yone':          { 0: 'Clásica', 1: 'True Damage', 2: 'Spirit Blossom', 3: 'Battle Bunny', 4: 'PsyOps', 5: 'Lunar Revel' },
  'Samira':        { 0: 'Clásica', 1: 'PsyOps', 2: 'Firecracker', 3: 'Fortune', 4: 'Space Groove', 5: 'Coven' },
  'Syndra':        { 0: 'Clásica', 1: 'Justicar', 2: 'Atlantean', 3: 'SKT T1', 4: 'Star Guardian', 5: 'Dark Cosmic', 6: 'Prestige', 7: 'Immortal Journey', 8: 'Coven', 9: 'PsyOps' },
  'Kassadin':      { 0: 'Clásica', 1: 'Harbinger', 2: 'Fleet Admiral', 3: 'Deep Sea', 4: 'Pre-Void', 5: 'Mecha', 6: 'Cosmic Reaver' },
  'Lux':           { 0: 'Clásica', 1: 'Sorceress', 2: 'Spellthief', 3: 'Imperial', 4: 'Steel Legion', 5: 'Star Guardian', 6: 'Elementalist', 7: 'Cosmic', 8: 'Battle Academia', 9: 'Prestige Battle Academia', 10: 'Porcelain' },
  'Xerath':        { 0: 'Clásica', 1: 'Battlecast', 2: 'Runeborn', 3: 'Scarab', 4: 'Star Guardian', 5: 'Dark Star', 6: 'PsyOps' },
  'Corki':         { 0: 'Clásica', 1: 'Urfrider', 2: 'Ice Toboggan', 3: 'Phantom', 4: 'Arcane', 5: 'Battlecast', 6: 'Arcade', 7: 'Lunar Revel', 8: 'Arclight' },
  'Ezreal':        { 0: 'Clásica', 1: 'Nottingham', 2: 'Frosted', 3: 'Explorer', 4: 'Pulsefire', 5: 'Star Guardian', 6: 'Debonair', 7: 'Battle Academia', 8: 'PsyOps', 9: 'Porcelain' },
  'Zed':           { 0: 'Clásica', 1: 'Shockblade', 2: 'SKT T1', 3: 'PROJECT:', 4: 'Championship', 5: 'Galaxy Slayer', 6: 'Prestige', 7: 'DK', 8: 'Pantheon', 9: 'PsyOps' },
  'Vayne':         { 0: 'Clásica', 1: 'Aristocrat', 2: 'Vindicator', 3: 'Dragonslayer', 4: 'Heartbreaker', 5: 'Arclight', 6: 'NSFW', 7: 'Prestige', 8: 'PsyOps', 9: 'Coven' },
  'Morgana':       { 0: 'Clásica', 1: 'Exiled', 2: 'Blade Mistress', 3: 'Sinful Succulence', 4: 'Ghost Bride', 5: 'Chroma', 6: 'Lunar Revel', 7: 'Victorious', 8: 'Prestige', 9: 'PsyOps' },
  'Jhin':          { 0: 'Clásica', 1: 'Debonair', 2: 'Shan Hai Scrolls', 3: 'Blood Moon', 4: 'SKT T1', 5: 'Cosmic', 6: 'Dark Cosmic', 7: 'Elderwood', 8: 'Prestige', 9: 'PsyOps' },
  'Vi':            { 0: 'Clásica', 1: 'Neon Strike', 2: 'Officer', 3: 'Debonair', 4: 'Heartbreaker', 5: 'PROJECT:', 6: 'Warrior Princess', 7: 'PsyOps', 8: 'Battlecast' },
  'Orianna':       { 0: 'Clásica', 1: 'Gothic', 2: 'Sewn Chaos', 3: 'Bladecraft', 4: 'Pulsefire', 5: 'Battlecast', 6: 'Pool Party', 7: 'Elderwood', 8: 'Porcelain', 9: 'Coven' },
  'Akali':         { 0: 'Clásica', 1: 'Infernal', 2: 'Headhunter', 3: 'Crimson', 4: 'Blood Moon', 5: 'Silverfang', 6: 'K/DA', 7: 'True Damage', 8: 'K/DA ALL OUT', 9: 'PsyOps', 10: 'Street Legend' },
  'Ekko':          { 0: 'Clásica', 1: 'Sandstorm', 2: 'Academy', 3: 'Project', 4: 'Battlecast', 5: 'Star Guardian', 6: 'Elderwood', 7: 'PsyOps', 8: 'True Damage', 9: 'Porcelain' },
  'LeBlanc':       { 0: 'Clásica', 1: 'Wicked', 2: 'Mistletoe', 3: 'Elderwood', 4: 'Prestige', 5: 'Ravenborn', 6: 'Program', 7: 'Coven', 8: 'All Star', 9: 'PsyOps' },
  'Annie':         { 0: 'Clásica', 1: 'Gothic', 2: 'Red Riding', 3: 'Frostfire', 4: 'Prom Queen', 5: 'Hextech', 6: 'FrankenTibbers', 7: 'Super Galaxy', 8: 'Star Guardian', 9: 'Prestige K/DA', 10: 'Lunar Revel', 11: 'Arcane', 12: 'Bear Calamity' },
  'Viktor':        { 0: 'Clásica', 1: 'Full Machine', 2: 'Creator', 3: 'Arcane', 4: 'iBlitz', 5: 'Battlecast', 6: 'Debonair', 7: 'PsyOps' },
  'Azir':          { 0: 'Clásica', 1: 'Galactic', 2: 'Forsaken', 3: 'Warring Kingdoms', 4: 'NBA', 5: 'Elderwood', 6: 'Lunar Revel', 7: 'PsyOps', 8: 'Dark Star' },
  'Ziggs':         { 0: 'Clásica', 1: 'Mad Scientist', 2: 'Major', 3: 'Pool Party', 4: 'Snow Day', 5: 'Battlecast', 6: 'Master Chef', 7: 'Star Guardian', 8: 'Elderwood', 9: 'Lunar Revel', 10: 'Arcane', 11: 'Porcelain' },
  'Fizz':          { 0: 'Clásica', 1: 'Atlantean', 2: 'Tundra', 3: 'Void', 4: 'Cyber', 5: 'Omega Squad', 6: 'Cottontail', 7: 'Battlecast', 8: 'Fuzz Fizz', 9: 'Lunar Revel', 10: 'PsyOps' },
  'Talon':         { 0: 'Clásica', 1: 'Renegade', 2: 'Crimson Elite', 3: 'Dragonblade', 4: 'SSW', 5: 'Hyena', 6: 'Project', 7: 'Enduring', 8: 'PsyOps', 9: 'Lunar Revel' },
  'Malzahar':      { 0: 'Clásica', 1: 'Shadow Prince', 2: 'Harrowed', 3: 'Snow Day', 4: 'Odyssey', 5: 'Dark Overlord', 6: 'Lunar Revel', 7: 'PsyOps', 8: 'Coven', 9: 'Arcane' },
  'Twisted Fate': { 0: 'Clásica', 1: 'Musketeer', 2: 'Regal', 3: 'Underworld', 4: 'Red Card', 5: 'Pulsefire', 6: 'Cutpurse', 7: 'Lunar Revel', 8: 'PsyOps', 9: 'Dragonmancer' },
  'Lucian':        { 0: 'Clásica', 1: 'Hired Gun', 2: 'Striker', 3: 'Prestige', 4: 'PROJECT:', 5: 'Heartpiercer', 6: 'Debonair', 7: 'Battle Academia', 8: 'PsyOps', 9: 'Porcelain' },
  'Varus':         { 0: 'Clásica', 1: 'Arclight', 2: 'Blight Crystal', 3: 'Heartpiercer', 4: 'Darkstar', 5: 'Arctic Ops', 6: 'Gravitational', 7: 'PsyOps', 8: 'Spirit Blossom', 9: 'Porcelain' },
  'Draven':        { 0: 'Clásica', 1: 'Soul Reaper', 2: 'Gladiator', 3: 'Pool Party', 4: 'Beast Hunter', 5: 'Mecha', 6: 'Primetime', 7: 'Prestige', 8: 'Lunar Revel', 9: 'Debonair', 10: 'PsyOps' },
  'Miss Fortune':  { 0: 'Clásica', 1: 'Cowgirl', 2: 'Waterloo', 3: 'Secret Agent', 4: 'Arcade', 5: 'Captain', 6: 'Star Guardian', 7: 'Gun Goddess', 8: 'Prestige', 9: 'Street Idol', 10: 'Battle Bunny', 11: 'Heartsteel', 12: 'PsyOps' },
  'Aphelios':      { 0: 'Clásica', 1: 'Nightbringer', 2: 'Phrelan', 3: 'Empyrean', 4: 'Prestige', 5: 'Lunar Revel', 6: 'PsyOps' },
  'Riven':         { 0: 'Clásica', 1: 'Redeemed', 2: 'Crimson Elite', 3: 'Battle Bunny', 4: 'Dragonblade', 5: 'Championship', 6: 'Arcade', 7: 'Star Guardian', 8: 'Prestige', 9: 'Spirit Blossom', 10: 'Dawnbringer', 11: 'Lunar Revel', 12: 'PsyOps' },
  'Renekton':      { 0: 'Clásica', 1: 'Bloodfury', 2: 'Outback', 3: 'Galactic', 4: 'Pool Party', 5: 'Worldbreaker', 6: 'Arclight', 7: 'Elderwood', 8: 'Fire and Ice', 9: 'PsyOps', 10: 'Lunar Revel', 11: 'Heartsteel' },
  'Irelia':        { 0: 'Clásica', 1: 'Enchanted', 2: 'Frostblade', 3: 'Aviator', 4: 'Order of the Lotus', 5: 'PROJECT:', 6: 'Battle Academia', 7: 'Star Guardian', 8: 'Lunar Revel', 9: 'Cosmic', 10: 'PsyOps', 11: 'Coven' },
  'Volibear':      { 0: 'Clásica', 1: 'Thunder Lord', 2: 'Runeguard', 3: 'Northern Storm', 4: 'Arclight', 5: 'Battlecast', 6: 'Elderwood', 7: 'Orbee', 8: 'PsyOps', 9: 'Rainbow', 10: 'Lunar Revel' },
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
  'Resolve': { color: '#1b998b', label: 'Resolve', esLabel: 'Valentía', icon: 'shield' },
  'Valentía': { color: '#1b998b', label: 'Resolve', esLabel: 'Valentía', icon: 'shield' },
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
