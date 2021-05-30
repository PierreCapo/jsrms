// Gold Coast
rmSetStatusText('', 0.01);

import { TERRAINS, CLIFF } from './some';

/// Nature variables

let mainTerrainType = TERRAINS.TOTO;
/*
let islandTerrainType = TERRAINS.CALIFORNIA_GROUNDSHORE1_CAL;
let waterType = WATER.CARIBBEAN_COAST;
let cliffType = CLIFF.CALIFORNIA;

let mapType1 = 'borneo';
let mapType2 = 'water';
let tradeRouteType = 'dirt_trail';

let hunt1Type = 'gazelle';
let hunt2Type = 'ypWildElephant';
let fishType = 'FishSalmon';
let treeType = 'TreeCaribbean';
let mineType = 'minegold';
let forestType = 'carolina pine forest';

/// Class variables

let socketClass = rmDefineClass('sockets');
let cliffClass = rmDefineClass('cliffs');
let forestClass = rmDefineClass('forest');
let startingUnitClass = rmDefineClass('startingUnit');
let townCenterClass = rmDefineClass('townCenter');
let islandClass = rmDefineClass('islands');
let waterClass = rmDefineClass('water');
let huntClass = rmDefineClass('hunts');
let fishClass = rmDefineClass('fishes');
let nuggetClass = rmDefineClass('nuggets');

chooseMercs();
let size = 2.0 * sqrt(cNumberNonGaiaPlayers * 12000);
rmSetMapSize(size, size);
rmTerrainInitialize(mainTerrainType, 4.0);
rmSetMapType(mapType1);
rmSetMapType(mapType2);
rmSetSeaLevel(1.0);
rmSetWorldCircleConstraint(true);

let avoidAll = rmCreateTypeDistanceConstraint('avoid all', 'all', 6.0);
let avoidTownCenterSmall = rmCreateClassDistanceConstraint('town center far', townCenterClass, 20.0);
let circleConstraint = rmCreatePieConstraint('circle Constraint', 0.5, 0.5, 0, rmZFractionToMeters(0.48), rmDegreesToRadians(0), rmDegreesToRadians(360));
let avoidWater = rmCreateClassDistanceConstraint('water constraint', waterClass, 7.0);

let avoidHunt = rmCreateClassDistanceConstraint('hunt constraint', huntClass, 52.0);
let avoidHuntSmall = rmCreateClassDistanceConstraint('avoid hunt small', huntClass, 12.0);
let avoidFish = rmCreateClassDistanceConstraint('avoid fish', fishClass, 12.0);
let avoidSocket = rmCreateClassDistanceConstraint('socket avoidance', socketClass, 10.0);
let avoidTradeRoute = rmCreateTradeRouteDistanceConstraint('trade route', 12.0);
let avoidNugget = rmCreateClassDistanceConstraint('nugget avoid nugget', nuggetClass, 30.0);

let southWater = rmCreateArea('south water');
rmAddAreaToClass(southWater, waterClass);
rmSetAreaSize(southWater, 0.3, 0.3);
rmSetAreaLocation(southWater, 0, 0);
rmSetAreaCoherence(southWater, 1.0);
rmAddAreaInfluenceSegment(southWater, 0.2, 0.4, 0.4, 0.2);
rmAddAreaInfluenceSegment(southWater, 0.1, 0.47, 0.47, 0.1);
rmAddAreaInfluenceSegment(southWater, 0, 0.55, 0.55, 0);
rmSetAreaEdgeFilling(southWater, 0);
rmSetAreaWaterType(southWater, waterType);
rmSetAreaObeyWorldCircleConstraint(southWater, false);
rmBuildArea(southWater);

let northWater = rmCreateArea('north water');
rmAddAreaToClass(northWater, waterClass);
rmSetAreaSize(northWater, 0.05, 0.05);
rmSetAreaLocation(northWater, 0.9, 0.9);
rmSetAreaCoherence(northWater, 0.7);
rmSetAreaSmoothDistance(northWater, 8);
rmAddAreaInfluenceSegment(northWater, 0.9, 0.9, 0.77, 0.77);
rmSetAreaWaterType(northWater, waterType);
rmSetAreaObeyWorldCircleConstraint(northWater, false);
rmBuildArea(northWater);

let cliffWest = rmCreateArea('cliff');
rmAddAreaToClass(cliffWest, cliffClass);
rmSetAreaSize(cliffWest, 0.003, 0.003);
rmSetAreaLocation(cliffWest, 0.4, 0.65);
rmSetAreaCliffType(cliffWest, cliffType);
rmSetAreaCliffEdge(cliffWest, 1, 1, 0.1, 1.0, 0);
rmSetAreaCliffPainting(cliffWest, false, true, true, 1.5, true);
rmSetAreaCliffHeight(cliffWest, 10, 0.0, 0);
rmSetAreaHeightBlend(cliffWest, 1);
rmSetAreaCoherence(cliffWest, 0.7);
rmAddAreaInfluenceSegment(cliffWest, 0.4, 0.65, 0.45, 0.65);
rmBuildArea(cliffWest);

let cliffEast = rmCreateArea('cliff');
rmAddAreaToClass(cliffEast, cliffClass);
rmSetAreaSize(cliffEast, 0.003, 0.003);
rmSetAreaLocation(cliffEast, 0.65, 0.4);
rmSetAreaCliffType(cliffEast, cliffType);
rmSetAreaCliffEdge(cliffEast, 1, 1, 0.1, 1.0, 0);
rmSetAreaCliffPainting(cliffEast, false, true, true, 1.5, true);
rmSetAreaCliffHeight(cliffEast, 10, 0.0, 0);
rmSetAreaHeightBlend(cliffEast, 1);
rmSetAreaCoherence(cliffEast, 0.7);
rmAddAreaInfluenceSegment(cliffEast, 0.65, 0.4, 0.65, 0.45);
rmBuildArea(cliffEast);

let avoidCliffs = rmCreateClassDistanceConstraint('avoid cliffs', cliffClass, 6.0);
let avoidIslands = rmCreateClassDistanceConstraint('avoid islands', islandClass, 15.0);

let westIsland = rmCreateArea('west island');
rmAddAreaToClass(westIsland, islandClass);
rmSetAreaSize(westIsland, rmAreaTilesToFraction(200), rmAreaTilesToFraction(200));
rmSetAreaSize(westIsland, 0.008, 0.008);
rmSetAreaLocation(westIsland, 0.13, 0.4);
rmSetAreaTerrainType(westIsland, islandTerrainType);
rmSetAreaBaseHeight(westIsland, 2);
rmSetAreaHeightBlend(westIsland, 1.0);
rmSetAreaSmoothDistance(westIsland, 3);
rmSetAreaWarnFailure(westIsland, false);
rmSetAreaCoherence(westIsland, 0.6);
rmBuildArea(westIsland);

let eastIsland = rmCreateArea('east island');
rmAddAreaToClass(eastIsland, islandClass);
rmSetAreaSize(eastIsland, rmAreaTilesToFraction(200), rmAreaTilesToFraction(200));
rmSetAreaSize(eastIsland, 0.0078, 0.008);
rmSetAreaLocation(eastIsland, 0.4, 0.13);
rmSetAreaTerrainType(eastIsland, islandTerrainType);
rmSetAreaBaseHeight(eastIsland, 2);
rmSetAreaHeightBlend(eastIsland, 1.0);
rmSetAreaSmoothDistance(eastIsland, 3);
rmSetAreaWarnFailure(eastIsland, false);
rmSetAreaCoherence(eastIsland, 0.6);
rmBuildArea(eastIsland);

rmClearClosestPointConstraints();
let tradeRouteID = rmCreateTradeRoute();
let socketID = rmCreateObjectDef('sockets to dock Trade Posts');
rmAddObjectDefItem(socketID, 'SocketTradeRoute', 1, 0.1);
rmAddObjectDefToClass(socketID, socketClass);

rmSetObjectDefMinDistance(socketID, 0.0);
rmSetObjectDefMaxDistance(socketID, 2.0);

rmAddTradeRouteWaypoint(tradeRouteID, 0, 0.6);
rmAddTradeRouteWaypoint(tradeRouteID, 0.21, 0.51);
rmAddTradeRouteWaypoint(tradeRouteID, 0.51, 0.21);
rmAddTradeRouteWaypoint(tradeRouteID, 0.6, 0);

rmBuildTradeRoute(tradeRouteID, tradeRouteType);

rmSetObjectDefTradeRouteID(socketID, tradeRouteID);

let socketLoc = rmGetTradeRouteWayPoint(tradeRouteID, 0.1);
rmAddClosestPointConstraint(avoidIslands);
rmAddClosestPointConstraint(avoidWater);
let socketLocactionOnMainContinent = rmFindClosestPointVector(socketLoc, rmXFractionToMeters(1.0));
rmPlaceObjectDefAtLoc(socketID, 0, rmXMetersToFraction(xsVectorGetX(socketLocactionOnMainContinent)), rmZMetersToFraction(xsVectorGetZ(socketLocactionOnMainContinent)));
rmClearClosestPointConstraints();

socketLoc = rmGetTradeRouteWayPoint(tradeRouteID, 0.5);
rmAddClosestPointConstraint(avoidIslands);
rmAddClosestPointConstraint(avoidWater);
socketLocactionOnMainContinent = rmFindClosestPointVector(socketLoc, rmXFractionToMeters(1.0));
rmPlaceObjectDefAtLoc(socketID, 0, rmXMetersToFraction(xsVectorGetX(socketLocactionOnMainContinent)), rmZMetersToFraction(xsVectorGetZ(socketLocactionOnMainContinent)));
rmClearClosestPointConstraints();

socketLoc = rmGetTradeRouteWayPoint(tradeRouteID, 0.9);
rmAddClosestPointConstraint(avoidIslands);
rmAddClosestPointConstraint(avoidWater);
socketLocactionOnMainContinent = rmFindClosestPointVector(socketLoc, rmXFractionToMeters(1.0));
rmPlaceObjectDefAtLoc(socketID, 0, rmXMetersToFraction(xsVectorGetX(socketLocactionOnMainContinent)), rmZMetersToFraction(xsVectorGetZ(socketLocactionOnMainContinent)));
rmClearClosestPointConstraints();

let nativeVillage1 = -1;
nativeVillage1 = rmCreateGrouping('native village 1', 'native Seminole village 1');
rmAddGroupingToClass(nativeVillage1, socketClass);
rmSetGroupingMinDistance(nativeVillage1, 0.0);
rmSetGroupingMaxDistance(nativeVillage1, 0.0);
rmAddGroupingToClass(nativeVillage1, rmClassID('importantItem'));
rmPlaceGroupingAtLoc(nativeVillage1, 0, 0.7, 0.55);

let nativeVillage2 = rmRandInt(1, 5);
nativeVillage2 = rmCreateGrouping('native village 2', 'native Seminole village 1');
rmAddGroupingToClass(nativeVillage2, socketClass);
rmSetGroupingMinDistance(nativeVillage2, 0.0);
rmSetGroupingMaxDistance(nativeVillage2, 0.0);
rmAddGroupingToClass(nativeVillage2, rmClassID('importantItem'));
rmPlaceGroupingAtLoc(nativeVillage2, 0, 0.55, 0.7);

if (cNumberNonGaiaPlayers == 2) {
    // 1v1
    if (rmRandFloat(0, 1) > 0.5) {
        rmPlacePlayer(1, 0.33, 0.83);
        rmPlacePlayer(2, 0.83, 0.33);
    } else {
        rmPlacePlayer(1, 0.83, 0.33);
        rmPlacePlayer(2, 0.33, 0.83);
    }
} else {
    // team
    rmSetPlacementTeam(0);
    rmSetPlacementSection(0.89, 0.02);
    rmPlacePlayersCircular(0.35, 0.36, 0);

    rmSetPlacementTeam(1);
    rmSetPlacementSection(0.22, 0.35);
    rmPlacePlayersCircular(0.35, 0.36, 0);
}

let avoidStartingUnitsSmall = rmCreateClassDistanceConstraint('objects avoid starting units small', startingUnitClass, 7.0);

let startingTCID = rmCreateObjectDef('startingTC');
if (rmGetNomadStart()) {
    rmAddObjectDefItem(startingTCID, 'CoveredWagon', 1, 0.0);
} else {
    rmAddObjectDefItem(startingTCID, 'TownCenter', 1, 0.0);
}
rmAddObjectDefToClass(startingTCID, startingUnitClass);
rmAddObjectDefToClass(startingTCID, townCenterClass);
rmSetObjectDefMinDistance(startingTCID, 0.0);
rmSetObjectDefMaxDistance(startingTCID, 1.0);

let startingUnits = rmCreateStartingUnitsObjectDef(5.0);
rmSetObjectDefMinDistance(startingUnits, 5.0);
rmSetObjectDefMaxDistance(startingUnits, 10.0);
rmAddObjectDefToClass(startingUnits, startingUnitClass);
rmAddObjectDefConstraint(startingUnits, avoidStartingUnitsSmall);

let startAreaTreeID = rmCreateObjectDef('starting trees');
rmAddObjectDefItem(startAreaTreeID, treeType, 3, 2.0);
rmSetObjectDefMinDistance(startAreaTreeID, 10.0);
rmSetObjectDefMaxDistance(startAreaTreeID, 15.0);
rmAddObjectDefToClass(startAreaTreeID, startingUnitClass);
rmAddObjectDefConstraint(startAreaTreeID, avoidStartingUnitsSmall);

let startHuntID = rmCreateObjectDef('starting rhea');
rmAddObjectDefItem(startHuntID, hunt1Type, 5, 7.0);
rmSetObjectDefMinDistance(startHuntID, 11.0);
rmSetObjectDefMaxDistance(startHuntID, 14.0);
rmAddObjectDefToClass(startHuntID, startingUnitClass);
rmAddObjectDefConstraint(startHuntID, avoidStartingUnitsSmall);
rmSetObjectDefCreateHerd(startHuntID, false);

let startMineID = rmCreateObjectDef('starting gold');
rmAddObjectDefItem(startMineID, mineType, 1, 0.0);
rmSetObjectDefMinDistance(startMineID, 12.0);
rmSetObjectDefMaxDistance(startMineID, 16.0);
rmAddObjectDefToClass(startMineID, startingUnitClass);
rmAddObjectDefConstraint(startHuntID, avoidStartingUnitsSmall);

let playerNuggetID = rmCreateObjectDef('player nugget');
rmAddObjectDefItem(playerNuggetID, 'nugget', 1, 0.0);
rmAddObjectDefToClass(playerNuggetID, startingUnitClass);
rmAddObjectDefToClass(playerNuggetID, nuggetClass);
rmSetObjectDefMinDistance(playerNuggetID, 30.0);
rmSetObjectDefMaxDistance(playerNuggetID, 35.0);
rmAddObjectDefConstraint(playerNuggetID, avoidStartingUnitsSmall);
rmAddObjectDefConstraint(playerNuggetID, circleConstraint);
rmAddObjectDefConstraint(playerNuggetID, avoidNugget);

// flag constraints
let flagVsFlag = rmCreateTypeDistanceConstraint('flag avoid same', 'HomeCityWaterSpawnFlag', 5.0);
let stayInSouthWater = rmCreateAreaConstraint('stay in water ', southWater);
let avoidEdge = rmCreatePieConstraint('Avoid edge', 0.5, 0.5, rmXFractionToMeters(0.0), rmXFractionToMeters(0.49), rmDegreesToRadians(0), rmDegreesToRadians(360));

// Water spawn flag
let colonyShipID = 0;
colonyShipID = rmCreateObjectDef('colony ship ');
rmAddObjectDefItem(colonyShipID, 'HomeCityWaterSpawnFlag', 1, 1.0);
rmSetObjectDefMinDistance(colonyShipID, 0);
rmSetObjectDefMaxDistance(colonyShipID, 10);
rmAddObjectDefConstraint(colonyShipID, flagVsFlag);
rmAddObjectDefConstraint(colonyShipID, stayInSouthWater);

for (i = 1; i < cNumberPlayers; i++) {
    rmClearClosestPointConstraints();
    // Place starting units and a TC!
    rmPlaceObjectDefAtLoc(startingTCID, i, rmPlayerLocXFraction(i), rmPlayerLocZFraction(i));
    let TCLocation = rmGetUnitPosition(rmGetUnitPlacedOfPlayer(startingTCID, i));
    rmPlaceObjectDefAtLoc(startingUnits, i, rmPlayerLocXFraction(i), rmPlayerLocZFraction(i));
    rmPlaceObjectDefAtLoc(startAreaTreeID, i, rmPlayerLocXFraction(i), rmPlayerLocZFraction(i));
    rmPlaceObjectDefAtLoc(startAreaTreeID, i, rmPlayerLocXFraction(i), rmPlayerLocZFraction(i));
    rmPlaceObjectDefAtLoc(startAreaTreeID, i, rmPlayerLocXFraction(i), rmPlayerLocZFraction(i));
    rmPlaceObjectDefAtLoc(startHuntID, i, rmPlayerLocXFraction(i), rmPlayerLocZFraction(i));
    rmPlaceObjectDefAtLoc(startMineID, i, rmPlayerLocXFraction(i), rmPlayerLocZFraction(i));
    rmPlaceObjectDefAtLoc(playerNuggetID, i, rmPlayerLocXFraction(i), rmPlayerLocZFraction(i));

    rmSetNuggetDifficulty(1, 1);
    rmPlaceObjectDefAtLoc(playerNuggetID, i, rmPlayerLocXFraction(i), rmPlayerLocZFraction(i));

    rmAddClosestPointConstraint(stayInSouthWater);
    rmAddClosestPointConstraint(flagVsFlag);
    rmAddClosestPointConstraint(avoidEdge);
    let closestPoint = rmFindClosestPointVector(TCLocation, rmXFractionToMeters(2.0));
    rmPlaceObjectDefAtLoc(colonyShipID, i, rmXMetersToFraction(xsVectorGetX(closestPoint)), rmZMetersToFraction(xsVectorGetZ(closestPoint)));

    rmClearClosestPointConstraints();
}

let avoidCoin = rmCreateTypeDistanceConstraint('avoid coin', mineType, 60.0);
let avoidCoinSmall = rmCreateTypeDistanceConstraint('avoid coin small', mineType, 12.0);

let numberOfHunts = cNumberNonGaiaPlayers;
let numberOfItemPlaced = 0;
let itemPositionX = -1;
let itemPositionZ = -1;
let result = 0;
let leaveWhile = 0;

let numberOfMines = (cNumberNonGaiaPlayers / 2) * 3;

let minePlacement = 0;
let minePositionX = -1;
let minePositionZ = -1;
result = 0;
leaveWhile = 0;

let mineID = rmCreateObjectDef('mine item');
rmAddObjectDefItem(mineID, mineType, 1, 0.0);
rmSetObjectDefMinDistance(mineID, 0.0);
rmSetObjectDefMaxDistance(mineID, 0.0);
rmAddObjectDefConstraint(mineID, avoidTownCenterSmall);
rmAddObjectDefConstraint(mineID, avoidCoin);
rmAddObjectDefConstraint(mineID, avoidIslands);
rmAddObjectDefConstraint(mineID, circleConstraint);
rmAddObjectDefConstraint(mineID, avoidSocket);
rmAddObjectDefConstraint(mineID, avoidWater);
rmAddObjectDefConstraint(mineID, avoidCliffs);

let mineSymetryID = -1;
mineSymetryID = rmCreateObjectDef('mine item symetry');
rmAddObjectDefItem(mineSymetryID, mineType, 1, 0.0);
rmSetObjectDefMinDistance(mineSymetryID, 0.0);
rmSetObjectDefMaxDistance(mineSymetryID, 0.0);

while (minePlacement < numberOfMines) {
    minePositionX = rmRandFloat(0.0, 1.0);
    minePositionZ = rmRandFloat(0, minePositionX - 0.05); // vertical symetry with gap in the axis
    rmSetObjectDefForceFullRotation(mineID, true);
    result = rmPlaceObjectDefAtLoc(mineID, 0, minePositionX, minePositionZ);
    if (result == 1) {
        rmSetObjectDefForceFullRotation(mineSymetryID, true);
        rmPlaceObjectDefAtLoc(mineSymetryID, 0, minePositionZ, minePositionX);
        minePlacement++;
        leaveWhile = 0;
    } else {
        leaveWhile++;
    }
    if (leaveWhile == 100) break;
}

result = 0;
leaveWhile = 0;

let hunt2Size = rmRandInt(2, 3);
let hunt2ID = rmCreateObjectDef('hunt2 herd');
rmAddObjectDefToClass(hunt2ID, huntClass);
rmAddObjectDefItem(hunt2ID, hunt2Type, hunt2Size, 8.0);
rmSetObjectDefMinDistance(hunt2ID, 0.0);
rmSetObjectDefMaxDistance(hunt2ID, rmXFractionToMeters(0.0));
rmAddObjectDefConstraint(hunt2ID, avoidHunt);
rmAddObjectDefConstraint(hunt2ID, avoidTownCenterSmall);
rmAddObjectDefConstraint(hunt2ID, avoidAll);
rmAddObjectDefConstraint(hunt2ID, avoidIslands);
rmAddObjectDefConstraint(hunt2ID, avoidWater);
rmAddObjectDefConstraint(hunt2ID, circleConstraint);
rmAddObjectDefConstraint(hunt2ID, avoidCliffs);
rmSetObjectDefCreateHerd(hunt2ID, true);

let hunt2SymetryID = rmCreateObjectDef('hunt2 herd symetry');
rmAddObjectDefToClass(hunt2SymetryID, huntClass);
rmAddObjectDefItem(hunt2SymetryID, hunt2Type, hunt2Size, 8.0);
rmSetObjectDefMinDistance(hunt2SymetryID, 0.0);
rmSetObjectDefMaxDistance(hunt2SymetryID, 0.0);
rmSetObjectDefCreateHerd(hunt2SymetryID, true);

while (numberOfItemPlaced < numberOfHunts) {
    itemPositionX = rmRandFloat(0.0, 1.0);
    itemPositionZ = rmRandFloat(0, itemPositionX - 0.05); // vertical symetry with gap in the axis
    result = rmPlaceObjectDefAtLoc(hunt2ID, 0, itemPositionX, itemPositionZ, 1);
    if (result != 0) {
        rmPlaceObjectDefAtLoc(hunt2SymetryID, 0, itemPositionZ, itemPositionX, 1);
        numberOfItemPlaced++;
        leaveWhile = 0;
    } else {
        leaveWhile++;
    }
    if (leaveWhile == 60) break;
}

result = 0;
leaveWhile = 0;

numberOfHunts = cNumberNonGaiaPlayers * 3;
let hunt1Size = rmRandInt(8, 9);
let hunt1ID = rmCreateObjectDef('hunt1 herd');
rmAddObjectDefToClass(hunt1ID, huntClass);
rmAddObjectDefItem(hunt1ID, hunt1Type, hunt1Size, 8.0);
rmSetObjectDefMinDistance(hunt1ID, 0.0);
rmSetObjectDefMaxDistance(hunt1ID, rmXFractionToMeters(0.0));
rmAddObjectDefConstraint(hunt1ID, avoidHunt);
rmAddObjectDefConstraint(hunt1ID, avoidTownCenterSmall);
rmAddObjectDefConstraint(hunt1ID, avoidAll);
rmAddObjectDefConstraint(hunt1ID, avoidIslands);
rmAddObjectDefConstraint(hunt1ID, circleConstraint);
rmAddObjectDefConstraint(hunt1ID, avoidWater);
rmAddObjectDefConstraint(hunt1ID, avoidCliffs);

rmSetObjectDefCreateHerd(hunt1ID, true);

let hunt1SymetryID = rmCreateObjectDef('hunt1 herd symetry');
rmAddObjectDefToClass(hunt1SymetryID, huntClass);
rmAddObjectDefItem(hunt1SymetryID, hunt1Type, hunt1Size, 7.0);
rmSetObjectDefMinDistance(hunt1SymetryID, 0.0);
rmSetObjectDefMaxDistance(hunt1SymetryID, 0.0);
rmSetObjectDefCreateHerd(hunt1SymetryID, true);

while (numberOfItemPlaced < numberOfHunts) {
    itemPositionX = rmRandFloat(0.0, 1.0);
    itemPositionZ = rmRandFloat(0, itemPositionX - 0.05); // vertical symetry with gap in the axis
    result = rmPlaceObjectDefAtLoc(hunt1ID, 0, itemPositionX, itemPositionZ, 1);
    if (result != 0) {
        rmPlaceObjectDefAtLoc(hunt1SymetryID, 0, itemPositionZ, itemPositionX, 1);
        numberOfItemPlaced++;
        leaveWhile = 0;
    } else {
        leaveWhile++;
    }
    if (leaveWhile == 60) break;
}

let avoidForest = rmCreateClassDistanceConstraint('object vs. forest', forestClass, 20.0);

// FORESTS
let numTries = 20 * cNumberNonGaiaPlayers;
let failCount = 0;
for (i = 0; i < numTries; i++) {
    let forest = rmCreateArea('forest ' + i);
    rmSetAreaWarnFailure(forest, false);
    rmSetAreaSize(forest, rmAreaTilesToFraction(100), rmAreaTilesToFraction(150));
    rmSetAreaForestType(forest, forestType);
    rmSetAreaForestDensity(forest, 0.8);
    rmSetAreaForestClumpiness(forest, 0.6);
    rmSetAreaForestUnderbrush(forest, 0.0);
    rmSetAreaMinBlobs(forest, 1);
    rmSetAreaMaxBlobs(forest, 5);
    rmSetAreaMinBlobDistance(forest, 16.0);
    rmSetAreaMaxBlobDistance(forest, 70.0);
    rmSetAreaCoherence(forest, 0.4);
    rmSetAreaSmoothDistance(forest, 0);
    rmAddAreaToClass(forest, forestClass);
    rmAddAreaConstraint(forest, avoidAll);
    rmAddAreaConstraint(forest, avoidWater);
    rmAddAreaConstraint(forest, avoidCliffs);
    rmAddAreaConstraint(forest, avoidSocket);
    rmAddAreaConstraint(forest, avoidForest);
    rmAddAreaConstraint(forest, avoidTownCenterSmall);
    rmAddAreaConstraint(forest, avoidHuntSmall);
    rmAddAreaConstraint(forest, avoidCoinSmall);

    if (rmBuildArea(forest) == false) {
        // Stop trying once we fail 3 times in a row.
        failCount++;
        if (failCount == 5) break;
    } else failCount = 0;
}

for (i = 0; i < 6 + 6 * cNumberNonGaiaPlayers; i++) {
    let fishID = rmCreateObjectDef('fish' + i);
    rmAddObjectDefItem(fishID, fishType, 1, 1.0);
    rmAddObjectDefToClass(fishID, fishClass);
    rmSetObjectDefMinDistance(fishID, 0.0);
    rmSetObjectDefMaxDistance(fishID, rmXFractionToMeters(0.5));
    rmAddObjectDefConstraint(fishID, avoidFish);
    rmAddObjectDefConstraint(fishID, avoidTradeRoute);
    rmPlaceObjectDefInArea(fishID, 0, southWater, 1);
}

let treeIsland = rmCreateObjectDef('tree island');
rmAddObjectDefItem(treeIsland, treeType, 1, 3.0);
rmSetObjectDefMinDistance(treeIsland, 0.0);
rmSetObjectDefMaxDistance(treeIsland, 0.0);
rmPlaceObjectDefInArea(treeIsland, 0, eastIsland, (4 * cNumberNonGaiaPlayers) / 2);
rmPlaceObjectDefInArea(treeIsland, 0, westIsland, (4 * cNumberNonGaiaPlayers) / 2);

let mineIsland = rmCreateObjectDef('mine in island');
rmAddObjectDefItem(mineIsland, mineType, 1, 0.0);
rmSetObjectDefMinDistance(mineIsland, 0.0);
rmSetObjectDefMaxDistance(mineIsland, 0.0);
rmPlaceObjectDefInArea(mineIsland, 0, eastIsland, 1);
rmPlaceObjectDefInArea(mineIsland, 0, westIsland, 1);

let fishID = rmCreateObjectDef('fish' + i);
rmAddObjectDefItem(fishID, fishType, 1, 1.0);
rmAddObjectDefToClass(fishID, fishClass);
rmSetObjectDefMinDistance(fishID, 0.0);
rmSetObjectDefMaxDistance(fishID, rmXFractionToMeters(0.5));
rmAddObjectDefConstraint(fishID, avoidFish);
rmAddObjectDefConstraint(fishID, avoidTradeRoute);
rmPlaceObjectDefInArea(fishID, 0, southWater, 1);

let nuggetWater = rmCreateObjectDef('nugget water' + i);
rmAddObjectDefItem(nuggetWater, 'ypNuggetBoat', 1, 0.0);
rmAddObjectDefToClass(nuggetWater, nuggetClass);
rmSetNuggetDifficulty(5, 5);
rmSetObjectDefMinDistance(nuggetWater, rmXFractionToMeters(0.0));
rmSetObjectDefMaxDistance(nuggetWater, rmXFractionToMeters(0.5));
rmAddObjectDefConstraint(nuggetWater, avoidTradeRoute);
rmAddObjectDefConstraint(nuggetWater, avoidNugget);
rmPlaceObjectDefInArea(nuggetWater, 0, southWater, cNumberNonGaiaPlayers * 2);

let nuggetID = rmCreateObjectDef('nugget');
rmAddObjectDefItem(nuggetID, 'Nugget', 1, 0.0);
rmAddObjectDefToClass(nuggetID, nuggetClass);
rmSetObjectDefMinDistance(nuggetID, 0.0);
rmSetObjectDefMaxDistance(nuggetID, rmXFractionToMeters(0.5));
rmAddObjectDefConstraint(nuggetID, avoidNugget);
rmAddObjectDefConstraint(nuggetID, avoidAll);
rmAddObjectDefConstraint(nuggetID, avoidTradeRoute);
rmAddObjectDefConstraint(nuggetID, avoidTownCenterSmall);
rmAddObjectDefConstraint(nuggetID, avoidSocket);
rmAddObjectDefConstraint(nuggetID, avoidWater);
rmAddObjectDefConstraint(nuggetID, circleConstraint);
rmAddObjectDefConstraint(nuggetID, avoidCoinSmall);
rmAddObjectDefConstraint(nuggetID, avoidIslands);
rmSetNuggetDifficulty(1, 3);
rmPlaceObjectDefAtLoc(nuggetID, 0, 0.5, 0.5, 6 * cNumberNonGaiaPlayers);

let avoidCoinVerySmall = rmCreateTypeDistanceConstraint('avoid coin small', mineType, 6.0);

let nuggetIsland = rmCreateObjectDef('nugget island');
rmAddObjectDefItem(nuggetIsland, 'Nugget', 1, 0.0);
rmAddObjectDefToClass(nuggetIsland, nuggetClass);
rmAddObjectDefConstraint(nuggetIsland, avoidCoinVerySmall);
rmAddObjectDefConstraint(nuggetIsland, avoidAll);
rmSetNuggetDifficulty(4, 4);
rmPlaceObjectDefInArea(nuggetIsland, 0, eastIsland, 1);
rmPlaceObjectDefInArea(nuggetIsland, 0, westIsland, 1);

if (rmGetIsKOTH()) {
    ypKingsHillPlacer(0.5, 0.5, 0.0, 0);
}
*/
