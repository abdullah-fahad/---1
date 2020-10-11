import Source from '../models/index';
export const add = async(req, res) => {
    const {arabic_code, javaScript_code, } = req.body;
    try{
        const x = await Source.findOne({where: {arabic_code, javaScript_code}});
        if(x) res.status(401).json({message: "الكود الذي أدخلته موجود مسبقاً"});
         Source.create({
            arabic_code,
            javaScript_code,
        });
    res.status(200).json({message: "تم إضافة الكود إلى قاعدة البيانات"})
    }catch(e){
        res.status(500).json(e.message);
    }
}
