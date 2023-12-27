export class BaseError extends Error{
    constructor(data){ //생성자 , data > response.status에 작성한 예외 상황들
        super(data.message);
        this.data = data;
    }
}