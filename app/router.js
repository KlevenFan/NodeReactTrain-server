'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;
  const _jwt = middleware.jwtErr(app.config.jwt.secret);
  // router.get('/', controller.home.index);
  // router.get('/user/:id', controller.home.user);
  // router.post('/add', controller.home.add);
  // router.get('/user', controller.home.user);
  // router.post('/add_user', controller.home.addUser);
  // router.post('/edit_user', controller.home.editUser);
  // router.post('/delete_user', controller.home.deleteUser);

  router.post('/api/user/register', controller.user.register);
  router.post('/api/user/login', controller.user.login);
  router.get('/api/user/get_userinfo', _jwt, controller.user.getUserInfo);
  router.post('/api/user/edit_userinfo', _jwt, controller.user.editUserInfo);
  router.post('/api/upload', controller.upload.upload);
  router.post('/api/bill/add',  _jwt, controller.bill.add);
  router.get('/api/bill/list', _jwt, controller.bill.list);
  router.get('/api/user/test', _jwt, controller.user.test);
};
