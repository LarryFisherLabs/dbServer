const topLevel = 8
const antennaAndHolsterAndLegGearAndEyePatchLevel = 2
const helmetAndNvgLevel = 7
const headGearLevel = topLevel
const faceAndOpticGearAndToolAndWatchLevel = 6
const faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel = 1
const neckGearLevel = 5
const bandoLevel = 4
const bodyGearLevel = 3
const backgroundLevel = 0

// CUSTOM
// Jimmy: 9 traits, 46 points
// Tommy: 9, 45 points
// Hayden: 8, 41 points
// Jeff: 7, 42 points
// Giveaway: 6, 33 points
// Ian: 4, 29 points
// Sam: 4, 23 points
// Amanda: 4, 22 points
// Cole: 4, 20 points
// Nick: 3, 18 points
// Noah: 3, 21 points
// Jen: 3, 18 points
// Evrim: 3, 17 points
// Alex: 3, 17 points
// Justin: 3, 20 points
// Ben: 3, 19 points
// Dante: 3, 17 points
// Josh: 3, 16 points
// Abbi: 3, 16 points
// Mike: 3, 19 points
// Austin: 2, 14 points
// Johnny: 2, 11 points

// antenna is on top of vehicle
const antenna = [
    {
        name: '0-ant-antenna',
        rarity: 0,
        layerLevel: antennaAndHolsterAndLegGearAndEyePatchLevel,
    },
    {
        name: '1-tied-antenna',
        rarity: 1,
        layerLevel: antennaAndHolsterAndLegGearAndEyePatchLevel,
    },
    {
        name: '2-broken-antenna',
        rarity: 3,
        layerLevel: antennaAndHolsterAndLegGearAndEyePatchLevel,
    }
]

// head gear goes on top of everything besides helmets under nvg
const headGear = [
    {
        name: 'empty',
    },
    {
        name: '1-baseball-cap',
        rarity: 0,
        layerLevel: headGearLevel,
    },
    {
        name: '2-desert-baseball-cap',
        rarity: 0,
        layerLevel: headGearLevel,
    },
    {
        name: '3-helmet',
        rarity: 0,
        layerLevel: helmetAndNvgLevel,
    },
    {
        name: '4-desert-helmet',
        rarity: 0,
        layerLevel: helmetAndNvgLevel,
    },
    {
        name: '5-helmet-with-strap',
        rarity: 0,
        layerLevel: helmetAndNvgLevel,
    },
    {
        name: '6-tanker-cap',
        rarity: 1,
        layerLevel: headGearLevel,
    },
    {
        name: '7-trucker-cap',
        rarity: 1,
        layerLevel: headGearLevel,
        isMidTall: true,

    },
    {
        name: '8-boonie',
        rarity: 2,
        layerLevel: headGearLevel,
    },
    {
        name: '9-desert-boonie',
        rarity: 2,
        layerLevel: headGearLevel,
    },
    {
        name: '10-beret',
        rarity: 2,
        layerLevel: headGearLevel,
    },
    {
        name: '11-racing-helmet',
        rarity: 2,
        layerLevel: headGearLevel,
        isMidTall: true,
        isEODHeadRestrictions: true,

    },
    {
        name: '12-headband',
        rarity: 3,
        layerLevel: headGearLevel,
    },
    {
        name: '13-dress-cap',
        rarity: 3,
        layerLevel: headGearLevel,
    },
    {
        name: '14-desert-dress-cap',
        rarity: 3,
        layerLevel: headGearLevel,
    },
    {
        name: '15-combat-headset',
        rarity: 3,
        layerLevel: headGearLevel,

    },
    {
        name: '16-black-helmet-with-strap',
        rarity: 3,
        layerLevel: helmetAndNvgLevel,

    },
    {
        name: '17-helmet-with-headset',
        rarity: 4,
        layerLevel: helmetAndNvgLevel,

    },
    {
        name: '18-helmet-with-webbing',
        rarity: 4,
        layerLevel: helmetAndNvgLevel,
    },
    {
        name: '19-eod-mask',
        rarity: 4,
        layerLevel: headGearLevel,
    },
    {
        name: '20-m81-helmet-with-strap',
        rarity: 4,
        layerLevel: helmetAndNvgLevel,

    },
    {
        // CUSTOM: Hayden
        name: '21-uni-hat',
        rarity: 5,
        layerLevel: headGearLevel,
        isTall: true,

    },
    {
        // CUSTOM: Evrim
        name: '22-flamed-racing-helmet',
        rarity: 5,
        layerLevel: headGearLevel,
        isMidTall: true,
        isEODHeadRestrictions: true,

    },
    {
        // CUSTOM: Abbi
        name: '23-monarch-helmet',
        rarity: 5,
        layerLevel: helmetAndNvgLevel,

    },
    {
        // CUSTOM: Amanda
        name: '24-heart-helmet',
        rarity: 5,
        layerLevel: helmetAndNvgLevel,

    },
    {
        // CUSTOM: Johnny
        name: '25-ny-helmet',
        rarity: 5,
        layerLevel: helmetAndNvgLevel,

    },
    {
        // CUSTOM: Cole
        name: '26-painted-helmet',
        rarity: 5,
        layerLevel: helmetAndNvgLevel,

    },
    {
        // CUSTOM: Sam
        name: '27-chef-hat',
        rarity: 6,
        layerLevel: headGearLevel,
        isTall: true,

    },
    {
        // CUSTOM: Giveaway
        name: '28-uncle-sam-hat',
        rarity: 6,
        layerLevel: headGearLevel,
        isTall: true,

    },
    {
        // CUSTOM: Ben
        name: '29-black-trucker-cap',
        rarity: 6,
        layerLevel: headGearLevel,
        isMidTall: true,

    },
    {
        // CUSTOM: Jen
        name: '30-cat-helmet',
        rarity: 6,
        layerLevel: helmetAndNvgLevel,
        isMidTall: true,

    },
    {
        // CUSTOM: Dante
        name: '31-orange-headband',
        rarity: 6,
        layerLevel: headGearLevel,

    },
    {
        // CUSTOM: Mike
        name: '32-fishing-boonie',
        rarity: 6,
        layerLevel: headGearLevel,

    },
    {
        // CUSTOM: Tommy
        name: '33-tiger-cap',
        rarity: 6,
        layerLevel: headGearLevel,

    },
    {
        // CUSTOM: Josh
        name: '34-peace-sign-m81-helm',
        rarity: 6,
        layerLevel: helmetAndNvgLevel,

    },
    {
        // CUSTOM: Jimmy
        name: '35-desperado-hat',
        rarity: 6,
        layerLevel: headGearLevel,

    },
    {
        // CUSTOM: Nick
        name: '36-welding-helmet',
        rarity: 7,
        layerLevel: headGearLevel,
        isEODHeadRestrictions: true,

    },
    {
        name: '37-cavalry-cover',
        rarity: 7,
        layerLevel: headGearLevel,

    },
    {
        // CUSTOM: Jeff
        name: '38-purple-helmet',
        rarity: 7,
        layerLevel: helmetAndNvgLevel,

    },
    {
        // CUSTOM: Ian
        name: '39-shrouded-helmet',
        rarity: 8,
        layerLevel: headGearLevel,
        isMidTall: true,

    }
]

// goes beneath head gear
const faceGear = [
    {
        name: 'empty',
    },
    {
        name: '1-surgeon-mask',
        rarity: 1,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,
        isMouthCovered: true,

    },
    {
        name: '2-respirator',
        rarity: 1,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,
        isMouthCovered: true,

    },
    {
        name: '3-balaclava',
        rarity: 2,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,
    },
    {
        name: '4-tech-mask',
        rarity: 2,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,
        isMouthCovered: true,

    },
    {
        name: '5-desert-tech-mask',
        rarity: 2,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,
        isMouthCovered: true,

    },
    {
        name: '6-full-black-mask',
        rarity: 3,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,
        isMouthCovered: true,

    },
    {
        // CUSTOM: Jimmy
        name: '7-bandito-balaclava',
        rarity: 3,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,

    },
    {
        name: '8-cold-weather-mask',
        rarity: 4,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,
        isFaceCovered: true,
        isMouthCovered: true,

    },
    {
        name: '9-gas-mask',
        rarity: 4,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,
        isFaceCovered: true,
        isMouthCovered: true,
    },
    {
        name: '10-skull-mask',
        rarity: 4,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,
        isMouthCovered: true,

    },
    {
        // CUSTOM: Cole
        name: '11-painted-gas-mask',
        rarity: 6,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,
        isFaceCovered: true,
        isMouthCovered: true,

    },
    {
        // CUSTOM: Justin
        name: '12-road-fury-muzzle',
        rarity: 7,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,
        isMouthCovered: true,

    },
    {
        // CUSTOM: Jeff
        name: '13-gas-mask-bong',
        rarity: 8,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,
        isFaceCovered: true,
        isMouthCovered: true,

    }
]

// goes under head gear except for eyepatch which only goes on top of face accessories
const opticalGear = [
    {
        name: 'empty',
    },
    {
        // eye patch should go over face accessories and nothing else
        // !!! IF EYE PATCH STOPS BEING FIRST INDEX COMPATIBILITY CHANGES MUST BE MADE !!!
        name: '1-eyepatch',
        rarity: 1,
        layerLevel: antennaAndHolsterAndLegGearAndEyePatchLevel,
    },
    {
        name: '2-nerd-glasses',
        rarity: 1,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,

    },
    {
        name: '3-goggles',
        rarity: 2,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,
    },
    {
        name: '4-black-goggles',
        rarity: 2,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,

    },
    {
        name: '5-sunglasses',
        rarity: 3,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,
    },
    {
        name: '6-nvg',
        rarity: 3,
        layerLevel: helmetAndNvgLevel,
    },
    {
        // CUSTOM: Josh
        name: '7-cool-sunglasses',
        rarity: 4,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,

    },
    {
        // CUSTOM: Tommy
        name: '8-trooper-shades',
        rarity: 4,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,

    },
    {
        // CUSTOM: Hayden
        name: '9-uni-shades',
        rarity: 5,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,

    },
    {
        name: '10-drone-op-headset',
        rarity: 5,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,

    },
    {
        name: '11-general-sunglasses',
        rarity: 6,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,

    },
    {
        // CUSTOM: Giveaway
        name: '12-uncle-sam-glasses',
        rarity: 7,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,

    },
    {
        // CUSTOM: Jimmy
        name: '13-vaquero-sunglasses',
        rarity: 7,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,

    }
]

// nothing goes beneath face accessories so bottom non-background layer
const faceAccessories = [
    {
        name: 'empty',
    },
    {
        name: '1-black-eye',
        rarity: 0,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,

    },
    {
        name: '2-eye-black',
        rarity: 1,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,

    },
    {
        name: '3-face-shadow',
        rarity: 1,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,

    },
    {
        name: '4-eye-scar',
        rarity: 2,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,

    },
    {
        name: '5-smooches',
        rarity: 2,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,

    },
    {
        name: '6-claw-mark',
        rarity: 2,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,

    },
    {
        name: '7-skull',
        rarity: 3,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,

    },
    {
        name: '8-kiss',
        rarity: 4,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,

    },
    {
        name: '9-clown',
        rarity: 4,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,

    },
    {
        name: '10-muertos',
        rarity: 4,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,

    },
    {
        // CUSTOM: Alex
        name: '11-tear',
        rarity: 5,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,

    }
]

// nothing goes beneath mouth accessories so bottom non-background layer
const mouthAccessories = [
    {
        name: 'empty',
    },
    {
        name: '1-cigarette',
        rarity: 2,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,
    },
    {
        // CUSTOM: Jimmy
        name: '2-cigarillo',
        rarity: 3,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,

    },
    {
        name: '3-cigar',
        rarity: 4,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,
    },
    {
        // CUSTOM: Tommy
        name: '4-cuban-cigar',
        rarity: 5,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,

    }
]

// should go under face gear and on top of body gear and belts
const neckGear = [
    {
        name: '0-dog-tags',
        rarity: 0,
        layerLevel: neckGearLevel,
    },
    {
        name: '1-tags-with-bumper',
        rarity: 0,
        layerLevel: neckGearLevel,

    },
    {
        name: '2-shemagh',
        rarity: 0,
        layerLevel: neckGearLevel,
    },
    {
        name: '3-green-shemagh',
        rarity: 1,
        layerLevel: neckGearLevel,

    },
    {
        name: '4-white-shemagh',
        rarity: 2,
        layerLevel: neckGearLevel,

    },
    {
        name: '5-yellow-shemagh',
        rarity: 2,
        layerLevel: neckGearLevel,

    },
    {
        name: '6-royal-shemagh',
        rarity: 3,
        layerLevel: neckGearLevel,

    },
    {
        name: '7-ancient-dog-tags',
        rarity: 4,
        layerLevel: neckGearLevel,

    },
    {
        // CUSTOM: All but Ian incompat
        name: '8-gold-dog-tags',
        rarity: 6,
        layerLevel: neckGearLevel,

    }
]

// goes on top of body gear but under neck
const bandolierBelts = [
    {
        name: 'empty',
    },
    {
        name: '1-reflective-belt',
        rarity: 0,
        layerLevel: bandoLevel,
    },
    {
        name: '2-bandolier',
        rarity: 1,
        layerLevel: bandoLevel,
    },
    {
        name: '3-shotgun-bandolier',
        rarity: 2,
        layerLevel: bandoLevel,
    }
]

// goes under belt but on top of arm
const bodyGear = [
    {
        name: '0-tee-shirt',
        rarity: 0,
        layerLevel: bodyGearLevel,
    },
    {
        name: '1-desert-tee-shirt',
        rarity: 0,
        layerLevel: bodyGearLevel,
    },
    {
        name: '2-tank-top',
        rarity: 1,
        layerLevel: bodyGearLevel,
    },
    {
        name: '3-desert-tank-top',
        rarity: 1,
        layerLevel: bodyGearLevel,
    },
    {
        name: '4-beater',
        rarity: 1,
        layerLevel: bodyGearLevel,
    },
    {
        name: '5-tanker-jacket',
        rarity: 1,
        layerLevel: bodyGearLevel,
        hasSleeves: true,

    },
    {
        name: '6-pilot-jumpsuit-top',
        rarity: 2,
        layerLevel: bodyGearLevel,
        hasSleeves: true,

    },
    {
        name: '7-dress-uniform',
        rarity: 2,
        layerLevel: bodyGearLevel,
        hasSleeves: true,
    },
    {
        name: '8-desert-dress-uniform',
        rarity: 2,
        layerLevel: bodyGearLevel,
        hasSleeves: true,
    },
    {
        name: '9-tactical-sweater',
        rarity: 2,
        layerLevel: bodyGearLevel,
        hasSleeves: true,

    },
    {
        name: '10-command-uniform',
        rarity: 3,
        layerLevel: bodyGearLevel,
        hasSleeves: true,

    },
    {
        name: '11-plate-carrier',
        rarity: 3,
        layerLevel: bodyGearLevel,
    },
    {
        name: '12-desert-plate-carrier',
        rarity: 3,
        layerLevel: bodyGearLevel,
    },
    {
        name: '13-flak-vest',
        rarity: 3,
        layerLevel: bodyGearLevel,
    },
    {
        name: '14-desert-flak-vest',
        rarity: 3,
        layerLevel: bodyGearLevel,
    },
    {
        name: '15-black-plate-carrier',
        rarity: 4,
        layerLevel: bodyGearLevel,

    },
    {
        name: '16-bomber-jacket',
        rarity: 4,
        layerLevel: bodyGearLevel,
        hasSleeves: true,

    },
    {
        name: '17-leather-bomber-jacket',
        rarity: 4,
        layerLevel: bodyGearLevel,
        hasSleeves: true,

    },
    {
        name: '18-eod-suit',
        rarity: 4,
        layerLevel: bodyGearLevel,
    },
    {
        name: '19-ghillie',
        rarity: 4,
        layerLevel: bodyGearLevel,
    },
    {
        name: '20-m81-flak-vest',
        rarity: 4,
        layerLevel: bodyGearLevel,

    },
    {
        // CUSTOM: Giveaway
        name: '21-uncle-sam-shirt',
        rarity: 5,
        layerLevel: bodyGearLevel,
        hasSleeves: true,

    },
    {
        // CUSTOM: Ben
        name: '22-tee-shirt-with-cigs',
        rarity: 5,
        layerLevel: bodyGearLevel,

    },
    {
        // CUSTOM: Cole
        name: '23-suit',
        rarity: 5,
        layerLevel: bodyGearLevel,
        hasSleeves: true,

    },
    {
        // CUSTOM: Tommy
        name: '24-tiger-plate-carrier',
        rarity: 5,
        layerLevel: bodyGearLevel,

    },
    {
        // CUSTOM: Jimmy
        name: '25-sand-tiger-plate-carrier',
        rarity: 5,
        layerLevel: bodyGearLevel,

    },
    {
        // CUSTOM: Sam
        name: '26-chef-uniform',
        rarity: 5,
        layerLevel: bodyGearLevel,
        hasSleeves: true,

    },
    {
        // CUSTOM: Amanda
        name: '27-pink-tank-top',
        rarity: 5,
        layerLevel: bodyGearLevel,

    },
    {
        name: '28-comms-plate-carrier',
        rarity: 6,
        layerLevel: bodyGearLevel,

    },
    {
        // CUSTOM: Johnny, Josh
        name: '29-northeast-plate-carrier',
        rarity: 6,
        layerLevel: bodyGearLevel,

    },
    {
        // CUSTOM: Hayden
        name: '30-uni-plate-carrier',
        rarity: 6,
        layerLevel: bodyGearLevel,

    },
    {
        // CUSTOM: Abbi
        name: '31-tracksuit-plate-carrier',
        rarity: 6,
        layerLevel: bodyGearLevel,
        hasSleeves: true,

    },
    {
        // CUSTOM: Ian
        name: '32-hoodie-plate-carrier',
        rarity: 6,
        layerLevel: bodyGearLevel,
        hasSleeves: true,

    },
    {
        // CUSTOM: Dante
        name: '33-short-sleeve-hoodie',
        rarity: 6,
        layerLevel: bodyGearLevel,
        hasSleeves: true,

    },
    {
        // CUSTOM: Austin
        name: '34-peace-sign-plate-carrier',
        rarity: 7,
        layerLevel: bodyGearLevel,
        hasSleeves: true,

    },
    {
        // CUSTOM: Noah
        name: '35-leather-jacket',
        rarity: 7,
        layerLevel: bodyGearLevel,
        hasSleeves: true,

    },
    {
        // CUSTOM: Jen
        name: '36-road-warrior-jacket',
        rarity: 7,
        layerLevel: bodyGearLevel,

    },
    {
        // CUSTOM: Jeff
        name: '37-purp-flak-vest',
        rarity: 7,
        layerLevel: bodyGearLevel,

    },
    {
        // CUSTOM: Justin
        name: '38-hacker-plate-carrier',
        rarity: 7,
        layerLevel: bodyGearLevel,

    }
]

// nothing goes beneath foreLeg so bottom non-background layer
const leftForeleg = [
    {
        name: '0-ant-left-foreleg',
        rarity: 0,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,
    },
    {
        name: '1-black-prosthetic-foreleg',
        rarity: 3,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,
    },
    {
        name: '2-camo-prosthetic-foreleg',
        rarity: 4,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,

    },
    {
        name: '3-silver-prosthetic-foreleg',
        rarity: 5,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,

    }
]

// lower than watch
const gunsEquipment = [
    {
        name: '0-knife',
        rarity: 0,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,
    },
    {
        name: '1-shovel',
        rarity: 0,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,

    },
    {
        name: '2-uzi',
        rarity: 0,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,
    },
    {
        name: '3-e-tool',
        rarity: 1,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,

    },
    {
        name: '4-smg-sd',
        rarity: 1,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,
    },
    {
        name: '5-assault-rifle',
        rarity: 1,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,
    },
    {
        name: '6-walkie-talkie',
        rarity: 2,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,

    },
    {
        name: '7-shotgun',
        rarity: 2,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,
    },
    {
        name: '8-lmg',
        rarity: 2,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,
    },
    {
        name: '9-field-reciever',
        rarity: 3,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,

    },
    {
        name: '10-battle-rifle',
        rarity: 3,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,

    },
    {
        name: '11-bazooka',
        rarity: 3,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,
    },
    {
        name: '12-sniper-rifle',
        rarity: 3,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,
    },
    {
        name: '13-medal',
        rarity: 4,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,
    },
    {
        name: '14-map',
        rarity: 4,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,
    },
    {
        name: '15-tactical-tablet',
        rarity: 4,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,

    },
    {
        name: '16-anti-materiel-rifle',
        rarity: 4,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,
    },
    {
        name: '17-flamethrower',
        rarity: 4,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,
    },
    {
        name: '18-gold-rifle',
        rarity: 5,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,

    },
    {
        // CUSTOM: Abbi
        name: '19-hippy-battle-rifle',
        rarity: 5,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,

    },
    {
        // CUSTOM: Giveaway
        name: '20-fireworks-gun',
        rarity: 5,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,

    },
    {
        // CUSTOM: Evrim
        name: '21-flamed-fireworks-gun',
        rarity: 6,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,

    },
    {
        // CUSTOM: Nick
        name: '22-welding-torch',
        rarity: 6,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,

    },
    {
        // CUSTOM: Sam
        name: '23-akimbo-chef-knives',
        rarity: 6,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,

    },
    {
        // CUSTOM: Mike
        name: '24-bowie-knife',
        rarity: 6,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,

    },
    {
        // CUSTOM: Justin
        name: '25-ddos',
        rarity: 6,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,

    },
    {
        // CUSTOM: Hayden
        name: '26-uni-shotgun',
        rarity: 6,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,

    },
    {
        // CUSTOM: Tommy
        name: '27-tommygun-smg',
        rarity: 6,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,

    },
    {
        // CUSTOM: Jimmy
        name: '28-retro-assault-rifle',
        rarity: 6,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,

    },
    {
        name: '29-mgl',
        rarity: 6,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,

    },
    {
        // CUSTOM: Noah
        name: '30-future-rifle',
        rarity: 7,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,

    },
    {
        // CUSTOM: Ian
        name: '31-intervention',
        rarity: 7,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,

    },
    {
        // CUSTOM: Alex
        name: '32-onion-mgl',
        rarity: 7,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,

    },
    {
        // CUSTOM: Jeff
        name: '33-blazed-flamethrower',
        rarity: 8,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,

    }
]

// top level
const watch = [
    {
        name: 'empty',
    },
    {
        name: '1-green-watch',
        rarity: 0,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,

    },
    {
        name: '2-black-watch',
        rarity: 1,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,

    },
    {
        name: '3-full-black-watch',
        rarity: 2,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,

    },
    {
        // CUSTOM: Tommy
        name: '4-silver-watch',
        rarity: 3,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,

    },
    {
        // CUSTOM: Jimmy
        name: '5-gold-watch',
        rarity: 4,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,

    },
    {
        // CUSTOM: Hayden
        name: '6-gold-uni-watch',
        rarity: 5,
        layerLevel: faceAndOpticGearAndToolAndWatchLevel,

    }
]

// on top of tattoo
const holster = [
    {
        name: '0-holster',
        rarity: 0,
        layerLevel: antennaAndHolsterAndLegGearAndEyePatchLevel,
    },
    {
        name: '1-green-holster',
        rarity: 1,
        layerLevel: antennaAndHolsterAndLegGearAndEyePatchLevel,

    },
    {
        name: '2-brown-holster',
        rarity: 1,
        layerLevel: antennaAndHolsterAndLegGearAndEyePatchLevel,

    },
    {
        // CUSTOM: Hayden
        name: '3-uni-holster',
        rarity: 2,
        layerLevel: antennaAndHolsterAndLegGearAndEyePatchLevel,

    },
    {
        name: '4-tan-holster',
        rarity: 4,
        layerLevel: antennaAndHolsterAndLegGearAndEyePatchLevel,

    },
    {
        // CUSTOM: Tommy
        name: '5-leather-holster',
        rarity: 5,
        layerLevel: antennaAndHolsterAndLegGearAndEyePatchLevel,

    },
    {
        name: '6-revolver-holster',
        rarity: 5,
        layerLevel: antennaAndHolsterAndLegGearAndEyePatchLevel,

    },
    {
        // CUSTOM: Jeff
        name: '7-purp-holster',
        rarity: 5,
        layerLevel: antennaAndHolsterAndLegGearAndEyePatchLevel,

    },
    {
        // CUSTOM: Jimmy
        name: '8-santa-maria-holster',
        rarity: 5,
        layerLevel: antennaAndHolsterAndLegGearAndEyePatchLevel,

    },
    {
        // CUSTOM: Giveaway
        name: '9-americana-holster',
        rarity: 5,
        layerLevel: antennaAndHolsterAndLegGearAndEyePatchLevel,

    }
]

// bottom non-background layer
const abdomenAccessories = [
    {
        name: 'empty',
    },
    {
        name: '1-peace-sign',
        rarity: 0,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,
    },
    {
        name: '2-bomb',
        rarity: 0,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,
    },
    {
        name: '3-stars',
        rarity: 1,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,
    },
    {
        name: '4-skull',
        rarity: 1,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,
    },
    {
        name: '5-crosshair',
        rarity: 2,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,
    },
    {
        name: '6-wound',
        rarity: 2,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,
    },
    {
        name: '7-mom-tattoo',
        rarity: 3,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,
    },
    {
        name: '8-btk',
        rarity: 3,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,
    },
    {
        name: '9-tank-kills',
        rarity: 4,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,
    },
    {
        name: '10-fire',
        rarity: 4,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,
    },
    {
        // CUSTOM: Giveaway
        name: '11-star',
        rarity: 5,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,

    },
    {
        // CUSTOM: Nick
        name: '12-hockey-sticks',
        rarity: 5,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,

    },
    {
        // CUSTOM: Dante
        name: '13-bball',
        rarity: 5,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,

    },
    {
        // CUSTOM: Amanda
        name: '14-butterfly',
        rarity: 5,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,

    },
    {
        // CUSTOM: Alex
        name: '15-oh-brother',
        rarity: 5,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,

    },
    {
        // CUSTOM: Sam
        name: '16-dinnertime',
        rarity: 6,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,

    },
    {
        // CUSTOM: Hayden
        name: '17-uni-tat',
        rarity: 6,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,

    },
    {
        // CUSTOM: Tommy
        name: '18-flag-patch',
        rarity: 6,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,

    },
    {
        // CUSTOM: Austin
        name: '19-live-free',
        rarity: 7,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,

    },
    {
        // CUSTOM: Mike
        name: '20-big-weenie',
        rarity: 7,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,

    },
    {
        // CUSTOM: Jimmy
        name: '21-blued',
        rarity: 7,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,

    },
    {
        // CUSTOM: Jeff
        name: '22-most-dope',
        rarity: 7,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,

    },
    {
        // CUSTOM: Ian
        name: '23-headshot-crosshair',
        rarity: 8,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,

    }
]

// on top of legs
const legGear = [
    {
        name: 'empty',
    },
    {
        name: '1-tanker-trousers',
        rarity: 0,
        layerLevel: antennaAndHolsterAndLegGearAndEyePatchLevel,
    },
    {
        name: '2-pt-shorts',
        rarity: 1,
        layerLevel: antennaAndHolsterAndLegGearAndEyePatchLevel,
    },
    {
        name: '3-desert-uniform-pants',
        rarity: 1,
        layerLevel: antennaAndHolsterAndLegGearAndEyePatchLevel,
    },
    {
        name: '4-dress-uniform-pants',
        rarity: 1,
        layerLevel: antennaAndHolsterAndLegGearAndEyePatchLevel,
    },
    {
        name: '5-desert-tac-pants',
        rarity: 2,
        layerLevel: antennaAndHolsterAndLegGearAndEyePatchLevel,
    },
    {
        name: '6-tac-pants',
        rarity: 2,
        layerLevel: antennaAndHolsterAndLegGearAndEyePatchLevel,
    },
    {
        name: '7-sneaker-jeans',
        rarity: 2,
        layerLevel: antennaAndHolsterAndLegGearAndEyePatchLevel,

    },
    {
        name: '8-pilot-jumpsuit-pants',
        rarity: 3,
        layerLevel: antennaAndHolsterAndLegGearAndEyePatchLevel,
    },
    {
        name: '9-air-cav-jumpsuit-pants',
        rarity: 3,
        layerLevel: antennaAndHolsterAndLegGearAndEyePatchLevel,
    },
    {
        name: '10-cavalry-pants',
        rarity: 3,
        layerLevel: antennaAndHolsterAndLegGearAndEyePatchLevel,

    },
    {
        name: '11-command-uniform-pants',
        rarity: 3,
        layerLevel: antennaAndHolsterAndLegGearAndEyePatchLevel,
    },
    {
        name: '12-campaign-shorts',
        rarity: 3,
        layerLevel: antennaAndHolsterAndLegGearAndEyePatchLevel,
    },
    {
        // CUSTOM: Cole
        name: '13-suit-pants',
        rarity: 4,
        layerLevel: antennaAndHolsterAndLegGearAndEyePatchLevel,
    },
    {
        name: '14-boot-jeans',
        rarity: 4,
        layerLevel: antennaAndHolsterAndLegGearAndEyePatchLevel,

    },
    {
        name: '15-black-tac-pants',
        rarity: 4,
        layerLevel: antennaAndHolsterAndLegGearAndEyePatchLevel,
    },
    {
        // CUSTOM: Jen
        name: '16-tac-pants-brown-boots',
        rarity: 5,
        layerLevel: antennaAndHolsterAndLegGearAndEyePatchLevel,
    },
    {
        name: '17-m81-tac-pants',
        rarity: 6,
        layerLevel: antennaAndHolsterAndLegGearAndEyePatchLevel,
    },
    {
        // CUSTOM: Ben
        name: '18-cyber-legs',
        rarity: 7,
        layerLevel: antennaAndHolsterAndLegGearAndEyePatchLevel,

    },
    {
        // CUSTOM: Noah
        name: '19-leather-pants',
        rarity: 7,
        layerLevel: antennaAndHolsterAndLegGearAndEyePatchLevel,
    },
    {
        // CUSTOM: Amanda
        name: '20-pink-punk-tac-pants',
        rarity: 7,
        layerLevel: antennaAndHolsterAndLegGearAndEyePatchLevel,
    },
    {
        // CUSTOM: Jeff
        name: '21-purp-tac-pants',
        rarity: 8,
        layerLevel: antennaAndHolsterAndLegGearAndEyePatchLevel,

    }
]

// lowest non-background level
const hindLegs = [
    {
        name: '0-ant-hind-legs',
        rarity: 0,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,
    },
    {
        name: '1-black-hind-prosthetic',
        rarity: 3,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,
    },
    {
        name: '2-silver-hind-prosthetic',
        rarity: 3,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,

    },
    {
        name: '3-black-hind-prosthetics',
        rarity: 4,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,

    },
    {
        name: '4-silver-hind-prosthetics',
        rarity: 4,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,

    }
]

// lowest non-background level
const vehicles = [
    {
        name: 'empty',
    },
    {
        name: '1-dpv',
        rarity: 1,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,
        //250k
    },
    {
        name: '2-humvee',
        rarity: 1,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,
        //300k
    },
    {
        name: '3-little-bird',
        rarity: 1,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,
        //2mil
    },
    {
        name: '4-water-buffalo',
        rarity: 1,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,

    },
    {
        name: '5-bulldozer',
        rarity: 2,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,

    },
    {
        name: '6-tanker-truck',
        rarity: 2,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,

    },
    {
        name: '7-mrap',
        rarity: 2,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,
        //800k
    },
    {
        name: '8-warthog',
        rarity: 2,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,
        //20mil
    },
    {
        name: '9-chinook',
        rarity: 2,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,
        //42mil
    },
    {
        name: '10-lav',
        rarity: 3,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,
        //4mil
    },
    {
        name: '11-blackhawk',
        rarity: 3,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,
        //45mil
    },
    {
        name: '12-osprey',
        rarity: 3,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,
        //84mil
    },
    {
        name: '13-apache',
        rarity: 3,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,
        //90mil
    },
    {
        name: '14-bradley',
        rarity: 4,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,
        //4.5mil
    },
    {
        name: '15-raptor',
        rarity: 4,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,
        //143mil
    },
    {
        name: '16-globemaster',
        rarity: 4,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,
        //340mil
    },
    {
        name: '17-mine-layer',
        rarity: 4,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,

    },
    {
        name: '18-artillery',
        rarity: 5,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,

    },
    {
        name: '19-abrams',
        rarity: 5,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,
        //11mil
    },
    {
        name: '20-stealth-bomber',
        rarity: 5,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,
        //730mil
    },
    {
        // CUSTOM: Evrim
        name: '21-turbo-dpv',
        rarity: 6,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,

    },
    {
        // CUSTOM: Tommy
        name: '22-technical',
        rarity: 6,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,

    },
    {
        name: '23-drone',
        rarity: 6,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,

    },
    {
        // CUSTOM: Hayden
        name: '24-unicorn',
        rarity: 6,
        layerLevel: faceAndMouthAccAndVehicleAndArmAndTatAndLegsLevel,

    }
]

// lowest level
const backgrounds = [
    {
        name: '0-common',
        rarity: 0,
        layerLevel: backgroundLevel,
    },
    {
        name: '1-yellow',
        rarity: 3,
        layerLevel: backgroundLevel,
    },
    {
        name: '2-pink',
        rarity: 4,
        layerLevel: backgroundLevel,
    },
    {
        // CUSTOM: All
        name: '3-light-blue',
        rarity: 6,
        layerLevel: backgroundLevel,

    }
]

export const staticLayerInfo = [
    {
        fileName: '01-antenna',
        elements: antenna
    },
    {
        fileName: '02-head-gear',
        elements: headGear
    },
    {
        fileName: '03-face-gear',
        elements: faceGear
    },
    {
        fileName: '04-optical-gear',
        elements: opticalGear
    },
    {
        fileName: '05-face-accessories',
        elements: faceAccessories
    },
    {
        fileName: '06-mouth-accessories',
        elements: mouthAccessories
    },
    {
        fileName: '07-neck-gear',
        elements: neckGear
    },
    {
        fileName: '08-bandolier-belts',
        elements: bandolierBelts
    },
    {
        fileName: '09-body-gear',
        elements: bodyGear
    },
    {
        fileName: '10-left-foreleg',
        elements: leftForeleg
    },
    {
        fileName: '11-guns-equipment',
        elements: gunsEquipment
    },
    {
        fileName: '12-watch',
        elements: watch
    },
    {
        fileName: '13-holster',
        elements: holster
    },
    {
        fileName: '14-abdomen-accessories',
        elements: abdomenAccessories
    },
    {
        fileName: '15-leg-gear',
        elements: legGear
    },
    {
        fileName: '16-hind-legs',
        elements: hindLegs
    },
    {
        fileName: '17-vehicles',
        elements: vehicles
    },
    {
        fileName: '18-backgrounds',
        elements: backgrounds
    }
]