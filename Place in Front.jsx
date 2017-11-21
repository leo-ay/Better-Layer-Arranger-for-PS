#target photoshop

function getLayerIndex(ref)
{
  // return the idex of ALL layers
  var numOfLayers = app.activeDocument.layers.length;

  // work from the top of the stack down!
  for (var i = numOfLayers -1; i >= 0; i--)
  {
    var tempLayer = app.activeDocument.layers[i];
    if (tempLayer == ref) return i

    if (tempLayer.typename == "LayerSet")
    {
      var subDoc = app.activeDocument.layers[i];
      for (var j = numOfSubLayers -1; j >= 0; j--)
      {
        var tempSubLayer = subDoc.layers[j]
        if (tempSubLayer == ref) return j
      }
    }
  }
}


var currentActivelayer = app.activeDocument.activeLayer;
var idx = getLayerIndex(currentActivelayer);
var layerRef = app.activeDocument.layers[idx];

#target photoshop
var selectedLayer = app.getCustomOptions("selectedLayerIndex");
var selectedLayerIndex = selectedLayer.getInteger(0)
var layerToMove = app.activeDocument.layers[selectedLayerIndex];

layerToMove.move(layerRef, ElementPlacement.PLACEBEFORE);