const {createWorker} = require('tesseract.js');


async function return_text(worker, filename){
    await worker.loadLanguage('heb')
    await worker.initialize('heb')
    const {data: {text}} = await worker.recognize(filename);
    await worker.terminate();
    return text;
    
}

async function load(filename){
    const worker = await createWorker({
        logger: m => console.log(m)
    });
    return_text(worker, filename).then(res => console.log(res))
}


let filename = "./Screenshot 2022-12-05 211133.png";
load(filename);
