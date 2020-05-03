rmSetStatusText('', 0.01);

var size = 2.0 * sqrt(cNumberNonGaiaPlayers * 2000);
rmSetMapSize(size, size);
rmTerrainInitialize(TERRAINS.ANDES_GROUND07_AND, 4.0);
rmSetMapType('sonora');
rmSetMapType('grass');
