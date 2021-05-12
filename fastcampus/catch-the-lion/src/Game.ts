//export 내보내질 때 지정된 이름으로 내보내짐 
// export default는 이름을 통해 내보내지 않기 때문에 import 할 때 이름이 바뀌어도 됨
import { Board, DeadZone } from './Board';

export class Game {
    readonly board = new Board();
    readonly upperDeadZone = new DeadZone('UPPER');
    readonly lowerDeadZone = new DeadZone('LOWER');

    constructor(){
        const boardContainer = document.querySelector('.board-container');
        boardContainer.firstChild.remove(); //board-container를 비우고 시작
        boardContainer.appendChild(this.board._el);
    }
}
