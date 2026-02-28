import ImageKit from '@imagekit/nodejs';

const imagekit = new ImageKit({
    privateKey: 'private_QapLPzHL+nBJrHcHQuQqNk3J1Vk='
})

async function uploadFile(buffer){
    const  result = await imagekit.files.upload({
        file: buffer.toString('base64'),
        fileName: 'image.jpg'
    })

    return result;
};

export default uploadFile;