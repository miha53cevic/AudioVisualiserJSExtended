interface Point {
    x: number,
    y: number,
}

class Renderer2D {
    private _context2D: CanvasRenderingContext2D;

    constructor(context2D: CanvasRenderingContext2D) {
        this._context2D = context2D;

        this.Width = context2D.canvas.width;
        this.Height = context2D.canvas.height;
        this.MousePos = { x: 0, y: 0 };

        context2D.canvas.addEventListener('mousemove', (evt) => {
            this.MousePos = this.GetMousePosition(context2D.canvas, evt);
        }, false);
    }

    public Width: number;
    public Height: number;
    public MousePos: Point;

    private GetMousePosition(canvas: HTMLCanvasElement, evt: globalThis.MouseEvent): Point {
        const rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }

    public Clear(colour = 'black') {
        this._context2D.fillStyle = colour;
        this._context2D.fillRect(0, 0, this.Width, this.Height);
    }

    public ClearPart(colour: string, x1: number, y1: number, x2: number, y2: number) {
        this._context2D.fillStyle = colour;
        this._context2D.fillRect(x1, y1, x2, y2);
    }

    public Translate(x: number, y: number) {
        this._context2D.translate(x, y);
    }

    public Rotate(radians: number) {
        this._context2D.rotate(radians);
    }

    public ToRadian(degrees: number) {
        return (degrees * Math.PI) / 180;
    }

    // Save current Transformation
    public Push() {
        this._context2D.save();
    }

    // Pop current Transformation from the array
    public Pop() {
        this._context2D.restore();
    }

    public ResetTransform() {
        this._context2D.setTransform(1, 0, 0, 1, 0, 0);
    }

    // Draw line from T(x1, y1) to P(x2, y2)
    public Line(x1: number, y1: number, x2: number, y2: number, colour = 'white', width = 1) {
        this._context2D.strokeStyle = colour;
        this._context2D.lineWidth = width;

        this._context2D.beginPath();
        this._context2D.moveTo(x1, y1);
        this._context2D.lineTo(x2, y2);
        this._context2D.stroke();
    }

    // Draw a filled rectangle at T(x, y) with width, height and a fillcolour
    public DrawFillRect(x: number, y: number, w: number, h: number, colour: string = 'white') {
        this._context2D.fillStyle = colour;
        this._context2D.fillRect(x, y, w, h);
    }

    // Draw an arc at S(x, y) that goes from sAngle to eAngle in radians
    public DrawArc(sx: number, sy: number, r: number, sAngle: number, eAngle: number, colour: string = 'white', width: number = 1) {
        this._context2D.strokeStyle = colour;
        this._context2D.lineWidth = width;

        this._context2D.beginPath();
        this._context2D.arc(sx, sy, r, sAngle, eAngle);
        this._context2D.stroke();
    }

    // Draw filled Text at T(x, y) with a fontSize, colour
    public DrawFillText(text: string, x: number, y: number, fontSize: number, colour: string = 'white', font: string = 'Arial') {
        this._context2D.font = fontSize + 'px ' + font;
        this._context2D.fillStyle = colour;
        this._context2D.fillText(text, x, y);
    }

    // Draw stroked Text at T(x, y) with a fontSize
    public DrawStrokeText(text: string, x: number, y: number, fontSize: number, font: string = 'Arial') {
        this._context2D.font = fontSize + 'px ' + font;
        this._context2D.strokeText(text, x, y);
    }

    // Maps values from one range to another
    public Map(s: number, a1: number, a2: number, b1: number, b2: number): number {
        return b1 + ((s - a1) * (b2 - b1)) / (a2 - a1);
    }

    // Takes a value and returns an int
    public ToInt(value: string): number {
        return Number.parseInt(value.toString());
    }

    // Takes a string and returns an int
    public ToBoolean(string: string): boolean {
        return (string == "true");
    }

    // Takes in array that contains an object with x and y and connect those points into one line
    public LineStrip(array: Point[], colour: string = 'white', width: number = 1, corner: CanvasLineJoin = 'round') {
        this._context2D.lineWidth = width;

        this._context2D.beginPath();
        this._context2D.strokeStyle = colour;
        this._context2D.lineJoin = corner;

        this._context2D.moveTo(array[0].x, array[0].y);

        for (let i = 1; i < array.length; i++) {
            this._context2D.lineTo(array[i].x, array[i].y);
        }

        this._context2D.stroke();
    }

    // Takes in desired circle center, a height array, color, width and draws a clock like strip with rectangles
    public RectCircleStrip(centerX: number, centerY: number, array: number[], colour: string = 'white', radius: number = 50, width: number = 1) {

        // Get angle to rotate for circle points
        const angle = 360 / array.length;
        for (let i = 0; i < array.length; i++) {

            // Angle in circle
            const a = i * angle;

            // Center is at 0,0 because we use translate
            const cx = 0;
            const cy = 0;
            const r = radius;

            // Circle points
            const x = cx + r * Math.cos(this.ToRadian(a));
            const y = cy + r * Math.sin(this.ToRadian(a));

            // Translate to the circle center then translate to each point and rotate it
            this.Translate(centerX / 2, centerY / 2);
            this.Translate(x, y);
            this.Rotate(this.ToRadian(a));
            this.DrawFillRect(0, 0, array[i], width, colour);

            // Must be called because rotate and translate stack
            this.ResetTransform();
        }
    }
}

export default Renderer2D;