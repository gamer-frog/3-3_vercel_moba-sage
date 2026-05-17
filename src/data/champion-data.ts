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
  // --- Slot 13 Tick #28 addition ---
  "K'Sante":      { Q: 'All Out Strike', W: 'Mastodon Bash', E: 'Footwork', R: 'All Out' },
  // --- Slot 09 Tick #160 additions (14 champions missing from tierlist-feed) ---
  "Bel'Veth":     { Q: 'Void Surge', W: 'Royal Maelstrom', E: 'Scourge', R: 'Empyrean' },
  'Cassiopeia':   { Q: 'Noxious Blast', W: 'Miasma', E: 'Twin Fang', R: 'Petrifying Gaze' },
  'Evelynn':      { Q: 'Hate Spike', W: 'Allure', E: 'Whiplash', R: "Last Caress" },
  'Hwei':         { Q: 'Paint the World', W: 'Palette', E: 'Imaginary Canvas', R: 'Disordered Mind' },
  'Kayle':        { Q: 'Radiant Blast', W: 'Celestial Blessing', E: 'Starfire Spellblade', R: 'Divine Judgment' },
  'Naafiri':      { Q: 'Darkin Torrent', W: 'Faithful Companion', E: "Hunters' Instinct", R: "Call of the Pack" },
  'Olaf':         { Q: 'Undertow', W: 'Vicious Strikes', E: 'Reckless Swing', R: 'Ragnarok' },
  'Rammus':       { Q: 'Powerball', W: 'Defensive Ball Curl', E: 'Puncturing Taunt', R: 'Tremors' },
  "Rek'Sai":      { Q: "Queen's Wrath", W: 'Burrow', E: 'Furious Bite', R: 'Void Rush' },
  'Seraphine':    { Q: 'High Note', W: 'Surround Sound', E: 'Beat Drop', R: 'Encore' },
  'Smolder':      { Q: 'Super Scorch', W: 'Dragon Compound', E: 'Molten Bronze', R: 'Super Dragon' },
  'Sona':         { Q: 'Hymn of Valor', W: 'Aria of Perseverance', E: 'Song of Celerity', R: 'Crescendo' },
  'Taric':        { Q: 'Resolute Smash', W: 'Starlight\'s Touch', E: 'Dazzle', R: 'Cosmic Radiance' },
  'Vladimir':     { Q: 'Transfusion', W: 'Sanguine Pool', E: 'Tides of Blood', R: 'Hemoplague' },
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

  'Akali': { '1': 'Stinger Akali', '2': 'Infernal Akali', '3': 'All-star Akali', '4': 'Nurse Akali', '5': 'Blood Moon Akali', '6': 'Silverfang Akali', '7': 'Headhunter Akali', '8': 'Sashimi Akali', '9': 'K/DA Akali', '11': 'Headhunter Akali (Tanzanite)', '13': 'Prestige K/DA Akali', '14': 'PROJECT: Akali', '15': 'True Damage Akali', '18': 'PROJECT: Akali (Catseye)', '24': 'PROJECT: Akali (Reckoning)' },
  'Amumu': { '1': 'Pharaoh Amumu', '2': 'Vancouver Amumu', '3': 'Emumu', '4': 'Re-Gifted Amumu', '5': 'Almost-Prom King Amumu', '6': 'Little Knight Amumu', '7': 'Sad Robot Amumu', '8': 'Surprise Party Amumu', '13': 'Surprise Party Amumu (Rainbow)', '14': 'Surprise Party Amumu (Catseye)', '17': 'Infernal Amumu', '21': 'Infernal Amumu (Tanzanite)', '22': 'Infernal Amumu (Catseye)', '23': 'Hextech Amumu', '24': 'Pumpkin Prince Amumu' },
  'Annie': { '1': 'Goth Annie', '2': 'Red Riding Annie', '3': 'Annie in Wonderland', '4': 'Prom Queen Annie', '5': 'Frostfire Annie', '6': 'Reverse Annie', '7': 'FrankenTibbers Annie', '8': 'Panda Annie', '9': 'Sweetheart Annie', '10': 'Hextech Annie', '11': 'Super Galaxy Annie', '12': 'Annie-Versary', '13': 'Lunar Beast Annie', '15': 'Lunar Beast Annie (Vitality)', '22': 'Cafe Cuties Annie' },
  'Aphelios': { '1': 'Nightbringer Aphelios', '3': 'Nightbringer Aphelios (Pariah)', '9': 'Lunar Beast Aphelios', '12': 'Lunar Beast Aphelios (Vitality)', '14': 'Lunar Beast Aphelios (Tanzanite)', '18': 'EDG Aphelios', '19': 'EDG Aphelios (Elite)', '20': 'Spirit Blossom Aphelios', '23': 'Spirit Blossom Aphelios (Catseye)', '26': 'Spirit Blossom Aphelios (Tanzanite)', '29': 'Spirit Blossom Aphelios (Night Blossom)', '30': 'HEARTSTEEL Aphelios', '32': 'HEARTSTEEL Aphelios (Tanzanite)', '39': 'HEARTSTEEL Aphelios (Rockstar)', '40': 'Prestige Spirit Blossom Springs Aphelios' },
  'Azir': { '1': 'Galactic Azir', '2': 'Gravelord Azir', '3': 'SKT T1 Azir', '4': 'Warring Kingdoms Azir', '5': 'Elderwood Azir', '9': 'Elderwood Azir (Catseye)', '12': 'Elderwood Azir (Emberwood)', '14': 'Worlds 2022 Azir', '15': 'Worlds 2022 Azir (Tanzanite)', '18': 'Worlds 2022 Azir (One & Only)', '19': 'Attorney Azir', '24': 'Attorney Azir (Jasper)' },
  'Bard': { '1': 'Elderwood Bard', '2': 'Bard Bloom Marigold', '3': 'Bard Bloom Ivy', '4': 'Bard Bloom Sage', '5': 'Snow Day Bard', '6': 'Bard Bard', '7': 'Snow Day Bard (Golden)', '8': 'Astronaut Bard', '12': 'Astronaut Bard (Catseye)', '16': 'Astronaut Bard (Chrono)', '17': 'Cafe Cuties Bard', '20': 'Cafe Cuties Bard (Catseye)', '23': 'Cafe Cuties Bard (Tanzanite)', '26': 'Shan Hai Scrolls Bard', '30': 'Shan Hai Scrolls Bard (Tanzanite)' },
  'Blitzcrank': { '1': 'Rusty Blitzcrank', '2': 'Goalkeeper Blitzcrank', '3': 'Boom Boom Blitzcrank', '4': 'Piltover Customs Blitzcrank', '5': 'Definitely Not Blitzcrank', '6': 'iBlitzcrank', '7': 'Riot Blitzcrank', '8': 'Blitzcrank Steel Molten', '9': 'Blitzcrank Steel Cobalt', '10': 'Blitzcrank Steel Gunmetal', '11': 'Battle Boss Blitzcrank', '12': 'Battle Boss Blitzcrank (Catseye)', '13': 'Battle Boss Blitzcrank (Rainbow)', '20': 'Lancer Rogue Blitzcrank', '21': 'Lancer Paragon Blitzcrank' },
  'Braum': { '1': 'Dragonslayer Braum', '2': 'El Tigre Braum', '3': 'Braum Lionheart', '6': 'Dragonslayer Braum (Catseye)', '8': 'Dragonslayer Braum (Sandstone)', '10': 'Santa Braum', '11': 'Crime City Braum', '14': 'Crime City Braum (Tanzanite)', '19': 'Crime City Braum (Sandstone)', '20': 'Dragonslayer Braum (Fan Pass)', '21': 'Dragonslayer Braum (LEC)', '22': 'Dragonslayer Braum (LCS)', '23': 'Dragonslayer Braum (LPL)', '24': 'Sugar Rush Braum', '28': 'Sugar Rush Braum (Catseye)' },
  'Camille': { '1': 'Program Camille', '2': 'Coven Camille', '3': 'Coven Camille (Tanzanite)', '10': 'iG Camille', '11': 'Arcana Camille', '14': 'Arcana Camille (Tanzanite)', '20': 'Coven Camille (Dark Ritual)', '21': 'Strike Commander Camille', '26': 'Strike Commander Camille (Tanzanite)', '30': 'Strike Commander Camille (Ace)', '31': 'Winterblessed Camille', '32': 'Prestige Winterblessed Camille', '41': 'Winterblessed Camille (Wreathguard)', '42': 'Winterblessed Camille (Ornamented)', '43': 'iG Camille (Elite)' },
  'Draven': { '1': 'Soul Reaver Draven', '2': 'Gladiator Draven', '3': 'Primetime Draven', '4': 'Pool Party Draven', '5': 'Beast Hunter Draven', '6': 'Draven Draven', '8': 'Primetime Draven (Catseye)', '9': 'Primetime Draven (Tanzanite)', '12': 'Santa Draven', '13': 'Mecha Kingdoms Draven', '15': 'Mecha Kingdoms Draven (Peacekeeper)', '20': 'Ruined Draven', '28': 'Ruined Draven (Cursed)', '29': 'Debonair Draven', '31': 'Debonair Draven (Catseye)' },
  'Ekko': { '1': 'Sandstorm Ekko', '2': 'Academy Ekko', '3': 'PROJECT: Ekko', '4': 'Sandstorm Ekko (Tanzanite)', '7': 'Sandstorm Ekko (Sandstone)', '11': 'SKT T1 Ekko', '12': 'Trick or Treat Ekko', '18': 'Trick or Treat Ekko (Golden)', '19': 'True Damage Ekko', '22': 'True Damage Ekko (Freestyle)', '24': 'True Damage Ekko (Catseye)', '28': 'Pulsefire Ekko', '33': 'Pulsefire Ekko (Chrono)', '36': 'Arcane Firelight Ekko', '42': 'Arcane Firelight Ekko (Tanzanite)' },
  'Fiora': { '1': 'Royal Guard Fiora', '2': 'Nightraven Fiora', '3': 'Headmistress Fiora', '4': 'PROJECT: Fiora', '5': 'Pool Party Fiora', '6': 'Headmistress Fiora (Jasper)', '8': 'Headmistress Fiora (Sandstone)', '12': 'Headmistress Fiora (Catseye)', '14': 'Pool Party Fiora (Tanzanite)', '20': 'Pool Party Fiora (Rainbow)', '22': 'Soaring Sword Fiora', '23': 'Heartpiercer Fiora', '31': 'iG Fiora', '40': 'PROJECT: Fiora (Reckoning)', '41': 'Pulsefire Fiora' },
  'Fizz': { '1': 'Atlantean Fizz', '2': 'Tundra Fizz', '3': 'Fisherman Fizz', '4': 'Void Fizz', '5': 'Fizz Scorch Orange', '6': 'Fizz Scorch Black', '7': 'Fizz Scorch Red', '8': 'Cottontail Fizz', '9': 'Super Galaxy Fizz', '10': 'Omega Squad Fizz', '13': 'Omega Squad Fizz (Tanzanite)', '14': 'Fuzz Fizz', '15': 'Prestige Fuzz Fizz', '16': 'Little Devil Fizz', '17': 'Little Devil Fizz (Tanzanite)' },
  'Graves': { '1': 'Hired Gun Graves', '2': 'Jailbreak Graves', '3': 'Crime City Graves', '4': 'Riot Graves', '5': 'Pool Party Graves', '6': 'Cutthroat Graves', '7': 'Snow Day Graves', '14': 'Victorious Graves', '15': 'Victorious Graves (Flex)', '16': 'Victorious Graves (Solo/Duo)', '17': 'Victorious Graves (3v3)', '18': 'Praetorian Graves', '25': 'Battle Professor Graves', '26': 'Snow Day Graves (Golden)', '29': 'Battle Professor Graves (Tanzanite)' },
  'Irelia': { '1': 'Nightblade Irelia', '2': 'Aviator Irelia', '3': 'Infiltrator Irelia', '4': 'Frostblade Irelia', '5': 'Order of the Lotus Irelia', '6': 'Divine Sword Irelia', '8': 'Divine Sword Irelia (Meteorite)', '14': 'Frostblade Irelia (Golden)', '15': 'iG Irelia', '16': 'PROJECT: Irelia', '17': 'Prestige PROJECT: Irelia', '18': 'High Noon Irelia', '21': 'High Noon Irelia (Tanzanite)', '26': 'Sentinel Irelia', '30': 'Sentinel Irelia (Tanzanite)' },
  'Ivern': { '1': 'Candy King Ivern', '2': 'Dunkmaster Ivern', '6': 'Dunkmaster Ivern (Catseye)', '11': 'Old God Ivern', '16': 'Old God Ivern (Tanzanite)', '18': 'Old God Ivern (Emberwood)', '20': 'Astronaut Ivern', '22': 'Astronaut Ivern (Catseye)', '30': 'Spirit Blossom Ivern' },
  'Jhin': { '1': 'High Noon Jhin', '2': 'Blood Moon Jhin', '3': 'SKT T1 Jhin', '4': 'PROJECT: Jhin', '5': 'Dark Cosmic Jhin', '12': 'High Noon Jhin (Tanzanite)', '14': 'Shan Hai Scrolls Jhin', '18': 'Shan Hai Scrolls Jhin (Tanzanite)', '20': 'Shan Hai Scrolls Jhin (Catseye)', '23': 'DWG Jhin', '24': 'DWG Jhin (Elite)', '25': 'Empyrean Jhin', '28': 'Empyrean Jhin (Catseye)', '31': 'Empyrean Jhin (Rainbow)', '32': 'Empyrean Jhin (Tanzanite)' },
  'Kalista': { '1': 'Blood Moon Kalista', '2': 'Worlds 2015 Kalista', '3': 'SKT T1 Kalista', '4': 'Worlds 2015 Kalista (Golden)', '5': 'Marauder Kalista', '14': 'Faerie Court Kalista', '16': 'Faerie Court Kalista (Catseye)', '23': 'Faerie Court Kalista (Winsome)', '24': 'Dawnbringer Kalista', '26': 'Dawnbringer Kalista (Catseye)', '28': 'Dawnbringer Kalista (Tanzanite)' },
  'Karthus': { '1': 'Phantom Karthus', '2': 'Statue of Karthus', '3': 'Grim Reaper Karthus', '4': 'Pentakill Karthus', '5': 'Fnatic Karthus', '6': 'Grim Reaper Karthus Plague Burn', '7': 'Grim Reaper Karthus Plague Blight', '8': 'Grim Reaper Karthus Plague Frostbite', '9': 'Karthus Lightsbane', '10': 'Infernal Karthus', '17': 'Pentakill III: Lost Chapter Karthus', '19': 'Pentakill III: Lost Chapter Karthus (Catseye)', '22': 'Pentakill III: Lost Chapter Karthus (Tanzanite)', '26': 'Elderwood Karthus', '28': 'Elderwood Karthus (Catseye)' },
  'LeBlanc': { '1': 'Wicked LeBlanc', '2': 'Prestigious LeBlanc', '3': 'Mistletoe LeBlanc', '4': 'Ravenborn LeBlanc', '5': 'Elderwood LeBlanc', '7': 'Prestigious LeBlanc (Tanzanite)', '9': 'Prestigious LeBlanc (Catseye)', '12': 'Program LeBlanc', '17': 'Program LeBlanc (Rainbow)', '19': 'iG LeBlanc', '20': 'Coven LeBlanc', '29': 'Worlds 2020 LeBlanc', '33': 'Prestige Coven LeBlanc', '34': 'Coven LeBlanc (Dark Ritual)', '35': 'Debonair LeBlanc' },
  'Leona': { '1': 'Valkyrie Leona', '2': 'Defender Leona', '3': 'Iron Solari Leona', '4': 'Pool Party Leona', '5': 'Pool Party Leona Dawn Pink', '6': 'Pool Party Leona Dawn Azure', '7': 'Pool Party Leona Dawn Lemon', '8': 'PROJECT: Leona', '9': 'Barbecue Leona', '10': 'Solar Eclipse Leona', '11': 'Lunar Eclipse Leona', '12': 'Mecha Kingdoms Leona', '13': 'Mecha Kingdoms Leona (Peacekeeper)', '20': 'Mecha Kingdoms Leona (Tanzanite)', '21': 'Battle Academia Leona' },
  'Lucian': { '1': 'Hired Gun Lucian', '2': 'Striker Lucian', '3': 'Lucian Prime Yellow', '4': 'Lucian Prime Red', '5': 'Lucian Prime Blue', '6': 'PROJECT: Lucian', '7': 'Heartseeker Lucian', '8': 'High Noon Lucian', '9': 'Demacia Vice Lucian', '14': 'Demacia Vice Lucian (Catseye)', '16': 'Demacia Vice Lucian (Neon Noir)', '17': 'PROJECT: Lucian (Reckoning)', '18': 'Pulsefire Lucian', '19': 'Prestige Pulsefire Lucian', '25': 'Victorious Lucian' },
  'Lulu': { '1': 'Bittersweet Lulu', '2': 'Wicked Lulu', '3': 'Dragon Trainer Lulu', '4': 'Winter Wonder Lulu', '5': 'Pool Party Lulu', '6': 'Star Guardian Lulu', '7': 'Pool Party Lulu (Catseye)', '8': 'Pool Party Lulu (Sandstone)', '14': 'Cosmic Enchantress Lulu', '15': 'Pajama Guardian Lulu', '18': 'Cosmic Enchantress Lulu (Catseye)', '26': 'Space Groove Lulu', '27': 'Prestige Space Groove Lulu', '33': 'Space Groove Lulu (Tanzanite)', '36': 'Space Groove Lulu (Disco)' },
  'Mordekaiser': { '1': 'Dragon Knight Mordekaiser', '2': 'Infernal Mordekaiser', '3': 'Pentakill Mordekaiser', '4': 'Lord Mordekaiser', '5': 'King of Clubs Mordekaiser', '6': 'Dark Star Mordekaiser', '8': 'Dark Star Mordekaiser (Antimatter)', '13': 'PROJECT: Mordekaiser', '15': 'PROJECT: Mordekaiser (Catseye)', '21': 'PROJECT: Mordekaiser (Rainbow)', '22': 'PROJECT: Mordekaiser (Reckoning)', '23': 'Pentakill III: Lost Chapter Mordekaiser', '28': 'Pentakill III: Lost Chapter Mordekaiser (Tanzanite)', '30': 'Pentakill III: Lost Chapter Mordekaiser (Sandstone)', '32': 'High Noon Mordekaiser' },
  'Morgana': { '1': 'Exiled Morgana', '2': 'Sinful Succulence Morgana', '3': 'Blade Mistress Morgana', '4': 'Blackthorn Morgana', '5': 'Ghost Bride Morgana', '6': 'Victorious Morgana', '7': 'Morgana Haunt Toxic', '8': 'Morgana Haunt Pale', '9': 'Morgana Haunt Ebony', '10': 'Lunar Wraith Morgana', '11': 'Bewitching Morgana', '12': 'Blackthorn Morgana (Tanzanite)', '17': 'Majestic Empress Morgana', '19': 'Majestic Empress Morgana (Catseye)', '22': 'Majestic Empress Morgana (Tanzanite)' },
  'Nami': { '1': 'Koi Nami', '2': 'River Spirit Nami', '3': 'Urf the Nami-tee', '4': 'Koi Nami Element Sunbeam', '5': 'Koi Nami Element Smoke', '6': 'Koi Nami Element Twilight', '7': 'Deep Sea Nami', '8': 'SKT T1 Nami', '9': 'Program Nami', '15': 'Splendid Staff Nami', '20': 'Splendid Staff Nami (Tanzanite)', '22': 'Splendid Staff Nami (Heavenly Crane)', '24': 'Cosmic Destiny Nami', '31': 'Cosmic Destiny Nami (Rainbow)', '32': 'Bewitching Nami' },
  'Nasus': { '1': 'Galactic Nasus', '2': 'Pharaoh Nasus', '3': 'Dreadknight Nasus', '4': 'Riot K-9 Nasus', '5': 'Infernal Nasus', '6': 'Archduke Nasus', '7': 'Dreadknight Nasus Plague Burn', '8': 'Dreadknight Nasus Plague Blight', '9': 'Dreadknight Nasus Plague Frostbite', '10': 'Worldbreaker Nasus', '11': 'Lunar Guardian Nasus', '13': 'Lunar Guardian Nasus (Meteorite)', '16': 'Battlecast Nasus', '18': 'Battlecast Nasus (Catseye)', '22': 'Battlecast Nasus (Tanzanite)' },
  'Nidalee': { '1': 'Snow Bunny Nidalee', '2': 'Leopard Nidalee', '3': 'French Maid Nidalee', '4': 'Pharaoh Nidalee', '5': 'Bewitching Nidalee', '6': 'Headhunter Nidalee', '7': 'Warring Kingdoms Nidalee', '8': 'Challenger Nidalee', '9': 'Super Galaxy Nidalee', '10': 'Challenger Nidalee (Golden)', '11': 'Dawnbringer Nidalee', '15': 'Dawnbringer Nidalee (Paragon)', '18': 'Cosmic Huntress Nidalee', '23': 'Cosmic Huntress Nidalee  (Tanzanite)', '27': 'DWG Nidalee' },
  'Nocturne': { '1': 'Frozen Terror Nocturne', '2': 'Void Nocturne', '3': 'Ravager Nocturne', '4': 'Haunting Nocturne', '5': 'Eternum Nocturne', '6': 'Cursed Revenant Nocturne', '7': 'Old God Nocturne', '9': 'Old God Nocturne (Catseye)', '16': 'Hextech Nocturne', '17': 'Broken Covenant Nocturne', '20': 'Broken Covenant Nocturne (Tanzanite)', '26': 'Empyrean Nocturne', '28': 'Empyrean Nocturne (Catseye)', '32': 'Empyrean Nocturne (Tanzanite)', '35': 'Empyrean Nocturne (Neon Facade)' },
  'Rakan': { '1': 'Cosmic Dawn Rakan', '2': 'Sweetheart Rakan', '3': 'SSG Rakan', '4': 'iG Rakan', '5': 'Star Guardian Rakan', '9': 'Elderwood Rakan', '10': 'Elderwood Rakan (Catseye)', '12': 'Elderwood Rakan (Tanzanite)', '16': 'Elderwood Rakan (Emberwood)', '18': 'Arcana Rakan', '20': 'Arcana Rakan (Catseye)', '23': 'Arcana Rakan (Tanzanite)', '27': 'Broken Covenant Rakan', '29': 'Broken Covenant Rakan (Catseye)', '32': 'Broken Covenant Rakan (Tanzanite)' },
  'Renekton': { '1': 'Galactic Renekton', '2': 'Outback Renekton', '3': 'Bloodfury Renekton', '4': 'Rune Wars Renekton', '5': 'Scorched Earth Renekton', '6': 'Pool Party Renekton', '7': 'Prehistoric Renekton', '8': 'SKT T1 Renekton', '9': 'Renektoy', '10': 'Renektoy (Catseye)', '13': 'Renektoy (Tanzanite)', '17': 'Hextech Renekton', '18': 'Blackfrost Renekton', '26': 'PROJECT: Renekton', '30': 'PROJECT: Renekton (Tanzanite)' },
  'Riven': { '1': 'Redeemed Riven', '2': 'Crimson Elite Riven', '3': 'Battle Bunny Riven', '4': 'Worlds 2012 Riven', '5': 'Dragonblade Riven', '6': 'Arcade Riven', '7': 'Reignited Worlds 2012 Riven', '8': 'Battle Bunny Riven (Catseye)', '9': 'Battle Bunny Riven (Granite)', '11': 'Battle Bunny Riven (Astral)', '16': 'Dawnbringer Riven', '17': 'Dragonblade Riven (Golden)', '18': 'Pulsefire Riven', '19': 'Reignited Worlds 2012 Riven (Golden)', '20': 'Valiant Sword Riven' },
  'Samira': { '1': 'PsyOps Samira', '4': 'PsyOps Samira (Catseye)', '8': 'PsyOps Samira (Hunter)', '10': 'Space Groove Samira', '18': 'Space Groove Samira (Rainbow)', '19': 'Space Groove Samira (Disco)', '20': 'High Noon Samira', '25': 'High Noon Samira (Tanzanite)', '26': 'High Noon Samira (Catseye)', '29': 'High Noon Samira (Nomad)', '30': 'Soul Fighter Samira', '33': 'Masque of the Black Rose Samira', '34': 'High Noon Samira (Paragon)', '35': 'Battle Professor Samira', '37': 'Battle Professor Samira (Catseye)' },
  'Senna': { '1': 'True Damage Senna', '2': 'True Damage Senna (Freestyle)', '3': 'True Damage Senna (Catseye)', '9': 'Prestige True Damage Senna', '10': 'High Noon Senna', '12': 'High Noon Senna (Tanzanite)', '16': 'PROJECT: Senna', '18': 'PROJECT: Senna (Catseye)', '25': 'PROJECT: Senna (Reckoning)', '26': 'Lunar Eclipse Senna', '27': 'Prestige Lunar Eclipse Senna', '32': 'Lunar Eclipse Senna (Tanzanite)', '36': 'Bewitching Senna', '37': 'High Noon Senna (Mythic)', '39': 'Bewitching Senna (Catseye)' },
  'Sett': { '1': 'Mecha Kingdoms Sett', '3': 'Mecha Kingdoms Sett (Tanzanite)', '7': 'Mecha Kingdoms Sett (Peacekeeper)', '8': 'Obsidian Dragon Sett', '9': 'Prestige Obsidian Dragon Sett', '10': 'Pool Party Sett', '12': 'Pool Party Sett (Catseye)', '19': 'Firecracker Sett', '20': 'Obsidian Dragon Sett (Emberclaw)', '28': 'Obsidian Dragon Sett (Catseye)', '30': 'Firecracker Sett (Catseye)', '37': 'Firecracker Sett (Golden Tiger)', '38': 'Spirit Blossom Sett', '43': 'Spirit Blossom Sett (Catseye)', '44': 'Spirit Blossom Sett (Night Blossom)' },
  'Shen': { '1': 'Frozen Shen', '2': 'Yellow Jacket Shen', '3': 'Surgeon Shen', '4': 'Blood Moon Shen', '5': 'Warlord Shen', '6': 'TPA Shen', '7': 'Warlord Shen (Catseye)', '9': 'Warlord Shen (Tanzanite)', '15': 'Pulsefire Shen', '16': 'Infernal Shen', '18': 'Infernal Shen (Catseye)', '22': 'PsyOps Shen', '29': 'Surgeon Shen (Sandstone)', '30': 'Surgeon Shen (Rainbow)', '31': 'Pulsefire Shen (Chrono)' },
  'Skarner': { '1': 'Sandscourge Skarner', '2': 'Earthrune Skarner', '3': 'Battlecast Alpha Skarner', '4': 'Guardian of the Sands Skarner', '5': 'Cosmic Sting Skarner', '9': 'Cosmic Sting Skarner (Tanzanite)', '14': 'Mecha Kingdoms Skarner' },
  'Taliyah': { '1': 'Freljord Taliyah', '2': 'SSG Taliyah', '3': 'Pool Party Taliyah', '7': 'Pool Party Taliyah (Catseye)', '11': 'Star Guardian Taliyah', '13': 'Star Guardian Taliyah (Catseye)', '15': 'Star Guardian Taliyah (Tanzanite)', '20': 'Star Guardian Taliyah (Brilliant)', '21': 'Crystalis Motus Taliyah', '22': 'Crystalis Motus Taliyah (Reclaimed)', '23': 'SSG Taliyah (Elite)', '24': 'Durand\'s Legacy Taliyah' },
  'Talon': { '1': 'Renegade Talon', '2': 'Crimson Elite Talon', '3': 'Dragonblade Talon', '4': 'SSW Talon', '5': 'Blood Moon Talon', '7': 'Dragonblade Talon (Catseye)', '12': 'Enduring Sword Talon', '15': 'Enduring Sword Talon (Catseye)', '20': 'Talon Blackwood', '26': 'Talon Blackwood (Catseye)', '29': 'Withered Rose Talon', '38': 'High Noon Talon', '39': 'Prestige High Noon Talon', '41': 'High Noon Talon (Catseye)', '44': 'High Noon Talon (Tanzanite)' },
  'Tristana': { '1': 'Riot Girl Tristana', '2': 'Earnest Elf Tristana', '3': 'Firefighter Tristana', '4': 'Guerilla Tristana', '5': 'Buccaneer Tristana', '6': 'Rocket Girl Tristana', '7': 'Rocket Girl Tristana Punk Navy', '8': 'Rocket Girl Tristana Punk Purple', '9': 'Rocket Girl Tristana Punk Orange', '10': 'Dragon Trainer Tristana', '11': 'Bewitching Tristana', '12': 'Omega Squad Tristana', '21': 'Dragon Trainer Tristana (Rainbow)', '24': 'Little Demon Tristana', '33': 'Pengu Cosplay Tristana' },
  'Twisted Fate': { '1': 'PAX Twisted Fate', '2': 'Jack of Hearts Twisted Fate', '3': 'The Magnificent Twisted Fate', '4': 'Tango Twisted Fate', '5': 'High Noon Twisted Fate', '6': 'Musketeer Twisted Fate', '7': 'Underworld Twisted Fate', '8': 'Red Card Twisted Fate', '9': 'Cutpurse Twisted Fate', '10': 'Blood Moon Twisted Fate', '11': 'Pulsefire Twisted Fate', '12': 'Pulsefire Twisted Fate (Chrono)', '13': 'Odyssey Twisted Fate', '15': 'Odyssey Twisted Fate (Merc)', '16': 'Odyssey Twisted Fate (Catseye)' },
  'Urgot': { '1': 'Giant Enemy Crabgot', '2': 'Butcher Urgot', '3': 'Battlecast Urgot', '7': 'Battlecast Urgot (Tanzanite)', '9': 'High Noon Urgot', '10': 'High Noon Urgot (Tanzanite)', '15': 'Pajama Guardian Cosplay Urgot', '19': 'Pajama Guardian Cosplay Urgot (Catseye)', '23': 'Fright Night Urgot', '25': 'Fright Night Urgot (Catseye)', '32': 'Urgot the Clogfather', '35': 'Urgot the Clogfather (Catseye)', '36': 'Urgot the Clogfather (Tanzanite)', '39': 'Urgot the Clogfather (Meteorite)' },
  'Varus': { '1': 'Blight Crystal Varus', '2': 'Arclight Varus', '3': 'Arctic Ops Varus', '4': 'Heartseeker Varus', '5': 'Varus Swiftbolt', '6': 'Dark Star Varus', '7': 'Conqueror Varus', '8': 'Conqueror Varus (Golden)', '9': 'Infernal Varus', '11': 'Infernal Varus (Catseye)', '15': 'Dark Star Varus (Antimatter)', '16': 'PROJECT: Varus', '17': 'Cosmic Hunter Varus', '19': 'Cosmic Hunter Varus (Catseye)', '26': 'PROJECT: Varus (Catseye)' },
  'Vayne': { '1': 'Vindicator Vayne', '2': 'Aristocrat Vayne', '3': 'Dragonslayer Vayne', '4': 'Heartseeker Vayne', '5': 'SKT T1 Vayne', '6': 'Arclight Vayne', '7': 'Dragonslayer Vayne Chaos Green', '8': 'Dragonslayer Vayne Chaos Red', '9': 'Dragonslayer Vayne Chaos Silver', '10': 'Soulstealer Vayne', '11': 'PROJECT: Vayne', '12': 'Firecracker Vayne', '13': 'Prestige Firecracker Vayne', '14': 'Spirit Blossom Vayne', '15': 'FPX Vayne' },
  'Vi': { '1': 'Neon Strike Vi', '2': 'Officer Vi', '3': 'Debonair Vi', '4': 'Demon Vi', '5': 'Warring Kingdoms Vi', '11': 'PROJECT: Vi', '12': 'Heartbreaker Vi', '15': 'Heartbreaker Vi (Catseye)', '20': 'PsyOps Vi', '22': 'PsyOps Vi (Sandstone)', '26': 'PsyOps Vi (Hunter)', '27': 'PsyOps Vi (Granite)', '28': 'PsyOps Vi (Tanzanite)', '29': 'Arcane Undercity Vi', '30': 'Heartache Vi' },
  'Viego': { '1': 'Lunar Beast Viego', '4': 'Lunar Beast Viego (Catseye)', '6': 'Lunar Beast Viego (Tanzanite)', '8': 'Lunar Beast Viego (Vitality)', '10': 'Dissonance of Pentakill Viego', '15': 'Dissonance of Pentakill Viego (Sandstone)', '17': 'Dissonance of Pentakill Viego (Tanzanite)', '19': 'EDG Viego', '20': 'EDG Viego (Elite)', '21': 'King Viego', '23': 'King Viego (Catseye)', '26': 'King Viego (Meteorite)', '30': 'Soul Fighter Viego', '35': 'Soul Fighter Viego (Meteorite)', '36': 'Soul Fighter Viego (Limitless)' },
  'Viktor': { '1': 'Full Machine Viktor', '2': 'Prototype Viktor', '3': 'Creator Viktor', '4': 'Death Sworn Viktor', '5': 'PsyOps Viktor', '7': 'PsyOps Viktor (Sandstone)', '13': 'PsyOps Viktor (Hunter)', '14': 'High Noon Viktor', '16': 'High Noon Viktor (Catseye)', '19': 'High Noon Viktor (Tanzanite)', '23': 'High Noon Viktor (Nomad)', '24': 'Arcane Savior Viktor', '25': 'Machine Herald Viktor', '28': 'Machine Herald Viktor (Tanzanite)', '33': 'Machine Herald Viktor (Catseye)' },
  'Volibear': { '1': 'Thunder Lord Volibear', '2': 'Northern Storm Volibear', '3': 'Runeguard Volibear', '4': 'Captain Volibear', '5': 'El Rayo Volibear', '6': 'The Thousand-Pierced Bear', '7': 'Duality Dragon Volibear', '9': 'Prestige Duality Dragon Volibear', '16': 'Duality Dragon Volibear (Tanzanite)', '18': 'Duality Dragon Volibear (Emberclaw)', '19': 'Inkshadow Volibear', '22': 'Inkshadow Volibear (Tanzanite)', '28': 'Inkshadow Volibear (Inked)', '29': 'Spirit Blossom Springs Volibear', '31': 'Spirit Blossom Springs Volibear (Catseye)' },
  'Wukong': { '1': 'Volcanic Wukong', '2': 'General Wukong', '3': 'Jade Dragon Wukong', '4': 'Underworld Wukong', '5': 'Radiant Wukong', '6': 'Lancer Stratus Wukong', '7': 'Battle Academia Wukong', '10': 'Battle Academia Wukong (Catseye)', '14': 'Battle Academia Wukong (Meteorite)', '16': 'Elderwood Wukong', '25': 'Jade Dragon Wukong (Meteorite)', '26': 'Mecha Kingdoms Wukong', '27': 'Underworld Wukong (Doom)', '36': 'Mecha Kingdoms Wukong (Catseye)' },
  'Xin Zhao': { '1': 'Commando Xin Zhao', '2': 'Imperial Xin Zhao', '3': 'Viscero Xin Zhao', '4': 'Winged Hussar Xin Zhao', '5': 'Warring Kingdoms Xin Zhao', '6': 'Secret Agent Xin Zhao', '13': 'Dragonslayer Xin Zhao', '14': 'Dragonslayer Xin Zhao (Catseye)', '16': 'Dragonslayer Xin Zhao (Sandstone)', '20': 'Cosmic Defender Xin Zhao', '25': 'Cosmic Defender Xin Zhao (Tanzanite)', '26': 'Warring Kingdoms Xin Zhao (Golden)', '27': 'Marauder Xin Zhao', '36': 'Firecracker Xin Zhao', '38': 'Firecracker Xin Zhao (Catseye)' },
  'Yone': { '1': 'Spirit Blossom Yone', '4': 'Spirit Blossom Yone (Catseye)', '7': 'Spirit Blossom Yone (Tanzanite)', '8': 'Spirit Blossom Yone (Night Blossom)', '10': 'Battle Academia Yone', '19': 'Dawnbringer Yone', '25': 'Dawnbringer Yone (Lifebringer)', '26': 'Ocean Song Yone', '31': 'Ocean Song Yone (Catseye)', '32': 'Ocean Song Yone (Tanzanite)', '35': 'Inkshadow Yone', '40': 'Inkshadow Yone (Tanzanite)', '44': 'Inkshadow Yone (Inked)', '45': 'HEARTSTEEL Yone', '46': 'Prestige HEARTSTEEL Yone' },
  'Yorick': { '1': 'Undertaker Yorick', '2': 'Pentakill Yorick', '3': 'Arclight Yorick', '4': 'Meowrick', '6': 'Meowrick (Catseye)', '8': 'Meowrick (Rainbow)', '10': 'Meowrick (Sandstone)', '12': 'Resistance Yorick', '14': 'Resistance Yorick (Catseye)', '17': 'Resistance Yorick (Tanzanite)', '21': 'Pentakill III: Lost Chapter Yorick', '26': 'Pentakill III: Lost Chapter Yorick (Tanzanite)', '30': 'Spirit Blossom Yorick', '39': 'Spirit Blossom Yorick (Night Blossom)', '40': 'Dark Star Yorick' },
  'Zed': { '1': 'Shockblade Zed', '2': 'SKT T1 Zed', '3': 'PROJECT: Zed', '5': 'Shockblade Zed (Catseye)', '10': 'Worlds 2016 Zed', '11': 'Death Sworn Zed', '12': 'Worlds 2016 Zed (Golden)', '13': 'Galaxy Slayer Zed', '14': 'PROJECT: Zed (Reckoning)', '15': 'PsyOps Zed', '19': 'PsyOps Zed (Hunter)', '20': 'PsyOps Zed (Sandstone)', '22': 'PsyOps Zed (Tanzanite)', '29': 'Galaxy Slayer Zed (Merc)', '30': 'Prestige PROJECT: Zed' },
  'Ziggs': { '1': 'Mad Scientist Ziggs', '2': 'Major Ziggs', '3': 'Pool Party Ziggs', '4': 'Snow Day Ziggs', '5': 'Master Arcanist Ziggs', '6': 'Battle Boss Ziggs', '7': 'Odyssey Ziggs', '14': 'Sugar Rush Ziggs', '16': 'Sugar Rush Ziggs (Catseye)', '20': 'Sugar Rush Ziggs (Sandstone)', '21': 'Sugar Rush Ziggs (Sweet Tooth)', '22': 'Sugar Rush Ziggs (Meteorite)', '23': 'Hextech Ziggs', '24': 'BZZZiggs', '26': 'BZZZiggs (Tanzanite)' },
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
