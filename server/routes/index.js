import auth from './auth';
import dashboard from './dashboard';
const _compose = (f, g) => (...args) => f(g(...args));
const compose = (...fns) => fns.reduce(_compose);
const router = compose(auth, dashboard);

export default (app) => router(app);
