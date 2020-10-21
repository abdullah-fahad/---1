import Source from '../models/index';

export const tran = async(req, res) => {
    const {code} = req.body;
    try{
        const codeArray = code.split(' ');
        
        let tranz = '';
        for (var x = 0; x<codeArray.length; x++){
            let tranzilation = await Source.findOne({where: {arabic_code: codeArray[x]}});
            if(!tranzilation){
             tranz = `${tranz + codeArray[x]}`
        }  else{
            tranz = `${tranz + tranzilation.javaScript_code} `;
        }
        };
        res.status(200).json({message:tranz});
    }catch (e) {
        res.status(500).json(e.message);
    }
}

