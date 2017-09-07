from functools import wraps

from django.core.exceptions import PermissionDenied
from django.contrib.auth.views import redirect_to_login
from django.shortcuts import redirect
from django.conf import settings



def administrator_required(view_func):
    @wraps(view_func)
    def wrapper(request, *args, **kwargs):
        user = request.user

        if not user.is_authenticated():
            return redirect_to_login(next=request.get_full_path(),
                                     login_url=settings.LOGIN_URL)

        if not user.is_administrator:
            raise PermissionDenied

        return view_func(request, *args, **kwargs)

    return wrapper


def guest_only(view_func):
    # todo: test!
    @wraps(view_func)
    def wrapper(request, *args, **kwargs):
        if request.user.is_authenticated():
            return redirect(request.GET.get('next', request.user.get_absolute_url()))

        return view_func(request, *args, **kwargs)

    return wrapper