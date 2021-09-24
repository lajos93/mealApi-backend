"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataRoutes = void 0;
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
exports.dataRoutes = router;
var axios_1 = __importDefault(require("axios"));
router.get('/:item', function (req, res, next) {
    /*     https.get('https://www.themealdb.com/api/json/v1/1/search.php?s=pizza', (httpsRes) => {
            httpsRes.on('data', body=> {
                return res.send("dsad")
    
            });
    
        }); */
    axios_1.default.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + req.params.item)
        .then(function (response) {
        res.json(response.data);
    })
        .catch(function (error) {
        console.log(error);
    });
});
//# sourceMappingURL=dataRoutes.js.map