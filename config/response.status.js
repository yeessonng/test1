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
    AGREE_NOT_CHECK: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "REGIST4001", "message": "개인정보 이용에 동의해주셔야 회원가입이 가능합니다."},
    EMAIL_ALREADY_EXIST: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "REGIST4002", "message": "가입된 이메일이 이미 존재합니다."},
    PASSWORD_NOT_CORRECT: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "REGIST4003", "message": "비밀번호가 일치하지 않습니다."},

    //town err 
    CODE_NOT_CORRECT: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "TOWN4001", "message": "타운 초대 코드를 잘못 입력하셨습니다."},
    TOWN_IS_FULL: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "TOWN4002", "message": "타운에 가입할 수 있는 최대 인원 수는 7명이며, 해당 타운은 멤버 수 초과로 가입이 불가능합니다."},
    MEMBER_ALREADY_EXIST: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "TOWN4003", "message": "타운에 이미 가입된 멤버입니다."},
    MEMBER_NOT_EXIST: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "TOWN4004", "message": "타운에 가입되지 않은 멤버입니다."},
    COIN_NOT_ENOUGH: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "TOWN4005", "message": "사용자의 코인 갯수가 부족하여 타운 코인 적립에 실패하였습니다."}
}   