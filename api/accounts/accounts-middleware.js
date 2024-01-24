const Account = require('./accounts-model');

exports.checkAccountPayload = (req, res, next) => {
  const error = {status: 400};
  const { name, budget } = req.body;

  if(name === undefined || budget === undefined){
    error.message = 'name and budget are required'
    next(error)
  }else if (typeof name !== 'string') {
    error.message = 'name of account must be a string'
    next(error)
  } else if (name.trim().length < 3 || name.trim().length > 100){
    error.message = 'name of account must be between 3 to 100'
    next(error)
  }else if (typeof budget !== 'number' || !isNaN){ //Make sure to put !isNaN because this stands for isNotANumber and is actually a value of a number so I will not get the correct error messaging I want.
    error.message = "budget of account must be a number"
    next(error)
  } else if (budget < 0 || budget > 1000000){
    error.message = 'budget of account is to large or small'
    next(error)
  }


}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
  next()
}

exports.checkAccountId = async (req, res, next) => {
  try{
    const account = await Account.getById(req.params.id);
    if(!account){
      next({status: 404, message: 'not found'})
    } else{
      req.account = account;
      next()
    }
  }catch(err){
    next(err)    
  }
}
