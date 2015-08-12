function EuclideanModule(stdlib, foreign, heap) {
    "use asm";

    var sqrt = stdlib.Math.sqrt;

    function square(a) {
        a = +a;
        return +(a*a);
    }

    function dist(x1, y1, x2, y2) {
        x1 = +x1;
        y1 = +y1;
        x2 = +x2;
        y2 = +y2;
        return +sqrt(+square(x1 - x2) + +square(y1 - y2));
    }

    return { dist: dist };
}
