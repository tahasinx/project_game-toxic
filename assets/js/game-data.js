/* ==================================================================================================================================

Random Player Names

===================================================================================================================================== */

// First name array
const firstNames = {
  male: ['Emile', 'Lyle', 'Graham', 'Julian', 'Morris', 'Rubin', 'Ricardo', 'Jackson', 'Micheal', 'Maria', 'Mckinley', 'Numbers', 'Larry', 'Williams', 'Asa', 'Cleo', 'Shayne', 'Thomas', 'Rico', 'Gregory', 'Adalberto', 'Jessie', 'Byron', 'Gregg', 'Brice', 'Leland', 'Coy', 'Erik', 'Guadalupe', 'Weston', 'Edison', 'Colin', 'Marcelo', 'Danial', 'Jamal', 'Clair', 'Evan', 'Kelly', 'Cornelius', 'Timothy', 'Errol', 'Jame', 'Jules', 'Russel', 'Courtney', 'Deandre', 'Jefferson', 'Brock', 'Huey', 'Kenneth', 'Isreal', 'Jeromy', 'Sherwood', 'Jerrold', 'Harry', 'Taylor', 'Bart', 'Chase', 'Rosendo', 'Vincent', 'Dominic', 'Cristobal', 'Jc', 'Donte', 'Brian', 'William', 'Russ', 'Olen', 'Nelson', 'Bruce', 'Troy', 'Hobert', 'Bernardo', 'Eloy', 'Bradford', 'Coleman', 'Alexis', 'Mitchell', 'Felton', 'Willie', 'Lou', 'Malcolm', 'Kendall', 'Emil', 'Myles', 'Craig', 'Willy', 'Kent', 'Austin', 'Michel', 'Chad', 'Genaro', 'Cameron', 'Neville', 'Antwan', 'Fernando', 'Quentin', 'Maxwell', 'Patrick', 'Hal'],
  female: ['Sharlene', 'Marisa', 'Christy', 'Julianne', 'Lesley', 'Marlene', 'Inez', 'Earlene', 'Natalie', 'Gina', 'Deena', 'Lucille', 'Barbara', 'Mitzi', 'Ida', 'Maryann', 'Mai', 'Mara', 'Susan', 'Trudy', 'Esther', 'Janell', 'Madge', 'Dena', 'Lillie', 'Jennie', 'Katina', 'Mindy', 'Goldie', 'Jessica', 'Amie', 'Lolita', 'Beryl', 'April', 'Maria', 'Deloris', 'Roslyn', 'Liza', 'Grace', 'Dee', 'Luella', 'Angie', 'Juanita', 'Kaitlin', 'Jordan', 'Kari', 'Lucile', 'Susie', 'Ollie', 'Tammy', 'Paige', 'Alissa', 'Shelley', 'Matilda', 'Gloria', 'Shana', 'Cleo', 'Lindsay', 'Candy', 'Katheryn', 'Amber', 'Hilda', 'Cecelia', 'Polly', 'Brandy', 'Bessie', 'Deidre', 'Virginia', 'Francine', 'Lorna', 'Antonia', 'Debra', 'Manuela', 'Althea', 'Liliana', 'Penny', 'Elizabeth', 'Kayla', 'Stacie', 'Leona', 'Allie', 'Marjorie', 'Felecia', 'Paula', 'Ursula', 'Janine', 'Valeria', 'Nikki', 'Toni', 'Elinor', 'Lauren', 'Shelly', 'Noemi', 'Angelina', 'Beatriz', 'Lila', 'Cathryn', 'Sherrie', 'Ada', 'Tonia'],
  genderfree: ['Sharlene', 'Marisa', 'Christy', 'Julianne', 'Lesley', 'Marlene', 'Inez', 'Earlene', 'Natalie', 'Gina', 'Deena', 'Lucille', 'Barbara', 'Mitzi', 'Ida', 'Maryann', 'Mai', 'Mara', 'Susan', 'Trudy', 'Esther', 'Janell', 'Madge', 'Dena', 'Lillie', 'Jennie', 'Katina', 'Mindy', 'Goldie', 'Jessica', 'Amie', 'Lolita', 'Beryl', 'April', 'Maria', 'Deloris', 'Roslyn', 'Liza', 'Grace', 'Dee', 'Luella', 'Angie', 'Juanita', 'Kaitlin', 'Jordan', 'Kari', 'Lucile', 'Susie', 'Ollie', 'Tammy', 'Paige', 'Alissa', 'Shelley', 'Matilda', 'Gloria', 'Shana', 'Cleo', 'Lindsay', 'Candy', 'Katheryn', 'Amber', 'Hilda', 'Cecelia', 'Polly', 'Brandy', 'Bessie', 'Deidre', 'Virginia', 'Francine', 'Lorna', 'Antonia', 'Debra', 'Manuela', 'Althea', 'Liliana', 'Penny', 'Elizabeth', 'Kayla', 'Stacie', 'Leona', 'Allie', 'Marjorie', 'Felecia', 'Paula', 'Ursula', 'Janine', 'Valeria', 'Nikki', 'Toni', 'Elinor', 'Lauren', 'Shelly', 'Noemi', 'Angelina', 'Beatriz', 'Lila', 'Cathryn', 'Sherrie', 'Ada', 'Tonia', 'Emile', 'Lyle', 'Graham', 'Julian', 'Morris', 'Rubin', 'Ricardo', 'Jackson', 'Micheal', 'Maria', 'Mckinley', 'Numbers', 'Larry', 'Williams', 'Asa', 'Cleo', 'Shayne', 'Thomas', 'Rico', 'Gregory', 'Adalberto', 'Jessie', 'Byron', 'Gregg', 'Brice', 'Leland', 'Coy', 'Erik', 'Guadalupe', 'Weston', 'Edison', 'Colin', 'Marcelo', 'Danial', 'Jamal', 'Clair', 'Evan', 'Kelly', 'Cornelius', 'Timothy', 'Errol', 'Jame', 'Jules', 'Russel', 'Courtney', 'Deandre', 'Jefferson', 'Brock', 'Huey', 'Kenneth', 'Isreal', 'Jeromy', 'Sherwood', 'Jerrold', 'Harry', 'Taylor', 'Bart', 'Chase', 'Rosendo', 'Vincent', 'Dominic', 'Cristobal', 'Jc', 'Donte', 'Brian', 'William', 'Russ', 'Olen', 'Nelson', 'Bruce', 'Troy', 'Hobert', 'Bernardo', 'Eloy', 'Bradford', 'Coleman', 'Alexis', 'Mitchell', 'Felton', 'Willie', 'Lou', 'Malcolm', 'Kendall', 'Emil', 'Myles', 'Craig', 'Willy', 'Kent', 'Austin', 'Michel', 'Chad', 'Genaro', 'Cameron', 'Neville', 'Antwan', 'Fernando', 'Quentin', 'Maxwell', 'Patrick', 'Hal'] };


// Last name array
const lastNames = ['Briggs', 'Calhoun', 'Carey', 'Schultz', 'Barker', 'Zimmerman', 'Crosby', 'Cortez', 'Bridges', 'Sims', 'Ayala', 'Kennedy', 'Rhodes', 'Gordon', 'Allen', 'Whitaker', 'Hansen', 'Murphy', 'Roberts', 'Casey', 'Avila', 'Goodman', 'Turner', 'Graves', 'Woodward', 'Berger', 'Meyers', 'Wang', 'Mcfarland', 'Beasley', 'Hamilton', 'Ewing', 'Hunter', 'Molina', 'Taylor', 'Roth', 'Mcdaniel', 'Phelps', 'Le', 'Bush', 'Haney', 'Leach', 'French', 'Ryan', 'Espinoza', 'Oconnor', 'Estes', 'Odom', 'Brennan', 'Chandler', 'Rose', 'Kaiser', 'Miller', 'Orozco', 'Thornton', 'Garza', 'Rice', 'Perez', 'Gonzalez', 'Bennett', 'Kidd', 'Church', 'Wolf', 'Russo', 'Mcbride', 'Reynolds', 'Schroeder', 'Mccarthy', 'Tate', 'Ochoa', 'Keith', 'Petersen', 'Green', 'Patel', 'Gaines', 'Barrett', 'Daniels', 'Williamson', 'Gilbert', 'Swanson', 'Beard', 'Jacobs', 'Rodgers', 'Carlson', 'Huerta', 'Burton', 'Davenport', 'Lynch', 'Abbott', 'Sloan', 'Hancock', 'Reid', 'Sosa', 'Mcclain', 'Gilmore', 'Cervantes', 'Khan', 'Jenkins', 'Lester', 'Escobar'];

/* ==================================================================================================================================

Careers

===================================================================================================================================== */
/*
hunger - increases hunger drain per day
thirst - increases hunger drain per day

fitness - dedcrease how much energy you spend scanvging //
cooking - increases how much food fillsyou up //
sleep - increase how much energy you regain per sleep
healing - increases how much meds heal you //
stealth - decreases chance of enemies eeing you
resistance - decreases damage done //
looting - increases looting chance
vitality - increase your max health
*/
// Careers array
const careers = {
  0: {
    'careerName': 'Athelete',
    'flavourText': 'You have an edge over the monsters. They are fast, but you are faster. Lets see if they can keep up.',
    'attribute': {
      'attributeName': 'fitness',
      'attributeChange': 5 } },


  1: {
    'careerName': 'Sous Chef',
    'flavourText': 'You know how to make a meal out of mulch. Shame those dreams of opening a restaurant are over.',
    'attribute': {
      'attributeName': 'cooking',
      'attributeChange': 5 } },


  2: {
    'careerName': 'Doctor',
    'flavourText': 'You have an expert knowledge of medicines. Gaping leg wound? You can patch that in a jiffy!',
    'attribute': {
      'attributeName': 'healing',
      'attributeChange': 5 } },


  3: {
    'careerName': 'Police Officer',
    'flavourText': 'Ello ello. What have we here then? Do you know how fast you were driving sir?',
    'attribute': {
      'attributeName': 'vitality',
      'attributeChange': 5 } },


  4: {
    'careerName': 'Petty Thief',
    'flavourText': "All those years picking pockets means your pretty nifty at finding things. A handy skill in the apocolypse.",
    'attribute': {
      'attributeName': 'looting',
      'attributeChange': 5 } },


  5: {
    'careerName': 'Contract Killer',
    'flavourText': 'Monsters? Pah, no problem. You have nothing to fear...except starvation ofcourse.',
    'attribute': {
      'attributeName': 'stealth',
      'attributeChange': 5 } },


  6: {
    'careerName': 'Boxer',
    'flavourText': 'Youre a heavyweight champion. Next match? You vs the dead. Ding ding. Round 1. Fight....for your life.',
    'attribute': {
      'attributeName': 'resistance',
      'attributeChange': 10 } },


  7: {
    'careerName': 'Scientist',
    'flavourText': 'You were a proper boffin before the infection came. Youre smart, like really smart. You learn new skills quicker.',
    'attribute': {
      'attributeName': 'intelligence',
      'attributeChange': 10 } } };




/* ==================================================================================================================================

Traits

===================================================================================================================================== */
/*
hunger - increases hunger drain per day//
thirst - increases hunger drain per day//
fitness - dedcrease how much energy you spend scanvging//
cooking - increases how much food fillsyou up//

sleep - increase how much energy you regain per sleep
healing - increases how much meds heal you//
stealth - decreases chance of enemies eeing you//
resistance - decreases damage done//
looting - increases looting chance//
vitality - increase your max health//
*/

const tooltips = {
  "hunger": 'The hunger stat reflects how much hunger is drained per game day',
  "thirst": 'The thirst stat reflects how much thirst is drained per game day',
  "fitness": 'The fitness stat reflects how much energy is consumed during scavenging',
  "cooking": 'The cooking stat reflects how much food fills up your hunger bar',
  "sleep": 'The sleep stat reflects how much energy you regain when resting',
  "healing": 'The healing stat reflect how much medical supplies heal you',
  "stealth": 'The steal stat reflects your chances of being noticed by enemies',
  "resistance": 'The resistance stat reflects how much damage you take from enemies',
  "looting": 'The looting stat reflects your chances of finding loot when scavenging',
  "vitality": 'The vitality stat reflects the maximum health you have available',
  "intelligence": 'The intelligence stat reflects the amount of experience you get when scavenging.' };


const traits = {
  'negative': {
    0: {
      'traitName': 'Chain smoker',
      'flavourText': 'Fitness increases your chances of escaping conflicts.',
      'attribute': {
        'attributeName': 'fitness',
        'attributeChange': -5 } },


    1: {
      'traitName': 'High metabolism',
      'flavourText': 'Your hunger stat reflects how much your hunger increases after activity.',
      'attribute': {
        'attributeName': 'hunger',
        'attributeChange': 5 } },


    2: {
      'traitName': 'Overactive sweat glands',
      'flavourText': 'Your thirst stat reflects how much your thirst increases after activity.',
      'attribute': {
        'attributeName': 'thirst',
        'attributeChange': 5 } },


    3: {
      'traitName': 'Nyctophobia',
      'flavourText': 'Your thirst stat reflects how much your thirst increases after activity.',
      'attribute': {
        'attributeName': 'sleep',
        'attributeChange': -5 } },


    4: {
      'traitName': 'Student',
      'flavourText': 'Your cooking stat reflects how much food satisfies your hunger.',
      'attribute': {
        'attributeName': 'cooking',
        'attributeChange': -5 } },


    5: {
      'traitName': 'Glaucoma',
      'flavourText': 'Your looting stat reflects your chances of receiveing loot when scavenging.',
      'attribute': {
        'attributeName': 'looting',
        'attributeChange': -5 } },


    6: {
      'traitName': 'White coat syndrom',
      'flavourText': 'Your vitality stat reflects your total health.',
      'attribute': {
        'attributeName': 'vitality',
        'attributeChange': -5 } },


    7: {
      'traitName': 'Hemophobic',
      'flavourText': 'Your healing stat reflects how much medical supplies heal you.',
      'attribute': {
        'attributeName': 'healing',
        'attributeChange': -5 } },


    8: {
      'traitName': 'Osteoperosis',
      'flavourText': 'Your resistance stat reflects how much damage you take.',
      'attribute': {
        'attributeName': 'resistance',
        'attributeChange': -5 } },


    9: {
      'traitName': 'Vertigo',
      'flavourText': 'Your speed stat reflects your attack speed.',
      'attribute': {
        'attributeName': 'stealth',
        'attributeChange': -5 } },


    10: {
      'traitName': 'Low IQ',
      'flavourText': 'Your speed stat reflects your attack speed.',
      'attribute': {
        'attributeName': 'intelligence',
        'attributeChange': -5 } } },




  'positive': {
    0: {
      'traitName': 'Gym addict',
      'flavourText': 'Fitness increases your chances of escaping conflicts.',
      'attribute': {
        'attributeName': 'fitness',
        'attributeChange': 5 } },


    1: {
      'traitName': 'Skinny',
      'flavourText': 'Your hunger stat reflects how much your hunger increases after activity.',
      'attribute': {
        'attributeName': 'hunger',
        'attributeChange': -5 } },


    2: {
      'traitName': 'Experienced Water faster',
      'flavourText': 'Your thirst stat reflects how much your thirst increases after activity.',
      'attribute': {
        'attributeName': 'thirst',
        'attributeChange': -5 } },


    3: {
      'traitName': 'Heavy sleeper',
      'flavourText': 'Your thirst stat reflects how much your thirst increases after activity.',
      'attribute': {
        'attributeName': 'sleep',
        'attributeChange': 5 } },


    4: {
      'traitName': 'Foodie',
      'flavourText': 'Your cooking stat reflects how much food satisfies your hunger.',
      'attribute': {
        'attributeName': 'cooking',
        'attributeChange': 5 } },


    5: {
      'traitName': 'Keen eye',
      'flavourText': 'Your looting stat reflects your chances of receiveing loot when scavenging.',
      'attribute': {
        'attributeName': 'looting',
        'attributeChange': 5 } },


    6: {
      'traitName': 'Vegan',
      'flavourText': 'Your vitality stat reflects your total health.',
      'attribute': {
        'attributeName': 'vitality',
        'attributeChange': 5 } },


    7: {
      'traitName': 'First aider',
      'flavourText': 'Your healing stat reflects how much medical supplies heal you.',
      'attribute': {
        'attributeName': 'healing',
        'attributeChange': 5 } },


    8: {
      'traitName': 'Big boned',
      'flavourText': 'Your resistance stat reflects how much damage you take.',
      'attribute': {
        'attributeName': 'resistance',
        'attributeChange': 5 } },


    9: {
      'traitName': 'Light footed',
      'flavourText': 'Your speed stat reflects your attack speed.',
      'attribute': {
        'attributeName': 'stealth',
        'attributeChange': 5 } },


    10: {
      'traitName': 'Genius',
      'flavourText': 'Your speed stat reflects your attack speed.',
      'attribute': {
        'attributeName': 'intelligence',
        'attributeChange': 5 } } } };





/* ==================================================================================================================================

Character data set up

===================================================================================================================================== */

var characterData = {
  'name': '',
  'gender': '',
  'age': '',
  'career': '',
  'traits': [],
  'attributes': {
    'fitness': 0,
    'hunger': 0,
    'thirst': 0,
    'cooking': 0,
    'looting': 0,
    'vitality': 0,
    'healing': 0,
    'resistance': 0,
    'stealth': 0,
    'sleep': 0,
    'intelligence': 0 } };





const rambles = [
"What was that sound?",
"I hope they don't see me",
"Hmmm maybe I could find something in here",
"Nothing here but dirt",
"I hope i don't get lost",
"It's very cold today",
"My feet are starting to hurt",
"I wonder if theres any other survivors",
"Hmmm, I could check in here",
"Is that some glowing eyes i see in the dark?",
"Look at the state of this place",
"Woah, almost lost my footing there",
"I'm getting blisters from all this walking",
"Just a quick rest and i'll get back to it",
"Just having a quick breather",
"It just so quiet out here",
"Theres a bunch of totalled cars here. I'll try make my way around them",
"Smells like burning corpses around here",
"God, what's that smell?",
"Looks like theres nothing that way, i'd better turn around",
"I thought i'd find something useful here. But alas, nothing",
"This place has already been looted",
"Not a morsel in sight",
"This place has been ransacked",
"This looks promising, there could be something useful in here",
"I can hear screams in the distance",
"I hope my flashlight doesnt cut out",
"Hello? Is someone there?",
"I can't see a thing with all this smog",
"There something growling in the distance",
"Theres so much debris here",
"Someones already been here",
"It's so cold i can't feel my toes",
"My shoes have holes in them",
"I'm so lonely",
"I wonder if it's this bad everywhere",
"I'm going to take a look in here",
"Nothing",
"Nope",
"It's empty",
"There's nothing here I can use",
"I can't use this",
"Nothing here, that's a shame",
"It's too dark in here to loot",
"Looted already",
"It's already looted in here",
"What a dissapointment",
"Maybe I'll be lucky and find something here",
"Maybe I can squeeze through this gap",
"My back hurts",
"This smog is giving me a headache",
"Can't find anything here. I'll move on",
"Maybe theres something in the trash",
"Is that a light in the distance?",
"I never asked for this",
"I could kill for a cup of Yorkshire Tea",
"I need to take a break",
"My calves are burning",
"What is this place?",
"I recognise this place",
"I think i've been here before",
"There has to be something i can use in here",
"Damn. Doors are locked",
"Maybe I can get in through the window",
"I hope there are no creatures in here",
"I dont think i can go on much longer",
"Let's check this place out",
"Let me quickly look in here",
"I dont think i've been here before",
"Please let me find some food in here",
"Nada",
"Not a scrap of food here",
"Nothing useful",
"This water is poisoned, i can't drink this",
"So many dead. So sad",
"This place is littered with the dead",
"I cant go down there, far too risky",
"I think something is behind me",
"What was that?",
"I miss my family",
"I miss the old days before they came",
"I miss my dog",
"I miss my partner",
"Better check the time",
"I'll sleep tonight that's for sure",
"Better watch my footing here",
"This place has been stripped clean",
"There is absolutely nothing here",
"Just a bunch of empty food cans",
"Just trash here",
"Nothing here but a pile of old books",
"There some old shoes here, shame they aren't my size",
"I can see the old church in the distance",
"Just a quick sit down",
"Just catching my breath",
"The floor in here is littered with bullet casings",
"The walls here are peppered with bullet holes",
"There were people here. Recently",
"Theres the remains of an old campfire here",
"It's getting windy",
"What time is it?",
"I miss my sister",
"I miss my brother",
"The floor in here is thick with dust"];


const locations = [
"inside an old rusty bin",
"inside an delapetated shack",
"inside a dead mans pocket",
"inside an abondoned church",
"inside the trunk of a car",
"inside the glove compartment of a car",
"inside a ransacked post office",
"inside a gloomy apartment complex",
"inside a phone booth",
"under an old bench",
"inside a derelict school",
"in the back of an army vehicle",
"inside a convenience store refrigerator",
"on a convenience store shelf",
"behind the register of a small shop",
"in a rusty barrel",
"in someones garden",
"in someones kitchen cupbaord",
"in a coffee shop",
"in a furniture store",
"in a sandwhich shop",
"in a store room",
"in an antiques store",
"in a bakery",
"in a butchers shop",
"in a bank",
"in a bookshop",
"in a salon",
"in a chemist",
"in a fishmongers",
"in a florists",
"in a laundrette",
"in a jeweler shop",
"in a sportswear store",
"in a supermarket",
"in a department store",
"in a drugstore",
"in a dry cleaners",
"in a garage",
"next to pile of corpses",
"next to a pile of old books",
"inside a pile of rags",
"next to an abandoned tent",
"next to the remains of a campfire",
"inside a bunker",
"next to a pile of rubble",
"in a chest of drawers",
"in someones freezer",
"in someones wardrobe",
"under someones stairs",
"in someones basement",
"in the back of a car",
"in the back of a pickup truck",
"in a school bus",
"in someones shed",
"in an abandoned mine shaft",
"underneath an old hospital bed",
"in a supply cupboard",
"in a puddle of filthy water",
"in a safe",
"in a wrecked car",
"in someones backpack",
"in an abandoned theme park",
"in an empty cinema",
"in a dilapidated school building",
"in an empty swimming pool",
"in an overgrown greenhouse",
"in a mouldy outhouse",
"in some boggy countryside",
"in an dark forest",
"in an unused garage",
"in a Manor House",
"on a quiet rural road",
"A private airfield",
"on an ancient bridle way",
"Under the viaduct of a disused railway bridge",
"in a rundown hotel"];


const enemies = [
"bandit(s)",
"creeper(s)",
"undead(s)",
"bog monster(s)"];


const items = {
  'food': {
    'item': 'food',
    'colloquial': [
    "can(s) of dog food",
    "can(s) of tuna fish",
    "moldy loaf(s) of bread",
    "jar(s) of pickles",
    "box(s) of cereal",
    "box(s) of crackers",
    "old potatote(s)",
    "rotten apple(s)",
    "rotten banana(s)",
    "piece(s) of blue cheese",
    "can(s) of soup",
    "pack(s) of biscuits",
    "moldy orange(s)",
    "bag(s) of rice",
    "old radish(s)",
    "can(s) of peaches",
    "can(s) of tomatoes",
    "can(s) of kidney beans",
    "can(s) of lentils",
    "can(s) of chickpeas",
    "can(s) of spam",
    "moldy yam(s)",
    "old turnip(s)",
    "rotten pumpkin(s)",
    "carrot(s)",
    "can(s) of peas",
    "chocolate bar(s)",
    "bag(s) of jerky",
    "piece(s) of meat",
    "can(s) of salmon",
    "bag(s) of peanuts",
    "bag(s) of cashews",
    "pickle(s)"] },


  'water': {
    'item': 'water',
    'colloquial': [
    "jar(s) of dirt rain water",
    "can(s) of soda",
    "cartons(s) of fruit juice",
    "litre(s) of stagnent water",
    "can(s) of cola",
    "bottle(s) of water",
    "bottles(s) of orange juice",
    "bottles(s) of apple juice",
    "bottles(s) of pineapple juice",
    "bottles(s) of milk",
    "bottles(s) of lemonade",
    "bottles(s) of iced tea",
    "bottles(s) of iced coffee",
    "bottles(s) of gin",
    "bottles(s) of whisky",
    "bottles(s) of vodka"] },


  'meds': {
    'item': 'meds',
    'colloquial': [
    "bandage(s)",
    "bandage(s)",
    "pack(s) of aspirin",
    "pack(s) of paracetamol",
    "band aid(s)",
    "bottle(s) of herbal remedy",
    "bottle(s) of medical alcohol",
    "Antibiotic(s)"] } };




class Grain {
  constructor(el) {
    /**
     * Options
     * Increase the pattern size if visible pattern
     */
    this.patternSize = 150;
    this.patternScaleX = .1;
    this.patternScaleY = .1;
    this.patternRefreshInterval = 3; // 8
    this.patternAlpha = 13; // int between 0 and 255,

    /**
     * Create canvas
     */
    this.canvas = el;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.scale(this.patternScaleX, this.patternScaleY);

    /**
     * Create a canvas that will be used to generate grain and used as a
     * pattern on the main canvas.
     */
    this.patternCanvas = document.createElement('canvas');
    this.patternCanvas.width = this.patternSize;
    this.patternCanvas.height = this.patternSize;
    this.patternCtx = this.patternCanvas.getContext('2d');
    this.patternData = this.patternCtx.createImageData(this.patternSize, this.patternSize);
    this.patternPixelDataLength = this.patternSize * this.patternSize * 4; // rgba = 4

    /**
     * Prebind prototype function, so later its easier to user
     */
    this.resize = this.resize.bind(this);
    this.loop = this.loop.bind(this);

    this.frame = 0;

    window.addEventListener('resize', this.resize);
    this.resize();

    window.requestAnimationFrame(this.loop);
  }

  resize() {
    this.canvas.width = window.innerWidth * devicePixelRatio;
    this.canvas.height = window.innerHeight * devicePixelRatio;
  }

  update() {
    const { patternPixelDataLength, patternData, patternAlpha, patternCtx } = this;

    // put a random shade of gray into every pixel of the pattern
    for (let i = 0; i < patternPixelDataLength; i += 4) {
      // const value = (Math.random() * 255) | 0;
      const value = Math.random() * 255;

      patternData.data[i] = value;
      patternData.data[i + 1] = value;
      patternData.data[i + 2] = value;
      patternData.data[i + 3] = patternAlpha;
    }

    patternCtx.putImageData(patternData, 0, 0);
  }

  draw() {
    const { ctx, patternCanvas, canvas, viewHeight } = this;
    const { width, height } = canvas;

    // clear canvas
    ctx.clearRect(0, 0, width, height);

    // fill the canvas using the pattern
    ctx.fillStyle = ctx.createPattern(patternCanvas, 'repeat');
    ctx.fillRect(0, 0, width, height);
  }

  loop() {
    // only update grain every n frames
    const shouldDraw = ++this.frame % this.patternRefreshInterval === 0;
    if (shouldDraw) {
      this.update();
      this.draw();
    }

    window.requestAnimationFrame(this.loop);
  }}




/**
     * Initiate Grain
     */

const el = document.querySelector('.grain');
const grain = new Grain(el);
split = function (element) {
  words = $(element).text().split('');
  for (i in words) {
    words[i] = '<span>' + words[i] + '</span>';
  }
  text = words.join('');
  $(element).html(text);
};
