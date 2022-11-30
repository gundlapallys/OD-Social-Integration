/** FileName @messages.controller
 * author @CriticalRiver
 * <summary>
 *  DAO for performing Database related operation in mySQLDB for master schema
 *  <npm>
 *      @log4js {Used for logging debug,information and errors in master module}
 *  </npm>
 * </summary>
 */
 const config = require('../config.js');

 const log4js = require('log4js');
 const logger = log4js.getLogger("messagesController");
 const axios = require('axios').default;
 const authService = require('../services/auth.service');
 const messages = require('./model/messages.model');
 const pagemessageuser = require('./model/page-message-user.model');
 const mySQLDB = require('../services/mysql.service');
 

 //fetchmessagesByID
 exports.fetchmessagesByID = (req) => {
    try {
        const pageid = req.pageid
        //console.log("Entered Controller");
        pagemessageuser.findAll({
            where: {
                pageid: {
                [Op.eq]: pageid
              }
            }
          });

        return new Promise(function(resolve, reject) {
            interestTypes.find(req)
                .sort({
                    _id: 1
                })
                .then(function(response) {
                    if (!response) {
                        reject('Interests Not found');
                    } else {
                        resolve(response);
                    }

                });
        });
    } catch (err) {
        logger.error('Error', err);
        reject(err);
    }

};