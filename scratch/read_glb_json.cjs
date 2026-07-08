const fs = require('fs');
const file = 'c:\\Users\\dp771\\Portfolio-Website\\Portfolio-Website\\public\\models\\character.glb';
try {
  const data = fs.readFileSync(file);
  const chunkLength = data.readUInt32LE(12);
  const jsonBuffer = data.slice(20, 20 + chunkLength);
  const gltfJson = JSON.parse(jsonBuffer.toString('utf8'));
  
  console.log('--- GLTF Materials ---');
  if (gltfJson.materials) {
    gltfJson.materials.forEach((mat, idx) => {
      console.log(`Material #${idx}: name="${mat.name}"`);
      if (mat.pbrMetallicRoughness) {
        console.log('  baseColorFactor:', mat.pbrMetallicRoughness.baseColorFactor);
        console.log('  baseColorTexture:', mat.pbrMetallicRoughness.baseColorTexture);
      }
    });
  } else {
    console.log('No materials found.');
  }
} catch (e) {
  console.error(e);
}
