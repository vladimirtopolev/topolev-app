const jwt = require('jsonwebtoken');

module.exports = function (request, response) {
    const { identifier, password } = request.body;
    if (identifier !== 'test') {
        return response.status(401).json({ error: 'There is no user with such username' });
    }
    if (password === 'test') {
        return response.json({
            token: jwt.sign({
                user: {
                    firstName: 'Nick',
                    lastName: 'Petrov'
                }
            }, 'salt')
        });
    }
    return response.status(401).json({ error: 'Password is incorrect' });
};
