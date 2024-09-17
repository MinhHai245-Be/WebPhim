const Usertoken = require('../models/Movie')

const authenticateToken = (req, res, next) => {
    const token = req.query.token; // Lấy token từ query parameter
    const usertokens = Usertoken.userTokens();
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    // Kiểm tra xem token có tồn tại trong danh sách không
    const user = usertokens.find(user => user.token === token);

    if (!user) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    // Nếu xác thực thành công, tiếp tục thực hiện các route khác
    req.user = user;
    next();
};

module.exports = authenticateToken;