import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  //comenzamos recuperando el token
  const token = localStorage.getItem('jwt');

  //si no hay token, enviamos la solicitud original
  if (!token) {
    return next(req);
  }

  //clonamos la solicitud original y a;adimos el header Authorization
  const clonedRequest = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token}`)
  });

  //continuamos con la solicitud modificada
  return next(clonedRequest);
  
};
