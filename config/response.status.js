import {StatusCodes} from "http-status-codes";

export const status = {
    //success
    SUCCESS: {status: StatusCodes.OK, "isSuccess": true, "code": 2000, "message": "success!"},

    //error
    // 이 예외 상황들이 config/error data 부분에 들어간다.
    
    //common err
    INTERNAL_SERVER_ERROR: {status: StatusCodes.INTERNAL_SERVER_ERROR, "isSuccess": false, "code": "COMMON000", "message": "서버 에러, 관리자에게 문의 바랍니다." },
    BAD_REQUEST: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "COMMON001", "message": "잘못된 요청입니다." },
    UNAUTHORIZED: {status: StatusCodes.UNAUTHORIZED, "isSuccess": false, "code": "COMMON002", "message": "권한이 잘못되었습니다." },
    METHOD_NOT_ALLOWED: {status: StatusCodes.METHOD_NOT_ALLOWED, "isSuccess": false, "code": "COMMON003", "message": "지원하지 않는 Http Method 입니다." },
    FORBIDDEN: {status: StatusCodes.FORBIDDEN, "isSuccess": false, "code": "COMMON004", "message": "금지된 요청입니다." },
    NOT_FOUND: {status: StatusCodes.NOT_FOUND, "isSuccess": false, "code": "COMMON005", "message": "요청한 페이지를 찾을 수 없습니다." },
    
    // db error
    PARAMETER_IS_WRONG: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "DATABASE4001", "message": "쿼리 실행 시 전달되는 파라미터가 잘못되었습니다. 파라미터 개수 혹은 파라미터 형식을 확인해주세요."},

	//member err
    MEMBER_NOT_FOUND: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "MEMBER4001", "message": "사용자가 없습니다."},

    //regist err
    AGREE_NOT_CHECK: {status: BAD_REQUEST, "isSuccess": false, "code": "REGIST4001", "message": "개인정보 이용에 동의해주셔야 회원가입이 가능합니다."},
    EMAIL_ALREADY_EXIST: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "REGIST4002", "message": "이메일이 이미 존재합니다."},
}   