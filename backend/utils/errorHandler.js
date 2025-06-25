function errorHandler(func) {
    return async function(req, res, next) {
        try{
            await func(req, res, next);
        } catch(e) {
            console.error(e);
            return res.json({ error: e.message || "Error" });
        }
    }
}

export default errorHandler;