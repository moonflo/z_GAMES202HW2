class PreComputeMaterial extends Material {

    constructor(vertexShader, fragmentShader, precomputeL) {
        let Mat3Value = getMat3ValueFromRGB(precomputeL);
        super({
            // 'uPrecomputeLR': {type:'matrix3fv', value: Mat3Value[0]},
            // 'uPrecomputeLG': {type:'matrix3fv', value: Mat3Value[1]},
            // 'uPrecomputeLB': {type:'matrix3fv', value: Mat3Value[2]} 
            'uPrecomputeLR': {type:'precomputeL', value: null},
            'uPrecomputeLG': {type:'precomputeL', value: null},
            'uPrecomputeLB': {type:'precomputeL', value: null} 
        },
            ['aPrecomputeLT'],  // SH factors of light transport and light
            vertexShader, fragmentShader, null);
    }
}

async function buildPreComputeMaterial(vertexPath, fragmentPath, precomputeL) {
    let vertexShader = await getShaderString(vertexPath);
    let fragmentShader = await getShaderString(fragmentPath);

    return new PreComputeMaterial(vertexShader, fragmentShader, precomputeL);
}