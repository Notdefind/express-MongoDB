function clickHandler (db) {

    const clicks = db.collection('clicks');

    this.getClicks = (req, res) => {
        
        var clickProjection = { '_id': false };
        console.log(clicks.find())
        clicks.findOne({}, clickProjection, function (err, result) {
            if (err) {
                throw err;
            }
    
            if (result) {
            res.json(result);
            } else {
            clicks.insert({ 'clicks': 0 }, function (err) {
                if (err) {
                    throw err;
                }
    
                clicks.findOne({}, clickProjection, function (err, doc) {
                    if (err) {
                        throw err;
                    }
                    
                    res.json(doc);
                });
            });
            }
        });
    };

    this.addClick = (req, res) => {
        clicks.findAndModify(
            {},
            { '_id': 1 },
            { $inc: { 'clicks': 1 } },
            function (err, result) {
                if (err) { throw err; }
                const value = result.value.clicks + 1
                res.json(value);
            }
        );
    };
    
    this.resetClicks = (req, res) => {
        clicks
            .update(
                {},
                { 'clicks': 0 },
                function (err, result) {
                    if (err) { throw err; }
                    
                    res.json('0');
                }
            );
    };
}

export default clickHandler;
