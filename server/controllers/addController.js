import source from '../models/source';
export const add = async(req, res) => {
    const {arabic, javaScript, } = req.body;
    var x = false;
    try{
          
         await source.arabic_code.forEach(element => {
            source.arabic_code[element] === arabic? x = true: x = false; 
        });
        if(x) res.status(401).json({message: "الكود الذي أدخلته موجود مسبقاً"});
        
         source.arabic_code.push(arabic);
         source.javaScript_code.push(javaScript);

    res.status(200).json({message: "تم إضافة الكود إلى قاعدة البيانات"})
    }catch(e){
        res.status(500).json(e.message);
    }
}
