exports.Validation = (req, res, next) => {
    
    try {
        let str=req.body;
      if(str.name && str.calories){
       next() 
      }
      else{
          res.status(400).json({ error: "something went wrong" });
      }
   
    } catch (e) {
        res.status(400).json({ error: "something went wrong" });
    }

};
exports.UpdateValidation = (req, res, next) => {
    
    try {
        let str=req.body;
      if(str.name || str.calories){
       next() 
      }
      else{
          res.status(400).json({ error: "something went wrong" });
      }
   
    } catch (e) {
        res.status(400).json({ error: "something went wrong" });
    }

};

