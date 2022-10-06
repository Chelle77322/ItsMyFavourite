export function errorHandler(error, request, result, next){
    if(typeof (error)=== 'string'){
        return result.status(400).json({message: error });
    }
    if(error.name === 'ValidationError'){
        return result.status(400).json({message: error.message });
    }
    if(error.name === 'UnauthorizedError'){
        return result.status(401).json({message: 'Invalid Token'});
    }
    return result.status(500).json({message: error.message });
}