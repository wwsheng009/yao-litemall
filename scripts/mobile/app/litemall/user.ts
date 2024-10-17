import { UtilsProxy } from '@lib/yao_proxy';
import { AdminUserService, IAdminUser } from '@scripts/db_services/admin/user';
import { Exception, Process } from '@yaoapps/client';

interface Login {
  mobile?: string;
  email?: string;
  username?: string;
  password?: string;
}

function getUserInfo(type, value) {
  const supportTypes = {
    email: 'email',
    mobile: 'mobile',
    username: 'name'
  };
  if (!supportTypes[type]) {
    throw new Exception(`Login type :${type} is not support`);
  }

  const [user] = AdminUserService.Get({
    select: [
      'id',
      'name',
      'password',
      'type',
      'email',
      'mobile',
      'extra',
      'status'
    ],
    wheres: [
      { column: supportTypes[type], value: value },
      { column: 'status', value: 'enabled' }
    ],
    limit: 1
  });

  return user;
}
export function Login(payload: Login) {
  const { password, email, mobile, username } = payload;

  let user = null as IAdminUser;
  if (email != null) {
    user = getUserInfo('email', email);
  } else if (mobile != null) {
    user = getUserInfo('mobile', email);
  } else if (username != null) {
    user = getUserInfo('username', username);
  }
  if (!user) {
    throw new Exception(`用户不存在`);
  }

  try {
    const password_validate = UtilsProxy.PasswordValidate(
      password,
      user.password
    );

    if (password_validate !== true) {
      throw new Exception(`密码不正确`);
    }
  } catch (error) {
    throw new Exception(`密码不正确${error.message}`);
  }
  const timeout = 60 * 60 * 8;
  const sessionId = UtilsProxy.Str().UUID(); // Process('utils.str.UUID');
  const userPayload = { ...user };
  delete userPayload.password;
  const jwtOptions = {
    timeout: timeout,
    sid: sessionId
  };
  const jwtClaims = { user_name: user.name };
  // 需要注意的是在这里无法生成studio的token,因为这个处理器只接受3个参数，
  // 而生成studio的token需要在第4个参数里传入secretkey
  const jwt = UtilsProxy.JwtMake(user.id, jwtClaims, jwtOptions);
  UtilsProxy.Session().Set('user', userPayload, timeout, sessionId);
  UtilsProxy.Session().Set('token', jwt.token, timeout, sessionId);
  UtilsProxy.Session().Set('user_id', user.id, timeout, sessionId);

  return {
    token: jwt.token,
    userInfo: {
      avatarUrl: '/static/img/avatar_default.89845f4e.png',
      nickName: user.name
    }
  };
}
export function Logout() {}

export function Info() {}
export function profile() {}
export function register() {}
export function reset() {}

export function regCaptcha() {}
export function captcha() {}

export function index() {}
