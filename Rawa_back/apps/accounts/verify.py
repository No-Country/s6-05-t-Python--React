from apps.accounts.models import User
from apps.accounts.utils import Util


def email_confirm(request, user_data):
    user = User.objects.get(email=user_data['email'])
    email_body = f'Hi  {user.username.title()} Your email is verified'
    data = {'email_body': email_body, 'to_email': user.email, 'email_subject': 'Verify your email'}

    Util.send_email(data)