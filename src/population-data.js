
Object.defineProperty(exports, "__esModule", { value: true });
exports.internetUsers = exports.usadata = exports.data = void 0;
/**
 * Countries data
 */
//tslint:disable

exports.internetUsers = [
    { 'id': 1, 'name': 'China', 'value': bubblesize(746662194), 'color': color(746662194), 'data': 746662194 },
    { 'id': 2, 'name': 'India', 'value': bubblesize(391292635), 'color': color(391292635), 'data': 391292635 },
    { 'id': 3, 'name': 'United States', 'value': bubblesize(245436423), 'color': color(245436423), 'data': 245436423 },
    { 'id': 4, 'name': 'Brazil', 'value': bubblesize(123927230), 'color': color(123927230), 'data': 123927230 },
    { 'id': 5, 'name': 'Japan', 'value': bubblesize(117528631), 'color': color(117528631), 'data': 117528631 },
    { 'id': 6, 'name': 'Russia', 'value': bubblesize(110003284), 'color': color(110003284), 'data': 110003284 },
    { 'id': 7, 'name': 'Mexico', 'value': bubblesize(75937568), 'color': color(75937568), 'data': 75937568 },
    { 'id': 8, 'name': 'Germany', 'value': bubblesize(73436503), 'color': color(73436503), 'data': 73436503 },
    { 'id': 9, 'name': 'Indonesia', 'value': bubblesize(66244991), 'color': color(66244991), 'data': 66244991 },
    { 'id': 10, 'name': 'United Kingdom', 'value': bubblesize(62354410), 'color': color(62354410), 'data': 62354410 },
    { 'id': 11, 'name': 'Philippines', 'value': bubblesize(57342723), 'color': color(57342723), 'data': 57342723 },
    { 'id': 12, 'name': 'France', 'value': bubblesize(55413854), 'color': color(55413854), 'data': 55413854 },
    { 'id': 13, 'name': 'Nigeria', 'value': bubblesize(47743541), 'color': color(47743541), 'data': 47743541 },
    { 'id': 14, 'name': 'South Africa', 'value': bubblesize(47094267), 'color': color(47094267), 'data': 47094267 },
    { 'id': 15, 'name': 'Turkey', 'value': bubblesize(46395500), 'color': color(46395500), 'data': 46395500 },
    { 'id': 16, 'name': 'Vietnam', 'value': bubblesize(43974618), 'color': color(43974618), 'data': 43974618 },
    { 'id': 17, 'name': 'Iran', 'value': bubblesize(42731675), 'color': color(42731675), 'data': 42731675 },
    { 'id': 18, 'name': 'Egypt', 'value': bubblesize(37519531), 'color': color(37519531), 'data': 37519531 },
    { 'id': 19, 'name': 'Spain', 'value': bubblesize(37337607), 'color': color(37337607), 'data': 37337607 },
    { 'id': 20, 'name': 'Italy', 'value': bubblesize(36442438), 'color': color(36442438), 'data': 36442438 },
    { 'id': 21, 'name': 'Thailand', 'value': bubblesize(32710169), 'color': color(32710169), 'data': 32710169 },
    { 'id': 22, 'name': 'Canada', 'value': bubblesize(32602776), 'color': color(32602776), 'data': 32602776 },
    { 'id': 23, 'name': 'Argentina', 'value': bubblesize(30758972), 'color': color(30758972), 'data': 30758972 },
    { 'id': 24, 'name': 'South Africa', 'value': bubblesize(30248355), 'color': color(30248355), 'data': 30248355 },
    { 'id': 25, 'name': 'Pakistan', 'value': bubblesize(29965859), 'color': color(29965859), 'data': 29965859 },
    { 'id': 26, 'name': 'Bangladesh', 'value': bubblesize(29738660), 'color': color(29738660), 'data': 29738660 },
    { 'id': 27, 'name': 'Colombia', 'value': bubblesize(28287098), 'color': color(28287098), 'data': 28287098 },
    { 'id': 28, 'name': 'Poland', 'value': bubblesize(28018492), 'color': color(28018492), 'data': 28018492 },
    { 'id': 29, 'name': 'Malaysia', 'value': bubblesize(24572446), 'color': color(24572446), 'data': 24572446 },
    { 'id': 30, 'name': 'Saudi Arabia', 'value': bubblesize(23803319), 'color': color(23803319), 'data': 23803319 },
];
function bubblesize(value) {
    var max = 1347565324;
    var min = 324366;
    var maxBox = 70 * 70 * 2 * Math.PI;
    var minBox = 3 * 3 * 2 * Math.PI;
    var box = (value - min) / (max - min) * (maxBox - minBox) + minBox;
    if (box < minBox) {
        box = minBox;
    }
    return Math.sqrt(box / (Math.PI * 2)) / 2;
}

function color(value){
        if(value>1000000 && value<30000000)
            return("green");
        else if(value<50000000 && value>30000000)
            return("blue");
        else if(value<100000000 && value>50000000)
            return("violet")
        else if(value>100000000)
            return("red");
}
