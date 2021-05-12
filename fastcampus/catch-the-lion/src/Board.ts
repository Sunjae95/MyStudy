import { Piece } from './Piece';
export interface Position {
    row: number;
    col: number;
}

export class Cell{
    private isActive = false;
    readonly _el: HTMLElement = document.createElement('DIV');
    
    constructor(public readonly position: Position, private piece: Piece){
        this._el.classList.add('cell');
    }
    //셀위에 말 올리기
    put(piece: Piece){
        this.piece = piece;
    }
    //말가져오기
    getPiece() {
        return this.piece;
    }

    active(){
        this.isActive = true;
    }

    deactive() {
        this.isActive = false;
    }
    //각각 렌더링이 될수있게 render함
    render() {
        if (this.isActive) {
            this._el.classList.add('active');
        } else {
            this._el.classList.remove('active');
        }
        this._el.innerHTML = (this.piece) ? this.piece.render() : '';
    }
}

//여러 셀들의 집합
export class Board{
    cells: Cell[] = [];
    _el: HTMLElement = document.createElement('div');

    constructor() {
        this._el.className = 'board';
        //표만들기
        for(let row=0; row<4; row++){
            const rowEl = document.createElement('div');
            rowEl.className = 'row';
            this._el.appendChild(rowEl);

            for(let col = 0; col < 3; col++){
                const cell = new Cell({ row, col }, null);
                //cells와 element에 같이 넣어줘야된다.
                this.cells.push(cell);
                rowEl.appendChild(cell._el);
            }
        }
    }

    render(){
        this.cells.forEach(v => v.render());
    }

}

export class DeadZone {
    private cells: Cell[] = [];
    readonly deadzoneEl = document
        .getElementById(`${this.type}_deadzone`)
        .querySelector('.card-body');

    constructor(public type: 'UPPER' | 'LOWER'){
        for(let col = 0; col < 4; col++){
            const cell = new Cell({col, row: 0}, null);
            this.cells.push(cell);
            this.deadzoneEl.appendChild(cell._el);
        }
    }
    //piece가 없으면 넣어주기
    put(piece: Piece) {
        const emptyCell = this.cells.find(v=> v.getPiece() === null);
        emptyCell.put(piece);
        emptyCell.render();
    }

    render(){
        this.cells.forEach(v=> v.render());
    }
}