import source from '../models/source';

export const tran = async(req, res) => {
    const {code} = req.body;
    try{
        const codeArray = code.split(' ');
        
        let tranz = '', tranzilation = false;
        for (var x = 0; x<codeArray.length; x++){
             source.arabic_code[x] === codeArray[x] ? tranzilation = true: tranzilation = false;  
            if(!tranzilation){
             tranz = `${tranz + codeArray[x]}`
        }  else{
            tranz = `${tranz + source.javaScript_code[x]} `;
        }
        };
        res.status(200).json({message:tranz});
    }catch (e) {
        res.status(500).json(e.message);
    }
}

