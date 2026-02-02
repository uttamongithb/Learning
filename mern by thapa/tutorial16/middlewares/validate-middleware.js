const validate = (schema) => async (req, res, next) => {
    try {
        const parsebody = await schema.parseAsync(req.body);
        req.body = parsebody;
        next();
    } catch (err) {
        const message = err.issues[0].message;
        console.log(message);
        res.status(400).json({ msg: message })
    }
}

export default validate;