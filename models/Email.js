module.exports = function (sendgrid) {


    var SendEmail = function (res, emailid) {
        //        res.json({
        //            msg: 'We were unable to Send the mail, pls contact us to this number 04428171437'
        //        });

        var email = new sendgrid.Email();
        //        email.addTo('rajisekar.d@gmail.com');
        email.addTo(emailid);

        email.subject = "Send with templates app";

        email.from = 'rajisekar.d@gmail.com';
        email.text = 'Hi there!';
        email.setSubstitutions({
            ":name": ['User ']
        }); // sub = {keep: ['secret'], other: ['one', 'two']});

        // add filter settings one at a time
        email.addFilter('templates', 'enable', 1);
        email.addFilter('templates', 'template_id', 'b08b9b60-62e9-4d55-b521-faea9cd05fe7');

        // or set a filter using an object literal.
        email.setFilters({
            'templates': {
                'settings': {
                    'enable': 1
                    , 'template_id': 'b08b9b60-62e9-4d55-b521-faea9cd05fe7'
                , }
            }
        });
        sendgrid.send(email, function (err, json) {
            if (err) {
                console.log(err);
                res.json({
                    msg: 'We were unable to Send the mail, pls contact us to this number 04428171437'
                });
            } else {
                res.json({
                    msg: 'sent'
                });
            }
        });
    };
    return {
        SendEmail: SendEmail
    }
}