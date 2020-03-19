module.exports = {
    ok: (res, data) => {
        res.status(200).json({
            error: 0,
            data: data
        });
    },

    fail: (res, err) => {
        res.status(500).json({
            error: 0,
            data: {
                message: err
            }
        });
    },

    unauth: (res) => {
        res.status(401).json({
            error: 1,
            data: {
                message: "unauthorization"
            }
        });
    }
}