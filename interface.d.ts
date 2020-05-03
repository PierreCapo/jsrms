type integer = number;
type float = number;

declare class Area {}
declare class Constraint {}
declare class River {}
declare class Vector {}

/**
 * Sets whether or not to reveal oceans.
 */
declare const rmSetOceanReveal: (reveal: boolean) => void;
/**
 * Sets the min/max difficulty levels for placing nuggets.
 */
declare const rmSetNuggetDifficulty: (minLevel: integer, maxLevel: float) => void;
/**
 * Adds random waypoints to the specified cliff valley area.
 */
declare const rmAddAreaCliffRandomWaypoints: (areaID: Area, endXFraction: float, endZFraction: float, count: integer, maxVariation: float) => void;
/**
 * Adds the given waypoint to the specified cliff area (for valleys).
 */
declare const rmAddAreaCliffWaypoint: (areaID: Area, xFraction: float, zFraction: float) => void;
/**
 * Returns which area is closer.
 */
declare const rmFindCloserArea: (xFraction: float, zFraction: float, area1: integer, area2: integer) => void;
/**
 * Finds closest point satisfying the preset constraints.
 */
declare const rmFindClosestPoint: (xFraction: float, zFraction: float, maxDistance: float) => void;
/**
 * Clears constraints for closest point finder.
 */
declare const rmClearClosestPointConstraints: () => void;
/**
 * Adds constraint to closest point finder.
 */
declare const rmAddClosestPointConstraint: (constraintID: Constraint) => void;
/**
 * Enables / disables local water disturbances.
 */
declare const rmEnableLocalWater: (enable: boolean) => void;
/**
 * Returns true if the map belongs to the given type.
 */
declare const rmIsMapType: (type: string) => void;
/**
 * Indicates that this map is of a certain type (it can be multiple types simultaneously.
 */
declare const rmSetMapType: (type: string) => void;
/**
 * Returns the position of the unit.
 */
declare const rmGetUnitPosition: (unitID: number) => Vector;
/**
 * Returns the HC Level of the given player.
 */
declare const rmGetHomeCityLevel: (playerID: integer) => integer;
/**
 * Returns the highest HC Level of the players in the game.
 */
declare const rmGetHighHomeCityLevel: () => integer;
/**
 * Returns the average (rounded down) HC Level of the players in the game.
 */
declare const rmGetAverageHomeCityLevel: () => number;
/**
 * Returns the lowest HC Level of the players in the game.
 */
declare const rmGetLowHomeCityLevel: () => integer;
/**
 * Sets the HCWSP for the given player.
 */
declare const rmSetHomeCityWaterSpawnPoint: (playerID: integer, point: Vector) => boolean;
/**
 * Sets the HCGP for the given player.
 */
declare const rmSetHomeCityGatherPoint: (playerID: integer, point: Vector) => void;
/**
 * Builds the trade route with the given terrain type.
 */
declare const rmBuildTradeRoute: (tradeRouteID: integer, terrainTypeName: string) => boolean;
/**
 * Retrieves a waypoint along the trade route based on the fraction.
 */
declare const rmGetTradeRouteWayPoint: (tradeRouteID: integer, fraction: float) => Vector;
/**
 * Creates a trade route in the specified area.
 */
declare const rmCreateTradeRouteWaypointsInArea: (tradeRouteID: integer, areaID: Area, length: float) => integer;
/**
 * Adds random waypoints to the specified trade route.
 */
declare const rmAddRandomTradeRouteWaypointsVector: (tradeRouteID: integer, v: Vector, count: integer, maxVariation: float) => void;
/**
 * Adds random waypoints to the specified trade route.
 */
declare const rmAddRandomTradeRouteWaypoints: (tradeRouteID: integer, endXFraction: float, endZFraction: float, count: integer, maxVariation: float) => void;
/**
 * Adds the given waypoint to the specified trade route.
 */
declare const rmAddTradeRouteWaypointVector: (tradeRouteID: integer, v: Vector) => void;
/**
 * Adds the given waypoint to the specified trade route.
 */
declare const rmAddTradeRouteWaypoint: (tradeRouteID: integer, xFraction: float, zFraction: float) => void;
/**
 * Creates a trade route.
 */
declare const rmCreateTradeRoute: () => integer;
/**
 * Add given grouping to specified class.
 */

declare const rmAddGroupingToClass: (GroupingID: integer, classId: integer) => boolean;
/**
 * Set the maximum distance for the grouping (in meters).
 */
declare const rmSetGroupingMaxDistance: (defID: integer, dist: float) => void;
/**
 * Set the minimum distance for the grouping (in meters).
 */
declare const rmSetGroupingMinDistance: (defID: integer, dist: float) => void;
/**
 * Place grouping for the player in the given area.
 */
declare const rmPlaceGroupingInArea: (groupingID: integer, playerID: integer, areaID: Area, placeCount: integer) => void;
/**
 * Place grouping at specified point.
 */
declare const rmPlaceGroupingAtPoint: (groupingID: integer, playerID: integer, point: Vector, placeCount: integer) => boolean;
/**
 * Place grouping at specified location.
 */
declare const rmPlaceGroupingAtLoc: (groupingID: integer, playerID: integer, xFraction: float, zFraction: float, placeCount?: integer) => integer;
/**
 * Add specified constraint to a grouping.
 */
declare const rmAddGroupingConstraint: (GroupingID: integer, constraintID: Constraint) => boolean;
/**
 * Creates a grouping.
 */
declare const rmCreateGrouping: (name: string, filename: string) => integer;
declare const rmSetIgnoreForceToGaia: (val: boolean) => void;
declare const rmDefineConstant: (name: string, value: integer) => void;
declare const rmGetUnitPlacedOfPlayer: (objectDefID: integer, playerID: integer) => float;
declare const rmGetUnitPlaced: (objectDefID: integer, index: integer) => void;
declare const rmGetNumberUnitsPlaced: (objectDefID: integer) => void;
declare const rmAddUnitsToArmy: (playerID: integer, armyID: integer, objectDefID: integer) => void;
declare const rmCreateArmy: (playerID: integer, armyName: string) => void;
declare const rmSetTriggerEffectParamArmy: (paramName: string, playerID: integer, armyID: integer, add: boolean) => void;
declare const rmSetTriggerEffectParamFloat: (paramName: string, value: float, add: boolean) => void;
declare const rmSetTriggerEffectParamInt: (paramName: string, value: integer, add: boolean) => void;
declare const rmSetTriggerEffectParam: (paramName: string, value: any, add: any) => void;
declare const rmAddTriggerEffect: (effectType: string) => void;
declare const rmSetTriggerConditionParamArmy: (paramName: string, playerID: integer, armyID: integer, add: boolean) => void;
declare const rmSetTriggerConditionParamFloat: (paramName: string, value: float, add: boolean) => void;
declare const rmSetTriggerConditionParamInt: (paramName: string, value: integer, add: boolean) => void;
declare const rmSetTriggerConditionParam: (paramName: string, value: any, add: boolean) => void;
declare const rmAddTriggerCondition: (conditionType: string) => void;
declare const rmSetTriggerLoop: (loop: boolean) => void;
declare const rmSetTriggerRunImmediately: (runImmediately: boolean) => void;
declare const rmSetTriggerActive: (active: boolean) => void;
declare const rmSetTriggerPriority: (priority: integer) => void;
declare const rmTriggerID: (triggerName: string) => void;
declare const rmSwitchToTrigger: (triggerID: integer) => void;
declare const rmCreateTrigger: (triggerName: string) => void;
declare const rmSetVPFile: (filename: string) => void;
declare const sqrt: (x: float) => float;
/**
 * Sets the friendly cool loading screen text.
 */
declare const rmSetStatusText: (status: string, progress: float) => void;
/**
 * Add specified constraint for a connection end point.
 */
declare const rmAddConnectionEndConstraint: (connectionID: integer, constraintID: integer) => boolean;
/**
 * Add specified constraint for a connection start point.
 */
declare const rmAddConnectionStartConstraint: (connectionID: integer, constraintID: integer) => boolean;
/**
 * Add specified constraint to a connection.
 */
declare const rmAddConnectionConstraint: (connectionID: integer, constraintID: integer) => boolean;
/**
 * Adds the connection to specified class.
 */
declare const rmAddConnectionToClass: (connectionID: integer, classID: integer) => void;
/**
 * Builds the given connection.
 */
declare const rmBuildConnection: (connectionID: integer) => void;
/**
 * Sets the base terrain cost for a connection.
 */
declare const rmSetConnectionBaseTerrainCost: (connectionID: integer, cost: float) => void;
/**
 * Sets the terrain cost for a connection.
 */
declare const rmSetConnectionTerrainCost: (connectionID: integer, terrainTypeName: string, cost: float) => void;
/**
 * Adds a terrain replacement rule to the connection.
 */
declare const rmAddConnectionTerrainReplacement: (connectionID: integer, terrainTypeName: string, newTypeName: string) => void;
/**
 * Sets connection edge smoothing distance :(distance is number of neighboring points to consider in each direction).
 */
declare const rmSetConnectionSmoothDistance: (connectionID: integer, width: float) => void;
/**
 * Sets how smoothly connection height blends into surroundings.
 */
declare const rmSetConnectionHeightBlend: (connectionID: integer, width: float) => void;
/**
 * Sets whether a connection warns on failure.
 */
declare const rmSetConnectionWarnFailure: (connectionID: integer, warn: boolean) => void;
/**
 * Sets area coherence :(0-1).
 */
declare const rmSetConnectionCoherence: (connectionID: integer, width: float) => void;
/**
 * Sets the base height of a connection.
 */
declare const rmSetConnectionBaseHeight: (connectionID: integer, width: float) => void;
/**
 * Sets the width of a connection.
 */
declare const rmSetConnectionWidth: (connectionID: integer, width: float, variance: float) => void;
/**
 * Sets the position variance of a connection.
 */
declare const rmSetConnectionPositionVariance: (connectionID: integer, variance: float) => void;
/**
 * Adds an area to the connection.
 */
declare const rmAddConnectionArea: (connectionID: integer, areaID: Area) => void;
/**
 * Sets the connection type.
 */
declare const rmSetConnectionType: (connectionID: integer, connectionType: integer, connectAll: boolean, connectPercentage: float) => void;
/**
 * Creates an connection.
 */
declare const rmCreateConnection: (name: string) => void;
/**
 * Place object definition for the player in a random area in the given class.
 */
declare const rmPlaceObjectDefInRandomAreaOfClass: (defID: integer, playerID: integer, classID: integer, placeCount: integer) => void;
/**
 * Place object definition for the player at the location of a random area in the given class.
 */
declare const rmPlaceObjectDefAtRandomAreaOfClass: (defID: integer, playerID: integer, classID: integer, placeCount: integer) => void;
/**
 * Place object definition for the player in the given area.
 */
declare const rmPlaceObjectDefInArea: (defID: integer, playerID: integer, areaID: Area, placeCount?: integer) => void;
/**
 * Place object definition for the player at the given area\s location.
 */
declare const rmPlaceObjectDefAtAreaLoc: (defID: integer, playerID: integer, areaID: Area, placeCount?: integer) => void;
/**
 * Place object definition per player.
 */
declare const rmPlaceObjectDefPerPlayer: (defID: integer, playerOwned: boolean, placeCount?: integer) => void;
/**
 * Set the trade route for all objects in this object definition.
 */
declare const rmSetObjectDefTradeRouteID: (defID: integer, tradeRouteID: integer) => void;
/**
 * Place object definition at specific point for given player.
 */
declare const rmPlaceObjectDefAtPoint: (defID: integer, playerID: integer, point: Vector, placeCount?: integer) => void;
/**
 * Place object definition at specific location for given player.
 */
declare const rmPlaceObjectDefAtLoc: (defID: integer, playerID: integer, xFraction: float, zFraction: float, placeCount?: integer) => void;
/**
 * Add item to object definition.
 */
declare const rmAddObjectDefItemByTypeID: (defID: integer, unitTypeID: integer, count: integer, clusterDistance: float) => void;
/**
 * Add item to object definition.
 */
declare const rmAddObjectDefItem: (defID: integer, unitName: string, count: integer, clusterDistance: float) => void;
/**
 * Forces things in this object def to get full arbitrary rotation.
 */
declare const rmSetObjectDefForceFullRotation: (defID: integer, on: boolean) => void;
/**
 * Lets objects overlap within this object def.
 */
declare const rmSetObjectDefAllowOverlap: (defID: integer, on: boolean) => void;
/**
 * Set a herd angle:(clockwise from +z) in the object def.
 */
declare const rmSetObjectDefHerdAngle: (defID: integer, angle: float) => void;
/**
 * Creates a herd out of all units placed in this object def.
 */
declare const rmSetObjectDefCreateHerd: (defID: integer, on: boolean) => void;
/**
 * Turn on the garrison starting units flag.
 */
declare const rmSetObjectDefGarrisonStartingUnits: (defID: integer, on: boolean) => void;
/**
 * Turn on the garrison secondary units flag.
 */
declare const rmSetObjectDefGarrisonSecondaryUnits: (defID: integer, on: boolean) => void;
/**
 * Set the maximum distance for the object definition :(in meters).
 */
declare const rmSetObjectDefMaxDistance: (defID: integer, dist: float) => void;
/**
 * Set the minimum distance for the object definition :(in meters).
 */
declare const rmSetObjectDefMinDistance: (defID: integer, dist: float) => void;
/**
 * Creates special object definition for starting units with the given cluster distance.
 */
declare const rmCreateStartingUnitsObjectDef: (clusterDistance: float) => integer;
/**
 * Creates an object definition.
 */
declare const rmCreateObjectDef: (name: string) => integer;
/**
 * Gets constraint ID for given constraint name.
 */
declare const rmConstraintID: (name: string) => void;
/**
 * Gets class ID for given class name.
 */
declare const rmClassID: (name: string) => float;
/**
 * Add given object def to specified class.
 */
declare const rmAddObjectDefToClass: (objectDefID: integer, classID: integer) => boolean;
/**
 * Add given area to specified class.
 */
declare const rmAddAreaToClass: (areaID: Area, classID: integer) => boolean;
/**
 * Define a class with the given name.
 */
declare const rmDefineClass: (className: string) => integer;
/**
 * Add specified constraint to given object def.
 */
declare const rmAddObjectDefConstraint: (defID: integer, constraintID: Constraint) => boolean;
/**
 * Add specified constraint to a fairLoc placement.
 */
declare const rmAddFairLocConstraint: (fairLocID: integer, constraintID: Constraint) => boolean;
/**
 * Make an max height constraint :(terrain must be less than given height).
 */
declare const rmCreateMaxHeightConstraint: (name: string, height: float) => Constraint;
/**
 * Create home city gather point constraint to avoid given player\s enemy\s HCGPs.
 */
declare const rmCreateHCGPEnemyConstraint: (name: string, playerID: integer, minDistance: float) => boolean;
/**
 * Create home city gather point constraint to avoid given player\s ally\s HCGPs.
 */
declare const rmCreateHCGPAllyConstraint: (name: string, playerID: integer, minDistance: float) => boolean;
/**
 * Create home city gather point constraint to avoid given player\s HCGP.
 */
declare const rmCreateHCGPSelfConstraint: (name: string, playerID: integer, minDistance: float) => integer;
/**
 * Create home city gather point constraint to avoid all HCGPs.
 */
declare const rmCreateHCGPConstraint: (name: string, minDistance: float) => integer;
/**
 * Add specified constraint to an area.
 */
declare const rmAddAreaConstraint: (areaID: Area, constraintID: Constraint) => boolean;
/**
 * Make a constraint to avoid trade routes.
 */
declare const rmCreateTradeRouteDistanceConstraint: (name: string, minDistance: float) => Constraint;
/**
 * Make a constraint to pass if in or out of a corner.
 */
declare const rmCreateCornerConstraint: (name: string, corner: integer, outside: boolean) => Constraint;
/**
 * Make a constraint to be close to terrain with certain a passability.
 */
declare const rmCreateTerrainMaxDistanceConstraint: (name: string, type: string, passable: boolean, distance: float) => Constraint;
/**
 * Make a constraint to avoid terrain with certain a passability.
 */
declare const rmCreateTerrainDistanceConstraint: (name: string, type: string, passable: boolean, distance: float) => Constraint;
/**
 * Make a type distance constraint.
 */
declare const rmCreateTypeDistanceConstraint: (name: string, classID: integer | string, distance: float) => Constraint;
/**
 * Make a class distance constraint.
 */
declare const rmCreateClassDistanceConstraint: (name: string, classID: integer, distance: float) => Constraint;
/**
 * Make an area cliff ramp edge max distance constraint.
 */
declare const rmCreateCliffRampMaxDistanceConstraint: (name: string, areaID: Area, distance: float) => Constraint;
/**
 * Make an area cliff ramp edge distance constraint.
 */
declare const rmCreateCliffRampDistanceConstraint: (name: string, areaID: Area, distance: float) => Constraint;
/**
 * Make a constraint that forces something to remain within an area\s cliff ramp edge.
 */
declare const rmCreateCliffRampConstraint: (name: string, areaID: Area) => Constraint;
/**
 * Make an area cliff edge max distance constraint.
 */
declare const rmCreateCliffEdgeMaxDistanceConstraint: (name: string, areaID: Area, distance: float) => Constraint;
/**
 * Make an area cliff edge distance constraint.
 */
declare const rmCreateCliffEdgeDistanceConstraint: (name: string, areaID: Area, distance: float) => Constraint;
/**
 * Make a constraint that forces something to remain within an area\s cliff edge.
 */
declare const rmCreateCliffEdgeConstraint: (name: string, areaID: Area) => Constraint;
/**
 * Make an area edge max distance constraint.
 */
declare const rmCreateEdgeMaxDistanceConstraint: (name: string, areaID: Area, distance: float) => Constraint;
/**
 * Make an area edge distance constraint.
 */
declare const rmCreateEdgeDistanceConstraint: (name: string, areaID: Area, distance: float) => Constraint;
/**
 * Make a constraint that forces something to remain within an area\s edge.
 */
declare const rmCreateEdgeConstraint: (name: string, areaID: Area) => Constraint;
/**
 * Make an area max distance constraint.
 */
declare const rmCreateAreaMaxDistanceConstraint: (name: string, areaID: Area, distance: float) => Constraint;
/**
 * Make an area distance constraint.
 */
declare const rmCreateAreaDistanceConstraint: (name: string, areaID: Area, distance: float) => Constraint;
/**
 * Make a constraint that forces something to remain within an area.
 */
declare const rmCreateAreaConstraint: (name: string, areaID: Area) => Constraint;
/**
 * Make an area overlap constraint.
 */
declare const rmCreateAreaOverlapConstraint: (name: string, areaID: Area) => Constraint;
/**
 * Makes a 'pie' constraint.
 */
declare const rmCreatePieConstraint: (name: string, xFraction: float, zFraction: float, insideRadius: float, outsideRadius: float, minAngle: float, maxAngle: float, bufferFraction?: float) => Constraint;
/**
 * Make a box constraint.
 */
declare const rmCreateBoxConstraint: (name: string, startX: float, startZ: float, endX: float, endZ: float, bufferFraction?: float) => Constraint;
/**
 * Sets a team\s 'official' area.
 */
declare const rmSetTeamArea: (teamID: integer, areaID: Area) => void;
/**
 * Gets the number of players on the given team.
 */
declare const rmGetNumberPlayersOnTeam: (teamID: integer) => integer;
/**
 * Gets the culture the specified player is on.
 */
declare const rmGetPlayerCulture: (playerID: integer) => string;
/**
 * Gets the civilization the specified player is on.
 */
declare const rmGetPlayerCiv: (playerID: integer) => integer;
/**
 * Gets the team the specified player is on.
 */
declare const rmGetPlayerTeam: (playerID: integer) => integer;
/**
 * Gets a player\s name.
 */
declare const rmGetPlayerName: (playerID: integer) => string;
/**
 * Multiplys a player\s resource amount by the given factor.
 */
declare const rmMultiplyPlayerResource: (playerID: integer, resourceName: string, factor: float) => void;
/**
 * Adds to a player\s resource amount.
 */
declare const rmAddPlayerResource: (playerID: integer, resourceName: string, amount: float) => void;
/**
 * Sets a player\s resource amount.
 */
declare const rmSetPlayerResource: (playerID: integer, resourceName: string, amount: float) => void;
/**
 * Gets a player\s fairLoc z fraction.
 */
declare const rmFairLocZFraction: (playerID: integer, index: float) => float;
/**
 * Gets a player\s fairLoc x fraction.
 */
declare const rmFairLocXFraction: (playerID: integer, index: float) => float;
/**
 * Gets a player\s number of fairLocs.
 */
declare const rmGetNumberFairLocs: (playerID: integer) => integer;
/**
 * Resets fairLoc placment info.
 */
declare const rmResetFairLocs: () => void;
/**
 * Sets fairLoc placement locations.
 */
declare const rmPlaceFairLocs: () => boolean;
/**
 * Adds some fairLoc placement info.
 */
declare const rmAddFairLoc: (unitName: string, forward: boolean, inside: boolean, minPlayerDist: float, maxPlayerDist: float, locDist: float, edgeDist: float, playerArea: integer, teamArea: integer) => integer;
/**
 * Gets a player\s start location z fraction.
 */
declare const rmPlayerLocZFraction: (playerID: integer) => float;
/**
 * Gets a player\s start location x fraction.
 */
declare const rmPlayerLocXFraction: (playerID: integer) => float;
/**
 * Sets a player\s 'official' area.
 */
declare const rmSetPlayerArea: (playerID: integer, areaID: Area) => void;
/**
 * Sets one player location.
 */
declare const rmPlacePlayer: (playerID: integer, xFraction: float, zFraction: float) => void;
/**
 * Makes a line of player locations along the specified river.
 */
declare const rmPlacePlayersRiver: (riverID: integer, distVariation: float, spacingVariation: float, edgeDistance: float) => void;
/**
 * Makes a line of player locations.
 */
declare const rmPlacePlayersLine: (x1: float, z1: float, x2: float, z2: float, distVariation: float, spacingVariation: float) => void;
/**
 * Makes a square of player locations.
 */
declare const rmPlacePlayersSquare: (dist: float, distVariation: float, spacingVariationfloat: float) => void;
/**
 * Makes a circle of player locations.
 */
declare const rmPlacePlayersCircular: (minFraction: float, maxFraction: float, angleVariation: float) => void;
/**
 * Sets the section of the placement line to use.
 */
declare const rmSetPlacementSection: (fromPercent: float, toPercent: float) => void;
/**
 * Sets the team to place.
 */
declare const rmSetPlacementTeam: (teamID: integer) => void;
/**
 * Sets the team spacing modifier.
 */
declare const rmSetTeamSpacingModifier: (modifier: float) => void;
/**
 * Sets the area of the map to use for player placement.
 */
declare const rmSetPlayerPlacementArea: (minX: float, minZ: float, maxX: float, maxZ: float) => void;
/**
 * Manually sets a player\s starting location.
 */
declare const rmSetPlayerLocation: (playerID: integer, xFraction: float, zFraction: float) => void;
/**
 * Adds mercs of to the merc manager for this game.
 */
declare const rmAddMerc: (unitName: string, count: float, minCount: float, maxCount: float, countIncrement: float, multipleUses: boolean) => void;
/**
 * Returns the civ ID.
 */
declare const rmGetCivID: (civName: string) => integer;
/**
 * Sets a given sub civ in the world.
 */
declare const rmSetSubCiv: (index: integer, civName: string, big?: boolean) => void;
/**
 * Allocates the number of sub civs in the world.
 */
declare const rmAllocateSubCivs: (number: integer) => boolean;
/**
 * Sets Gaia\s civilization
 */
declare const rmSetGaiaCiv: (civ: integer) => void;
/**
 * applies a lighting set effect.
 */
declare const rmDoLightingEffect: (lightSetName: string, blendInTime: integer, effectTime: integer, blendOutTime: integer) => void;
/**
 * applies a lighting set fade.
 */
declare const rmDoLightingFade: (lightSetName: string, fadeTime: integer) => void;
/**
 * Sets a lighting set
 */
declare const rmSetLightingSet: (name: string) => void;
/**
 * Fill map corners with blackmap.
 */
declare const rmFillMapCorners: () => void;
/**
 * Initializes the terrain to the base type and height.
 */
declare const rmTerrainInitialize: (baseTerrain: string, height?: float) => void;
/**
 * sets the global wind magnitude :(1.0f is default).
 */
declare const rmSetWindMagnitude: (magnitude: float) => void;
/**
 * sets storm length and time between storm in seconds.
 */
declare const rmSetGlobalStormLength: (length: float, timeBetweenStorms: float) => void;
/**
 * sets the global rain percent.
 */
declare const rmSetGlobalRain: (percent: float) => void;
/**
 * sets the global snow percent.
 */
declare const rmSetGlobalSnow: (percent: float) => void;
/**
 * Sets the area to be revealed :(-1 means dont reveal, 0 means reveal, >0 means reveal plus that number of extra tiles.
 */
declare const rmSetAreaReveal: (areaID: Area, tiles: integer) => void;
/**
 * Sets the area elevation variation noise bias :(-1 means down only, 0 means +- equally, 1 means up only.)
 */
declare const rmSetAreaElevationNoiseBias: (areaID: Area, bias: float) => void;
/**
 * Sets the area elevation noise to falloff as it gets closer to the area edge.
 */
declare const rmSetAreaElevationEdgeFalloffDist: (areaID: Area, dist: float) => void;
/**
 * Sets the area elevation variation height :(amount to vary +- from area base height).
 */
declare const rmSetAreaElevationVariation: (areaID: Area, variation: float) => void;
/**
 * Sets the area elevation variation noise persistence :(best >0 and <1).
 */
declare const rmSetAreaElevationPersistence: (areaID: Area, persistence: float) => void;
/**
 * Sets the area elevation variation noise octaves.
 */
declare const rmSetAreaElevationOctaves: (areaID: Area, octaves: float) => void;
/**
 * Sets the area elevation variation noise frequency :(best >0 and <1).
 */
declare const rmSetAreaElevationMinFrequency: (areaID: Area, freq: float) => void;
/**
 * Sets the area elevation variation type :(cElevNormal, cElevFractalSum, cElevTurbulence).
 */
declare const rmSetAreaElevationType: (areaID: Area, type: float) => void;
/**
 * Adds a terrain replacement rule to the area.
 */
declare const rmAddAreaTerrainReplacement: (areaID: Area, terrainTypeName: string, newTypeName: string) => void;
/**
 * Add an unit type that the specified area removes.
 */
declare const rmAddAreaRemoveType: (areaID: Area, typeName: string) => void;
/**
 * Adds an area influence segment.
 */
declare const rmAddAreaInfluenceSegment: (areaID: Area, xFraction1: float, zFraction1: float, xFraction2: float, zFraction2: float) => void;
/**
 * Adds an area influence point.
 */
declare const rmAddAreaInfluencePoint: (areaID: Area, xFraction: float, zFraction: float) => void;
/**
 * Gets area ID for given area name.
 */
declare const rmAreaID: (name: string) => void;
/**
 * Sets how smoothly area height blends into surroundings.
 */
declare const rmSetAreaHeightBlend: (areaID: Area, heightBlend: integer) => void;
/**
 * Sets area edge smoothing distance :(distance is number of neighboring points to consider in each direction).
 */
declare const rmSetAreaSmoothDistance: (areaID: Area, smoothDistance: integer) => void;
/**
 * Sets area coherence :(0-1).
 */
declare const rmSetAreaCoherence: (areaID: Area, coherence: float) => void;
/**
 * Sets maximum blob distance.
 */
declare const rmSetAreaMaxBlobDistance: (areaID: Area, dist: float) => void;
/**
 * Sets minimum blob distance.
 */
declare const rmSetAreaMinBlobDistance: (areaID: Area, dist: float) => void;
/**
 * Sets maximum number of area blobs.
 */
declare const rmSetAreaMaxBlobs: (areaID: Area, blobs: integer) => void;
/**
 * Sets minimum number of area blobs.
 */
declare const rmSetAreaMinBlobs: (areaID: Area, blobs: integer) => void;
/**
 * Specifies if the area should vary the terrain layer edges.
 */
declare const rmSetAreaTerrainLayerVariance: (areaID: Area, variance: boolean) => void;
/**
 * Adds a terrain layer to an area.
 */
declare const rmAddAreaTerrainLayer: (areaID: Area, terrain: string, minDist: float, maxDist: float) => void;
/**
 * Determines whether an area obeys world circle constraint.
 */
declare const rmSetAreaObeyWorldCircleConstraint: (areaID: Area, constrain: boolean) => void;
/**
 * sets whether RM activities should be constrained to the main world circle.
 */
declare const rmSetWorldCircleConstraint: (constrain: boolean) => void;
/**
 * sets up river foundation parameters: the terrain buffer around the river, and the height of the banks above water level
 */
declare const rmSetRiverFoundationParams: (tileBuffer: integer, heightOffset: float) => void;
/**
 * reveals a river plus the specified number of extra tiles around it.
 */
declare const rmRiverReveal: (riverID: River, extraTiles: integer) => void;
declare const rmRiverAvoid: (riverID: River, riverID2: River, minDist: float) => void;
declare const rmRiverAddShallows: (riverID: River, count: integer, radius: float) => void;
declare const rmRiverAddShallow: (riverID: River, distancePct: float) => void;
declare const rmRiverSetShallowRadius: (riverID: River, radius: float) => void;
declare const rmRiverBuild: (riverID: River) => void;
declare const rmRiverSetBankNoiseParams: (riverID: integer, frequency: float, octaves: float, persistence: float, sineLength: float, sineAmt: float, variation: float) => void;
/**
 * Add waypoint to a river. Dont mix with rmRiverSetConnections or rmRiverConnectRiver
 */
declare const rmRiverAddWaypoint: (riverID: River, xFraction: float, zFraction: float) => void;
declare const rmRiverConnectRiver: (riverID1: River, riverID2: integer, pct: any, end: any) => void;
declare const rmRiverSetConnections: (riverID: River, start: float, end: float) => void;
/**
 * make a river dude.
 */
declare const rmRiverCreate: (areaID: Area, waterType: string, breaks: integer, offset: integer, minR: integer, maxR: integer) => River;
/**
 * Adds a class for an area\s cliff edge to avoid.
 */
declare const rmAddAreaCliffEdgeAvoidClass: (areaID: Area, avoidID: integer, minDist: float) => void;
/**
 * Set an area\s cliff height.
 */
declare const rmSetAreaCliffHeight: (areaID: Area, val: float, variance: float, ramp: float) => void;
/**
 * Set cliff edge parameters for an area.
 */
declare const rmSetAreaCliffEdge: (areaID: Area, count: integer, size: float, variance?: float, spacing?: float, mapEdge?: integer) => void;
/**
 * Set cliff painting options for an area.
 */
declare const rmSetAreaCliffPainting: (areaID: Area, paintGround: boolean, paintOutsideEdge: boolean, paintSide: boolean, minSideHeight?: float, paintInsideEdge?: boolean) => void;
/**
 * Sets the cliff type for an area.
 */
declare const rmSetAreaCliffType: (areaID: Area, cliffName: string) => void;
/**
 * Returns the point in areaID that\s closest to the given point, optionally requiring that it pass the given constraint.
 */
declare const rmGetAreaClosestPoint: (areaID: Area, point: Vector, pullback: float, constraintID: integer) => Vector;
/**
 * Sets the water type for an area.
 */
declare const rmSetAreaWaterType: (areaID: Area, waterName: string) => void;

/**
 * Sets the forest density for an area.
 */
declare const rmSetAreaForestUnderbrush: (areaID: Area, density: float) => void;
/**
 * Sets the forest density for an area.
 */
declare const rmSetAreaForestClumpiness: (areaID: Area, density: float) => void;
/**
 * Sets the forest density for an area.
 */
declare const rmSetAreaForestDensity: (areaID: Area, density: float) => void;
/**
 * Sets the forest type for an area.
 */
declare const rmSetAreaForestType: (areaID: Area, forestName: string) => void;
/**
 * Sets whether the area build process will warn if it fails.
 */
declare const rmSetAreaWarnFailure: (areaID: Area, warn: boolean) => void;
/**
 * Sets the base height for an area.
 */
declare const rmSetAreaBaseHeight: (areaID: Area, height: float) => void;
/**
 * Paints the area\s tiles in the specified angle range with specified terrain :(with outerRange buffer if feathering is desired).
 */
declare const rmPaintAreaTerrainByAngle: (areaID: Area, terrain: string, minAngle: float, maxAngle: float, outerRange: float) => void;
/**
 * Paints the area\s tiles in the specified height range with specified terrain :(with outerRange buffer if feathering is desired).
 */
declare const rmPaintAreaTerrainByHeight: (areaID: Area, terrain: string, minHeight: float, maxHeight: float, outerRange: float) => void;
/**
 * Paints the terrain for a specified area.
 */
declare const rmPaintAreaTerrain: (areaID: Area) => void;
/**
 * Sets the mix for an area. Overrides terrain type if it is also set.
 */
declare const rmSetAreaMix: (areaID: Area, mixName: string) => void;
/**
 * Sets the terrain type for an area.
 */
declare const rmSetAreaTerrainType: (areaID: Area, terrainTypeName: string) => void;
/**
 * Simulatenously builds all unbuilt areas.
 */
declare const rmBuildAllAreas: () => void;
/**
 * Builds the specified area.
 */
declare const rmBuildArea: (areaID: Area) => boolean;
/**
 * Set the area location to team\s location.
 */
declare const rmSetAreaLocTeam: (areaID: Area, teamID: integer) => void;
/**
 * Set the area location to player\s location.
 */
declare const rmSetAreaLocPlayer: (areaID: Area, playerID: integer) => void;
/**
 * Set the area location.
 */
declare const rmSetAreaLocation: (areaID: Area, xFraction: float, zFraction: float) => void;
/**
 * Enable edge filling and set a border search size :(for Carolina and similar maps with a big continent).
 */
declare const rmSetAreaEdgeFilling: (areaID: Area, borderSize: integer) => void;
/**
 * Set the area size to a min/max fraction of the map.
 */
declare const rmSetAreaSize: (areaID: Area, minFraction: float, maxFraction: float) => void;
/**
 * Creates an area.
 */
declare const rmCreateArea: (name: string, parentAreaID?: Area) => Area;
/**
 * Converts meters a fraction of the map in the z direction to meters.
 */
declare const rmZFractionToMeters: (meters: float) => float;
/**
 * Converts a fraction of the map in the x direction to meters.
 */
declare const rmXFractionToMeters: (meters: float) => float;
/**
 * Converts meters into a fraction of the map in the z direction.
 */
declare const rmZMetersToFraction: (meters: float) => float;
/**
 * Converts meters into a fraction of the map in the x direction.
 */
declare const rmXMetersToFraction: (meters: float) => float;
/**
 * Converts a number of tiles to a distance in meters.
 */
declare const rmTilesToMeters: (tiles: integer) => float;
/**
 * Converts a distance in meters to a number of tiles.
 */
declare const rmMetersToTiles: (meters: float) => float;
/**
 * Converts an angle in degrees to radians.
 */
declare const rmDegreesToRadians: (degrees: float) => float;
/**
 * Converts tile count in the z direction to fraction of map.
 */
declare const rmZTilesToFraction: (tiles: integer) => float;
/**
 * Converts an fraction of the map in the z direction to tile count.
 */
declare const rmZFractionToTiles: (fraction: float) => float;
/**
 * Converts tile count in the x direction to fraction of map.
 */
declare const rmXTilesToFraction: (tiles: integer) => float;
/**
 * Converts an fraction of the map in the x direction to tile count.
 */
declare const rmXFractionToTiles: (fraction: float) => float;
/**
 * Converts area tile count to fraction of map.
 */
declare const rmAreaTilesToFraction: (tiles: integer) => float;
/**
 * Converts an area from fraction of the map to tile count.
 */
declare const rmAreaFractionToTiles: (fraction: float) => float;
/**
 * sets up cluster system; standard inputs to noise generator used to determine cluster placement.
 */
declare const rmSetMapClusteringNoiseParams: (minFrequency: float, octaves: integer, persistence: float) => void;
/**
 * sets up cluster system; min/max objects per tile :(default: 0-3), and max random offset when placing :(default: 0.5 tiles).
 */
declare const rmSetMapClusteringObjectParams: (minObjectCount: integer, maxObjectCount: integer, maxPosOffset: float) => void;
/**
 * sets up cluster system; valid ranges are from -1.0 to 1.0 and are compared to the internal noise field for deciding where to paint terrain and place clusters. Type is cClusterLand, or cClusterWater, or cClusterShallowWater, or cClusterEverywhere.
 */
declare const rmSetMapClusteringPlacementParams: (paintThreshold: float, placeMinVal: float, placeMaxVal: float, type: integer) => void;
/**
 * place object clusters :(of the specified protounit) around the map, and also optionally paint with the specified terrain.
 */
declare const rmPlaceMapClusters: (terrain: string, protounit: string) => void;
/**
 * Sets how much to smooth the overall terrain after initializing with noise.
 */
declare const rmSetMapElevationHeightBlend: (blend: integer) => void;
/**
 * Adds a terrain to paint on tiles that are sloped between the specified angles :(0 degrees is flat terrain, 90 degrees is sheer terrain), modified by a random number between 0.0 and outerRange.
 */
declare const rmAddMapTerrainByAngleInfo: (terrain: string, minSlope: float, maxSlope: float, outerRange: float) => void;
/**
 * Adds a terrain to paint between the specified heights, modified by a random number between 0.0 and outerRange.
 */
declare const rmAddMapTerrainByHeightInfo: (terrain: string, minHeight: float, maxHeight: float, outerRange: float) => void;
/**
 * Initializes the base terrain with the requested mix. Call before rmTerrainInitialize.
 */
declare const rmSetBaseTerrainMix: (mixName: string) => void;
/**
 * Sets up terrain for initializing with a noise layer.
 */
declare const rmSetMapElevationParameters: (type: integer, freq: float, octaves: float, persistence: float, variation: float) => void;
/**
 * Sets the sea type for the map. This is used if terrain is initialized to water.
 */
declare const rmSetSeaType: (name: string) => void;
/**
 * Gets the sea level for the map.
 */
declare const rmGetSeaLevel: () => void;
/**
 * Sets the sea level for the map.
 */
declare const rmSetSeaLevel: (level: float) => void;
/**
 * Returns the Z size of the map.
 */
declare const rmGetMapZSize: () => integer;
/**
 * Returns the X size of the map.
 */
declare const rmGetMapXSize: () => integer;
/**
 * Sets the size of the map.
 */
declare const rmSetMapSize: (x: integer, z: integer) => void;
/**
 * Returns true if this map is set to be a King of the Hill game.
 */
declare const rmGetIsKOTH: () => boolean;
/**
 * Returns true if this map is set to be a relic game..
 */
declare const rmGetIsRelicCapture: () => boolean;
/**
 * Returns true if this map is set to be a FFA game which means each player on their own team.
 */
declare const rmGetIsFFA: () => boolean;
/**
 * Returns true if this map is to place a covered wagon instead of a town center.
 */
declare const rmGetNomadStart: () => boolean;
/**
 * Returns a random integer between min and max.
 */
declare const rmRandInt: (min: integer, max: integer) => integer;
/**
 * Returns a random  between min and max.
 */
declare const rmRandFloat: (min: float, max: float) => float;
/**
 * Random map echo.
 */
declare const rmEchoInfo: (echoString: string, level?: integer) => void;
/**
 * Random map echo.
 */
declare const rmEchoError: (echoString: string, level?: integer) => void;
/**
 * Random map echo.
 */
declare const rmEchoWarning: (echoString: string, level: integer) => void;
declare const chooseMercs: () => void;
declare const ypIsAsian: (playerId: integer) => boolean;
declare const ypMonasteryBuilder: (playerId: integer, quantity?: integer) => integer;
declare const ypKingsHillPlacer: (xLoc: float, yLoc: float, maxDistancePercentage: float, constraint: Constraint) => void;
declare const ypKingsHillLandfill: (xLoc: float, yLoc: float, unknown1: float, unknown2: float, mix: string, unknown3: integer) => void;

declare const xsVectorGetX: (position: Vector) => float;
declare const xsVectorGetZ: (position: Vector) => float;
declare const xsVectorSet: (x: float, z: float, y: float) => Vector;
declare const rmFindClosestPointVector: (position: Vector, distance: float) => Vector;

declare const cNumberNonGaiaPlayers: integer;
declare const cNumberPlayers: integer;
declare const cNumberTeams: integer;
declare const cElevTurbulence: integer;
declare let i: integer;
declare let j: integer;
declare let k: integer;

type IWater =
    | 'atlantic coast'
    | 'caribbean coast'
    | 'cinematic ship ocean'
    | 'hudson bay'
    | 'bayou spc'
    | 'new england coast'
    | 'yucatan coast'
    | 'great lakes ice'
    | 'great lakes'
    | 'great plains pond'
    | 'texas pond'
    | 'new england lake'
    | 'saguenay lake'
    | 'bayou'
    | 'amsterdam'
    | 'paris'
    | 'berlin'
    | 'lison'
    | 'london'
    | 'seville'
    | 'constantinople'
    | 'iroquois_hc'
    | 'northwest territory water'
    | 'california coast'
    | 'araucania north coast'
    | 'araucania central coast'
    | 'araucania southern coast'
    | 'araucania central coast'
    | 'borneo coast'
    | 'ceylon coast'
    | 'coastal japan'
    | 'borneo water'
    | 'china_hc'
    | 'india_hc'
    | 'yello river flooded';

declare class WATER {
    static ATLANTIC_COAST: string;
    static CARIBBEAN_COAST: string;
    static CINEMATIC_SHIP_OCEAN: string;
    static HUDSON_BAY: string;
    static BAYOU_SPC: string;
    static NEW_ENGLAND_COAST: string;
    static YUCATAN_COAST: string;
    static GREAT_LAKES_ICE: string;
    static GREAT_LAKES: string;
    static GREAT_PLAINS_POND: string;
    static TEXAS_POND: string;
    static NEW_ENGLAND_LAKE: string;
    static SAGUENAY_LAKE: string;
    static BAYOU: string;
    static AMSTERDAM: string;
    static PARIS: string;
    static BERLIN: string;
    static LISON: string;
    static LONDON: string;
    static SEVILLE: string;
    static CONSTANTINOPLE: string;
    static IROQUOIS_HC: string;
    static NORTHWEST_TERRITORY_WATER: string;
    static CALIFORNIA_COAST: string;
    static ARAUCANIA_NORTH_COAST: string;
    static ARAUCANIA_CENTRAL_COAST: string;
    static ARAUCANIA_SOUTHERN_COAST: string;
    static BORNEO_COAST: string;
    static CEYLON_COAST: string;
    static COASTAL_JAPAN: string;
    static BORNEO_WATER: string;
    static CHINA_HC: string;
    static INDIA_HC: string;
    static YELLOW_RIVER_FLOODED: string;
}

declare class CLIFF {
    static ANDES: string;
    static AMAZON: string;
    static CALIFORNIA: string;
    static DECCAN_PLATEAU: string;
    static NEW_ENGLAND: string;
    static ARAUCANIA_CENTRAL: string;
    static PAINTEDDESERT: string;
    static PATAGONIA: string;
    static ROCKY_MOUNTAIN_EDGE: string;
    static ROCKY_MOUNTAIN2: string;
    static SONORA: string;
    static TEXAS: string;
    static TEXAS_GRASS: string;
    static ARAUCANIA_SOUTH: string;
    static NEW_ENGLAND_INLAND_GRASS: string;
    static ARAUCANIA_NORTH_COAST: string;
}

type ICliff = 'andes' | 'California' | 'Deccan Plateau' | 'New England' | 'Araucania Central' | 'Painteddesert' | 'Patagonia' | 'rocky mountain edge' | 'rocky mountain2' | 'Sonora' | 'Texas' | 'Texas Grass' | 'Araucania South' | 'new england inland grass' | 'california' | 'araucania north coast' | 'araucania south' | 'Amazon';

declare class TERRAINS {
    static GREAT_PLAINS_DEFAULT: string;
    static ANDES_GROUND07_AND: string;
    static ANDES_GROUND08_AND: string;
    static ANDES_GROUND09_AND: string;
    static ANDES_GROUND10_AND: string;
    static ANDES_GROUND11_AND: string;
    static ANDES_GROUND12_AND: string;
    static ANDES_GROUND14_AND: string;
    static ANDES_GROUND16_AND: string;
    static ANDES_GROUND17_AND: string;
    static ANDES_GROUND18_AND: string;
    static ANDES_GROUND22_AND: string;
    static ANDES_GROUND25_AND: string;
    static AMAZON_GROUND1_AMA: string;
    static AMAZON_GROUND2_AMA: string;
    static AMAZON_GROUND3_AMA: string;
    static AMAZON_GROUND4_AMA: string;
    static AMAZON_GROUND5_AMA: string;
    static AMAZON_GROUNDFOREST_AMA: string;
    static AMAZON_CLIFF_TOP1_AMA: string;
    static AMAZON_RIVER3_AM: string;
    static ARAUCANIA_GROUND12_ARA: string;
    static ARAUCANIA_GROUND07_ARA: string;
    static ARAUCANIA_GROUND09_ARA: string;
    static ARAUCANIA_GROUND_GRASS1_ARA: string;
    static ARAUCANIA_GROUND08_ARA: string;
    static ARAUCANIA_GROUND10_ARA: string;
    static ARAUCANIA_GROUND_GRASS2_ARA: string;
    static ARAUCANIA_GROUND_GRASS3_ARA: string;
    static ARAUCANIA_GROUND11_ARA: string;
    static ARAUCANIA_GROUNDFORESTCENTRAL: string;
    static ARAUCANIA_GROUND_DIRT1_ARA: string;
    static ARAUCANIA_GROUND_DIRT2_ARA: string;
    static ARAUCANIA_GROUND_DIRT3_ARA: string;
    static ARAUCANIA_CLIFF_COAST2_ARA: string;
    static ARAUCANIA_CLIFF_COAST3_ARA: string;
    static ARAUCANIA_CLIFF_DIRT_SNOW_ARA: string;
    static ARAUCANIA_CLIFF_COAST_ARA: string;
    static ARAUCANIA_CLIFF_DIRT2_ARA: string;
    static ARAUCANIA_CLIFF_DIRT_ARA: string;
    static ARAUCANIA_GROUND_SNOW1_ARA: string;
    static ARAUCANIA_GROUND_SNOW2_ARA: string;
    static ARAUCANIA_GROUND_SNOW3_ARA: string;
    static ARAUCANIA_GROUND_SNOW4_ARA: string;
    static ARAUCANIA_GROUND_SNOW5_ARA: string;
    static BAYOU_GROUND1_BAY: string;
    static BAYOU_GROUND2_BAY: string;
    static BAYOU_GROUND3_BAY: string;
    static BAYOU_GROUND5_BAY: string;
    static BAYOU_GROUND6_BAY: string;
    static BAYOU_CLIFF_TOP1_BAY: string;
    static BAYOU_GROUNDFOREST_BAY: string;
    static CALIFORNIA_GROUNDFOREST2_CAL: string;
    static CALIFORNIA_GROUND5_CAL: string;
    static CALIFORNIA_GROUND6_CAL: string;
    static CALIFORNIA_GROUND7_CAL: string;
    static CALIFORNIA_GROUND8_CAL: string;
    static CALIFORNIA_GROUND9_CAL: string;
    static CALIFORNIA_FAKECALIFGRASSMIX_CAL: string;
    static CALIFORNIA_FAKECALIFGRASSMIX2_CAL: string;
    static CALIFORNIA_DESERT2_CAL: string;
    static CALIFORNIA_DESERT3_CAL: string;
    static CALIFORNIA_DESERT4_CAL: string;
    static CALIFORNIA_DESERT5_CAL: string;
    static CALIFORNIA_DESERT6_CAL: string;
    static CALIFORNIA_GROUND_CLIFFTOP_CAL: string;
    static CALIFORNIA_MADRONE_FOREST_CAL: string;
    static CALIFORNIA_MADRONEFOREST2_CAL: string;
    static CALIFORNIA_GROUNDFOREST_CAL: string;
    static CARIBBEAN_GROUND1_CRB: string;
    static CARIBBEAN_GROUND2_CRB: string;
    static CARIBBEAN_GROUND3_CRB: string;
    static CARIBBEAN_GROUND4_CRB: string;
    static CARIBBEAN_GROUND6_CRB: string;
    static CARIBBEAN_GROUND7_CRB: string;
    static CARIBBEAN_CLIFF_TOP1_CRB: string;
    static CARIBBEAN_GROUNDFOREST_CRB: string;
    static CARIBBEAN_SEAFLOOR_CORAL0_CRB: string;
    static CARIBBEAN_SEAFLOOR_CORAL1_CRB: string;
    static CARIBBEAN_SEAFLOOR_CORAL2_CRB: string;
    static CARIBBEAN_SEAFLOOR_CORAL3_CRB: string;
    static CARIBBEAN_SEAFLOOR_CORAL4_CRB: string;
    static CAROLINAS_GROUND_GRASS1_CAR: string;
    static CAROLINAS_GROUND_GRASS2_CAR: string;
    static CAROLINAS_GROUND_GRASS3_CAR: string;
    static CAROLINAS_GROUND_GRASS4_CAR: string;
    static CAROLINAS_CLIFF_TOP1_CAR: string;
    static CAROLINAS_GROUND_MARSH1_CAR: string;
    static CAROLINAS_GROUND_MARSH2_CAR: string;
    static CAROLINAS_GROUND_MARSH3_CAR: string;
    static CAROLINAS_GROUNDFOREST_CAR: string;
    static CAROLINAS_COBBLESTONE: string;
    static CAROLINAS_BLACKMAP: string;
    static CAVE_CAVE_GROUND1: string;
    static CAVE_CAVE_GROUND2: string;
    static CAVE_CAVE_GROUND3: string;
    static CAVE_CAVE_GROUND4: string;
    static GREAT_LAKES_GROUND_SNOW1_GL: string;
    static GREAT_LAKES_GROUND_SNOW2_GL: string;
    static GREAT_LAKES_GROUND_SNOW3_GL: string;
    static GREAT_LAKES_GROUND_SNOW4_GL: string;
    static GREAT_LAKES_GROUND_SNOW5_GL: string;
    static GREAT_LAKES_GROUND_GRASS1_GL: string;
    static GREAT_LAKES_GROUND_GRASS2_GL: string;
    static GREAT_LAKES_GROUND_GRASS3_GL: string;
    static GREAT_LAKES_GROUND_GRASS4_GL: string;
    static GREAT_LAKES_GROUND_GRASS5_GL: string;
    static GREAT_LAKES_GROUNDFOREST_GL: string;
    static GREAT_LAKES_GROUNDFOREST_SNOW_GL: string;
    static GREAT_PLAINS_GROUND1_GP: string;
    static GREAT_PLAINS_GROUND2_GP: string;
    static GREAT_PLAINS_GROUND3_GP: string;
    static GREAT_PLAINS_GROUND4_GP: string;
    static GREAT_PLAINS_GROUND5_GP: string;
    static GREAT_PLAINS_GROUND6_GP: string;
    static GREAT_PLAINS_GROUND7_GP: string;
    static GREAT_PLAINS_GROUND8_GP: string;
    static GREAT_PLAINS_GROUNDFOREST_GP: string;
    static GREAT_PLAINS_PONDBANK_GP: string;
    static NEW_ENGLAND_GROUND1_NE: string;
    static NEW_ENGLAND_GROUND2_NE: string;
    static NEW_ENGLAND_GROUND3_NE: string;
    static NEW_ENGLAND_GROUND4_NE: string;
    static NEW_ENGLAND_GROUND5_NE: string;
    static NEW_ENGLAND_CLIFF_TOP_NE: string;
    static NEW_ENGLAND_CLIFF_EDGE_NE: string;
    static NEW_ENGLAND_CLIFF_SIDE_NE: string;
    static NEW_ENGLAND_GROUND2_CLIFF_NE: string;
    static NEW_ENGLAND_CLIFF_INLAND_TOP_NE: string;
    static NEW_ENGLAND_CLIFF_INLAND_EDGE_NE: string;
    static NEW_ENGLAND_CLIFF_INLAND_SIDE_NE: string;
    static NEW_ENGLAND_RIVER1_NE: string;
    static NEW_ENGLAND_GROUNDFOREST_NE: string;
    static NWTERRITORY_GROUND_GRASS1_NWT: string;
    static NWTERRITORY_GROUND_GRASS1A_NWT: string;
    static NWTERRITORY_GROUND_GRASS2_NWT: string;
    static NWTERRITORY_GROUND_GRASS3_NWT: string;
    static NWTERRITORY_GROUND_GRASS5_NWT: string;
    static NWTERRITORY_GROUND_SHORELINE3_NWT: string;
    static NWTERRITORY_GROUND_RIVERBED_NWT: string;
    static NWTERRITORY_GROUND_RIVERBED2_NWT: string;
    static PAMPAS_GROUND1_PAM: string;
    static PAMPAS_GROUND2_PAM: string;
    static PAMPAS_GROUND3_PAM: string;
    static PAMPAS_GROUND4_PAM: string;
    static PAMPAS_GROUND5_PAM: string;
    static PAMPAS_GROUND6_PAM: string;
    static PAMPAS_GROUNDFOREST_PAM: string;
    static PAINTEDDESERT_PD_GROUND_DIFFUSE_A: string;
    static PAINTEDDESERT_PD_GROUND_DIFFUSE_B: string;
    static PAINTEDDESERT_PD_GROUND_DIFFUSE_C: string;
    static PAINTEDDESERT_PD_GROUND_DIFFUSE_D: string;
    static PAINTEDDESERT_PD_GROUND_DIFFUSE_E: string;
    static PAINTEDDESERT_PD_GROUND_DIFFUSE_F: string;
    static PAINTEDDESERT_PD_CLIFF_DIFFUSE_A: string;
    static PAINTEDDESERT_PD_GROUND_DIFFUSE_G: string;
    static PAINTEDDESERT_PD_GROUND_DIFFUSE_H: string;
    static PAINTEDDESERT_PD_GROUND_DIFFUSE_I: string;
    static PAINTEDDESERT_PD_GROUND_DIFFUSE_J: string;
    static PAINTEDDESERT_PD_GROUND_DIFFUSE_K: string;
    static PAINTEDDESERT_PD_GROUND_DIFFUSE_L: string;
    static PATAGONIA_GROUND_GRASS1_PAT: string;
    static PATAGONIA_GROUND_GRASS2_PAT: string;
    static PATAGONIA_GROUND_GRASS3_PAT: string;
    static PATAGONIA_GROUND_DIRT1_PAT: string;
    static PATAGONIA_GROUND_DIRT2_PAT: string;
    static PATAGONIA_GROUND_DIRT3_PAT: string;
    static PATAGONIA_GROUND_SNOW1_PAT: string;
    static PATAGONIA_GROUND_SNOW2_PAT: string;
    static PATAGONIA_GROUND_SNOW3_PAT: string;
    static PATAGONIA_GROUNDFOREST_PAT: string;
    static PATAGONIA_GROUNDFOREST_SNOW_PAT: string;
    static PATAGONIA_GROUND_CLIFFTOP_PAT: string;
    static ROCKIES_GROUND1_ROC: string;
    static ROCKIES_GROUND2_ROC: string;
    static ROCKIES_GROUND3_ROC: string;
    static ROCKIES_GROUND4_ROC: string;
    static ROCKIES_GROUND5_ROC: string;
    static ROCKIES_GROUNDSNOW1_ROC: string;
    static ROCKIES_GROUNDSNOW2_ROC: string;
    static ROCKIES_GROUNDSNOW3_ROC: string;
    static ROCKIES_GROUNDSNOW4_ROC: string;
    static ROCKIES_GROUNDSNOW5_ROC: string;
    static ROCKIES_GROUNDSNOW6_ROC: string;
    static ROCKIES_GROUNDSNOW7_ROC: string;
    static ROCKIES_GROUNDSNOW8_ROC: string;
    static ROCKIES_GROUNDFORESTSNOW_ROC: string;
    static ROCKIES_GROUNDFOREST_ROC: string;
    static SAGUENAY_GROUND1_SAG: string;
    static SAGUENAY_GROUND2_SAG: string;
    static SAGUENAY_GROUND3_SAG: string;
    static SAGUENAY_GROUND4_SAG: string;
    static SAGUENAY_GROUND5_SAG: string;
    static SAGUENAY_GROUND6_SAG: string;
    static SAGUENAY_RIVER1_SAG: string;
    static SAGUENAY_GROUNDFOREST_SAG: string;
    static SONORA_GROUND1_SON: string;
    static SONORA_GROUND2_SON: string;
    static SONORA_GROUND3_SON: string;
    static SONORA_GROUND4_SON: string;
    static SONORA_GROUND5_SON: string;
    static SONORA_GROUND6_SON: string;
    static SONORA_GROUND7_SON: string;
    static SONORA_GROUND1CLIFFTOP_SON: string;
    static SONORA_CLIFF_EDGE_SON: string;
    static SONORA_GROUNDFOREST_SON: string;
    static TEXAS_GROUND1_TEX: string;
    static TEXAS_GROUND2_TEX: string;
    static TEXAS_GROUND3_TEX: string;
    static TEXAS_GROUND4_TEX: string;
    static TEXAS_GROUND5_TEX: string;
    static TEXAS_GROUND6_TEX: string;
    static TEXAS_CLIFF_EDGE_TEX: string;
    static TEXAS_CLIFF_TOP_TEX: string;
    static TEXAS_CLIFF_TOP_GRASS_TEX: string;
    static TEXAS_RIVER1_TEX: string;
    static TEXAS_RIVER2_TEX: string;
    static TEXAS_GROUNDFOREST_TEX: string;
    static TEXAS_GROUNDFORESTDIRT_TEX: string;
    static YUKON_GROUND1_YUK: string;
    static YUKON_GROUND2_YUK: string;
    static YUKON_GROUND4_YUK: string;
    static YUKON_GROUND5_YUK: string;
    static YUKON_GROUND6_YUK: string;
    static YUKON_GROUND7_YUK: string;
    static YUKON_GROUND8_YUK: string;
    static YUKON_GROUND9_YUK: string;
    static YUKON_GROUND11_YUK: string;
    static YUKON_GROUND10_YUK: string;
    static YUKON_GROUNDFOREST_YUK: string;
    static YUKON_GROUNDFORESTSNOW_YUK: string;
    static YUKON_GROUND3_YUK: string;
    static YUKON_GROUND3X_YUK: string;
    static SPC_SCORCHED01: string;
    static SPC_SCORCHED02: string;
    static SPC_SCORCHED03: string;
    static SPC_SCORCHED04: string;
    static PROPS_EAST_COLONY: string;
    static PROPS_EAST_COLONY1: string;
    static PROPS_EAST_COLONY2: string;
    static PATAGONIA_GROUND_GLACIER_PAT: string;
    static ROCKIES_CLIFFTOP_ROC: string;
    static CAROLINAS_UNDERWATER1: string;
    static CAROLINAS_UNDERWATER2: string;
    static CAROLINAS_UNDERWATER3: string;
    static NEW_ENGLAND_UNDERWATER1_NE: string;
    static NEW_ENGLAND_UNDERWATER2_NE: string;
    static SAGUENAY_UNDERWATER1_SAG: string;
    static SAGUENAY_UNDERWATER2_SAG: string;
    static SAGUENAY_UNDERWATER3_SAG: string;
    static AMAZON_RIVER1_AM: string;
    static AMAZON_RIVER2_AM: string;
    static ARAUCANIA_GROUNDSHORE1_ARA: string;
    static ARAUCANIA_GROUNDSHORE5_ARA: string;
    static ARAUCANIA_GROUNDSHORE8_ARA: string;
    static CALIFORNIA_GROUNDSHORE1_CAL: string;
    static CALIFORNIA_GROUNDSHORE2_CAL: string;
    static CALIFORNIA_GROUNDSHORE3B_CAL: string;
    static CALIFORNIA_GROUNDSHORE3C_CAL: string;
    static CALIFORNIA_GROUNDSHORE3D_CAL: string;
    static CALIFORNIA_GROUNDSHORE4_CAL: string;
    static CARIBBEAN_GROUND_SHORELINE1_CRB: string;
    static CARIBBEAN_GROUND_SHORELINE2_CRB: string;
    static CARIBBEAN_GROUND_SHORELINE3_CRB: string;
    static CAROLINAS_GROUND_SHORELINE1_CAR: string;
    static CAROLINAS_GROUND_SHORELINE2_CAR: string;
    static CAROLINAS_GROUND_SHORELINE3_CAR: string;
    static GREAT_LAKES_GROUND_SHORELINE1_GL: string;
    static GREAT_LAKES_GROUND_SHORELINE2_GL: string;
    static GREAT_LAKES_GROUND_SHORELINE3_GL: string;
    static NEW_ENGLAND_SHORELINE1_NE: string;
    static NEW_ENGLAND_SHORELINE2_NE: string;
    static NEW_ENGLAND_SHORELINE3_NE: string;
    static NEW_ENGLAND_SHORELINE4_NE: string;
    static NEW_ENGLAND_SHORELINE5_NE: string;
    static NWTERRITORY_GROUND_SHORELINE4_NWT: string;
    static PAMPAS_RIVER_SHORELINE1_PAM: string;
    static PAMPAS_RIVER_SHORELINE2_PAM: string;
    static PAMPAS_RIVER_SHORELINE3_PAM: string;
    static PATAGONIA_GROUND_SHORELINE1_PAT: string;
    static PATAGONIA_GROUND_SHORELINE2_PAT: string;
    static PATAGONIA_GROUND_SHORELINE3_PAT: string;
    static SAGUENAY_SHORELINE1_SAG: string;
    static SAGUENAY_SHORELINE2_SAG: string;
    static SAGUENAY_SHORELINE3_SAG: string;
    static YUCATAN_GROUND_SHORELINE1_YUC: string;
    static YUCATAN_GROUND_SHORELINE2_YUC: string;
    static YUCATAN_GROUND_SHORELINE3_YUC: string;
    static BAYOU_GROUND4_BAY: string;
    static BAYOU_GROUND7_BAY: string;
    static CARIBBEAN_GROUND5_CRB: string;
    static CITY_GROUND1_COB: string;
    static AMAZON_GROUND_ROAD_SPC_AMA: string;
    static CAROLINAS_GROUNDFORESTMARSH_CAR: string;
    static GREAT_LAKES_GROUND_ICE1_GL: string;
    static GREAT_LAKES_GROUND_ICE2_GL: string;
    static GREAT_LAKES_GROUND_ICE3_GL: string;
    static GREAT_PLAINS_GROUNDSPC_NONPASS_GP: string;
    static YUKON_GROUND3_SPCNONBUILD_YUK: string;
    static ROCKIESCLIFFTOP_ROC: string;
    static BORNEO_GROUND_SAND1_BORNEO: string;
    static BORNEO_GROUND_SAND2_BORNEO: string;
    static BORNEO_GROUND_SAND3_BORNEO: string;
    static BORNEO_GROUND_GRASS1_BORNEO: string;
    static BORNEO_GROUND_GRASS2_BORNEO: string;
    static BORNEO_GROUND_GRASS3_BORNEO: string;
    static BORNEO_GROUND_GRASS4_BORNEO: string;
    static BORNEO_GROUND_GRASS5_BORNEO: string;
    static BORNEO_GROUND_FOREST_BORNEO: string;
    static CEYLON_GROUND_SAND2_CEYLON: string;
    static CEYLON_GROUND_SAND3_CEYLON: string;
    static CEYLON_GROUND_SAND4_CEYLON: string;
    static CEYLON_GROUND_GRASS1_CEYLON: string;
    static CEYLON_GROUND_GRASS2_CEYLON: string;
    static CEYLON_GROUND_GRASS3_CEYLON: string;
    static CEYLON_GROUND_GRASS4_CEYLON: string;
    static CEYLON_SEAFLOOR0_CEYLON: string;
    static CEYLON_SEAFLOOR1_CEYLON: string;
    static CEYLON_SEAFLOOR2_CEYLON: string;
    static CEYLON_SEAFLOOR3_CEYLON: string;
    static CEYLON_SEAFLOOR4_CEYLON: string;
    static CEYLON_SEAFLOOR5_CEYLON: string;
    static CEYLON_CLIFFTOP_CEYLON: string;
    static COASTAL_JAPAN_GROUND_DIRT1_CO_JAPAN: string;
    static COASTAL_JAPAN_GROUND_DIRT2_CO_JAPAN: string;
    static COASTAL_JAPAN_GROUND_DIRT3_CO_JAPAN: string;
    static COASTAL_JAPAN_GROUND_DIRT4_CO_JAPAN: string;
    static COASTAL_JAPAN_GROUND_GRASS1_CO_JAPAN: string;
    static COASTAL_JAPAN_GROUND_GRASS2_CO_JAPAN: string;
    static COASTAL_JAPAN_SEAFLOOR_CORAL1_CO_JAPAN: string;
    static COASTAL_JAPAN_GROUND_GRASS3_CO_JAPAN: string;
    static COASTAL_JAPAN_GROUND_FOREST_CO_JAPAN: string;
    static DECCAN_GROUND_DIRT2_DECCAN: string;
    static DECCAN_WALL_DECCAN: string;
    static DECCAN_GROUND_GRASS1_DECCAN: string;
    static DECCAN_GROUND_GRASS2_DECCAN: string;
    static DECCAN_GROUND_GRASS3_DECCAN: string;
    static DECCAN_GROUND_GRASS4_DECCAN: string;
    static DECCAN_GROUND_DIRT3_DECCAN: string;
    static DECCAN_GROUND_DIRT4_DECCAN: string;
    static DECCAN_GROUND_DIRT5_DECCAN: string;
    static DECCAN_GROUND_FOREST_DECCAN: string;
    static HIMALAYAS_GROUND_DIRT1_HIMAL: string;
    static HIMALAYAS_GROUND_DIRT2_HIMAL: string;
    static HIMALAYAS_GROUND_DIRT3_HIMAL: string;
    static HIMALAYAS_GROUND_DIRT4_HIMAL: string;
    static HIMALAYAS_GROUND_DIRT5_HIMAL: string;
    static HIMALAYAS_GROUND_DIRT6_HIMAL: string;
    static HIMALAYAS_GROUND_DIRT7_HIMAL: string;
    static HIMALAYAS_GROUND_DIRT8_HIMAL: string;
    static HIMALAYAS_CLIFF_HIMAL_EDGE: string;
    static HIMALAYAS_CLIFF_HIMAL_TOP: string;
    static MONGOLIA_GROUND_FOREST_MONGOL: string;
    static MONGOLIA_GROUND_GRASS1_MONGOL: string;
    static MONGOLIA_GROUND_GRASS2_MONGOL: string;
    static MONGOLIA_GROUND_GRASS3_MONGOL: string;
    static MONGOLIA_GROUND_GRASS4_MONGOL: string;
    static MONGOLIA_GROUND_GRASS5_MONGOL: string;
    static MONGOLIA_GROUND_GRASS6_MONGOL: string;
    static MONGOLIA_GROUND_SAND1_MONGOL: string;
    static MONGOLIA_GROUND_SAND2_MONGOL: string;
    static MONGOLIA_GROUND_SAND3_MONGOL: string;
    static YELLOW_RIVER_FOREST_YELLOW_RIV: string;
    static YELLOW_RIVER_GRASS1_YELLOW_RIV: string;
    static YELLOW_RIVER_GRASS2_YELLOW_RIV: string;
    static YELLOW_RIVER_GRASS3_YELLOW_RIV: string;
    static YELLOW_RIVER_GRASS4_YELLOW_RIV: string;
    static YELLOW_RIVER_STONE1_YELLOW_RIV: string;
    static YELLOW_RIVER_STONE2_YELLOW_RIV: string;
    static YELLOW_RIVER_STONE3_YELLOW_RIV: string;
    static BORNEO_SHORELINE1_BORNEO: string;
    static BORNEO_SEAFLOOR1_BORNEO: string;
    static CEYLON_GROUND_SHORELINE1_CEYLON: string;
    static CEYLON_GROUND_SHORELINE2_CEYLON: string;
    static COASTAL_JAPAN_SHORELINE1_CO_JAPAN: string;
    static YELLOW_RIVER_SHORELINE1_YELLOW_RIV: string;
    static CEYLON_GROUND_SAND1_CEYLON: string;
}
