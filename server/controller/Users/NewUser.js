const Users = require("../../models/Users");

async function NewUser(req, res, next) {
    const {
        body: { email, password },
    } = req;

    if (!email || !password) {
        res.status(300).json({ message: "Params no fulfilled" });
        return;
    }

    const newUser = await Users.create({ email, password });

    res.status(201).json({
        message: "User created",
        details: {
            userId: newUser._id,
            email: newUser.email,
        },
    });

    next();
}

module.exports = NewUser;
