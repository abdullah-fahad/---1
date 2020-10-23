import source from '../models/source';

export const tran = async(req, res) => {
    const {code} = req.body;
    const findOne = (x) => {
        for (var y = 0; y <= source.arabic_code.length; y++)
        {
            if (x === source.arabic_code[y]){
                return y;
            }
        }
    }

    try{
        const codeArray = code.split(' ');
        let tranz = '';
        for (var x = 0; x<codeArray.length; x++){
             const find = findOne(codeArray[x]);
            if(!find){
             tranz = `${tranz + codeArray[x]}`
        }  else if(find){
            console.log(find);
            tranz = `${tranz + source.javaScript_code[find]} `;
        }
        };
        res.status(200).json({message:tranz});
    }catch (e) {
        res.status(500).json(e.message);
    }
}

